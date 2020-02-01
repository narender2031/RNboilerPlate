import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: ({label}) => ({key: 'Yup.mixed.default', labelKey: label}),
    required: ({label}) => ({key: 'Yup.mixed.required', labelKey: label}),
    oneOf: ({label, values}) => ({
      key: 'Yup.mixed.oneOf',
      labelKey: label,
      params: {values: values ? values.filter(Boolean) : []},
    }),
    notOneOf: ({label, values}) => ({
      key: 'Yup.mixed.notOneOf',
      labelKey: label,
      params: {values},
    }),
  },
  string: {
    length: ({label, length}) => ({
      key: 'Yup.string.length',
      labelKey: label,
      params: {count: length},
    }),
    min: ({label, min}) => ({
      key: 'Yup.string.min',
      labelKey: label,
      params: {count: min},
    }),
    max: ({label, max}) => ({
      key: 'Yup.string.max',
      labelKey: label,
      params: {count: max},
    }),
    matches: ({label, regex}) => ({
      key: 'Yup.string.matches',
      labelKey: label,
      params: {regex},
    }),
    email: ({label}) => ({key: 'Yup.string.email', labelKey: label}),
    url: ({label}) => ({key: 'Yup.string.url', labelKey: label}),
    uppercase: ({label}) => ({key: 'Yup.string.uppercase', labelKey: label}),
    lowercase: ({label}) => ({key: 'Yup.string.lowercase', labelKey: label}),
  },
  number: {
    min: ({label, min}) => ({
      key: 'Yup.number.min',
      labelKey: label,
      params: {min},
    }),
    max: ({label, max}) => ({
      key: 'Yup.number.max',
      labelKey: label,
      params: {max},
    }),
    lessThan: ({label, less}) => ({
      key: 'Yup.number.lessThan',
      labelKey: label,
      params: {less},
    }),
    moreThan: ({label, more}) => ({
      key: 'Yup.number.moreThan',
      labelKey: label,
      params: {more},
    }),
    // @ts-ignore
    notEqual: ({label, notEqual}) => ({
      key: 'Yup.number.notEqual',
      labelKey: label,
      params: {notEqual},
    }),
    positive: ({label}) => ({key: 'Yup.number.positive', labelKey: label}),
    negative: ({label}) => ({key: 'Yup.number.negative', labelKey: label}),
    integer: ({label}) => ({key: 'Yup.number.integer', labelKey: label}),
  },
  date: {
    min: ({label, min}) => ({
      key: 'Yup.date.min',
      labelKey: label,
      params: {min},
    }),
    max: ({label, max}) => ({
      key: 'Yup.date.max',
      labelKey: label,
      params: {max},
    }),
  },
  boolean: {},
  object: {
    noUnknown: ({label}) => ({key: 'Yup.object.noUnkown', labelKey: label}),
  },
  array: {
    min: ({label, min}) => ({
      key: 'Yup.array.min',
      labelKey: label,
      params: {min},
    }),
    max: ({label, max}) => ({
      key: 'Yup.array.max',
      labelKey: label,
      params: {max},
    }),
  },
});
