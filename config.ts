import { LocalePrefix, Pathnames } from 'next-intl/routing';

export const locales = ['en', 'de', 'zh'];

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  '/': '/',
  pathnames: '/pathnames',
};

export const localePrefix: LocalePrefix<Locales> = 'always';
