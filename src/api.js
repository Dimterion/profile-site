export async function getPosts(id) {
  const url = id ? `/api/posts/${id}` : "/api/posts";
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Couldn't fetch posts",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();

  return data.posts;
}

export async function getProfilePosts(id) {
  const url = id ? `/api/profile/posts/${id}` : "/api/profile/posts";
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Couldn't fetch posts",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();

  return data.posts;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
