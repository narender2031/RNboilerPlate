import React from 'react';

import 'intl';
import 'intl-pluralrules';
import 'intl/locale-data/jsonp/en';

import {
  I18nManager,
  useI18n,
  TranslationDictionary,
  I18nContext,
} from '@shopify/react-i18n';

const translationLoadersMap: Record<string, any> = {
  en: () => require('@/translations/en'),
};

const intlLoadersMap: Record<string, any> = {
  en: () => require('intl/locale-data/jsonp/en'),
};

function getLocaleLoader(map: Record<string, any>, locale: string) {
  let loader = translationLoadersMap[locale];
  if (loader) {
    return loader;
  }

  const genericLocale =
    locale.includes('-') && locale.substr(0, locale.indexOf('-'));
  if (genericLocale) {
    loader = map[genericLocale];
    return loader;
  }
}

function loadTranslations(locale: string): TranslationDictionary | undefined {
  const loader = getLocaleLoader(translationLoadersMap, locale);
  return loader ? loader() : undefined;
}

function loadIntlData(locale: string): void {
  const loader = getLocaleLoader(intlLoadersMap, locale);
  loader ? loader() : undefined;
}

function loadIntlDataAndTranslations(
  locale: string,
): TranslationDictionary | undefined {
  loadIntlData(locale);
  return loadTranslations(locale);
}

const fallbackTranslations = translationLoadersMap.en();

const i18nGlobalHookOptions = {
  id: 'Global',
  translations: loadIntlDataAndTranslations,
  fallback: fallbackTranslations,
};

export function useGlobalI18n() {
  return useI18n(i18nGlobalHookOptions);
}

const defaultI18nManager = new I18nManager({
  locale: 'en',
  fallbackLocale: 'en',
});

export function I18nProvider({children}: React.PropsWithChildren<{}>) {
  const [i18nManager, seti18nManager] = React.useState<I18nManager | null>(
    defaultI18nManager,
  );

  React.useEffect(() => {
    try {
      const Localization = require('expo-localization');
      const {locale, region, timezone} = Localization;

      const manager = new I18nManager({
        locale,
        fallbackLocale: 'en',
        country: region,
        timezone: timezone,
      });
      seti18nManager(manager);
    } catch {
      // https://github.com/expo/expo/issues/5127
      // TODO: Track error
      console.log('Error getting device locale. Falling back to English');
    }
  }, []);

  return (
    <I18nContext.Provider value={i18nManager}>{children}</I18nContext.Provider>
  );
}

import './yup.i18n';
