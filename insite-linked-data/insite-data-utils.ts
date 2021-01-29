/**
 * File: insite-data-utils.ts
 * Insite data utils to locate, read/parse files, extract vars, convert formats, etc.
*/

/**
 * generic node package imports
 */
import { readdirSync, existsSync, unlinkSync } from 'fs';
import { NTriple, IRI } from 'rdflib-ts';
import { camelCase } from 'camel-case';

/**
 * inside linked data specific imports
 */
import { getOntoNameSpacePrefix, getDataNameSpacePrefix } from './insite-data-config';

/**
 * List all files that start with
 * @param dataPath path naar de insite publicatie
 * @param startWithFileName filename part from left
 */
export function listFiles(dataPath: string, startWithFileName: string) {
    let filesStartWith: string[] = [];

    readdirSync(dataPath).forEach(file => {
        if (file.startsWith(startWithFileName)) {
            filesStartWith.push(file);
        }
    });

    return filesStartWith;
}

/**
 * Make shore that existing file is removed before append operations
 * @param fileToInit File to initialize
 */
export function initAppendFile(fileToInit: string) {
    if (existsSync(fileToInit)) {
        unlinkSync(fileToInit);
    }
}

/**
 * Register NTripple format trippels to Export
 * @param tripples Tripples source
 * @param tripplesRegister Tripples register
 */
export function registerTripples(tripples: NTriple[], tripplesRegister: NTriple[]) {

    for (const tripple of tripples) {
        tripplesRegister.push(tripple);
    }

}

/**
 * Create Iri value with onto name space and relative value
 * @param relativeValue 
 */
export function createOntoIri(relativeValue: string) {
    return new IRI(getOntoNameSpacePrefix() + ':' + relativeValue);
}

/**
 * Create Data Class IRI with localValue that starts with capital letter and is camelized after that, and ends with suffix
 * @param insideType Bizz Inside type string
 * @param classSuffix Tripple Class suffix string
 * @returns IRI formated data class object (example: data:BpmnModelObject)
 */
export function insiteTypeToDataClassIri(insiteType: string, classSuffix: string = '') {
    return new IRI(getDataNameSpacePrefix() + ':' + formatInsiteType(insiteType) + classSuffix);
}

/**
 * Create Data Object Property IRI with localValue that starts with prefix (has, on, ..) and is camelized after that
 * @param insideType Bizz Inside type string
 * @param propPrefix Tripple Property suffix string
 * @returns IRI formated Data Object Property (example: data:relatesTo)
 */
export function insiteTypeToDataPropIri(propPrefix: string, insiteType: string) {
    return new IRI(getDataNameSpacePrefix() + ':' + propPrefix.toLowerCase() + 
        formatInsiteType(insiteType, propPrefix != ''));
}

/**
 * Camelize Insite type string from "-", , "_", " "(space) and "." as separators (start capa)
 * @param insiteType Insite type string to camelize
 * @param capitilize default is true (caoitilize 1st char), else (false) keep camelized
 * @returns camilezed string
 */
function formatInsiteType(insiteType: string, capitilize: boolean = true) {
    // prepare "-" (minus sign) for camelizing
    let formatedInsiteType = insiteType.replace('-', '.');
    // prepare ' ' (space) for camelizing
    formatedInsiteType = formatedInsiteType.replace(' ', '.');
    // prepare '_' (underscores) for camelizing
    formatedInsiteType = formatedInsiteType.replace('_', '.');
    // camelize string
    formatedInsiteType = camelCase(formatedInsiteType);

    if (capitilize) {
        // capitilize 1st character and add class suffix string
        formatedInsiteType = formatedInsiteType.substring(0, 1).toUpperCase() + formatedInsiteType.substring(1);
    }

    return formatedInsiteType;
}

/**
 * Create a Data Node IRI from Prefix and Id
 * @param dataNodePrefix Prefix for Data Node IRI Relative value
 * @param dataId Id to make Data Node relative value Unique
 */
export function createDataNode(dataNodePrefix: string, dataId: string | number = '') {
   return new IRI(getDataNameSpacePrefix() + ':' + dataNodePrefix + dataId);
}

/**
 * Initialize list with data registered subClass types
 */
export function initDataClassTypes() {
    let dataClassTypes: string[] = [];
    return dataClassTypes;
}

/**
 * Register new data subClass type
 * @param dataClassTypeIri IRI with subClass type
 * @param dataClassTypes List with registered subClass types
 */
export function registerDataClassType(dataClassTypeIri: IRI, dataClassTypes: string[]) {
    if (!dataClassTypes.includes(dataClassTypeIri.relativeValue)) {
        // Add new data class type
        dataClassTypes.push(dataClassTypeIri.relativeValue);
    }
}

/**
 * Insert registered subClass data types for ontology class type on top of the tripple list
 * @param ontoClassType Ontology class type
 * @param dataClassTypes List with registered data subClass types
 * @param tripples tripple array list
 */
export function insertRegisteredDataClassTypes(ontoClassType: string, dataClassTypes: string[], tripples: NTriple[]) {
    for (const dataClassType of dataClassTypes) {
        const typeNode = createDataNode(dataClassType);
        tripples.unshift(new NTriple(typeNode, 'rdfs:subClass', getOntoNameSpacePrefix() + ':' + ontoClassType));
        tripples.unshift(new NTriple(typeNode, 'rdf:type', 'owl:Class'));
    }
}