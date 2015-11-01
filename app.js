var outlook = require("node-outlook");

var outlookClient = new outlook.Microsoft.OutlookServices.Client('https://outlook.office365.com/api/v1.0');
  

  console.log("outlook");
  console.log(outlookClient);
