'use strict'

const truekeys = (obj, keys) => !!keys.reduce((accumulator, current) => accumulator && obj[current], true)

const manyTruekeys = array => !!array.reduce((accumulator, current) => accumulator && truekeys(current.obj, current.keys), true)

module.exports = {
    truekeys,
    manyTruekeys
}
