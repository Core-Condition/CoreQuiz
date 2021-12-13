var CryptoJS = require("crypto-js");
module.exports = {
  encrypt: function (message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
  },
  decrypt: function (message, key) {
    const bytes = CryptoJS.AES.decrypt(message, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  },
}