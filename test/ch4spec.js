const expect = require('chai').expect;
const list = require('../ch4/ex3');
let arrayToList = list.arrayToList;
let listToArray = list.listToArray;
let prepend = list.prepend;
let nth = list.nth;

describe('ex3', () => {
  describe('arrayToList', () => {
    let array = [1,2,3];
    it('should be a function', () => {
      expect(arrayToList).to.be.a('function');
    });

    it('should return an object', () => {
      expect(arrayToList(array)).to.be.a('object');
    });

    it('should return a linked list', () => {
      expect(arrayToList(array).rest).to.eql({value: 2, rest: {value: 3, rest: undefined}});
    });
  });

  describe('ListToArray', () => {
    let testList = arrayToList([1,2,3]);
    it('should be a function', () => {
      expect(listToArray).to.be.a('function');
    });

    it('should return an array', () => {
      expect(listToArray(testList)).to.be.a('array');
    });

    it('should create an array from a list of values', () => {
      expect(listToArray(testList)).to.eql([1, 2, 3]);
    });

  });

  describe('Prepend', () => {
    let testList = arrayToList([1,2,3]);
    it('should be a function', () => {
      expect(prepend).to.be.a('function');
    });

    it('should return a list', () => {
      expect(prepend(testList)).to.be.a('object');
    });

    it('should add a value to the beginning of a new list', () => {
      expect(prepend(testList, 0)).to.eql({value: 0, rest: {value: 1, rest: { value: 2, rest: {value: 3, rest: undefined}}}});
    });

  });

  describe ('nth', () => {
    let testList = arrayToList([1, 2, 3,]);
    it('should be a function', () => {
      expect(nth).to.be.a('function');
    });

    it('should return a number', () => {
      expect(nth(testList, 2)).to.be.a('number');
    });

    it('should return the correct number', () => {
      expect(nth(testList, 2)).to.equal(3);
    });

    it('should return undefined when the item is not in the list', () => {
      expect(nth(testList, 3)).to.equal(undefined);
    });

  });




});