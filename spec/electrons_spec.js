
describe('Electrons around the cores', () => {

    it('should exist and be a function', () => {
        expect(typeof calculateElectrons).toBe('function');
    });

	it('should return 0 when dice have no electrons (2, 4, 6)', () => {
        expect(calculateElectrons([2, 4, 6, 2])).toBe(0);
    });

	it('should return 2 when there is exactly one 3', () => {
        expect(calculateElectrons([2, 3, 4, 4])).toBe(2);
    });

	it('should return 4 when there is exactly one 5', () => {
        expect(calculateElectrons([2, 2, 5, 6])).toBe(4);
    });

	it('should sum up multiple 3s and 5s', () => {
        expect(calculateElectrons([3, 5, 2, 4])).toBe(6);
    });

	it('should ignore 1s as they have 0 electrons around the core', () => {
        expect(calculateElectrons([1, 1, 2, 4])).toBe(0);
    });

    });