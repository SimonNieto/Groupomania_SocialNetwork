const JWT = require("jsonwebtoken");
const secrets = require('../config/secrets.js');

function issueJWT(user) {
  // on génére le token
  const id = user.id;
  const expiresIn = "24H";
  const payload = {
    sub: id,
    iat: Date.now(),
  };
  const signedToken = JWT.sign(payload, secrets.jwtSecret, { expiresIn: expiresIn });
  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}
function getUserId(req) {
  // on vérifie le userId du token
  const token = req.headers.authorization.split(" ")[1]; // on récupère le token de la requête entrante
  const decodedToken = JWT.verify(token, secrets.jwtSecret); // on le vérifie
  const userId = decodedToken.sub;
  return userId; // on récupère l'id du token
}

module.exports.issueJWT = issueJWT;
