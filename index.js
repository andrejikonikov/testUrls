var urlExists = require('url-exists');

const urls = [
  "https://www.alibaba.com/product-detail/post.htm?productId=60710377430",
  "https://www.alibaba.com/product-detail/post.htm?productId=60710377431",
  "https://www.alibaba.com/product-detail/post.htm?productId=60710377432"
];

urls.map((u) => {
  urlExists(u, function(err, exists) {
    exists = exists || "doesn't exist"

    console.log("================================================");
    console.log();
    console.log(u , " ", exists);
  });
});
