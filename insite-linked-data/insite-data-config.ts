/**
 * File: insite-data-config.ts
 * Insite data mapping configuration
*/

/**
 * generic node package imports
 */
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { argv } from 'process';
import { NamespaceManagerInstance, NTriple, IRI } from 'rdflib-ts';

/**
 * dataPath bevat alle gegevens over de publicatie in javascript en is dus de bron voor hergebruik in typescript
 * toepassingen zoals deze
 */
const baseUrl = 'https://github.com/onnohaldar/ist-ld-tools/blob/master/';
const insiteDataFolder = 'data';
const insiteDataExportsFolder = 'insite-data-exports';
const triplesFolder = 'triple-data';
const triplesOntoFolder = 'onto';
const triplesDataFolder = 'data';
const defaultTripleExportFile = 'insite-data-export.ttl';
const triplesOntoFile = 'bizz-ontology.ttl';
const ontoNameSpacePrefix = 'onto';
const dataNameSpacePrefix = 'data';
export const a = 'rdf:type';
export const label = 'rdfs:label';
export const title = 'dcterms:title';

/**
 * @returns Base url used in tripple ontology en data prefixes
 */
export function getBaseUrl() {
    return baseUrl;
}

export function getOntoNameSpacePrefix() {
    return ontoNameSpacePrefix;
}

export function getDataNameSpacePrefix() {
    return dataNameSpacePrefix;
}

export function getTriplesFolder() {
    return triplesFolder;
}

export function getTriplesOntoFolder() {
    return triplesOntoFolder;
}

export function getTriplesDataFolder() {
    return triplesDataFolder;
}

export function getTriplesOntoFile() {
    return triplesOntoFile;
}

/**
 * get insite data path based on insite publication root parameter
 */
export function getDataPath(): string | undefined {

    if (argv[2]) {
        // argv[2] = insite publication root
        return resolve(argv[2], insiteDataFolder);
    } else {
        console.log('ERROR : ' + 'getInsitePublicationDataPath()' + 'publicationRoot van de BizzDesign Insight publicatie moet als parameter worden meegegeven');
        return undefined;
    }

}

/**
 * get insite prepared data export path
 */
export function getExportsPath() {
    return resolve(__dirname, '..', insiteDataExportsFolder);
}

function initFolder(folder: string) {
    if (!existsSync(folder)) {
        mkdirSync(folder);
    }
} 

export function initExportsFolder() {
    initFolder(getExportsPath());
}

export function initTriplesDataFolder() {
    initFolder(resolve(triplesFolder, triplesDataFolder));
}

/**
 * get insite tripples (bizz inside) ontology destination path
 */
export function getTriplesOntoFilePath() {
    return resolve(__dirname, '..', triplesFolder, triplesOntoFolder, triplesOntoFile);
}

/**
 * get insite tripples (mapped) data destination path
 */
export function getTriplesExportFilePath() {
    return resolve(triplesFolder, triplesDataFolder, getTriplesExportFile());
}

export function getTriplesExportFile() {
    let exportFile: string;

    if (argv[3]) {
        exportFile = argv[3];
    } else {
        exportFile = defaultTripleExportFile;
    }

    return exportFile;
}

/**
 * Initialize linked data namespeces from execution parameters and add used global namespaces (dcterms, etc)
 */
export function initNameSpaces() {
    // Additional generic used namespaces
    NamespaceManagerInstance.registerNamespace('dcterms', 'http://purl.org/dc/terms/');
    NamespaceManagerInstance.registerNamespace('owl', 'http://www.w3.org/2002/07/owl#');

    // Bizz insite specific namespaces
    const triplesUrl = getBaseUrl() + getTriplesFolder() + '/';
    const triplesOntoUrl =  triplesUrl + getTriplesOntoFolder() + '/' + getTriplesOntoFile() + '#';
    const triplesDataUrl =  triplesUrl + getTriplesDataFolder() + '/' + getTriplesExportFile() + '#';
    NamespaceManagerInstance.registerNamespace(getOntoNameSpacePrefix(), triplesOntoUrl);
    NamespaceManagerInstance.registerNamespace(getDataNameSpacePrefix(), triplesDataUrl);
}

/**
 * Create OWL Ontology tripples thats imports the basic Bizz Ontology that describes how the insite data is interpreted
 * @returns Tripples with OWL Ontolgy definitions for mapped inside data 
 */
export function createDataOntology() {
    let dataOntoTriples: NTriple[] = [];
    const dataPrefixNode = new IRI(getDataNameSpacePrefix() + ':');
    dataOntoTriples.push(new NTriple(dataPrefixNode, 'rdf:type', 'owl:Ontology'));
    dataOntoTriples.push(new NTriple(dataPrefixNode, 'owl:imports', getOntoNameSpacePrefix() + ':'));
    return dataOntoTriples;
}