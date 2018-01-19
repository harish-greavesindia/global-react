const { validator, isRequired, chain, assemble } = require('simple-object-validation');

// Email Validator:
export const isValidEmail = validator(
    (value: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value), 
    (param : string, name : string, value : string) => `Not a valid Email Address`
);

//Safe Validatotr : for massive assignment
export const safe = validator(
    (value: string) => true, 
);


//Is Required Utility Function
export function required(attr : String , value  :any){
    return isRequired(attr)(value);
}

export {chain , isRequired , assemble};
