const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

let mongooseUrl = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to |DB|");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongooseUrl);
}

const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68ca303a6cc837132eabc030",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDb();
