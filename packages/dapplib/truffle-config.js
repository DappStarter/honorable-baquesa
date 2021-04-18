require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'half kiwi orange tooth bike curtain net proof gesture merry flock trap'; 
let testAccounts = [
"0x6a2053c1cfd8c2d9465a7ae016f11dd6442a9afdfebf85ddf1acdfcc57c87d49",
"0x0de864ff2cc791426cd7dbcf0c70c71bf7dfca50472c8b6862dacfc33f5e672f",
"0x1fad030770f5b88f685911ea31889fc8303b6d11da6e32bf0d48859cf05ba78d",
"0xb34b0ac258dedbb96fecb69f3fdb725a8b427058ed96cedbe70d633c80e9b295",
"0x99cafa2d2a74f001fef0d1c958c81191dc5b6f8fddab54307b260cb5d49bd3ef",
"0x35c1bfcd0e9b1d019409bcafc44ecd50a6c7b14216b6319439177fff331acdaa",
"0x0d53273c3f10f0ee9feadb4d184434215edaffa08011586dddebd0179a1e4f39",
"0x449c38cdbf6fd5539474eef0a6af26629acfd7d54550b46c8280591b6b6a4e22",
"0x9c7335767868f48a8d06671d083eb721cbe73586a092b9a4414fdc8fcc38b1b1",
"0xe44dd7355f1ab2279b162b3bba89773e49294d5f66ae814172740cb12835c36c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


