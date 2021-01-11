////////////////////////////////////////////////
// Read your "hello-world" message on the Tangle
////////////////////////////////////////////////

const Iota = require('@iota/core');
const Extract = require('@iota/extract-json');

// Connect to a node
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
});

// Define the tail transaction hash of the bundle whose messages you want to read
const tailTransactionHash =
    'GESPPGXKTZREYQYKDSWUYFNQGZJBFDIU9LQAPJXBPWUXEAMXFDOEIEWDPZMYHKF9EFVLECRM9TEHVJ999';

// Get the transaction objects in the bundle
iota.getBundle(tailTransactionHash)
  .then(bundle => {
    // Extract and parse the JSON messages from the transactions' `signatureMessageFragment` fields
    console.log(JSON.parse(Extract.extractJson(bundle)));
  })
  .catch(err => {
    console.error(err);
  });