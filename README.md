# Procedural Story Generator Using Seeded Randomness

Welcome to the **Procedural Story Generator**! This project showcases the capabilities of seeded randomness by generating unique, reproducible stories based on a user-provided seed. Built with TypeScript and [Bun](https://bun.sh/), it follows SOLID principles for clean and maintainable code.

## Introduction

This project is a command-line application that generates procedurally crafted stories using seeded randomness. By providing a seed string, you can generate a unique story. Using the same seed will always produce the same story, demonstrating the power of deterministic random number generation.

## Features

- **Seeded Randomness**: Generates reproducible stories based on a seed.
- **Modular Design**: Adheres to SOLID principles for maintainability.
- **Extensible Story Elements**: Easily add or modify story components.
- **Improved Error Handling**: Robust validation and descriptive error messages.
- **Logging**: Console logging for successful operations and errors.

## Project Structure

```
.
├── LICENSE
├── README.md
├── bun.lockb
├── package.json
├── src
│   ├── generators
│   │   ├── seeded-random-number-generator.ts
│   │   └── story-generator.ts
│   ├── index.ts
│   ├── interfaces
│   │   └── random-number-generator.ts
│   └── models
│       └── story-elements.ts
└── tsconfig.json
```

- **`src/index.ts`**: Entry point of the application.
- **`src/generators/story-generator.ts`**: Generates the story using random elements.
- **`src/generators/seeded-random-number-generator.ts`**: Implements the seeded RNG.
- **`src/interfaces/random-number-generator.ts`**: Interface for RNG implementations.
- **`src/models/story-elements.ts`**: Contains arrays of story elements.

## Prerequisites

- **Bun**: A fast JavaScript runtime that supports TypeScript out of the box.
    - Install from the [official website](https://bun.sh/).
- **Node.js** and **npm** (optional): If you prefer using Node.js.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/procedural-story-generator.git
   cd procedural-story-generator
   ```

2. **Install Dependencies**

   Using **Bun**:

   ```bash
   bun install
   ```

   Using **npm**:

   ```bash
   npm install
   ```

## Usage

### Running the Application

Using **Bun**:

```bash
bun src/index.ts "your-seed-here"
```

Using **Node.js** with **ts-node**:

```bash
npx ts-node src/index.ts "your-seed-here"
```

If you don't provide a seed, it defaults to `"default-seed"`.

### Example Output

**Command:**

```bash
bun src/index.ts "epic-adventure"
```

**Output:**

```
Story generated successfully
Seed: "epic-adventure"

Once upon a time, a dragon named Daphne embarked on a quest to discover the hidden valley.
Journeying through the shadow realm, they faced an impassable chasm.
In the end, Daphne barely escaped, leaving a tale that would be told for generations.
```

### Modifying Story Elements

You can customize the story elements by editing the **`src/models/story-elements.ts`** file. Add or remove elements in the arrays to create new story possibilities.

**Example:**

```typescript
// src/models/story-elements.ts

export class StoryElements {
  public characters = ['knight', 'wizard', 'thief', 'dragon', 'elf', 'giant'];
  public names = ['Aria', 'Borin', 'Cedric', 'Daphne', 'Elric', 'Fiona'];
  // Add more elements as desired
}
```

## Code Quality

The project follows SOLID principles:

- **Single Responsibility Principle**: Each class has a single responsibility.
- **Open/Closed Principle**: Classes are open for extension but closed for modification.
- **Liskov Substitution Principle**: Interfaces allow for interchangeable implementations.
- **Interface Segregation Principle**: Interfaces are specific and minimal.
- **Dependency Inversion Principle**: High-level modules depend on abstractions.

## Error Handling and Logging

- **Validation**: Constructors and methods check for invalid inputs and throw descriptive errors.
- **Try-Catch Blocks**: Error handling ensures the application doesn't crash unexpectedly.
- **Console Logging**: Success and error messages are logged to the console.

**Example:**

```typescript
// src/generators/story-generator.ts

public generateStory(): string {
  try {
    // Story generation logic
    console.log('Story generated successfully');
    return story.trim();
  } catch (error) {
    console.error('Error generating story:', error.message);
    throw new Error('Failed to generate story');
  }
}
```

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.

**Steps to Contribute:**

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/your-feature
   ```

5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- **[Bun](https://bun.sh/)**: A fast all-in-one JavaScript runtime.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript at Any Scale.
- **[seedrandom](https://www.npmjs.com/package/seedrandom)**: Seeded random number generator for JavaScript.
- **[SOLID Principles](https://en.wikipedia.org/wiki/SOLID)**: Guidelines for object-oriented programming and design.

---

Feel free to experiment with the code, add new story elements, or enhance the functionality. If you encounter any issues or have questions, please open an issue on GitHub.

**Happy Coding!**