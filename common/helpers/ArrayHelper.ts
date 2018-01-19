/**
 * Export Loadsh Functions
 */

import {get, has } from "../vendor/lodash";

/**
 * Get Value Helper Function
 * 
 * @param object 
 * @param key 
 * @param deafultValue 
 */
export function getValue(object: any, key: any, deafultValue: any = ''){
    return get(object, key, deafultValue);
}

/**
 * Has Value Helper Function
 * 
 * @param object 
 * @param key 
 */
export function hasValue(object: any, key: any){
    return has(object, key)
}

