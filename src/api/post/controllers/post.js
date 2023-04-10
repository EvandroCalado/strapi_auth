"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async create(ctx) {
    const { id } = ctx.state.user;

    ctx.request.body.data.user = id

    const response = await super.create(ctx);

    return response;
  },

  async find(ctx) {
    const user = ctx.state.user

    ctx.query.filters = { ...ctx.query.filters, user: user.id}

    const response = await super.find(ctx);

    return response;
  }
}));
