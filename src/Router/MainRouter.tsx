import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";
import Layout from "../Layout/Layout";
import Upload from "../Pages/Upload";

export const MainRouter = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen/>,
      },
    ],
  },
  {
    path: "/upload",
    element: <Upload />
  }
]);