import React from 'react';
import diagnostico from './anemia.js'
class Model {
    constructor(){
        this.notify = null;
        this.info={
            name:null,
            age:null,
            weight: null,
            pesoAdecuado: null,
            departamento: null,
            prematuro: null,
            ageType:null,
            hemoglobina:null
        }
        this.diagnost=null;

    }
    subscribe (render) {
		this.notify = render;
    }
    diag(){
        this.diagnost=diagnostico(this.info.prematuro, this.info.age, this.info.ageType, this.info.hemoglobina, this.info.weight, this.info.pesoAadecuado);
    }
    getInfo(){
        Object.keys(this.info).map(a=>{
            console.log(a +': ' +this.info[a]);
        })
        this.diag();
        console.log(this.diagnost);
        this.notify();
    }
}

export default Model;