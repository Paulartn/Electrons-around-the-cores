
describe('Electrons around the cores', () => {

    it('should exist and be a function', () => {
        expect(typeof calculateElectrons).toBe('function');
    });

	it('should return 0 when dice have no electrons (2, 4, 6)', () => {
        expect(calculateElectrons([2, 4, 6, 2])).toBe(0);
    });

    });