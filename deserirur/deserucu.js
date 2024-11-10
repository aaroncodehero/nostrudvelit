   const s = "hello";
   const sx = (isNumber$1(s) ? s : s[0]) || 1;
   // sx is 'h' because s is not a number, so s[0] is used, which is 'h' and is truthy.
   