/**
 * File: export-turtle-file.ts
 * Export triples in turtle file format (.ttl)
 * - Based on examples from <https://github.com/vdjurdjevic/rdflib-ts>
 */

/**
 * node lib exports
 */
import { NQuad, RdfIOManager, NTriple } from 'rdflib-ts';

/**
 * inside linked data specific imports
 */
import { initTriplesDataFolder, getTriplesExportFilePath } from './insite-data-config';

/**
 * Export a RDF Turtle foramted file with triples/quads
 * @param quadsToExport Quads to export in NQuad format
 */
export function exportTurtleFile(triplesToExport: NTriple[]) {
    // initialize rfd export/import file manager
    initTriplesDataFolder();
    const ioManager = new RdfIOManager();
    // initialize defaults
    const triplesExportPath = getTriplesExportFilePath();

    try {
        let quadsToExport: NQuad[] = [];

        for (const triple of triplesToExport) {
            quadsToExport.push(new NQuad(triple.subject, triple.predicate, triple.object));
        }

        console.log('');
        console.log('Export turtle file ==> ', triplesExportPath);
        ioManager.serializeAsync(quadsToExport, triplesExportPath);
    } catch (error) {
        console.log(error.message);
    }

} 