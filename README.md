import type { Locale, Region } from '@/types';

export function formatCurrency(amount: number, region: Region, locale: Locale) {
  const currency = region === 'israel' ? 'ILS' : 'USD';
  return new Intl.NumberFormat(locale === 'he' ? 'he-IL' : 'en-US', { style: 'currency', currency }).format(amount);
}
