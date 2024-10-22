"use client";
import { useParams } from 'next/navigation';
import React from 'react';
 
const blogs = [  
    { id: 1,
        image: "/images/blog1.jpg",
        Date: "18-oct-2024",
        author: "Syeda Noor ul ain Fatima",
        title: "Understanding React Hooks", 
        content: `Understanding React Hooks: A Beginner's Guide
        React Hooks have revolutionized the way we build functional components in React, offering a cleaner, more efficient way to manage state and side effects without relying on class components. Introduced in React 16.8, Hooks enable developers to tap into React's powerful features directly from functional components, making code more readable and reusable.

        In this blog, we’ll dive into what React Hooks are, why they matter, and explore some of the most commonly used Hooks.

        What Are React Hooks?
        Hooks are special functions that let you "hook into" React's core features—like state and lifecycle events—inside functional components. Before Hooks, class components were necessary to manage state or perform side effects, making the code more complex. With Hooks, we can manage these tasks with simple functions, which helps streamline the code and reduces boilerplate.

        Why Should You Use Hooks?
        React Hooks provide several benefits:

        Cleaner Code: Hooks eliminate the need for class components, leading to fewer lines of code and simpler syntax.
        Better Reusability: Hooks allow you to reuse stateful logic between components, something that was difficult with class components.
        Easier to Understand: By using Hooks, it's easier to see how the state and logic fit together, making debugging and collaboration much more straightforward.
        Commonly Used React Hooks
        Let’s look at two essential Hooks: useState and useEffect.

        1. useState
        The useState Hook lets you add state to functional components. You pass the initial state to useState, and it returns an array with two values: the current state and a function to update it.

        Here’s a simple example:

        javascript
        Copy code
        import { useState } from 'react';

        function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        );
        }
        In this example, useState(0) initializes the state variable count to 0. When the button is clicked, setCount updates the count state, which automatically re-renders the component.

        2. useEffect
        The useEffect Hook is used to handle side effects in your components. Whether you need to fetch data, update the DOM, or set up a subscription, useEffect is the go-to solution. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

        Example:

        javascript
        Copy code
        import { useState, useEffect } from 'react';

        function DataFetcher() {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(result => setData(result));

            // Cleanup function (optional, for unmounting purposes)
            return () => console.log('Cleanup on unmount');
        }, []);

        return (
            <div>
            {data ? <p>Data: {data}</p> : <p>Loading...</p>}
            </div>
        );
        }
        In this example, useEffect runs after the component renders. The empty array [] ensures the effect only runs once (on mount). If the array had values, the effect would rerun whenever those values change.

        Other Useful Hooks
        useContext: This Hook lets you consume context values without needing to pass props down multiple layers of components.
        useReducer: Similar to useState, but suitable for managing more complex state logic. It works in a way similar to Redux reducers.
        useRef: Useful for accessing DOM elements or storing mutable values that don't trigger re-renders.` },
    
    
    { id: 2, 
      image: "/images/blog2.jpg",
      Date: "18-oct-2024",
      author: "Syeda Noor ul ain Fatima",
      title: "Exploring CSS Grid", 
      content: `Exploring CSS Grid: The Future of Web Layouts
        CSS Grid is one of the most powerful tools for creating complex, responsive layouts on the web. Released in 2017, it transformed how developers approach web design by allowing for two-dimensional layouts, which means you can now control both rows and columns simultaneously with ease. If you’re looking to move beyond traditional layout techniques like floats, flexbox, or media queries, CSS Grid opens up a world of possibilities.

        In this blog, we’ll explore the basics of CSS Grid, how it compares to other layout models, and why it’s such a game-changer for modern web development.

        Why CSS Grid?
        Before CSS Grid, layouts relied heavily on frameworks or hacks like floats, tables, or flexbox. While flexbox works well for one-dimensional layouts (either a row or a column), it falls short when you need to manage both directions at once.

        CSS Grid, on the other hand, allows you to:

        Create Complex Layouts with Ease: Arrange items in rows and columns simultaneously.
        Reduce Dependencies: Say goodbye to heavy CSS frameworks.
        Responsiveness Made Simple: Build layouts that adapt beautifully to different screen sizes without complicated media queries.
        Align Items Precisely: You have full control over the positioning of items on the grid, without needing floats or absolute positioning.
        Getting Started with CSS Grid
        Let’s start with a basic example. The key element in CSS Grid is the grid container, which defines a grid on which child elements can be placed.

        Step 1: Create a Grid Container
        First, define a grid container by setting display: grid on the parent element:

        css
        Copy code
        .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 10px;
        }
        Here, grid-template-columns creates 3 equal columns (1fr stands for "one fraction" of the available space), while grid-template-rows adjusts the height of rows based on their content. The gap property sets the spacing between the grid items.

        Step 2: Add Grid Items
        Once the grid container is set up, all direct children of this container become grid items:

        html
        Copy code
        <div class="container">
        <div class="item1">Item 1</div>
        <div class="item2">Item 2</div>
        <div class="item3">Item 3</div>
        </div>
        Now, with just a few lines of CSS, you have a fully functional grid layout where each item is placed into one of the three columns.

        Controlling the Grid Layout
        CSS Grid provides immense control over the positioning of grid items. You can explicitly place items into specific grid areas using the grid-column and grid-row properties.

        Placing Items
        Let’s say you want to place a particular item across two columns and one row:

        css
        Copy code
        .item1 {
        grid-column: 1 / 3; /* Span from column 1 to column 3 */
        grid-row: 1;        /* Stay in row 1 */
        }
        With this, Item 1 will now take up the first two columns, while other items fill the remaining space.

        Grid Areas
        You can also create named grid areas to make layout even easier to manage:

        css
        Copy code
        .container {
        display: grid;
        grid-template-areas: 
            "header header header"
            "sidebar main main"
            "footer footer footer";
        }

        .header { grid-area: header; }
        .sidebar { grid-area: sidebar; }
        .main { grid-area: main; }
        .footer { grid-area: footer; }
        This makes it clear where each item should go and allows for complex layouts with minimal code.

        Making Your Grid Responsive
        One of the standout features of CSS Grid is its ability to create responsive layouts without relying on complex media queries. For example, you can use minmax() to create grids that automatically adjust based on the available space:

        css
        Copy code
        .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
        }
        In this example, the columns will automatically fill the available space, but won’t shrink below 200px. This means that on wider screens, more columns will be displayed, while on smaller screens, the grid will adjust accordingly.

        CSS Grid vs. Flexbox
        Both CSS Grid and Flexbox are powerful layout tools, and they can work together harmoniously in many cases. However, they serve different purposes:

        Flexbox is ideal for one-dimensional layouts, where you need to control the alignment of items in either a row or a column.
        CSS Grid is perfect for two-dimensional layouts, where you need to manage both rows and columns simultaneously.
        For example, you might use flexbox for a navigation bar where all items are aligned in a row, but use CSS Grid for the main content layout of a page.

        Real-World Use Cases for CSS Grid
        CSS Grid is perfect for creating complex, responsive layouts like:

        Dashboards: Arrange multiple widgets or charts in a clean, responsive grid.
        Portfolio Sites: Display images, videos, and text blocks in flexible, grid-based layouts.
        Magazine-Style Layouts: Design intricate layouts with varying content sections, spanning different rows and columns seamlessly.
        ` },  
    { id: 3, 
      image: "/images/blog3.jpg",
      Date: "18-oct-2024",
      author: "Syeda Noor ul ain Fatima",
      title: "Next.js: The React Framework", 
      content: `Next.js: The React Framework
        Next.js is a powerful React framework that enhances web development by offering server-side rendering (SSR), static site generation (SSG), and seamless routing out of the box. Built on top of React, it simplifies common tasks like routing, pre-rendering, and API integration, making it ideal for developers looking to build fast, scalable web applications.

        One of the standout features of Next.js is server-side rendering. With SSR, pages are rendered on the server before being sent to the client, improving performance and SEO. Additionally, static site generation allows you to pre-render pages at build time, which is perfect for content-heavy sites that need blazing-fast load times.

        Next.js also has a built-in routing system, so developers don’t need to worry about setting up complex routing libraries. The framework also supports API routes, making it possible to build full-stack applications with ease.

        Whether you're creating a dynamic web app, a static site, or a hybrid of both, Next.js provides the flexibility and performance optimizations needed for modern web development. Its simplicity and power have made it a go-to choice for React developers.` },  
];  

const BlogPost: React.FC = () => {
  const params = useParams<{ id: string }>();  
  const id = params?.id;  

 
  if (!id) {
      return <p className="text-gray-500">Blog post ID not found</p>;
  }

  
  const blog = blogs.find((item) => item.id.toString() === id);

  
  if (!blog) {
      return <p className="text-gray-500">Blog post not found</p>;
  }

  return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
          {/* Blog Post Header with Image */}
          {blog.image && (
              <div className="mb-6">
                  <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
              </div>
          )}

          {/* Blog Post Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <h1>{blog.Date}</h1>
          <h1 className="text-l text-gray-800 mb-4">{blog.author}</h1>
          
          {/* Blog Post Content */}
          <div className="text-gray-700 leading-relaxed">
              {blog.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                      {paragraph}
                  </p>
              ))}
          </div>
      </div>
  );
};

export default BlogPost;