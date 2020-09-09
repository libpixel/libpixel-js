# LibPixel

`libpixel.js` allows developers to use the services of LibPixel in their web applications without having to rely on other dependencies. The service allows you to generate and sign URLs.

[![NPM Version](https://img.shields.io/npm/v/imgix.js.svg)](https://www.npmjs.com/package/libpixel)
[![Build Status](https://travis-ci.org/libpixel/libpixel-js.svg?branch=master)](https://travis-ci.org/libpixel/libpixel-js)
[![Minified Size](https://img.shields.io/bundlephobia/min/imgix.js)](https://bundlephobia.com/result?p=libpixel)
[![License](https://img.shields.io/github/license/imgix/imgix.js)](https://github.com/libpixel/libpixel-js/blob/master/LICENSE)

---

## Introduction

With the help of `libpixel.js` you can generate responsive images by defining the paremeters and letting the library generate the signed URLs. The generated and signed URLs can be used by setting the `src` attribute of the `img` element. `picture` element can be used to create a more responsive system that loads specific images according to the resolution and orientation of devices.      

## Install

There are two ways to install `libpixel.js`:


1: **npm**: `$ npm install libpixel`
2: **Manually**: Download the [latest release](https://github.com/libpixel/libpixel-js/releases) and use the JavaScript files in the `src` folder.


## Usage

`libpixel.js` is pretty simple to get started with. You just start by requiring the module and creating an instance of the client. The only required attribute is `host`, which should contain your LibPixel `domain` that you will setup while [signing up](https://dashboard.libpixel.com/users/sign_up). 

```js
var LibPixel = require("libpixel");
var libpx = new LibPixel({ host: "your-domain.libpx.com" });
```

In addition to `host`, the following attributes are supported:

* `secret`: Auth secret for your LibPixel account. Required for signing requests.
* `https`: Generate HTTPS URLs. Default is `false`.

After initializing the LibPixel client, you are ready to start using `libpixel.js`. With the help of it, you can sign existing URLs to enable LibPixel support by using the `sign()` method, or you can generate and sign new URLs at the same time by using the `url()` method of the LibPixel client. 

Regardless of what method you use, the output will be a signed URL, which can then use in the `src` attribute of your `img` elements to provide processed images that meet your requirements. 

### Sign URLs

You can sign an existing URL using the `sign()` method:

```js
var url = libpx.sign("http://test.libpx.com/images/1.jpg?width=400");
```

### Generate URLs

You can also generate and sign URLs at the same time with the `url()` method:

```js
var url = libpx.url("/images/1.jpg", { height: 400, blur: 20, saturation: -80 });
```

## License

`libpixel.js` is owned by [LibPixel](https://www.libpixel.com/)and is licensed under the [MIT](LICENSE) license. Contributions are welcomed, please review [contributing guidelines]() to get started.
