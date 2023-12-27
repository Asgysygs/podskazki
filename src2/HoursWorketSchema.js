export default class HoursWorkedSchema {
    validators = [(value) => typeof value === 'number' && value >= 0 && Number.isInteger(value)];
  
    isValid(value) {
      return this.validators.every((validator) => validator(value));
    }
  
    setHoursRangeConstraint(min, max) {
      const validator = (value) => (value != null ? value < max : false);
      this.validators.push(validator);
      return this;
    }
  }
  