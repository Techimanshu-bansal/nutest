'use strict';

module.exports.firstserverless = (event, context, callback) => {
   
   callback(null,"this is a serverless mesg")

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
