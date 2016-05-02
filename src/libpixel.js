var jsSHA = require("./sha1");

function LibPixel(options) {
  options = options || {};

  this.host   = options.host;
  this.https = options.https;
  this.secret = options.secret;
}

LibPixel.prototype = {
  constructor: LibPixel,

  sign: function(url) {
    var parts = url.match(/^(.+?\/\/[^\/]+)(\/[^#]*)(#.*)?$/);
    var sign = parts[2];

    if (sign[sign.length-1] === "?") {
      sign = sign.slice(0, -1);
    }

    var separator = "?";
    if (sign.indexOf("?") > 0) {
      separator = "&";
    }

    var signer = new jsSHA(sign, "TEXT");
    var hmac = signer.getHMAC(this.secret, "TEXT", "SHA-1", "HEX");

    url = parts[1] + sign + separator + "signature=" + hmac;

    if (parts[3]) {
      url += parts[3];
    }

    return url;
  },

  url: function(path, options) {
    path = path || "/";
    options = options || {};

    var escapedOptions = [];

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        escapedOptions.push(key + "=" + encodeURIComponent(options[key]));
      }
    }

    var qs = escapedOptions.join("&");
    var url = this.https ? "https" : "http";
    url += "://" + this.host + path;

    if (qs !== "") {
      url += "?" + qs;
    }

    if (this.secret) {
      return this.sign(url);
    } else {
      return url;
    }
  }
};

module.exports = LibPixel;
