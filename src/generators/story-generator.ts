import seedrandom from 'seedrandom';

export class StoryGenerator {
    public generateStory(seed: string): string {
        // Initialize the seeded random number generator
        const rng = seedrandom(seed);

        // Arrays of possible story elements
        const characters = ['knight', 'wizard', 'thief', 'dragon', 'elf'];
        const names = ['Aria', 'Borin', 'Cedric', 'Daphne', 'Elric'];
        const settings = ['enchanted forest', 'abandoned castle', 'mystic mountain', 'shadow realm', 'ancient ruins'];
        const quests = ['seek the lost artifact', 'rescue the captured prince', 'defeat the shadow beast', 'break the eternal curse', 'discover the hidden valley'];
        const obstacles = ['a fierce storm', 'a band of marauders', 'a cunning illusionist', 'an impassable chasm', 'a treacherous maze'];
        const outcomes = ['succeeded gloriously', 'failed tragically', 'barely escaped', 'found unexpected help', 'uncovered a deeper mystery'];

        // Helper function to select a random element from an array
        function choose<T>(arr: T[]): T {
            const index = Math.floor(rng() * arr.length);
            return arr[index];
        }

        // Generate story elements
        const characterType = choose(characters);
        const characterName = choose(names);
        const setting = choose(settings);
        const quest = choose(quests);
        const obstacle = choose(obstacles);
        const outcome = choose(outcomes);

        // Construct the story
        const story = `
Once upon a time, a ${characterType} named ${characterName} embarked on a quest to ${quest}.
Journeying through the ${setting}, they faced ${obstacle}.
In the end, ${characterName} ${outcome}, leaving a tale that would be told for generations.
  `;

        return story.trim();
    }
}
