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
  ],
};
