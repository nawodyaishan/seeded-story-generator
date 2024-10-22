import {StoryGenerator} from "./generators/story-generator.ts";

const seed = process.argv[2] || 'default-seed';

const storyGenerator = new StoryGenerator()
const story = storyGenerator.generateStory(seed);

console.log(`Seed: "${seed}"\n`);
console.log(story);
