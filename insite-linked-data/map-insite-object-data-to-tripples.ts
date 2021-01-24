/**
 * File: map-insite-object-data-to-tripples.ts
 * Map Bizz Insite Object Data on linked data tripples
 * - Based on examples from <https://github.com/vdjurdjevic/rdflib-ts>
 */

// node lib exports
import { NTriple, LangLiteral, PlainLiteral, IRI } from 'rdflib-ts';

// inside data exports
import { objectDataList } from '../insite-data-exports/all_objects_data_index';
import { objectsOnViews } from '../insite-data-exports/all_objects_on_views';
import { objectRelations } from '../insite-data-exports/all_objects_relations';

// insite linked data mapping lib exports
import { a, label } from './insite-data-config';
import {
    insiteTypeToDataClassIri, createDataNode, initDataClassTypes, registerDataClassType,
    insertRegisteredDataClassTypes, createOntoIri, insiteTypeToDataPropIri } from './insite-data-utils';


/**
 * Map Bizz Insite Object types to tripples
 * @returns objectTripples datastore with mapped insite object tripples
 */
export function mapInsiteObjectDataToTripples() {
    console.log('-'.repeat(35));
    console.log('Map Insite Object Data To Tripples');

    let objectTripples: NTriple[] = [];
    let objectClassTypes = initDataClassTypes();
    let hasRelationProps = initDataClassTypes();
    let onViewCount = 0;

    // Loop through all view exports
    for (const objectData of objectDataList) {

        // loop through indexed object(s)
        for (const objectId in objectData) {
            const object = objectData[objectId];
            const nodeId = createDataNode('object', objectId);
            const objectNodeData = object.data[0];
            const objectClassType = insiteTypeToDataClassIri(objectNodeData.type, 'Object');
            objectTripples.push(new NTriple(nodeId, a, objectClassType));
            objectTripples.push(new NTriple(nodeId, createOntoIri('objectId'), new PlainLiteral(objectId)));
            objectTripples.push(new NTriple(nodeId, label, new LangLiteral(objectNodeData.name, objectNodeData.lang)));
            registerDataClassType(objectClassType, objectClassTypes);

            if (objectsOnViews[objectId]) {
                mapOnViewProps(objectsOnViews[objectId], nodeId, objectTripples);
                onViewCount ++;
            }

            if (objectRelations[objectId]) {
                mapHasRelationProps(objectRelations[objectId], nodeId, objectTripples, hasRelationProps);
            }

        }

    }

    insertRegisteredDataClassTypes('ObjectType', objectClassTypes, objectTripples);
    insertRegisteredDataClassTypes('hasRelation', hasRelationProps, objectTripples);

    console.log('Object data subClasses mapped: ', objectClassTypes.length);
    console.log('onView Onject Properties mapped', onViewCount);
    console.log('hasRelation data subClass Object Properties mapped: ', hasRelationProps.length);
    console.log('objectDataTripple nodes mapped: ', objectTripples.length - objectClassTypes.length - hasRelationProps.length);
    console.log('-'.repeat(35));

    return objectTripples;
}

/**
 * Map the object on view object properties
 * @param objectOnViewsIds View ids to map on object
 * @param objectNodeId Node id for the object to map
 * @param objectTripples Tripples to add mapping
 */
function mapOnViewProps(objectOnViewsIds: number[], objectNodeId: IRI, objectTripples: NTriple[]) {
    const onView = createOntoIri('onView');

    for (const viewId of objectOnViewsIds) {
        objectTripples.push(new NTriple(objectNodeId, onView, createDataNode('view', viewId)));
    }

}

/**
 * Map the object hasRelation data subtype object properties
 * @param objectRelations object relations to map
 * @param objectNodeId Node id for the object to map from
 * @param objectTripples Tripples to add mapping
 * @param hasRelationProps hasRelation object properties subtype register
 */
function mapHasRelationProps(
    objectRelations: {
        via: string;
        to: string[] }[], 
    objectNodeId: IRI, 
    objectTripples: NTriple[], 
    hasRelationProps: string[]
    ) {

    for (const objectRelation of objectRelations) {

        for (const relationTo of objectRelation.to) {
            const hasRelationDataProp = insiteTypeToDataPropIri('has', objectRelation.via);
            objectTripples.push(new NTriple(objectNodeId, hasRelationDataProp, 
                insiteTypeToDataClassIri('object', relationTo)));
            registerDataClassType(hasRelationDataProp, hasRelationProps);       
        }

    }

}