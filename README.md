## React

This is a simple React application. This application serves as a basic template for a react applications.  
This project is bootstrapped with [Vite](https://vitejs.dev/guide/).

## How to run

1. Before running the application, make sure all dependencies are installed. To install dependencies, run following command in terminal:

   ```sh
   npm install
   ```

2. Once dependencies are installed, run the following command to start the application:

   ```sh
   npm run dev
   ```

3. Refresh the URL in simple browser to see the output.

## FAQs & Debugging

### 1. I do not see browser in my workspace

Studio will automatically open the app in a new browser tab. If not, you can use the following steps to open the simple browser

1. From VS Code command pallette(`Ctrl/Cmd + Shift + P`), run **Studio Manager: SimpleBrowser Default URL** command. This will open the app in a new browser tab.

2. Your app runs on hosted env which can be accessed using host id, port provided in file **.vscode/.studio/studio-env.json**. Use values to create the URL as follows:
   `https://<STUDIO_HOST_ID>-3000.<STUDIO_DOMAIN>`

### 2. Getting `vite: not found` error

This means node_modules are missing in your workspace, please refer the 'How to run' section and make sure you have followed the steps in sequence

### 3. Can I use create-react-app instead Vite?

Yes, you can use create-react-app instead Vite, the default workspace is loaded with Vite setup, you can remove the Vite dependencies, add create-react-app dependencies and update the scripts to start using create-react-app.

Components: The application is modularized into five single-responsibility components: App (state container), TaskForm (input and validation), TaskFilter (filter controls and counters), TaskList (list rendering and empty state), and TaskItem (individual task row and actions).

Props: Data and event handlers flow top-down from App.jsx to child components (onAddTask to TaskForm; currentFilter, onFilterChange, and counts to TaskFilter; tasks, onToggleTask, and onDeleteTask to TaskList and down to TaskItem).

useState: Used in App.jsx to manage the master tasks array (initialized lazily from localStorage) and the active filter string (All, Pending, Completed). Also used locally in TaskForm.jsx to control the text title input and validation error state.

useEffect: Used in App.jsx with [tasks] as a dependency so that any addition, completion toggle, or deletion automatically serializes the updated task list (JSON.stringify) and persists it to localStorage.