/**
 * File: inside-data-prep.ts
 * Prepare Bizz Insite Data JavaScript vars to export const's to make direct access with TypeScript possible 
 */

/**
 * generic node package imports
 */
import { copyFileSync, appendFileSync } from 'fs';
import { resolve } from 'path';

/**
 * inside linked data specific imports
 */
import { getDataPath, initExportsFolder, getExportsPath } from './insite-data-config'; 
import { listFiles, initAppendFile } from './insite-data-utils';

/**
 * BEGIN: Inside Data Preperation Script
 */

// initialize src path js data vars
const dataPath = getDataPath();
// initialize dest folder ts data exports
initExportsFolder();

// var with insite model data
createInsiteExport('models_data', ['insite_models']);

// multiple "all_objects_(n)_data" exports (including overall index export)
const allObjectsVarJsFiles = listFiles(dataPath, 'all_objects_').filter(varJsFile => 
    !(varJsFile.endsWith('_mapping.js') || varJsFile.endsWith('_views.js') || varJsFile.endsWith('_relations.js')));
createInsiteIndexedExports(allObjectsVarJsFiles, ['objectData'], 'all_objects_data_index');

// var that maps object to one of the "all_objects_(n)_data" exports
createInsiteExport('all_objects_data_mapping', ['objectDataMapping']);

// var that contains objects with on view(s) relationship
createInsiteExport('all_objects_on_views', ['objectsOnViews']);

// var that contains object to object(s) relationship
createInsiteExport('all_objects_relations', ['objectRelations']);

// multiple "view_(n)_data" exports (including overall index export)
const allViewsVarJsFiles = listFiles(dataPath, 'view_');
createInsiteIndexedExports(allViewsVarJsFiles, ['viewData', 'objectRelations', 
    'objectData', 'viewReferences', 'objectReferences'], 'all_views_data_index');

/**
 * END: Inside Data Preperation Script
 */    


 
/**
 * Supporting Functionality for Inside Data Preperation Script
 */    

/**
 * Create typescript const export file from javascript var file from inside data publication folder
 * @param insiteExport Bizz Inside Data Export
 * @param varsToExport List of vars to export from var file
 */
function createInsiteExport(insiteExport: string, varsToExport: string[]) {

    // copy inside publication data javascript-file to insite data exports typescript file 
    const srcJsFilePath = resolve(getDataPath(), insiteExport + '.js');
    const destTsFilePath = resolve(getExportsPath(), insiteExport + '.ts');
    copyFileSync(srcJsFilePath, destTsFilePath);

    // add exports for vars at the end of the copied inside data exports file
    appendFileSync(destTsFilePath, '\n\n');
    appendFileSync(destTsFilePath, 'export { ' + varsToExport.join(', ') + ' };\n');

}

/**
 * Bundle js vars with same name and make these exportable as array list in ts index data export file
 * @param varJsFiles List with var js-files to export
 * @param varsToExport Vars to export
 * @param dataExportIndex Data export index where to bundle imports and create array list const exports
 */
function createInsiteIndexedExports(varJsFiles: string[], varsToExport: string[], dataExportIndex: string) {
    // Initialize ts data export file
    const dataExportIndexFile = resolve(getExportsPath(), dataExportIndex + '.ts');
    initAppendFile(dataExportIndexFile);
   
    // Loop through all insite data js files
    let constIndex = 0;

    for (const varJsFile of varJsFiles) {
        // Create ts export data file from each insite data js file
        const insiteExport = varJsFile.split('.js')[0];
        createInsiteExport(insiteExport, varsToExport);

        // Append export for each data const from each ts data export file
        constIndex ++;

        for (const varToExport of varsToExport) {
            // Create export and rename const to index name
            appendFileSync(dataExportIndexFile, 'import { ' + varToExport + 
                ' as ' + varToExport + constIndex + ' } from ' + "'./" + insiteExport + "'" + ';\n');
        }

    }

    // Create array list index const for each data const to export
    appendFileSync(dataExportIndexFile, '\n');

    for (const varToExport of varsToExport) {
        let constIndex = 0;
        let constExports: string[] = [];

        // Construct element for each ts data export file
        for (const varJsFile of varJsFiles) {
            constIndex ++;
            constExports.push(varToExport + constIndex);
        }

        // Add array list index const to ts data export index file
        appendFileSync(dataExportIndexFile, 'export const ' + varToExport + 'List = [' + constExports.join(', ') + '];\n');
    }
    
}