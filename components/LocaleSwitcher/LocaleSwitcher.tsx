import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import LocaleSwitcherSelect from '../LocaleSwitcherSelect';
import { locales } from '@/config';

type Props = {};

const LocaleSwitcher = (props: Props) => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map(cur => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
