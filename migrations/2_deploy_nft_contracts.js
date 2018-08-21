const CryptoGrues = artifacts.require("./CryptoGrues.sol");

module.exports = function(deployer) {
    deployer.deploy(CryptoGrues, {gas: 5000000});
};