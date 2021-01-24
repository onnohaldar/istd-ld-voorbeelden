/**
 * File: map-insite-model-data-to-tripples.ts
 * Convert Bizz Insite Model Data into linked data tripples
 * - Based on examples from <https://github.com/vdjurdjevic/rdflib-ts>
 */

// node lib exports 
import { NTriple, LangLiteral, PlainLiteral } from 'rdflib-ts';

// inside data exports
import { insite_models } from '../insite-data-exports/models_data';

// insite linked data mapping lib exports
import { a, label } from './insite-data-config';
import { createDataNode, createOntoIri } from './insite-data-utils';

/**
 * Read inside model export and convert data to tripples
 * @returns Mapping to tripple instances of Class "InsideModel" with DataProperty "hasInsiteModelView"
 */
export function mapInsiteModelDataToTripples() {
    console.log('-'.repeat(35));
    console.log('Map Insite Model Data To Tripples');

    const hasModelViewProp = createOntoIri('hasView');
    let modelTripples: NTriple[] = [];
    let modelNr = 0;
    let hasViewCount = 0;

    for (const model of insite_models) {
        // Add ModelType Class value
        modelNr ++;
        const nodeId = createDataNode('model', modelNr);
        modelTripples.push(new NTriple(nodeId, a, createOntoIri('ModelType')));
        modelTripples.push(new NTriple(nodeId, createOntoIri('modelId'), new PlainLiteral(String(modelNr))));
        modelTripples.push(new NTriple(nodeId, label, new LangLiteral(model.name, 'nl')));
        
        for (const modelView of model.views) {
            // Add hasModelView ObjectProperty
            modelTripples.push(new NTriple(nodeId, hasModelViewProp, createDataNode('view', modelView.id)));
            hasViewCount ++;
        }

    }

    console.log('hasView Object Properties mapped', hasViewCount);
    console.log('modelDataTripple nodes mapped: ', modelTripples.length);
    console.log('-'.repeat(35));

    return modelTripples;
}