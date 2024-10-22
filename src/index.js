import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from './contact/Contact';
import Calendar from './calendar/Calendar';
import Projects from './projects/Projects';
import AboutMe from './aboutMe/AboutMe';


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
        path: "about",
        element: <AboutMe/>
      },
      {
        path: "calendar",
        element: <Calendar/>
      },
      {
        path: "projects",
        element: <Projects/>,//handle the dynamic logic of the id
        children: [
          {
            path: ":id",  // Dynamically match the project ID
          },
        ],
      },
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
