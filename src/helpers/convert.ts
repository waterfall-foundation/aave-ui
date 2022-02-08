export const formatUsd = (n?: string | number, to?: number) => {
  if (!Number(n)) return to || 0.8;
  return Number(n);
};
