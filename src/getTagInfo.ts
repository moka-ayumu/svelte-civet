import { Preprocessor } from 'svelte/types/compiler/preprocess';

export default function getTagInfo(data: Parameters<Preprocessor>[0]) {
  const { attributes, content } = data;
  // TODO: dependencies

  return {
    lang: attributes.lang ? attributes.lang : undefined,
    src: attributes.src ? attributes.src : undefined,
    content,
  };
}
