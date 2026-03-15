let fs = require("fs");
let path = require("path");

let keyDir = path.join(__dirname, "..", "keys");
let privateKeyPath = path.join(keyDir, "private.pem");
let publicKeyPath = path.join(keyDir, "public.pem");

module.exports = {
  privateKey: fs.readFileSync(privateKeyPath, "utf8"),
  publicKey: fs.readFileSync(publicKeyPath, "utf8"),
};
