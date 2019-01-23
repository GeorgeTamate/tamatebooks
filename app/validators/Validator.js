"use strict";

class Validator {

    constructor(routeParams, requestParams) {
        this.routeParams = routeParams;
        this.requestParams = requestParams;
    }

    returnLengthError(length) {
        return {
            error: {
                message: `This action cannot have ${length} parameter(s).`
            }
        };
    }

    returnTypeError(paramPositions) {
        let messages = [];
        for(let i = 0; i < paramPositions.length; i++) {
            messages.push(`Parameter number ${paramPositions[i]+1} has to be of type ${routeParams['params']['types'][i]}.`);
        }
        return {
            error: {
                message: messages
            }
        };
    }

    returnValueError() {
        // @TODO
    }

    isValidLength(params, lengths) {
        const lengthsCount = lengths.length;
        for(let i = 0; i < lengthsCount; i++) {
            if(params.length == lengths[i]) {
                return true;
            }
        }
        return false;
    }

    isInteger(value) {
        if(!this.isNumber(value)) {
            return false;
        }
        const number = Number(value);
        return Number.isInteger(number);
    }

    isNumber(value) {
        if(isNaN(value)) {
            return false;
        }
        return true;
    }

    isString(value) {
        if (typeof value === 'string' || value instanceof String) {
            return true;
        }
        return false;
    }

    validate() {

        // @TODO
        
        //length
        if(!this.isValidLength(this.requestParams, this.routeParams['params']['lengths'])) {
            return this.returnLengthError(this.requestParams.length);
        }
        //type
        //value
    }

}

module.exports = Validator;
