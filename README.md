# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Install all dependencies:

```bash
npm install
```

Create a `.env` file and add your Alchamey URL and key:

```
ALCHEMY_URL=<YOUR_ALCHEMY_URL>
ALCHEMY_KEY=<YOUR_ALCHEMY_KEY>
```

To test:

```bash
npx hardhat run scripts/run.js
```

To deploy:

```bash
npx hardhat run scripts/deploy.js --network rinkeby
```

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
