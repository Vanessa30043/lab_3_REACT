# React Task Management – Lab 3

## **Lists, Keys, and Conditionals**.

Imagine you are a frontend developer working on a task management system. Your team needs a component that can display a list of tasks, filter them by status, and show different visual states based on task properties. The component should be reusable, type-safe, and handle various task states efficiently.

This lab will help you practice building components that work with dynamic data and implement proper React patterns for list rendering. In this lab, I practiced how to render dynamic lists, use proper key management, filter items, and apply conditional rendering based on task properties. The focus of this lab is learning how React handles lists, how TypeScript enforces structure, and how to compose reusable components.

The project simulates a basic task management system where tasks can be listed, filtered, updated, and removed. This helped me understand practical list rendering and component communication patterns.

## What This Project Helped Me Learn

- While building this project, I got practice with:
- Rendering lists of items using the `.map()` method
- Using proper keys to help React track list elements
- Creating TypeScript interfaces for tasks and component props
- Applying conditional rendering to show different states
- Filtering tasks by status and priority
- Handling events like status changes and task deletion
- Passing props between multiple components
- Structuring a project into reusable, type-safe components
- This lab helped me understand how React and TypeScript work together to build real applications.

## Project Structure (Simple Breakdown)

`src/
  components/
    TaskList/
      TaskList.tsx
    TaskItem/
      TaskItem.tsx
    TaskFilter/
      TaskFilter.tsx types/ index.ts
README.md
package.json
tsconfig.json
vite.config.ts`

components/ → all task-related UI components  
types/ → shared TypeScript interfaces

## Tools & Technologies

This project uses:

React  
TypeScript  
Vite  
Node.js + npm

These tools make the project fast, typed, and easy to extend.

## How to Run This Project (Steps)

1.  Create a new project or download this one

`npm create vite@latest task-manager -- --template react-ts`

2.  Move into the folder

`cd task-manager`

3.  Install dependencies

`npm install`

4.  Run the development server

`npm run dev`

Open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

## Lab Components

During the lab, I built three core components following TypeScript interfaces from the `/types` folder.

### TaskList

Displays a list of tasks, handles key usage, manages status changes, and handles deletion.

### TaskItem

Shows individual task details and uses conditional rendering for status, priority, and visual states.

### TaskFilter

Allows filtering tasks by status and priority and notifies the parent component when filters change.

## What I Had to Do in the Lab

- Create TypeScript interfaces for:  
  `Task`, `TaskStatus`, `TaskListProps`, `TaskItemProps`, and `TaskFilterProps`
- Implement list rendering using `.map()` with unique keys
- Use conditional logic to style tasks differently
- Add filtering for status and priority
- Handle task deletion and status changes
- Compose all components into a working UI
- Follow React and TypeScript best practices

## Why This Lab Matters (Explanation)

Many real applications rely on list rendering — product lists, messages, tasks, notifications, etc. This lab helped me:

- Understand how React efficiently renders lists
- Avoid common key errors
- Build components that change based on state
- Manage multiple UI states at once
- Use TypeScript to control data shapes
- Organize files the way real projects are structured

This lab strengthened my core React skills and helped me think about reusable component design.

## Requirements Checklist

Components created  
TypeScript interfaces added  
List rendering implemented  
Keys used properly  
Filtering functionality added  
Conditional rendering applied  
Props passed correctly  
README completed  
Project runs with `npm run dev`
