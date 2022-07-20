const { EnapsoGraphDBClient } = require("@innotrade/enapso-graphdb-client");

// Config
const GRAPHDB_BASE_URL = "http://localhost:7200",
    GRAPHDB_REPOSITORY = "SIELINOU_REPOSITORY_FREE",
    GRAPHDB_USERNAME = "test",
    GRAPHDB_PASSWORD = "test",
    GRAPHDB_CONTEXT_TEST = "http://localhost:8080/sielinouOntologies";
    //GRAPHDB_CONTEXT_TEST = "http://localhost:8080/FormulaireOntology";
const DEFAULT_PREFIXES = [
    EnapsoGraphDBClient.PREFIX_OWL,
    EnapsoGraphDBClient.PREFIX_RDF,
    EnapsoGraphDBClient.PREFIX_RDFS,
    EnapsoGraphDBClient.PREFIX_XSD,
    EnapsoGraphDBClient.PREFIX_PROTONS,
    {
        prefix: "entest",
        iri: "http://localhost:8080/FormulaireOntology",
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

module.exports = graphDBEndpoint;