import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "../layout/Layout";
import { Home } from "../pages/home/Home";
import { Channels } from "../pages/channels/Channels";
import { About } from "../pages/about/About";

export const routers = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/channels',
        element: <Channels />,
      },
      {
        path: '/about',
        element: <About />,
      }
    ]
  }
];

export default function Router() {
  const router = createBrowserRouter(routers);

  return <RouterProvider router={router} />;
}
