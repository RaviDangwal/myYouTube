import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Sidebar from "./components/Sidebar";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "/watch", element: <WatchPage /> },
        {
          path: "/demo",
          element: (
            <>
              <Demo />
              <Demo2 />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
