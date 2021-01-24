/**
 * File: map-insite-view-data-to-tripples.ts
 */

// node lib exports
import { NTriple, LangLiteral, PlainLiteral } from 'rdflib-ts';

// inside data exports
import { a, label } from './insite-data-config';
import { objectDataList, viewReferencesList, objectReferencesList } from '../insite-data-exports/all_views_data_index';

// insite linked data mapping lib exports
import {
    insiteTypeToDataClassIri, createDataNode, initDataClassTypes, registerDataClassType,
    insertRegisteredDataClassTypes, createOntoIri } from './insite-data-utils';
import { objectReferences } from '../insite-data-exports/view_103025_data';

/**
 * Map Bizz Insite Object types to tripples
 * @returns objectTripples datastore with mapped insite object tripples
 */
export function mapInsiteViewDataToTripples() {
    console.log('-'.repeat(35));
    console.log('Map Insite View Data To Tripples');

    let viewTripples: NTriple[] = [];
    //const hasObjectReference = createOntoIri('hasObjectReference');
    //const hasViewReference = createOntoIri('hasViewReference');
    let viewClassTypes = initDataClassTypes();
    //let objectDataIndex = 0;

    // Add all views from list
    for (const objectData of objectDataList) {
        const viewId = Object.keys(objectData)[0];
        const viewNodeData = objectData[viewId].data[0];
        const nodeId = createDataNode('view', viewId);
        const viewClassType = insiteTypeToDataClassIri(viewNodeData.type, 'View');
        viewTripples.push(new NTriple(nodeId, a, viewClassType));
        viewTripples.push(new NTriple(nodeId, createOntoIri('viewId'), new PlainLiteral(viewId)));
        viewTripples.push(new NTriple(nodeId, label, new LangLiteral(viewNodeData.name, viewNodeData.lang)));
        registerDataClassType(viewClassType, viewClassTypes);

        //for (const objectReference in objectReferencesList[objectDataIndex]) {
        //    viewTripples.push(new NTriple(nodeId, hasObjectReference, createDataNode('object', objectReference)));
        //}
        
        //for (const viewReference in viewReferencesList[objectDataIndex]) {
        //    viewTripples.push(new NTriple(nodeId, hasViewReference, createDataNode('view', viewReference)));
        //}

        //objectDataIndex ++;
    }
    
    insertRegisteredDataClassTypes('ViewType', viewClassTypes, viewTripples);
    
    console.log('View data subClasses mapped: ', viewClassTypes.length);
    console.log('viewDataTripple nodes mapped: ', viewTripples.length - viewClassTypes.length);
    console.log('-'.repeat(35));

    return viewTripples;
} 