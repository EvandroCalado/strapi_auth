module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  ckeditor: {
    enabled: true,
  },
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        secure: true,
        username: env("SMTP_USERNAME"),
        password: env("SMTP_PASSWORD"),
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: env("SMTP_DEFAULT_FROM"),
      defaultReplyTo: env("SMTP_DEFAULT_REPLAY_TO"),
    },
  },
});
