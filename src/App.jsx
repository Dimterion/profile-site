import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts, { loader as postsLoader } from "./pages/Posts/Posts";
import Post, { loader as postLoader } from "./pages/Posts/Post";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Profile/Details";
import ProfilePosts from "./pages/Profile/ProfilePosts";
import ProfilePost from "./pages/Profile/ProfilePost";
import ProfilePostDetails from "./pages/Profile/ProfilePostDetails";
import ProfilePostTags from "./pages/Profile/ProfilePostTags";
import ProfilePostPhotos from "./pages/Profile/ProfilePostPhotos";
import Comments from "./pages/Profile/Comments";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Error from "./components/Error";
import Layout from "./components/Layout";
import ProfileLayout from "./components/ProfileLayout";
import "../server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="login" element={<Login />} />
      <Route
        path="blog"
        element={<Posts />}
        errorElement={<Error />}
        loader={postsLoader}
      />
      <Route path="blog/:id" element={<Post />} loader={postLoader} />
      <Route path="profile" element={<ProfileLayout />}>
        <Route
          index
          element={<Profile />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="details"
          element={<Details />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="blog"
          element={<ProfilePosts />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="blog/:id"
          element={<ProfilePost />}
          loader={async () => {
            return null;
          }}
        >
          <Route
            index
            element={<ProfilePostDetails />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="tags"
            element={<ProfilePostTags />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<ProfilePostPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
        <Route
          path="comments"
          element={<Comments />}
          loader={async () => {
            return null;
          }}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
