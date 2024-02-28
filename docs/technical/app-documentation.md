---
sidebar_position: 1
---

# App Documentation

# Space Symposium App

## Overview

Space Symposium App is a mobile application developed using React Native, designed to enhance the experience of attendees at the Space Symposium event. It provides features such as event schedules, speaker information, live streaming of events, and push notifications. The application supports both Android and iOS platforms.

## Key Features

- **Event Agenda**: Users can view the schedule of events, including virtual events.
- **Speaker Information**: Details about speakers at the event.
- **Know Before You Go**: A section providing essential information for attendees, fetched dynamically from a WordPress site.
- **Push Notifications**: Integration with Firebase Cloud Messaging for sending notifications to users.
- **Live Streaming**: Integration with Vimeo for live streaming of events.

## Development Environment

- **React Native**: The application is built with React Native (version 0.72.3) for cross-platform support.
- **TypeScript**: Used for adding static type definitions to enhance code quality and developer experience.
- **Redux**: Manages application state, utilizing Redux Toolkit for efficient state management.
- **React Navigation**: Handles navigation within the app, with support for bottom tabs, drawer, and stack navigation.
- **React Native Paper**: Provides a wide range of UI components following Material Design guidelines.
- **Styled Components**: Utilized for styling components in a modular and reusable manner.

## Setup and Configuration

### Prerequisites

- Node.js
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)
- Cocoapods (for iOS dependencies)

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   yarn install
   ```
3. For iOS, install CocoaPods dependencies:
   ```bash
   cd ios
   pod install
   ```

### Running the Application

- **Android**:
  ```bash
  npx react-native run-android
  ```
- **iOS**:
  ```bash
  npx react-native run-ios
  ```

## Code Structure

- **src**: Contains the source code for the application, including components, contexts, reducers, and themes.
- **android** and **ios**: Native code and configuration for Android and iOS platforms, respectively.
- **.eslintrc.js** and **.prettierrc.js**: Configuration files for ESLint and Prettier, ensuring code quality and consistency.

## Key Components

- **Home**: The landing screen of the app, showcasing event highlights.
- **My Agenda**: Allows users to view and manage their event schedules.
- **Speakers**: Displays information about all speakers at the conference.
- **Interactive ExhibitMap**: Shows a map with markers representing events (Interactive Map by: **Map Your Show**)
- **Notifications**: A section for viewing push notifications received by the user.

## External Integrations

- **React Native Push Notification**: For handling push notifications.
- **React Native Async Storage**: For local storage of data.
- **React Native Device Info**: To obtain device-specific information.
- **Axios**: For making HTTP requests to external APIs.
- **Firebase Cloud Messaging**: Integrated for push notifications.
- **Vimeo**: Used for live streaming of events.

## Styling

The application's theme is defined in `src/themes/theme.js`, utilizing React Native Paper's theming capabilities to ensure a consistent look and feel across the app.

## Version Control

Git is used for version control, with a `.gitignore` file configured to exclude unnecessary files and directories from version control.

## Continuous Integration

The project is set up with basic configurations for CI/CD, leveraging GitHub Actions or similar services for automated testing and deployment.

## Conclusion

Space Symposium App is a comprehensive solution designed to enhance the attendee experience at the Space Symposium event, leveraging modern development tools and practices for cross-platform mobile application development, including live streaming and push notifications.

---

### Core Features

1. **User Authentication:** User Auth is handled outside the app, users register with launchsquid and receive a confirmation id which they use in conjunction with the user email to login.
2. **Database Operations:** Submits My Agenda items to a MySQL database and syncs user data with the app. Submits a token to AWS RDS Postgres to register for push notifications.
3. **Notifications:** Firebase Cloud Messaging supports sending push notifications to users.
4. **Analytics:** Google Analytics data to understand user behavior and improve the app.

### UI/UX Features

1. **Vector Icons:** Use of [RNVectorIcons](file:///Users/CMcNeil/Sites/SpaceSymposiumApp/ios/Podfile#52%2C8-52%2C8) indicates the app includes customizable vector icons for enhanced UI design.
2. **Device Information:** Integration with `react-native-device-info` for accessing device information used for analytics or feature customization based on the device.
3. **Environment Configuration:** Use of `react-native-dotenv` for managing environment variables for configuring different environments (development, staging, production).
4. **Dropdown Picker:** Incorporation of `react-native-dropdown-picker` for dropdown menus in the app's UI.
5. **UI Toolkit:** Use of `react-native-elements` for additional UI components and theming.

### Development and Debugging Tools

1. **Flipper Integration:** Conditional integration of Flipper for debugging, performance monitoring, and network inspection in development builds.
2. **Hermes JavaScript Engine:** Optional use of Hermes for improved performance of React Native apps on Android.

### State Management and Data Handling

1. **Redux:** Implementation of Redux for state management across the app, ensuring a predictable state container.
2. **Redux Thunk:** Use of Redux Thunk middleware for handling asynchronous logic in Redux.
3. **Reselect:** Integration of Reselect library for creating memoized, composable selector functions in Redux.

### Miscellaneous

1. **Proguard:** Configuration option for enabling Proguard in Android release builds for code obfuscation and optimization.
2. **Swift and Objective-C Integration:** The project supports both Swift and Objective-C, indicating a mix of newer Swift code and legacy Objective-C code or libraries.
