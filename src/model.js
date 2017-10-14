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

    }
    subscribe (render) {
		this.notify = render;
    }
    diag(){
        diagnostico(this.info.prematuro, this.info.age, this.info.ageType, this.info.hemoglobina, this.info.weight);
    }
    getInfo(){
        Object.keys(this.info).map(a=>{
            console.log(this.info[a]);
        })
        this.diag();
        this.notify();
    }
}

export default Model;