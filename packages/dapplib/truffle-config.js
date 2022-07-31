require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile purpose gloom climb obscure video'; 
let testAccounts = [
"0xe7b1d86ec0568061ac87881b8f3ee1af9deee4ea965cb2954df0c9b2ac47f353",
"0x0fc1510e796c98634c4b7a9abf7a4a727caf4bef498de3f6eca2374897772bf8",
"0x623823b82fd2888d7737e5ac1df2019294cf8a86077cb3367142edf21fb955ac",
"0xb388579c989ddefce08c38849a02c8cd1901f5138d4ac516813b45ee24b88956",
"0x37d7949391e9f5e501c3b2180325150b7ea1f697ac66950eb879531d802c5c3e",
"0x2a23be56f22c0d5c29758d05f9f164c575f038bb40104a66b9c6a38639835c29",
"0x0bca8725f58c093dbbe8472342adcb85e4cd4318966853debfd6d39a5e409aaa",
"0x16e2770b9f037d2b5d7912ad49e2efd164031d9cfd2ec94e0c964791660ffe5e",
"0xb1311ff90f265cbcf2f616c9d3a6c92b716acecef76cec48f8e99402a469c434",
"0xef4be03df22f317cd175a96edaa9f15c90f9bb82cc7745033435f810307a5a87"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

