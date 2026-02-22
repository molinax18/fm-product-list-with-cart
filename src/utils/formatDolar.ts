export function formatDolarToUSD(number: number): string {
  const dolarFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return dolarFormatted.format(number);
}
