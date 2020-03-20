const SEASON = {
  0: 'winter',
  1: 'winter',
  2: 'spring',
  3: 'spring',
  4: 'spring',
  5: 'summer',
  6: 'summer',
  7: 'summer',
  8: 'autumn',
  9: 'autumn',
  10: 'autumn',
  11: 'winter',
}
module.exports = function getSeason(date) {
  //console.log(date.getUTCDate());
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') throw new Error();

  return SEASON[date.getMonth()];
};
