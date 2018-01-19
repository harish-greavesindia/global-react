import { assemble } from '../helpers/SimpleObjectValidationHelper';
import { size } from '../vendor/lodash';

abstract class BaseModel{

    //All Model Errors
    protected errors : any = {};

    //Values Of Models
    values = () => { 
        let value = {};
        Object.keys(this.rules).map((item) => {
            value[item] = this[item];
        });

        return value;
    };

    //Rules Method
    abstract rules: any;

    //Validate Function
    validate = () => {
        const isValid =  assemble(this.rules);
        this.errors = isValid(this.values());        

        return (size(this.errors) === 0);
    };

    //Get Errors Functions
    getErrors = () => this.errors;

    //Load Function
    load = (data : any) => {
        Object.keys(this.rules).map((item) => {
            this[item] = data[item];
        })
    }
}

export default BaseModel;