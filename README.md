# Expo React Native App with TypeScript and Animations

This repository contains a React Native app built with Expo, utilizing TypeScript for type safety and various animations implemented within the app, including flatlist animations, loading animations, and ringtone animations.

![App Demo](demo.gif)

## Getting Started

Follow these instructions to get the app up and running on your local machine.

### Prerequisites

Make sure you have the following software installed:

- Node.js (at least version 12)
- npm (Node Package Manager) or yarn
- Expo CLI (you can install it globally using `npm install -g expo-cli`)

### Installation

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/your-expo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-expo-app
   ```

3. Install dependencies using either npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

1. Start the Expo development server:

   ```bash
   expo start
   ```

2. This will open a web page in your default browser. You can use the Expo Go app on your mobile device to scan the QR code displayed on the page, or you can run the app on an emulator/simulator.

## Features

### Flatlist Animations

The app showcases various flatlist animations to demonstrate how to create smooth and engaging list interactions. You'll find animations like fade-in, slide-in, and scaling effects applied to list items.

## Folder Structure

The app's source code is organized as follows:

```
|-- src
|   |-- components
|   |   |-- Carousel.tsx
|   |   |-- LoadingIndicator.tsx
|   |   |-- PhoneRingIndicator.tsx
|   |   |-- Switch.tsx
|   |   |-- TwoFlatListSync.tsx
|   |   |-- UberEats.tsx
|-- App.tsx
|-- package.json
|-- README.md
```

- The `components` directory contains reusable UI components used in the app.
- The `App.tsx` file is the main entry point of the app.

## Acknowledgments

The development of this app was inspired by various resources and tutorials available in the React Native and Expo communities.

## Contributing

If you'd like to contribute to this project, feel free to submit pull requests or open issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Have fun exploring the world of animations in React Native with TypeScript and Expo! If you encounter any issues or have suggestions for improvements, please don't hesitate to let us know.
