# Dev Stack Builder

> A modern, interactive web application built to help developers and learners discover, explore, and curate their ideal technology stack.

## 🛠️ Technologies Used

* Vite
* React.js
* Tailwind CSS & DaisyUI
* JavaScript (ES6+)
* TypeScript
* React-Toastify

## ✨ 3 Core Features

1. **Dynamic Technology Catalog:** Browse through a responsive 3-column grid of tools, frameworks, and databases complete with ratings, difficulty tiers, category badges, and interactive stack-adding states.
2. **Interactive Stack Sidebar:** Instantly curate your custom developer stack with duplicate validation, live item counts, individual item removal, and a clear-all action.
3. **Toast Notifications:** Integrated instant popup alerts powered by `react-toastify` for every stack manipulation.








## 📝 React Conceptual Questions & Answers

### What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is mainly used in React Projects because it gives Us flexibility to write HTML in JavaScript file and helps us render HTML codes dynamically in applications.

### What is the difference between props and state?
* **Props** are read-only properties passed down from a parent component to configure a child.
* **State** is a mutable data managed directly within a component that triggers a UI re-render when modified.

### What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to maintain state variables. It was used in this project to manage the selected user stack array and handle UI triggers.

### What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in components. It was required to asynchronously fetch and load the local JSON technology data upon the component's initial mount without blocking the main rendering thread.

### Why does every item in a .map() list need a unique key prop?
Unique Keys help React efficiently identify which elements have changed, been updated, or been removed because React compares the Virtual DOM with the real DOM. And it toptimizes rendering performance and prevents UI bugs.

### What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI outputs based on specific conditions. For example, it was used in the sidebar (Stack Cart) to toggle between an empty state message and the list of selected tech items:
```jsx
{
    selectedStacks.length > 0 ?
        selectedStacks.length > 1 ?
        <p className="text-[#94A3B8]">{selectedStacks.length} Technologies Selected</p> :
        <p className="text-[#94A3B8]">{selectedStacks.length} Technology Selected</p> : 
    <>
        <p className="text-[#94A3B8]">No Technologies Selected Yet</p>
        <div className="rounded-lg p-3 border border-dashed border-[#94A3B8]">
            <h3 className="text-[#94A3B8]">Your Stack is Empty</h3>
         </div>
    </>
}