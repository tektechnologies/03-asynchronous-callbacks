'use strict';

const reader = require('../../lib/reader');
const file1 = `${__dirname}/../../data/file1.txt`;




describe('reader', () => {
  //done tells jest that my test is finished. 
  it('breaks bad file', done => {
    var paths = [file1];
    reader(
      paths,
      //reader(['./this/does/not/work'],
      (err, data) => {
        console.log(err);
        expect(err).not.toBe(null);
        expect(data.length).toBe(1);
        //first file data as string
        expect(data[0]).toBe('uno');
        //tells the 
        done();
      });
  });
});