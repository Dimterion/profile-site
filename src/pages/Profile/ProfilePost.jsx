import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getProfilePosts } from "../../api";
import { requireAuth } from "../../utils";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params, request }) {
  await requireAuth(request);
  return getProfilePosts(params.id);
}

function ProfilePost() {
  const post = useLoaderData();

  return (
    <>
      <Link
        className="ml-5 hover:opacity-70 hover:underline"
        to=".."
        relative="path"
      >
        &larr; Back to all posts
      </Link>
      <article className="lg:w-2/5 sm:w-3/5 mt-8 mb-16 mx-8">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <img className="w-4/5" src={post.imageUrl} alt={post.title} />
        <small>{post.date}</small>
        <nav className="flex justify-start 	items-baseline my-3 p-2 font-semibold">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-1 opacity-60 underline"
                : "mx-1 hover:opacity-70 hover:underline"
            }
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-1 opacity-60 underline"
                : "mx-1 hover:opacity-70 hover:underline"
            }
            to="tags"
          >
            Tags
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mx-1 opacity-60 underline"
                : "mx-1 hover:opacity-70 hover:underline"
            }
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ post }} />
      </article>
    </>
  );
}

export default ProfilePost;
