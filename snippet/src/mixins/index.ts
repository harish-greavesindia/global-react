import * as React from 'react';

type Constructor<T = {}> = new (...args: any[]) => T;

export function Forms<TBase extends Constructor>(Base: TBase) {
    return class extends React.Component<any , any> {

        constructor(props : any){
            super(props);
        }

        handleUserInput(e: React.FormEvent<HTMLInputElement>) {
            const name = e.currentTarget.name;
            const value = e.currentTarget.value;
            this.setState({ ...this.state, [name]: value }, () => {});
        }

        setValidationError = (key: string, value: string, success: boolean) => {
            if (!success) {
                this.state.errors[key] = value;
                this.setState({ errors: this.state.errors });
            } else {
                delete this.state.errors[key];
                this.setState({ errors: this.state.errors });
            }
        };

        render(){
            return Base.prototype.render()
        }

    }
}
