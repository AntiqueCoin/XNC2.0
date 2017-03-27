module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
    "dev": {
      network_id: 910, // Ethereum public network
      host: "localhost", // Random IP for example purposes (do not use)
      port: 8557,
      gas: 912388,
      gasPrice: 20000000000
       
    },
    "testrpc": {
      network_id: 1, // Official Ethereum test network
      host: "localhost",
      port: 8545,
      gas: 912388,
      gasPrice: 20000000000

    },
    "production": {
      network_id: 1, // Official Ethereum  network
      host: "54.186.163.182",
      port: 8545,
      gas: 917238,
      gasPrice: 20000000000
    },
    "staging": {
      network_id: 1337 // custom private network
        // use default rpc settings
    },
    "development": {
      network_id: "default"
    }
  }
};
