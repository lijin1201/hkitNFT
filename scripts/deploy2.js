const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  const base_uri = 'https://bafybeidfpvjszubegtoomoknmc7zcqnay7noteadbwxktw46guhdeqohrm.ipfs.infura-ipfs.io/'
  const Contract = await ethers.getContractFactory('Adulam')
  const contract = await Contract.deploy('Adulam NFT', 'ADM', base_uri)

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})