# Dev Stack

Dev Stack is a simple React project where users can explore different development technologies and create their own development stack. The technologies are loaded from a JSON file and can be added or removed from the stack.

## Technologies Used

* React
* JavaScript
* Vite
* HTML
* CSS
* JSON
* React Toastify

## Features

* Explore different frontend, backend, database, and other technologies.
* Add and remove technologies from your own stack.
* Responsive design with toast notifications for stack actions.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child. State is data managed inside a component that can change.

### 3. What does the useState hook do, and where did you use it in this project?

useState is used to store data that can change. I used it in Technologies.jsx to store the technologies selected for the user's stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run code after a component renders. It can be used to fetch data when a component loads.

In this project, the JSON data is loaded using React's Suspense and use() instead of useEffect.

### 5. Why does every item in a .map() list need a unique key prop?

The key is needed to identify each item in the list. It helps React know which item was changed, added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used it in YourStack.jsx file:

{stack.length === 0 ? (
    <div className="emptyStack">
        <p>Your stack is empty.</p>
        <span>Add technologies to build your stack.</span>
    </div>
) : (
    // selected technologies
)}

If the stack is empty, the empty stack message is shown.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent to a child using props. A child can send something back by calling a function that was passed to it as a prop.

In this project, Technologies.jsx passes technology and onAdd to TechnologyCard. The card calls onAdd() when the user clicks **Add to Stack**.
