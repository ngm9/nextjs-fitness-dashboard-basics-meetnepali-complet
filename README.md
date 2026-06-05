# Task Overview

FitTrack is an up-and-coming fitness tracker app focused on providing users with actionable insights into their workouts. To support user engagement analytics, every time a user interacts with a workout card, this should be logged in the background. The dashboard should provide a responsive list of recent workouts and support smooth reporting of user actions for later analysis.

### Objectives
- Retrieve a list of recent workouts through an asynchronous API call and display them to the user.
- Present each workout in a well-structured card layout, showing relevant details like name, duration, type, and date.
- Add a “Log Progress” action to each card that triggers a POST request to a logging endpoint, running in the background without impacting the main UI flow.
- Use strong TypeScript typing for all data structures and asynchronous responses across the implementation.
- Include clear indicators for loading states and informative messaging for errors encountered during data fetching.

### How to Verify
- When the page loads, recent workouts should appear in a clear, styled list.
- The "Log Progress" button should immediately show a visual cue that a log request was triggered, but not block or re-fetch the workout list.
- Use browser devtools or network tab to confirm analytics route POST requests occur on button click.
- The interface should handle all errors gracefully without breaking the UI, and loading indicators appear during fetches.
- Confirm UI is responsive and type errors do not occur during compilation or browser runtime.

### Helpful Tips
- The project is already prepared using Next.js 13+ with full TypeScript support, so ensure all new additions follow the same conventions.
- Use asynchronous patterns that keep the UI responsive while fetching workout data or sending background engagement logs.
- The “Log Progress” button on each workout card should trigger background activity without interrupting the user experience or delaying interactions.
- Provide user-facing feedback for loading and error states so the interface clearly reflects what is happening.
- Maintain smooth performance throughout—avoid unnecessary component updates, keep background requests lightweight, and ensure UI interactions remain snappy.
