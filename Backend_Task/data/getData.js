const axios = require("axios");

axios
  .get("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
  .then((response) => {
    console.log(response.data);
    // Process the data here
  })
  .catch((error) => console.error("Error:", error));
