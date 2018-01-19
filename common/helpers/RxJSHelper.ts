import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/timer';

export default Observable;

/**
 * Timer For Observable
 * @param endTime 
 */
export function timer(endTime : number){
    return Observable.timer(0, endTime);
}