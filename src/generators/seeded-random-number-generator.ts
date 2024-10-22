import seedrandom from 'seedrandom';
import type {RandomNumberGenerator} from "../interfaces/random-number-generator.ts";


export class SeededRandomNumberGenerator implements RandomNumberGenerator {
    private rng: seedrandom.PRNG;

    constructor(seed: string) {
        if (!seed) {
            throw new Error('Seed cannot be empty');
        }
        this.rng = seedrandom(seed);
    }

    public next(): number {
        return this.rng();
    }
}
