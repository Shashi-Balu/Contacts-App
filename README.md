# Contacts App
This Contacts App allows users to search and manage their contacts efficiently. It provides a simple and intuitive interface for finding contacts and making phone calls directly from the app by linking it to the phone contacts app.

## Features
### Search Contacts:
Easily search for contacts using the app's search functionality. Enter a name or keyword to filter and find specific contacts quickly.

### View Contact Details: 
Tap on a contact to view their details, including their name and phone number.

### Call Contact:
Link to the device's default contact app to initiate a call. Simply tap on the phone number within the contact details to open the contact app with the phone number populated, allowing you to easily make a call.

## Installation
1. Before getting started, We need to have Node JS installed in the system. https://nodejs.org
2. We need a code editor to write the code snippets: https://code.visualstudio.com
3. In the command terminal, we need to install the project in the terminal.

## The project
### 1. create the project: 
 >> npx create-expo-app contacts-app
 >> cd contacts-app
 >> npx expo start
### 2. navigate between different screens, we need to install dependencies
 >> npm i react-native
 >> npm i react-navigation-stack
 >> npm i expo-contacts
 >> npm i react-native-gesture-handler

### 1.react-native: 
This is the core package for building mobile applications using React Native. It provides the necessary libraries and tools to develop and run React Native apps.

### 2.react-navigation-stack: 
This package is a part of the React Navigation library, which is used for navigation and routing in React Native apps. react-navigation-stack specifically provides a stack navigator, which allows for navigation between screens using a stack-based approach (pushing and popping screens).

### 3.expo-contacts: 
This package provides access to the device's contact information, such as names, phone numbers, and images. It allows you to retrieve and interact with the user's contacts in your app.

### 4. react-native-gesture-handler: 
This package provides a set of gesture-based interactions and animations for React Native apps. It enables smooth and responsive touch-based interactions, such as swiping, dragging, and tapping, enhancing the user experience.
