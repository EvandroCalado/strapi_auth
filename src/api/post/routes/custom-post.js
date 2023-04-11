module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts",
      handler: "post.find",
      config: {
        policies: ["local-policy", "global::is-logged-in"],
      },
    },
    {
      method: "GET",
      path: "/posts/:id",
      handler: "post.findOne",
      config: {
        policies: ["global::is-logged-in"],
      },
    },
    {
      method: "PUT",
      path: "/posts/:id",
      handler: "post.update",
      config: {
        policies: ["global::is-logged-in"],
      },
    },
    {
      method: "DELETE",
      path: "/posts/:id",
      handler: "post.delete",
      config: {
        policies: ["global::is-logged-in"],
      },
    },
  ],
};
