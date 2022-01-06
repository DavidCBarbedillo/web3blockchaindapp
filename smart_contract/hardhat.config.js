// https://eth-ropsten.alchemyapi.io/v2/Q6z5Ya9EVTKvIe8siKApKY1jnOZzzq6x

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Q6z5Ya9EVTKvIe8siKApKY1jnOZzzq6x',
      accounts: [ '5eba77abafcfafb578ddc7ce905b6db552e39cbf68f1f949a96575700ff86922' ]
    }
  }
}
