import { preprocess } from 'svelte/compiler';
import { civet } from '../src';
import { readSample, readSampleJs } from './sample/readSample';

describe('civet', () => {
  it('basic', async () => {
    const template = `<script lang="civet">${readSample()}</script><div></div>`;
    const preprocessed = await preprocess(template, civet());
    const content = preprocessed.code.split('<script lang="civet">')[1].split('</script>')[0];
    expect(content.trim()).toEqual(readSampleJs().trim());
  });

  it('should support external src files', async () => {
    const template = `<script src="./sample/hello.civet"></script><div></div>`;
    const preprocessed = await preprocess(template, civet());
    // TODO
    expect(false).toEqual(true);
  });
});
