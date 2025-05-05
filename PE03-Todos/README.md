## PE03 – Todos App

### Input
The user can interact with the app to manage their tasks. The text input field is used to enter a new task to the list, and the submit button will add the task to the list. Every to-do has a Title and "Done" and "Delete" buttons. There is also a tab bar at the bottom with All, Active, and Complete filtering options, and users are able to view these tasks based on their status.

### Process
When the user enters a task and clicks "Submit", the app stores it in the local state and logs to the console. Each task is an object of title and complete status. "Done" button toggles the completion status, and "Delete" removes the task. The tab bar updates the UI based on the selected filter by setting conditions to show all, completed, or pending tasks.

### Output
The task list is presented as a styled scroll view. Finished tasks are filtered. Based on the active filter tab, the UI will update dynamically to show the relevant tasks. Actions like add or remove are immediately reflected in the interface and printed to the terminal for both functional interactivity and developer visibility in testing.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

