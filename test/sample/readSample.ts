import * as fs from 'fs';

export const readSample = () => fs.readFileSync('test/sample/hello.civet', 'utf8');

export const readSampleJs = () => fs.readFileSync('test/sample/hello.js', 'utf8');
