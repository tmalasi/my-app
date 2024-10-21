import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from './contact/Contact';
import Calendar from './calendar/Calendar';
import Projects from './projects/Projects';
import ProjectDetails from './projects/ProjectDetails'; // Import the ProjectDetails component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "calendar",
        element: <Calendar/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "projects/:id",
        element: <ProjectDetails/> // Route for individual project pages
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
