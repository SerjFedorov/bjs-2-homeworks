function parseCount (parseNumber){
    let result = Number.parseFloat(parseNumber);
        if (Number.isNaN(result)) throw new Error('Невалидное значение');
        return result;  
}

function validateCount (b) {
    try {
        return parseCount(b)
    }
    catch(err) {
        return err
    }  
};

class Triangle {
    constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    if 
}