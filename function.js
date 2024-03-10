// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = function(x, unit, subunit) {
  // For each parameter, its `.value` contains
  // either its value in the type you've declared,
  // or it's `undefined`.  This is a good place to
  // extract the `.value`s and assign default
  // values.
  //str = str.value ?? "";
  //start = start.value ?? 0;
  //end = end.value;

  // unit is the currency and subunit is the small unit of it 
  unit = " " + unit.value;
  subunit = " " + subunit.value;
  x = x.value;

  console.log("I'm alive");

  var comma = " و ";

  var small = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة', 'أحدى عشر', 'أثنى عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر', 'عشرون', 'واحد وعشرون', 'اثنان وعشرون', 'ثلاثة وعشرون', 'أربعة وعشرون', 'خمسة وعشرون', 'ستة وعشرون', 'سبعة وعشرون', 'ثمانية وعشرون', 'تسعة وعشرون', 'ثلاثون', 'واحد وثلاثون', 'اثنان وثلاثون', 'ثلاثة وثلاثون', 'أربعة وثلاثون', 'خمسة وثلاثون', 'ستة وثلاثون', 'سبعة وثلاثون', 'ثمانية وثلاثون', 'تسعة وثلاثون', 'أربعون', 'واحد وأربعون', 'اثنان وأربعون', 'ثلاثة وأربعون', 'أربعة وأربعون', 'خمسة وأربعون', 'ستة وأربعون', 'سبعة وأربعون', 'ثمانية وأربعون', 'تسعة وأربعون', 'خمسون', 'واحد وخمسون', 'اثنان وخمسون', 'ثلاثة وخمسون', 'أربعة وخمسون', 'خمسة وخمسون', 'ستة وخمسون', 'سبعة وخمسون', 'ثمانية وخمسون', 'تسعة وخمسون', 'ستون', 'واحد وستون', 'اثنان وستون', 'ثلاثة وستون', 'أربعة وستون', 'خمسة وستون', 'ستة وستون', 'سبعة وستون', 'ثمانية وستون', 'تسعة وستون', 'سبعون', 'واحد وسبعون', 'اثنان وسبعون', 'ثلاثة وسبعون', 'أربعة وسبعون', 'خمسة وسبعون', 'ستة وسبعون', 'سبعة وسبعون', 'ثمانية وسبعون', 'تسعة وسبعون', 'ثمانون', 'واحد وثمانون', 'اثنان وثمانون', 'ثلاثة وثمانون', 'أربعة وثمانون', 'خمسة وثمانون', 'ستة وثمانون', 'سبعة وثمانون', 'ثمانية وثمانون', 'تسعة وثمانون', 'تسعون', 'واحد وتسعون', 'اثنان وتسعون', 'ثلاثة وتسعون', 'أربعة وتسعون', 'خمسة وتسعون', 'ستة وتسعون', 'سبعة وتسعون', 'ثمانية وتسعون', 'تسعة وتسعون'];

  var hundreds = ['', 'مائة ', 'مائتان ', 'ثلاثمائة ', 'اربعمائة ', 'خمسائة ', 'ستمائة ', 'سبعمائة ', 'ثمانمائة ', 'تسعمائة '];

  var fractitle;
  var thirdandfroth;
  var h;
  var t;
  var second;
  var first;
  var ht;
  var htt;
  var mtitle;
  var ttitle;
  var sixpose;

  
  // get the fraction استخراج الكسر
  var frac = Math.round((x - Math.floor(x)) * 100);
  if (frac == 0) { fractitle = "";}
  if (frac > 0) { fractitle = comma + small[frac] + subunit; }
  x = Math.floor(x);

  // x is 0
  if (x == 0) { return small[frac] + subunit; }

  // from 1 to 99
  if (x < 100) {
    return small[x] + unit + fractitle;
  }

  // from 100 to 999
  if (x < 1000) {

    h = Math.floor(x / 100);
    x = x - h * 100;
    x = Math.floor(x);
    if (x > 0) {

      return hundreds[h] + comma + small[x] + unit + fractitle;
    }
    return hundreds[h] + unit + fractitle;
  }

  // from 1000 to 99999
  if (x < 100000) {
    t = Math.floor(x / 1000);
    if (t > 2) {
      thirdandfroth = small[t];
    } else (thirdandfroth = '');
    x = x - t * 1000;

    if (t == 2) { ttitle = 'الفان'; } else if (t < 10) { ttitle = ' الف '; } else { ttitle = ' الف '; }

    h = Math.floor(x / 100);
    if (h > 0) {
      second = comma + hundreds[h];
      x = x - h * 100;
    } else { second = ''; }

    if (x != 0) {
      first = comma + small[x];
    } else { first = ''; }

    return thirdandfroth + ttitle + second + first + unit + fractitle;
  }

  // from 100000 to 999999
  if (x < 1000000) {
    ht = Math.floor(x / 100000);
    htt = hundreds[ht];
    x = x - ht * 100000;

    t = Math.floor(x / 1000);
    if (t > 2) {
      thirdandfroth = comma + small[t];
    } else (thirdandfroth = '');
    x = x - t * 1000;

    if (t == 2) { ttitle = 'الفان'; } else { ttitle = ' الف '; }

    h = Math.floor(x / 100);
    if (h > 0) {
      second = comma + hundreds[h];
      x = x - h * 100;
    } else { second = ''; }

    if (x != 0) {
      first = comma + small[x];
    } else { first = ''; }

    return htt + thirdandfroth + ttitle + second + first + unit + fractitle;
  }

  // from 1000000 to 9999999
  if (x < 99999999) {
    var million = Math.floor(x / 1000000);
    x = x - million * 1000000;
    if (million == 2) { mtitle = 'مليونان'; } else if (million < 10) { mtitle = ' ملايين '; } else { mtitle = ' مليون '; }
    if (million > 2) {
      sixpose = small[million];
    } else (sixpose = '');

    ht = Math.floor(x / 100000);
    if (ht > 0) { htt = comma + hundreds[ht]; } else { htt = ''; }
    x = x - ht * 100000;

    t = Math.floor(x / 1000);
    if (t > 2) {
      thirdandfroth = small[t];
    } else (thirdandfroth = '');
    x = x - t * 1000;

    if (t == 2) { ttitle = 'الفان'; } else if (t == 0) { ttitle = ''; } else { ttitle = ' الف '; }

    h = Math.floor(x / 100);
    if (h > 0) {
      second = comma + hundreds[h];
      x = x - h * 100;
    } else { second = ''; }

    if (x != 0) {
      first = comma + small[x];
    } else { first = ''; }

    if (ttitle == 0 && ht > 0) { ttitle = ' الف '; }
    return sixpose + mtitle + htt + thirdandfroth + ttitle + second + first + unit + fractitle;

  }

  // Your function should return the exact type
  // you've declared for the `result` in
  // `glide.json`, or `undefined` if there's an
  // error or no result can be produced, because a
  // required input is `undefined`, for example.
  //return str.substring(start, end);
};
