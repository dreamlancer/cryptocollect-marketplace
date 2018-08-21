const CryptoGrues = artifacts.require("./CryptoGrues.sol");

module.exports = function(deployer) {
    deployer
        .then(function () {
            return CryptoGrues.deployed();
        })
        .then(function (_gruesInstance) {
            console.log(_gruesInstance);
        })
};