const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 const sampleActivityn = parseFloat(sampleActivity, 10);
  
  if (!sampleActivity 
    || !isFinite(sampleActivityn)
    || typeof sampleActivity !== 'string' 
    || (sampleActivityn >= MODERN_ACTIVITY)
    || (sampleActivityn <= 0)
    ) return false;
  
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityn) / k);
          
    

};
