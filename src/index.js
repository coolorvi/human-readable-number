module.exports = function toReadable(number) {
  let num = number;
  let out = '';

  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (num === 0) {
    return 'zero';
  }

  if (num >= 100) {
    const hundred = Math.floor(num / 100);
    num %= 100;
    out += `${ones[hundred]} hundred`;
    if (num > 0) {
      out += ' ';
    }
  }

  if (num === 0) {
    return out;
  }

  if (num >= 20) {
    const ten = Math.floor(num / 10);
    num %= 10;
    out += tens[ten];
    if (num > 0) {
      out += ` ${ones[num]}`;
    }
  } else if (num >= 10) {
    out += teens[num - 10];
  } else {
    out += ones[num];
  }

  return out;
};
