/**
 * iStandaard Linked Data Tools - Run Tripple Store
 */

import { fusekiServices } from '@dgwnu/fuseki-cli';
import { serverStatus } from './istd-ld-tools-lib';

serverStatus().subscribe(
    () => console.log('-'.repeat(40)),
    error => {
        console.log(error);
        fusekiServices('run');
    },
    () => console.log('-'.repeat(40))
);
