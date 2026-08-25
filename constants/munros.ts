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
    99: {
        id: 99,
        name: "Beinn Ime",
        region: MUNRO_REGIONS[1],
        altitude: 1012,
        latitude: 56.23679,
        longitude: -4.81712
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