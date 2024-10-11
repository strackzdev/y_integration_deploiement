import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsAgeAbove18(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsAgeAbove18',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const currentDate = new Date();
          const birthDate = new Date(value);
          const age = currentDate.getFullYear() - birthDate.getFullYear();
          const monthDiff = currentDate.getMonth() - birthDate.getMonth();

          return (
            age > 18 ||
            (age === 18 && monthDiff > 0) ||
            (age === 18 &&
              monthDiff === 0 &&
              currentDate.getDate() >= birthDate.getDate())
          );
        },
        defaultMessage() {
          return 'User must be at least 18 years old';
        },
      },
    });
  };
}
