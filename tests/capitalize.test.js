import capitalize from "../src/capitalize.js";


if (capitalize('hello') !== 'Hello') {
  throw new Error('Something went wrong!');
}

if (capitalize('') !== '') {
  throw new Error('Something went wrong');
}

console.log('All tests are passed')
