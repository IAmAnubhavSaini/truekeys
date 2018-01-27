'use strict'

const truekeys = (obj, keys) => !!keys.reduce((accumulator, current) => accumulator && obj[current], true)

module.exports = truekeys
