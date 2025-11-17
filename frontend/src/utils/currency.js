// Форматирование цены в долларах США
export function formatPriceUSD(price) {
  const numeric = typeof price === 'string' ? parseFloat(price) : price
  if (!isFinite(numeric) || Number.isNaN(numeric)) return '$0.00'
  if (numeric === 0) return 'Бесплатно'
  return `$${numeric.toFixed(2)}`
}



