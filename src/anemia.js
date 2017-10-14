function diagnostico(condicion, edad, tipoEdad, hemoglobina, peso) {
    let prematuro = condicion === 'prematuro';
    let edad_semanas = null;
    switch (tipoEdad) {
        case 'semanas':
            if(prematuro){
                edad_semanas = edad;
            } else {
                edad=edad/4;
            }
            break;
        case 'años':
            edad = edad * 12;
            break;
    }
    let resultado = false;
    let diagnostico = '';
    if (edad_semanas) {
        if (edad_semanas == 1) { //semanas
            resultado = hemoglobina <= 13;
        } else if (edad_semanas >= 2 && edad_semanas <= 4) {
            resultado = hemoglobina <= 10;
        } else if (edad_semanas >= 5 && edad_semanas <= 8) {
            resultado = hemoglobina <= 8;
        }
    } else {
        if (edad < 2) {//meses
            resultado = hemoglobina < 13.5;
        } else if (edad >= 2 && edad < 6) {
            resultado = hemoglobina <= 10;
        } else if (edad >= 6 && edad <= 60) {
            resultado = hemoglobina < 11;

        }
    }
    diagnostico = resultado ? 'anemia' : 'sin anemia';
    console.log(diagnostico);
}

//diagnostico();

export default diagnostico;