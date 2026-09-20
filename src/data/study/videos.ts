// Verified video links per lesson slug (each URL fetched and confirmed on-topic, September 2026). Source: Corbettmaths.
const C = 'Corbettmaths';
export const VIDEOS: Record<string, { title: string; url: string; source: string }[]> = {
  'n1-numbers': [
    { title: 'Ordering numbers, including negatives (video 208)', url: 'https://corbettmaths.com/2013/06/06/ordering-numbers-including-negatives/', source: C },
    { title: 'Place value (video 222)', url: 'https://corbettmaths.com/2013/03/29/place-value/', source: C },
  ],
  'n1-add-subtract': [
    { title: 'Addition (video 6)', url: 'https://corbettmaths.com/2013/12/19/addition-video-6/', source: C },
    { title: 'Approximation to calculations, estimating (video 215)', url: 'https://corbettmaths.com/2012/08/21/approximation-to-calculations/', source: C },
  ],
  'n1-multiply-divide': [
    { title: 'Multiplication: grid method (video 199)', url: 'https://corbettmaths.com/2013/12/20/multiplication-grid-method-video-199/', source: C },
    { title: 'Division, short division (video 98)', url: 'https://corbettmaths.com/2013/12/28/division-video-98/', source: C },
    { title: 'Multiplying by 10, 100 and 1000 (video 202)', url: 'https://corbettmaths.com/2013/06/06/multiplication-by-10-100-and-1000-2/', source: C },
    { title: 'Order of operations (video 211)', url: 'https://corbettmaths.com/2013/06/08/order-of-operations/', source: C },
  ],
  'n2-fraction-of': [{ title: 'Fractions of amounts (video 137)', url: 'https://corbettmaths.com/2012/08/20/fractions-of-amounts/', source: C }],
  'n2-fractions-compare': [
    { title: 'Ordering fractions (video 144)', url: 'https://corbettmaths.com/2013/02/17/ordering-fractions/', source: C },
    { title: 'Fractions: addition and subtraction (video 133)', url: 'https://corbettmaths.com/2012/08/21/fractions-addition-and-subtraction/', source: C },
  ],
  'n3-decimals': [
    { title: 'Ordering decimals (video 95)', url: 'https://corbettmaths.com/2012/08/10/ordering-decimals-video/', source: C },
    { title: 'Rounding to 1 or 2 decimal places (video 278)', url: 'https://corbettmaths.com/2013/09/07/rounding-to-1-or-2-decimal-places/', source: C },
  ],
  'n4-percent-of': [
    { title: 'Percentages of amounts, non-calculator (video 234)', url: 'https://corbettmaths.com/2012/08/20/percentages-of-amounts-non-calculator/', source: C },
    { title: 'Expressing one quantity as a percentage of another (video 237)', url: 'https://corbettmaths.com/2012/08/21/expressing-one-quantity-as-a-percentage-of-another/', source: C },
  ],
  'n4-percent-change': [
    { title: 'Increasing or decreasing by a percentage (video 238)', url: 'https://corbettmaths.com/2012/08/21/increasing-or-decreasing-by-a-percentage/', source: C },
    { title: 'Percentage change (video 233)', url: 'https://corbettmaths.com/2013/03/31/percentage-change/', source: C },
  ],
  'n4-reverse-percent': [{ title: 'Reverse percentages (video 240)', url: 'https://corbettmaths.com/2013/02/15/reverse-percentages/', source: C }],
  'n5-ratio': [
    { title: 'Ratio: sharing the total (video 270)', url: 'https://corbettmaths.com/2013/03/03/ratio-sharing-the-total/', source: C },
    { title: 'Simplifying ratio (video 269)', url: 'https://corbettmaths.com/2013/03/03/simplifying-ratio/', source: C },
  ],
  'n5-proportion': [
    { title: 'Unitary method (video 255a)', url: 'https://corbettmaths.com/2018/11/28/unitary-method-video/', source: C },
    { title: 'Best buys (video 210)', url: 'https://corbettmaths.com/2013/03/26/best-buys/', source: C },
    { title: 'Exchange rates (video 214a)', url: 'https://corbettmaths.com/2016/01/03/exchange-rates/', source: C },
  ],
  'n6-formulas': [{ title: 'Substitution into expressions (video 20)', url: 'https://corbettmaths.com/2012/08/20/substitution-into-expressions/', source: C }],
  'm1-money': [
    { title: 'Discounts (video 400f)', url: 'https://corbettmaths.com/2022/11/26/discounts-video/', source: C },
    { title: 'Cost per kg, best value (video 400k)', url: 'https://corbettmaths.com/2021/11/22/cost-per-kg-video/', source: C },
  ],
  'm1-interest-tax': [
    { title: 'Simple interest (video 236a)', url: 'https://corbettmaths.com/2021/11/01/simple-interest-video/', source: C },
    { title: 'Compound interest (video 236)', url: 'https://corbettmaths.com/2012/08/21/compound-interest/', source: C },
    { title: 'Income tax (video 400j)', url: 'https://corbettmaths.com/2022/01/07/income-tax-video/', source: C },
  ],
  'm2-units': [
    { title: 'Metric units for length (video 349a)', url: 'https://corbettmaths.com/2014/01/16/metric-units-for-length/', source: C },
    { title: 'Metric to imperial length (video 349d)', url: 'https://corbettmaths.com/2014/01/18/metric-to-imperial-length/', source: C },
    { title: 'Conversion graphs (video 152)', url: 'https://corbettmaths.com/2012/08/09/conversion-graphs/', source: C },
  ],
  'm2-time-speed': [
    { title: 'Timetables (video 320)', url: 'https://corbettmaths.com/2012/08/10/timetables/', source: C },
    { title: 'Speed, distance, time (video 299)', url: 'https://corbettmaths.com/2016/01/01/speed-distance-time/', source: C },
  ],
  'm3-perimeter-area': [
    { title: 'Perimeter (video 241)', url: 'https://corbettmaths.com/2012/08/02/perimeter/', source: C },
    { title: 'Area of a triangle (video 49)', url: 'https://corbettmaths.com/2013/12/20/area-of-a-triangle-video-49/', source: C },
    { title: 'Area of compound shapes (video 41)', url: 'https://corbettmaths.com/2012/08/02/area-of-compound-shapes/', source: C },
  ],
  'm3-circles': [
    { title: 'Circumference (video 60)', url: 'https://corbettmaths.com/2013/12/21/circumference-video-60/', source: C },
    { title: 'Area of a circle (videos 40 and 59)', url: 'https://corbettmaths.com/2013/12/22/area-of-a-circle-video-40-and-59/', source: C },
  ],
  'm3-volume': [
    { title: 'Volume of cuboids and cubes (video 355)', url: 'https://corbettmaths.com/2012/08/09/volume-of-cuboids-and-cubes/', source: C },
    { title: 'Volume of a cylinder (video 357)', url: 'https://corbettmaths.com/2013/02/15/volume-of-a-cylinder/', source: C },
    { title: 'Surface area of a cuboid (video 310)', url: 'https://corbettmaths.com/2013/03/29/surface-area-of-a-cuboid/', source: C },
  ],
  'm4-scale-coordinates': [
    { title: 'Map scales (video 283)', url: 'https://corbettmaths.com/2013/11/13/maps-scales/', source: C },
    { title: 'Coordinates (video 84)', url: 'https://corbettmaths.com/2013/04/15/coordinates/', source: C },
  ],
  'm4-plans-angles': [
    { title: 'Views and elevations (video 354)', url: 'https://corbettmaths.com/2014/01/16/views-and-elevations/', source: C },
    { title: 'Angles in a triangle (video 37)', url: 'https://corbettmaths.com/2012/08/10/angles-in-a-triangle/', source: C },
    { title: 'Angles on a straight line (video 35)', url: 'https://corbettmaths.com/2013/12/19/angles-straight-line-video-35/', source: C },
  ],
  'h1-averages': [
    { title: 'The mean (video 53)', url: 'https://corbettmaths.com/2012/08/02/the-mean/', source: C },
    { title: 'The median (video 50)', url: 'https://corbettmaths.com/2012/08/02/the-median/', source: C },
  ],
  'h1-grouped-mean': [
    { title: 'Means from frequency tables (video 54)', url: 'https://corbettmaths.com/2012/08/19/means-from-frequency-tables/', source: C },
    { title: 'Estimated means from grouped data (video 55)', url: 'https://corbettmaths.com/2012/08/19/estimated-means-from-grouped-data/', source: C },
  ],
  'h2-charts': [
    { title: 'Reading bar charts (video 148)', url: 'https://corbettmaths.com/2012/08/10/reading-bar-charts/', source: C },
    { title: 'Line graphs (video 160)', url: 'https://corbettmaths.com/2013/05/22/line-graphs/', source: C },
    { title: 'Interpreting pie charts (video 164)', url: 'https://corbettmaths.com/2013/05/25/interpreting-pie-charts/', source: C },
  ],
  'h2-scatter-probability': [
    { title: 'Scatter graphs: correlation (video 168)', url: 'https://corbettmaths.com/2012/08/10/scatter-graphs-correlation/', source: C },
    { title: 'Probability (video 245)', url: 'https://corbettmaths.com/2013/06/15/probability/', source: C },
  ],
  'h2-combined': [
    { title: 'Sample space diagrams (video 246)', url: 'https://corbettmaths.com/2013/06/18/sample-space-diagrams/', source: C },
    { title: 'Two-way tables (video 319)', url: 'https://corbettmaths.com/2012/08/10/two-way-tables/', source: C },
  ],
};
