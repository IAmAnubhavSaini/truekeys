'use strict'

const truekeys = (obj, keys) => truekeys.constraints(obj, keys) && !!keys.reduce((accumulator, current) => accumulator && obj[current], true)
truekeys.constraints = (obj, keys) => typeof obj === 'object' && Array.isArray(keys) && keys.length > 0

const manyTruekeys = array => manyTruekeys.constraints(array) && !!array.reduce((accumulator, current) => accumulator && truekeys(current.obj, current.keys), true)
manyTruekeys.constraints = (array) => Array.isArray(array) && array.length > 0

module.exports = {
    truekeys,
    manyTruekeys
}
