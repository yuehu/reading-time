# reading-time

Count reading time of an entry.

> The average adult reading rate is 250 words per minute with 70% comprehension

## Installation

Install with [component(1)](http://component.io):

    $ component install yuehu/reading-time

## API

```javascript
var time = require('reading-time');
time(word_count)
// in seconds
// {fast: 100, normal: 180, slow: 300}
```


## License

MIT
