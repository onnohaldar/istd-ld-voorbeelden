/**
 * iStandaard Linked Data Tools - Tripple Store Library
 */

import { ClientRequest } from 'http';
import { Observable } from 'rxjs';

const tripleServer = 'http://localhost:3030';
const serverApi = tripleServer + '/$/';

export function serverStatus() {
    return new Observable<void>(observer => {

        const req = new ClientRequest(serverApi + 'ping');
        req.method = 'GET';
    
        req.on('error', error => {
            observer.error('Server Down!');
        });
        
        req.on('end', () => {
            observer.complete();
        });

        req.end();
    });
}
