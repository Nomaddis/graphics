import React, {Component} from 'react';

import {
  CartesianGrid,
  XAxis, YAxis, Tooltip, Legend, Line, LineChart, BarChart, AreaChart, Area, Brush
} from 'recharts';
import './Analytics.css';
import {Button, ButtonToolbar, DropdownButton, MenuItem, Modal, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Bar from "recharts/es6/cartesian/Bar";
import Cell from "recharts/es6/component/Cell";
import ModalGraphic from "./modalGraphic";
import {Chart, HighchartsChart, PlotBand, SplineSeries, Subtitle, Title} from "react-jsx-highcharts";


const timeData = [
  {name: 1, ms: getRandomInt(50, 150)},// very well
  {name: 2, ms: getRandomInt(150, 200)},// good
  {name: 3, ms: getRandomInt(50, 150)},// very well
  {name: 4, ms: getRandomInt(150, 200)},// good
  {name: 5, ms: getRandomInt(50, 150)},// very well
  {name: 6, ms: getRandomInt(150, 200)},// good
  {name: 7, ms: 215},// bad
  {name: 8, ms: getRandomInt(150, 200)},// good
  {name: 9, ms: getRandomInt(150, 200)},// good
  {name: 10, ms: getRandomInt(150, 200)},// good
];

const PData = [
  {name: 1, p: getRandomFloatmin(0.02, 0.1)},// very well
  {name: 2, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 3, p: getRandomFloatmin(0.02, 0.1)},// very well
  {name: 4, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 5, p: getRandomFloatmin(0.02, 0.1)},// very well
  {name: 6, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 7, p: 1.25},
  {name: 8, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 9, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 10, p: getRandomFloatmin(0.1, 0.9)},// good
];
const JData = [
  {name: 1, ms: getRandomInt(1, 19)},// very well
  {name: 2, ms: getRandomInt(21, 49)},// good
  {name: 3, ms: getRandomInt(1, 19)},// very well
  {name: 4, ms: getRandomInt(21, 49)},// good
  {name: 5, ms: getRandomInt(1, 19)},// very well
  {name: 6, ms: getRandomInt(21, 49)},// good
  {name: 7, ms: 56},
  {name: 8, ms: getRandomInt(21, 49)},// good
  {name: 9, ms: getRandomInt(21, 49)},// good
  {name: 10, ms: getRandomInt(21, 49)},// good
];

const filteredData = [
  {name: 0, QoS: 5},
  {name: 0.1324, QoS: 4.8956},
  {name: 0.2, QoS: 4.2623},
  {name: 0.30635, QoS: 3.1985},
  {name: 0.4, QoS: 2.2,},
  {name: 0.4054, QoS: 1.4},
  {name: 0.50223, QoS: 0.8, QoS2: 0.8},
  {name: 0.6, QoS: 0.45},
  {name: 0.60345, QoS: 0.25},
  {name: 0.7022, QoS: 0.1},
  {name: 0.8, QoS: 0.005},
];

const filteredData2 = [
  {name: 0, QoS: 5},
  {name: 0.1324, QoS: 4.8956},
  {name: 0.2, QoS: 4.2623},
  {name: 0.30635, QoS: 3.1985},
  {name: 0.4, QoS: 2.2},
  {name: 0.4054, QoS: 1.4, QoS2: 1.4},
  {name: 0.50223, QoS: 0.8},
  {name: 0.6, QoS: 0.45},
  {name: 0.60345, QoS: 0.25},
  {name: 0.7022, QoS: 0.1},
  {name: 0.8, QoS: 0.005},
];

const filteredData3 = [
  {name: 0, QoS: 5},
  {name: 0.1324, QoS: 4.8956},
  {name: 0.2, QoS: 4.2623},
  {name: 0.30635, QoS: 3.1985, QoS2: 3.1985},
  {name: 0.4, QoS: 2.2},
  {name: 0.4054, QoS: 1.4},
  {name: 0.50223, QoS: 0.8},
  {name: 0.6, QoS: 0.45},
  {name: 0.60345, QoS: 0.25},
  {name: 0.7022, QoS: 0.1},
  {name: 0.8, QoS: 0.005},
];

const filteredData4 = [
  {name: 0, QoS: 5},
  {name: 0.1324, QoS: 4.8956},
  {name: 0.2, QoS: 4.2623, QoS2: 4.2623},
  {name: 0.30635, QoS: 3.1985},
  {name: 0.4, QoS: 2.2},
  {name: 0.4054, QoS: 1.4},
  {name: 0.50223, QoS: 0.8},
  {name: 0.6, QoS: 0.45},
  {name: 0.60345, QoS: 0.25},
  {name: 0.7022, QoS: 0.1},
  {name: 0.8, QoS: 0.005},
];

const filteredData5 = [
  {name: 0, QoS: 5},
  {name: 0.1324, QoS: 4.8956},
  {name: 0.2, QoS: 4.2623, QoS2: 4.2623},
  {name: 0.30635, QoS: 3.1985, QoS2: 3.1985},
  {name: 0.4, QoS: 2.2},
  {name: 0.4054, QoS: 1.4, QoS2: 1.4},
  {name: 0.50223, QoS: 0.8, QoS2: 0.8},
  {name: 0.6, QoS: 0.45},
  {name: 0.60345, QoS: 0.25},
  {name: 0.7022, QoS: 0.1},
  {name: 0.8, QoS: 0.005},
];

const dataFreq = [
  {name: 0, IPTVm: 569, web: 560, VoIP: 83, VoD: 324},
  {name: 1, IPTVm: 646, web: 698, VoIP: 78, VoD: 378},
  {name: 2, IPTVm: 585, web: 761, VoIP: 78, VoD: 459},
  {name: 3, IPTVm: 572, web: 765, VoIP: 72, VoD: 452},
  {name: 4, IPTVm: 598, web: 759, VoIP: 74, VoD: 442},
  {name: 5, IPTVm: 601, web: 638, VoIP: 75, VoD: 373},
  {name: 6, IPTVm: 584, web: 727, VoIP: 72, VoD: 455},
  {name: 7, IPTVm: 588, web: 741, VoIP: 72, VoD: 435},
  {name: 8, IPTVm: 536, web: 733, VoIP: 77, VoD: 434},
  {name: 9, IPTVm: 502, web: 794, VoIP: 77, VoD: 379},
  {name: 10, IPTVm: 559, web: 708, VoIP: 71, VoD: 424},
  {name: 11, IPTVm: 572, web: 739, VoIP: 80, VoD: 400},
  {name: 12, IPTVm: 611, web: 737, VoIP: 75, VoD: 436},
  {name: 13, IPTVm: 572, web: 767, VoIP: 77, VoD: 458},
  {name: 14, IPTVm: 598, web: 561, VoIP: 74, VoD: 364},
  {name: 15, IPTVm: 502, web: 588, VoIP: 60, VoD: 323},
  {name: 16, IPTVm: 338, web: 487, VoIP: 45, VoD: 303},
  {name: 17, IPTVm: 520, web: 659, VoIP: 70, VoD: 421},
  {name: 18, IPTVm: 442, web: 720, VoIP: 78, VoD: 396},
  {name: 19, IPTVm: 415, web: 727, VoIP: 74, VoD: 394},
  {name: 20, IPTVm: 378, web: 602, VoIP: 76, VoD: 345},
  {name: 21, IPTVm: 429, web: 763, VoIP: 74, VoD: 442},
  {name: 22, IPTVm: 407, web: 759, VoIP: 73, VoD: 495},
  {name: 23, IPTVm: 442, web: 757, VoIP: 79, VoD: 448},
  {name: 24, IPTVm: 455, web: 686, VoIP: 71, VoD: 400},
  {name: 25, IPTVm: 429, web: 679, VoIP: 77, VoD: 415},
  {name: 26, IPTVm: 455, web: 618, VoIP: 70, VoD: 402},
  {name: 27, IPTVm: 463, web: 544, VoIP: 78, VoD: 371},
  {name: 28, IPTVm: 559, web: 613, VoIP: 77, VoD: 378},
  {name: 29, IPTVm: 509, web: 735, VoIP: 73, VoD: 421},
  {name: 30, IPTVm: 494, web: 729, VoIP: 75, VoD: 426},
  {name: 31, IPTVm: 527, web: 758, VoIP: 75, VoD: 413},
  {name: 32, IPTVm: 247, web: 338, VoIP: 35, VoD: 173},
  {name: 33, IPTVm: 433, web: 580, VoIP: 56, VoD: 320},
  {name: 34, IPTVm: 403, web: 766, VoIP: 64, VoD: 502},
  {name: 35, IPTVm: 416, web: 782, VoIP: 53, VoD: 455},
  {name: 36, IPTVm: 460, web: 702, VoIP: 94, VoD: 458},
  {name: 37, IPTVm: 468, web: 576, VoIP: 91, VoD: 405},
  {name: 38, IPTVm: 458, web: 760, VoIP: 140, VoD: 411},
  {name: 39, IPTVm: 421, web: 688, VoIP: 147, VoD: 468},
  {name: 40, IPTVm: 442, web: 702, VoIP: 152, VoD: 444},
  {name: 41, IPTVm: 395, web: 697, VoIP: 159, VoD: 424},
  {name: 42, IPTVm: 429, web: 711, VoIP: 150, VoD: 355},
  {name: 43, IPTVm: 390, web: 663, VoIP: 137, VoD: 355},
  {name: 44, IPTVm: 429, web: 797, VoIP: 145, VoD: 414},
  {name: 45, IPTVm: 396, web: 803, VoIP: 151, VoD: 450},
  {name: 46, IPTVm: 364, web: 745, VoIP: 144, VoD: 501},
  {name: 47, IPTVm: 299, web: 498, VoIP: 105, VoD: 285},
  {name: 48, IPTVm: 260, web: 459, VoIP: 73, VoD: 246},
  {name: 49, IPTVm: 468, web: 779, VoIP: 149, VoD: 411},
  {name: 50, IPTVm: 490, web: 749, VoIP: 135, VoD: 452},
  {name: 51, IPTVm: 481, web: 745, VoIP: 137, VoD: 493},
  {name: 52, IPTVm: 473, web: 684, VoIP: 107, VoD: 404},
  {name: 53, IPTVm: 462, web: 771, VoIP: 116, VoD: 434},
  {name: 54, IPTVm: 486, web: 753, VoIP: 133, VoD: 459},
  {name: 55, IPTVm: 432, web: 676, VoIP: 122, VoD: 416},
  {name: 56, IPTVm: 559, web: 705, VoIP: 128, VoD: 455},
  {name: 57, IPTVm: 507, web: 561, VoIP: 136, VoD: 311},
  {name: 58, IPTVm: 351, web: 582, VoIP: 125, VoD: 369},
  {name: 59, IPTVm: 351, web: 769, VoIP: 118, VoD: 410},
  {name: 60, IPTVm: 494, web: 724, VoIP: 126, VoD: 464},
  {name: 61, IPTVm: 650, web: 767, VoIP: 124, VoD: 458},
  {name: 62, IPTVm: 156, web: 200, VoIP: 28, VoD: 101},
  {name: 63, IPTVm: 354, web: 758, VoIP: 125, VoD: 415},
  {name: 64, IPTVm: 595, web: 755, VoIP: 109, VoD: 397},
  {name: 65, IPTVm: 507, web: 778, VoIP: 123, VoD: 413},
  {name: 66, IPTVm: 442, web: 781, VoIP: 129, VoD: 533},
  {name: 67, IPTVm: 429, web: 736, VoIP: 120, VoD: 431},
  {name: 68, IPTVm: 468, web: 697, VoIP: 110, VoD: 424},
  {name: 69, IPTVm: 524, web: 715, VoIP: 124, VoD: 404},
  {name: 70, IPTVm: 515, web: 791, VoIP: 124, VoD: 473},
  {name: 71, IPTVm: 494, web: 772, VoIP: 127, VoD: 421},
  {name: 72, IPTVm: 468, web: 778, VoIP: 119, VoD: 329},
  {name: 73, IPTVm: 447, web: 786, VoIP: 125, VoD: 429},
  {name: 74, IPTVm: 507, web: 822, VoIP: 118, VoD: 502},
  {name: 75, IPTVm: 429, web: 798, VoIP: 129, VoD: 437},
  {name: 76, IPTVm: 492, web: 768, VoIP: 125, VoD: 422},
  {name: 77, IPTVm: 209, web: 221, VoIP: 39, VoD: 178},
  {name: 78, IPTVm: 516, web: 713, VoIP: 134, VoD: 426},
  {name: 79, IPTVm: 496, web: 765, VoIP: 115, VoD: 474},
  {name: 80, IPTVm: 650, web: 565, VoIP: 130, VoD: 404},
  {name: 81, IPTVm: 627, web: 625, VoIP: 120, VoD: 378},
  {name: 82, IPTVm: 662, web: 718, VoIP: 114, VoD: 439},
  {name: 83, IPTVm: 598, web: 719, VoIP: 132, VoD: 473},
  {name: 84, IPTVm: 562, web: 708, VoIP: 123, VoD: 448},
  {name: 85, IPTVm: 442, web: 623, VoIP: 133, VoD: 414},
  {name: 86, IPTVm: 234, web: 377, VoIP: 66, VoD: 216},
  {name: 87, IPTVm: 312, web: 576, VoIP: 99, VoD: 363},
  {name: 88, IPTVm: 415, web: 744, VoIP: 117, VoD: 459},
  {name: 89, IPTVm: 564, web: 754, VoIP: 122, VoD: 473},
  {name: 90, IPTVm: 589, web: 592, VoIP: 128, VoD: 396},
  {name: 91, IPTVm: 531, web: 740, VoIP: 117, VoD: 461},
  {name: 92, IPTVm: 598, web: 700, VoIP: 124, VoD: 406},
  {name: 93, IPTVm: 494, web: 685, VoIP: 131, VoD: 428},
  {name: 94, IPTVm: 686, web: 738, VoIP: 118, VoD: 452},
  {name: 95, IPTVm: 518, web: 763, VoIP: 125, VoD: 438},
  {name: 96, IPTVm: 551, web: 730, VoIP: 130, VoD: 467},
  {name: 97, IPTVm: 546, web: 761, VoIP: 114, VoD: 480},
  {name: 98, IPTVm: 669, web: 508, VoIP: 124, VoD: 365},
  {name: 99, IPTVm: 665, web: 698, VoIP: 126, VoD: 404},
  {name: 100, IPTVm: 608, web: 689, VoIP: 134, VoD: 459},
  {name: 101, IPTVm: 569, web: 655, VoIP: 118, VoD: 410},
  {name: 102, IPTVm: 598, web: 730, VoIP: 118, VoD: 439},
  {name: 103, IPTVm: 533, web: 568, VoIP: 97, VoD: 372},
  {name: 104, IPTVm: 572, web: 726, VoIP: 128, VoD: 416},
  {name: 105, IPTVm: 494, web: 740, VoIP: 117, VoD: 494},
  {name: 106, IPTVm: 598, web: 731, VoIP: 125, VoD: 454},
  {name: 107, IPTVm: 520, web: 700, VoIP: 121, VoD: 430},
  {name: 108, IPTVm: 445, web: 661, VoIP: 122, VoD: 431},
  {name: 109, IPTVm: 429, web: 585, VoIP: 130, VoD: 406},
  {name: 110, IPTVm: 419, web: 741, VoIP: 116, VoD: 414},
  {name: 111, IPTVm: 442, web: 770, VoIP: 126, VoD: 440},
  {name: 112, IPTVm: 533, web: 770, VoIP: 127, VoD: 339},
  {name: 113, IPTVm: 540, web: 754, VoIP: 118, VoD: 443},
  {name: 114, IPTVm: 523, web: 746, VoIP: 117, VoD: 508},
  {name: 115, IPTVm: 546, web: 399, VoIP: 132, VoD: 296},
  {name: 116, IPTVm: 537, web: 524, VoIP: 122, VoD: 359},
  {name: 117, IPTVm: 541, web: 593, VoIP: 112, VoD: 388},
  {name: 118, IPTVm: 571, web: 532, VoIP: 123, VoD: 345},
  {name: 119, IPTVm: 467, web: 786, VoIP: 124, VoD: 449},
  {name: 120, IPTVm: 468, web: 791, VoIP: 120, VoD: 454},
  {name: 121, IPTVm: 445, web: 747, VoIP: 126, VoD: 510},
  {name: 122, IPTVm: 515, web: 718, VoIP: 126, VoD: 421},
  {name: 123, IPTVm: 615, web: 691, VoIP: 126, VoD: 464},
  {name: 124, IPTVm: 546, web: 585, VoIP: 127, VoD: 352},
  {name: 125, IPTVm: 533, web: 409, VoIP: 126, VoD: 286},
  {name: 126, IPTVm: 570, web: 437, VoIP: 122, VoD: 280},
  {name: 127, IPTVm: 512, web: 479, VoIP: 125, VoD: 293},
  {name: 128, IPTVm: 655, web: 385, VoIP: 126, VoD: 315},
  {name: 129, IPTVm: 551, web: 394, VoIP: 125, VoD: 274},
  {name: 130, IPTVm: 717, web: 259, VoIP: 128, VoD: 256},
  {name: 131, IPTVm: 531, web: 196, VoIP: 109, VoD: 186},
  {name: 132, IPTVm: 351, web: 189, VoIP: 68, VoD: 145},
  {name: 133, IPTVm: 730, web: 343, VoIP: 125, VoD: 245},
  {name: 134, IPTVm: 611, web: 402, VoIP: 122, VoD: 274},
  {name: 135, IPTVm: 559, web: 439, VoIP: 128, VoD: 280},
  {name: 136, IPTVm: 564, web: 388, VoIP: 122, VoD: 289},
  {name: 137, IPTVm: 676, web: 393, VoIP: 129, VoD: 253},
  {name: 138, IPTVm: 624, web: 265, VoIP: 117, VoD: 239},
  {name: 139, IPTVm: 631, web: 601, VoIP: 121, VoD: 395},
  {name: 140, IPTVm: 559, web: 685, VoIP: 126, VoD: 391},
  {name: 141, IPTVm: 691, web: 726, VoIP: 130, VoD: 407},
  {name: 142, IPTVm: 558, web: 679, VoIP: 122, VoD: 469},
  {name: 143, IPTVm: 532, web: 550, VoIP: 126, VoD: 299},
  {name: 144, IPTVm: 377, web: 396, VoIP: 98, VoD: 249},
  {name: 145, IPTVm: 667, web: 742, VoIP: 115, VoD: 428},
  {name: 146, IPTVm: 575, web: 676, VoIP: 125, VoD: 442},
  {name: 147, IPTVm: 520, web: 616, VoIP: 125, VoD: 385},
  {name: 148, IPTVm: 230, web: 174, VoIP: 42, VoD: 112},
  {name: 149, IPTVm: 720, web: 718, VoIP: 122, VoD: 414},
  {name: 150, IPTVm: 627, web: 708, VoIP: 127, VoD: 447},
  {name: 151, IPTVm: 560, web: 749, VoIP: 127, VoD: 429},
  {name: 152, IPTVm: 638, web: 652, VoIP: 127, VoD: 453},
  {name: 153, IPTVm: 610, web: 724, VoIP: 121, VoD: 416},
  {name: 154, IPTVm: 549, web: 748, VoIP: 122, VoD: 473},
  {name: 155, IPTVm: 582, web: 737, VoIP: 131, VoD: 441},
  {name: 156, IPTVm: 592, web: 832, VoIP: 115, VoD: 470},
  {name: 157, IPTVm: 662, web: 718, VoIP: 128, VoD: 324},
  {name: 158, IPTVm: 632, web: 770, VoIP: 122, VoD: 447},
  {name: 159, IPTVm: 577, web: 777, VoIP: 121, VoD: 452},
  {name: 160, IPTVm: 583, web: 733, VoIP: 126, VoD: 418},
  {name: 161, IPTVm: 324, web: 494, VoIP: 83, VoD: 346},
  {name: 162, IPTVm: 338, web: 500, VoIP: 80, VoD: 291},
  {name: 163, IPTVm: 372, web: 725, VoIP: 132, VoD: 411},
  {name: 164, IPTVm: 558, web: 794, VoIP: 117, VoD: 486},
  {name: 165, IPTVm: 568, web: 714, VoIP: 121, VoD: 440},
  {name: 166, IPTVm: 600, web: 759, VoIP: 104, VoD: 476},
  {name: 167, IPTVm: 546, web: 698, VoIP: 138, VoD: 458},
  {name: 168, IPTVm: 562, web: 745, VoIP: 114, VoD: 445},
  {name: 169, IPTVm: 617, web: 795, VoIP: 135, VoD: 494},
  {name: 170, IPTVm: 506, web: 593, VoIP: 93, VoD: 203},
  {name: 171, IPTVm: 455, web: 702, VoIP: 119, VoD: 372},
  {name: 172, IPTVm: 411, web: 752, VoIP: 124, VoD: 471},
  {name: 173, IPTVm: 494, web: 712, VoIP: 121, VoD: 466},
  {name: 174, IPTVm: 469, web: 792, VoIP: 121, VoD: 460},
  {name: 175, IPTVm: 195, web: 307, VoIP: 59, VoD: 172},
  {name: 176, IPTVm: 414, web: 699, VoIP: 120, VoD: 417},
  {name: 177, IPTVm: 512, web: 726, VoIP: 122, VoD: 511},
  {name: 178, IPTVm: 442, web: 795, VoIP: 110, VoD: 483},
  {name: 179, IPTVm: 442, web: 761, VoIP: 123, VoD: 475},
  {name: 180, IPTVm: 564, web: 775, VoIP: 124, VoD: 439},
  {name: 181, IPTVm: 698, web: 783, VoIP: 132, VoD: 490},
  {name: 182, IPTVm: 520, web: 781, VoIP: 121, VoD: 505},
  {name: 183, IPTVm: 481, web: 630, VoIP: 137, VoD: 420},
  {name: 184, IPTVm: 533, web: 609, VoIP: 118, VoD: 364},
  {name: 185, IPTVm: 533, web: 749, VoIP: 127, VoD: 442},
  {name: 186, IPTVm: 640, web: 684, VoIP: 127, VoD: 441},
  {name: 187, IPTVm: 582, web: 473, VoIP: 125, VoD: 357},
  {name: 188, IPTVm: 455, web: 397, VoIP: 88, VoD: 270},
  {name: 189, IPTVm: 403, web: 599, VoIP: 86, VoD: 341},
  {name: 190, IPTVm: 613, web: 623, VoIP: 132, VoD: 445},
  {name: 191, IPTVm: 659, web: 485, VoIP: 124, VoD: 309},
  {name: 192, IPTVm: 599, web: 657, VoIP: 124, VoD: 447},
  {name: 193, IPTVm: 585, web: 710, VoIP: 123, VoD: 444},
  {name: 194, IPTVm: 624, web: 771, VoIP: 133, VoD: 448},
  {name: 195, IPTVm: 637, web: 769, VoIP: 117, VoD: 445},
  {name: 196, IPTVm: 492, web: 760, VoIP: 124, VoD: 479},
  {name: 197, IPTVm: 499, web: 716, VoIP: 125, VoD: 409},
  {name: 198, IPTVm: 558, web: 707, VoIP: 116, VoD: 460},
  {name: 199, IPTVm: 541, web: 753, VoIP: 127, VoD: 456},
  {name: 200, IPTVm: 553, web: 587, VoIP: 126, VoD: 431},
  {name: 201, IPTVm: 614, web: 754, VoIP: 123, VoD: 446},
  {name: 202, IPTVm: 276, web: 290, VoIP: 52, VoD: 164},
  {name: 203, IPTVm: 667, web: 752, VoIP: 122, VoD: 499},
  {name: 204, IPTVm: 585, web: 696, VoIP: 125, VoD: 459},
  {name: 205, IPTVm: 533, web: 731, VoIP: 131, VoD: 459},
  {name: 206, IPTVm: 655, web: 777, VoIP: 114, VoD: 454},
  {name: 207, IPTVm: 704, web: 771, VoIP: 126, VoD: 481},
  {name: 208, IPTVm: 584, web: 715, VoIP: 124, VoD: 412},
  {name: 209, IPTVm: 598, web: 783, VoIP: 125, VoD: 499},
  {name: 210, IPTVm: 526, web: 506, VoIP: 126, VoD: 253},
  {name: 211, IPTVm: 353, web: 464, VoIP: 99, VoD: 291},
  {name: 212, IPTVm: 486, web: 795, VoIP: 126, VoD: 498},
  {name: 213, IPTVm: 435, web: 613, VoIP: 118, VoD: 389},
  {name: 214, IPTVm: 442, web: 789, VoIP: 124, VoD: 481},
  {name: 215, IPTVm: 213, web: 339, VoIP: 58, VoD: 197},
  {name: 216, IPTVm: 442, web: 638, VoIP: 130, VoD: 417},
  {name: 217, IPTVm: 350, web: 699, VoIP: 123, VoD: 462},
  {name: 218, IPTVm: 390, web: 692, VoIP: 126, VoD: 418},
  {name: 219, IPTVm: 351, web: 793, VoIP: 129, VoD: 495},
  {name: 220, IPTVm: 403, web: 712, VoIP: 122, VoD: 443},
  {name: 221, IPTVm: 377, web: 620, VoIP: 122, VoD: 418},
  {name: 222, IPTVm: 377, web: 709, VoIP: 120, VoD: 448},
  {name: 223, IPTVm: 390, web: 691, VoIP: 130, VoD: 455},
  {name: 224, IPTVm: 442, web: 754, VoIP: 114, VoD: 375},
  {name: 225, IPTVm: 611, web: 797, VoIP: 125, VoD: 450},
  {name: 226, IPTVm: 494, web: 751, VoIP: 134, VoD: 474},
  {name: 227, IPTVm: 507, web: 767, VoIP: 116, VoD: 437},
  {name: 228, IPTVm: 455, web: 770, VoIP: 128, VoD: 434},
  {name: 229, IPTVm: 195, web: 316, VoIP: 55, VoD: 192},
  {name: 230, IPTVm: 260, web: 866, VoIP: 128, VoD: 511},
  {name: 231, IPTVm: 286, web: 754, VoIP: 119, VoD: 473},
  {name: 232, IPTVm: 429, web: 734, VoIP: 121, VoD: 487},
  {name: 233, IPTVm: 394, web: 689, VoIP: 123, VoD: 404},
  {name: 234, IPTVm: 481, web: 484, VoIP: 123, VoD: 353},
  {name: 235, IPTVm: 497, web: 534, VoIP: 123, VoD: 402},
  {name: 236, IPTVm: 429, web: 752, VoIP: 132, VoD: 479},
  {name: 237, IPTVm: 416, web: 706, VoIP: 116, VoD: 440},
  {name: 238, IPTVm: 424, web: 761, VoIP: 117, VoD: 353},
  {name: 239, IPTVm: 468, web: 702, VoIP: 134, VoD: 472},
  {name: 240, IPTVm: 399, web: 515, VoIP: 124, VoD: 404},
  {name: 241, IPTVm: 382, web: 687, VoIP: 115, VoD: 425},
  {name: 242, IPTVm: 390, web: 731, VoIP: 124, VoD: 465},
  {name: 243, IPTVm: 165, web: 330, VoIP: 63, VoD: 218},
  {name: 244, IPTVm: 455, web: 819, VoIP: 120, VoD: 464},
  {name: 245, IPTVm: 481, web: 799, VoIP: 126, VoD: 490},
  {name: 246, IPTVm: 468, web: 777, VoIP: 125, VoD: 454},
  {name: 247, IPTVm: 390, web: 809, VoIP: 122, VoD: 502},
  {name: 248, IPTVm: 429, web: 750, VoIP: 117, VoD: 513},
  {name: 249, IPTVm: 473, web: 757, VoIP: 130, VoD: 458},
  {name: 250, IPTVm: 682, web: 653, VoIP: 120, VoD: 469},
  {name: 251, IPTVm: 438, web: 463, VoIP: 98, VoD: 306},
  {name: 252, IPTVm: 221, web: 343, VoIP: 57, VoD: 207},
  {name: 253, IPTVm: 481, web: 798, VoIP: 125, VoD: 432},
  {name: 254, IPTVm: 538, web: 725, VoIP: 127, VoD: 457},
  {name: 255, IPTVm: 481, web: 682, VoIP: 118, VoD: 465},
  {name: 256, IPTVm: 474, web: 581, VoIP: 129, VoD: 416},
  {name: 257, IPTVm: 485, web: 711, VoIP: 123, VoD: 403},
  {name: 258, IPTVm: 494, web: 822, VoIP: 121, VoD: 506},
  {name: 259, IPTVm: 527, web: 736, VoIP: 130, VoD: 481},
  {name: 260, IPTVm: 547, web: 741, VoIP: 130, VoD: 475},
  {name: 261, IPTVm: 468, web: 652, VoIP: 122, VoD: 415},
  {name: 262, IPTVm: 533, web: 693, VoIP: 118, VoD: 435},
  {name: 263, IPTVm: 635, web: 749, VoIP: 116, VoD: 423},
  {name: 264, IPTVm: 548, web: 763, VoIP: 123, VoD: 528},
  {name: 265, IPTVm: 455, web: 760, VoIP: 127, VoD: 464},
  {name: 266, IPTVm: 392, web: 664, VoIP: 106, VoD: 391},
  {name: 267, IPTVm: 442, web: 649, VoIP: 100, VoD: 347},
  {name: 268, IPTVm: 500, web: 798, VoIP: 118, VoD: 447},
  {name: 269, IPTVm: 494, web: 800, VoIP: 125, VoD: 454},
  {name: 270, IPTVm: 468, web: 798, VoIP: 119, VoD: 498},
  {name: 271, IPTVm: 406, web: 625, VoIP: 126, VoD: 432},
  {name: 272, IPTVm: 507, web: 761, VoIP: 134, VoD: 470},
  {name: 273, IPTVm: 468, web: 799, VoIP: 114, VoD: 494},
  {name: 274, IPTVm: 572, web: 859, VoIP: 126, VoD: 475},
  {name: 275, IPTVm: 483, web: 776, VoIP: 125, VoD: 505},
  {name: 276, IPTVm: 468, web: 714, VoIP: 122, VoD: 417},
  {name: 277, IPTVm: 550, web: 739, VoIP: 126, VoD: 463},
  {name: 278, IPTVm: 574, web: 771, VoIP: 125, VoD: 447},
  {name: 279, IPTVm: 518, web: 680, VoIP: 109, VoD: 401},
  {name: 280, IPTVm: 312, web: 432, VoIP: 65, VoD: 245},
  {name: 281, IPTVm: 546, web: 760, VoIP: 123, VoD: 442},
  {name: 282, IPTVm: 520, web: 764, VoIP: 120, VoD: 464},
  {name: 283, IPTVm: 468, web: 721, VoIP: 127, VoD: 421},
  {name: 284, IPTVm: 433, web: 732, VoIP: 122, VoD: 450},
  {name: 285, IPTVm: 446, web: 647, VoIP: 131, VoD: 456},
  {name: 286, IPTVm: 464, web: 566, VoIP: 130, VoD: 388},
  {name: 287, IPTVm: 481, web: 647, VoIP: 124, VoD: 419},
  {name: 288, IPTVm: 494, web: 623, VoIP: 120, VoD: 303},
  {name: 289, IPTVm: 546, web: 704, VoIP: 127, VoD: 468},
  {name: 290, IPTVm: 622, web: 607, VoIP: 131, VoD: 419},
  {name: 291, IPTVm: 586, web: 731, VoIP: 119, VoD: 479},
  {name: 292, IPTVm: 614, web: 770, VoIP: 121, VoD: 473},
  {name: 293, IPTVm: 261, web: 320, VoIP: 59, VoD: 190},
  {name: 294, IPTVm: 403, web: 795, VoIP: 128, VoD: 491},
  {name: 295, IPTVm: 390, web: 774, VoIP: 123, VoD: 436},
  {name: 296, IPTVm: 694, web: 763, VoIP: 132, VoD: 525},
  {name: 297, IPTVm: 615, web: 645, VoIP: 124, VoD: 417},
  {name: 298, IPTVm: 546, web: 814, VoIP: 116, VoD: 499},
  {name: 299, IPTVm: 546, web: 808, VoIP: 127, VoD: 453},
  {name: 300, IPTVm: 529, web: 799, VoIP: 132, VoD: 455},
  {name: 301, IPTVm: 494, web: 746, VoIP: 110, VoD: 341},
  {name: 302, IPTVm: 529, web: 811, VoIP: 117, VoD: 535},
  {name: 303, IPTVm: 468, web: 823, VoIP: 122, VoD: 463},
  {name: 304, IPTVm: 506, web: 806, VoIP: 126, VoD: 450},
  {name: 305, IPTVm: 418, web: 571, VoIP: 95, VoD: 323},
  {name: 306, IPTVm: 423, web: 577, VoIP: 94, VoD: 370},
  {name: 307, IPTVm: 533, web: 741, VoIP: 117, VoD: 461},
  {name: 308, IPTVm: 483, web: 783, VoIP: 123, VoD: 500},
  {name: 309, IPTVm: 468, web: 661, VoIP: 121, VoD: 466},
  {name: 310, IPTVm: 648, web: 738, VoIP: 128, VoD: 449},
  {name: 311, IPTVm: 559, web: 495, VoIP: 120, VoD: 389},
  {name: 312, IPTVm: 628, web: 418, VoIP: 127, VoD: 346},
  {name: 313, IPTVm: 525, web: 682, VoIP: 122, VoD: 375},
  {name: 314, IPTVm: 708, web: 708, VoIP: 131, VoD: 415},
  {name: 315, IPTVm: 551, web: 573, VoIP: 127, VoD: 406},
  {name: 316, IPTVm: 390, web: 714, VoIP: 121, VoD: 458},
  {name: 317, IPTVm: 403, web: 656, VoIP: 122, VoD: 408},
  {name: 318, IPTVm: 285, web: 634, VoIP: 101, VoD: 394},
  {name: 319, IPTVm: 384, web: 426, VoIP: 76, VoD: 310},
  {name: 320, IPTVm: 546, web: 586, VoIP: 125, VoD: 384},
  {name: 321, IPTVm: 567, web: 768, VoIP: 128, VoD: 457},
  {name: 322, IPTVm: 679, web: 758, VoIP: 121, VoD: 470},
  {name: 323, IPTVm: 585, web: 770, VoIP: 126, VoD: 442},
  {name: 324, IPTVm: 639, web: 762, VoIP: 130, VoD: 478},
  {name: 325, IPTVm: 602, web: 566, VoIP: 128, VoD: 398},
  {name: 326, IPTVm: 619, web: 611, VoIP: 125, VoD: 319},
  {name: 327, IPTVm: 492, web: 393, VoIP: 74, VoD: 122},
  {name: 328, IPTVm: 607, web: 757, VoIP: 124, VoD: 461},
  {name: 329, IPTVm: 563, web: 794, VoIP: 119, VoD: 467},
  {name: 330, IPTVm: 637, web: 788, VoIP: 121, VoD: 449},
  {name: 331, IPTVm: 421, web: 488, VoIP: 74, VoD: 318},
  {name: 332, IPTVm: 511, web: 612, VoIP: 110, VoD: 368},
  {name: 333, IPTVm: 601, web: 762, VoIP: 115, VoD: 384},
  {name: 334, IPTVm: 598, web: 730, VoIP: 93, VoD: 390},
  {name: 335, IPTVm: 651, web: 642, VoIP: 91, VoD: 404},
  {name: 336, IPTVm: 494, web: 773, VoIP: 124, VoD: 401},
  {name: 337, IPTVm: 507, web: 706, VoIP: 120, VoD: 440},
  {name: 338, IPTVm: 635, web: 748, VoIP: 122, VoD: 423},
  {name: 339, IPTVm: 239, web: 269, VoIP: 48, VoD: 163},
  {name: 340, IPTVm: 558, web: 721, VoIP: 108, VoD: 390},
  {name: 341, IPTVm: 535, web: 771, VoIP: 120, VoD: 412},
  {name: 342, IPTVm: 519, web: 759, VoIP: 123, VoD: 428},
  {name: 343, IPTVm: 651, web: 780, VoIP: 125, VoD: 394},
  {name: 344, IPTVm: 661, web: 781, VoIP: 110, VoD: 449},
  {name: 345, IPTVm: 533, web: 793, VoIP: 80, VoD: 399},
  {name: 346, IPTVm: 498, web: 774, VoIP: 69, VoD: 454},
  {name: 347, IPTVm: 615, web: 782, VoIP: 51, VoD: 420},
  {name: 348, IPTVm: 501, web: 752, VoIP: 70, VoD: 293},
  {name: 349, IPTVm: 481, web: 662, VoIP: 74, VoD: 375},
  {name: 350, IPTVm: 443, web: 734, VoIP: 72, VoD: 412},
  {name: 351, IPTVm: 546, web: 758, VoIP: 70, VoD: 441},
  {name: 352, IPTVm: 503, web: 719, VoIP: 72, VoD: 427},
  {name: 353, IPTVm: 305, web: 481, VoIP: 54, VoD: 316},
  {name: 354, IPTVm: 403, web: 695, VoIP: 67, VoD: 361},
  {name: 355, IPTVm: 403, web: 756, VoIP: 66, VoD: 448},
  {name: 356, IPTVm: 387, web: 714, VoIP: 63, VoD: 436},
  {name: 357, IPTVm: 390, web: 756, VoIP: 61, VoD: 447},
  {name: 358, IPTVm: 615, web: 719, VoIP: 59, VoD: 422},
  {name: 359, IPTVm: 455, web: 773, VoIP: 62, VoD: 411},
  {name: 360, IPTVm: 416, web: 731, VoIP: 59, VoD: 382},
  {name: 361, IPTVm: 400, web: 589, VoIP: 59, VoD: 318},
  {name: 362, IPTVm: 325, web: 354, VoIP: 45, VoD: 178},
  {name: 363, IPTVm: 403, web: 534, VoIP: 57, VoD: 314},
  {name: 364, IPTVm: 403, web: 367, VoIP: 60, VoD: 253},
  {name: 365, IPTVm: 416, web: 399, VoIP: 56, VoD: 276},
  {name: 366, IPTVm: 542, web: 210, VoIP: 43, VoD: 203},
  {name: 367, IPTVm: 596, web: 357, VoIP: 58, VoD: 243},
  {name: 368, IPTVm: 412, web: 721, VoIP: 62, VoD: 423},
  {name: 369, IPTVm: 446, web: 791, VoIP: 62, VoD: 417},
  {name: 370, IPTVm: 390, web: 610, VoIP: 60, VoD: 432},
  {name: 371, IPTVm: 528, web: 717, VoIP: 60, VoD: 415},
  {name: 372, IPTVm: 618, web: 769, VoIP: 61, VoD: 417},
  {name: 373, IPTVm: 539, web: 770, VoIP: 58, VoD: 438},
  {name: 374, IPTVm: 583, web: 774, VoIP: 56, VoD: 428},
  {name: 375, IPTVm: 513, web: 708, VoIP: 61, VoD: 369},
  {name: 376, IPTVm: 390, web: 720, VoIP: 56, VoD: 438},
  {name: 377, IPTVm: 618, web: 661, VoIP: 56, VoD: 430},
  {name: 378, IPTVm: 507, web: 669, VoIP: 54, VoD: 390},
  {name: 379, IPTVm: 507, web: 699, VoIP: 56, VoD: 381},
  {name: 380, IPTVm: 376, web: 538, VoIP: 42, VoD: 293},
  {name: 381, IPTVm: 612, web: 687, VoIP: 56, VoD: 355},
  {name: 382, IPTVm: 623, web: 575, VoIP: 56, VoD: 282},
  {name: 383, IPTVm: 616, web: 617, VoIP: 55, VoD: 293},
  {name: 384, IPTVm: 579, web: 554, VoIP: 55, VoD: 391},
  {name: 385, IPTVm: 604, web: 747, VoIP: 56, VoD: 423},
  {name: 386, IPTVm: 642, web: 751, VoIP: 54, VoD: 419},
  {name: 387, IPTVm: 439, web: 588, VoIP: 44, VoD: 367},
  {name: 388, IPTVm: 402, web: 768, VoIP: 59, VoD: 481},
  {name: 389, IPTVm: 611, web: 735, VoIP: 57, VoD: 432},
  {name: 390, IPTVm: 624, web: 741, VoIP: 57, VoD: 474},
  {name: 391, IPTVm: 668, web: 711, VoIP: 58, VoD: 448},
  {name: 392, IPTVm: 481, web: 807, VoIP: 55, VoD: 488},
  {name: 393, IPTVm: 691, web: 698, VoIP: 57, VoD: 402},
  {name: 394, IPTVm: 506, web: 769, VoIP: 56, VoD: 442},
  {name: 395, IPTVm: 546, web: 761, VoIP: 59, VoD: 502},
  {name: 396, IPTVm: 536, web: 803, VoIP: 57, VoD: 488},
  {name: 397, IPTVm: 494, web: 791, VoIP: 56, VoD: 479},
  {name: 398, IPTVm: 507, web: 730, VoIP: 61, VoD: 462},
  {name: 399, IPTVm: 682, web: 823, VoIP: 61, VoD: 458},
  {name: 400, IPTVm: 572, web: 736, VoIP: 64, VoD: 458},
  {name: 401, IPTVm: 619, web: 706, VoIP: 61, VoD: 335},
  {name: 402, IPTVm: 468, web: 736, VoIP: 61, VoD: 441},
  {name: 403, IPTVm: 725, web: 678, VoIP: 59, VoD: 453},
  {name: 404, IPTVm: 533, web: 756, VoIP: 59, VoD: 490},
  {name: 405, IPTVm: 658, web: 655, VoIP: 61, VoD: 416},
  {name: 406, IPTVm: 364, web: 606, VoIP: 47, VoD: 328},
  {name: 407, IPTVm: 618, web: 690, VoIP: 62, VoD: 465},
  {name: 408, IPTVm: 589, web: 632, VoIP: 63, VoD: 410},
  {name: 409, IPTVm: 465, web: 550, VoIP: 62, VoD: 380},
  {name: 410, IPTVm: 642, web: 831, VoIP: 63, VoD: 494},
  {name: 411, IPTVm: 654, web: 797, VoIP: 61, VoD: 457},
  {name: 412, IPTVm: 686, web: 802, VoIP: 60, VoD: 452},
  {name: 413, IPTVm: 564, web: 759, VoIP: 61, VoD: 486},
  {name: 414, IPTVm: 508, web: 729, VoIP: 60, VoD: 501},
  {name: 415, IPTVm: 676, web: 700, VoIP: 63, VoD: 432},
  {name: 416, IPTVm: 611, web: 752, VoIP: 61, VoD: 420},
  {name: 417, IPTVm: 550, web: 725, VoIP: 60, VoD: 425},
  {name: 418, IPTVm: 312, web: 403, VoIP: 34, VoD: 237},
  {name: 419, IPTVm: 585, web: 740, VoIP: 61, VoD: 457},
  {name: 420, IPTVm: 623, web: 705, VoIP: 61, VoD: 462},
  {name: 421, IPTVm: 613, web: 642, VoIP: 62, VoD: 424},
  {name: 422, IPTVm: 572, web: 771, VoIP: 61, VoD: 475},
  {name: 423, IPTVm: 679, web: 714, VoIP: 60, VoD: 428},
  {name: 424, IPTVm: 633, web: 760, VoIP: 59, VoD: 463},
  {name: 425, IPTVm: 626, web: 710, VoIP: 62, VoD: 466},
  {name: 426, IPTVm: 650, web: 805, VoIP: 64, VoD: 492},
  {name: 427, IPTVm: 524, web: 746, VoIP: 62, VoD: 462},
  {name: 428, IPTVm: 585, web: 763, VoIP: 62, VoD: 464},
  {name: 429, IPTVm: 458, web: 587, VoIP: 45, VoD: 328},
  {name: 430, IPTVm: 403, web: 559, VoIP: 43, VoD: 330},
  {name: 431, IPTVm: 531, web: 802, VoIP: 61, VoD: 498},
  {name: 432, IPTVm: 584, web: 822, VoIP: 60, VoD: 459},
  {name: 433, IPTVm: 663, web: 820, VoIP: 62, VoD: 543},
  {name: 434, IPTVm: 624, web: 788, VoIP: 61, VoD: 453},
  {name: 435, IPTVm: 547, web: 727, VoIP: 63, VoD: 471},
  {name: 436, IPTVm: 667, web: 762, VoIP: 62, VoD: 473},
  {name: 437, IPTVm: 637, web: 711, VoIP: 63, VoD: 431},
  {name: 438, IPTVm: 637, web: 554, VoIP: 61, VoD: 377},
  {name: 439, IPTVm: 572, web: 567, VoIP: 63, VoD: 364},
  {name: 440, IPTVm: 586, web: 764, VoIP: 61, VoD: 463},
  {name: 441, IPTVm: 468, web: 710, VoIP: 56, VoD: 403},
  {name: 442, IPTVm: 561, web: 592, VoIP: 50, VoD: 373},
  {name: 443, IPTVm: 637, web: 739, VoIP: 61, VoD: 469},
  {name: 444, IPTVm: 598, web: 718, VoIP: 61, VoD: 413},
  {name: 445, IPTVm: 548, web: 671, VoIP: 63, VoD: 428},
  {name: 446, IPTVm: 468, web: 737, VoIP: 63, VoD: 430},
  {name: 447, IPTVm: 592, web: 641, VoIP: 62, VoD: 380},
  {name: 448, IPTVm: 648, web: 622, VoIP: 63, VoD: 410},
  {name: 449, IPTVm: 455, web: 560, VoIP: 61, VoD: 355},
  {name: 450, IPTVm: 437, web: 764, VoIP: 61, VoD: 469},
  {name: 451, IPTVm: 605, web: 773, VoIP: 61, VoD: 446},
  {name: 452, IPTVm: 637, web: 782, VoIP: 60, VoD: 485},
  {name: 453, IPTVm: 522, web: 723, VoIP: 59, VoD: 452},
  {name: 454, IPTVm: 302, web: 327, VoIP: 28, VoD: 192},
  {name: 455, IPTVm: 594, web: 793, VoIP: 63, VoD: 477},
  {name: 456, IPTVm: 559, web: 718, VoIP: 63, VoD: 431},
  {name: 457, IPTVm: 470, web: 783, VoIP: 62, VoD: 427},
  {name: 458, IPTVm: 576, web: 585, VoIP: 62, VoD: 383},
  {name: 459, IPTVm: 688, web: 659, VoIP: 61, VoD: 392},
  {name: 460, IPTVm: 585, web: 733, VoIP: 61, VoD: 469},
  {name: 461, IPTVm: 553, web: 788, VoIP: 61, VoD: 436},
  {name: 462, IPTVm: 675, web: 757, VoIP: 59, VoD: 504},
  {name: 463, IPTVm: 579, web: 513, VoIP: 62, VoD: 388},
  {name: 464, IPTVm: 676, web: 790, VoIP: 63, VoD: 450},
  {name: 465, IPTVm: 568, web: 356, VoIP: 61, VoD: 296},
  {name: 466, IPTVm: 599, web: 585, VoIP: 63, VoD: 401},
  {name: 467, IPTVm: 299, web: 440, VoIP: 35, VoD: 271},
  {name: 468, IPTVm: 496, web: 719, VoIP: 54, VoD: 434},
  {name: 469, IPTVm: 541, web: 815, VoIP: 61, VoD: 451},
  {name: 470, IPTVm: 661, web: 378, VoIP: 58, VoD: 321},
  {name: 471, IPTVm: 606, web: 614, VoIP: 59, VoD: 416},
  {name: 472, IPTVm: 629, web: 717, VoIP: 61, VoD: 424},
  {name: 473, IPTVm: 621, web: 720, VoIP: 62, VoD: 450},
  {name: 474, IPTVm: 579, web: 731, VoIP: 62, VoD: 458},
  {name: 475, IPTVm: 508, web: 768, VoIP: 63, VoD: 427},
  {name: 476, IPTVm: 508, web: 648, VoIP: 62, VoD: 396},
  {name: 477, IPTVm: 526, web: 514, VoIP: 62, VoD: 348},
  {name: 478, IPTVm: 475, web: 757, VoIP: 60, VoD: 459},
  {name: 479, IPTVm: 490, web: 786, VoIP: 59, VoD: 451},
  {name: 480, IPTVm: 425, web: 654, VoIP: 51, VoD: 398},
  {name: 481, IPTVm: 520, web: 504, VoIP: 60, VoD: 326},
  {name: 482, IPTVm: 512, web: 759, VoIP: 61, VoD: 460},
  {name: 483, IPTVm: 640, web: 723, VoIP: 62, VoD: 423},
  {name: 484, IPTVm: 496, web: 705, VoIP: 63, VoD: 469},
  {name: 485, IPTVm: 468, web: 689, VoIP: 62, VoD: 423},
  {name: 486, IPTVm: 497, web: 798, VoIP: 63, VoD: 449},
  {name: 487, IPTVm: 546, web: 728, VoIP: 62, VoD: 496},
  {name: 488, IPTVm: 577, web: 601, VoIP: 61, VoD: 341},
  {name: 489, IPTVm: 598, web: 698, VoIP: 61, VoD: 475},
  {name: 490, IPTVm: 601, web: 708, VoIP: 60, VoD: 433},
  {name: 491, IPTVm: 624, web: 782, VoIP: 61, VoD: 446},
  {name: 492, IPTVm: 501, web: 761, VoIP: 62, VoD: 504},
  {name: 493, IPTVm: 345, web: 259, VoIP: 29, VoD: 185},
  {name: 494, IPTVm: 624, web: 813, VoIP: 63, VoD: 495},
  {name: 495, IPTVm: 601, web: 773, VoIP: 62, VoD: 476},
  {name: 496, IPTVm: 647, web: 831, VoIP: 60, VoD: 495},
  {name: 497, IPTVm: 546, web: 821, VoIP: 61, VoD: 501},
  {name: 498, IPTVm: 637, web: 740, VoIP: 61, VoD: 482},
  {name: 499, IPTVm: 660, web: 690, VoIP: 61, VoD: 440},
  {name: 500, IPTVm: 591, web: 715, VoIP: 61, VoD: 386},
  {name: 501, IPTVm: 507, web: 789, VoIP: 61, VoD: 440},
  {name: 502, IPTVm: 598, web: 760, VoIP: 62, VoD: 456},
  {name: 503, IPTVm: 544, web: 798, VoIP: 62, VoD: 493},
  {name: 504, IPTVm: 585, web: 781, VoIP: 61, VoD: 489},
  {name: 505, IPTVm: 338, web: 444, VoIP: 32, VoD: 256},
  {name: 506, IPTVm: 715, web: 697, VoIP: 62, VoD: 455},
  {name: 507, IPTVm: 624, web: 804, VoIP: 62, VoD: 457},
  {name: 508, IPTVm: 462, web: 814, VoIP: 61, VoD: 509},
  {name: 509, IPTVm: 416, web: 747, VoIP: 61, VoD: 481},
  {name: 510, IPTVm: 467, web: 808, VoIP: 61, VoD: 468},
  {name: 511, IPTVm: 442, web: 744, VoIP: 61, VoD: 498},
  {name: 512, IPTVm: 416, web: 748, VoIP: 62, VoD: 373},
  {name: 513, IPTVm: 429, web: 716, VoIP: 61, VoD: 449},
  {name: 514, IPTVm: 416, web: 597, VoIP: 62, VoD: 425},
  {name: 515, IPTVm: 390, web: 670, VoIP: 64, VoD: 458},
  {name: 516, IPTVm: 416, web: 739, VoIP: 61, VoD: 436},
  {name: 517, IPTVm: 302, web: 450, VoIP: 45, VoD: 321},
  {name: 518, IPTVm: 455, web: 590, VoIP: 61, VoD: 373},
  {name: 519, IPTVm: 601, web: 785, VoIP: 61, VoD: 450},
  {name: 520, IPTVm: 447, web: 816, VoIP: 61, VoD: 527},
  {name: 521, IPTVm: 312, web: 787, VoIP: 62, VoD: 478},
  {name: 522, IPTVm: 351, web: 787, VoIP: 63, VoD: 489},
  {name: 523, IPTVm: 403, web: 748, VoIP: 66, VoD: 486},
  {name: 524, IPTVm: 480, web: 778, VoIP: 61, VoD: 421},
  {name: 525, IPTVm: 422, web: 765, VoIP: 63, VoD: 407},
  {name: 526, IPTVm: 494, web: 759, VoIP: 61, VoD: 463},
  {name: 527, IPTVm: 507, web: 702, VoIP: 61, VoD: 482},
  {name: 528, IPTVm: 429, web: 658, VoIP: 62, VoD: 416},
  {name: 529, IPTVm: 390, web: 709, VoIP: 60, VoD: 452},
  {name: 530, IPTVm: 312, web: 464, VoIP: 48, VoD: 311},
  {name: 531, IPTVm: 403, web: 705, VoIP: 63, VoD: 459},
  {name: 532, IPTVm: 470, web: 773, VoIP: 62, VoD: 436},
  {name: 533, IPTVm: 546, web: 730, VoIP: 62, VoD: 491},
  {name: 534, IPTVm: 416, web: 760, VoIP: 63, VoD: 475},
  {name: 535, IPTVm: 419, web: 715, VoIP: 62, VoD: 460},
  {name: 536, IPTVm: 494, web: 733, VoIP: 61, VoD: 498},
  {name: 537, IPTVm: 195, web: 250, VoIP: 24, VoD: 133},
  {name: 538, IPTVm: 286, web: 381, VoIP: 30, VoD: 210},
  {name: 539, IPTVm: 637, web: 729, VoIP: 60, VoD: 450},
  {name: 540, IPTVm: 634, web: 679, VoIP: 62, VoD: 435},
  {name: 541, IPTVm: 595, web: 710, VoIP: 62, VoD: 451},
  {name: 542, IPTVm: 604, web: 751, VoIP: 62, VoD: 440},
  {name: 543, IPTVm: 572, web: 807, VoIP: 60, VoD: 455},
  {name: 544, IPTVm: 637, web: 766, VoIP: 62, VoD: 495},
  {name: 545, IPTVm: 667, web: 723, VoIP: 62, VoD: 408},
  {name: 546, IPTVm: 341, web: 345, VoIP: 33, VoD: 223},
  {name: 547, IPTVm: 653, web: 629, VoIP: 61, VoD: 394},
  {name: 548, IPTVm: 377, web: 645, VoIP: 62, VoD: 389},
  {name: 549, IPTVm: 351, web: 776, VoIP: 61, VoD: 462},
  {name: 550, IPTVm: 429, web: 785, VoIP: 63, VoD: 511},
  {name: 551, IPTVm: 612, web: 740, VoIP: 64, VoD: 499},
  {name: 552, IPTVm: 592, web: 698, VoIP: 62, VoD: 480},
  {name: 553, IPTVm: 533, web: 704, VoIP: 63, VoD: 457},
  {name: 554, IPTVm: 547, web: 721, VoIP: 61, VoD: 463},
  {name: 555, IPTVm: 511, web: 626, VoIP: 51, VoD: 377},
  {name: 556, IPTVm: 576, web: 794, VoIP: 61, VoD: 483},
  {name: 557, IPTVm: 611, web: 615, VoIP: 61, VoD: 454},
  {name: 558, IPTVm: 652, web: 591, VoIP: 63, VoD: 409},
  {name: 559, IPTVm: 629, web: 679, VoIP: 63, VoD: 413},
  {name: 560, IPTVm: 542, web: 809, VoIP: 62, VoD: 471},
  {name: 561, IPTVm: 715, web: 746, VoIP: 62, VoD: 475},
  {name: 562, IPTVm: 585, web: 735, VoIP: 61, VoD: 454},
  {name: 563, IPTVm: 589, web: 689, VoIP: 62, VoD: 462},
  {name: 564, IPTVm: 620, web: 720, VoIP: 61, VoD: 454},
  {name: 565, IPTVm: 620, web: 446, VoIP: 61, VoD: 355},
  {name: 566, IPTVm: 555, web: 606, VoIP: 63, VoD: 403},
  {name: 567, IPTVm: 608, web: 594, VoIP: 60, VoD: 415},
  {name: 568, IPTVm: 551, web: 329, VoIP: 62, VoD: 258},
  {name: 569, IPTVm: 543, web: 192, VoIP: 55, VoD: 189},
  {name: 570, IPTVm: 620, web: 177, VoIP: 55, VoD: 172},
  {name: 571, IPTVm: 598, web: 186, VoIP: 61, VoD: 183},
  {name: 572, IPTVm: 616, web: 265, VoIP: 63, VoD: 208},
  {name: 573, IPTVm: 569, web: 279, VoIP: 61, VoD: 242},
  {name: 574, IPTVm: 629, web: 188, VoIP: 61, VoD: 203},
  {name: 575, IPTVm: 614, web: 201, VoIP: 62, VoD: 175},
  {name: 576, IPTVm: 581, web: 286, VoIP: 61, VoD: 218},
  {name: 577, IPTVm: 583, web: 361, VoIP: 61, VoD: 254},
  {name: 578, IPTVm: 649, web: 374, VoIP: 61, VoD: 297},
  {name: 579, IPTVm: 593, web: 488, VoIP: 62, VoD: 333},
  {name: 580, IPTVm: 611, web: 706, VoIP: 63, VoD: 431},
  {name: 581, IPTVm: 590, web: 756, VoIP: 62, VoD: 452},
  {name: 582, IPTVm: 584, web: 802, VoIP: 62, VoD: 499},
  {name: 583, IPTVm: 642, web: 781, VoIP: 57, VoD: 452},
  {name: 584, IPTVm: 584, web: 785, VoIP: 61, VoD: 514},
  {name: 585, IPTVm: 489, web: 684, VoIP: 51, VoD: 373},
  {name: 586, IPTVm: 607, web: 757, VoIP: 57, VoD: 471},
  {name: 587, IPTVm: 598, web: 744, VoIP: 61, VoD: 503},
  {name: 588, IPTVm: 663, web: 671, VoIP: 63, VoD: 441},
  {name: 589, IPTVm: 608, web: 747, VoIP: 62, VoD: 442},
  {name: 590, IPTVm: 616, web: 780, VoIP: 62, VoD: 422},
  {name: 591, IPTVm: 610, web: 668, VoIP: 62, VoD: 457},
  {name: 592, IPTVm: 598, web: 630, VoIP: 63, VoD: 372},
  {name: 593, IPTVm: 654, web: 624, VoIP: 61, VoD: 466},
  {name: 594, IPTVm: 629, web: 595, VoIP: 61, VoD: 396},
  {name: 595, IPTVm: 631, web: 742, VoIP: 62, VoD: 455},
  {name: 596, IPTVm: 559, web: 789, VoIP: 61, VoD: 453},
  {name: 597, IPTVm: 505, web: 647, VoIP: 58, VoD: 404},
  {name: 598, IPTVm: 681, web: 696, VoIP: 62, VoD: 399},
  {name: 599, IPTVm: 590, web: 705, VoIP: 63, VoD: 468},
  {name: 600, IPTVm: 558, web: 658, VoIP: 62, VoD: 415},
];


function getRandomInt(min, max) {
  let rund = Math.floor(Math.random() * (max - min + 1)) + min;
  return parseFloat(rund.toFixed(4));
}

function getRandomFloatmin(min, max) {
    return (Math.random() * (max - min) + min).toFixed(4);
};


class analytics extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      numPages: null,
      pageNumber: 1,
      timeData: timeData,
      PData: PData,
      JData: JData,
      dataFreq: dataFreq,
      filteredData: filteredData,
      isDisableMethod1Btn: false,
      isDisableMethod2Btn: false,
      isDisableMethod3Btn: false,
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  method1= () => {
    let timeData = this.state.timeData;
    let PData = this.state.PData;
    let JData = this.state.JData;
    PData.forEach((item, i) => {
      if(i === 6) {
        PData[i] = {name: item.name, p: item.p - 0.2};
      }
    });
    timeData.forEach((item, i) => {
      if(i === 6) {
        timeData[i] = { name: item.name, ms: item.ms - 10};
      }
    });
    JData.forEach((item, i) => {
      if(i === 6) {
        JData[i] = { name: item.name, ms: item.ms - 4};
      }
    });

    this.setState({ PData, timeData, JData, isDisableMethod1Btn: true });
  }

  method2= () => {
    let timeData = this.state.timeData;
    let PData = this.state.PData;
    let JData = this.state.JData;
    PData.forEach((item, i) => {
      if(i === 6) {
        PData[i] = {name: item.name, p: item.p - 0.3};
      }
    });
    timeData.forEach((item, i) => {
      if(i === 6) {
        timeData[i] = { name: item.name, ms: item.ms - 10};
      }
    });
    JData.forEach((item, i) => {
      if(i === 6) {
        JData[i] = { name: item.name, ms: item.ms - 4};
      }
    });

    this.setState({ PData, timeData, JData, isDisableMethod2Btn: true });
  }

  method3= () => {
    let timeData = this.state.timeData;
    let PData = this.state.PData;
    let JData = this.state.JData;
    PData.forEach((item, i) => {
      if(i === 6) {
        PData[i] = {name: item.name, p: item.p - 0.7};
      }
    });
    timeData.forEach((item, i) => {
      if(i === 6) {
        timeData[i] = { name: item.name, ms: item.ms - 100};
      }
    });
    JData.forEach((item, i) => {
      if(i === 6) {
        JData[i] = { name: item.name, ms: item.ms - 30};
      }
    });

    this.setState({ PData, timeData, JData, isDisableMethod3Btn: true });
  }

  filterTimeData = () => {
    let timeData = [];
    this.state.timeData.forEach((item) => {
      if(item.ms <= 200) {
        timeData.push({ name: item.name, ms: 0});
      } else {
        timeData.push(item);
      }
    });
    this.setState({ timeData });
  };

  filterPDataData = () => {
    let PData = [];
    this.state.PData.forEach((item) => {
      if(item.p < 1) {
        PData.push({ name: item.name, p: 0});
      } else {
        PData.push(item);
      }
    });
    this.setState({ PData });
  };

  filterJDataData = () => {
    let JData = [];
    this.state.JData.forEach((item) => {
      if(item.ms < 50) {
        JData.push({ name: item.name, ms: 0});
      } else {
        JData.push(item);
      }
    });
    this.setState({ JData });
  };

  handleHide() {
    this.setState({ show: false });
  }

  changeModal = () => {
    this.setState({
      filteredData: filteredData2,
    })
  }
  changeModal2 = () => {
    this.setState({
      filteredData: filteredData3,
    })
  }
  changeModal3 = () => {
    this.setState({
      filteredData: filteredData4,
    })
  }

  changeModal4 = () => {
    this.setState({
      filteredData: filteredData5,
    })
  }

  changeModalDefault = () => {
    this.setState({
      filteredData: filteredData,
    })
  }



  render() {
    const { timeData } = this.state;

    const style = {
      top: '115px',
      right: '-50px',
      lineHeight: '24px'
    };

    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Simulation of communication parameters</h1>
        <div className='row'>
          <div className='col-md-12'>
            <h3 style={{textAlign: 'center'}}>Генерація трафіку</h3>
            <div className='graphic-container' style={{display: 'flex', justifyContent: 'center'}}>
              <AreaChart width={950} height={350} data={this.state.dataFreq}
                         margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" label={{ value: "Час, сек", position: 'insideBottomRight', offset: 0 }}/>
                <YAxis label={{ value: "пак/с", position: 'insideLeft', angle: -90 }}/>
                <Tooltip/>
                <Area type='monotone' dataKey='IPTVm' stackId="1" stroke='#8884d8' fill='#8884d8' />
                <Area type='monotone' dataKey='web' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                <Area type='monotone' dataKey='VoIP' stackId="1" stroke='#34e174' fill='#34e174' />
                <Area type='monotone' dataKey='VoD' stackId="1" stroke='#e1a534' fill='#e1a534' />
                <Brush style={{marginTop: 10}}/>
                <Legend iconSize={10} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
              </AreaChart>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <div className='graphic-container'>
              <h3 style={{textAlign: 'center'}}>Затримка</h3>
              <BarChart width={550} height={300} data={timeData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" label={{ value: "Users", position: 'insideBottomRight', offset: 0 }}/>
                <YAxis label={{ value: "t, ms", position: 'insideLeft', angle: -90 }}/>
                <Tooltip/>
                <Bar dataKey="ms" fill="#8884d8">
                  {
                    timeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.ms > 200 ? '#a01313' : entry.ms <= 200 && entry.ms > 150 ? "#dac525" : "#2ca02c"}/>
                    ))
                  }
                </Bar>
              </BarChart>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='graphic-container'>
              <h3 style={{textAlign: 'center'}}>Втрати</h3>
              <BarChart width={550} height={300} data={this.state.PData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" label={{ value: "Users", position: 'insideBottomRight', offset: 0}}/>
                <YAxis label={{ value: "p, %", position: 'insideLeft', angle: -90 }}/>
                <Tooltip/>
                <Bar dataKey="p" fill="#8884d8">
                  {
                    PData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.p > 1 ? '#a01313' : entry.p < 1 && entry.p > 0.1 ? "#dac525" : "#2ca02c"}/>
                    ))
                  }
                </Bar>
              </BarChart>
            </div>
          </div>

        </div>

        <div className='row'>


          <div className='col-md-6'>
            <div className='graphic-container'>
              <h3 style={{textAlign: 'center'}}>Джитер</h3>
              <BarChart width={550} height={300} data={this.state.JData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" label={{ value: "Users", position: 'insideBottomRight', offset: 0 }}/>
                <YAxis label={{ value: "j, ms", position: 'insideLeft', angle: -90 }}/>
                <Tooltip/>
                <Bar dataKey="ms" fill="#8884d8">
                  {
                    JData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.ms > 50 ? '#a01313' : entry.ms < 50 && entry.ms > 20 ? "#dac525" : "#2ca02c"}/>
                    ))
                  }
                </Bar>
              </BarChart>
            </div>
          </div>

        </div>

        <div className='row'>

          <div className="col-md-6">
            <Button bsStyle="info" onClick={this.handleShow}>
              More details
            </Button>
            <Button bsStyle="info" style={{marginLeft: 10}} onClick={() => {
              this.filterTimeData();
              this.filterPDataData();
              this.filterJDataData();
            }}>
              Filter
            </Button>
            <Button bsStyle="primary" style={{marginLeft: 10}} onClick={this.method1} disabled={this.state.isDisableMethod1Btn}>Метод 1</Button>
            <Button bsStyle="primary" style={{marginLeft: 10}} onClick={this.method2} disabled={this.state.isDisableMethod2Btn}>Метод 2</Button>
            <Button bsStyle="primary" style={{marginLeft: 10}} onClick={this.method3} disabled={this.state.isDisableMethod3Btn}>Метод 3</Button>
          </div>
        </div>


        <div>
          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
            bsSize="large"
            aria-labelledby="contained-modal-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
                Відношення показників якості до QoE
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='graphic-container graphic-container-modal'>
                <LineChart width={800} height={300} data={this.state.filteredData}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                  <XAxis dataKey="name" label={{ value: "QoS", position: 'insideBottomRight', offset: 0 }}/>
                  <YAxis label={{ value: "QoE", position: 'insideLeft', angle: -90 }}/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Line type="monotone" dataKey="QoS" stroke="#8884d8" activeDot={{r: 7}}/>
                  <Line type="monotone" dataKey="QoS2" stroke="#8884d8" activeDot={{r: 13}} dot={{ stroke: 'red', strokeWidth: 9 }}/>
                </LineChart>
                <div className='modal-graphic-btn'>
                  <div>
                    <Button onClick={this.changeModal} bsStyle="primary myToggle">Метод 1</Button>
                    <Button onClick={this.changeModal2} bsStyle="primary myToggle">Метод 2</Button>
                    <Button onClick={this.changeModal3} bsStyle="primary myToggle">Метод 3</Button>
                    <Button onClick={this.changeModal4} bsStyle="primary myToggle">Метод 4</Button>
                  </div>
                  <Button onClick={this.changeModalDefault} bsStyle="warning">Reset</Button>
                </div>
                {/*<div className='graphic-modal-labels'>*/}
                  {/*<div className="label-container">*/}
                    {/*<span className="modal-label">Користувачі дуже задоволені</span>*/}
                    {/*<span className="modal-label">Користувачі задовлені</span>*/}
                    {/*<span className="modal-label">Деякі користувачі не задоволені</span>*/}
                    {/*<span className="modal-label">Башато користувачівне задоволені </span>*/}
                    {/*<span className="modal-label">Всі користувачі не задоволені</span>*/}
                  {/*</div>*/}
                {/*</div>*/}
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>


      </div>
    );
  }
}

export default analytics;