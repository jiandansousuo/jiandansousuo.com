/**
 * @file site config check
 * @author xuexb <fe.xiaowu@gmail.com>
 */

const expect = require('chai').expect;
const posts = require('../getJSON')().posts;

describe('check post config', () => {
  posts.forEach(post => {
    describe(`check in ${post.path}`, () => {
      it(`post.title`, () => {
        expect(post.title).to.be.a('string').and.not.empty;
      });

      it(`post.desc`, () => {
        expect(post.desc).to.be.a('string').and.not.empty;
      });

      it(`post.author`, () => {
        expect(post.author).to.be.a('string').and.not.empty;
      });

      it(`<!--more-->`, () => {
        expect(post.excerpt).to.be.a('string').and.not.empty;
      });
    });
  });
});
