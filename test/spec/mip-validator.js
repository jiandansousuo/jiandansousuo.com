/**
 * @file check mip-validator
 * @author xuexb <fe.xiaowu@gmail.com>
 */

const expect = require('chai').expect;
const data = require('../getMIP')();
const validator = require('mip-validator')();

describe('check mip-validator', () => {
  data.forEach(val => {
    it(`check in ${val.path}`, () => {
      let errors = validator.validate(val.html);

      if (errors.length) {
        console.error(JSON.stringify(errors, null, 4));
      }

      expect(errors).to.be.a('array').and.empty;
    });
  });
});
