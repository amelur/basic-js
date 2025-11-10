const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
    const initialActivity = 15;
    const halfLifePeriod = 5730;
    const k = 0.693 / halfLifePeriod;
    const sampleActivityNumber = parseFloat(sampleActivity);
    if (
        typeof sampleActivity !== 'string' ||
        isNaN(sampleActivityNumber) ||
        sampleActivityNumber <= 0 ||
        sampleActivityNumber > 15
    ) {
        return false;
    }
    const age = Math.ceil(Math.log(initialActivity / sampleActivityNumber) / k);
    return age;
}

module.exports = {
  dateSample
};
