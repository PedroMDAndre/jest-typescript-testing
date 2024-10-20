import { CartItem, getItemsTotal } from './etc/get-items-total';

describe('the application', () => {
  describe('Get items total', () => {
    const specItems = [
      { name: 'Item 1', cost: 100 },
      { name: 'Item 2', cost: 200 },
      { name: 'Item 3', cost: 300 },
    ];

    it('should correctly total the items', () => {
      const total = getItemsTotal(specItems);
      expect(total).toBeCloseTo(600);
    });

    it('should throw an error on a negative cost', () => {
      const brokenSpecArray = [{ name: 'Broken', cost: -100 }];
      expect(() => getItemsTotal(brokenSpecArray)).toThrow();
    });

    const generatedSpecCount = 10;
    const generatedSpecs: CartItem[] = [...Array(generatedSpecCount)].map(
      () => {
        const minValue = 0;
        const maxValue = 10_000;
        const randomCost = Math.random() * (maxValue - minValue) + minValue;
        return { name: '', cost: randomCost };
      }
    );

    it('should work with generated values', () => {
      const expectedTotal = generatedSpecs.reduce(
        (total, item) => total + item.cost,
        0
      );

      expect(getItemsTotal(generatedSpecs)).toBeCloseTo(expectedTotal);
    });
  });
});
