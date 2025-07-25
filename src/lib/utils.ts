export function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  } else if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}K`;
  } else {
    return `$${price.toLocaleString()}`;
  }
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}

export function formatSquareFeet(sqft: number): string {
  return `${sqft.toLocaleString()} sq ft`;
}

export function formatLot(lot: number): string {
  return `${lot} acres`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
