
module.exports = function(words) {
  // fastest: 500 words/min, nearly 9 words per seconds
  var fast = words / 9;

  // slowest: 200 words/min, nearly 3 words per seconds
  var slow = words / 3;

  var normal = words / 5;
  return {fast: fast, slow: slow, normal: normal};
};
