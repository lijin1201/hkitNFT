const Adulam = artifacts.require('Adulam')
const fs = require('fs')

module.exports = async function (deployer) {

    const BASEURI = `https://bafybeidfpvjszubegtoomoknmc7zcqnay7noteadbwxktw46guhdeqohrm.ipfs.infura-ipfs.io/`

    await deployer.deploy(Adulam, 'Adulam', 'ADU', BASEURI)

    const address = JSON.stringify({ address: Adulam.address }, null, 4)
    fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
        if (err) {
        console.error(err)
        return
        }
        console.log('Deployed contract address', Adulam.address)
    })

}