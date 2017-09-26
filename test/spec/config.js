/**
 * @file site config check
 * @author xuexb <fe.xiaowu@gmail.com>
 */

const expect = require('chai').expect;
const data = require('../getJSON')();

describe('check config', () => {
  it('meta', () => {
    expect(data.meta).to.be.a('object').and.not.undefined;
  });

  it('config.title', () => {
    expect(data.meta.title).to.be.a('string').and.not.empty;
  });

  it('config.subtitle', () => {
    expect(data.meta.subtitle).to.be.a('string').and.not.empty;
  });

  it('config.description', () => {
    expect(data.meta.description).to.be.a('string').and.not.empty;
  });

  it('config.author', () => {
    expect(data.meta.author).to.be.a('string').and.not.empty;
  });

  it('config.url', () => {
    expect(data.meta.url).to.be.a('string').and.not.empty;
  });
});
