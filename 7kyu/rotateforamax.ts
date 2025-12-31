export function maxRot(n: number): number {
  let s = n.toString();
  let max = n;

  for (let i = 0; i < s.length - 1; i++) {
    const fixed = s.slice(0, i);
    const rest = s.slice(i);

    const rotated = rest.slice(1) + rest[0];

    s = fixed + rotated;

    const value = Number(s);
    if (value > max) {
      max = value;
    }
  }

  return max;
}
