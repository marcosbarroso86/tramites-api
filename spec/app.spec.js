var request = require("request");
const assert = require('chai').assert;
const base_url = "http://localhost:8081";

// Para realiar las pruebas en produccion se debe descomentar 
//const Server, before y after

//const Server = require("../src/server.ts");

describe("Reportes de Tramites", () => {
  var server;
  
//   before(function () {
//     server = Server

//   });
  
//   after(function () {
//     server.close();
//   });

  describe("tramites", () => {
      
    const endpoint = "/api";

    it("GET /tramites todosLosTramites", async () => {
      const resourse = '/tramites/';
      const options = {
        method: 'GET',
        uri: base_url+endpoint+resourse
        
      };
      const response  = await asyncRequest(options);
      assert.equal(response.response.statusCode, 200);
     
    });

    it("GET /tramites ejecutivo", async () => {
      const resourse = '/tramites/?ejecutivo=2';
      const options = {
        method: 'GET',
        uri: base_url+endpoint+resourse
      };
      const response  = await asyncRequest(options);
      console.log(response);
      assert.equal(response.response.statusCode, 200);

    });

    });

 });

const asyncRequest = async (value) => {
  return new Promise((resolve, reject) => {
       request(value, (error, response, data) => {
          if(error) reject(error)
          else resolve({response, data: (data)? JSON.parse(data) : undefined })
          })
         })
}