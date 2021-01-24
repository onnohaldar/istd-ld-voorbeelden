/**
 * File: map-insite-data-to-tripples.ts
 * Map Bizz Insite Publication Data (stored in javascript vars) to linked data tripples
 * - Based on examples from <https://github.com/vdjurdjevic/rdflib-ts>
 */

// node lib exports
import { NTriple } from 'rdflib-ts';

// insite linked data mapping lib exports
import { initNameSpaces, createDataOntology } from './insite-data-config';
import { registerTripples } from './insite-data-utils';
import { mapInsiteViewDataToTripples } from './map-insite-view-data-to-tripples';
import { mapInsiteModelDataToTripples } from './map-insite-model-data-to-tripples';
import { mapInsiteObjectDataToTripples } from './map-insite-object-data-to-tripples';

/**
 * @returns All mapped inside data tripples
 */
export function mapInsiteDataToTripples() {

    // Define bizz insite data en generic namespaces to map IRI's
    initNameSpaces();
    // Map exported insite data to tripples
    let tripplesRegister: NTriple[] = [];
    registerTripples(createDataOntology(), tripplesRegister);
    registerTripples(mapInsiteObjectDataToTripples(), tripplesRegister);
    registerTripples(mapInsiteViewDataToTripples(), tripplesRegister);
    registerTripples(mapInsiteModelDataToTripples(), tripplesRegister);
    console.log('TOTAL tripples mapped: ', tripplesRegister.length);

    return tripplesRegister;
}
