import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|zh)/:path*'],
};
