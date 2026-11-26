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

  function renderScoringChart(progress, stages) {
    const target = $('#scoring-progress-chart');
    const trainingFocus = {
      2500: 'Established direct joint-control learning for physically valid scoring, starting from a randomly initialized shooting policy.',
      4000: 'Retained familiar starting conditions while adding farther and more challenging configurations to the training distribution.',
      6000: 'Expanded parallel practice from 4,096 to 8,192 environments while continuing the retained starting-state sampling strategy.',
      8000: 'Retained useful goal feedback after recoverable leg contacts while preserving stricter task and stability requirements for evaluation.',
      9000: 'Added starting states from recorded misses, with nearby and mirrored variants, alongside retained familiar and broader samples.'
    };
    function selectCheckpoint(row, selected) {
      $$('.scoring-column', target).forEach(button => button.setAttribute('aria-pressed', String(button === selected)));
      const stage = stages.find(item => item.iteration === row.iteration);
      $('#checkpoint-title').textContent = `${row.iteration.toLocaleString()} iterations · ${row.label}`;
      $('#checkpoint-method').textContent = trainingFocus[row.iteration];
      $('#checkpoint-result').textContent = `${row.percent.toFixed(1)}% · ${row.count} / ${row.n.toLocaleString()}`;
      $('#checkpoint-time').textContent = `${(stage.seconds / 3600).toFixed(2)} h at this stage · ${stage.envs.toLocaleString()} parallel environments`;
    }
    const axis = document.createElement('div'); axis.className = 'scoring-axis';
    [100, 75, 50, 25, 0].forEach(value => {
      const tick = document.createElement('span'); tick.textContent = `${value}%`; axis.append(tick);
    });
    const columns = document.createElement('div'); columns.className = 'scoring-columns';
    progress.rows.forEach((row, index) => {
      const column = document.createElement('button'); column.className = 'scoring-column'; column.type = 'button';
      column.setAttribute('aria-label', `Checkpoint ${row.iteration}: ${row.count} of ${row.n} starts passed, ${row.percent.toFixed(1)} percent`);
      column.setAttribute('aria-pressed', String(index === progress.rows.length - 1));
      column.setAttribute('aria-controls', 'checkpoint-design');
      column.addEventListener('click', () => selectCheckpoint(row, column));
      const bar = document.createElement('div'); bar.className = 'scoring-bar';
      bar.style.height = `${row.percent}%`;
      if (index === progress.rows.length - 1) bar.classList.add('scoring-bar-final');
      const value = document.createElement('strong'); value.textContent = `${row.percent.toFixed(1)}%`; bar.append(value);
      const label = document.createElement('div'); label.className = 'scoring-bar-label';
      const iteration = document.createElement('b'); iteration.textContent = `${row.iteration / 1000}k`;
      const count = document.createElement('span'); count.textContent = `${row.count} passed`;
      label.append(iteration, count); column.append(bar, label); columns.append(column);
    });
    const plot = document.createElement('div'); plot.className = 'scoring-plot'; plot.append(axis, columns);
    const caption = document.createElement('p'); caption.className = 'scoring-axis-caption';
    caption.textContent = 'PPO iteration · 1,472 fixed evaluation starts per checkpoint';
    target.replaceChildren(plot, caption);
    selectCheckpoint(progress.rows.at(-1), columns.lastElementChild);
  }

  function renderOptimization(stage) {
    $('#optimization-gain').textContent = `Net +${stage.additionalPassing} passing starts`;
    $('#optimization-detail').textContent = `${stage.parentCount} to ${stage.endpointCount} / ${stage.n.toLocaleString()} (${stage.parentPercent.toFixed(1)}% to ${stage.endpointPercent.toFixed(1)}%) in the final targeted-training stage.`;
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
    renderScoringChart(data.shootingProgress, data.trainingStages);
    renderOptimization(data.latestOptimization);
    renderDistances(data.distanceBreakdown, data.otherConfigurations);
    renderBenchmarkGroups(data.benchmarkBreakdown);
  }).catch(() => {
    $('#training-timeline').textContent = 'Detailed training data could not be loaded.';
    $('#scoring-progress-chart').textContent = 'Please reload to view the fixed-benchmark scoring results.';
    $('#distance-chart').textContent = 'Please reload to view the distance breakdown.';
  });
})();
