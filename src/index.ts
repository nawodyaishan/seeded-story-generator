import {SeededRandomNumberGenerator} from "./generators/seeded-random-number-generator.ts";
import {StoryElements} from "./models/story-elements.ts";
import {StoryGenerator} from "./generators/story-generator.ts";

const seed = process.argv[2] || 'default-seed';

try {
    const rng = new SeededRandomNumberGenerator(seed);
    const elements = new StoryElements();
    const storyGenerator = new StoryGenerator(rng, elements);
    const story = storyGenerator.generateStory();

    console.log(`Seed: "${seed}"\n`);
    console.log(story);
} catch (error: any) {
    console.error('An error occurred:', error.message);
}