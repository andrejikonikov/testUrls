var urlExists = require('url-exists');

const urls = [
  "",
  ""
];

urls.map((u) => {
  urlExists(u, function(err, exists) {
    exists = exists || "doesn't exist"

    console.log("================================================");
    console.log();
    console.log(u , " ", exists);
  });
});
