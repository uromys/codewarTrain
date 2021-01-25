function rot13(str) {
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'; //+13
  var index     = x => input.indexOf(x);
  let position ;

  var translate = position => index(position) > -1 ? output[index(position)] : position;
  return str.split('').map(translate).join('');
}
