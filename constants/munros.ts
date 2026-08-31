import { MUNRO_REGIONS } from '../constants/munro_regions';

// Stores munro data in a dictionary, ordered from tallest to shortest
export const MUNROS = { 
    1: {
        id: 1,
        name: "Ben Nevis",
        aka: "Beinn Nibheis",
        region: MUNRO_REGIONS[4],
        altitude: 1345,
        latitude: 56.79690,
        longitude: -5.00370
    },
    2: {
        id: 2, 
        name: "Ben Macdui",
        aka: "Beinn Macduibh",
        region: MUNRO_REGIONS[8],  
        altitude: 1309, 
        latitude: 57.07042, 
        longitude: -3.66909 
    },
    3: {
        id: 3, 
        name: "Braeriach",
        region: MUNRO_REGIONS[8],
        altitude: 1296,
        latitude: 57.07830,
        longitude: -3.72837
    },
    4: {
        id: 4,
        name: "Cairn Toul",
        region: MUNRO_REGIONS[8],
        altitude: 1292,
        latitude: 57.05441,
        longitude: -3.71076
    },
    5: {
        id: 5,
        name: "Sgor an Lochan Uaine",
        aka: "The Angel's Peak",
        region: MUNRO_REGIONS[8],
        altitude: 1258,
        latitude: 57.05838,
        longitude: -3.72590
    },
    6: {
        id: 6, 
        name: "Cairn Gorm",
        region: MUNRO_REGIONS[8],
        altitude: 1245, 
        latitude: 57.11671, 
        longitude: -3.64448 
    },
    7: {
        id: 7, 
        name: "Aonach Beag",
        identifier: "Fort William",
        region: MUNRO_REGIONS[4],
        altitude: 1234, 
        latitude: 56.80000, 
        longitude: -4.95414 
    },
    8: {
        id: 8, 
        name: "Carn Mor Dearg",
        region: MUNRO_REGIONS[4],
        altitude: 1221,
        latitude: 56.80525,
        longitude: -4.98662 
    },
    9: {
        id: 9,
        name: "Aonach Mor",
        region: MUNRO_REGIONS[4],
        altitude: 1220,
        latitude: 56.81294,
        longitude: -4.96171
    },
  10: {
    id: 10, 
    name: "Ben Lawers",
    region: MUNRO_REGIONS[2],
    altitude: 1214, 
    latitude: 56.54492, 
    longitude: -4.22088 
    },
    11: {
        id: 11, 
        name: "Beinn a' Bhuird",
        identifier: "North Top",
        region: MUNRO_REGIONS[8],
        altitude: 1196, 
        latitude: 57.08759, 
        longitude: -3.49938 
    },
    12: {
        id: 12, 
        name: "Beinn Mheadhoin",
        region: MUNRO_REGIONS[8],
        altitude: 1183, 
        latitude: 57.09585, 
        longitude: -3.61146 
    },
    13: {
        id: 13, 
        name: "Carn Eighe",
        region: MUNRO_REGIONS[11],
        altitude: 1183, 
        latitude: 57.28770, 
        longitude: -5.11516 
    },
    14: {
        id: 14, 
        name: "Mam Sodhail",
        region: MUNRO_REGIONS[11],
        altitude: 1180, 
        latitude: 57.27980, 
        longitude: -5.12027 
    },
    15: {
        id: 15, 
        name: "Stob Choire Claurigh",
        region: MUNRO_REGIONS[4],
        altitude: 1178, 
        latitude: 56.82379, 
        longitude: -4.84962 
    },
    16: {
        id: 16, 
        name: "Ben More",
        identifier: "Glen Dochart",
        region: MUNRO_REGIONS[1],
        altitude: 1174, 
        latitude: 56.38595, 
        longitude: -4.54009 
    },
    17: {
        id: 17, 
        name: "Ben Avon",
        identifier: "Leabaidh an Daimh Bhuidhe",
        region: MUNRO_REGIONS[8],
        altitude: 1172, 
        latitude: 57.09935, 
        longitude: -3.43444 
    },
    18: {
        id: 18, 
        name: "Stob Binnein",
        region: MUNRO_REGIONS[1],
        altitude: 1165, 
        latitude: 56.37071, 
        longitude: -4.53577 
    },
    19: {
        id: 19, 
        name: "Beinn Bhrotain",
        region: MUNRO_REGIONS[8],
        altitude: 1157, 
        latitude: 57.00987, 
        longitude: -3.72380 
    },
    20: {
        id: 20, 
        name: "Derry Cairngorm",
        region: MUNRO_REGIONS[8],
        altitude: 1156, 
        latitude: 57.06280, 
        longitude: -3.62200 
    },
    21: {
        id: 21, 
        name: "Lochnagar",
        identifier: "Cac Carn Beag",
        region: MUNRO_REGIONS[7],
        altitude: 1156, 
        latitude: 56.96027, 
        longitude: -3.24526 
    },
    22: {
        id: 22, 
        name: "Sgurr na Lapaich",
        region: MUNRO_REGIONS[12],
        altitude: 1152, 
        latitude: 57.36931, 
        longitude: -5.05973
    },
    23: {
        id: 23, 
        name: "Sgurr nan Ceathreamhnan",
        region: MUNRO_REGIONS[11],
        altitude: 1150, 
        latitude: 57.25491, 
        longitude: -5.22273 
    },
    24: {
        id: 24, 
        name: "Bidean nam Bian",
        region: MUNRO_REGIONS[3],
        altitude: 1150, 
        latitude: 56.64276, 
        longitude: -5.02933
    },
    25: {
        id: 25, 
        name: "Ben Alder",
        region: MUNRO_REGIONS[4],
        altitude: 1148, 
        latitude: 56.81380, 
        longitude: -4.46509 
    },
    26: {
        id: 26, 
        name: "Geal-Charn",
        region: MUNRO_REGIONS[4],
        altitude: 1131, 
        latitude: 56.83783, 
        longitude: -4.50969 
    },
    27: {
        id: 27, 
        name: "Ben Lui",
        aka: "Beinn Laoigh",
        region: MUNRO_REGIONS[1],
        altitude: 1131, 
        latitude: 56.39700, 
        longitude: -4.81051 
    },
    28: {
        id: 28, 
        name: "Binnein Mor",
        region: MUNRO_REGIONS[4],
        altitude: 1129, 
        latitude: 56.75438, 
        longitude: -4.92580
    },
    29: {
        id: 29, 
        name: "Creag Meagaidh",
        region: MUNRO_REGIONS[9],
        altitude: 1128, 
        latitude: 56.95202, 
        longitude: -4.60212 
    },
    30: {
        id: 30, 
        name: "An Riabhachan",
        region: MUNRO_REGIONS[12],
        altitude: 1128, 
        latitude: 57.36244, 
        longitude: -5.10475 
    },
    31: {
        id: 31, 
        name: "Ben Cruachan",
        region: MUNRO_REGIONS[3],
        altitude: 1127, 
        latitude: 56.42684, 
        longitude: -5.13180 
    },
    32: {
        id: 32, 
        name: "Meall Garbh",
        region: MUNRO_REGIONS[2],
        altitude: 1123, 
        latitude: 56.56613, 
        longitude: -4.20770 
    },
    33: {
        id: 33, 
        name: "Beinn a' Ghlo",
        identifier: "Carn nan Gabhar",
        region: MUNRO_REGIONS[6],
        altitude: 1122, 
        latitude: 56.83985, 
        longitude: -3.68802 
    },
    34: {
        id: 34, 
        name: "A' Chraileag",
        aka: "A' Chralaig",
        region: MUNRO_REGIONS[11],
        altitude: 1119, 
        latitude: 57.18424, 
        longitude: -5.15486
    },
    35: {
        id: 35, 
        name: "An Stuc",
        region: MUNRO_REGIONS[2],
        altitude: 1117, 
        latitude: 56.56008, 
        longitude: -4.21625 
    },
    36: {
        id: 36, 
        name: "Stob Coire an Laoigh",
        region: MUNRO_REGIONS[4],
        altitude: 1117, 
        latitude: 56.81088, 
        longitude: 4.88489 
    },
    37: {
        id: 37, 
        name: "Stob Coire Easain",
        region: MUNRO_REGIONS[4],
        altitude: 1116, 
        latitude: 56.81820, 
        longitude: -4.77371 
    },
    38: {
        id: 38, 
        name: "Sgor Gaoith",
        region: MUNRO_REGIONS[8],
        altitude: 1116, 
        latitude: 57.06855, 
        longitude: -3.81086
    },
    39: {
        id: 39, 
        name: "Aonach Beag",
        identifier: "Loch Coire Cheap",
        region: MUNRO_REGIONS[4],
        altitude: 1116, 
        latitude: 56.83350, 
        longitude: -4.52918 
    },
    40: {
        id: 40, 
        name: "Monadh Mor",
        region: MUNRO_REGIONS[8],
        altitude: 1113, 
        latitude: 57.02680, 
        longitude: -3.750070 
    },
    41: {
        id: 41, 
        name: "Tom a' Choinich",
        aka: "Tom a' Choinnich",
        region: MUNRO_REGIONS[11],
        altitude: 1113, 
        latitude: 57.29955, 
        longitude: -5.04896 
    },
    42: {
        id: 42, 
        name: "Carn a' Choire Bhoidheach",
        region: MUNRO_REGIONS[7],
        altitude: 1110, 
        latitude: 56.94577, 
        longitude: -3.27271 
    },
    43: {
        id: 43, 
        name: "Sgurr nan Conbhairean",
        region: MUNRO_REGIONS[11],
        altitude: 1109, 
        latitude: 57.17762, 
        longitude: -5.09541
    },
    44: {
        id: 44, 
        name: "Sgurr Mor",
        identifier: "Fannichs",
        region: MUNRO_REGIONS[14],
        altitude: 1109, 
        latitude: 57.70013, 
        longitude: -5.01677 
    },
    45: {
        id: 45, 
        name: "Meall a' Bhuiridh",
        region: MUNRO_REGIONS[3],
        altitude: 1108, 
        latitude: 56.61222, 
        longitude: -4.85216 
    },
    46: {
        id: 46, 
        name: "Stob a' Choire Mheadhoin",
        region: MUNRO_REGIONS[4],
        altitude: 1107, 
        latitude: 56.82368, 
        longitude: -4.76020 
    },
    47: {
        id: 47, 
        name: "Beinn Ghlas",
        region: MUNRO_REGIONS[2],
        altitude: 1103, 
        latitude: 56.53600, 
        longitude: -4.23699 
    },
    48: {
        id: 48, 
        name: "Beinn Eibhinn",
        region: MUNRO_REGIONS[4],
        altitude: 1103, 
        latitude: 56.82525, 
        longitude: -4.54208 
    },
    49: {
        id: 49, 
        name: "Mullach Fraoch-choire",
        region: MUNRO_REGIONS[11],
        altitude: 1101, 
        latitude: 57.20539, 
        longitude: -5.15564 
    },
    50: {
        id: 50, 
        name: "Creise",
        region: MUNRO_REGIONS[3],
        altitude: 1100, 
        latitude: 56.61445, 
        longitude: -4.87199 
    },
    51: {
        id: 51,
        name: "Sgurr a' Mhaim",
        region: MUNRO_REGIONS[4],
        altitude: 1099,
        latitude: 56.75592,
        longitude: -5.00369
    },
    52: {
        id: 52,
        name: "Sgurr Choinnich Mor",
        region: MUNRO_REGIONS[4],
        altitude: 1094,
        latitude: 56.80044,
        longitude: -4.90396
    },
    53: {
        id: 53,
        name: "Sgurr nan Clach Geala",
        region: MUNRO_REGIONS[14],
        altitude: 1093,
        latitude: 57.69628,
        longitude: -5.04824
    },
    54: {
        id: 54,
        name: "Bynack More",
        region: MUNRO_REGIONS[8],
        altitude: 1090,
        latitude: 57.13822,
        longitude: -3.58473
    },
    55: {
        id: 55,
        name: "Stob Ghabhar",
        region: MUNRO_REGIONS[3],
        altitude: 1089,
        latitude: 56.56810,
        longitude: -4.88210
    },
    56: {
        id: 56,
        name: "Beinn a' Chlachair",
        region: MUNRO_REGIONS[4],
        altitude: 1088,
        latitude: 56.86953,
        longitude: -4.50967
    },
    57: {
        id: 57,
        name: "Beinn Dearg",
        identifier: "Loch a' Choire Ghranda",
        region: MUNRO_REGIONS[15],
        altitude: 1084,
        latitude: 57.78635,
        longitude: -4.92956
    },
    58: {
        id: 58,
        name: "Sgurr a' Choire Ghlais",
        region: MUNRO_REGIONS[12],
        altitude: 1084,
        latitude: 57.44429,
        longitude: -4.90374
    },
    59: {
        id: 59,
        name: "Schiehallion",
        region: MUNRO_REGIONS[2],
        altitude: 1083,
        latitude: 56.66694,
        longitude: -4.10023
    },
    60: {
        id: 60,
        name: "Beinn a' Chaorainn",
        identifier: "Cairngorms",
        region: MUNRO_REGIONS[8],
        altitude: 1083,
        latitude: 57.09326,
        longitude: -3.57743
    },
    61: {
        id: 61,
        name: "Beinn a' Chreachain",
        region: MUNRO_REGIONS[2],
        altitude: 1081,
        latitude: 56.56039,
        longitude: -4.64757
    },
    62: {
        id: 62,
        name: "Ben Starav",
        region: MUNRO_REGIONS[3],
        altitude: 1080,
        latitude: 56.53892,
        longitude: -5.04975
    },
    63: {
        id: 63,
        name: "Beinn Heasgarnich",
        aka: "Beinn Sheasgarnaich",
        region: MUNRO_REGIONS[2],
        altitude: 1077,
        latitude: 56.51025,
        longitude: -4.57922
    },
    64: {
        id: 64,
        name: "Beinn Dorain",
        region: MUNRO_REGIONS[2],
        altitude: 1076,
        latitude: 56.50287,
        longitude: -4.72217
    },
    65: {
        id: 65,
        name: "Stob Coire Sgreamhach",
        region: MUNRO_REGIONS[3],
        altitude: 1072,
        latitude: 56.63831,
        longitude: -5.01028
    },
    66: {
        id: 66,
        name: "Braigh Coire Chruinn-bhalgain",
        region: MUNRO_REGIONS[6],
        altitude: 1070,
        latitude: 56.83110,
        longitude: -3.72949
    },
    67: {
        id: 67,
        name: "An Socach",
        identifier: "Loch Mullardoch",
        region: MUNRO_REGIONS[12],
        altitude: 1070,
        latitude: 57.35023,
        longitude: -5.15860
    },
    68: {
        id: 68,
        name: "Sgurr Fhuaran",
        region: MUNRO_REGIONS[11],
        altitude: 1069,
        latitude: 57.19615,
        longitude: -5.34765
    },
    69: {
        id: 69,
        name: "Glas Maol",
        region: MUNRO_REGIONS[7],
        altitude: 1068,
        latitude: 56.87307,
        longitude: -3.36824
    },
    70: {
        id: 70,
        name: "Meall Corranaich",
        region: MUNRO_REGIONS[2],
        altitude: 1067,
        latitude: 56.54095,
        longitude: -4.25347
    },
    71: {
        id: 71,
        name: "Cairn of Claise",
        region: MUNRO_REGIONS[7],
        altitude: 1063,
        latitude: 56.89418,
        longitude: -3.33864
    },
    72: {
        id: 72,
        name: "Bidein a' Ghlas Thuill",
        identifier: "An Teallach",
        region: MUNRO_REGIONS[14],
        altitude: 1063,
        latitude: 57.80711,
        longitude: -5.25177
    },
    73: {
        id: 73,
        name: "Sgurr Fiona",
        identifier: "An Teallach",
        region: MUNRO_REGIONS[14],
        altitude: 1059,
        latitude: 57.80073,
        longitude: -5.25944
    },
    74: {
        id: 74,
        name: "Spidean a' Choire Leith",
        identifier: "Liathach",
        region: MUNRO_REGIONS[13],
        altitude: 1055,
        latitude: 57.56420,
        longitude: -5.46362
    },
    75: {
        id: 75,
        name: "Na Gruagaichean",
        region: MUNRO_REGIONS[4],
        altitude: 1054,
        latitude: 56.74370,
        longitude: -4.93985
    },
    76: {
        id: 76,
        name: "Toll Creagach",
        region: MUNRO_REGIONS[11],
        altitude: 1054,
        latitude: 57.30923,
        longitude: -4.99994
    },
    77: {
        id: 77,
        name: "Sgurr a' Chaorachain",
        region: MUNRO_REGIONS[12],
        altitude: 1053,
        latitude: 57.45249,
        longitude: -5.18928
    },
    78: {
        id: 78,
        name: "Stob Poite Coire Ardair",
        region: MUNRO_REGIONS[9],
        altitude: 1053,
        latitude: 56.96404,
        longitude: -4.58576
    },
    79: {
        id: 79,
        name: "Glas Tulaichean",
        region: MUNRO_REGIONS[6],
        altitude: 1051,
        latitude: 56.86576,
        longitude: -3.55818
    },
    80: {
        id: 80,
        name: "Geal Charn",
        identifier: "Loch Laggan",
        region: MUNRO_REGIONS[4],
        altitude: 1050,
        latitude: 56.89776,
        longitude: -4.45724
    },
    81: {
        id: 81,
        name: "Sgurr Fhuar-thuill",
        region: MUNRO_REGIONS[12],
        altitude: 1049,
        latitude: 57.44968,
        longitude: -4.94178
    },
    82: {
        id: 82,
        name: "Beinn a' Chaorainn",
        identifier: "Glen Spean",
        region: MUNRO_REGIONS[9],
        altitude: 1049,
        latitude: 56.92862,
        longitude: -4.65364
    },
    83: {
        id: 83,
        name: "Chno Dearg",
        region: MUNRO_REGIONS[4],
        altitude: 1048,
        latitude: 56.83008,
        longitude: -4.66083
    },
    84: {
        id: 84,
        name: "Carn an t-Sagairt Mor",
        region: MUNRO_REGIONS[4],
        altitude: 1047,
        latitude: 56.94297,
        longitude: -3.30323
    },
    85: {
        id: 85,
        name: "Creag Mhor",
        region: MUNRO_REGIONS[2],
        altitude: 1047,
        latitude: 56.48952,
        longitude: -4.61404
    },
    86: {
        id: 86,
        name: "Ben Wyvis, Glas Leathad Mor",
        region: MUNRO_REGIONS[15],
        altitude: 1046,
        latitude: 57.67891,
        longitude: -4.57925
    },
    87: {
        id: 87,
        name: "Cruach Ardrain",
        region: MUNRO_REGIONS[1],
        altitude: 1046,
        latitude: 56.35644,
        longitude: -4.57615
    },
    88: {
        id: 88,
        name: "Beinn Iutharn Mhor",
        region: MUNRO_REGIONS[6],
        altitude: 1045,
        latitude: 56.89499,
        longitude: -3.56823
    },
    89: {
        id: 89,
        name: "Stob Coir' an Albannaich",
        region: MUNRO_REGIONS[3],
        altitude: 1045,
        latitude: 56.55490,
        longitude: -4.97981
    },
    90: {
        id: 90,
        name: "Meall nan Tarmachan",
        region: MUNRO_REGIONS[2],
        altitude: 1044,
        latitude: 56.52167,
        longitude: -4.30134
    },
    91: {
        id: 91,
        name: "Carn Mairg",
        region: MUNRO_REGIONS[2],
        altitude: 1043,
        latitude: 56.63464,
        longitude: -4.14562
    },
    92: {
        id: 92,
        name: "Sgurr na Ciche",
        region: MUNRO_REGIONS[10],
        altitude: 1040,
        latitude: 57.01346,
        longitude: -5.45687
    },
    93: {
        id: 93,
        name: "Meall Ghaordaidh",
        aka: "Meall Ghaordie",
        region: MUNRO_REGIONS[2],
        altitude: 1040,
        latitude: 56.52581,
        longitude: -4.41665
    },
    94: {
        id: 94,
        name: "Carn a' Mhaim",
        region: MUNRO_REGIONS[8],
        altitude: 1039,
        latitude: 57.03687,
        longitude: -3.65838
    },
    95: {
        id: 95,
        name: "Sgurr a' Bhealaich Dheirg",
        region: MUNRO_REGIONS[11],
        altitude: 1039,
        latitude: 57.17782,
        longitude: -5.25218
    },
    96: {
        id: 96,
        name: "Beinn Achaladair",
        region: MUNRO_REGIONS[2],
        altitude: 1039,
        latitude: 56.55191,
        longitude: -4.69451
    },
    97: {
        id: 97,
        name: "Gleouraich",
        region: MUNRO_REGIONS[10],
        altitude: 1035,
        latitude: 57.09716,
        longitude: -5.23803
    },
    98: {
        id: 98,
        name: "Carn Dearg",
        identifier: "Loch Pattack",
        region: MUNRO_REGIONS[4],
        altitude: 1034,
        latitude: 56.85524,
        longitude: -4.45469
    },
    99: {
        id: 99,
        name: "Beinn Fhada",
        region: MUNRO_REGIONS[11],
        altitude: 1032,
        latitude: 57.22100,
        longitude: -5.28352
    },
    100: {
        id: 100,
        name: "Am Bodach",
        region: MUNRO_REGIONS[4],
        altitude: 1032,
        latitude: 56.74173,
        longitude: -4.98337
    },
    101: {
        id: 101,
        name: "Ben Oss",
        region: MUNRO_REGIONS[1],
        altitude: 1030,
        latitude: 56.38903,
        longitude: -4.77520
    },
    102: {
        id: 102,
        name: "Carn Gorm",
        region: MUNRO_REGIONS[2],
        altitude: 1030,
        latitude: 56.62253,
        longitude: -4.22604
    },
    103: {
        id: 103,
        name: "Carn an Righ",
        region: MUNRO_REGIONS[6],
        altitude: 1029,
        latitude: 56.87658,
        longitude: -3.59527
    },
    104: {
        id: 104,
        name: "Sgurr na Ciste Duibhe",
        region: MUNRO_REGIONS[11],
        altitude: 1027,
        latitude: 57.18092,
        longitude: -5.33713
    },
    105: {
        id: 105,
        name: "Sgurr a' Mhaoraich",
        region: MUNRO_REGIONS[10],
        altitude: 1027,
        latitude: 57.10567,
        longitude: -5.33039
    },
    106: {
        id: 106,
        name: "Beinn Challuim",
        aka: "Ben Challum",
        region: MUNRO_REGIONS[2],
        altitude: 1025,
        latitude: 56.45457,
        longitude: -4.61918
    },
    107: {
        id: 107,
        name: "Sgorr Dhearg",
        identifier: "Beinn a' Bheithir",
        region: MUNRO_REGIONS[3],
        altitude: 1024,
        latitude: 56.65393,
        longitude: -5.17151
    },
    108: {
        id: 108,
        name: "Mullach an Rathain",
        identifier: "Liathach",
        region: MUNRO_REGIONS[13],
        altitude: 1024,
        latitude: 57.56089,
        longitude: -5.49253
    },
    109: {
        id: 109,
        name: "Buachaille Etive Mor, Stob Dearg",
        region: MUNRO_REGIONS[3],
        altitude: 1021,
        latitude: 56.64623,
        longitude: -4.90038
    },
    110: {
        id: 110,
        name: "Aonach air Chrith",
        region: MUNRO_REGIONS[10],
        altitude: 1020,
        latitude: 57.12464,
        longitude: -5.22129
    },
    111: {
        id: 111,
        name: "Ladhar Bheinn",
        region: MUNRO_REGIONS[10],
        altitude: 1019,
        latitude: 57.07527,
        longitude: -5.59175
    },
    112: {
        id: 112,
        name: "Beinn Bheoil",
        region: MUNRO_REGIONS[4],
        altitude: 1019,
        latitude: 56.81327,
        longitude: -4.43066
    },
    113: {
        id: 113,
        name: "Mullach Clach a' Bhlair",
        region: MUNRO_REGIONS[8],
        altitude: 1019,
        latitude: 57.01188,
        longitude: -3.84127
    },
    114: {
        id: 114,
        name: "Carn an Tuirc",
        region: MUNRO_REGIONS[7],
        altitude: 1019,
        latitude: 56.90827,
        longitude: -3.35712
    },
    115: {
        id: 115,
        name: "Mullach Coire Mhic Fhearchair",
        region: MUNRO_REGIONS[14],
        altitude: 1015,
        latitude: 57.70900,
        longitude: -5.27136
    },
    116: {
        id: 116,
        name: "Garbh Chioch Mhor",
        region: MUNRO_REGIONS[10],
        altitude: 1013,
        latitude: 57.00856,
        longitude: -5.44432
    },
    117: {
        id: 117,
        name: "Beinn Ime",
        aka: "Ben Ime",
        region: MUNRO_REGIONS[1],
        altitude: 1012,
        latitude: 56.23679,
        longitude: -4.81712
    },
    118: {
        id: 118,
        name: "The Saddle",
        region: MUNRO_REGIONS[10],
        altitude: 1012,
        latitude: 57.16239,
        longitude: -5.41472
    },
    119: {
        id: 119,
        name: "Cairn Bannoch",
        region: MUNRO_REGIONS[7],
        altitude: 1011,
        latitude: 56.92773,
        longitude: -3.27840
    },
    120: {
        id: 120,
        name: "Beinn Udlamain",
        region: MUNRO_REGIONS[5],
        altitude: 1010,
        latitude: 56.83544,
        longitude: -4.32998
    },
    121: {
        id: 121,
        name: "Ruadh-stac Mor",
        identifier: "Beinn Eighe",
        region: MUNRO_REGIONS[13],
        altitude: 1010,
        latitude: 57.59374,
        longitude: -5.42945
    },
    122: {
        id: 122,
        name: "Sgurr an Doire Leathain",
        region: MUNRO_REGIONS[10],
        altitude: 1010,
        latitude: 57.13687,
        longitude: -5.28153
    },
    123: {
        id: 123,
        name: "Beinn Dearg",
        identifier: "Blair Atholl",
        region: MUNRO_REGIONS[6],
        altitude: 1009,
        latitude: 56.87735,
        longitude: -3.88372
    },
    124: {
        id: 124,
        name: "Sgurr Eilde Mor",
        region: MUNRO_REGIONS[4],
        altitude: 1008,
        latitude: 56.75001,
        longitude: -4.89543
    },
    125: {
        id: 125,
        name: "The Devil's Point",
        region: MUNRO_REGIONS[8],
        altitude: 1007,
        latitude: 57.03571,
        longitude: -3.68880
    },
    126: {
        id: 126,
        name: "An Sgarsoch",
        region: MUNRO_REGIONS[6],
        altitude: 1007,
        latitude: 56.93211,
        longitude: -3.75429
    },
    127: {
        id: 127,
        name: "Carn Liath",
        identifier: "Creag Meagaidh",
        region: MUNRO_REGIONS[9],
        altitude: 1006,
        latitude: 56.97879,
        longitude: -4.51529
    },
    128: {
        id: 128,
        name: "Maoile Lunndaidh",
        region: MUNRO_REGIONS[12],
        altitude: 1005,
        latitude: 57.46448,
        longitude: -5.11100

    },
    129: {
        id: 129,
        name: "Beinn Fhionnlaidh",
        identifier: "Glen Affric",
        region: MUNRO_REGIONS[11],
        altitude: 1005,
        latitude: 57.30598,
        longitude: -5.12991
    },
    130: {
        id: 130,
        name: "Sgurr an Lochain",
        region: MUNRO_REGIONS[10],
        altitude: 1004,
        latitude: 57.14129,
        longitude: -5.29747
    },
    131: {
        id: 131,
        name: "Sgurr Mor",
        identifier: "Loch Quoich",
        region: MUNRO_REGIONS[10],
        altitude: 1003,
        latitude: 57.02845,
        longitude: -5.35421
    },
    132: {
        id: 132,
        name: "Beinn an Dothaidh",
        region: MUNRO_REGIONS[2],
        altitude: 1002,
        latitude: 56.53013,
        longitude: -4.71398
    },
    133: {
        id: 133,
        name: "Sgorr Dhonuill",
        identifier: "Beinn a' Bheithir",
        region: MUNRO_REGIONS[3],
        altitude: 1002,
        latitude: 56.65053,
        longitude: -5.19789
    },
    134: {
        id: 134,
        name: "Sgurr na Carnach",
        region: MUNRO_REGIONS[11],
        altitude: 1002,
        latitude: 57.18903,
        longitude: -5.34922
    },
    135: {
        id: 135,
        name: "Aonach Meadhoin",
        region: MUNRO_REGIONS[11],
        altitude: 1002,
        latitude: 57.17303,
        longitude: -5.22917
    },
    136: {
        id: 136,
        name: "Meall Greigh",
        region: MUNRO_REGIONS[2],
        altitude: 1001,
        latitude: 56.56742,
        longitude: -4.15956
    },
    137: {
        id: 137,
        name: "Stob Ban",
        identifier: "Mamores",
        region: MUNRO_REGIONS[4],
        altitude: 1000,
        latitude: 56.74371,
        longitude: -5.03033
    },
    138: {
        id: 138,
        name: "Sgurr Breac",
        region: MUNRO_REGIONS[14],
        altitude: 1000,
        latitude: 57.69194,
        longitude: -5.09131
    },
    139: {
        id: 139,
        name: "Sgurr Choinnich",
        region: MUNRO_REGIONS[12],
        altitude: 999,
        latitude: 57.45103,
        longitude: -5.20792
    },
    140: {
        id: 140,
        name: "Sail Chaorainn",
        region: MUNRO_REGIONS[11],
        altitude: 999,
        latitude: 57.19163,
        longitude: -5.09118
    },
    141: {
        id: 141,
        name: "Stob Diamh",
        aka: "Stob Daimh",
        region: MUNRO_REGIONS[3],
        altitude: 999,
        latitude: 56.43134,
        longitude: -5.09132
    },
    142: {
        id: 142,
        name: "Ben More Assynt",
        region: MUNRO_REGIONS[16],
        altitude: 999,
        latitude: 58.13816,
        longitude: -4.85821
    },
    143: {
        id: 143,
        name: "A' Chailleach",
        identifier: "Fannichs",
        region: MUNRO_REGIONS[14],
        altitude: 999,
        latitude: 57.69377,
        longitude: -5.12871
    },
    144: {
        id: 144,
        name: "Glas Bheinn Mhor",
        region: MUNRO_REGIONS[3],
        altitude: 998,
        latitude: 56.54243,
        longitude: -5.00525
    },
    145: {
        id: 145,
        name: "Broad Cairn",
        region: MUNRO_REGIONS[7],
        altitude: 997,
        latitude: 56.91915,
        longitude: -3.24908
    },
    146: {
        id: 146,
        name: "Spidean Mialach",
        region: MUNRO_REGIONS[10],
        altitude: 996,
        latitude: 57.08896,
        longitude: -5.19361
    },
    147: {
        id: 147,
        name: "An Caisteal",
        region: MUNRO_REGIONS[1],
        altitude: 996,
        latitude: 56.33862,
        longitude: -4.62437
    },
    148: {
        id: 149,
        name: "Sgor na h-Ulaidh",
        aka: "Sgurr na h-Ulaidh",
        region: MUNRO_REGIONS[3],
        altitude: 994,
        latitude: 56.61980,
        longitude: -5.08006
    },
    149: {
        id: 148,
        name: "Carn an Fhidhleir",
        aka: "Carn Ealar",
        region: MUNRO_REGIONS[6],
        altitude: 994,
        latitude: 56.93603,
        longitude: -3.80153
    },
    150: {
        id: 150,
        name: "Spidean Coire nan Clach",
        identifier: "Beinn Eighe",
        region: MUNRO_REGIONS[13],
        altitude: 993,
        latitude: 57.58210,
        longitude: -5.40371
    },
    151: {
        id: 151,
        name: "Sgurr na Ruaidhe",
        region: MUNRO_REGIONS[12],
        altitude: 993,
        latitude: 57.44150,
        longitude: -4.85246
    },
    152: {
        id: 152,
        name: "Carn nan Gobhar",
        identifier: "Glen Cannich",
        region: MUNRO_REGIONS[12],
        altitude: 992,
        latitude: 57.36330,
        longitude: -5.02454
    },
    153: {
        id: 153,
        name: "Sgurr Alasdair",
        region: MUNRO_REGIONS[17],
        altitude: 992,
        latitude: 57.20659,
        longitude: -6.22414
    },
    154: {
        id: 154,
        name: "Carn nan Gobhar",
        identifier: "Glen Strathfarrar",
        region: MUNRO_REGIONS[12],
        altitude: 992,
        latitude: 57.45233,
        longitude: -4.87993
    },
    155: {
        id: 155,
        name: "Sgairneach Mhor",
        region: MUNRO_REGIONS[5],
        altitude: 991,
        latitude: 56.82841,
        longitude: -4.29808
    },
    156: {
        id: 156,
        name: "Beinn Eunaich",
        region: MUNRO_REGIONS[3],
        altitude: 990,
        latitude: 56.45035,
        longitude: -5.02664
    },
    157: {
        id: 157,
        name: "Sgurr Ban",
        identifier: "Letterewe",
        region: MUNRO_REGIONS[14],
        altitude: 989,
        latitude: 57.71854,
        longitude: -5.26590
    },
    158: {
        id: 158,
        name: "Creag Leacach",
        region: MUNRO_REGIONS[7],
        altitude: 988,
        latitude: 56.85464,
        longitude: -3.38777
    },
    159: {
        id: 159,
        name: "Conival",
        region: MUNRO_REGIONS[16],
        altitude: 988,
        latitude: 58.13569,
        longitude: -4.88350
    },
    160: {
        id: 160,
        name: "Lurg Mhor",
        region: MUNRO_REGIONS[12],
        altitude: 988,
        latitude: 57.41309,
        longitude: -5.22367
    },
    161: {
        id: 161,
        name: "Sgurr Mor",
        aka: "Sgurr Mhor",
        identifier: "Beinn Alligin",
        region: MUNRO_REGIONS[13],
        altitude: 986,
        latitude: 57.59083,
        longitude: -5.57277
    },
    162: {
        id: 162,
        name: "Sgurr Dearg",
        aka: "Inaccessible Pinnacle",
        region: MUNRO_REGIONS[17],
        altitude: 986,
        latitude: 57.21326,
        longitude: -6.23482
    },
    163: {
        id: 163,
        name: "Ben Vorlich",
        identifier: "Loch Earn",
        region: MUNRO_REGIONS[1],
        altitude: 985,
        latitude: 56.34268,
        longitude: -4.21946
    },
    164: {
        id: 164,
        name: "Druim Shionnach",
        region: MUNRO_REGIONS[10],
        altitude: 985,
        latitude: 57.12679,
        longitude: -5.18284
    },
    165: {
        id: 165,
        name: "Gulvain",
        aka: "Gaor Bheinn",
        region: MUNRO_REGIONS[10],
        altitude: 983,
        latitude: 56.93621,
        longitude: -5.28453
    },
    166: {
        id: 166,
        name: "Meall na Aighean",
        region: MUNRO_REGIONS[2],
        altitude: 982,
        latitude: 56.62063,
        longitude: -4.12874
    },
    167: {
        id: 167,
        name: "Mullach na Dheiragain",
        region: MUNRO_REGIONS[11],
        altitude: 982,
        latitude: 57.28340,
        longitude: -5.18633
    },
    168: {
        id: 168,
        name: "An Gearanach",
        region: MUNRO_REGIONS[4],
        altitude: 982,
        latitude: 56.75917,
        longitude: -4.96623
    },
    169: {
        id: 169,
        name: "Stob Coire a' Chairn",
        region: MUNRO_REGIONS[4],
        altitude: 981,
        latitude: 56.75076,
        longitude: -4.96898
    },
    170: {
        id: 170,
        name: "Beinn a' Chochuill",
        region: MUNRO_REGIONS[3],
        altitude: 981,
        latitude: 56.44979,
        longitude: -5.06855
    },
    171: {
        id: 171,
        name: "Slioch",
        identifier: "North Top",
        region: MUNRO_REGIONS[14],
        altitude: 981,
        latitude: 57.66715,
        longitude: -5.34706
    },
    172: {
        id: 172,
        name: "Ciste Dhubh",
        region: MUNRO_REGIONS[11],
        altitude: 981,
        latitude: 57.19924,
        longitude: -5.20903
    },
    173: {
        id: 173,
        name: "Maol Chinn-dearg",
        region: MUNRO_REGIONS[10],
        altitude: 980,
        latitude: 57.12756,
        longitude: -5.25265
    },
    174: {
        id: 174,
        name: "Stob Coire Sgriodain",
        region: MUNRO_REGIONS[4],
        altitude: 979,
        latitude: 56.83174,
        longitude: -4.69493
    },
    175: {
        id: 175,
        name: "Beinn Dubhchraig",
        region: MUNRO_REGIONS[1],
        altitude: 979,
        latitude: 56.39129,
        longitude: -4.74319
    },
    176: {
        id: 176,
        name: "Cona' Mheall",
        region: MUNRO_REGIONS[15],
        altitude: 978,
        latitude: 57.79108,
        longitude: -4.90342
    },
    177: {
        id: 177,
        name: "Stob Ban",
        identifier: "Grey Corries",
        region: MUNRO_REGIONS[4],
        altitude: 977,
        latitude: 56.81066,
        longitude: -4.84088
    },
    178: {
        id: 178,
        name: "Meall nan Ceapraichean",
        region: MUNRO_REGIONS[15],
        altitude: 977,
        latitude: 57.79851,
        longitude: -4.93401
    },
    179: {
        id: 179,
        name: "Carn a' Gheoidh",
        region: MUNRO_REGIONS[6],
        altitude: 976,
        latitude: 56.87306,
        longitude: -3.46662
    },
    180: {
        id: 180,
        name: "Carn Liath",
        identifier: "Beinn a' Ghlo",
        region: MUNRO_REGIONS[6],
        altitude: 976,
        latitude: 56.80777,
        longitude: -3.74409
    },
    184: {
        id: 184,
        name: "Ben Lomond",
        region: MUNRO_REGIONS[1],
        altitude: 974,
        latitude: 56.19030,
        longitude: -4.63301
    },
    259: {
        id: 259,
        name: "Beinn Narnain",
        region: MUNRO_REGIONS[1],
        altitude: 927,
        latitude: 56.22096,
        longitude: -4.78900
    },
  };
  /*
  TEMPLATE FOR ENTRY
  0: {
        id: 0,
        name: "",
        aka: "",
        identifier: "",
        region: MUNRO_REGIONS[0],
        altitude: 0,
        latitude: 0,
        longitude: 0
    },
  */