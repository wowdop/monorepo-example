export const formatNumber = (number: number) =>
  new Intl.NumberFormat('en-GB', { currency: 'GBP', style: 'currency' }).format(
    number
  );
