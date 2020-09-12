class VigenereCipheringMachine {

  constructor (direct){
    if (direct === undefined){
      this.direct = true;
    } else {
      this.direct = direct;
    }    
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error();
    let textCharCode = text.toUpperCase().split('').map((e) => e.charCodeAt(0))
    let keyCharCode = key.toUpperCase().split('').map((e) => e.charCodeAt(0))
    let nonLetterDif = 0
    let code = textCharCode.map((textLetterCharCode, i) => 	{
      let res ='';
      if (textLetterCharCode < 65 || textLetterCharCode > 90) {  //проверяем на вхождение в диапазон алфавита
        res = String.fromCodePoint(textLetterCharCode);  //все небуквы пушим как есть
        nonLetterDif += 1;   //магическое смещение по массиву keyCharCode
      }else{
        res = String.fromCodePoint(65 + (textLetterCharCode + keyCharCode[(i - nonLetterDif) % keyCharCode.length]) % 26); //шифруем буквы
      }
      return res;
    });
    return this.direct ? code.join('') : code.reverse().join('');
  }

  decrypt(code, key) {
    if (!code || !key) throw new Error();
    let codeCharCode = code.toUpperCase().split('').map((e) => e.charCodeAt(0))
    let keyCharCode = key.toUpperCase().split('').map((e) => e.charCodeAt(0))
    let nonLetterDif = 0
    let text = codeCharCode.map((codeLetterCharCode, i) => 	{
      let res ='';
      if (codeLetterCharCode < 65 || codeLetterCharCode > 90) {
        res = String.fromCodePoint(codeLetterCharCode);
        nonLetterDif += 1;
      }else{
        res = String.fromCodePoint(65 + (codeLetterCharCode - keyCharCode[(i - nonLetterDif) % keyCharCode.length] + 26) % 26);
      }
      return res;
    });
    return this.direct ? text.join('') : text.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
