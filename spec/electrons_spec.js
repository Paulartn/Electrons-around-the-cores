
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

	describe('Moodle Example Tests', () => {
        it('Example 1: [1, 2, 3, 4, 5] -> 6', () => {
            expect(calculateElectrons([1, 2, 3, 4, 5])).toBe(6);
        });

        it('Example 2: [2, 2, 3, 3] -> 4', () => {
            expect(calculateElectrons([2, 2, 3, 3])).toBe(4);
        });

        it('Example 3: [6, 6, 4, 4, 1, 3] -> 2', () => {
            expect(calculateElectrons([6, 6, 4, 4, 1, 3])).toBe(2);
        });

        it('Example 4: [3, 5, 3, 5, 4, 2] -> 12', () => {
            expect(calculateElectrons([3, 5, 3, 5, 4, 2])).toBe(12);
        });
    });

    });