class VigenereCipheringMachine {
  flag = true;
  constructor(command) {
      if (command === false) this.flag = false;
  }
  encrypt(message, key) {
      if (message === undefined && key === undefined) throw new Error();
      const mesUp = message.toUpperCase();
      const kUp = key.toUpperCase();
      let res = '';
      for (let i = 1, j = 1; i <= mesUp.length; i++) {
          let con = mesUp[i - 1];
          if (65 > con.charCodeAt() || con.charCodeAt() > 90) {
              res += con;
              continue;
          }
          res += String.fromCharCode(((con.charCodeAt() + kUp[j - 1].charCodeAt() - 130) % 26) + 65);
          if (j % key.length === 0) j = 0;
          j++;
      }
      return this.flag === true ? res : res.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
      if (encryptedMessage === undefined && key === undefined) throw new Error();
      let res = '';
      const kUp = key.toUpperCase();
      for (let i = 1, j = 1; i <= encryptedMessage.length; i++) {
          let enccon = encryptedMessage[i - 1];
          if (65 > enccon.charCodeAt() || enccon.charCodeAt() > 90) {
              res += enccon;
              continue;
          }
          res += String.fromCharCode(((enccon.charCodeAt() - kUp[j - 1].charCodeAt() + 26) % 26) + 65);
          if (j % key.length === 0) j = 0;
          j++;
      }
      return this.flag === true ? res : res.split('').reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;