/* eslint-disable no-mixed-operators */
export default class PasswordHashSchema {
    validators = [
      (value) => typeof value === 'string',
      (value) => typeof value === 'string' && value.includes('MD5') || value.includes('SHA1') || value.includes('SHA256') || value.includes('SHA512'),
    ];
  
    isValid(value) {
      return this.validators.every((validator) => validator(value));
    }
  
    setHashAlgorithmConstraint(alg) {
      const validator = (value) => (value != null ? value.includes(alg) === true : false);
      this.validators.push(validator);
      return this;
    }
  }
  