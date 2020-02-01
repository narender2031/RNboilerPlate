import * as React from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {fieldHasError} from '@/utils/form';

type CustomTextInputProps = {name: string; control: any} & Omit<
  React.ComponentProps<typeof TextInput>,
  'onChange' | 'error' | 'theme'
>;

const onTextChange = (
  args: NativeSyntheticEvent<TextInputChangeEventData>[],
) => ({
  value: args[0].nativeEvent.text,
});

const CustomTextInput: React.FunctionComponent<CustomTextInputProps> = ({
  name,
  control,
  ...passThrough
}) => {
  const hasErrors = fieldHasError({name, errors: control.errors});

  return (
    <Controller
      name={name}
      as={<TextInput {...passThrough} error={hasErrors} />}
      control={control}
      onChange={onTextChange}
    />
  );
};

export default CustomTextInput;
