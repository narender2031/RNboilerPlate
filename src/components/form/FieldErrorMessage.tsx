import React from 'react';
import {HelperText} from 'react-native-paper';
import {FieldName, FieldErrors} from 'react-hook-form';
import {useGlobalI18n} from '@/i18n';
import {getFieldError} from '@/utils/form';

interface IFieldErrorProps<FormValues> {
  name: FieldName<FormValues> | string;
  errors: FieldErrors<FormValues>;
}

function FieldError<FormValues>({name, errors}: IFieldErrorProps<FormValues>) {
  const [i18n] = useGlobalI18n();
  const error = getFieldError({name, errors});

  if (error) {
    if (typeof error === 'string') {
      return <HelperText type="error">{error}</HelperText>;
    } else {
      const {key, labelKey, params} = error;
      return (
        <HelperText type="error">
          {i18n.translate(key, {label: i18n.translate(labelKey), ...params})}
        </HelperText>
      );
    }
  }

  return null;
}

export default FieldError;
