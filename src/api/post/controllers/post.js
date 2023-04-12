"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async create(ctx) {
    const { id } = ctx.state.user;

    ctx.request.body.data.user = id;

    const response = await super.create(ctx);

    return response;
  },

  async find(ctx) {
    const { id } = ctx.state.user;

    ctx.query.filters = { ...ctx.query.filters, user: id };

    const response = await super.find(ctx);

    return response;
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    const { id } = ctx.params;

    ctx.query.filters = { ...ctx.query.filters, user: user.id, id };

    const response = await super.find(ctx);

    return response;
  },

  async update(ctx) {
    const user = ctx.state.user;
    const { id } = ctx.params;

    ctx.query.filters = { ...ctx.query.filters, user: user.id, id };

    const post = await super.find(ctx);

    if (!post || !post.data.length) {
      return ctx.unauthorized("Post not found.");
    }

    const response = await super.update(ctx);

    return response;
  },

  async delete(ctx) {
    const user = ctx.state.user;
    const { id } = ctx.params;

    ctx.query.filters = { ...ctx.query.filters, user: user.id, id };

    const post = await super.find(ctx);

    if (!post || !post.data.length) {
      return ctx.unauthorized("Post not found.");
    }

    const response = await super.delete(ctx);

    return response;
  },
}));
