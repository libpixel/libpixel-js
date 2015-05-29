var LibPixel = require("../src/libpixel");

describe("LibPixel", function() {

  describe("sign", function() {
    var libpx = new LibPixel({ secret: "LibPixel" });

    it("adds the query string with the signature", function() {
      expect(libpx.sign("http://test.libpx.com/images/1.jpg")).
        toEqual("http://test.libpx.com/images/1.jpg?signature=bd5634c055d707c1638eff93eb88ff31277958f0");
    });

    it("ignores the '?' separator if there's no query string", function() {
      expect(libpx.sign("http://test.libpx.com/images/1.jpg?")).
        toEqual("http://test.libpx.com/images/1.jpg?signature=bd5634c055d707c1638eff93eb88ff31277958f0");
    });

    it("appends the signature to an existing query string", function() {
      expect(libpx.sign("http://test.libpx.com/images/2.jpg?width=400")).
        toEqual("http://test.libpx.com/images/2.jpg?width=400&signature=baa12c05ed279dbc623ffc8b74b183f6044e5998");
    });

    it("supports URLs with a query string and a fragment", function() {
      expect(libpx.sign("http://test.libpx.com/images/3.jpg?width=300&height=220#image")).
        toEqual("http://test.libpx.com/images/3.jpg?width=300&height=220&signature=500ad73bdf2d9e77d6bb94f0ca1c72f9c1f495f8#image");
    });

    it("supports URLs with a fragment but no query string", function() {
      expect(libpx.sign("http://test.libpx.com/images/1.jpg#test")).
        toEqual("http://test.libpx.com/images/1.jpg?signature=bd5634c055d707c1638eff93eb88ff31277958f0#test");
    });

  });

  describe("url", function() {

    it("constructs a URL for a given path", function() {
      var libpx = new LibPixel({ host: "test.libpx.com" });

      expect(libpx.url("/images/5.jpg")).
        toEqual("http://test.libpx.com/images/5.jpg");
    });

    it("turns options into a query string", function() {
      var libpx = new LibPixel({ host: "test.libpx.com" });

      expect(libpx.url("/images/101.jpg", { width: 200, height: 400 })).
        toEqual("http://test.libpx.com/images/101.jpg?width=200&height=400");
    });

    it("uses HTTPS if the https option is set to true", function() {
      var libpx = new LibPixel({ host: "test.libpx.com", https: true });

      expect(libpx.url("/images/1.jpg")).
        toEqual("https://test.libpx.com/images/1.jpg");
    });

    it("signs the request if a secret is given", function() {
      var libpx = new LibPixel({ host: "test.libpx.com", secret: "LibPixel" });

      expect(libpx.url("/images/1.jpg", { width: 600 })).
        toEqual("http://test.libpx.com/images/1.jpg?width=600&signature=dfcaec7b88d53a7a932e8a6a00d10b4f9ff1336b");
    });

  });

});
