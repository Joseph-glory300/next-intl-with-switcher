// import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  // const t = useTranslations('Homepage');
  const t = await getTranslations('Homepage');

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4xl">{t('title')}</h1>
      <p>{t('content')}</p>
      {/* <Link href="/about">{t('about')}</Link> */}
    </main>
  );
}
