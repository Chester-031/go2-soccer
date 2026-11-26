window.GO2_DATA = {
  "snapshotDate": "2026-11-26",
  "trainingStages": [
    {
      "label": "Initial goal-directed learning",
      "iteration": 2500,
      "seconds": 8388.6739079291,
      "cumulativeHours": 2.330187196646972,
      "envs": 4096
    },
    {
      "label": "Retention and harder starts",
      "iteration": 4000,
      "seconds": 4919.8911502007395,
      "cumulativeHours": 3.6968236272582886,
      "envs": 4096
    },
    {
      "label": "Expanded parallel training",
      "iteration": 6000,
      "seconds": 6671.858932035975,
      "cumulativeHours": 5.5501177750460595,
      "envs": 8192
    },
    {
      "label": "Recovery-aware feedback",
      "iteration": 8000,
      "seconds": 6786.559243738186,
      "cumulativeHours": 7.435273120528889,
      "envs": 8192
    },
    {
      "label": "Miss-origin practice",
      "iteration": 9000,
      "seconds": 3239.654329021927,
      "cumulativeHours": 8.335177100812757,
      "envs": 8192
    }
  ],
  "trainingSummary": {
    "iterations": 9000,
    "inheritedTransitions": 1376256000,
    "loggedTrainingSeconds": 30006.637562925927,
    "loggedTrainingHours": 8.335177100812757,
    "scope": "Selected checkpoint lineage only; excludes discarded canaries, evaluation, queue time, and non-inherited updates."
  },
  "benchmark": {
    "n": 1472,
    "earlyCount": 107,
    "finalCount": 962,
    "earlyPercent": 7.2690217391304355,
    "finalPercent": 65.35326086956522,
    "metric": "Joint task-and-stability pass rate",
    "scope": "Fixed development benchmark; cumulative improvements across policy versions, not an isolated reward ablation or held-out generalization result."
  },
  "distanceBreakdown": {
    "metric": "Stable scoring success",
    "predicate": "stable_goal AND task_goal",
    "distanceDefinition": "Initial ball-to-goal distance, not distance at contact or release.",
    "group": "Common factorial scenarios within the same fixed development benchmark",
    "orientationDegrees": [
      0,
      45,
      90,
      180
    ],
    "robotBallDistancesMeters": [
      0.8,
      1.6,
      2.4
    ],
    "casesPerFactorialCell": 16,
    "sourceSha256": "417cb3a3a2e851be90f1899525a241842514b038ed2186582430d21ba91cddbb",
    "rows": [
      {
        "distanceMeters": 2,
        "n": 192,
        "count": 189,
        "percent": 98.4375
      },
      {
        "distanceMeters": 4,
        "n": 192,
        "count": 177,
        "percent": 92.1875
      },
      {
        "distanceMeters": 6,
        "n": 192,
        "count": 144,
        "percent": 75.0
      }
    ],
    "scope": "Each distance includes 192 existing evaluation cases. Same goal, active-strike/release and strict-stability intersection as the overall benchmark; not the separate stable_kick_goal field."
  },
  "benchmarkBreakdown": {
    "metric": "Stable scoring success",
    "predicate": "stable_goal AND task_goal",
    "sourceSha256": "417cb3a3a2e851be90f1899525a241842514b038ed2186582430d21ba91cddbb",
    "n": 1472,
    "count": 962,
    "percent": 65.35326086956522,
    "rows": [
      {
        "group": "native",
        "label": "Native randomized starts",
        "n": 640,
        "count": 397,
        "percent": 62.03125000000001
      },
      {
        "group": "common",
        "label": "Common distance and orientation grid",
        "n": 576,
        "count": 510,
        "percent": 88.54166666666666
      },
      {
        "group": "joint_extreme",
        "label": "Combined extreme configurations",
        "n": 64,
        "count": 54,
        "percent": 84.375
      },
      {
        "group": "wall",
        "label": "Near-wall starts",
        "n": 64,
        "count": 1,
        "percent": 1.5625
      },
      {
        "group": "ball_behind",
        "label": "Ball-behind starts",
        "n": 64,
        "count": 0,
        "percent": 0.0
      },
      {
        "group": "recovery",
        "label": "Lying-orientation recovery starts",
        "n": 64,
        "count": 0,
        "percent": 0.0
      }
    ],
    "scope": "Complete disjoint breakdown of the same fixed development benchmark and exact shooting checkpoint. This is not the later rear-ball retrieval policy or a full skill-composition evaluation."
  },
  "otherConfigurations": {
    "label": "Other configurations outside the common distance grid",
    "n": 896,
    "count": 452,
    "percent": 50.44642857142857,
    "groups": [
      "native",
      "joint_extreme",
      "wall",
      "ball_behind",
      "recovery"
    ],
    "scope": "Complement of the 576 common-grid cases: native randomized starts, combined extreme configurations, near-wall starts, ball-behind starts and lying-orientation recovery starts. All use the same stable_goal AND task_goal predicate."
  },
  "earlyMotion": {
    "beforeMeters": 0.013,
    "afterMeters": 0.19999021291732788,
    "series": [
      {
        "iteration": 850,
        "reward": null,
        "tracking": 0.0,
        "baseContact": 0.0
      },
      {
        "iteration": 851,
        "reward": null,
        "tracking": 0.0,
        "baseContact": 0.0
      },
      {
        "iteration": 852,
        "reward": 16.273561477661133,
        "tracking": 3.843402624130249,
        "baseContact": 0.0
      },
      {
        "iteration": 853,
        "reward": 16.273561477661133,
        "tracking": 4.5551438331604,
        "baseContact": 0.0
      },
      {
        "iteration": 854,
        "reward": 17.66610336303711,
        "tracking": 5.1305389404296875,
        "baseContact": 0.0
      },
      {
        "iteration": 855,
        "reward": 17.66610336303711,
        "tracking": 5.431935787200928,
        "baseContact": 0.0
      },
      {
        "iteration": 856,
        "reward": 17.366050720214844,
        "tracking": 5.410818099975586,
        "baseContact": 0.0
      },
      {
        "iteration": 857,
        "reward": 17.366050720214844,
        "tracking": 5.3868842124938965,
        "baseContact": 0.0
      },
      {
        "iteration": 858,
        "reward": 17.70697784423828,
        "tracking": 5.357779502868652,
        "baseContact": 0.0
      },
      {
        "iteration": 859,
        "reward": 17.70697784423828,
        "tracking": 5.2834014892578125,
        "baseContact": 0.0
      },
      {
        "iteration": 860,
        "reward": 17.85932159423828,
        "tracking": 5.301381587982178,
        "baseContact": 0.0
      },
      {
        "iteration": 861,
        "reward": 17.85932159423828,
        "tracking": 5.475189685821533,
        "baseContact": 0.0
      },
      {
        "iteration": 862,
        "reward": 17.85932159423828,
        "tracking": 5.475189685821533,
        "baseContact": 0.0
      },
      {
        "iteration": 863,
        "reward": 18.44771957397461,
        "tracking": 5.608360767364502,
        "baseContact": 0.0
      },
      {
        "iteration": 864,
        "reward": 18.44771957397461,
        "tracking": 5.622137069702148,
        "baseContact": 0.0
      },
      {
        "iteration": 865,
        "reward": 18.732942581176758,
        "tracking": 5.644507884979248,
        "baseContact": 0.0
      },
      {
        "iteration": 866,
        "reward": 18.732942581176758,
        "tracking": 5.653261661529541,
        "baseContact": 0.0
      },
      {
        "iteration": 867,
        "reward": 18.350154876708984,
        "tracking": 5.623020172119141,
        "baseContact": 0.0
      },
      {
        "iteration": 868,
        "reward": 18.350154876708984,
        "tracking": 5.5963358879089355,
        "baseContact": 0.0
      },
      {
        "iteration": 869,
        "reward": 18.963890075683594,
        "tracking": 5.692599296569824,
        "baseContact": 0.0
      },
      {
        "iteration": 870,
        "reward": 18.963890075683594,
        "tracking": 5.876373767852783,
        "baseContact": 0.0
      },
      {
        "iteration": 871,
        "reward": 19.128206253051758,
        "tracking": 5.8944621086120605,
        "baseContact": 0.0
      },
      {
        "iteration": 872,
        "reward": 19.128206253051758,
        "tracking": 5.992138862609863,
        "baseContact": 0.0
      },
      {
        "iteration": 873,
        "reward": 19.128206253051758,
        "tracking": 5.992138862609863,
        "baseContact": 0.0
      },
      {
        "iteration": 874,
        "reward": 19.966529846191406,
        "tracking": 6.302960395812988,
        "baseContact": 0.0
      },
      {
        "iteration": 875,
        "reward": 19.966529846191406,
        "tracking": 6.312986850738525,
        "baseContact": 0.0
      },
      {
        "iteration": 876,
        "reward": 20.01080322265625,
        "tracking": 6.508275032043457,
        "baseContact": 0.0
      },
      {
        "iteration": 877,
        "reward": 20.01080322265625,
        "tracking": 6.562955379486084,
        "baseContact": 0.0
      },
      {
        "iteration": 878,
        "reward": 19.706893920898438,
        "tracking": 6.523039817810059,
        "baseContact": 0.0
      },
      {
        "iteration": 879,
        "reward": 19.706893920898438,
        "tracking": 6.495729446411133,
        "baseContact": 0.0
      },
      {
        "iteration": 880,
        "reward": 19.956274032592773,
        "tracking": 6.452670097351074,
        "baseContact": 0.0
      },
      {
        "iteration": 881,
        "reward": 19.956274032592773,
        "tracking": 6.389736652374268,
        "baseContact": 0.0
      },
      {
        "iteration": 882,
        "reward": 19.53986167907715,
        "tracking": 6.343914031982422,
        "baseContact": 0.0
      },
      {
        "iteration": 883,
        "reward": 19.53986167907715,
        "tracking": 6.180263519287109,
        "baseContact": 0.0
      },
      {
        "iteration": 884,
        "reward": 20.356090545654297,
        "tracking": 6.196777820587158,
        "baseContact": 0.0
      },
      {
        "iteration": 885,
        "reward": 20.356090545654297,
        "tracking": 6.708720684051514,
        "baseContact": 0.0
      },
      {
        "iteration": 886,
        "reward": 20.356090545654297,
        "tracking": 6.708720684051514,
        "baseContact": 0.0
      },
      {
        "iteration": 887,
        "reward": 20.929492950439453,
        "tracking": 6.956995010375977,
        "baseContact": 0.0
      },
      {
        "iteration": 888,
        "reward": 20.929492950439453,
        "tracking": 7.00297212600708,
        "baseContact": 0.0
      },
      {
        "iteration": 889,
        "reward": 21.59111976623535,
        "tracking": 7.028582572937012,
        "baseContact": 0.0
      },
      {
        "iteration": 890,
        "reward": 21.59111976623535,
        "tracking": 7.041997909545898,
        "baseContact": 0.0
      },
      {
        "iteration": 891,
        "reward": 21.928524017333984,
        "tracking": 7.170450210571289,
        "baseContact": 0.0
      },
      {
        "iteration": 892,
        "reward": 21.928524017333984,
        "tracking": 7.3160295486450195,
        "baseContact": 0.0
      },
      {
        "iteration": 893,
        "reward": 21.688901901245117,
        "tracking": 7.282862186431885,
        "baseContact": 0.0
      },
      {
        "iteration": 894,
        "reward": 21.688901901245117,
        "tracking": 7.198101043701172,
        "baseContact": 0.0
      },
      {
        "iteration": 895,
        "reward": 22.591136932373047,
        "tracking": 7.205446243286133,
        "baseContact": 0.0
      },
      {
        "iteration": 896,
        "reward": 22.591136932373047,
        "tracking": 7.276447296142578,
        "baseContact": 0.0
      },
      {
        "iteration": 897,
        "reward": 22.591136932373047,
        "tracking": 7.276447296142578,
        "baseContact": 0.0
      },
      {
        "iteration": 898,
        "reward": 22.588159561157227,
        "tracking": 7.543519020080566,
        "baseContact": 0.0
      },
      {
        "iteration": 899,
        "reward": 22.588159561157227,
        "tracking": 7.5711469650268555,
        "baseContact": 0.0
      },
      {
        "iteration": 900,
        "reward": 22.541793823242188,
        "tracking": 7.560869216918945,
        "baseContact": 0.0
      },
      {
        "iteration": 901,
        "reward": 22.541793823242188,
        "tracking": 7.55684757232666,
        "baseContact": 0.0
      },
      {
        "iteration": 902,
        "reward": 23.014572143554688,
        "tracking": 7.633628845214844,
        "baseContact": 0.0
      },
      {
        "iteration": 903,
        "reward": 23.014572143554688,
        "tracking": 7.701376914978027,
        "baseContact": 0.0
      },
      {
        "iteration": 904,
        "reward": 23.07768440246582,
        "tracking": 7.717533111572266,
        "baseContact": 0.0
      },
      {
        "iteration": 905,
        "reward": 23.07768440246582,
        "tracking": 7.748376369476318,
        "baseContact": 0.0
      },
      {
        "iteration": 906,
        "reward": 23.122987747192383,
        "tracking": 7.7591705322265625,
        "baseContact": 0.0
      },
      {
        "iteration": 907,
        "reward": 23.122987747192383,
        "tracking": 7.817460536956787,
        "baseContact": 0.0
      },
      {
        "iteration": 908,
        "reward": 23.122987747192383,
        "tracking": 7.817460536956787,
        "baseContact": 0.0
      },
      {
        "iteration": 909,
        "reward": 22.96186065673828,
        "tracking": 7.655750274658203,
        "baseContact": 0.0
      },
      {
        "iteration": 910,
        "reward": 22.96186065673828,
        "tracking": 7.650533676147461,
        "baseContact": 0.0
      },
      {
        "iteration": 911,
        "reward": 23.05900001525879,
        "tracking": 7.796474456787109,
        "baseContact": 0.0
      },
      {
        "iteration": 912,
        "reward": 23.05900001525879,
        "tracking": 7.837337970733643,
        "baseContact": 0.0
      },
      {
        "iteration": 913,
        "reward": 23.91372299194336,
        "tracking": 8.035360336303711,
        "baseContact": 0.0
      },
      {
        "iteration": 914,
        "reward": 23.91372299194336,
        "tracking": 8.170848846435547,
        "baseContact": 0.0
      },
      {
        "iteration": 915,
        "reward": 25.19998550415039,
        "tracking": 8.342872619628906,
        "baseContact": 0.0
      },
      {
        "iteration": 916,
        "reward": 25.19998550415039,
        "tracking": 8.594292640686035,
        "baseContact": 0.0
      },
      {
        "iteration": 917,
        "reward": 25.109603881835938,
        "tracking": 8.6285400390625,
        "baseContact": 0.0
      },
      {
        "iteration": 918,
        "reward": 25.109603881835938,
        "tracking": 8.750850677490234,
        "baseContact": 0.0
      },
      {
        "iteration": 919,
        "reward": 25.36550521850586,
        "tracking": 7.604903221130371,
        "baseContact": 0.000732421875
      },
      {
        "iteration": 920,
        "reward": 25.36550521850586,
        "tracking": 8.903995513916016,
        "baseContact": 0.00390625
      },
      {
        "iteration": 921,
        "reward": 25.36550521850586,
        "tracking": 8.903995513916016,
        "baseContact": 0.00390625
      },
      {
        "iteration": 922,
        "reward": 25.047515869140625,
        "tracking": 8.914619445800781,
        "baseContact": 0.0
      },
      {
        "iteration": 923,
        "reward": 25.047515869140625,
        "tracking": 8.985003471374512,
        "baseContact": 0.0
      },
      {
        "iteration": 924,
        "reward": 26.232681274414062,
        "tracking": 9.670843124389648,
        "baseContact": 0.0
      },
      {
        "iteration": 925,
        "reward": 26.232681274414062,
        "tracking": 9.419660568237305,
        "baseContact": 0.0
      },
      {
        "iteration": 926,
        "reward": 26.776966094970703,
        "tracking": 9.498076438903809,
        "baseContact": 0.0
      },
      {
        "iteration": 927,
        "reward": 26.776966094970703,
        "tracking": 9.616612434387207,
        "baseContact": 0.0
      },
      {
        "iteration": 928,
        "reward": 27.39780044555664,
        "tracking": 9.939544677734375,
        "baseContact": 0.0
      },
      {
        "iteration": 929,
        "reward": 27.39780044555664,
        "tracking": 9.865233421325684,
        "baseContact": 0.0
      },
      {
        "iteration": 930,
        "reward": 28.01382064819336,
        "tracking": 10.003414154052734,
        "baseContact": 0.0
      },
      {
        "iteration": 931,
        "reward": 28.01382064819336,
        "tracking": 10.09142017364502,
        "baseContact": 0.0
      },
      {
        "iteration": 932,
        "reward": 27.961767196655273,
        "tracking": 9.869279861450195,
        "baseContact": 0.0
      },
      {
        "iteration": 933,
        "reward": 28.247758865356445,
        "tracking": 9.794050216674805,
        "baseContact": 0.0
      },
      {
        "iteration": 934,
        "reward": 28.247758865356445,
        "tracking": 10.130970001220703,
        "baseContact": 0.0
      },
      {
        "iteration": 935,
        "reward": 28.446062088012695,
        "tracking": 10.101003646850586,
        "baseContact": 0.0
      },
      {
        "iteration": 936,
        "reward": 28.446062088012695,
        "tracking": 10.116531372070312,
        "baseContact": 0.0
      },
      {
        "iteration": 937,
        "reward": 27.694377899169922,
        "tracking": 10.201729774475098,
        "baseContact": 0.0
      },
      {
        "iteration": 938,
        "reward": 27.694377899169922,
        "tracking": 10.070499420166016,
        "baseContact": 0.0
      },
      {
        "iteration": 939,
        "reward": 27.7852725982666,
        "tracking": 10.233261108398438,
        "baseContact": 0.0
      },
      {
        "iteration": 940,
        "reward": 27.7852725982666,
        "tracking": 10.34502124786377,
        "baseContact": 0.0
      },
      {
        "iteration": 941,
        "reward": 27.442577362060547,
        "tracking": 10.186793327331543,
        "baseContact": 0.0
      },
      {
        "iteration": 942,
        "reward": 27.442577362060547,
        "tracking": 10.206134796142578,
        "baseContact": 0.0
      },
      {
        "iteration": 943,
        "reward": 27.3951473236084,
        "tracking": 10.246517181396484,
        "baseContact": 0.0
      },
      {
        "iteration": 944,
        "reward": 28.748809814453125,
        "tracking": 10.566389083862305,
        "baseContact": 0.0
      },
      {
        "iteration": 945,
        "reward": 28.748809814453125,
        "tracking": 10.567588806152344,
        "baseContact": 0.0
      },
      {
        "iteration": 946,
        "reward": 28.823076248168945,
        "tracking": 10.563526153564453,
        "baseContact": 0.0
      },
      {
        "iteration": 947,
        "reward": 28.823076248168945,
        "tracking": 10.468551635742188,
        "baseContact": 0.0
      },
      {
        "iteration": 948,
        "reward": 28.65495491027832,
        "tracking": 10.469436645507812,
        "baseContact": 0.0
      },
      {
        "iteration": 949,
        "reward": 28.65495491027832,
        "tracking": 10.485607147216797,
        "baseContact": 0.0
      },
      {
        "iteration": 950,
        "reward": 29.517696380615234,
        "tracking": 10.851457595825195,
        "baseContact": 0.0
      },
      {
        "iteration": 951,
        "reward": 29.517696380615234,
        "tracking": 11.068419456481934,
        "baseContact": 0.0
      },
      {
        "iteration": 952,
        "reward": 30.335628509521484,
        "tracking": 11.139118194580078,
        "baseContact": 0.0
      },
      {
        "iteration": 953,
        "reward": 30.335628509521484,
        "tracking": 11.222724914550781,
        "baseContact": 0.0
      },
      {
        "iteration": 954,
        "reward": 29.88623046875,
        "tracking": 11.180197715759277,
        "baseContact": 0.0
      },
      {
        "iteration": 955,
        "reward": 29.88623046875,
        "tracking": 11.17673397064209,
        "baseContact": 0.0
      },
      {
        "iteration": 956,
        "reward": 29.88623046875,
        "tracking": 11.17673397064209,
        "baseContact": 0.0
      },
      {
        "iteration": 957,
        "reward": 30.544816970825195,
        "tracking": 11.215280532836914,
        "baseContact": 0.0
      },
      {
        "iteration": 958,
        "reward": 30.544816970825195,
        "tracking": 11.280516624450684,
        "baseContact": 0.0
      },
      {
        "iteration": 959,
        "reward": 30.587467193603516,
        "tracking": 11.57771110534668,
        "baseContact": 0.0
      },
      {
        "iteration": 960,
        "reward": 30.587467193603516,
        "tracking": 11.33098316192627,
        "baseContact": 0.0
      },
      {
        "iteration": 961,
        "reward": 30.707399368286133,
        "tracking": 11.433050155639648,
        "baseContact": 0.0
      },
      {
        "iteration": 962,
        "reward": 30.707399368286133,
        "tracking": 11.552018165588379,
        "baseContact": 0.0
      },
      {
        "iteration": 963,
        "reward": 30.5866641998291,
        "tracking": 11.500537872314453,
        "baseContact": 0.0
      },
      {
        "iteration": 964,
        "reward": 30.5866641998291,
        "tracking": 11.557188034057617,
        "baseContact": 0.0
      },
      {
        "iteration": 965,
        "reward": 31.00140380859375,
        "tracking": 11.68941879272461,
        "baseContact": 0.0
      },
      {
        "iteration": 966,
        "reward": 31.00140380859375,
        "tracking": 11.609572410583496,
        "baseContact": 0.0
      },
      {
        "iteration": 967,
        "reward": 31.03996467590332,
        "tracking": 11.690511703491211,
        "baseContact": 0.0
      },
      {
        "iteration": 968,
        "reward": 31.773405075073242,
        "tracking": 11.872364044189453,
        "baseContact": 0.0
      },
      {
        "iteration": 969,
        "reward": 31.773405075073242,
        "tracking": 11.765582084655762,
        "baseContact": 0.0
      },
      {
        "iteration": 970,
        "reward": 31.46532440185547,
        "tracking": 11.672309875488281,
        "baseContact": 0.0
      },
      {
        "iteration": 971,
        "reward": 31.46532440185547,
        "tracking": 11.844342231750488,
        "baseContact": 0.0
      },
      {
        "iteration": 972,
        "reward": 31.428741455078125,
        "tracking": 12.143880844116211,
        "baseContact": 0.0
      },
      {
        "iteration": 973,
        "reward": 31.428741455078125,
        "tracking": 11.838689804077148,
        "baseContact": 0.0
      },
      {
        "iteration": 974,
        "reward": 31.849992752075195,
        "tracking": 11.717183113098145,
        "baseContact": 0.0
      },
      {
        "iteration": 975,
        "reward": 31.849992752075195,
        "tracking": 11.98375415802002,
        "baseContact": 0.0
      },
      {
        "iteration": 976,
        "reward": 32.53966522216797,
        "tracking": 12.202970504760742,
        "baseContact": 0.0
      },
      {
        "iteration": 977,
        "reward": 32.53966522216797,
        "tracking": 12.238051414489746,
        "baseContact": 0.0
      },
      {
        "iteration": 978,
        "reward": 32.56416702270508,
        "tracking": 12.432548522949219,
        "baseContact": 0.0
      },
      {
        "iteration": 979,
        "reward": 32.60789108276367,
        "tracking": 12.321535110473633,
        "baseContact": 0.0
      },
      {
        "iteration": 980,
        "reward": 32.60789108276367,
        "tracking": 12.274035453796387,
        "baseContact": 0.0
      },
      {
        "iteration": 981,
        "reward": 32.259246826171875,
        "tracking": 12.448724746704102,
        "baseContact": 0.0
      },
      {
        "iteration": 982,
        "reward": 32.259246826171875,
        "tracking": 12.197909355163574,
        "baseContact": 0.0
      },
      {
        "iteration": 983,
        "reward": 32.48610305786133,
        "tracking": 11.847774505615234,
        "baseContact": 0.0
      },
      {
        "iteration": 984,
        "reward": 32.48610305786133,
        "tracking": 12.253896713256836,
        "baseContact": 0.0
      },
      {
        "iteration": 985,
        "reward": 32.140350341796875,
        "tracking": 12.323344230651855,
        "baseContact": 0.0
      },
      {
        "iteration": 986,
        "reward": 32.140350341796875,
        "tracking": 12.160139083862305,
        "baseContact": 0.0
      },
      {
        "iteration": 987,
        "reward": 31.359216690063477,
        "tracking": 12.050975799560547,
        "baseContact": 0.0
      },
      {
        "iteration": 988,
        "reward": 31.359216690063477,
        "tracking": 11.731717109680176,
        "baseContact": 0.0
      },
      {
        "iteration": 989,
        "reward": 31.4208984375,
        "tracking": 12.111572265625,
        "baseContact": 0.0
      },
      {
        "iteration": 990,
        "reward": 31.4208984375,
        "tracking": 12.001319885253906,
        "baseContact": 0.0
      },
      {
        "iteration": 991,
        "reward": 31.4208984375,
        "tracking": 12.001319885253906,
        "baseContact": 0.0
      },
      {
        "iteration": 992,
        "reward": 32.69469451904297,
        "tracking": 12.570117950439453,
        "baseContact": 0.0
      },
      {
        "iteration": 993,
        "reward": 32.69469451904297,
        "tracking": 12.368063926696777,
        "baseContact": 0.0
      },
      {
        "iteration": 994,
        "reward": 32.64686965942383,
        "tracking": 12.58541202545166,
        "baseContact": 0.0
      },
      {
        "iteration": 995,
        "reward": 32.64686965942383,
        "tracking": 12.237787246704102,
        "baseContact": 0.0
      },
      {
        "iteration": 996,
        "reward": 32.52293395996094,
        "tracking": 12.027738571166992,
        "baseContact": 0.0
      },
      {
        "iteration": 997,
        "reward": 32.52293395996094,
        "tracking": 12.272153854370117,
        "baseContact": 0.0
      },
      {
        "iteration": 998,
        "reward": 33.10625457763672,
        "tracking": 12.061046600341797,
        "baseContact": 0.0
      },
      {
        "iteration": 999,
        "reward": 33.10625457763672,
        "tracking": 12.432424545288086,
        "baseContact": 0.0
      },
      {
        "iteration": 1000,
        "reward": 33.878509521484375,
        "tracking": 12.8177490234375,
        "baseContact": 0.0
      },
      {
        "iteration": 1001,
        "reward": 33.878509521484375,
        "tracking": 12.906729698181152,
        "baseContact": 0.0
      },
      {
        "iteration": 1002,
        "reward": 33.86281967163086,
        "tracking": 12.756656646728516,
        "baseContact": 0.0
      },
      {
        "iteration": 1003,
        "reward": 33.155609130859375,
        "tracking": 12.450101852416992,
        "baseContact": 0.0
      },
      {
        "iteration": 1004,
        "reward": 33.155609130859375,
        "tracking": 12.651261329650879,
        "baseContact": 0.0
      },
      {
        "iteration": 1005,
        "reward": 33.48409652709961,
        "tracking": 12.64349365234375,
        "baseContact": 0.0
      },
      {
        "iteration": 1006,
        "reward": 33.48409652709961,
        "tracking": 12.800164222717285,
        "baseContact": 0.0
      },
      {
        "iteration": 1007,
        "reward": 33.11833190917969,
        "tracking": 12.693845748901367,
        "baseContact": 0.0
      },
      {
        "iteration": 1008,
        "reward": 33.11833190917969,
        "tracking": 12.802142143249512,
        "baseContact": 0.0
      },
      {
        "iteration": 1009,
        "reward": 33.89619064331055,
        "tracking": 12.852325439453125,
        "baseContact": 0.0
      },
      {
        "iteration": 1010,
        "reward": 33.89619064331055,
        "tracking": 12.91817855834961,
        "baseContact": 0.0
      },
      {
        "iteration": 1011,
        "reward": 33.971927642822266,
        "tracking": 12.84119701385498,
        "baseContact": 0.0
      },
      {
        "iteration": 1012,
        "reward": 33.971927642822266,
        "tracking": 12.786171913146973,
        "baseContact": 0.0
      },
      {
        "iteration": 1013,
        "reward": 34.02158737182617,
        "tracking": 13.016584396362305,
        "baseContact": 0.0
      },
      {
        "iteration": 1014,
        "reward": 33.82390594482422,
        "tracking": 12.997442245483398,
        "baseContact": 0.0
      },
      {
        "iteration": 1015,
        "reward": 33.82390594482422,
        "tracking": 12.944796562194824,
        "baseContact": 0.0
      },
      {
        "iteration": 1016,
        "reward": 34.347496032714844,
        "tracking": 13.021379470825195,
        "baseContact": 0.0
      },
      {
        "iteration": 1017,
        "reward": 34.347496032714844,
        "tracking": 13.214354515075684,
        "baseContact": 0.0
      },
      {
        "iteration": 1018,
        "reward": 34.03180694580078,
        "tracking": 12.65487289428711,
        "baseContact": 0.0
      },
      {
        "iteration": 1019,
        "reward": 34.03180694580078,
        "tracking": 12.925799369812012,
        "baseContact": 0.0
      },
      {
        "iteration": 1020,
        "reward": 33.64232635498047,
        "tracking": 13.158870697021484,
        "baseContact": 0.0
      },
      {
        "iteration": 1021,
        "reward": 33.64232635498047,
        "tracking": 13.20267391204834,
        "baseContact": 0.0
      },
      {
        "iteration": 1022,
        "reward": 34.2428092956543,
        "tracking": 13.416458129882812,
        "baseContact": 0.0
      },
      {
        "iteration": 1023,
        "reward": 34.2428092956543,
        "tracking": 13.177542686462402,
        "baseContact": 0.0
      },
      {
        "iteration": 1024,
        "reward": 33.83135223388672,
        "tracking": 12.771291732788086,
        "baseContact": 0.0
      },
      {
        "iteration": 1025,
        "reward": 33.83135223388672,
        "tracking": 13.080939292907715,
        "baseContact": 0.0
      },
      {
        "iteration": 1026,
        "reward": 33.83135223388672,
        "tracking": 13.080939292907715,
        "baseContact": 0.0
      },
      {
        "iteration": 1027,
        "reward": 34.08488464355469,
        "tracking": 13.346626281738281,
        "baseContact": 0.0
      },
      {
        "iteration": 1028,
        "reward": 34.08488464355469,
        "tracking": 13.206491470336914,
        "baseContact": 0.0
      },
      {
        "iteration": 1029,
        "reward": 34.168216705322266,
        "tracking": 13.247087478637695,
        "baseContact": 0.0
      },
      {
        "iteration": 1030,
        "reward": 34.168216705322266,
        "tracking": 13.118546485900879,
        "baseContact": 0.0
      },
      {
        "iteration": 1031,
        "reward": 34.12904357910156,
        "tracking": 13.435356140136719,
        "baseContact": 0.0
      },
      {
        "iteration": 1032,
        "reward": 34.12904357910156,
        "tracking": 13.163342475891113,
        "baseContact": 0.0
      },
      {
        "iteration": 1033,
        "reward": 34.861572265625,
        "tracking": 12.976848602294922,
        "baseContact": 0.0
      },
      {
        "iteration": 1034,
        "reward": 34.861572265625,
        "tracking": 13.556456565856934,
        "baseContact": 0.0
      },
      {
        "iteration": 1035,
        "reward": 34.55268859863281,
        "tracking": 13.203367233276367,
        "baseContact": 0.0
      },
      {
        "iteration": 1036,
        "reward": 34.55268859863281,
        "tracking": 13.373485565185547,
        "baseContact": 0.0
      },
      {
        "iteration": 1037,
        "reward": 34.55608367919922,
        "tracking": 13.3997802734375,
        "baseContact": 0.0
      },
      {
        "iteration": 1038,
        "reward": 35.178070068359375,
        "tracking": 13.65922737121582,
        "baseContact": 0.0
      },
      {
        "iteration": 1039,
        "reward": 35.178070068359375,
        "tracking": 13.645264625549316,
        "baseContact": 0.0
      },
      {
        "iteration": 1040,
        "reward": 35.310489654541016,
        "tracking": 13.503500938415527,
        "baseContact": 0.0
      },
      {
        "iteration": 1041,
        "reward": 35.310489654541016,
        "tracking": 13.763670921325684,
        "baseContact": 0.0
      },
      {
        "iteration": 1042,
        "reward": 35.32107925415039,
        "tracking": 13.705854415893555,
        "baseContact": 0.0
      },
      {
        "iteration": 1043,
        "reward": 35.32107925415039,
        "tracking": 13.739871978759766,
        "baseContact": 0.0
      },
      {
        "iteration": 1044,
        "reward": 34.90703582763672,
        "tracking": 13.849199295043945,
        "baseContact": 0.0
      },
      {
        "iteration": 1045,
        "reward": 34.90703582763672,
        "tracking": 13.645330429077148,
        "baseContact": 0.0
      },
      {
        "iteration": 1046,
        "reward": 35.687965393066406,
        "tracking": 13.84146499633789,
        "baseContact": 0.0
      },
      {
        "iteration": 1047,
        "reward": 35.687965393066406,
        "tracking": 13.835906028747559,
        "baseContact": 0.0
      },
      {
        "iteration": 1048,
        "reward": 35.6773796081543,
        "tracking": 13.857419967651367,
        "baseContact": 0.0
      },
      {
        "iteration": 1049,
        "reward": 35.50857162475586,
        "tracking": 13.766618728637695,
        "baseContact": 0.0
      },
      {
        "iteration": 1050,
        "reward": 35.50857162475586,
        "tracking": 13.758831024169922,
        "baseContact": 0.0
      },
      {
        "iteration": 1051,
        "reward": 35.70838928222656,
        "tracking": 13.506961822509766,
        "baseContact": 0.0
      },
      {
        "iteration": 1052,
        "reward": 35.70838928222656,
        "tracking": 13.8531494140625,
        "baseContact": 0.0
      },
      {
        "iteration": 1053,
        "reward": 35.59260940551758,
        "tracking": 14.042434692382812,
        "baseContact": 0.0
      },
      {
        "iteration": 1054,
        "reward": 35.59260940551758,
        "tracking": 13.952515602111816,
        "baseContact": 0.0
      },
      {
        "iteration": 1055,
        "reward": 35.59292221069336,
        "tracking": 14.099132537841797,
        "baseContact": 0.0
      },
      {
        "iteration": 1056,
        "reward": 35.59292221069336,
        "tracking": 13.994820594787598,
        "baseContact": 0.0
      },
      {
        "iteration": 1057,
        "reward": 35.63399887084961,
        "tracking": 14.26324462890625,
        "baseContact": 0.0
      },
      {
        "iteration": 1058,
        "reward": 35.63399887084961,
        "tracking": 13.976590156555176,
        "baseContact": 0.0
      },
      {
        "iteration": 1059,
        "reward": 35.794559478759766,
        "tracking": 14.098024368286133,
        "baseContact": 0.0
      },
      {
        "iteration": 1060,
        "reward": 35.794559478759766,
        "tracking": 14.046274185180664,
        "baseContact": 0.0
      },
      {
        "iteration": 1061,
        "reward": 35.794559478759766,
        "tracking": 14.046274185180664,
        "baseContact": 0.0
      },
      {
        "iteration": 1062,
        "reward": 35.996028900146484,
        "tracking": 13.698139190673828,
        "baseContact": 0.0
      },
      {
        "iteration": 1063,
        "reward": 35.996028900146484,
        "tracking": 14.18188762664795,
        "baseContact": 0.0
      },
      {
        "iteration": 1064,
        "reward": 36.12004852294922,
        "tracking": 13.659547805786133,
        "baseContact": 0.0
      },
      {
        "iteration": 1065,
        "reward": 36.12004852294922,
        "tracking": 14.145148277282715,
        "baseContact": 0.0
      },
      {
        "iteration": 1066,
        "reward": 36.52529525756836,
        "tracking": 14.365631103515625,
        "baseContact": 0.0
      },
      {
        "iteration": 1067,
        "reward": 36.52529525756836,
        "tracking": 14.189360618591309,
        "baseContact": 0.0
      },
      {
        "iteration": 1068,
        "reward": 36.32593536376953,
        "tracking": 14.144634246826172,
        "baseContact": 0.0
      },
      {
        "iteration": 1069,
        "reward": 36.32593536376953,
        "tracking": 14.184273719787598,
        "baseContact": 0.0
      },
      {
        "iteration": 1070,
        "reward": 35.359642028808594,
        "tracking": 14.227544784545898,
        "baseContact": 0.0
      },
      {
        "iteration": 1071,
        "reward": 35.359642028808594,
        "tracking": 14.053693771362305,
        "baseContact": 0.0
      },
      {
        "iteration": 1072,
        "reward": 35.3328971862793,
        "tracking": 14.009133338928223,
        "baseContact": 0.0
      },
      {
        "iteration": 1073,
        "reward": 36.5570182800293,
        "tracking": 14.190214157104492,
        "baseContact": 0.0
      },
      {
        "iteration": 1074,
        "reward": 36.5570182800293,
        "tracking": 14.278092384338379,
        "baseContact": 0.0
      },
      {
        "iteration": 1075,
        "reward": 35.27172088623047,
        "tracking": 14.210250854492188,
        "baseContact": 0.0
      },
      {
        "iteration": 1076,
        "reward": 35.27172088623047,
        "tracking": 13.912839889526367,
        "baseContact": 0.0
      },
      {
        "iteration": 1077,
        "reward": 35.948097229003906,
        "tracking": 14.105104446411133,
        "baseContact": 0.0
      },
      {
        "iteration": 1078,
        "reward": 35.948097229003906,
        "tracking": 14.014726638793945,
        "baseContact": 0.0
      },
      {
        "iteration": 1079,
        "reward": 36.45990753173828,
        "tracking": 14.288830757141113,
        "baseContact": 0.0
      },
      {
        "iteration": 1080,
        "reward": 36.45990753173828,
        "tracking": 14.284431457519531,
        "baseContact": 0.0
      },
      {
        "iteration": 1081,
        "reward": 36.15949630737305,
        "tracking": 13.99515438079834,
        "baseContact": 0.0
      },
      {
        "iteration": 1082,
        "reward": 36.15949630737305,
        "tracking": 14.007973670959473,
        "baseContact": 0.0
      },
      {
        "iteration": 1083,
        "reward": 36.143863677978516,
        "tracking": 14.081605911254883,
        "baseContact": 0.0
      },
      {
        "iteration": 1084,
        "reward": 36.12954330444336,
        "tracking": 14.270330429077148,
        "baseContact": 0.0
      },
      {
        "iteration": 1085,
        "reward": 36.12954330444336,
        "tracking": 14.259791374206543,
        "baseContact": 0.0
      },
      {
        "iteration": 1086,
        "reward": 36.2616081237793,
        "tracking": 14.332757949829102,
        "baseContact": 0.0
      },
      {
        "iteration": 1087,
        "reward": 36.2616081237793,
        "tracking": 14.233473777770996,
        "baseContact": 0.0
      },
      {
        "iteration": 1088,
        "reward": 36.49763107299805,
        "tracking": 14.520586013793945,
        "baseContact": 0.0
      },
      {
        "iteration": 1089,
        "reward": 36.49763107299805,
        "tracking": 14.371000289916992,
        "baseContact": 0.0
      },
      {
        "iteration": 1090,
        "reward": 36.70855712890625,
        "tracking": 14.634564399719238,
        "baseContact": 0.0
      },
      {
        "iteration": 1091,
        "reward": 36.70855712890625,
        "tracking": 14.390606880187988,
        "baseContact": 0.0
      },
      {
        "iteration": 1092,
        "reward": 37.08501052856445,
        "tracking": 14.331558227539062,
        "baseContact": 0.0
      },
      {
        "iteration": 1093,
        "reward": 37.08501052856445,
        "tracking": 14.608963012695312,
        "baseContact": 0.0
      },
      {
        "iteration": 1094,
        "reward": 36.52741622924805,
        "tracking": 14.752955436706543,
        "baseContact": 0.0
      },
      {
        "iteration": 1095,
        "reward": 36.52741622924805,
        "tracking": 14.306732177734375,
        "baseContact": 0.0
      },
      {
        "iteration": 1096,
        "reward": 36.52741622924805,
        "tracking": 14.306732177734375,
        "baseContact": 0.0
      },
      {
        "iteration": 1097,
        "reward": 36.32114791870117,
        "tracking": 14.500628471374512,
        "baseContact": 0.0
      },
      {
        "iteration": 1098,
        "reward": 36.32114791870117,
        "tracking": 14.275298118591309,
        "baseContact": 0.0
      },
      {
        "iteration": 1099,
        "reward": 36.330528259277344,
        "tracking": 14.221479415893555,
        "baseContact": 0.0
      }
    ],
    "scope": "Ball-free motion prior. Raw scalar window 850–1099; missing mean-reward entries remain null. The displacement comparison is a separate execution measurement.",
    "rewardUnit": "Logged weighted episode reward, not physical displacement"
  },
  "finalTrainingCurve": [
    {
      "iteration": 8020,
      "meanReturn": 4.8923396509854244
    },
    {
      "iteration": 8040,
      "meanReturn": 5.4931424236626185
    },
    {
      "iteration": 8060,
      "meanReturn": 7.325296596374838
    },
    {
      "iteration": 8080,
      "meanReturn": 6.9446869007511705
    },
    {
      "iteration": 8100,
      "meanReturn": 7.3648592313566335
    },
    {
      "iteration": 8120,
      "meanReturn": 7.25821249558437
    },
    {
      "iteration": 8140,
      "meanReturn": 6.881546867966255
    },
    {
      "iteration": 8160,
      "meanReturn": 6.7982392740372415
    },
    {
      "iteration": 8180,
      "meanReturn": 6.602439118187769
    },
    {
      "iteration": 8200,
      "meanReturn": 6.793154944451783
    },
    {
      "iteration": 8220,
      "meanReturn": 7.250523822968981
    },
    {
      "iteration": 8240,
      "meanReturn": 7.34691204321733
    },
    {
      "iteration": 8260,
      "meanReturn": 7.2982889603738705
    },
    {
      "iteration": 8280,
      "meanReturn": 6.877522417137142
    },
    {
      "iteration": 8300,
      "meanReturn": 6.697900150108607
    },
    {
      "iteration": 8320,
      "meanReturn": 6.7464467446194805
    },
    {
      "iteration": 8340,
      "meanReturn": 7.098323886453815
    },
    {
      "iteration": 8360,
      "meanReturn": 7.383650168853949
    },
    {
      "iteration": 8380,
      "meanReturn": 7.306141762533089
    },
    {
      "iteration": 8400,
      "meanReturn": 6.911475695772787
    },
    {
      "iteration": 8420,
      "meanReturn": 6.580006448941344
    },
    {
      "iteration": 8440,
      "meanReturn": 6.697200826050297
    },
    {
      "iteration": 8460,
      "meanReturn": 6.938985547498412
    },
    {
      "iteration": 8480,
      "meanReturn": 7.177190866079644
    },
    {
      "iteration": 8500,
      "meanReturn": 7.322569054728872
    },
    {
      "iteration": 8520,
      "meanReturn": 7.051645549327438
    },
    {
      "iteration": 8540,
      "meanReturn": 6.784773002292945
    },
    {
      "iteration": 8560,
      "meanReturn": 6.649172810227536
    },
    {
      "iteration": 8580,
      "meanReturn": 6.914625013298014
    },
    {
      "iteration": 8600,
      "meanReturn": 7.251575434444147
    },
    {
      "iteration": 8620,
      "meanReturn": 7.299252531387565
    },
    {
      "iteration": 8640,
      "meanReturn": 7.044425656417562
    },
    {
      "iteration": 8660,
      "meanReturn": 6.577992944299303
    },
    {
      "iteration": 8680,
      "meanReturn": 6.747106105452497
    },
    {
      "iteration": 8700,
      "meanReturn": 6.75961552404822
    },
    {
      "iteration": 8720,
      "meanReturn": 7.018422633613714
    },
    {
      "iteration": 8740,
      "meanReturn": 7.30946819664865
    },
    {
      "iteration": 8760,
      "meanReturn": 7.205417074652735
    },
    {
      "iteration": 8780,
      "meanReturn": 6.945437471941792
    },
    {
      "iteration": 8800,
      "meanReturn": 6.764066321070505
    },
    {
      "iteration": 8820,
      "meanReturn": 6.81503587461268
    },
    {
      "iteration": 8840,
      "meanReturn": 6.8980636976582606
    },
    {
      "iteration": 8860,
      "meanReturn": 7.133727087774604
    },
    {
      "iteration": 8880,
      "meanReturn": 7.238418712172311
    },
    {
      "iteration": 8900,
      "meanReturn": 7.146286812234263
    },
    {
      "iteration": 8920,
      "meanReturn": 7.08167596042393
    },
    {
      "iteration": 8940,
      "meanReturn": 6.951694141316266
    },
    {
      "iteration": 8960,
      "meanReturn": 6.948938393423166
    },
    {
      "iteration": 8980,
      "meanReturn": 7.050118754424965
    },
    {
      "iteration": 9000,
      "meanReturn": 7.020440125159369
    }
  ],
  "finalTrainingCurveScope": "Unweighted mean of available per-iteration mean_episode_return records in consecutive 20-iteration bins during the final 8,001–9,000 training stage; not evaluation success."
};
