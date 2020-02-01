import { FieldName, FieldErrors } from 'react-hook-form';

import get from 'lodash/get';
import has from 'lodash/has';

export interface IFieldErrorProps<FormValues> {
	name: FieldName<FormValues> | string;
	errors: FieldErrors<FormValues>;
}

export function fieldHasError<FormValues>({ name, errors }: IFieldErrorProps<FormValues>) {
	return has(errors, `${name}.message`);
}

export function getFieldError<FormValues>({ name, errors }: IFieldErrorProps<FormValues>) {
	return get(errors, `${name}.message`);
}
