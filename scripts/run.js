const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1')
    });

    await waveContract.deployed();

    console.info(`Contract deployed to: ${waveContract.address}`);
    console.info(`Contract deployed by: ${owner.address}`);

    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );

    console.log('Contract balance: ', hre.ethers.utils.formatEther(contractBalance));

    // let waveCount = await waveContract.getTotalWaves();
    // console.log(waveCount.toNumber());

    let waveTxn = await waveContract.wave('Hello World!');
    await waveTxn.wait();

    waveTxn = await waveContract.wave('Hello World 2!');
    await waveTxn.wait();

    // waveCount = await waveContract.getTotalWaves();

    // waveTxn = await waveContract.connect(randomPerson).wave('Another message from random person!');
    // await waveTxn.wait();

    // waveCount = await waveContract.getTotalWaves();
    // console.info(`Final wave count: ${waveCount}`);
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log('Contract blance after', hre.ethers.utils.formatEther(contractBalance));

    const allWaves = await waveContract.getAllWaves();

    console.log(allWaves);
};

const runMain = async () => {
    try {
        await main();

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();
