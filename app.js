(() => {
  'use strict';
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const heroVideo = $('.hero-video');
  const heroStart = $('.hero-start');
  const heroStatus = $('.hero-playback-status');
  let playbackTimer;
  function playbackFallback() {
    clearTimeout(playbackTimer);
    heroVideo.pause();
    heroStart.hidden = false;
    heroStart.disabled = false;
    heroStart.removeAttribute('aria-busy');
    heroStatus.hidden = false;
    $('span', heroStatus).textContent = 'Playback could not start in this browser.';
  }
  heroStart.addEventListener('click', () => {
    heroStart.disabled = true;
    heroStart.setAttribute('aria-busy', 'true');
    heroStatus.hidden = false;
    $('span', heroStatus).textContent = 'Loading the demonstration…';
    playbackTimer = setTimeout(playbackFallback, 8000);
    heroVideo.play().catch(playbackFallback);
  });
  heroVideo.addEventListener('playing', () => {
    const showVideo = () => {
      clearTimeout(playbackTimer);
      heroStart.hidden = true;
      heroStart.disabled = false;
      heroStart.removeAttribute('aria-busy');
      heroStatus.hidden = true;
    };
    if (heroVideo.requestVideoFrameCallback) heroVideo.requestVideoFrameCallback(showVideo);
    else if (heroVideo.readyState >= 2) showVideo();
  });
  heroVideo.addEventListener('error', playbackFallback);
  if (window.location.protocol === 'file:') {
    $$('[data-online-only]').forEach(element => element.hidden = true);
  }

  const tabs = $$('[data-route]');
  function activateTab(tab) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs.at(-1) : tabs[(index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      activateTab(next); next.focus();
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) $$('video').forEach(video => video.pause());
  });
  $('#print-brief').addEventListener('click', () => window.print());
  $('#copy-link').addEventListener('click', async () => {
    const shareUrl = window.location.href.split('#')[0];
    try { await navigator.clipboard.writeText(shareUrl); $('#copy-status').textContent = 'Link copied'; }
    catch { $('#copy-status').textContent = 'Copy the page address from your browser.'; }
  });

  function renderTimeline(stages) {
    const target = $('#training-timeline');
    const total = stages.reduce((sum, stage) => sum + stage.seconds, 0);
    const colors = ['#719b89', '#588e7a', '#397d68', '#216956', '#104f43'];
    stages.forEach((stage, index) => {
      const button = document.createElement('button');
      button.className = 'stage'; button.type = 'button';
      button.style.flex = `${stage.seconds / total} 1 0`;
      button.style.backgroundColor = colors[index % colors.length];
      button.setAttribute('aria-pressed', 'false');
      const iteration = stage.iteration ?? stage.throughIteration ?? stage.endIteration;
      const hours = stage.seconds / 3600;
      button.innerHTML = `<strong>${Number(iteration).toLocaleString()} it.</strong><span>${hours.toFixed(2)} h</span>`;
      button.setAttribute('aria-label', `${stage.label}: through ${iteration} iterations, ${hours.toFixed(2)} training hours`);
      button.addEventListener('click', () => {
        $$('.stage', target).forEach(item => item.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');
        $('#timeline-detail').replaceChildren();
        const strong = document.createElement('strong'); strong.textContent = stage.label;
        $('#timeline-detail').append(strong, ` · through ${Number(iteration).toLocaleString()} iterations · ${hours.toFixed(2)} h added · ${Number(stage.envs).toLocaleString()} environments`);
      });
      target.append(button);
    });
    $('#timeline-detail').textContent = 'Select a stage to inspect its logged duration and parallel environment count.';
  }

  function renderLineChart(points) {
    const data = points.map(point => ({ x: point.iteration, y: point.reward ?? point.meanReward })).filter(point => Number.isFinite(point.x) && Number.isFinite(point.y));
    const target = $('#motor-chart');
    if (!data.length) { target.textContent = 'Recorded trace unavailable.'; return; }
    const width = 570, height = 250, margin = {left: 40, right: 15, top: 15, bottom: 36};
    const xMin = Math.min(...data.map(point => point.x)), xMax = Math.max(...data.map(point => point.x));
    const yMin = Math.floor(Math.min(...data.map(point => point.y)) / 10) * 10;
    const yMax = Math.ceil(Math.max(...data.map(point => point.y)) / 10) * 10;
    const x = value => margin.left + (value - xMin) / (xMax - xMin || 1) * (width - margin.left - margin.right);
    const y = value => height - margin.bottom - (value - yMin) / (yMax - yMin || 1) * (height - margin.top - margin.bottom);
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`); svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `${data.length} recorded mean rewards between iterations ${xMin} and ${xMax}; first ${data[0].y.toFixed(2)}, last ${data.at(-1).y.toFixed(2)}. This is training reward, not a success rate.`);
    let content = `<defs><linearGradient id="trace-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b927a" stop-opacity=".18"/><stop offset="1" stop-color="#3b927a" stop-opacity="0"/></linearGradient></defs>`;
    for (let value = yMin; value <= yMax; value += 10) content += `<line class="grid-line" x1="${margin.left}" x2="${width-margin.right}" y1="${y(value)}" y2="${y(value)}"/><text x="${margin.left-10}" y="${y(value)+4}" text-anchor="end">${value}</text>`;
    const path = data.map((point, index) => `${index ? 'L' : 'M'}${x(point.x).toFixed(2)},${y(point.y).toFixed(2)}`).join(' ');
    content += `<path d="${path} L${x(xMax)},${y(yMin)} L${x(xMin)},${y(yMin)} Z" fill="url(#trace-fill)"/><path d="${path}" fill="none" stroke="#207660" stroke-width="2" stroke-linejoin="round"/>`;
    [xMin, 900, 1000, xMax].filter((value,index,items) => value>=xMin && value<=xMax && items.indexOf(value)===index).forEach(value => {content += `<text x="${x(value)}" y="${height-14}" text-anchor="middle">${value}</text>`;});
    content += `<text x="${width-15}" y="${height-1}" text-anchor="end" style="font-size:9px">PPO iteration</text>`;
    svg.innerHTML = content; target.replaceChildren(svg);
  }

  function renderDistances(breakdown, other) {
    const target = $('#distance-chart');
    const rows = [...breakdown.rows];
    if (other) rows.push({...other, other: true});
    rows.forEach(row => {
      const item = document.createElement('div');
      item.className = `distance-row${row.other ? ' distance-other' : ''}`;
      const label = document.createElement('span'); label.className = 'distance-label';
      label.textContent = row.other ? 'Other configurations' : `${row.distanceMeters} m`;
      const track = document.createElement('div'); track.className = 'distance-track';
      const fill = document.createElement('i'); fill.style.width = `${row.percent}%`; track.append(fill);
      const score = document.createElement('strong'); score.textContent = `${row.percent.toFixed(1)}%`;
      const count = document.createElement('small'); count.textContent = `${row.count} / ${row.n} cases`;
      item.append(label, track, score, count);
      item.setAttribute('aria-label', `${row.other ? 'Other configurations outside the common distance grid' : `${row.distanceMeters} meters initial ball-to-goal distance`}: ${row.count} of ${row.n} stable scoring successes, ${row.percent.toFixed(1)} percent`);
      target.append(item);
    });
  }

  function renderBenchmarkGroups(breakdown) {
    const target = $('#benchmark-groups');
    if (!target || !breakdown?.rows) return;
    breakdown.rows.forEach(group => {
      const row = document.createElement('tr');
      [group.label, `${group.count.toLocaleString()} / ${group.n.toLocaleString()}`, `${group.percent.toFixed(1)}%`].forEach(value => {
        const cell = document.createElement('td'); cell.textContent = value; row.append(cell);
      });
      target.append(row);
    });
    const total = document.createElement('tr'); total.className = 'benchmark-total';
    ['All development starts', `${breakdown.count.toLocaleString()} / ${breakdown.n.toLocaleString()}`, `${breakdown.percent.toFixed(1)}%`].forEach(value => {
      const cell = document.createElement('td'); const strong = document.createElement('strong'); strong.textContent = value; cell.append(strong); total.append(cell);
    });
    target.append(total);
  }

  const dataReady = window.GO2_DATA ? Promise.resolve(window.GO2_DATA) : fetch('data.json').then(response => {if (!response.ok) throw new Error('Data unavailable'); return response.json();});
  dataReady.then(data => {
    renderTimeline(data.trainingStages);
    renderLineChart(data.earlyMotion.series);
    renderDistances(data.distanceBreakdown, data.otherConfigurations);
    renderBenchmarkGroups(data.benchmarkBreakdown);
  }).catch(() => {
    $('#training-timeline').textContent = 'Detailed training data could not be loaded.';
    $('#motor-chart').textContent = 'Please reload to view the recorded training trace.';
    $('#distance-chart').textContent = 'Please reload to view the distance breakdown.';
  });
})();
