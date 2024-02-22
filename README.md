# YouTube Clone

This project is a YouTube Clone created with React, Tailwind CSS, Redux Toolkit, React Router DOM, and the YouTube API. The goal of the project was to replicate the look and feel of the YouTube user interface while incorporating additional features to enhance the user experience.

## Features

### 1. YouTube-Like UI

The user interface is designed to closely resemble the YouTube platform, providing a familiar and intuitive experience for users.

### 2. Optimized Search Feature

- **Live Suggestions:** As users type in the search bar, live suggestions are fetched from the YouTube API, offering real-time feedback.
- **Debouncing:** The search functionality uses debouncing to manage the number of API calls, improving performance and reducing unnecessary requests.
- **Caching:** Previous search suggestions are stored in the cache using Redux Toolkit, minimizing duplicate API calls.

### 3. N-Level Comment System

A sophisticated comment system, inspired by Reddit, is implemented, allowing users to engage in discussions at various levels.

### 4. Live Chat Feature

Users can participate in live chat-like discussions, where comments are loaded using API polling. The size of chats is limited to prevent page freezing and ensure a smooth user experience.

## Tech Stack

- **React:** Building the user interface and managing the application state.
- **Tailwind CSS:** Styling the components with a utility-first CSS framework.
- **Redux Toolkit:** State management for caching, handling search suggestions, and managing comments.
- **React Router DOM:** Navigating between different pages within the application.
- **YouTube API:** Fetching video data, search suggestions, and chat comments.

## Deployment

The application is deployed on Firebase. You can access the live demo - [my-413812.web.app](https://my-413812.web.app/)https://my-413812.web.app/]
