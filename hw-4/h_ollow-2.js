let Vector = function (components) {
    this.components = components; // для порівняння з компонентами інших векторів
    this.checkLengths = function(b) { // порівняння довжин векторів
        if(this.components.length !== b.components.length)
            throw new Error('Error!');
    }
    this.toString = function() {
        if(this.components.length === 0)
            return '()';
        let result = '(' + this.components[0];
        for(let i = 1; i < this.components.length; i++)
            result += (',' + this.components[i]);
        result += ')';
        return result;
    }
    this.equals = function(b) {
        for(let i = 0; i < this.components.length; i++)
            if(this.components[i] !== b.components[i])
                return false;
        return true;
    }
    this.add = function(b) {
        this.checkLengths(b);
        let result = [];
        for(let i = 0; i < this.components.length; i++) {
            result[i] = this.components[i] + b.components[i];
        }
        return new Vector(result);
    }
    this.subtract = function(b) {
        this.checkLengths(b);
        let result = [];
        for(let i = 0; i < this.components.length; i++) {
            result[i] = - b.components[i] + this.components[i];
        }
        return new Vector(result);
    }
    this.dot = function(b) {
        this.checkLengths(b);
        let result = 0;
        for(let i = 0; i < this.components.length; i++) {
            result += this.components[i] * b.components[i];
        }
        return result;
    }
    this.norm = function() {
        let sum = 0;
        for(let i = 0; i < this.components.length; i++) {
            sum += this.components[i] * this.components[i];
        }
        return Math.sqrt(sum);
    }
};