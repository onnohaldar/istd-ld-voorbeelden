/**
 * File: export-insite-data-as-tripples.ts
 * Export Bizz Insite Publication Data (stored in javascript vars) as linked data tripples
 * - Based on examples from <https://github.com/vdjurdjevic/rdflib-ts>
 */

/**
 * insite linked data mapping lib exports
 */
import { mapInsiteDataToTripples } from './map-insite-data-to-tripples';
import { exportTurtleFile } from './export-turtle-file';

// map inside data tripples
const tripples = mapInsiteDataToTripples();

// create turtle file (.ttl) with tripples
exportTurtleFile(tripples);

// create JSON-LD file (.json) with tripples (PM)