export function calculateTotal(items) {
  return items.reduce((sum, items) => sum + item.price, 0);
}
