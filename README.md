# svelte-civet

[svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) for civet (WIP)

## Install

```
pnpm i -D svlete-civet @danielx/civet
```

## How to use

```js
// svelte.config.js
const config = {
  ...
  preprocess: [civet(), ...],
  ...
}
```

```html
<!-- ...svelte -->
<script lang="civet">
  ...
</script>
```

## For Example

```html
<script lang="civet">
  let hello: string = "hel" |> & + "lo";

  $: hello2 = hello + hello;
</script>

<h1>{hello}</h1>
<h1>{hello2}</h1>
```
