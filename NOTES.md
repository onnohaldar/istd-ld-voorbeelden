# Notes

Notes iStandaard Linked Data Tools Setup and References

## Setup for Queries accross multiple publications

There is a need to query accross two or more seperate iStandaard-publications. There are two possible technical configurations that I have tested:

1. Configure a dataset for each publication and create federated SPARQL-queries above these.

2. Configure one Dataset with one Graph for each publication and like next example. [Adding Reasoning with Full text serach](https://apothem.blog/apache-jena-fuseki-adding-reasoning-and-full-text-search-capabilities-to-a-dataset.html)

## SOH Dataset services

Looking at the installation of BREW and the Fuseki documentation you also can use the supplied SOH (SPARQL over HTTP) commandline scripts.

- BREW installation location SOH-scripts: __/usr/local/Cellar/fuseki/3.17.0/bin__

- [Documentation SOH commandline scripts](https://jena.apache.org/documentation/fuseki2/soh.html)


## Direct Rest Api Dataset services (using CURL)

I stared with curl rest api calls to update datasets.  
Use POST for Updates (change existing non blanke nodes with upload file tripples / add new ones), and PUT for refresh (delete dataset tripples and add upload file tripples).  
See NPM-script examples:

````npm
  "scripts": {
...
    "put:bizz:ontology": "curl -X PUT -H Content-Type:text/turtle -T $npm_package_tripples_bizzOntology -G $npm_package_datasets_bizzdata -d default",
    "post:bizz:ontology": "curl -X POST -H Content-Type:text/turtle -T $npm_package_tripples_bizzOntology -G $npm_package_datasets_bizzdata -d default",
    "post:iwvggz:data": "curl -X POST -H Content-Type:text/turtle -T $npm_package_tripples_iWvggzData -G $npm_package_datasets_bizzdata -d default",
...
  },
````

It is also possible to configure te Datasets by using the Server Rest Api.  
See NPM-script examples:

````npm
    "add:dataset:bizzdata": "curl -X POST -H Content-Type:text/turtle -T fuseki/config/bizzdata.ttl http://localhost:3030/$/datasets",
    "remove:dataset:bizzdata": "curl -X DELETE http://localhost:3030/$/datasets/bizzdata",
````
