import { compile } from '@danielx/civet';
import type { PreprocessorGroup, Preprocessor } from 'svelte/types/compiler/preprocess';
import getTagInfo from './getTagInfo';

const script: Preprocessor = (data) => {
  const { content, lang, src } = getTagInfo(data);

  if (lang !== 'civet') {
    return { code: content };
  }

  console.log(content);

  const res = compile(content, {
    js: true,
  });

  console.log(res);

  return {
    code: res,
  };
};

export function civet(): PreprocessorGroup {
  return {
    script,
  };
}
