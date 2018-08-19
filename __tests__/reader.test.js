'use strict';

const reader = require('../lib/reader');
const file1 = `${__dirname}/../data/file1.txt`;




describe('reader', () => {
  //done tells jest that my test is finished. 
  it('reads the file', done => {
    var paths = [file1];
    reader(
      ['./this/does/not/work'],
      (err, data) => {
        console.log(data);
        expect(err).not.toBe(null);
        //tells the 
        done();
      });
    console.log('test end');
  });


  it('read file one', done => {
    var paths = [file1];
    reader(
      paths,
      (err, data) => {
        console.log(err);
        expect(err).not.toBe(null);
        expect(data.length).toBe(1);
        //first file data as string
        expect(data.length).toBe(paths.lenght);
        expect(data[0]).toBe('file one');
        //tells the 
        done();
      });
  });
});