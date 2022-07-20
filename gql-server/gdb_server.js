
/*
const { EnapsoGraphDBClient } = require("@innotrade/enapso-graphdb-client");

// Config
const GRAPHDB_BASE_URL = "http://localhost:7200",
    GRAPHDB_REPOSITORY = "Test",
    GRAPHDB_USERNAME = "Test",
    GRAPHDB_PASSWORD = "Test",
    GRAPHDB_CONTEXT_TEST = "http://ont.enapso.com/repo";
const DEFAULT_PREFIXES = [
    EnapsoGraphDBClient.PREFIX_OWL,
    EnapsoGraphDBClient.PREFIX_RDF,
    EnapsoGraphDBClient.PREFIX_RDFS,
    EnapsoGraphDBClient.PREFIX_XSD,
    EnapsoGraphDBClient.PREFIX_PROTONS,
    {
        prefix: "entest",
        //iri: "http://ont.enapso.com/test#",
        iri: "http://localhost:8080/FormulaireOntology";
    }
];


//Create an Endpoint.
let graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
    baseURL: GRAPHDB_BASE_URL,
    repository: GRAPHDB_REPOSITORY,
    prefixes: DEFAULT_PREFIXES
});

//Authenticate (Optional)
graphDBEndpoint.login(GRAPHDB_USERNAME,GRAPHDB_PASSWORD)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
*/

//insert a class
graphDBEndpoint
  .update(
    `INSERT dc: data {
      graph <${GRAPHDB_CONTEXT_TEST}> {
      entest:TestClass rdf:type owl:Class}
  }`
         )
  .then((result) => {
    console.log("inserted a class :\n" + JSON.stringify(result, null, 2));
  })
  .catch((err) => {
    console.log(err);
  });

