import React, {Component} from 'react';
import {
  HighchartsChart, Chart, XAxis, YAxis, Title, Subtitle, Legend, LineSeries
} from 'react-jsx-highcharts';

// const plotOptions = {
//   series: {
//     pointStart: 1
//   }
// };

const data = {
  x: [1, 2,	3,  4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,
    30,	31,	32,	33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50
  ],
  y1:[1,	4.693147181,	10.09861229,	17.38629436,	26.60943791,	37.79175947,	50.94591015,	66.07944154,	83.19722458,
    102.3025851,	123.3978953,	146.4849066,	171.5649494,	198.6390573,	227.7080502,	258.7725887,	291.8332133,
    326.8903718,	363.944439,	402.9957323,	444.0445224,	487.0910425,	532.1354942,	579.1780538,	628.2188758,
    679.2580965,	732.2958369,	787.3322045,	844.3672958,	903.4011974,	964.4339872,	1027.465736,	1092.496508,
    1159.526361,	1228.555348,	1299.583519,	1372.610918,	1447.637586,	1524.663562,	1603.688879,	1684.713572,
    1767.73767,	1852.7612,	1939.78419,	2028.806662,	2119.828641,	2212.850148,	2307.871201,	2404.89182,	2503.912023
  ],
  y2:[51,	54,	59,	66,	75,	86,	99,	114,	131,	150,	171,	194,	219,	246,	275,	306,	339,	374,	411,	450,	491,
    534,	579,	626,	675,	726,	779,	834,	891,	950,	1011,	1074,	1139,	1206,	1275,	1346,	1419,	1494,	1571,	1650,
    1731,	1814,	1899,	1986,	2075,	2166,	2259,	2354,	2451,	2550
  ],
  y3:[501,	504,	509,	516,	525,	536,	549,	564,	581,	600,	621,	644,	669,	696,	725,	756,	789,	824,	861,
    900,	941,	984,	1029,	1076,	1125,	1176,	1229,	1284,	1341,	1400,	1461,	1524,	1589,	1656,	1725,	1796,	1869,	1944,
    2021,	2100,	2181,	2264,	2349,	2436,	2525,	2616,	2709,	2804,	2901,	3000
  ],
};

class dropdownMenu2 extends Component {
  render() {
    return (
      <div>
        <HighchartsChart>
          <Chart />

          <Title>Solar Employment Growth by Sector, 2010-2016</Title>

          <Subtitle>Source: thesolarfoundation.com</Subtitle>

          <Legend layout="vertical" align="right" verticalAlign="middle" />

          <XAxis type="number">
            <XAxis.Title>X</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Number of employees</YAxis.Title>
            <LineSeries name="y1" data={data.y1} />
            <LineSeries name="y2" data={data.y2} />
            <LineSeries name="y3" data={data.y3} />
          </YAxis>
        </HighchartsChart>
      </div>
    );
  }
}

export default dropdownMenu2;