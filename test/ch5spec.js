let expect = require('chai').expect;

let fl = require('../ch5/ex1');
let flatten = fl.flatten;

describe('ex 4', () => {
  describe('flatten', () => {
    let arrays = [[1, 2, 3], [4, 5], [6]];
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });

    it('should flatten an array', () => {
      expect(flatten(arrays)).to.eql([1, 2, 3, 4, 5, 6]);
    });

  });
});