/* Hero-Tier-Listen. Quelle: kingshotapp.com/heroes/tier-lists (Stand: November 2026).
   Gen 8 komplett von kingshotoptimizer.com (kingshotapp.com hat nur Gen 1–7).
   Burg/KvK: Angriffs-Leader von kingshotapp.com; Angriffs-Joiner, Garrison-Leader und Garrison-Joiner von kingshotoptimizer.com
   (Joiner-Pool dort nach erstem Skill aufgeteilt: offensiv -> Angriff, defensiv -> Garrison).
   Aufbau: TIERS[modus][rolle][generation] = { S: [...], A: [...], B: [...], C: [...], Avoid: [...] } */
window.TIER_DATA = {
  "updated": "2026-11",
  "source": {
    "name": "Kingshot WebApps (kingshotapp.com)",
    "url": "https://www.kingshotapp.com/heroes/tier-lists"
  },
  "sources": {
    "castle/atk-join": {
      "name": "Kingshot Optimizer (kingshotoptimizer.com)",
      "url": "https://kingshotoptimizer.com/heroes/tier-list/",
      "split": true
    },
    "castle/gar-lead": {
      "name": "Kingshot Optimizer (kingshotoptimizer.com)",
      "url": "https://kingshotoptimizer.com/heroes/tier-list/"
    },
    "castle/gar-join": {
      "name": "Kingshot Optimizer (kingshotoptimizer.com)",
      "url": "https://kingshotoptimizer.com/heroes/tier-list/",
      "split": true
    }
  },
  "genSources": {
    "8": {
      "name": "Kingshot Optimizer (kingshotoptimizer.com)",
      "url": "https://kingshotoptimizer.com/heroes/tier-list/"
    }
  },
  "tiers": {
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
        },
        "8": {
          "S": [
            "Amadeus",
            "Ava",
            "Luna"
          ],
          "A": [
            "Helga",
            "Petra",
            "Wee & Woo",
            "Yang"
          ],
          "B": [
            "Diego",
            "Liz"
          ],
          "C": [
            "Margot",
            "Triton",
            "Alcar",
            "Zoe",
            "Thrud",
            "Rosa",
            "Vivian"
          ],
          "D": [
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Diana",
            "Fahd",
            "Howard",
            "Eric",
            "Gordon",
            "Quinn",
            "Yeonwoo",
            "Amane",
            "Chenko",
            "Saul",
            "Jabel",
            "Hilde",
            "Charles",
            "Long Fei",
            "Sophia",
            "Marlin",
            "Jaeger"
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
        },
        "8": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane",
            "Margot",
            "Vivian",
            "Ava",
            "Wee & Woo",
            "Luna"
          ],
          "A": [
            "Petra"
          ],
          "B": [
            "Rosa",
            "Yang"
          ],
          "C": [
            "Jaeger",
            "Thrud",
            "Hilde",
            "Marlin",
            "Liz"
          ],
          "D": [
            "Jabel",
            "Saul",
            "Helga",
            "Quinn",
            "Diana",
            "Gordon",
            "Howard",
            "Fahd",
            "Olive",
            "Seth",
            "Forrest",
            "Edwin",
            "Zoe",
            "Eric",
            "Alcar",
            "Long Fei",
            "Triton",
            "Sophia",
            "Charles",
            "Diego"
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
        },
        "8": {
          "S": [
            "Ava",
            "Diego",
            "Luna"
          ],
          "A": [
            "Charles",
            "Triton",
            "Liz",
            "Yang"
          ],
          "B": [
            "Long Fei",
            "Sophia",
            "Thrud",
            "Wee & Woo"
          ],
          "C": [
            "Saul",
            "Zoe",
            "Helga",
            "Jabel",
            "Hilde",
            "Eric",
            "Jaeger",
            "Marlin",
            "Margot",
            "Amadeus",
            "Alcar",
            "Petra",
            "Vivian",
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
        },
        "8": {
          "S": [
            "Amadeus",
            "Chenko",
            "Yeonwoo",
            "Amane",
            "Margot",
            "Wee & Woo",
            "Ava",
            "Luna"
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
            "Sophia",
            "Liz"
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
        },
        "8": {
          "S": [
            "Wee & Woo",
            "Diego",
            "Liz"
          ],
          "A": [
            "Charles",
            "Thrud",
            "Sophia",
            "Luna"
          ],
          "B": [
            "Yang",
            "Margot",
            "Triton",
            "Ava",
            "Vivian"
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
            "Jaeger",
            "Long Fei"
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
        },
        "8": {
          "S": [
            "Saul",
            "Gordon",
            "Hilde",
            "Triton",
            "Ava",
            "Diego"
          ],
          "A": [
            "Howard",
            "Quinn",
            "Fahd",
            "Charles",
            "Eric"
          ],
          "C": [
            "Jabel",
            "Helga",
            "Marlin",
            "Zoe",
            "Jaeger",
            "Alcar",
            "Long Fei",
            "Sophia",
            "Liz"
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
        },
        "8": {
          "S": [
            "Yang",
            "Charles",
            "Wee & Woo",
            "Diego",
            "Liz",
            "Luna"
          ],
          "A": [
            "Thrud",
            "Sophia",
            "Triton",
            "Ava"
          ],
          "B": [
            "Margot",
            "Long Fei",
            "Vivian"
          ],
          "C": [
            "Petra",
            "Rosa",
            "Alcar"
          ],
          "D": [
            "Edwin",
            "Forrest",
            "Seth",
            "Olive",
            "Fahd",
            "Diana",
            "Gordon",
            "Amane",
            "Howard",
            "Quinn",
            "Chenko",
            "Yeonwoo",
            "Helga",
            "Saul",
            "Hilde",
            "Jabel",
            "Jaeger",
            "Zoe",
            "Marlin",
            "Eric",
            "Amadeus"
          ]
        }
      }
    }
  },
  "formations": {
    "bear": {
      "leaders": {
        "1": [
          30,
          30,
          40
        ],
        "2": [
          20,
          30,
          50
        ],
        "3": [
          10,
          20,
          70
        ],
        "4": [
          10,
          10,
          80
        ],
        "5": [
          10,
          10,
          80
        ],
        "6": [
          10,
          10,
          80
        ],
        "7": [
          10,
          10,
          80
        ],
        "8": [
          10,
          10,
          80
        ]
      },
      "joiners": "archers90"
    },
    "castle": {
      "attack": [
        50,
        20,
        30
      ],
      "garrison": [
        60,
        40,
        0
      ]
    },
    "arena": {
      "1": "synergy",
      "2": "synergy",
      "3": "synergy",
      "4": "tankDps",
      "5": "tankDps",
      "6": "tankDps",
      "7": "tankDps",
      "8": "tankDps"
    }
  }
};
