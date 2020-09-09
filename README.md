# LibPixel

`libpixel.js` allows developers to use the services of LibPixel in their web applications without having to rely on other dependencies. The service allows you to generate and sign URLs.

[![NPM Version](https://img.shields.io/npm/v/imgix.js.svg)](https://www.npmjs.com/package/libpixel)
[![Build Status](https://travis-ci.org/libpixel/libpixel-js.svg?branch=master)](https://travis-ci.org/libpixel/libpixel-js)
[![Minified Size](https://img.shields.io/bundlephobia/min/imgix.js)](https://bundlephobia.com/result?p=libpixel)
[![License](https://img.shields.io/github/license/imgix/imgix.js)](https://github.com/libpixel/libpixel-js/blob/master/LICENSE)

---

## Install

```bash
$ npm install libpixel
```

## Usage

Start by requiring the module and creating an instance of the client.

```js
var LibPixel = require("libpixel");
var libpx = new LibPixel({ host: "test.libpx.com" });
```

In addition to `host`, the following options are supported:

* `secret`: Auth secret for your LibPixel account. Required for signing requests.
* `https`: Generate HTTPS URLs. Default is `false`.

### Sign URLs

You can sign an existing URL using the `sign` function:

```js
var url = libpx.sign("http://test.libpx.com/images/1.jpg?width=400");
```

### Generate URLs

You can also generate and sign URLs at the same time with the `url` function:

```js
var url = libpx.url("/images/1.jpg", { height: 400, blur: 20, saturation: -80 });
```

## License

[MIT](LICENSE)
