/* Hero-Tier-Listen. Quelle: kingshotapp.com/heroes/tier-lists (Stand: November 2026).
   Burg/KvK: Angriffs-Leader von kingshotapp.com; Angriffs-Joiner, Garrison-Leader und Garrison-Joiner von kingshotoptimizer.com
   (Joiner-Pool dort nach erstem Skill aufgeteilt: offensiv -> Angriff, defensiv -> Garrison).
   Aufbau: TIERS[modus][rolle][generation] = { S: [...], A: [...], B: [...], C: [...], Avoid: [...] } */
window.TIER_DATA = {
  updated: '2026-11',
  source: { name: 'Kingshot WebApps (kingshotapp.com)', url: 'https://www.kingshotapp.com/heroes/tier-lists' },
  // Abweichende Quellen je Modus/Rolle
  sources: {
    'castle/atk-join': { name: 'Kingshot Optimizer (kingshotoptimizer.com)', url: 'https://kingshotoptimizer.com/heroes/tier-list/', split: true },
    'castle/gar-lead': { name: 'Kingshot Optimizer (kingshotoptimizer.com)', url: 'https://kingshotoptimizer.com/heroes/tier-list/' },
    'castle/gar-join': { name: 'Kingshot Optimizer (kingshotoptimizer.com)', url: 'https://kingshotoptimizer.com/heroes/tier-list/', split: true },
  },
  tiers: {
    "bear": {
      "leaders": {
        "1": {
          "S": [
            "Amadeus"
          ],
          "A": [
            "Helga"
          ],
          "B": [
            "Jabel",
            "Saul",
            "Howard"
          ],
          "C": [
            "Quinn",
            "Chenko",
            "Gordon"
          ]
        },
        "2": {
          "S": [
            "Amadeus",
            "Helga",
            "Marlin"
          ],
          "A": [
            "Hilde",
            "Jabel"
          ],
          "B": [
            "Zoe",
            "Quinn"
          ],
          "C": [
            "Howard",
            "Gordon",
            "Chenko"
          ]
        },
        "3": {
          "S": [
            "Amadeus",
            "Helga",
            "Marlin",
            "Petra"
          ],
          "A": [
            "Hilde"
          ],
          "B": [
            "Jabel",
            "Zoe",
            "Jaeger"
          ],
          "C": [
            "Eric"
          ]
        },
        "4": {
          "S": [
            "Rosa",
            "Margot",
            "Amadeus",
            "Petra"
          ],
          "A": [
            "Helga",
            "Hilde"
          ],
          "B": [
            "Zoe",
            "Jabel"
          ],
          "C": [
            "Alcar",
            "Eric"
          ]
        },
        "5": {
          "S": [
            "Rosa",
            "Margot",
            "Amadeus",
            "Petra"
          ],
          "A": [
            "Thrud",
            "Helga"
          ],
          "B": [
            "Zoe",
            "Jabel"
          ],
          "C": [
            "Vivian",
            "Long Fei",
            "Alcar",
            "Eric"
          ]
        },
        "6": {
          "S": [
            "Yang",
            "Rosa",
            "Amadeus",
            "Margot"
          ],
          "A": [
            "Thrud",
            "Petra",
            "Helga"
          ],
          "B": [
            "Zoe",
            "Jabel"
          ],
          "C": [
            "Sophia",
            "Triton",
            "Vivian",
            "Long Fei",
            "Alcar"
          ]
        },
        "7": {
          "S": [
            "Ava",
            "Yang",
            "Rosa",
            "Amadeus"
          ],
          "A": [
            "Wee & Woo",
            "Thrud",
            "Petra"
          ],
          "B": [
            "Zoe",
            "Jabel"
          ],
          "C": [
            "Charles",
            "Sophia",
            "Triton",
            "Alcar"
          ]
        }
      },
      "joiners": {
        "1": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo"
          ],
          "A": [
            "Amane"
          ],
          "B": [
            "Gordon",
            "Howard",
            "Quinn"
          ]
        },
        "2": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo"
          ],
          "A": [
            "Amane",
            "Hilde"
          ],
          "B": [
            "Marlin",
            "Zoe"
          ]
        },
        "3": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane"
          ],
          "A": [
            "Hilde"
          ],
          "B": [
            "Marlin",
            "Zoe",
            "Petra",
            "Jaeger"
          ]
        },
        "4": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo"
          ],
          "A": [
            "Margot",
            "Amane"
          ],
          "B": [
            "Rosa",
            "Petra",
            "Marlin",
            "Zoe"
          ]
        },
        "5": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo"
          ],
          "A": [
            "Thrud",
            "Margot",
            "Amane"
          ],
          "B": [
            "Rosa",
            "Petra",
            "Marlin",
            "Zoe"
          ]
        },
        "6": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo"
          ],
          "A": [
            "Thrud",
            "Margot",
            "Amane"
          ],
          "B": [
            "Yang",
            "Rosa",
            "Petra",
            "Marlin"
          ]
        },
        "7": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo"
          ],
          "A": [
            "Wee & Woo",
            "Margot",
            "Amane",
            "Thrud"
          ],
          "B": [
            "Yang",
            "Rosa",
            "Petra",
            "Marlin"
          ]
        }
      }
    },
    "castle": {
      "atk-lead": {
        "1": {
          "S": [
            "Amadeus"
          ],
          "A": [
            "Helga",
            "Chenko"
          ],
          "B": [
            "Jabel",
            "Saul"
          ],
          "Avoid": [
            "Howard",
            "Gordon"
          ]
        },
        "2": {
          "S": [
            "Amadeus",
            "Marlin"
          ],
          "A": [
            "Hilde",
            "Helga"
          ],
          "B": [
            "Zoe",
            "Jabel"
          ],
          "Avoid": [
            "Howard",
            "Gordon",
            "Chenko"
          ]
        },
        "3": {
          "S": [
            "Petra",
            "Marlin"
          ],
          "A": [
            "Amadeus",
            "Hilde"
          ],
          "B": [
            "Zoe",
            "Helga"
          ],
          "Avoid": [
            "Eric",
            "Jaeger",
            "Howard",
            "Jabel",
            "Saul"
          ]
        },
        "4": {
          "S": [
            "Rosa",
            "Margot",
            "Petra"
          ],
          "A": [
            "Marlin",
            "Amadeus"
          ],
          "B": [
            "Zoe",
            "Hilde"
          ],
          "Avoid": [
            "Alcar",
            "Eric",
            "Jaeger"
          ]
        },
        "5": {
          "S": [
            "Rosa",
            "Margot"
          ],
          "A": [
            "Thrud",
            "Petra"
          ],
          "B": [
            "Amadeus",
            "Marlin"
          ],
          "Avoid": [
            "Long Fei",
            "Alcar",
            "Eric"
          ]
        },
        "6": {
          "S": [
            "Yang",
            "Rosa"
          ],
          "A": [
            "Margot",
            "Thrud"
          ],
          "B": [
            "Petra",
            "Amadeus"
          ],
          "Avoid": [
            "Triton",
            "Sophia",
            "Long Fei"
          ]
        },
        "7": {
          "S": [
            "Ava",
            "Yang",
            "Rosa",
            "Amadeus"
          ],
          "A": [
            "Wee & Woo",
            "Thrud",
            "Petra"
          ],
          "B": [
            "Zoe",
            "Jabel"
          ],
          "Avoid": [
            "Charles",
            "Sophia",
            "Triton",
            "Alcar",
            "Long Fei",
            "Eric"
          ]
        }
      },
      "atk-join": {
        "1": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane"
          ],
          "C": [
            "Jabel",
            "Helga"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "2": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "3": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane"
          ],
          "B": [
            "Petra"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "4": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane",
            "Margot"
          ],
          "A": [
            "Rosa"
          ],
          "B": [
            "Petra"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "5": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane",
            "Margot"
          ],
          "A": [
            "Rosa",
            "Vivian"
          ],
          "B": [
            "Petra",
            "Thrud"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar",
            "Long Fei"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "6": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane",
            "Margot"
          ],
          "A": [
            "Rosa",
            "Vivian"
          ],
          "B": [
            "Petra",
            "Thrud",
            "Yang"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar",
            "Long Fei",
            "Sophia"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "7": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane",
            "Margot",
            "Wee & Woo",
            "Ava"
          ],
          "A": [
            "Rosa",
            "Vivian"
          ],
          "B": [
            "Petra",
            "Thrud",
            "Yang"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar",
            "Long Fei",
            "Sophia"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        }
      },
      "gar-lead": {
        "1": {
          "S": [
            "Amadeus",
            "Saul",
            "Jabel"
          ],
          "A": [
            "Helga"
          ],
          "B": [
            "Gordon",
            "Quinn",
            "Howard",
            "Chenko"
          ],
          "C": [
            "Fahd",
            "Yeonwoo",
            "Amane"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "2": {
          "S": [
            "Saul",
            "Zoe",
            "Hilde",
            "Marlin"
          ],
          "A": [
            "Amadeus",
            "Jabel"
          ],
          "B": [
            "Helga"
          ],
          "C": [
            "Gordon",
            "Quinn",
            "Howard",
            "Chenko"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana",
            "Fahd",
            "Yeonwoo",
            "Amane"
          ]
        },
        "3": {
          "S": [
            "Hilde",
            "Jaeger",
            "Eric"
          ],
          "A": [
            "Saul",
            "Marlin",
            "Zoe"
          ],
          "B": [
            "Amadeus",
            "Jabel",
            "Petra"
          ],
          "C": [
            "Helga"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana",
            "Fahd",
            "Yeonwoo",
            "Amane",
            "Quinn",
            "Gordon",
            "Howard",
            "Chenko"
          ]
        },
        "4": {
          "S": [
            "Jaeger",
            "Alcar",
            "Margot"
          ],
          "A": [
            "Eric",
            "Hilde",
            "Rosa"
          ],
          "B": [
            "Saul",
            "Marlin",
            "Zoe"
          ],
          "C": [
            "Helga",
            "Amadeus",
            "Jabel",
            "Petra"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana",
            "Fahd",
            "Yeonwoo",
            "Amane",
            "Quinn",
            "Gordon",
            "Howard",
            "Chenko"
          ]
        },
        "5": {
          "S": [
            "Margot",
            "Long Fei",
            "Thrud",
            "Vivian"
          ],
          "A": [
            "Alcar",
            "Jaeger"
          ],
          "B": [
            "Eric",
            "Hilde",
            "Rosa"
          ],
          "C": [
            "Helga",
            "Amadeus",
            "Jabel",
            "Petra",
            "Saul",
            "Marlin",
            "Zoe"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana",
            "Fahd",
            "Yeonwoo",
            "Amane",
            "Quinn",
            "Gordon",
            "Howard",
            "Chenko"
          ]
        },
        "6": {
          "S": [
            "Thrud",
            "Vivian",
            "Sophia",
            "Triton"
          ],
          "A": [
            "Yang",
            "Margot",
            "Long Fei"
          ],
          "B": [
            "Alcar",
            "Jaeger"
          ],
          "C": [
            "Helga",
            "Amadeus",
            "Jabel",
            "Petra",
            "Saul",
            "Marlin",
            "Zoe",
            "Eric",
            "Hilde",
            "Rosa"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana",
            "Fahd",
            "Yeonwoo",
            "Amane",
            "Quinn",
            "Gordon",
            "Howard",
            "Chenko"
          ]
        },
        "7": {
          "S": [
            "Thrud",
            "Sophia",
            "Charles",
            "Wee & Woo"
          ],
          "A": [
            "Ava",
            "Vivian",
            "Triton"
          ],
          "B": [
            "Yang",
            "Margot",
            "Long Fei"
          ],
          "C": [
            "Helga",
            "Amadeus",
            "Jabel",
            "Petra",
            "Saul",
            "Marlin",
            "Zoe",
            "Eric",
            "Hilde",
            "Rosa",
            "Alcar",
            "Jaeger"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana",
            "Fahd",
            "Yeonwoo",
            "Amane",
            "Quinn",
            "Gordon",
            "Howard",
            "Chenko"
          ]
        }
      },
      "gar-join": {
        "1": {
          "S": [
            "Saul",
            "Gordon",
            "Fahd"
          ],
          "A": [
            "Howard",
            "Quinn"
          ],
          "C": [
            "Jabel",
            "Helga"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "2": {
          "S": [
            "Saul",
            "Gordon",
            "Fahd",
            "Hilde"
          ],
          "A": [
            "Howard",
            "Quinn"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "3": {
          "S": [
            "Saul",
            "Gordon",
            "Fahd",
            "Hilde",
            "Eric"
          ],
          "A": [
            "Howard",
            "Quinn"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "4": {
          "S": [
            "Saul",
            "Gordon",
            "Hilde",
            "Eric"
          ],
          "A": [
            "Howard",
            "Quinn",
            "Fahd"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "5": {
          "S": [
            "Saul",
            "Gordon",
            "Hilde",
            "Eric"
          ],
          "A": [
            "Howard",
            "Quinn",
            "Fahd"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar",
            "Long Fei"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "6": {
          "S": [
            "Saul",
            "Gordon",
            "Hilde",
            "Eric",
            "Triton"
          ],
          "A": [
            "Howard",
            "Quinn",
            "Fahd"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar",
            "Long Fei",
            "Sophia"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        },
        "7": {
          "S": [
            "Saul",
            "Gordon",
            "Hilde",
            "Eric",
            "Triton",
            "Ava"
          ],
          "A": [
            "Howard",
            "Quinn",
            "Fahd",
            "Charles"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar",
            "Long Fei",
            "Sophia"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana"
          ]
        }
      }
    },
    "arena": {
      "all": {
        "1": {
          "S": [
            "Amadeus",
            "Jabel",
            "Saul"
          ],
          "A": [
            "Helga",
            "Quinn",
            "Yeonwoo"
          ],
          "B": [
            "Chenko",
            "Fahd",
            "Amane"
          ],
          "Avoid": [
            "Howard",
            "Seth",
            "Forrest"
          ]
        },
        "2": {
          "S": [
            "Zoe",
            "Marlin",
            "Hilde"
          ],
          "A": [
            "Amadeus",
            "Helga",
            "Saul"
          ],
          "B": [
            "Jabel",
            "Quinn",
            "Yeonwoo"
          ],
          "Avoid": [
            "Gordon",
            "Howard",
            "Edwin"
          ]
        },
        "3": {
          "S": [
            "Jaeger",
            "Petra",
            "Eric"
          ],
          "A": [
            "Zoe",
            "Marlin",
            "Hilde"
          ],
          "B": [
            "Amadeus",
            "Jabel",
            "Quinn"
          ],
          "Avoid": [
            "Gordon",
            "Howard",
            "Seth"
          ]
        },
        "4": {
          "S": [
            "Alcar",
            "Rosa",
            "Margot"
          ],
          "A": [
            "Eric",
            "Marlin",
            "Amadeus"
          ],
          "B": [
            "Petra",
            "Jaeger",
            "Hilde",
            "Chenko",
            "Howard",
            "Zoe",
            "Diana",
            "Jabel",
            "Helga"
          ],
          "Avoid": [
            "Saul",
            "Amane",
            "Yeonwoo",
            "Gordon",
            "Quinn",
            "Fahd"
          ]
        },
        "5": {
          "S": [
            "Long Fei",
            "Alcar",
            "Vivian",
            "Rosa",
            "Margot"
          ],
          "A": [
            "Eric",
            "Thrud",
            "Marlin",
            "Amadeus"
          ],
          "B": [
            "Petra",
            "Jaeger",
            "Hilde",
            "Chenko",
            "Howard",
            "Zoe",
            "Diana",
            "Jabel",
            "Helga"
          ],
          "Avoid": [
            "Saul",
            "Amane",
            "Yeonwoo",
            "Gordon",
            "Quinn",
            "Fahd"
          ]
        },
        "6": {
          "S": [
            "Triton",
            "Long Fei",
            "Yang",
            "Vivian"
          ],
          "A": [
            "Rosa",
            "Margot",
            "Alcar",
            "Eric",
            "Marlin",
            "Amadeus"
          ],
          "B": [
            "Sophia",
            "Thrud",
            "Petra",
            "Jaeger",
            "Hilde",
            "Chenko",
            "Howard",
            "Zoe",
            "Diana",
            "Jabel",
            "Helga"
          ],
          "Avoid": [
            "Saul",
            "Amane",
            "Yeonwoo",
            "Gordon",
            "Quinn",
            "Fahd"
          ]
        },
        "7": {
          "S": [
            "Charles",
            "Triton",
            "Long Fei",
            "Vivian",
            "Ava",
            "Yang"
          ],
          "A": [
            "Wee & Woo",
            "Rosa",
            "Margot",
            "Alcar",
            "Eric",
            "Marlin",
            "Petra",
            "Amadeus"
          ],
          "B": [
            "Thrud",
            "Sophia",
            "Jaeger",
            "Hilde",
            "Zoe",
            "Helga",
            "Jabel",
            "Chenko",
            "Howard",
            "Diana"
          ],
          "Avoid": [
            "Saul",
            "Amane",
            "Yeonwoo",
            "Gordon",
            "Quinn",
            "Fahd"
          ]
        }
      }
    }
  },
  // Truppen-Aufstellung je Modus/Generation: [Infanterie, Kavallerie, Bogenschützen] in %
  formations: {
    bear: {
      leaders: { 1: [30, 30, 40], 2: [20, 30, 50], 3: [10, 20, 70], 4: [10, 10, 80], 5: [10, 10, 80], 6: [10, 10, 80], 7: [10, 10, 80] },
      joiners: 'archers90',
    },
    castle: { attack: [50, 20, 30], garrison: [60, 40, 0] },
    arena: { 1: 'synergy', 2: 'synergy', 3: 'synergy', 4: 'tankDps', 5: 'tankDps', 6: 'tankDps', 7: 'tankDps' },
  },
};
