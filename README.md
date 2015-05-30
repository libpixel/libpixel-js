# LibPixel

JavaScript library to generate and sign LibPixel URLs.

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
