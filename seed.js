// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var sampleUsers = [];

sampleUsers.push({
  first_name: "Foo",
  last_name: "Bar",
  email: "foo_bar@gap.com",
  password: "foo_bar",
  location: "2F",
  brand: "Gap",
  admin: true
})

var sampleDevices = [];

sampleDevices.push({
  name: "iphone X",
  type: "phone",
  width: "375px",
  operating_system: "iOS 11",
  image: "https://cdn.macrumors.com/article-new/2017/09/iphonexdesign.jpg",
  borrow_date: "",
  return_date: "",
  available: true,
  charged: true,
  working: true
})

console.log('seed.js is running');