/* eslint-disable camelcase */

exports.up = async (pgm) => {
  await pgm.createTable("contents", {
    id: {
      type: "uuid",
      default: pgm.func("gen_random_uuid()"),
      notNull: true,
      primaryKey: true,
      unique: true,
    },

    parent_id: {
      type: "uuid",
      notNull: false,
    },

    owner_id: {
      type: "uuid",
      notNull: true,
    },

    slug: {
      type: "varchar",
      check: "length(slug) <= 256",
      notNull: true,
    },

    title: {
      type: "varchar",
      check: "length(title) <= 256",
      notNull: false,
    },

    body: {
      type: "text",
      check: "length(body) <= 20000",
      notNull: true,
    },

    status: {
      type: "varchar",
      default: "draft",
      notNull: true,
      check: "status IN ('draft', 'published', 'deleted')",
    },

    source_url: {
      type: "varchar",
      check: "length(source_url) <= 2000",
      notNull: false,
    },

    published_at: {
      type: "timestamp with time zone",
      notNull: false,
    },

    created_at: {
      type: "timestamp with time zone",
      notNull: true,
      default: pgm.func("(now() at time zone 'utc')"),
    },

    updated_at: {
      type: "timestamp with time zone",
      notNull: true,
      default: pgm.func("(now() at time zone 'utc')"),
    },

    deleted_at: {
      type: "timestamp with time zone",
      notNull: false,
    },
  });

  await pgm.createIndex(
    "contents",
    ["owner_id", "slug", "(deleted_at IS NULL)"],
    {
      name: "contents_owner_id_slug_deleted_at_unique_index",
      unique: true,
      where: "deleted_at IS NULL",
    }
  );
};

exports.down = false;
