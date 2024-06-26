# rn-assignment5-10835820
Brief Description of Building the Application
1. Setting Up the Development Environment
Installed Node.js: Essential for running JavaScript code and managing packages.
Installed React Native CLI: Used for creating and managing the React Native project.
Created a New Project: Initialized the project using react-native init YourProjectName and navigated into the project directory.
2. Installing Required Packages
Navigation Packages: Installed @react-navigation/native, @react-navigation/bottom-tabs, react-native-screens, and react-native-safe-area-context to set up bottom tab navigation.
Styled Components: Installed styled-components for theming and styling the components.
Async Storage: Installed @react-native-async-storage/async-storage for storing and retrieving the user's theme preference.
3. Setting Up Navigation and Theme Switching
Created the Basic App Structure: Set up the App.js file with navigation and theme switching logic.
Defined Themes: Created lightTheme and darkTheme objects for managing light and dark modes.
Implemented Theme Switching: Used useState to manage the current theme and AsyncStorage to persist the theme choice.
4. Creating Screens
HomeScreen and SettingsScreen Components: Created separate files for HomeScreen and SettingsScreen components.
Styled Components: Used styled-components to style the screens according to the selected theme.
Toggle Theme Button: Added a button in both screens to toggle between light and dark themes.
5. Styling the Application
Custom Components: Created a CustomButton component using styled-components to match the design specifications.
Applied Styles: Used styled components to ensure the application's styling adapts to the selected theme.
6. Running the Application
Run on Android and iOS: Used react-native run-android for Android devices and react-native run-ios for iOS devices to run the application and ensure it works as expected.
![photo_2024-06-26_21-32-02](https://github.com/Nsiahdennis/rn-assignment5-10835820/assets/107279326/e70ecf5e-d249-438f-808b-71da345ed492)
