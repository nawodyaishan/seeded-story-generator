import type {RandomNumberGenerator} from "../interfaces/random-number-generator.ts";
import type {StoryElements} from "../models/story-elements.ts";

export class StoryGenerator {
    private rng: RandomNumberGenerator;
    private elements: StoryElements;

    constructor(rng: RandomNumberGenerator, elements: StoryElements) {
        if (!rng || !elements) {
            throw new Error('RandomNumberGenerator and StoryElements cannot be null');
        }
        this.rng = rng;
        this.elements = elements;
    }

    private choose<T>(arr: T[]): T {
        if (!arr || arr.length === 0) {
            throw new Error('Array cannot be null or empty');
        }
        const index = Math.floor(this.rng.next() * arr.length);
        return arr[index];
    }

    public generateStory(): string {
        try {
            const characterType = this.choose(this.elements.characters);
            const characterName = this.choose(this.elements.names);
            const setting = this.choose(this.elements.settings);
            const quest = this.choose(this.elements.quests);
            const obstacle = this.choose(this.elements.obstacles);
            const outcome = this.choose(this.elements.outcomes);

            const story = `
Once upon a time, a ${characterType} named ${characterName} embarked on a quest to ${quest}.
Journeying through the ${setting}, they faced ${obstacle}.
In the end, ${characterName} ${outcome}, leaving a tale that would be told for generations.
      `;

            console.log('Story generated successfully');
            return story.trim();
        } catch (error:any) {
            console.error('Error generating story:', error.message);
            throw new Error('Failed to generate story');
        }
    }
}