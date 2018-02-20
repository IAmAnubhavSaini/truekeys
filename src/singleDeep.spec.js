/* global describe it */

const expect = require('chai').expect
const singleDeep = require('./index').singleDeep

describe('singleDeep', () => {
    const req = {
        body: {
            email: 'email',
            username: 'username',
            password: 'password',
            passwordConf: 'passwordConf'

        }
    }
    const keys = [
        'body',
        'email'
    ]

    it('returns true if all the provided keys in given obj resolve to truthy values', () => {
        const expected = true
        const actual = singleDeep(req, keys)
        expect(actual).to.equal(expected)
    })
    it('returns false if one of the provided keys in given obj doesn\'t resolve to truthy values', () => {
        const expected = false
        const keys2 = keys.concat(['x'])
        const actual = singleDeep(req, keys2)
        expect(actual).to.equal(expected)
    })
})
