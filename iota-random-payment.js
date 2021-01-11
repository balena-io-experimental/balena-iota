////////////////////////////////////////////////
// Send a microtransaction
////////////////////////////////////////////////

const Iota = require('@iota/core');
const Converter = require('@iota/converter');

// Connect to a node
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
});

// Define the depth that the node will use for tip selection
const depth = 3;
// Define the minimum weight magnitude for the Devnet
const minimumWeightMagnitude = 9;

// Replace this seed with the one that owns the address you used to receive test tokens 
const seed = process.env.SEED_ADDRESS;

// Create a wrapping function so you can use async/await
const sendPayment = async () => {
  
  // Generating random value --> change for data from a sensor or similar
  let randomValue = Math.floor(Math.random() * 1000)
  console.log("Random = "+randomValue);

  // Define an address to which to send IOTA tokens 
  const receivingAddress = process.env.RECEIVING_ADDRESS;

  // Define an input transaction object
  // that sends 1 Ki to your new address
  const transfers = [
    {
      value: randomValue,
      address: receivingAddress
    }
  ];

  console.log('Sending 1 Ki to ' + receivingAddress + ' from seed '+ seed);

  try {
    // Construct the bundle and sign your input transactions
    const trytes = await iota.prepareTransfers(seed, transfers);
    // Send the transactions to the node
    const response = await iota.sendTrytes(trytes, depth, minimumWeightMagnitude);

    console.log('Bundle sent');
    response.map(tx => console.log(tx));
  } catch (error) {
    console.log(error);
  }
}

sendPayment();