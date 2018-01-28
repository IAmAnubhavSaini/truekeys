/* global describe it */

const expect = require('chai').expect
const truekeys = require('./index').truekeys

describe('truekeys', () => {
    const req = {
        body: {
            email: 'email',
            username: 'username',
            password: 'password',
            passwordConf: 'passwordConf'

        }
    }
    const keys = [
        'email',
        'username',
        'password',
        'passwordConf'
    ]

    it('returns true if all the provided keys in given obj resolve to truthy values', () => {
        const expected = true
        const actual = truekeys(req.body, keys)
        expect(actual).to.equal(expected)
    })
    it('returns false if one of the provided keys in given obj doesn\'t resolve to truthy values', () => {
        const expected = false
        const keys2 = keys.concat(['x'])
        const actual = truekeys(req.body, keys2)
        expect(actual).to.equal(expected)
    })
})
