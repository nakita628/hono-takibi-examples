import { createRoute, z } from '@hono/zod-openapi'

export const getDiscoursePostEventEventsJsonRoute = createRoute({
  method: 'get',
  path: '/discourse-post-event/events.json',
  tags: ['Events'],
  summary: 'List calendar events',
  operationId: 'listEvents',
  request: {
    query: z.object({
      include_details: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            name: 'include_details',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['true', 'false'] },
            description: 'Include detailed event information (creator, invitees, stats,\netc.)',
          },
        }),
      include_card: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            name: 'include_card',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['true', 'false'] },
            description: 'Include card fields without detailed event HTML or statistics',
          },
        }),
      category_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'category_id',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Filter events by category ID',
          },
        }),
      include_subcategories: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            name: 'include_subcategories',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['true', 'false'] },
            description: 'Include events from subcategories when filtering by category',
          },
        }),
      post_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'post_id',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Filter to events associated with a specific post ID',
          },
        }),
      attending_user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'attending_user',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              "Filter to events where the specified user (username) has RSVP'd\nas going",
          },
        }),
      before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description: 'Return events starting before this date/time (ISO 8601 format)',
          },
        }),
      after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description: 'Return events starting after this date/time (ISO 8601 format)',
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['asc', 'desc'] },
            description: 'Sort order for events by start date (default: asc)',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1, maximum: 200 },
            description: 'Maximum number of events to return (default: 200)',
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            description: 'Filter to events whose topic has every specified tag',
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: 'Search event names, descriptions, and locations',
          },
        }),
      status: z
        .enum(['public', 'private', 'standalone'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['public', 'private', 'standalone'] },
            description: 'Filter by event attendance status',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response (detailed)',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              events: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    category_id: z.int().nullable(),
                    name: z.string().nullable().exactOptional(),
                    recurrence: z.string().nullable().exactOptional(),
                    recurrence_until: z.iso.datetime({ offset: true }).nullable().exactOptional(),
                    starts_at: z.iso.datetime({ offset: true }).nullable(),
                    ends_at: z.iso.datetime({ offset: true }).nullable(),
                    rrule: z.string().exactOptional(),
                    show_local_time: z.boolean(),
                    timezone: z.string().nullable(),
                    duration: z
                      .string()
                      .regex(/^\d{2}:\d{2}:\d{2}$/)
                      .exactOptional(),
                    all_day: z.boolean().exactOptional(),
                    custom_fields: z.object({}).nullable().exactOptional(),
                    post: z
                      .strictObject({
                        id: z.int(),
                        post_number: z.int(),
                        url: z.string(),
                        category_slug: z.string(),
                        topic: z
                          .strictObject({
                            id: z.int(),
                            title: z.string(),
                            tags: z.array(z.string()),
                            tags_descriptions: z.object({}),
                            slug: z.string(),
                          })
                          .openapi({
                            required: ['id', 'title', 'tags', 'tags_descriptions', 'slug'],
                          }),
                      })
                      .openapi({
                        required: ['id', 'post_number', 'url', 'category_slug', 'topic'],
                      }),
                    occurrences: z.array(
                      z
                        .strictObject({
                          starts_at: z.string().nullable(),
                          ends_at: z.string().nullable(),
                        })
                        .openapi({ required: ['starts_at', 'ends_at'] }),
                    ),
                    can_act_on_discourse_post_event: z.boolean().nullable(),
                    can_update_attendance: z.boolean().nullable(),
                    creator: z
                      .strictObject({
                        id: z.int(),
                        username: z.string(),
                        name: z.string().nullable().exactOptional(),
                        avatar_template: z.string(),
                      })
                      .exactOptional()
                      .openapi({ required: ['id', 'username', 'avatar_template'] }),
                    hosts: z
                      .array(
                        z
                          .strictObject({
                            id: z.int(),
                            username: z.string(),
                            name: z.string().nullable().exactOptional(),
                            avatar_template: z.string(),
                            title: z.string().nullable().exactOptional(),
                          })
                          .openapi({ required: ['id', 'username', 'avatar_template'] }),
                      )
                      .exactOptional(),
                    is_closed: z.boolean(),
                    is_expired: z.boolean(),
                    is_ongoing: z.boolean(),
                    is_private: z.boolean(),
                    is_public: z.boolean(),
                    is_standalone: z.boolean(),
                    minimal: z.boolean().nullable().exactOptional(),
                    raw_invitees: z.array(z.string()).nullable().exactOptional(),
                    reminders: z
                      .array(
                        z
                          .object({
                            value: z.int(),
                            unit: z.string(),
                            period: z.enum(['before', 'after']),
                            type: z.string(),
                          })
                          .openapi({ required: ['value', 'unit', 'period', 'type'] }),
                      )
                      .exactOptional(),
                    sample_invitees: z.array(z.object({})).exactOptional(),
                    should_display_invitees: z.boolean(),
                    stats: z.object({}).exactOptional(),
                    status: z.enum(['public', 'private', 'standalone']),
                    url: z.string().exactOptional(),
                    description: z.string().nullable().exactOptional(),
                    description_html: z.string().nullable().exactOptional(),
                    location: z.string().nullable().exactOptional(),
                    url_restates_location: z.boolean().exactOptional(),
                    watching_invitee: z.object({}).nullable().exactOptional(),
                    chat_enabled: z.boolean().nullable().exactOptional(),
                    channel: z.object({}).exactOptional(),
                    livestream: z.boolean().exactOptional(),
                    livestream_onebox: z.string().nullable().exactOptional(),
                    is_zoom_livestream: z.boolean().exactOptional(),
                    recording_url: z.string().exactOptional(),
                    recording_onebox: z.string().nullable().exactOptional(),
                    max_attendees: z.int().nullable().exactOptional(),
                    at_capacity: z.boolean(),
                    image_upload: z.object({}).nullable().exactOptional(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'category_id',
                      'starts_at',
                      'ends_at',
                      'show_local_time',
                      'timezone',
                      'can_act_on_discourse_post_event',
                      'can_update_attendance',
                      'is_closed',
                      'is_expired',
                      'is_ongoing',
                      'is_private',
                      'is_public',
                      'is_standalone',
                      'should_display_invitees',
                      'status',
                      'at_capacity',
                      'post',
                      'occurrences',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['events'] }),
        },
      },
    },
  },
})

export const getDiscoursePostEventEventsIcsRoute = createRoute({
  method: 'get',
  path: '/discourse-post-event/events.ics',
  tags: ['Events'],
  summary: 'Export calendar events in iCalendar format',
  operationId: 'exportEventsICS',
  request: {
    query: z.object({
      category_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'category_id',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Filter events by category ID',
          },
        }),
      include_subcategories: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            name: 'include_subcategories',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['true', 'false'] },
            description: 'Include events from subcategories when filtering by category',
          },
        }),
      attending_user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'attending_user',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              "Filter to events where the specified user (username) has RSVP'd\nas going",
          },
        }),
      before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description: 'Return events starting before this date/time (ISO 8601 format)',
          },
        }),
      after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            description: 'Return events starting after this date/time (ISO 8601 format)',
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['asc', 'desc'] },
            description: 'Sort order for events by start date (default: asc)',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1, maximum: 200 },
            description: 'Maximum number of events to return (default: 200)',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'iCalendar file',
      content: {
        'text/calendar': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getAdminBackupsJsonRoute = createRoute({
  method: 'get',
  path: '/admin/backups.json',
  tags: ['Backups'],
  summary: 'List backups',
  operationId: 'getBackups',
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({ filename: z.string(), size: z.int(), last_modified: z.string() })
                .openapi({ required: ['filename', 'size', 'last_modified'] }),
            )
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        },
      },
    },
  },
})

export const postAdminBackupsJsonRoute = createRoute({
  method: 'post',
  path: '/admin/backups.json',
  tags: ['Backups'],
  summary: 'Create backup',
  operationId: 'createBackup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ with_uploads: z.boolean() })
            .openapi({ required: ['with_uploads'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const getAdminBackupsFilenameRoute = createRoute({
  method: 'get',
  path: '/admin/backups/{filename}',
  tags: ['Backups'],
  summary: 'Download backup',
  operationId: 'downloadBackup',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: { name: 'filename', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'success response' } },
})

export const putAdminBackupsFilenameRoute = createRoute({
  method: 'put',
  path: '/admin/backups/{filename}',
  tags: ['Backups'],
  summary: 'Send download backup email',
  operationId: 'sendDownloadBackupEmail',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: { name: 'filename', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'success response' } },
})

export const getAdminBadgesJsonRoute = createRoute({
  method: 'get',
  path: '/admin/badges.json',
  tags: ['Badges'],
  summary: 'List badges',
  operationId: 'adminListBadges',
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              badges: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    name: z.string(),
                    description: z.string(),
                    grant_count: z.int(),
                    allow_title: z.boolean(),
                    multiple_grant: z.boolean(),
                    icon: z.string(),
                    image_url: z.string().nullable(),
                    listable: z.boolean(),
                    enabled: z.boolean(),
                    badge_grouping_id: z.int(),
                    system: z.boolean(),
                    long_description: z.string(),
                    slug: z.string(),
                    manually_grantable: z.boolean(),
                    query: z.string().nullable(),
                    trigger: z.int().nullable(),
                    target_posts: z.boolean(),
                    auto_revoke: z.boolean(),
                    show_posts: z.boolean(),
                    i18n_name: z.string().nullable().exactOptional(),
                    image_upload_id: z.int().nullable(),
                    badge_type_id: z.int(),
                    show_in_post_header: z.boolean(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name',
                      'description',
                      'grant_count',
                      'allow_title',
                      'multiple_grant',
                      'icon',
                      'image_url',
                      'listable',
                      'enabled',
                      'badge_grouping_id',
                      'system',
                      'long_description',
                      'slug',
                      'manually_grantable',
                      'query',
                      'trigger',
                      'target_posts',
                      'auto_revoke',
                      'show_posts',
                      'badge_type_id',
                      'image_upload_id',
                      'show_in_post_header',
                    ],
                  }),
              ),
              badge_types: z.array(
                z
                  .strictObject({ id: z.int(), name: z.string(), sort_order: z.int() })
                  .openapi({ required: ['id', 'name', 'sort_order'] }),
              ),
              badge_groupings: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    name: z.string(),
                    description: z.string().nullable(),
                    position: z.int(),
                    system: z.boolean(),
                  })
                  .openapi({ required: ['id', 'name', 'description', 'position', 'system'] }),
              ),
              admin_badges: z
                .strictObject({
                  protected_system_fields: z.array(z.any()),
                  triggers: z
                    .strictObject({
                      user_change: z.int(),
                      none: z.int(),
                      post_revision: z.int(),
                      trust_level_change: z.int(),
                      post_action: z.int(),
                    })
                    .openapi({
                      required: [
                        'user_change',
                        'none',
                        'post_revision',
                        'trust_level_change',
                        'post_action',
                      ],
                    }),
                  badge_ids: z.array(z.any()),
                  badge_grouping_ids: z.array(z.any()),
                  badge_type_ids: z.array(z.any()),
                })
                .openapi({
                  required: [
                    'protected_system_fields',
                    'triggers',
                    'badge_ids',
                    'badge_grouping_ids',
                    'badge_type_ids',
                  ],
                }),
            })
            .openapi({ required: ['badges', 'badge_types', 'badge_groupings', 'admin_badges'] }),
        },
      },
    },
  },
})

export const postAdminBadgesJsonRoute = createRoute({
  method: 'post',
  path: '/admin/badges.json',
  tags: ['Badges'],
  summary: 'Create badge',
  operationId: 'createBadge',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string().openapi({ description: 'The name for the new badge.' }),
              badge_type_id: z
                .int()
                .openapi({
                  description:
                    'The ID for the badge type. 1 for Gold, 2 for Silver,\n3 for Bronze.',
                }),
            })
            .openapi({ required: ['name', 'badge_type_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              badge_types: z.array(
                z
                  .strictObject({ id: z.int(), name: z.string(), sort_order: z.int() })
                  .openapi({ required: ['id', 'name', 'sort_order'] }),
              ),
              badge: z
                .strictObject({
                  id: z.int(),
                  name: z.string(),
                  description: z.string(),
                  grant_count: z.int(),
                  allow_title: z.boolean(),
                  multiple_grant: z.boolean(),
                  icon: z.string(),
                  image_url: z.string().nullable(),
                  image_upload_id: z.int().nullable(),
                  listable: z.boolean(),
                  enabled: z.boolean(),
                  badge_grouping_id: z.int(),
                  system: z.boolean(),
                  long_description: z.string(),
                  slug: z.string(),
                  manually_grantable: z.boolean(),
                  query: z.string().nullable(),
                  trigger: z.string().nullable(),
                  target_posts: z.boolean(),
                  auto_revoke: z.boolean(),
                  show_posts: z.boolean(),
                  badge_type_id: z.int(),
                  show_in_post_header: z.boolean(),
                })
                .openapi({
                  required: [
                    'id',
                    'name',
                    'description',
                    'grant_count',
                    'allow_title',
                    'multiple_grant',
                    'icon',
                    'image_url',
                    'listable',
                    'enabled',
                    'badge_grouping_id',
                    'system',
                    'long_description',
                    'slug',
                    'manually_grantable',
                    'query',
                    'trigger',
                    'target_posts',
                    'auto_revoke',
                    'show_posts',
                    'badge_type_id',
                    'image_upload_id',
                    'show_in_post_header',
                  ],
                }),
            })
            .openapi({ required: ['badge_types', 'badge'] }),
        },
      },
    },
  },
})

export const putAdminBadgesIdJsonRoute = createRoute({
  method: 'put',
  path: '/admin/badges/{id}.json',
  tags: ['Badges'],
  summary: 'Update badge',
  operationId: 'updateBadge',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', schema: { type: 'integer' }, required: true },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string().openapi({ description: 'The name for the new badge.' }),
              badge_type_id: z
                .int()
                .openapi({
                  description:
                    'The ID for the badge type. 1 for Gold, 2 for Silver,\n3 for Bronze.',
                }),
            })
            .openapi({ required: ['name', 'badge_type_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              badge_types: z.array(
                z
                  .strictObject({ id: z.int(), name: z.string(), sort_order: z.int() })
                  .openapi({ required: ['id', 'name', 'sort_order'] }),
              ),
              badge: z
                .strictObject({
                  id: z.int(),
                  name: z.string(),
                  description: z.string(),
                  grant_count: z.int(),
                  allow_title: z.boolean(),
                  multiple_grant: z.boolean(),
                  icon: z.string(),
                  image_url: z.string().nullable(),
                  image_upload_id: z.int().nullable(),
                  listable: z.boolean(),
                  enabled: z.boolean(),
                  badge_grouping_id: z.int(),
                  system: z.boolean(),
                  long_description: z.string(),
                  slug: z.string(),
                  manually_grantable: z.boolean(),
                  query: z.string().nullable(),
                  trigger: z.string().nullable(),
                  target_posts: z.boolean(),
                  auto_revoke: z.boolean(),
                  show_posts: z.boolean(),
                  badge_type_id: z.int(),
                  show_in_post_header: z.boolean(),
                })
                .openapi({
                  required: [
                    'id',
                    'name',
                    'description',
                    'grant_count',
                    'allow_title',
                    'multiple_grant',
                    'icon',
                    'image_url',
                    'listable',
                    'enabled',
                    'badge_grouping_id',
                    'system',
                    'long_description',
                    'slug',
                    'manually_grantable',
                    'query',
                    'trigger',
                    'target_posts',
                    'auto_revoke',
                    'show_posts',
                    'badge_type_id',
                    'image_upload_id',
                    'show_in_post_header',
                  ],
                }),
            })
            .openapi({ required: ['badge_types', 'badge'] }),
        },
      },
    },
  },
})

export const deleteAdminBadgesIdJsonRoute = createRoute({
  method: 'delete',
  path: '/admin/badges/{id}.json',
  tags: ['Badges'],
  summary: 'Delete badge',
  operationId: 'deleteBadge',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', schema: { type: 'integer' }, required: true },
        }),
    }),
  },
  responses: { 200: { description: 'success response' } },
})

export const getCategoriesJsonRoute = createRoute({
  method: 'get',
  path: '/categories.json',
  tags: ['Categories'],
  summary: 'Retrieves a list of categories',
  operationId: 'listCategories',
  request: {
    query: z.object({
      include_subcategories: z
        .stringbool()
        .pipe(z.literal(true))
        .exactOptional()
        .openapi({
          param: {
            name: 'include_subcategories',
            in: 'query',
            schema: { type: 'boolean', enum: [true] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              category_list: z
                .strictObject({
                  can_create_category: z.boolean(),
                  can_create_topic: z.boolean(),
                  categories: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        name: z.string(),
                        color: z.string(),
                        text_color: z.string(),
                        style_type: z.string(),
                        emoji: z.string().nullable(),
                        icon: z.string().nullable(),
                        slug: z.string(),
                        topic_count: z.int(),
                        post_count: z.int(),
                        position: z.int(),
                        description: z.string().nullable(),
                        description_text: z.string().nullable(),
                        description_excerpt: z.string().nullable(),
                        topic_url: z.string().nullable(),
                        read_restricted: z.boolean(),
                        permission: z.int(),
                        notification_level: z.int(),
                        can_edit: z.boolean(),
                        topic_template: z.string().nullable(),
                        topic_title_placeholder: z.string().nullable(),
                        has_children: z.boolean(),
                        subcategory_count: z.int().nullable(),
                        sort_order: z.string().nullable(),
                        sort_ascending: z.string().nullable(),
                        show_subcategory_list: z.boolean(),
                        num_featured_topics: z.int(),
                        default_view: z.string().nullable(),
                        subcategory_list_style: z.string(),
                        default_top_period: z.string(),
                        default_list_filter: z.string(),
                        minimum_required_tags: z.int(),
                        navigate_to_first_post_after_read: z.boolean(),
                        topics_day: z.int(),
                        topics_week: z.int(),
                        topics_month: z.int(),
                        topics_year: z.int(),
                        topics_all_time: z.int(),
                        is_uncategorized: z.boolean().exactOptional(),
                        subcategory_ids: z.array(z.any()),
                        subcategory_list: z.array(z.any()).nullable().exactOptional(),
                        uploaded_logo: z.string().nullable(),
                        uploaded_logo_dark: z.string().nullable(),
                        uploaded_background: z.string().nullable(),
                        uploaded_background_dark: z.string().nullable(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'name',
                          'color',
                          'text_color',
                          'style_type',
                          'emoji',
                          'icon',
                          'slug',
                          'topic_count',
                          'post_count',
                          'position',
                          'description',
                          'description_text',
                          'description_excerpt',
                          'topic_url',
                          'read_restricted',
                          'permission',
                          'notification_level',
                          'can_edit',
                          'topic_template',
                          'topic_title_placeholder',
                          'has_children',
                          'subcategory_count',
                          'sort_order',
                          'sort_ascending',
                          'show_subcategory_list',
                          'num_featured_topics',
                          'default_view',
                          'subcategory_list_style',
                          'default_top_period',
                          'default_list_filter',
                          'minimum_required_tags',
                          'navigate_to_first_post_after_read',
                          'topics_day',
                          'topics_week',
                          'topics_month',
                          'topics_year',
                          'topics_all_time',
                          'subcategory_ids',
                          'uploaded_logo',
                          'uploaded_logo_dark',
                          'uploaded_background',
                          'uploaded_background_dark',
                        ],
                      }),
                  ),
                })
                .openapi({ required: ['can_create_category', 'can_create_topic', 'categories'] }),
            })
            .openapi({ required: ['category_list'] }),
        },
      },
    },
  },
})

export const postCategoriesJsonRoute = createRoute({
  method: 'post',
  path: '/categories.json',
  tags: ['Categories'],
  summary: 'Creates a category',
  operationId: 'createCategory',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string(),
              color: z.string().exactOptional().openapi({ example: '49d9e9' }),
              text_color: z.string().exactOptional().openapi({ example: 'f0fcfd' }),
              style_type: z.string().exactOptional(),
              emoji: z.string().exactOptional(),
              icon: z.string().exactOptional(),
              parent_category_id: z.int().exactOptional(),
              allow_badges: z.boolean().exactOptional(),
              slug: z.string().exactOptional(),
              topic_featured_links_allowed: z.boolean().exactOptional(),
              permissions: z
                .looseObject({
                  everyone: z.int().exactOptional().openapi({ example: 1 }),
                  staff: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              search_priority: z.int().exactOptional(),
              form_template_ids: z.array(z.any()).exactOptional(),
              category_localizations: z
                .array(
                  z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The unique identifier for an existing localization.\nMust be included otherwise the record will be deleted.',
                        }),
                      locale: z
                        .string()
                        .openapi({
                          description:
                            "The locale for the localization, e.g., 'en',\n'zh_CN'. Locale should be in the list of SiteSetting.content_localization_supported_locales.",
                        }),
                      name: z
                        .string()
                        .openapi({
                          description: 'The name of the category in the specified locale.',
                        }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The description excerpt of the category in the\nspecified locale.',
                        }),
                    })
                    .openapi({ required: ['locale', 'name'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              category: z
                .strictObject({
                  id: z.int(),
                  name: z.string(),
                  color: z.string(),
                  text_color: z.string(),
                  style_type: z.string(),
                  emoji: z.string().nullable(),
                  icon: z.string().nullable(),
                  slug: z.string(),
                  locale: z.string().nullable().exactOptional(),
                  topic_count: z.int(),
                  post_count: z.int(),
                  position: z.int(),
                  description: z.string().nullable(),
                  description_text: z.string().nullable(),
                  description_excerpt: z.string().nullable(),
                  topic_url: z.string().nullable(),
                  read_restricted: z.boolean(),
                  permission: z.int().nullable(),
                  notification_level: z.int(),
                  can_edit: z.boolean(),
                  topic_template: z.string().nullable(),
                  topic_title_placeholder: z.string().nullable(),
                  form_template_ids: z.array(z.any()).exactOptional(),
                  has_children: z.boolean().nullable(),
                  subcategory_count: z.int().nullable(),
                  sort_order: z.string().nullable(),
                  sort_ascending: z.string().nullable(),
                  show_subcategory_list: z.boolean(),
                  num_featured_topics: z.int(),
                  default_view: z.string().nullable(),
                  subcategory_list_style: z.string(),
                  default_top_period: z.string(),
                  default_list_filter: z.string(),
                  minimum_required_tags: z.int(),
                  navigate_to_first_post_after_read: z.boolean(),
                  custom_fields: z.strictObject({}),
                  allowed_tags: z.array(z.any()).exactOptional(),
                  allowed_tag_groups: z.array(z.any()).exactOptional(),
                  allow_global_tags: z.boolean().exactOptional(),
                  required_tag_groups: z.array(
                    z
                      .strictObject({ name: z.string(), min_count: z.int() })
                      .openapi({ required: ['name', 'min_count'] }),
                  ),
                  category_setting: z
                    .strictObject({
                      auto_bump_cooldown_days: z.int().exactOptional(),
                      num_auto_bump_daily: z.int().nullable().exactOptional(),
                      require_reply_approval: z.boolean().nullable().exactOptional(),
                      require_topic_approval: z.boolean().nullable().exactOptional(),
                      nested_replies_default: z.boolean().nullable().exactOptional(),
                      topic_posting_review_mode: z.string().exactOptional(),
                      reply_posting_review_mode: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  category_localizations: z.array(z.any()).exactOptional(),
                  read_only_banner: z.string().nullable(),
                  available_groups: z.array(z.any()),
                  auto_close_hours: z.string().nullable(),
                  auto_close_based_on_last_post: z.boolean(),
                  allow_unlimited_owner_edits_on_first_post: z.boolean(),
                  default_slow_mode_seconds: z.string().nullable(),
                  group_permissions: z.array(
                    z
                      .strictObject({
                        permission_type: z.int(),
                        group_name: z.string(),
                        group_id: z.int(),
                      })
                      .openapi({ required: ['permission_type', 'group_name', 'group_id'] }),
                  ),
                  email_in: z.string().nullable(),
                  email_in_allow_strangers: z.boolean(),
                  mailinglist_mirror: z.boolean(),
                  all_topics_wiki: z.boolean(),
                  can_delete: z.boolean(),
                  allow_badges: z.boolean(),
                  topic_featured_link_allowed: z.boolean(),
                  search_priority: z.int(),
                  topic_posting_review_group_ids: z.array(z.int()),
                  reply_posting_review_group_ids: z.array(z.int()),
                  uploaded_logo: z.string().nullable(),
                  uploaded_logo_dark: z.string().nullable(),
                  uploaded_background: z.string().nullable(),
                  uploaded_background_dark: z.string().nullable(),
                  category_types: z.object({}).exactOptional(),
                  category_type_settings: z.object({}).exactOptional(),
                  available_category_types: z
                    .array(
                      z
                        .strictObject({
                          id: z.string(),
                          name: z.string(),
                          title: z.string(),
                          description: z.string(),
                          icon: z.string(),
                          available: z.boolean(),
                          visible: z.boolean(),
                          configuration_schema: z.object({}),
                        })
                        .openapi({
                          required: [
                            'id',
                            'name',
                            'title',
                            'description',
                            'icon',
                            'available',
                            'visible',
                            'configuration_schema',
                          ],
                        }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  required: [
                    'id',
                    'name',
                    'color',
                    'text_color',
                    'style_type',
                    'emoji',
                    'icon',
                    'slug',
                    'topic_count',
                    'post_count',
                    'position',
                    'description',
                    'description_text',
                    'description_excerpt',
                    'topic_url',
                    'read_restricted',
                    'permission',
                    'notification_level',
                    'can_edit',
                    'topic_template',
                    'topic_title_placeholder',
                    'has_children',
                    'subcategory_count',
                    'sort_order',
                    'sort_ascending',
                    'show_subcategory_list',
                    'num_featured_topics',
                    'default_view',
                    'subcategory_list_style',
                    'default_top_period',
                    'default_list_filter',
                    'minimum_required_tags',
                    'navigate_to_first_post_after_read',
                    'custom_fields',
                    'required_tag_groups',
                    'read_only_banner',
                    'available_groups',
                    'auto_close_hours',
                    'auto_close_based_on_last_post',
                    'allow_unlimited_owner_edits_on_first_post',
                    'default_slow_mode_seconds',
                    'group_permissions',
                    'email_in',
                    'email_in_allow_strangers',
                    'mailinglist_mirror',
                    'all_topics_wiki',
                    'can_delete',
                    'allow_badges',
                    'topic_featured_link_allowed',
                    'search_priority',
                    'topic_posting_review_group_ids',
                    'reply_posting_review_group_ids',
                    'uploaded_logo',
                    'uploaded_logo_dark',
                    'uploaded_background',
                    'uploaded_background_dark',
                  ],
                }),
            })
            .openapi({ required: ['category'] }),
        },
      },
    },
  },
})

export const putCategoriesIdJsonRoute = createRoute({
  method: 'put',
  path: '/categories/{id}.json',
  tags: ['Categories'],
  summary: 'Updates a category',
  operationId: 'updateCategory',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', schema: { type: 'integer' }, required: true },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string(),
              color: z.string().exactOptional().openapi({ example: '49d9e9' }),
              text_color: z.string().exactOptional().openapi({ example: 'f0fcfd' }),
              style_type: z.string().exactOptional(),
              emoji: z.string().exactOptional(),
              icon: z.string().exactOptional(),
              parent_category_id: z.int().exactOptional(),
              allow_badges: z.boolean().exactOptional(),
              slug: z.string().exactOptional(),
              topic_featured_links_allowed: z.boolean().exactOptional(),
              permissions: z
                .looseObject({
                  everyone: z.int().exactOptional().openapi({ example: 1 }),
                  staff: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              search_priority: z.int().exactOptional(),
              form_template_ids: z.array(z.any()).exactOptional(),
              category_localizations: z
                .array(
                  z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The unique identifier for an existing localization.\nMust be included otherwise the record will be deleted.',
                        }),
                      locale: z
                        .string()
                        .openapi({
                          description:
                            "The locale for the localization, e.g., 'en',\n'zh_CN'. Locale should be in the list of SiteSetting.content_localization_supported_locales.",
                        }),
                      name: z
                        .string()
                        .openapi({
                          description: 'The name of the category in the specified locale.',
                        }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The description excerpt of the category in the\nspecified locale.',
                        }),
                    })
                    .openapi({ required: ['locale', 'name'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              success: z.string(),
              category: z
                .strictObject({
                  id: z.int(),
                  name: z.string(),
                  color: z.string(),
                  text_color: z.string(),
                  style_type: z.string().exactOptional(),
                  emoji: z.string().nullable().exactOptional(),
                  icon: z.string().nullable().exactOptional(),
                  slug: z.string(),
                  locale: z.string().nullable().exactOptional(),
                  topic_count: z.int(),
                  post_count: z.int(),
                  position: z.int(),
                  description: z.string().nullable(),
                  description_text: z.string().nullable(),
                  description_excerpt: z.string().nullable(),
                  topic_url: z.string().nullable(),
                  read_restricted: z.boolean(),
                  permission: z.int().nullable(),
                  notification_level: z.int(),
                  can_edit: z.boolean(),
                  topic_template: z.string().nullable(),
                  topic_title_placeholder: z.string().nullable(),
                  form_template_ids: z.array(z.any()),
                  has_children: z.boolean().nullable(),
                  subcategory_count: z.int().nullable(),
                  sort_order: z.string().nullable(),
                  sort_ascending: z.string().nullable(),
                  show_subcategory_list: z.boolean(),
                  num_featured_topics: z.int(),
                  default_view: z.string().nullable(),
                  subcategory_list_style: z.string(),
                  default_top_period: z.string(),
                  default_list_filter: z.string(),
                  minimum_required_tags: z.int(),
                  navigate_to_first_post_after_read: z.boolean(),
                  custom_fields: z.strictObject({}),
                  allowed_tags: z.array(z.any()).exactOptional(),
                  allowed_tag_groups: z.array(z.any()).exactOptional(),
                  allow_global_tags: z.boolean().exactOptional(),
                  required_tag_groups: z.array(
                    z
                      .strictObject({ name: z.string(), min_count: z.int() })
                      .openapi({ required: ['name', 'min_count'] }),
                  ),
                  category_setting: z
                    .strictObject({
                      auto_bump_cooldown_days: z.int().exactOptional(),
                      num_auto_bump_daily: z.int().nullable().exactOptional(),
                      require_reply_approval: z.boolean().nullable().exactOptional(),
                      require_topic_approval: z.boolean().nullable().exactOptional(),
                      nested_replies_default: z.boolean().nullable().exactOptional(),
                      topic_posting_review_mode: z.string().exactOptional(),
                      reply_posting_review_mode: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  category_localizations: z.array(z.any()).exactOptional(),
                  read_only_banner: z.string().nullable(),
                  available_groups: z.array(z.any()),
                  auto_close_hours: z.string().nullable(),
                  auto_close_based_on_last_post: z.boolean(),
                  allow_unlimited_owner_edits_on_first_post: z.boolean(),
                  default_slow_mode_seconds: z.string().nullable(),
                  group_permissions: z.array(
                    z
                      .strictObject({
                        permission_type: z.int(),
                        group_name: z.string(),
                        group_id: z.int(),
                      })
                      .openapi({ required: ['permission_type', 'group_name', 'group_id'] }),
                  ),
                  email_in: z.string().nullable(),
                  email_in_allow_strangers: z.boolean(),
                  mailinglist_mirror: z.boolean(),
                  all_topics_wiki: z.boolean(),
                  can_delete: z.boolean(),
                  allow_badges: z.boolean(),
                  topic_featured_link_allowed: z.boolean(),
                  search_priority: z.int(),
                  topic_posting_review_group_ids: z.array(z.int()),
                  reply_posting_review_group_ids: z.array(z.int()),
                  uploaded_logo: z.string().nullable(),
                  uploaded_logo_dark: z.string().nullable(),
                  uploaded_background: z.string().nullable(),
                  uploaded_background_dark: z.string().nullable(),
                  category_types: z.object({}).exactOptional(),
                  category_type_settings: z.object({}).exactOptional(),
                  available_category_types: z
                    .array(
                      z
                        .strictObject({
                          id: z.string(),
                          name: z.string(),
                          title: z.string(),
                          description: z.string(),
                          icon: z.string(),
                          available: z.boolean(),
                          visible: z.boolean(),
                          configuration_schema: z.object({}),
                        })
                        .openapi({
                          required: [
                            'id',
                            'name',
                            'title',
                            'description',
                            'icon',
                            'available',
                            'visible',
                            'configuration_schema',
                          ],
                        }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  required: [
                    'id',
                    'name',
                    'color',
                    'text_color',
                    'slug',
                    'topic_count',
                    'post_count',
                    'position',
                    'description',
                    'description_text',
                    'description_excerpt',
                    'topic_url',
                    'read_restricted',
                    'permission',
                    'notification_level',
                    'can_edit',
                    'topic_template',
                    'topic_title_placeholder',
                    'form_template_ids',
                    'has_children',
                    'subcategory_count',
                    'sort_order',
                    'sort_ascending',
                    'show_subcategory_list',
                    'num_featured_topics',
                    'default_view',
                    'subcategory_list_style',
                    'default_top_period',
                    'default_list_filter',
                    'minimum_required_tags',
                    'navigate_to_first_post_after_read',
                    'custom_fields',
                    'required_tag_groups',
                    'read_only_banner',
                    'available_groups',
                    'auto_close_hours',
                    'auto_close_based_on_last_post',
                    'allow_unlimited_owner_edits_on_first_post',
                    'default_slow_mode_seconds',
                    'group_permissions',
                    'email_in',
                    'email_in_allow_strangers',
                    'mailinglist_mirror',
                    'all_topics_wiki',
                    'can_delete',
                    'allow_badges',
                    'topic_featured_link_allowed',
                    'search_priority',
                    'topic_posting_review_group_ids',
                    'reply_posting_review_group_ids',
                    'uploaded_logo',
                    'uploaded_logo_dark',
                    'uploaded_background',
                    'uploaded_background_dark',
                  ],
                }),
            })
            .openapi({ required: ['success', 'category'] }),
        },
      },
    },
  },
})

export const getCSlugIdJsonRoute = createRoute({
  method: 'get',
  path: '/c/{slug}/{id}.json',
  tags: ['Categories'],
  summary: 'List topics',
  operationId: 'listCategoryTopics',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { name: 'slug', in: 'path', schema: { type: 'string' }, required: true },
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', schema: { type: 'integer' }, required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              users: z
                .array(
                  z
                    .strictObject({
                      id: z.int(),
                      username: z.string(),
                      name: z.string(),
                      avatar_template: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                )
                .exactOptional(),
              primary_groups: z.array(z.any()).exactOptional(),
              topic_list: z
                .strictObject({
                  filter: z.string().exactOptional(),
                  can_create_topic: z.boolean(),
                  per_page: z.int(),
                  top_tags: z
                    .array(
                      z
                        .object({ id: z.int(), name: z.string(), slug: z.string() })
                        .openapi({ required: ['id', 'name', 'slug'] }),
                    )
                    .exactOptional(),
                  topics: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        title: z.string(),
                        fancy_title: z.string(),
                        slug: z.string(),
                        posts_count: z.int(),
                        reply_count: z.int(),
                        highest_post_number: z.int(),
                        image_url: z.string().nullable(),
                        created_at: z.string(),
                        last_posted_at: z.string(),
                        bumped: z.boolean(),
                        bumped_at: z.string(),
                        archetype: z.string(),
                        unseen: z.boolean(),
                        pinned: z.boolean(),
                        unpinned: z.string().nullable(),
                        excerpt: z.string(),
                        visible: z.boolean(),
                        closed: z.boolean(),
                        archived: z.boolean(),
                        bookmarked: z.string().nullable(),
                        liked: z.string().nullable(),
                        views: z.int(),
                        like_count: z.int(),
                        has_summary: z.boolean(),
                        last_poster_username: z.string(),
                        category_id: z.int(),
                        pinned_globally: z.boolean(),
                        featured_link: z.string().nullable(),
                        posters: z.array(
                          z
                            .strictObject({
                              extras: z.string(),
                              description: z.string(),
                              user_id: z.int(),
                              primary_group_id: z.int().nullable(),
                            })
                            .openapi({
                              required: ['extras', 'description', 'user_id', 'primary_group_id'],
                            }),
                        ),
                      })
                      .openapi({
                        required: [
                          'id',
                          'title',
                          'fancy_title',
                          'slug',
                          'posts_count',
                          'reply_count',
                          'highest_post_number',
                          'image_url',
                          'created_at',
                          'last_posted_at',
                          'bumped',
                          'bumped_at',
                          'archetype',
                          'unseen',
                          'pinned',
                          'unpinned',
                          'excerpt',
                          'visible',
                          'closed',
                          'archived',
                          'bookmarked',
                          'liked',
                          'views',
                          'like_count',
                          'has_summary',
                          'last_poster_username',
                          'category_id',
                          'pinned_globally',
                          'featured_link',
                          'posters',
                        ],
                      }),
                  ),
                })
                .openapi({ required: ['can_create_topic', 'per_page', 'topics'] }),
            })
            .openapi({ required: ['topic_list'] }),
        },
      },
    },
  },
})

export const getCIdShowJsonRoute = createRoute({
  method: 'get',
  path: '/c/{id}/show.json',
  tags: ['Categories'],
  summary: 'Show category',
  operationId: 'getCategory',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', schema: { type: 'integer' }, required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              category: z
                .strictObject({
                  id: z.int(),
                  name: z.string(),
                  color: z.string(),
                  text_color: z.string(),
                  style_type: z.string(),
                  emoji: z.string().nullable(),
                  icon: z.string().nullable(),
                  slug: z.string(),
                  locale: z.string().nullable().exactOptional(),
                  topic_count: z.int(),
                  post_count: z.int(),
                  position: z.int(),
                  description: z.string().nullable(),
                  description_text: z.string().nullable(),
                  description_excerpt: z.string().nullable(),
                  topic_url: z.string().nullable(),
                  read_restricted: z.boolean(),
                  permission: z.int().nullable(),
                  notification_level: z.int(),
                  can_edit: z.boolean(),
                  topic_template: z.string().nullable(),
                  topic_title_placeholder: z.string().nullable(),
                  form_template_ids: z.array(z.any()).exactOptional(),
                  has_children: z.boolean().nullable(),
                  subcategory_count: z.int().nullable(),
                  sort_order: z.string().nullable(),
                  sort_ascending: z.string().nullable(),
                  show_subcategory_list: z.boolean(),
                  num_featured_topics: z.int(),
                  default_view: z.string().nullable(),
                  subcategory_list_style: z.string(),
                  default_top_period: z.string(),
                  default_list_filter: z.string(),
                  minimum_required_tags: z.int(),
                  navigate_to_first_post_after_read: z.boolean(),
                  custom_fields: z.strictObject({}),
                  allowed_tags: z.array(z.any()).exactOptional(),
                  allowed_tag_groups: z.array(z.any()).exactOptional(),
                  allow_global_tags: z.boolean().exactOptional(),
                  required_tag_groups: z.array(
                    z
                      .strictObject({ name: z.string(), min_count: z.int() })
                      .openapi({ required: ['name', 'min_count'] }),
                  ),
                  category_setting: z
                    .strictObject({
                      auto_bump_cooldown_days: z.int().exactOptional(),
                      num_auto_bump_daily: z.int().nullable().exactOptional(),
                      require_reply_approval: z.boolean().nullable().exactOptional(),
                      require_topic_approval: z.boolean().nullable().exactOptional(),
                      nested_replies_default: z.boolean().nullable().exactOptional(),
                      topic_posting_review_mode: z.string().exactOptional(),
                      reply_posting_review_mode: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  category_localizations: z.array(z.any()).exactOptional(),
                  read_only_banner: z.string().nullable(),
                  available_groups: z.array(z.any()),
                  auto_close_hours: z.string().nullable(),
                  auto_close_based_on_last_post: z.boolean(),
                  allow_unlimited_owner_edits_on_first_post: z.boolean(),
                  default_slow_mode_seconds: z.string().nullable(),
                  group_permissions: z.array(
                    z
                      .strictObject({
                        permission_type: z.int(),
                        group_name: z.string(),
                        group_id: z.int(),
                      })
                      .openapi({ required: ['permission_type', 'group_name', 'group_id'] }),
                  ),
                  email_in: z.string().nullable(),
                  email_in_allow_strangers: z.boolean(),
                  mailinglist_mirror: z.boolean(),
                  all_topics_wiki: z.boolean(),
                  can_delete: z.boolean(),
                  allow_badges: z.boolean(),
                  topic_featured_link_allowed: z.boolean(),
                  search_priority: z.int(),
                  topic_posting_review_group_ids: z.array(z.int()),
                  reply_posting_review_group_ids: z.array(z.int()),
                  uploaded_logo: z.string().nullable(),
                  uploaded_logo_dark: z.string().nullable(),
                  uploaded_background: z.string().nullable(),
                  uploaded_background_dark: z.string().nullable(),
                  category_types: z.object({}).exactOptional(),
                  category_type_settings: z.object({}).exactOptional(),
                  available_category_types: z
                    .array(
                      z
                        .strictObject({
                          id: z.string(),
                          name: z.string(),
                          title: z.string(),
                          description: z.string(),
                          icon: z.string(),
                          available: z.boolean(),
                          visible: z.boolean(),
                          configuration_schema: z.object({}),
                        })
                        .openapi({
                          required: [
                            'id',
                            'name',
                            'title',
                            'description',
                            'icon',
                            'available',
                            'visible',
                            'configuration_schema',
                          ],
                        }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  required: [
                    'id',
                    'name',
                    'color',
                    'text_color',
                    'style_type',
                    'emoji',
                    'icon',
                    'slug',
                    'topic_count',
                    'post_count',
                    'position',
                    'description',
                    'description_text',
                    'description_excerpt',
                    'topic_url',
                    'read_restricted',
                    'permission',
                    'notification_level',
                    'can_edit',
                    'topic_template',
                    'topic_title_placeholder',
                    'has_children',
                    'subcategory_count',
                    'sort_order',
                    'sort_ascending',
                    'show_subcategory_list',
                    'num_featured_topics',
                    'default_view',
                    'subcategory_list_style',
                    'default_top_period',
                    'default_list_filter',
                    'minimum_required_tags',
                    'navigate_to_first_post_after_read',
                    'custom_fields',
                    'required_tag_groups',
                    'read_only_banner',
                    'available_groups',
                    'auto_close_hours',
                    'auto_close_based_on_last_post',
                    'allow_unlimited_owner_edits_on_first_post',
                    'default_slow_mode_seconds',
                    'group_permissions',
                    'email_in',
                    'email_in_allow_strangers',
                    'mailinglist_mirror',
                    'all_topics_wiki',
                    'can_delete',
                    'allow_badges',
                    'topic_featured_link_allowed',
                    'search_priority',
                    'topic_posting_review_group_ids',
                    'reply_posting_review_group_ids',
                    'uploaded_logo',
                    'uploaded_logo_dark',
                    'uploaded_background',
                    'uploaded_background_dark',
                  ],
                }),
            })
            .openapi({ required: ['category'] }),
        },
      },
    },
  },
})

export const postAdminGroupsJsonRoute = createRoute({
  method: 'post',
  path: '/admin/groups.json',
  tags: ['Groups'],
  summary: 'Create a group',
  operationId: 'createGroup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              group: z
                .strictObject({
                  name: z.string(),
                  full_name: z.string().exactOptional(),
                  bio_raw: z.string().exactOptional().openapi({ description: 'About Group' }),
                  usernames: z.string().exactOptional().openapi({ description: 'comma,separated' }),
                  owner_usernames: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'comma,separated' }),
                  automatic_membership_email_domains: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'pipe|separated' }),
                  visibility_level: z.int().exactOptional(),
                  primary_group: z.boolean().exactOptional(),
                  flair_icon: z.string().exactOptional(),
                  flair_upload_id: z.int().exactOptional(),
                  flair_bg_color: z.string().exactOptional(),
                  public_admission: z.boolean().exactOptional(),
                  public_exit: z.boolean().exactOptional(),
                  default_notification_level: z.int().exactOptional(),
                  muted_category_ids: z.array(z.int()).exactOptional(),
                  regular_category_ids: z.array(z.int()).exactOptional(),
                  watching_category_ids: z.array(z.int()).exactOptional(),
                  tracking_category_ids: z.array(z.int()).exactOptional(),
                  watching_first_post_category_ids: z.array(z.int()).exactOptional(),
                })
                .openapi({ required: ['name'] }),
            })
            .openapi({ required: ['group'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'group created',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              basic_group: z
                .strictObject({
                  id: z.int(),
                  automatic: z.boolean(),
                  name: z.string(),
                  user_count: z.int(),
                  mentionable_level: z.int(),
                  messageable_level: z.int(),
                  visibility_level: z.int(),
                  primary_group: z.boolean(),
                  title: z.string().nullable(),
                  grant_trust_level: z.string().nullable(),
                  incoming_email: z.string().nullable(),
                  has_messages: z.boolean(),
                  flair_url: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  bio_raw: z.string().nullable(),
                  bio_cooked: z.string().nullable(),
                  bio_excerpt: z.string().nullable(),
                  public_admission: z.boolean(),
                  public_exit: z.boolean(),
                  allow_membership_requests: z.boolean(),
                  full_name: z.string().nullable(),
                  default_notification_level: z.int(),
                  membership_request_template: z.string().nullable(),
                  members_visibility_level: z.int(),
                  can_see_members: z.boolean(),
                  can_admin_group: z.boolean(),
                  can_edit_group: z.boolean().exactOptional(),
                  publish_read_state: z.boolean(),
                })
                .openapi({
                  required: [
                    'id',
                    'automatic',
                    'name',
                    'user_count',
                    'mentionable_level',
                    'messageable_level',
                    'visibility_level',
                    'primary_group',
                    'title',
                    'grant_trust_level',
                    'incoming_email',
                    'has_messages',
                    'flair_url',
                    'flair_bg_color',
                    'flair_color',
                    'bio_raw',
                    'bio_cooked',
                    'bio_excerpt',
                    'public_admission',
                    'public_exit',
                    'allow_membership_requests',
                    'full_name',
                    'default_notification_level',
                    'membership_request_template',
                    'members_visibility_level',
                    'can_see_members',
                    'can_admin_group',
                    'publish_read_state',
                  ],
                }),
            })
            .openapi({ required: ['basic_group'] }),
        },
      },
    },
  },
})

export const deleteAdminGroupsIdJsonRoute = createRoute({
  method: 'delete',
  path: '/admin/groups/{id}.json',
  tags: ['Groups'],
  summary: 'Delete a group',
  operationId: 'deleteGroup',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const getGroupsNameJsonRoute = createRoute({
  method: 'get',
  path: '/groups/{name}.json',
  tags: ['Groups'],
  summary: 'Get a group',
  operationId: 'getGroup',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            example: 'name',
            description: 'Use group name instead of id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              group: z
                .strictObject({
                  id: z.int(),
                  automatic: z.boolean(),
                  name: z.string(),
                  user_count: z.int().exactOptional(),
                  mentionable_level: z.int(),
                  messageable_level: z.int(),
                  visibility_level: z.int(),
                  primary_group: z.boolean(),
                  title: z.string().nullable(),
                  grant_trust_level: z.string().nullable(),
                  incoming_email: z.string().nullable(),
                  has_messages: z.boolean(),
                  flair_url: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  bio_raw: z.string().nullable(),
                  bio_cooked: z.string().nullable(),
                  bio_excerpt: z.string().nullable(),
                  public_admission: z.boolean(),
                  public_exit: z.boolean(),
                  allow_membership_requests: z.boolean(),
                  full_name: z.string().nullable(),
                  default_notification_level: z.int(),
                  membership_request_template: z.string().nullable(),
                  is_group_user: z.boolean(),
                  members_visibility_level: z.int(),
                  can_see_members: z.boolean(),
                  can_admin_group: z.boolean(),
                  can_edit_group: z.boolean().exactOptional(),
                  publish_read_state: z.boolean(),
                  is_group_owner_display: z.boolean(),
                  mentionable: z.boolean(),
                  messageable: z.boolean(),
                  automatic_membership_email_domains: z.string().nullable(),
                  smtp_updated_at: z.string().nullable().exactOptional(),
                  smtp_updated_by: z.object({}).nullable().exactOptional(),
                  smtp_enabled: z.boolean().exactOptional(),
                  smtp_server: z.string().nullable(),
                  smtp_port: z.string().nullable(),
                  smtp_ssl_mode: z.int().nullable(),
                  email_username: z.string().nullable(),
                  email_from_alias: z.string().nullable().exactOptional(),
                  email_password: z.string().nullable(),
                  message_count: z.int(),
                  allow_unknown_sender_topic_replies: z.boolean(),
                  associated_group_ids: z.array(z.any()).exactOptional(),
                  watching_category_ids: z.array(z.any()),
                  tracking_category_ids: z.array(z.any()),
                  watching_first_post_category_ids: z.array(z.any()),
                  regular_category_ids: z.array(z.any()),
                  muted_category_ids: z.array(z.any()),
                  watching_tags: z.array(z.any()).exactOptional(),
                  watching_first_post_tags: z.array(z.any()).exactOptional(),
                  tracking_tags: z.array(z.any()).exactOptional(),
                  regular_tags: z.array(z.any()).exactOptional(),
                  muted_tags: z.array(z.any()).exactOptional(),
                })
                .openapi({
                  required: [
                    'id',
                    'automatic',
                    'name',
                    'mentionable_level',
                    'messageable_level',
                    'visibility_level',
                    'primary_group',
                    'title',
                    'grant_trust_level',
                    'incoming_email',
                    'has_messages',
                    'flair_url',
                    'flair_bg_color',
                    'flair_color',
                    'bio_raw',
                    'bio_cooked',
                    'bio_excerpt',
                    'public_admission',
                    'public_exit',
                    'allow_membership_requests',
                    'full_name',
                    'default_notification_level',
                    'membership_request_template',
                    'is_group_user',
                    'members_visibility_level',
                    'can_see_members',
                    'can_admin_group',
                    'publish_read_state',
                    'is_group_owner_display',
                    'mentionable',
                    'messageable',
                    'automatic_membership_email_domains',
                    'smtp_server',
                    'smtp_port',
                    'smtp_ssl_mode',
                    'email_username',
                    'email_password',
                    'message_count',
                    'allow_unknown_sender_topic_replies',
                    'watching_category_ids',
                    'tracking_category_ids',
                    'watching_first_post_category_ids',
                    'regular_category_ids',
                    'muted_category_ids',
                  ],
                }),
              extras: z
                .strictObject({ visible_group_names: z.array(z.any()) })
                .openapi({ required: ['visible_group_names'] }),
            })
            .openapi({ required: ['group', 'extras'] }),
        },
      },
    },
  },
})

export const putGroupsIdJsonRoute = createRoute({
  method: 'put',
  path: '/groups/{id}.json',
  tags: ['Groups'],
  summary: 'Update a group',
  operationId: 'updateGroup',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              group: z
                .strictObject({
                  name: z.string(),
                  full_name: z.string().exactOptional(),
                  bio_raw: z.string().exactOptional().openapi({ description: 'About Group' }),
                  usernames: z.string().exactOptional().openapi({ description: 'comma,separated' }),
                  owner_usernames: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'comma,separated' }),
                  automatic_membership_email_domains: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'pipe|separated' }),
                  visibility_level: z.int().exactOptional(),
                  primary_group: z.boolean().exactOptional(),
                  flair_icon: z.string().exactOptional(),
                  flair_upload_id: z.int().exactOptional(),
                  flair_bg_color: z.string().exactOptional(),
                  public_admission: z.boolean().exactOptional(),
                  public_exit: z.boolean().exactOptional(),
                  default_notification_level: z.int().exactOptional(),
                  muted_category_ids: z.array(z.int()).exactOptional(),
                  regular_category_ids: z.array(z.int()).exactOptional(),
                  watching_category_ids: z.array(z.int()).exactOptional(),
                  tracking_category_ids: z.array(z.int()).exactOptional(),
                  watching_first_post_category_ids: z.array(z.int()).exactOptional(),
                })
                .openapi({ required: ['name'] }),
            })
            .openapi({ required: ['group'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const getGroupsByIdIdJsonRoute = createRoute({
  method: 'get',
  path: '/groups/by-id/{id}.json',
  tags: ['Groups'],
  summary: 'Get a group by id',
  operationId: 'getGroupById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            example: 'name',
            description: 'Use group name instead of id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response (by id)',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              group: z
                .strictObject({
                  id: z.int(),
                  automatic: z.boolean(),
                  name: z.string(),
                  user_count: z.int().exactOptional(),
                  mentionable_level: z.int(),
                  messageable_level: z.int(),
                  visibility_level: z.int(),
                  primary_group: z.boolean(),
                  title: z.string().nullable(),
                  grant_trust_level: z.string().nullable(),
                  incoming_email: z.string().nullable(),
                  has_messages: z.boolean(),
                  flair_url: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  bio_raw: z.string().nullable(),
                  bio_cooked: z.string().nullable(),
                  bio_excerpt: z.string().nullable(),
                  public_admission: z.boolean(),
                  public_exit: z.boolean(),
                  allow_membership_requests: z.boolean(),
                  full_name: z.string().nullable(),
                  default_notification_level: z.int(),
                  membership_request_template: z.string().nullable(),
                  is_group_user: z.boolean(),
                  members_visibility_level: z.int(),
                  can_see_members: z.boolean(),
                  can_admin_group: z.boolean(),
                  can_edit_group: z.boolean().exactOptional(),
                  publish_read_state: z.boolean(),
                  is_group_owner_display: z.boolean(),
                  mentionable: z.boolean(),
                  messageable: z.boolean(),
                  automatic_membership_email_domains: z.string().nullable(),
                  smtp_updated_at: z.string().nullable().exactOptional(),
                  smtp_updated_by: z.object({}).nullable().exactOptional(),
                  smtp_enabled: z.boolean().exactOptional(),
                  smtp_server: z.string().nullable(),
                  smtp_port: z.string().nullable(),
                  smtp_ssl_mode: z.int().nullable(),
                  email_username: z.string().nullable(),
                  email_from_alias: z.string().nullable().exactOptional(),
                  email_password: z.string().nullable(),
                  message_count: z.int(),
                  allow_unknown_sender_topic_replies: z.boolean(),
                  associated_group_ids: z.array(z.any()).exactOptional(),
                  watching_category_ids: z.array(z.any()),
                  tracking_category_ids: z.array(z.any()),
                  watching_first_post_category_ids: z.array(z.any()),
                  regular_category_ids: z.array(z.any()),
                  muted_category_ids: z.array(z.any()),
                  watching_tags: z.array(z.any()).exactOptional(),
                  watching_first_post_tags: z.array(z.any()).exactOptional(),
                  tracking_tags: z.array(z.any()).exactOptional(),
                  regular_tags: z.array(z.any()).exactOptional(),
                  muted_tags: z.array(z.any()).exactOptional(),
                })
                .openapi({
                  required: [
                    'id',
                    'automatic',
                    'name',
                    'mentionable_level',
                    'messageable_level',
                    'visibility_level',
                    'primary_group',
                    'title',
                    'grant_trust_level',
                    'incoming_email',
                    'has_messages',
                    'flair_url',
                    'flair_bg_color',
                    'flair_color',
                    'bio_raw',
                    'bio_cooked',
                    'bio_excerpt',
                    'public_admission',
                    'public_exit',
                    'allow_membership_requests',
                    'full_name',
                    'default_notification_level',
                    'membership_request_template',
                    'is_group_user',
                    'members_visibility_level',
                    'can_see_members',
                    'can_admin_group',
                    'publish_read_state',
                    'is_group_owner_display',
                    'mentionable',
                    'messageable',
                    'automatic_membership_email_domains',
                    'smtp_server',
                    'smtp_port',
                    'smtp_ssl_mode',
                    'email_username',
                    'email_password',
                    'message_count',
                    'allow_unknown_sender_topic_replies',
                    'watching_category_ids',
                    'tracking_category_ids',
                    'watching_first_post_category_ids',
                    'regular_category_ids',
                    'muted_category_ids',
                  ],
                }),
              extras: z
                .strictObject({ visible_group_names: z.array(z.any()) })
                .openapi({ required: ['visible_group_names'] }),
            })
            .openapi({ required: ['group', 'extras'] }),
        },
      },
    },
  },
})

export const getGroupsNameMembersJsonRoute = createRoute({
  method: 'get',
  path: '/groups/{name}/members.json',
  tags: ['Groups'],
  summary: 'List group members',
  operationId: 'listGroupMembers',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            example: 'name',
            description: 'Use group name instead of id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              members: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    username: z.string(),
                    name: z.string().nullable(),
                    avatar_template: z.string(),
                    title: z.string().nullable(),
                    last_posted_at: z.string(),
                    last_seen_at: z.string(),
                    added_at: z.string(),
                    timezone: z.string(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'username',
                      'name',
                      'avatar_template',
                      'title',
                      'last_posted_at',
                      'last_seen_at',
                      'added_at',
                      'timezone',
                    ],
                  }),
              ),
              owners: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    username: z.string(),
                    name: z.string().nullable(),
                    avatar_template: z.string(),
                    title: z.string().nullable(),
                    last_posted_at: z.string(),
                    last_seen_at: z.string(),
                    added_at: z.string(),
                    timezone: z.string(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'username',
                      'name',
                      'avatar_template',
                      'title',
                      'last_posted_at',
                      'last_seen_at',
                      'added_at',
                      'timezone',
                    ],
                  }),
              ),
              meta: z
                .strictObject({ total: z.int(), limit: z.int(), offset: z.int() })
                .openapi({ required: ['total', 'limit', 'offset'] }),
            })
            .openapi({ required: ['members', 'owners', 'meta'] }),
        },
      },
    },
  },
})

export const putGroupsIdMembersJsonRoute = createRoute({
  method: 'put',
  path: '/groups/{id}/members.json',
  tags: ['Groups'],
  summary: 'Add group members',
  operationId: 'addGroupMembers',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              usernames: z
                .string()
                .exactOptional()
                .openapi({ description: 'comma separated list', example: 'username1,username2' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              success: z.string(),
              usernames: z.array(z.any()),
              emails: z.array(z.any()),
            })
            .openapi({ required: ['success', 'usernames', 'emails'] }),
        },
      },
    },
  },
})

export const deleteGroupsIdMembersJsonRoute = createRoute({
  method: 'delete',
  path: '/groups/{id}/members.json',
  tags: ['Groups'],
  summary: 'Remove group members',
  operationId: 'removeGroupMembers',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              usernames: z
                .string()
                .exactOptional()
                .openapi({ description: 'comma separated list', example: 'username1,username2' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              success: z.string(),
              usernames: z.array(z.any()),
              skipped_usernames: z.array(z.any()),
            })
            .openapi({ required: ['success', 'usernames', 'skipped_usernames'] }),
        },
      },
    },
  },
})

export const getGroupsJsonRoute = createRoute({
  method: 'get',
  path: '/groups.json',
  tags: ['Groups'],
  summary: 'List groups',
  operationId: 'listGroups',
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              groups: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    automatic: z.boolean(),
                    name: z.string(),
                    display_name: z.string(),
                    user_count: z.int().exactOptional(),
                    mentionable_level: z.int(),
                    messageable_level: z.int(),
                    visibility_level: z.int(),
                    primary_group: z.boolean(),
                    title: z.string().nullable(),
                    grant_trust_level: z.string().nullable(),
                    incoming_email: z.string().nullable(),
                    has_messages: z.boolean(),
                    flair_url: z.string().nullable(),
                    flair_bg_color: z.string().nullable(),
                    flair_color: z.string().nullable(),
                    bio_raw: z.string().nullable(),
                    bio_cooked: z.string().nullable(),
                    bio_excerpt: z.string().nullable(),
                    public_admission: z.boolean(),
                    public_exit: z.boolean(),
                    allow_membership_requests: z.boolean(),
                    full_name: z.string().nullable(),
                    default_notification_level: z.int(),
                    membership_request_template: z.string().nullable(),
                    is_group_user: z.boolean().exactOptional(),
                    is_group_owner: z.boolean().exactOptional(),
                    members_visibility_level: z.int(),
                    can_see_members: z.boolean(),
                    can_admin_group: z.boolean(),
                    can_edit_group: z.boolean().exactOptional(),
                    publish_read_state: z.boolean(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'automatic',
                      'name',
                      'display_name',
                      'mentionable_level',
                      'messageable_level',
                      'visibility_level',
                      'primary_group',
                      'title',
                      'grant_trust_level',
                      'incoming_email',
                      'has_messages',
                      'flair_url',
                      'flair_bg_color',
                      'flair_color',
                      'bio_raw',
                      'bio_cooked',
                      'bio_excerpt',
                      'public_admission',
                      'public_exit',
                      'allow_membership_requests',
                      'full_name',
                      'default_notification_level',
                      'membership_request_template',
                      'members_visibility_level',
                      'can_see_members',
                      'can_admin_group',
                      'publish_read_state',
                    ],
                  }),
              ),
              extras: z
                .strictObject({ type_filters: z.array(z.any()) })
                .openapi({ required: ['type_filters'] }),
              total_rows_groups: z.int(),
              load_more_groups: z.string(),
            })
            .openapi({ required: ['groups', 'extras', 'total_rows_groups', 'load_more_groups'] }),
        },
      },
    },
  },
})

export const postInvitesJsonRoute = createRoute({
  method: 'post',
  path: '/invites.json',
  tags: ['Invites'],
  summary: 'Create an invite',
  operationId: 'createInvite',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              email: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'not-a-user-yet@example.com',
                  description: 'required for email invites only',
                }),
              skip_email: z.boolean().default(false).exactOptional(),
              custom_message: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional, for email invites' }),
              max_redemptions_allowed: z
                .int()
                .default(1)
                .exactOptional()
                .openapi({ example: 5, description: 'optional, for link invites' }),
              topic_id: z.int().exactOptional(),
              group_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional, either this or `group_names`. Comma separated\nlist for multiple ids.',
                  example: '42,43',
                }),
              group_names: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional, either this or `group_ids`. Comma separated\nlist for multiple names.',
                  example: 'foo,bar',
                }),
              expires_at: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'optional, if not supplied, the invite_expiry_days site\nsetting is used',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.int().openapi({ example: 42 }),
              invite_key: z.string(),
              link: z
                .string()
                .openapi({
                  example: 'http://example.com/invites/9045fd767efe201ca60c6658bcf14158',
                }),
              description: z.string().nullable(),
              email: z.string().openapi({ example: 'not-a-user-yet@example.com' }),
              domain: z.string().nullable(),
              emailed: z.boolean().openapi({ example: false }),
              can_delete_invite: z.boolean(),
              custom_message: z.string().nullable().openapi({ example: 'Hello world!' }),
              created_at: z.string().openapi({ example: '2021-01-01T12:00:00.000Z' }),
              updated_at: z.string().openapi({ example: '2021-01-01T12:00:00.000Z' }),
              expires_at: z.string().openapi({ example: '2021-02-01T12:00:00.000Z' }),
              expired: z.boolean().openapi({ example: false }),
              grants_admin: z.boolean().openapi({ example: false }),
              grants_moderator: z.boolean().openapi({ example: false }),
              topics: z.array(z.object({})).openapi({ example: [] }),
              groups: z.array(z.object({})).openapi({ example: [] }),
            })
            .openapi({
              required: [
                'id',
                'invite_key',
                'link',
                'description',
                'email',
                'domain',
                'emailed',
                'can_delete_invite',
                'custom_message',
                'created_at',
                'updated_at',
                'expires_at',
                'expired',
                'grants_admin',
                'grants_moderator',
                'topics',
                'groups',
              ],
            }),
        },
      },
    },
  },
})

export const postInvitesCreateMultipleJsonRoute = createRoute({
  method: 'post',
  path: '/invites/create-multiple.json',
  tags: ['Invites'],
  summary: 'Create multiple invites',
  operationId: 'createMultipleInvites',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .exactOptional()
                .openapi({
                  example: ['not-a-user-yet-1@example.com', 'not-a-user-yet-2@example.com'],
                  description:
                    'pass 1 email per invite to be generated. other properties\nwill be shared by each invite.',
                }),
              skip_email: z.boolean().default(false).exactOptional(),
              custom_message: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional, for email invites' }),
              max_redemptions_allowed: z
                .int()
                .default(1)
                .exactOptional()
                .openapi({ example: 5, description: 'optional, for link invites' }),
              topic_id: z.int().exactOptional(),
              group_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional, either this or `group_names`. Comma separated\nlist for multiple ids.',
                  example: '42,43',
                }),
              group_names: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional, either this or `group_ids`. Comma separated\nlist for multiple names.',
                  example: 'foo,bar',
                }),
              expires_at: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'optional, if not supplied, the invite_expiry_days site\nsetting is used',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .object({
              num_successfully_created_invitations: z
                .int()
                .exactOptional()
                .openapi({ example: 42 }),
              num_failed_invitations: z.int().exactOptional().openapi({ example: 42 }),
              failed_invitations: z.array(z.any()).exactOptional().openapi({ example: [] }),
              successful_invitations: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  example: [
                    {
                      id: 42,
                      link: 'http://example.com/invites/9045fd767efe201ca60c6658bcf14158',
                      email: 'not-a-user-yet-1@example.com',
                      emailed: true,
                      custom_message: 'Hello world!',
                      topics: [],
                      groups: [],
                      created_at: '2021-01-01T12:00:00.000Z',
                      updated_at: '2021-01-01T12:00:00.000Z',
                      expires_at: '2021-02-01T12:00:00.000Z',
                      expired: false,
                    },
                    {
                      id: 42,
                      link: 'http://example.com/invites/c6658bcf141589045fd767efe201ca60',
                      email: 'not-a-user-yet-2@example.com',
                      emailed: true,
                      custom_message: 'Hello world!',
                      topics: [],
                      groups: [],
                      created_at: '2021-01-01T12:00:00.000Z',
                      updated_at: '2021-01-01T12:00:00.000Z',
                      expires_at: '2021-02-01T12:00:00.000Z',
                      expired: false,
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getNotificationsJsonRoute = createRoute({
  method: 'get',
  path: '/notifications.json',
  tags: ['Notifications'],
  summary: 'Get the notifications that belong to the current user',
  operationId: 'getNotifications',
  responses: {
    200: {
      description: 'notifications',
      content: {
        'application/json': {
          schema: z
            .object({
              notifications: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      user_id: z.int().exactOptional(),
                      notification_type: z.int().exactOptional(),
                      read: z.boolean().exactOptional(),
                      created_at: z.string().exactOptional(),
                      post_number: z.int().nullable().exactOptional(),
                      topic_id: z.int().nullable().exactOptional(),
                      slug: z.string().nullable().exactOptional(),
                      data: z
                        .object({
                          badge_id: z.int().exactOptional(),
                          badge_name: z.string().exactOptional(),
                          badge_slug: z.string().exactOptional(),
                          badge_title: z.boolean().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              total_rows_notifications: z.int().exactOptional(),
              seen_notification_id: z.int().exactOptional(),
              load_more_notifications: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putNotificationsMarkReadJsonRoute = createRoute({
  method: 'put',
  path: '/notifications/mark-read.json',
  tags: ['Notifications'],
  summary: 'Mark notifications as read',
  operationId: 'markNotificationsAsRead',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .int()
                .exactOptional()
                .openapi({
                  description: '(optional) Leave off to mark all notifications as\nread',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'notifications marked read',
      content: {
        'application/json': {
          schema: z.object({ success: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPostsJsonRoute = createRoute({
  method: 'get',
  path: '/posts.json',
  tags: ['Posts'],
  summary: 'List latest posts across topics',
  operationId: 'listPosts',
  request: {
    query: z.object({
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            description: 'Load posts with an id lower than this value. Useful for pagination.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'latest posts',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              latest_posts: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    name: z.string().nullable(),
                    username: z.string(),
                    avatar_template: z.string(),
                    created_at: z.string(),
                    cooked: z.string(),
                    post_number: z.int(),
                    post_type: z.int(),
                    posts_count: z.int(),
                    updated_at: z.string(),
                    reply_count: z.int(),
                    reply_to_post_number: z.string().nullable(),
                    quote_count: z.int(),
                    incoming_link_count: z.int(),
                    reads: z.int(),
                    readers_count: z.int(),
                    score: z.number(),
                    yours: z.boolean(),
                    topic_id: z.int(),
                    topic_slug: z.string(),
                    topic_title: z.string(),
                    topic_html_title: z.string(),
                    category_id: z.int(),
                    display_username: z.string().nullable(),
                    primary_group_name: z.string().nullable(),
                    flair_name: z.string().nullable(),
                    flair_url: z.string().nullable(),
                    flair_bg_color: z.string().nullable(),
                    flair_color: z.string().nullable(),
                    flair_group_id: z.string().nullable(),
                    badges_granted: z.array(z.any()),
                    version: z.int(),
                    can_edit: z.boolean(),
                    can_delete: z.boolean(),
                    can_recover: z.boolean(),
                    can_see_hidden_post: z.boolean(),
                    can_wiki: z.boolean(),
                    user_title: z.string().nullable(),
                    bookmarked: z.boolean(),
                    raw: z.string(),
                    actions_summary: z.array(
                      z
                        .strictObject({ id: z.int(), can_act: z.boolean() })
                        .openapi({ required: ['id', 'can_act'] }),
                    ),
                    moderator: z.boolean(),
                    admin: z.boolean(),
                    staff: z.boolean(),
                    user_id: z.int(),
                    hidden: z.boolean(),
                    trust_level: z.int(),
                    deleted_at: z.string().nullable(),
                    user_deleted: z.boolean(),
                    edit_reason: z.string().nullable(),
                    can_view_edit_history: z.boolean(),
                    wiki: z.boolean(),
                    excerpt: z.string(),
                    truncated: z.boolean(),
                    reviewable_id: z.string().nullable(),
                    reviewable_score_count: z.int(),
                    reviewable_score_pending_count: z.int(),
                    post_url: z.string(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name',
                      'username',
                      'avatar_template',
                      'created_at',
                      'cooked',
                      'post_number',
                      'post_type',
                      'posts_count',
                      'updated_at',
                      'reply_count',
                      'reply_to_post_number',
                      'quote_count',
                      'incoming_link_count',
                      'reads',
                      'readers_count',
                      'score',
                      'yours',
                      'topic_id',
                      'topic_slug',
                      'topic_title',
                      'topic_html_title',
                      'category_id',
                      'display_username',
                      'primary_group_name',
                      'flair_name',
                      'flair_url',
                      'flair_bg_color',
                      'flair_color',
                      'flair_group_id',
                      'badges_granted',
                      'version',
                      'can_edit',
                      'can_delete',
                      'can_recover',
                      'can_see_hidden_post',
                      'can_wiki',
                      'user_title',
                      'bookmarked',
                      'raw',
                      'actions_summary',
                      'moderator',
                      'admin',
                      'staff',
                      'user_id',
                      'hidden',
                      'trust_level',
                      'deleted_at',
                      'user_deleted',
                      'edit_reason',
                      'can_view_edit_history',
                      'wiki',
                      'excerpt',
                      'truncated',
                      'reviewable_id',
                      'reviewable_score_count',
                      'reviewable_score_pending_count',
                      'post_url',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['latest_posts'] }),
        },
      },
    },
  },
})

export const postPostsJsonRoute = createRoute({
  method: 'post',
  path: '/posts.json',
  tags: ['Posts', 'Topics', 'Private Messages'],
  summary: 'Creates a new topic, a new post, or a private message',
  operationId: 'createTopicPostPM',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Required if creating a new topic or new private message.',
                }),
              raw: z.string(),
              topic_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Required if creating a new post.' }),
              category: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Optional if creating a new topic, and ignored if creating\na new post.',
                }),
              target_recipients: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Required for private message, comma separated.',
                  example: 'blake,sam',
                }),
              target_usernames: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Deprecated. Use target_recipients instead.',
                  deprecated: true,
                }),
              archetype: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Required for new private message.',
                  example: 'private_message',
                }),
              created_at: z.string().exactOptional(),
              reply_to_post_number: z
                .int()
                .exactOptional()
                .openapi({ description: 'Optional, the post number to reply to inside a topic.' }),
              embed_url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide a URL from a remote system to associate a forum\ntopic with that URL, typically for using Discourse as a comments\nsystem for an external blog.',
                }),
              external_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Provide an external_id from a remote system to associate\na forum topic with that id.',
                }),
              auto_track: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If false, the user will not track the topic. By default,\nthe user will track the topic.',
                }),
            })
            .openapi({ required: ['raw'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'post created',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.int(),
              name: z.string().nullable(),
              username: z.string(),
              avatar_template: z.string(),
              created_at: z.string(),
              raw: z.string().exactOptional(),
              cooked: z.string(),
              post_number: z.int(),
              post_type: z.int(),
              posts_count: z.int(),
              updated_at: z.string(),
              reply_count: z.int(),
              reply_to_post_number: z.string().nullable(),
              quote_count: z.int(),
              incoming_link_count: z.int(),
              reads: z.int(),
              readers_count: z.int(),
              score: z.number(),
              yours: z.boolean(),
              topic_id: z.int(),
              topic_slug: z.string(),
              display_username: z.string().nullable(),
              primary_group_name: z.string().nullable(),
              flair_name: z.string().nullable(),
              flair_url: z.string().nullable(),
              flair_bg_color: z.string().nullable(),
              flair_color: z.string().nullable(),
              flair_group_id: z.int().nullable().exactOptional(),
              badges_granted: z.array(z.any()).exactOptional(),
              version: z.int(),
              can_edit: z.boolean(),
              can_delete: z.boolean(),
              can_recover: z.boolean(),
              can_see_hidden_post: z.boolean().exactOptional(),
              can_wiki: z.boolean(),
              user_title: z.string().nullable(),
              bookmarked: z.boolean(),
              actions_summary: z.array(
                z
                  .strictObject({ id: z.int(), can_act: z.boolean() })
                  .openapi({ required: ['id', 'can_act'] }),
              ),
              moderator: z.boolean(),
              admin: z.boolean(),
              staff: z.boolean(),
              user_id: z.int(),
              draft_sequence: z.int(),
              hidden: z.boolean(),
              trust_level: z.int(),
              deleted_at: z.string().nullable(),
              user_deleted: z.boolean(),
              edit_reason: z.string().nullable(),
              can_view_edit_history: z.boolean(),
              wiki: z.boolean(),
              reviewable_id: z.int().nullable(),
              reviewable_score_count: z.int(),
              reviewable_score_pending_count: z.int(),
              post_url: z.string(),
              post_localizations: z.array(z.any()).exactOptional(),
              mentioned_users: z.array(z.any()).exactOptional(),
            })
            .openapi({
              required: [
                'id',
                'name',
                'username',
                'avatar_template',
                'created_at',
                'cooked',
                'post_number',
                'post_type',
                'posts_count',
                'updated_at',
                'reply_count',
                'reply_to_post_number',
                'quote_count',
                'incoming_link_count',
                'reads',
                'readers_count',
                'score',
                'yours',
                'topic_id',
                'topic_slug',
                'display_username',
                'primary_group_name',
                'flair_name',
                'flair_url',
                'flair_bg_color',
                'flair_color',
                'version',
                'can_edit',
                'can_delete',
                'can_recover',
                'can_wiki',
                'user_title',
                'bookmarked',
                'actions_summary',
                'moderator',
                'admin',
                'staff',
                'user_id',
                'draft_sequence',
                'hidden',
                'trust_level',
                'deleted_at',
                'user_deleted',
                'edit_reason',
                'can_view_edit_history',
                'wiki',
                'reviewable_id',
                'reviewable_score_count',
                'reviewable_score_pending_count',
                'post_url',
              ],
            }),
        },
      },
    },
  },
})

export const getPostsIdJsonRoute = createRoute({
  method: 'get',
  path: '/posts/{id}.json',
  tags: ['Posts'],
  summary: 'Retrieve a single post',
  description:
    'This endpoint can be used to get the number of likes on a post using the\n`actions_summary` property in the response. `actions_summary` responses\nwith the id of `2` signify a `like`. If there are no `actions_summary`\nitems with the id of `2`, that means there are 0 likes. Other ids likely\nrefer to various different flag types.\n',
  operationId: 'getPost',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'single reviewable post',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              id: z.int(),
              username: z.string(),
              avatar_template: z.string(),
              created_at: z.string(),
              cooked: z.string(),
              post_number: z.int(),
              post_type: z.int(),
              posts_count: z.int(),
              updated_at: z.string(),
              reply_count: z.int(),
              reply_to_post_number: z.string().nullable(),
              quote_count: z.int(),
              incoming_link_count: z.int(),
              reads: z.int(),
              readers_count: z.int(),
              score: z.number(),
              yours: z.boolean(),
              topic_id: z.int(),
              topic_slug: z.string(),
              primary_group_name: z.string().nullable(),
              flair_name: z.string().nullable(),
              flair_url: z.string().nullable(),
              flair_bg_color: z.string().nullable(),
              flair_color: z.string().nullable(),
              flair_group_id: z.int().nullable().exactOptional(),
              version: z.int(),
              can_edit: z.boolean(),
              can_delete: z.boolean(),
              can_recover: z.boolean(),
              can_see_hidden_post: z.boolean().exactOptional(),
              can_wiki: z.boolean(),
              user_title: z.string().nullable(),
              bookmarked: z.boolean(),
              raw: z.string(),
              actions_summary: z.array(
                z
                  .strictObject({
                    id: z
                      .int()
                      .openapi({ description: '`2`: like, `3`, `4`, `6`, `7`, `8`: flag' }),
                    count: z.int().exactOptional(),
                    acted: z.boolean().exactOptional(),
                    can_undo: z.boolean().exactOptional(),
                    can_act: z.boolean().exactOptional(),
                  })
                  .openapi({ required: ['id'] }),
              ),
              moderator: z.boolean(),
              admin: z.boolean(),
              staff: z.boolean(),
              user_id: z.int(),
              hidden: z.boolean(),
              trust_level: z.int(),
              deleted_at: z.string().nullable(),
              user_deleted: z.boolean(),
              edit_reason: z.string().nullable(),
              can_view_edit_history: z.boolean(),
              wiki: z.boolean(),
              reviewable_id: z.int().nullable(),
              reviewable_score_count: z.int(),
              reviewable_score_pending_count: z.int(),
              post_url: z.string(),
              mentioned_users: z.array(z.any()).exactOptional(),
              name: z.string().nullable().exactOptional(),
              display_username: z.string().nullable().exactOptional(),
            })
            .openapi({
              required: [
                'id',
                'username',
                'avatar_template',
                'created_at',
                'cooked',
                'post_number',
                'post_type',
                'posts_count',
                'updated_at',
                'reply_count',
                'reply_to_post_number',
                'quote_count',
                'incoming_link_count',
                'reads',
                'readers_count',
                'score',
                'yours',
                'topic_id',
                'topic_slug',
                'primary_group_name',
                'flair_name',
                'flair_url',
                'flair_bg_color',
                'flair_color',
                'version',
                'can_edit',
                'can_delete',
                'can_recover',
                'can_wiki',
                'user_title',
                'bookmarked',
                'raw',
                'actions_summary',
                'moderator',
                'admin',
                'staff',
                'user_id',
                'hidden',
                'trust_level',
                'deleted_at',
                'user_deleted',
                'edit_reason',
                'can_view_edit_history',
                'wiki',
                'reviewable_id',
                'reviewable_score_count',
                'reviewable_score_pending_count',
                'post_url',
              ],
            }),
        },
      },
    },
  },
})

export const putPostsIdJsonRoute = createRoute({
  method: 'put',
  path: '/posts/{id}.json',
  tags: ['Posts'],
  summary: 'Update a single post',
  operationId: 'updatePost',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              post: z
                .strictObject({ raw: z.string(), edit_reason: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: ['raw'] }),
              bypass_bump: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Skip bumping the topic when updating the post. Requires\nstaff or TL4 permissions.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'post updated',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              post: z
                .strictObject({
                  id: z.int(),
                  username: z.string(),
                  avatar_template: z.string(),
                  created_at: z.string(),
                  cooked: z.string(),
                  post_number: z.int(),
                  post_type: z.int(),
                  posts_count: z.int(),
                  updated_at: z.string(),
                  reply_count: z.int(),
                  reply_to_post_number: z.string().nullable(),
                  quote_count: z.int(),
                  incoming_link_count: z.int(),
                  reads: z.int(),
                  readers_count: z.int(),
                  score: z.number(),
                  yours: z.boolean(),
                  topic_id: z.int(),
                  topic_slug: z.string(),
                  primary_group_name: z.string().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  flair_group_id: z.int().nullable().exactOptional(),
                  badges_granted: z.array(z.any()).exactOptional(),
                  version: z.int(),
                  can_edit: z.boolean(),
                  can_delete: z.boolean(),
                  can_recover: z.boolean(),
                  can_see_hidden_post: z.boolean().exactOptional(),
                  can_wiki: z.boolean(),
                  user_title: z.string().nullable(),
                  bookmarked: z.boolean(),
                  raw: z.string(),
                  actions_summary: z.array(
                    z
                      .strictObject({ id: z.int(), can_act: z.boolean() })
                      .openapi({ required: ['id', 'can_act'] }),
                  ),
                  moderator: z.boolean(),
                  admin: z.boolean(),
                  staff: z.boolean(),
                  user_id: z.int(),
                  draft_sequence: z.int(),
                  hidden: z.boolean(),
                  trust_level: z.int(),
                  deleted_at: z.string().nullable(),
                  user_deleted: z.boolean(),
                  edit_reason: z.string().nullable(),
                  can_view_edit_history: z.boolean(),
                  wiki: z.boolean(),
                  reviewable_id: z.int().nullable(),
                  reviewable_score_count: z.int(),
                  reviewable_score_pending_count: z.int(),
                  post_url: z.string(),
                  post_localizations: z.array(z.any()).exactOptional(),
                  mentioned_users: z.array(z.any()).exactOptional(),
                  name: z.string().nullable().exactOptional(),
                  display_username: z.string().nullable().exactOptional(),
                })
                .openapi({
                  required: [
                    'id',
                    'username',
                    'avatar_template',
                    'created_at',
                    'cooked',
                    'post_number',
                    'post_type',
                    'posts_count',
                    'updated_at',
                    'reply_count',
                    'reply_to_post_number',
                    'quote_count',
                    'incoming_link_count',
                    'reads',
                    'readers_count',
                    'score',
                    'yours',
                    'topic_id',
                    'topic_slug',
                    'primary_group_name',
                    'flair_name',
                    'flair_url',
                    'flair_bg_color',
                    'flair_color',
                    'version',
                    'can_edit',
                    'can_delete',
                    'can_recover',
                    'can_wiki',
                    'user_title',
                    'bookmarked',
                    'raw',
                    'actions_summary',
                    'moderator',
                    'admin',
                    'staff',
                    'user_id',
                    'draft_sequence',
                    'hidden',
                    'trust_level',
                    'deleted_at',
                    'user_deleted',
                    'edit_reason',
                    'can_view_edit_history',
                    'wiki',
                    'reviewable_id',
                    'reviewable_score_count',
                    'reviewable_score_pending_count',
                    'post_url',
                  ],
                }),
            })
            .openapi({ required: ['post'] }),
        },
      },
    },
  },
})

export const deletePostsIdJsonRoute = createRoute({
  method: 'delete',
  path: '/posts/{id}.json',
  tags: ['Posts'],
  summary: 'delete a single post',
  operationId: 'deletePost',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', schema: { type: 'integer' }, required: true },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              force_destroy: z
                .boolean()
                .exactOptional()
                .openapi({
                  example: true,
                  description:
                    'The `SiteSetting.can_permanently_delete` needs to be\nenabled first before this param can be used. Also this endpoint\nneeds to be called first without `force_destroy` and then followed\nup with a second call 5 minutes later with `force_destroy` to\npermanently delete.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'success response' } },
})

export const getPostsIdRepliesJsonRoute = createRoute({
  method: 'get',
  path: '/posts/{id}/replies.json',
  tags: ['Posts'],
  summary: 'List replies to a post',
  operationId: 'postReplies',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'post replies',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  id: z.int(),
                  name: z.string().nullable(),
                  username: z.string(),
                  avatar_template: z.string(),
                  created_at: z.string(),
                  cooked: z.string(),
                  post_number: z.int(),
                  post_type: z.int(),
                  posts_count: z.int(),
                  updated_at: z.string(),
                  reply_count: z.int(),
                  reply_to_post_number: z.int(),
                  quote_count: z.int(),
                  incoming_link_count: z.int(),
                  reads: z.int(),
                  readers_count: z.int(),
                  score: z.number(),
                  yours: z.boolean(),
                  topic_id: z.int(),
                  topic_slug: z.string(),
                  display_username: z.string().nullable(),
                  primary_group_name: z.string().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  flair_group_id: z.int().nullable().exactOptional(),
                  version: z.int(),
                  can_edit: z.boolean(),
                  can_delete: z.boolean(),
                  can_recover: z.boolean(),
                  can_see_hidden_post: z.boolean(),
                  can_wiki: z.boolean(),
                  user_title: z.string().nullable(),
                  reply_to_user: z
                    .strictObject({
                      id: z.int().exactOptional(),
                      username: z.string(),
                      name: z.string().exactOptional(),
                      avatar_template: z.string(),
                    })
                    .openapi({ required: ['username', 'avatar_template'] }),
                  bookmarked: z.boolean(),
                  actions_summary: z.array(
                    z
                      .strictObject({ id: z.int(), can_act: z.boolean() })
                      .openapi({ required: ['id', 'can_act'] }),
                  ),
                  moderator: z.boolean(),
                  admin: z.boolean(),
                  staff: z.boolean(),
                  user_id: z.int(),
                  hidden: z.boolean(),
                  trust_level: z.int(),
                  deleted_at: z.string().nullable(),
                  user_deleted: z.boolean(),
                  edit_reason: z.string().nullable(),
                  can_view_edit_history: z.boolean(),
                  wiki: z.boolean(),
                  reviewable_id: z.int().nullable(),
                  reviewable_score_count: z.int(),
                  reviewable_score_pending_count: z.int(),
                  post_url: z.string(),
                })
                .openapi({
                  required: [
                    'id',
                    'name',
                    'username',
                    'avatar_template',
                    'created_at',
                    'cooked',
                    'post_number',
                    'post_type',
                    'posts_count',
                    'updated_at',
                    'reply_count',
                    'reply_to_post_number',
                    'quote_count',
                    'incoming_link_count',
                    'reads',
                    'readers_count',
                    'score',
                    'yours',
                    'topic_id',
                    'topic_slug',
                    'display_username',
                    'primary_group_name',
                    'flair_name',
                    'flair_url',
                    'flair_bg_color',
                    'flair_color',
                    'version',
                    'can_edit',
                    'can_delete',
                    'can_recover',
                    'can_see_hidden_post',
                    'can_wiki',
                    'user_title',
                    'reply_to_user',
                    'bookmarked',
                    'actions_summary',
                    'moderator',
                    'admin',
                    'staff',
                    'user_id',
                    'hidden',
                    'trust_level',
                    'deleted_at',
                    'user_deleted',
                    'edit_reason',
                    'can_view_edit_history',
                    'wiki',
                    'reviewable_id',
                    'reviewable_score_count',
                    'reviewable_score_pending_count',
                    'post_url',
                  ],
                }),
            )
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        },
      },
    },
  },
})

export const putPostsIdLockedJsonRoute = createRoute({
  method: 'put',
  path: '/posts/{id}/locked.json',
  tags: ['Posts'],
  summary: 'Lock a post from being edited',
  operationId: 'lockPost',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              locked: z.string().openapi({ description: 'Whether to lock the post (true/false)' }),
            })
            .openapi({ required: ['locked'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'post updated',
      content: {
        'application/json': {
          schema: z
            .object({ locked: z.boolean().openapi({ description: 'Whether the post is locked' }) })
            .openapi({ required: ['locked'] }),
        },
      },
    },
  },
})

export const postPostActionsJsonRoute = createRoute({
  method: 'post',
  path: '/post_actions.json',
  tags: ['Posts'],
  summary: 'Like a post and other actions',
  operationId: 'performPostAction',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.int().openapi({ description: 'The ID of the post to perform the action on' }),
              post_action_type_id: z
                .int()
                .openapi({ description: 'The ID of the post action type (e.g., 2 for like)' }),
              flag_topic: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether to flag the entire topic' }),
            })
            .openapi({ required: ['id', 'post_action_type_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'post updated',
      content: {
        'application/json': {
          schema: z
            .looseObject({
              id: z.int().openapi({ description: 'The ID of the post' }),
              name: z.string().openapi({ description: 'The name of the post author' }),
              username: z.string().openapi({ description: 'The username of the post author' }),
              avatar_template: z
                .string()
                .openapi({ description: "Template for the author's avatar URL" }),
              created_at: z.string().openapi({ description: 'When the post was created' }),
              cooked: z.string().openapi({ description: 'The HTML content of the post' }),
              post_number: z.int().openapi({ description: 'The post number within the topic' }),
              post_type: z.int().openapi({ description: 'The type of post' }),
              posts_count: z.int().openapi({ description: 'Total posts count for the user' }),
              updated_at: z.string().openapi({ description: 'When the post was last updated' }),
              reply_count: z.int().openapi({ description: 'Number of replies to this post' }),
              reply_to_post_number: z
                .string()
                .nullable()
                .openapi({ description: 'Post number this post is replying to' }),
              quote_count: z
                .int()
                .openapi({ description: 'Number of times this post has been quoted' }),
              incoming_link_count: z
                .int()
                .openapi({ description: 'Number of incoming links to this post' }),
              reads: z.int().openapi({ description: 'Number of reads' }),
              readers_count: z.int().openapi({ description: 'Number of readers' }),
              score: z.number().openapi({ description: 'Post score' }),
              yours: z
                .boolean()
                .openapi({ description: 'Whether this post belongs to the current user' }),
              topic_id: z.int().openapi({ description: 'ID of the topic this post belongs to' }),
              topic_slug: z
                .string()
                .openapi({ description: 'Slug of the topic this post belongs to' }),
              display_username: z
                .string()
                .openapi({ description: 'Display username of the post author' }),
              primary_group_name: z
                .string()
                .nullable()
                .openapi({ description: 'Primary group name of the author' }),
              flair_name: z
                .string()
                .nullable()
                .openapi({ description: 'Flair name of the author' }),
              flair_url: z.string().nullable().openapi({ description: 'Flair URL of the author' }),
              flair_bg_color: z
                .string()
                .nullable()
                .openapi({ description: 'Flair background color of the author' }),
              flair_color: z
                .string()
                .nullable()
                .openapi({ description: 'Flair color of the author' }),
              flair_group_id: z
                .int()
                .nullable()
                .openapi({ description: 'Flair group ID of the author' }),
              badges_granted: z
                .array(z.any())
                .openapi({ description: 'Badges granted to the user' }),
              version: z.int().openapi({ description: 'Version number of the post' }),
              can_edit: z
                .boolean()
                .openapi({ description: 'Whether the current user can edit this post' }),
              can_delete: z
                .boolean()
                .openapi({ description: 'Whether the current user can delete this post' }),
              can_recover: z
                .boolean()
                .openapi({ description: 'Whether the current user can recover this post' }),
              can_see_hidden_post: z
                .boolean()
                .openapi({ description: 'Whether the current user can see hidden posts' }),
              can_wiki: z
                .boolean()
                .openapi({ description: 'Whether the current user can wiki this post' }),
              user_title: z
                .string()
                .nullable()
                .openapi({ description: 'Title of the post author' }),
              bookmarked: z
                .boolean()
                .openapi({ description: 'Whether the post is bookmarked by the current user' }),
              actions_summary: z
                .array(
                  z
                    .looseObject({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'ID of the action type (e.g., 2 for like)' }),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Number of times this action has been performed' }),
                      acted: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Whether the current user has performed this\naction',
                        }),
                      can_undo: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether the current user can undo this action' }),
                      can_act: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Whether the current user can perform this action',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({ description: 'Summary of actions performed on this post' }),
              moderator: z
                .boolean()
                .openapi({ description: 'Whether the post author is a moderator' }),
              admin: z.boolean().openapi({ description: 'Whether the post author is an admin' }),
              staff: z.boolean().openapi({ description: 'Whether the post author is staff' }),
              user_id: z.int().openapi({ description: 'ID of the post author' }),
              hidden: z.boolean().openapi({ description: 'Whether the post is hidden' }),
              trust_level: z.int().openapi({ description: 'Trust level of the post author' }),
              deleted_at: z
                .string()
                .nullable()
                .openapi({ description: 'When the post was deleted' }),
              user_deleted: z
                .boolean()
                .openapi({ description: 'Whether the post was deleted by the user' }),
              edit_reason: z
                .string()
                .nullable()
                .openapi({ description: 'Reason for the last edit' }),
              can_view_edit_history: z
                .boolean()
                .openapi({ description: 'Whether the current user can view edit history' }),
              wiki: z.boolean().openapi({ description: 'Whether this is a wiki post' }),
              reviewable_id: z
                .int()
                .nullable()
                .openapi({ description: 'ID of the reviewable if this post is under review' }),
              reviewable_score_count: z
                .int()
                .openapi({ description: 'Number of reviewable scores' }),
              reviewable_score_pending_count: z
                .int()
                .openapi({ description: 'Number of pending reviewable scores' }),
              post_url: z.string().openapi({ description: 'URL of the post' }),
            })
            .openapi({
              required: [
                'id',
                'name',
                'username',
                'avatar_template',
                'created_at',
                'cooked',
                'post_number',
                'post_type',
                'posts_count',
                'updated_at',
                'reply_count',
                'reply_to_post_number',
                'quote_count',
                'incoming_link_count',
                'reads',
                'readers_count',
                'score',
                'yours',
                'topic_id',
                'topic_slug',
                'display_username',
                'primary_group_name',
                'flair_name',
                'flair_url',
                'flair_bg_color',
                'flair_color',
                'flair_group_id',
                'badges_granted',
                'version',
                'can_edit',
                'can_delete',
                'can_recover',
                'can_see_hidden_post',
                'can_wiki',
                'user_title',
                'bookmarked',
                'actions_summary',
                'moderator',
                'admin',
                'staff',
                'user_id',
                'hidden',
                'trust_level',
                'deleted_at',
                'user_deleted',
                'edit_reason',
                'can_view_edit_history',
                'wiki',
                'reviewable_id',
                'reviewable_score_count',
                'reviewable_score_pending_count',
                'post_url',
              ],
            }),
        },
      },
    },
  },
})

export const getTopicsPrivateMessagesUsernameJsonRoute = createRoute({
  method: 'get',
  path: '/topics/private-messages/{username}.json',
  tags: ['Private Messages'],
  summary: 'Get a list of private messages for a user',
  operationId: 'listUserPrivateMessages',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', schema: { type: 'string' }, required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'private messages',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      avatar_template: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              primary_groups: z.array(z.any()).exactOptional(),
              topic_list: z
                .object({
                  can_create_topic: z.boolean().exactOptional(),
                  draft: z.string().nullable().exactOptional(),
                  draft_key: z.string().exactOptional(),
                  draft_sequence: z.int().exactOptional(),
                  per_page: z.int().exactOptional(),
                  topics: z
                    .array(
                      z
                        .object({
                          id: z.int().exactOptional(),
                          title: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          image_url: z.string().nullable().exactOptional(),
                          created_at: z.string().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          archetype: z.string().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          unpinned: z.string().nullable().exactOptional(),
                          visible: z.boolean().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          category_id: z.string().nullable().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          allowed_user_count: z.int().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  extras: z.string().exactOptional(),
                                  description: z.string().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                  primary_group_id: z.int().nullable().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          participants: z
                            .array(
                              z
                                .object({
                                  extras: z.string().exactOptional(),
                                  description: z.string().nullable().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                  primary_group_id: z.int().nullable().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTopicsPrivateMessagesSentUsernameJsonRoute = createRoute({
  method: 'get',
  path: '/topics/private-messages-sent/{username}.json',
  tags: ['Private Messages'],
  summary: 'Get a list of private messages sent for a user',
  operationId: 'getUserSentPrivateMessages',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', schema: { type: 'string' }, required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'private messages',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().nullable().exactOptional(),
                      avatar_template: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              primary_groups: z.array(z.any()).exactOptional(),
              topic_list: z
                .object({
                  can_create_topic: z.boolean().exactOptional(),
                  draft: z.string().nullable().exactOptional(),
                  draft_key: z.string().exactOptional(),
                  draft_sequence: z.int().exactOptional(),
                  per_page: z.int().exactOptional(),
                  topics: z
                    .array(
                      z
                        .object({
                          id: z.int().exactOptional(),
                          title: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          image_url: z.string().nullable().exactOptional(),
                          created_at: z.string().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          archetype: z.string().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          unpinned: z.string().nullable().exactOptional(),
                          visible: z.boolean().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          category_id: z.string().nullable().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          allowed_user_count: z.int().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  extras: z.string().exactOptional(),
                                  description: z.string().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                  primary_group_id: z.int().nullable().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          participants: z.array(z.any()).exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchJsonRoute = createRoute({
  method: 'get',
  path: '/search.json',
  tags: ['Search'],
  summary: 'Search for a term',
  operationId: 'search',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            example:
              'api @blake #support tags:api after:2021-06-04 in:unseen in:open\norder:latest_topic',
            description:
              'The query string needs to be url encoded and is made up of the following options:\n- Search term. This is just a string. Usually it would be the first item in the query.\n- `@<username>`: Use the `@` followed by the username to specify posts by this user.\n- `#<category>`: Use the `#` followed by the category slug to search within this category.\n- `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.\n- `before:`: `yyyy-mm-dd`\n- `after:`: `yyyy-mm-dd`\n- `order:`: `latest`, `likes`, `views`, `latest_topic`\n- `assigned:`: username (without `@`)\n- `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`\n- `with:`: `images`\n- `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved`\n- `group:`: group_name or group_id\n- `group_messages:`: group_name or group_id\n- `min_posts:`: 1\n- `max_posts:`: 10\n- `min_views:`: 1\n- `max_views:`: 10\n\nIf you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:\n\n```\ncurl -i -sS -X GET -G "http://localhost:3000/search.json" \\\n--data-urlencode \'q=wordpress @scossar #fun after:2020-01-01\'\n```\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              posts: z.array(z.any()),
              users: z.array(z.any()),
              categories: z.array(z.any()),
              tags: z.array(
                z
                  .object({ id: z.int(), name: z.string(), slug: z.string() })
                  .openapi({ required: ['id', 'name', 'slug'] }),
              ),
              groups: z.array(z.any()),
              grouped_search_result: z
                .strictObject({
                  more_posts: z.string().nullable(),
                  more_users: z.string().nullable(),
                  more_categories: z.string().nullable(),
                  term: z.string(),
                  search_log_id: z.int(),
                  more_full_page_results: z.string().nullable(),
                  can_create_topic: z.boolean(),
                  error: z.string().nullable(),
                  extra: z
                    .object({ categories: z.array(z.any()).nullable().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  post_ids: z.array(z.any()),
                  user_ids: z.array(z.any()),
                  category_ids: z.array(z.any()),
                  tag_ids: z.array(z.any()),
                  group_ids: z.array(z.any()),
                })
                .openapi({
                  required: [
                    'more_posts',
                    'more_users',
                    'more_categories',
                    'term',
                    'search_log_id',
                    'more_full_page_results',
                    'can_create_topic',
                    'error',
                    'post_ids',
                    'user_ids',
                    'category_ids',
                    'tag_ids',
                    'group_ids',
                  ],
                }),
            })
            .openapi({
              required: ['posts', 'users', 'categories', 'tags', 'groups', 'grouped_search_result'],
            }),
        },
      },
    },
  },
})

export const getSiteJsonRoute = createRoute({
  method: 'get',
  path: '/site.json',
  tags: ['Site', 'Categories'],
  summary: 'Get site info',
  description: 'Can be used to fetch all categories and subcategories',
  operationId: 'getSite',
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              default_archetype: z.string(),
              notification_types: z
                .strictObject({
                  mentioned: z.int(),
                  replied: z.int(),
                  quoted: z.int(),
                  edited: z.int(),
                  liked: z.int(),
                  private_message: z.int(),
                  invited_to_private_message: z.int(),
                  invitee_accepted: z.int(),
                  posted: z.int(),
                  watching_category_or_tag: z.int(),
                  new_features: z.int().exactOptional(),
                  admin_problems: z.int().exactOptional(),
                  moved_post: z.int(),
                  linked: z.int(),
                  granted_badge: z.int(),
                  invited_to_topic: z.int(),
                  custom: z.int(),
                  group_mentioned: z.int(),
                  group_message_summary: z.int(),
                  watching_first_post: z.int(),
                  topic_reminder: z.int(),
                  liked_consolidated: z.int(),
                  linked_consolidated: z.int(),
                  post_approved: z.int(),
                  code_review_commit_approved: z.int(),
                  membership_request_accepted: z.int(),
                  membership_request_consolidated: z.int(),
                  bookmark_reminder: z.int(),
                  reaction: z.int(),
                  votes_released: z.int(),
                  event_reminder: z.int(),
                  event_invitation: z.int(),
                  chat_mention: z.int(),
                  chat_message: z.int(),
                  chat_invitation: z.int(),
                  chat_group_mention: z.int(),
                  chat_quoted: z.int().exactOptional(),
                  chat_watched_thread: z.int().exactOptional(),
                  upcoming_change_available: z.int().exactOptional(),
                  upcoming_change_automatically_promoted: z.int().exactOptional(),
                  assigned: z.int().exactOptional(),
                  question_answer_user_commented: z.int().exactOptional(),
                  following: z.int().exactOptional(),
                  following_created_topic: z.int().exactOptional(),
                  following_replied: z.int().exactOptional(),
                  circles_activity: z.int().exactOptional(),
                  boost: z.int().exactOptional(),
                  suggested_edit_created: z.int().exactOptional(),
                  suggested_edit_accepted: z.int().exactOptional(),
                  live_invitation: z.int().exactOptional(),
                })
                .openapi({
                  required: [
                    'mentioned',
                    'replied',
                    'quoted',
                    'edited',
                    'liked',
                    'private_message',
                    'invited_to_private_message',
                    'invitee_accepted',
                    'posted',
                    'watching_category_or_tag',
                    'moved_post',
                    'linked',
                    'granted_badge',
                    'invited_to_topic',
                    'custom',
                    'group_mentioned',
                    'group_message_summary',
                    'watching_first_post',
                    'topic_reminder',
                    'liked_consolidated',
                    'linked_consolidated',
                    'post_approved',
                    'code_review_commit_approved',
                    'membership_request_accepted',
                    'membership_request_consolidated',
                    'bookmark_reminder',
                    'reaction',
                    'votes_released',
                    'event_reminder',
                    'event_invitation',
                    'chat_mention',
                    'chat_message',
                    'chat_invitation',
                    'chat_group_mention',
                  ],
                }),
              post_types: z
                .strictObject({
                  regular: z.int(),
                  moderator_action: z.int(),
                  small_action: z.int(),
                  whisper: z.int(),
                })
                .openapi({ required: ['regular', 'moderator_action', 'small_action', 'whisper'] }),
              trust_levels: z
                .strictObject({
                  newuser: z.int(),
                  basic: z.int(),
                  member: z.int(),
                  regular: z.int(),
                  leader: z.int(),
                })
                .openapi({ required: ['newuser', 'basic', 'member', 'regular', 'leader'] }),
              user_tips: z
                .strictObject({
                  first_notification: z.int(),
                  topic_timeline: z.int(),
                  post_menu: z.int(),
                  topic_notification_levels: z.int(),
                  suggested_topics: z.int(),
                })
                .exactOptional()
                .openapi({
                  required: [
                    'first_notification',
                    'topic_timeline',
                    'post_menu',
                    'topic_notification_levels',
                    'suggested_topics',
                  ],
                }),
              groups: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    name: z.string(),
                    full_name: z.string().exactOptional(),
                    display_name: z.string().exactOptional(),
                    flair_url: z.string().nullable(),
                    flair_bg_color: z.string().nullable(),
                    flair_color: z.string().nullable(),
                    automatic: z.boolean(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name',
                      'flair_url',
                      'flair_bg_color',
                      'flair_color',
                      'automatic',
                    ],
                  }),
              ),
              filters: z.array(z.any()),
              anonymous_list_filters: z.array(z.any()),
              homepage_choices: z.array(z.any()),
              homepage_options: z.array(
                z
                  .object({ id: z.string(), path: z.string(), server_side: z.boolean() })
                  .openapi({ required: ['id', 'path', 'server_side'] }),
              ),
              periods: z.array(z.any()),
              top_menu_items: z.array(z.any()),
              anonymous_top_menu_items: z.array(z.any()),
              uncategorized_category_id: z.int(),
              user_field_max_length: z.int(),
              post_action_types: z.array(
                z
                  .strictObject({
                    id: z.int().nullable(),
                    name_key: z.string().nullable(),
                    name: z.string(),
                    description: z.string(),
                    short_description: z.string(),
                    is_flag: z.boolean(),
                    require_message: z.boolean(),
                    enabled: z.boolean(),
                    applies_to: z.array(z.any()),
                    is_used: z.boolean(),
                    position: z.int().exactOptional(),
                    auto_action_type: z.boolean(),
                    system: z.boolean().exactOptional(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name_key',
                      'name',
                      'description',
                      'short_description',
                      'is_flag',
                      'require_message',
                      'enabled',
                      'applies_to',
                      'is_used',
                      'auto_action_type',
                    ],
                  }),
              ),
              topic_flag_types: z.array(
                z
                  .strictObject({
                    id: z.int().nullable(),
                    name_key: z.string().nullable(),
                    name: z.string(),
                    description: z.string(),
                    short_description: z.string(),
                    is_flag: z.boolean(),
                    require_message: z.boolean(),
                    enabled: z.boolean(),
                    applies_to: z.array(z.any()),
                    is_used: z.boolean(),
                    position: z.int().exactOptional(),
                    auto_action_type: z.boolean(),
                    system: z.boolean().exactOptional(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name_key',
                      'name',
                      'description',
                      'short_description',
                      'is_flag',
                      'require_message',
                      'enabled',
                      'applies_to',
                      'is_used',
                      'auto_action_type',
                    ],
                  }),
              ),
              can_create_tag: z.boolean(),
              can_search: z.boolean(),
              can_tag_topics: z.boolean(),
              can_tag_pms: z.boolean(),
              tags_filter_regexp: z.string(),
              top_tags: z.array(
                z
                  .object({ id: z.int(), name: z.string(), slug: z.string() })
                  .openapi({ required: ['id', 'name', 'slug'] }),
              ),
              wizard_required: z.boolean().exactOptional(),
              can_associate_groups: z.boolean().exactOptional(),
              email_configured: z.boolean(),
              upcoming_changes_with_css: z.array(z.string()).exactOptional(),
              topic_featured_link_allowed_category_ids: z.array(z.any()),
              user_themes: z.array(
                z
                  .strictObject({
                    theme_id: z.int(),
                    name: z.string(),
                    default: z.boolean(),
                    color_scheme_id: z.int().nullable(),
                    dark_color_scheme_id: z.int().nullable().exactOptional(),
                    only_theme_color_schemes: z.boolean().exactOptional(),
                  })
                  .openapi({ required: ['theme_id', 'name', 'default', 'color_scheme_id'] }),
              ),
              user_color_schemes: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    name: z.string(),
                    is_dark: z.boolean(),
                    theme_id: z.int().nullable().exactOptional(),
                    colors: z.array(z.any()),
                  })
                  .openapi({ required: ['id', 'name', 'is_dark', 'colors'] }),
              ),
              default_light_color_scheme: z.object({}).nullable(),
              default_dark_color_scheme: z.object({}).nullable(),
              censored_regexp: z.array(z.object({})),
              custom_emoji_translation: z.strictObject({}),
              watched_words_replace: z.string().nullable(),
              watched_words_link: z.string().nullable(),
              markdown_additional_options: z.object({}).exactOptional(),
              hashtag_configurations: z.object({}).exactOptional(),
              hashtag_icons: z.object({}).exactOptional(),
              displayed_about_plugin_stat_groups: z.array(z.any()).exactOptional(),
              categories: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    name: z.string(),
                    color: z.string(),
                    text_color: z.string(),
                    style_type: z.string().exactOptional(),
                    emoji: z.string().nullable().exactOptional(),
                    icon: z.string().nullable().exactOptional(),
                    slug: z.string(),
                    topic_count: z.int(),
                    post_count: z.int(),
                    position: z.int(),
                    description: z.string().nullable().exactOptional(),
                    description_text: z.string().nullable().exactOptional(),
                    description_excerpt: z.string().nullable().exactOptional(),
                    topic_url: z.string(),
                    read_restricted: z.boolean(),
                    permission: z.int(),
                    notification_level: z.int(),
                    topic_template: z.string().nullable(),
                    topic_title_placeholder: z.string().nullable(),
                    has_children: z.boolean(),
                    subcategory_count: z.int().nullable(),
                    sort_order: z.string().nullable(),
                    sort_ascending: z.string().nullable(),
                    show_subcategory_list: z.boolean(),
                    num_featured_topics: z.int(),
                    default_view: z.string().nullable(),
                    subcategory_list_style: z.string(),
                    default_top_period: z.string(),
                    default_list_filter: z.string(),
                    minimum_required_tags: z.int(),
                    navigate_to_first_post_after_read: z.boolean(),
                    allow_global_tags: z.boolean(),
                    required_tag_groups: z.array(
                      z.strictObject({ min_count: z.int() }).openapi({ required: ['min_count'] }),
                    ),
                    read_only_banner: z.string().nullable(),
                    uploaded_logo: z.string().nullable(),
                    uploaded_logo_dark: z.string().nullable(),
                    uploaded_background: z.string().nullable(),
                    uploaded_background_dark: z.string().nullable(),
                    can_edit: z.boolean(),
                    custom_fields: z.looseObject({}).nullable().exactOptional(),
                    parent_category_id: z.int().exactOptional(),
                    form_template_ids: z.array(z.any()).exactOptional(),
                    category_types: z.looseObject({}).exactOptional(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name',
                      'color',
                      'text_color',
                      'slug',
                      'topic_count',
                      'post_count',
                      'position',
                      'topic_url',
                      'read_restricted',
                      'permission',
                      'notification_level',
                      'topic_template',
                      'topic_title_placeholder',
                      'has_children',
                      'subcategory_count',
                      'sort_order',
                      'sort_ascending',
                      'show_subcategory_list',
                      'num_featured_topics',
                      'default_view',
                      'subcategory_list_style',
                      'default_top_period',
                      'default_list_filter',
                      'minimum_required_tags',
                      'navigate_to_first_post_after_read',
                      'allow_global_tags',
                      'required_tag_groups',
                      'read_only_banner',
                      'uploaded_logo',
                      'uploaded_logo_dark',
                      'uploaded_background',
                      'uploaded_background_dark',
                      'can_edit',
                    ],
                  }),
              ),
              archetypes: z.array(
                z
                  .strictObject({ id: z.string(), name: z.string(), options: z.array(z.any()) })
                  .openapi({ required: ['id', 'name', 'options'] }),
              ),
              user_fields: z.array(z.any()),
              auth_providers: z.array(z.any()),
              whispers_allowed_groups_names: z.array(z.any()).exactOptional(),
              denied_emojis: z.array(z.any()).exactOptional(),
              valid_flag_applies_to_types: z.array(z.any()).exactOptional(),
              navigation_menu_site_top_tags: z.array(z.any()).exactOptional(),
              full_name_required_for_signup: z.boolean(),
              full_name_visible_in_signup: z.boolean(),
              admin_config_login_routes: z.array(z.any()).exactOptional(),
              access_control: z
                .strictObject({ mandatory_acl: z.looseObject({}), banned_acl: z.looseObject({}) })
                .exactOptional()
                .openapi({ required: ['mandatory_acl', 'banned_acl'] }),
              permanent_upcoming_change_names: z.array(z.string()).exactOptional(),
              category_types: z
                .array(
                  z
                    .strictObject({
                      id: z.string(),
                      name: z.string(),
                      title: z.string(),
                      description: z.string(),
                      icon: z.string(),
                      available: z.boolean(),
                      visible: z.boolean(),
                      configuration_schema: z.looseObject({}),
                    })
                    .openapi({
                      required: [
                        'id',
                        'name',
                        'title',
                        'description',
                        'icon',
                        'available',
                        'visible',
                        'configuration_schema',
                      ],
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              required: [
                'default_archetype',
                'notification_types',
                'post_types',
                'trust_levels',
                'groups',
                'filters',
                'anonymous_list_filters',
                'homepage_choices',
                'homepage_options',
                'periods',
                'top_menu_items',
                'anonymous_top_menu_items',
                'uncategorized_category_id',
                'user_field_max_length',
                'post_action_types',
                'topic_flag_types',
                'can_create_tag',
                'can_search',
                'can_tag_topics',
                'can_tag_pms',
                'tags_filter_regexp',
                'top_tags',
                'topic_featured_link_allowed_category_ids',
                'user_themes',
                'user_color_schemes',
                'default_light_color_scheme',
                'default_dark_color_scheme',
                'censored_regexp',
                'custom_emoji_translation',
                'watched_words_replace',
                'watched_words_link',
                'categories',
                'archetypes',
                'user_fields',
                'auth_providers',
                'full_name_required_for_signup',
                'full_name_visible_in_signup',
                'email_configured',
              ],
            }),
        },
      },
    },
  },
})

export const getSiteBasicInfoJsonRoute = createRoute({
  method: 'get',
  path: '/site/basic-info.json',
  tags: ['Site'],
  summary: 'Get site basic info',
  description: 'Can be used to fetch basic info about a site',
  operationId: 'getSiteBasicInfo',
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              logo_url: z.string(),
              logo_small_url: z.string(),
              apple_touch_icon_url: z.string(),
              favicon_url: z.string(),
              title: z.string(),
              description: z.string(),
              header_primary_color: z.string(),
              header_background_color: z.string(),
              login_required: z.boolean(),
              locale: z.string(),
              include_in_discourse_discover: z.boolean(),
              mobile_logo_url: z.string(),
            })
            .openapi({
              required: [
                'logo_url',
                'logo_small_url',
                'apple_touch_icon_url',
                'favicon_url',
                'title',
                'description',
                'header_primary_color',
                'header_background_color',
                'login_required',
                'locale',
                'include_in_discourse_discover',
                'mobile_logo_url',
              ],
            }),
        },
      },
    },
  },
})

export const getTagGroupsJsonRoute = createRoute({
  method: 'get',
  path: '/tag_groups.json',
  tags: ['Tags'],
  summary: 'Get a list of tag groups',
  operationId: 'listTagGroups',
  responses: {
    200: {
      description: 'tags',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              tag_groups: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    name: z.string(),
                    tags: z.array(
                      z
                        .strictObject({ id: z.int(), name: z.string(), slug: z.string() })
                        .openapi({ required: ['id', 'name', 'slug'] }),
                    ),
                    parent_tag: z.array(
                      z
                        .strictObject({ id: z.int(), name: z.string(), slug: z.string() })
                        .openapi({ required: ['id', 'name', 'slug'] }),
                    ),
                    one_per_topic: z.boolean(),
                    permissions: z.record(z.string(), z.int()),
                  })
                  .openapi({
                    required: ['id', 'name', 'tags', 'parent_tag', 'one_per_topic', 'permissions'],
                  }),
              ),
            })
            .openapi({ required: ['tag_groups'] }),
        },
      },
    },
  },
})

export const postTagGroupsJsonRoute = createRoute({
  method: 'post',
  path: '/tag_groups.json',
  tags: ['Tags'],
  summary: 'Creates a tag group',
  operationId: 'createTagGroup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ name: z.string() }).openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'tag group created',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              tag_group: z
                .object({
                  id: z.int(),
                  name: z.string(),
                  tags: z.array(
                    z
                      .object({ id: z.int(), name: z.string(), slug: z.string() })
                      .openapi({ required: ['id', 'name', 'slug'] }),
                  ),
                  parent_tag: z.array(
                    z
                      .object({ id: z.int(), name: z.string(), slug: z.string() })
                      .openapi({ required: ['id', 'name', 'slug'] }),
                  ),
                  one_per_topic: z.boolean(),
                  permissions: z.object({}),
                })
                .openapi({
                  required: ['id', 'name', 'tags', 'parent_tag', 'one_per_topic', 'permissions'],
                }),
            })
            .openapi({ required: ['tag_group'] }),
        },
      },
    },
  },
})

export const getTagGroupsIdJsonRoute = createRoute({
  method: 'get',
  path: '/tag_groups/{id}.json',
  tags: ['Tags'],
  summary: 'Get a single tag group',
  operationId: 'getTagGroup',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'notifications',
      content: {
        'application/json': {
          schema: z
            .object({
              tag_group: z
                .object({
                  id: z.int().exactOptional(),
                  name: z.string().exactOptional(),
                  tag_names: z.array(z.any()).exactOptional(),
                  parent_tag_name: z.array(z.any()).exactOptional(),
                  one_per_topic: z.boolean().exactOptional(),
                  permissions: z
                    .object({ everyone: z.int().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putTagGroupsIdJsonRoute = createRoute({
  method: 'put',
  path: '/tag_groups/{id}.json',
  tags: ['Tags'],
  summary: 'Update tag group',
  operationId: 'updateTagGroup',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ name: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Tag group updated',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.string().exactOptional(),
              tag_group: z
                .object({
                  id: z.int().exactOptional(),
                  name: z.string().exactOptional(),
                  tag_names: z.array(z.any()).exactOptional(),
                  parent_tag_name: z.array(z.any()).exactOptional(),
                  one_per_topic: z.boolean().exactOptional(),
                  permissions: z
                    .object({ everyone: z.int().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTagsJsonRoute = createRoute({
  method: 'get',
  path: '/tags.json',
  tags: ['Tags'],
  summary: 'Get a list of tags',
  operationId: 'listTags',
  responses: {
    200: {
      description: 'notifications',
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      text: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      count: z.int().exactOptional(),
                      pm_count: z.int().exactOptional(),
                      target_tag: z.string().nullable().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              extras: z
                .object({ categories: z.array(z.any()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTagNameJsonRoute = createRoute({
  method: 'get',
  path: '/tag/{name}.json',
  tags: ['Tags'],
  summary: 'Get a specific tag',
  operationId: 'getTag',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', schema: { type: 'string' }, required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'notifications',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().nullable().exactOptional(),
                      avatar_template: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              primary_groups: z.array(z.any()).exactOptional(),
              topic_list: z
                .object({
                  can_create_topic: z.boolean().exactOptional(),
                  draft: z.string().nullable().exactOptional(),
                  draft_key: z.string().exactOptional(),
                  draft_sequence: z.int().exactOptional(),
                  per_page: z.int().exactOptional(),
                  tags: z
                    .array(
                      z
                        .object({
                          id: z.int().exactOptional(),
                          name: z.string().exactOptional(),
                          topic_count: z.int().exactOptional(),
                          staff: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  topics: z
                    .array(
                      z
                        .object({
                          id: z.int().exactOptional(),
                          title: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          image_url: z.string().nullable().exactOptional(),
                          created_at: z.string().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          archetype: z.string().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          unpinned: z.string().nullable().exactOptional(),
                          visible: z.boolean().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          tags: z.array(z.any()).exactOptional(),
                          views: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          category_id: z.int().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  extras: z.string().exactOptional(),
                                  description: z.string().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                  primary_group_id: z.int().nullable().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTIdPostsJsonRoute = createRoute({
  method: 'get',
  path: '/t/{id}/posts.json',
  tags: ['Topics'],
  summary: 'Get specific posts from a topic',
  operationId: 'getSpecificPostsFromTopic',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ 'post_ids[]': z.int() }).openapi({ required: ['post_ids[]'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'specific posts',
      content: {
        'application/json': {
          schema: z
            .object({
              post_stream: z
                .object({
                  posts: z
                    .array(
                      z
                        .object({
                          id: z.int().exactOptional(),
                          name: z.string().nullable().exactOptional(),
                          username: z.string().exactOptional(),
                          avatar_template: z.string().exactOptional(),
                          created_at: z.string().exactOptional(),
                          cooked: z.string().exactOptional(),
                          post_number: z.int().exactOptional(),
                          post_type: z.int().exactOptional(),
                          updated_at: z.string().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          reply_to_post_number: z.string().nullable().exactOptional(),
                          quote_count: z.int().exactOptional(),
                          incoming_link_count: z.int().exactOptional(),
                          reads: z.int().exactOptional(),
                          readers_count: z.int().exactOptional(),
                          score: z.number().exactOptional(),
                          yours: z.boolean().exactOptional(),
                          topic_id: z.int().exactOptional(),
                          topic_slug: z.string().exactOptional(),
                          display_username: z.string().nullable().exactOptional(),
                          primary_group_name: z.string().nullable().exactOptional(),
                          flair_name: z.string().nullable().exactOptional(),
                          flair_url: z.string().nullable().exactOptional(),
                          flair_bg_color: z.string().nullable().exactOptional(),
                          flair_color: z.string().nullable().exactOptional(),
                          version: z.int().exactOptional(),
                          can_edit: z.boolean().exactOptional(),
                          can_delete: z.boolean().exactOptional(),
                          can_recover: z.boolean().exactOptional(),
                          can_wiki: z.boolean().exactOptional(),
                          read: z.boolean().exactOptional(),
                          user_title: z.string().nullable().exactOptional(),
                          actions_summary: z
                            .array(
                              z
                                .object({
                                  id: z.int().exactOptional(),
                                  can_act: z.boolean().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          moderator: z.boolean().exactOptional(),
                          admin: z.boolean().exactOptional(),
                          staff: z.boolean().exactOptional(),
                          user_id: z.int().exactOptional(),
                          hidden: z.boolean().exactOptional(),
                          trust_level: z.int().exactOptional(),
                          deleted_at: z.string().nullable().exactOptional(),
                          user_deleted: z.boolean().exactOptional(),
                          edit_reason: z.string().nullable().exactOptional(),
                          can_view_edit_history: z.boolean().exactOptional(),
                          wiki: z.boolean().exactOptional(),
                          reviewable_id: z.int().exactOptional(),
                          reviewable_score_count: z.int().exactOptional(),
                          reviewable_score_pending_count: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTIdJsonRoute = createRoute({
  method: 'get',
  path: '/t/{id}.json',
  tags: ['Topics'],
  summary: 'Get a single topic',
  operationId: 'getTopic',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'specific posts',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              post_stream: z
                .strictObject({
                  posts: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        name: z.string(),
                        username: z.string(),
                        avatar_template: z.string(),
                        created_at: z.string(),
                        cooked: z.string(),
                        post_number: z.int(),
                        post_type: z.int(),
                        updated_at: z.string(),
                        reply_count: z.int(),
                        reply_to_post_number: z.string().nullable(),
                        quote_count: z.int(),
                        incoming_link_count: z.int(),
                        reads: z.int(),
                        readers_count: z.int(),
                        score: z.number(),
                        yours: z.boolean(),
                        topic_id: z.int(),
                        topic_slug: z.string(),
                        display_username: z.string(),
                        primary_group_name: z.string().nullable(),
                        flair_name: z.string().nullable(),
                        flair_url: z.string().nullable(),
                        flair_bg_color: z.string().nullable(),
                        flair_color: z.string().nullable(),
                        version: z.int(),
                        can_edit: z.boolean(),
                        can_delete: z.boolean(),
                        can_recover: z.boolean(),
                        can_see_hidden_post: z.boolean().exactOptional(),
                        can_wiki: z.boolean(),
                        link_counts: z.array(
                          z
                            .strictObject({
                              url: z.string(),
                              internal: z.boolean(),
                              reflection: z.boolean(),
                              title: z.string(),
                              clicks: z.int(),
                            })
                            .openapi({
                              required: ['url', 'internal', 'reflection', 'title', 'clicks'],
                            }),
                        ),
                        read: z.boolean(),
                        user_title: z.string().nullable(),
                        bookmarked: z.boolean(),
                        actions_summary: z.array(
                          z
                            .strictObject({ id: z.int(), can_act: z.boolean() })
                            .openapi({ required: ['id', 'can_act'] }),
                        ),
                        moderator: z.boolean(),
                        admin: z.boolean(),
                        staff: z.boolean(),
                        user_id: z.int(),
                        hidden: z.boolean(),
                        trust_level: z.int(),
                        deleted_at: z.string().nullable(),
                        user_deleted: z.boolean(),
                        edit_reason: z.string().nullable(),
                        can_view_edit_history: z.boolean(),
                        wiki: z.boolean(),
                        reviewable_id: z.int(),
                        reviewable_score_count: z.int(),
                        reviewable_score_pending_count: z.int(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'name',
                          'username',
                          'avatar_template',
                          'created_at',
                          'cooked',
                          'post_number',
                          'post_type',
                          'updated_at',
                          'reply_count',
                          'reply_to_post_number',
                          'quote_count',
                          'incoming_link_count',
                          'reads',
                          'readers_count',
                          'score',
                          'yours',
                          'topic_id',
                          'topic_slug',
                          'display_username',
                          'primary_group_name',
                          'flair_name',
                          'flair_url',
                          'flair_bg_color',
                          'flair_color',
                          'version',
                          'can_edit',
                          'can_delete',
                          'can_recover',
                          'can_wiki',
                          'link_counts',
                          'read',
                          'user_title',
                          'bookmarked',
                          'actions_summary',
                          'moderator',
                          'admin',
                          'staff',
                          'user_id',
                          'hidden',
                          'trust_level',
                          'deleted_at',
                          'user_deleted',
                          'edit_reason',
                          'can_view_edit_history',
                          'wiki',
                          'reviewable_id',
                          'reviewable_score_count',
                          'reviewable_score_pending_count',
                        ],
                      }),
                  ),
                  stream: z.array(z.any()),
                })
                .openapi({ required: ['posts', 'stream'] }),
              timeline_lookup: z.array(z.any()),
              suggested_topics: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    title: z.string(),
                    fancy_title: z.string(),
                    slug: z.string(),
                    posts_count: z.int(),
                    reply_count: z.int(),
                    highest_post_number: z.int(),
                    image_url: z.string().nullable(),
                    created_at: z.string(),
                    last_posted_at: z.string().nullable(),
                    bumped: z.boolean(),
                    bumped_at: z.string(),
                    archetype: z.string(),
                    unseen: z.boolean(),
                    pinned: z.boolean(),
                    unpinned: z.string().nullable(),
                    excerpt: z.string(),
                    visible: z.boolean(),
                    closed: z.boolean(),
                    archived: z.boolean(),
                    bookmarked: z.string().nullable(),
                    liked: z.string().nullable(),
                    tags: z.array(
                      z
                        .object({ id: z.int(), name: z.string(), slug: z.string() })
                        .openapi({ required: ['id', 'name', 'slug'] }),
                    ),
                    tags_descriptions: z.strictObject({}),
                    like_count: z.int(),
                    views: z.int(),
                    category_id: z.int(),
                    featured_link: z.string().nullable(),
                    posters: z.array(
                      z
                        .strictObject({
                          extras: z.string(),
                          description: z.string(),
                          user: z
                            .strictObject({
                              id: z.int(),
                              username: z.string(),
                              name: z.string(),
                              avatar_template: z.string(),
                            })
                            .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                        })
                        .openapi({ required: ['extras', 'description', 'user'] }),
                    ),
                  })
                  .openapi({
                    required: [
                      'id',
                      'title',
                      'fancy_title',
                      'slug',
                      'posts_count',
                      'reply_count',
                      'highest_post_number',
                      'image_url',
                      'created_at',
                      'last_posted_at',
                      'bumped',
                      'bumped_at',
                      'archetype',
                      'unseen',
                      'pinned',
                      'unpinned',
                      'excerpt',
                      'visible',
                      'closed',
                      'archived',
                      'bookmarked',
                      'liked',
                      'tags',
                      'tags_descriptions',
                      'like_count',
                      'views',
                      'category_id',
                      'featured_link',
                      'posters',
                    ],
                  }),
              ),
              tags: z.array(
                z
                  .object({ id: z.int(), name: z.string(), slug: z.string() })
                  .openapi({ required: ['id', 'name', 'slug'] }),
              ),
              tags_descriptions: z.strictObject({}),
              id: z.int(),
              title: z.string(),
              fancy_title: z.string(),
              posts_count: z.int(),
              created_at: z.string(),
              views: z.int(),
              reply_count: z.int(),
              like_count: z.int(),
              last_posted_at: z.string().nullable(),
              visible: z.boolean(),
              closed: z.boolean(),
              archived: z.boolean(),
              has_summary: z.boolean(),
              archetype: z.string(),
              slug: z.string(),
              category_id: z.int(),
              word_count: z.int().nullable(),
              deleted_at: z.string().nullable(),
              user_id: z.int(),
              featured_link: z.string().nullable(),
              pinned_globally: z.boolean(),
              pinned_at: z.string().nullable(),
              pinned_until: z.string().nullable(),
              image_url: z.string().nullable(),
              slow_mode_seconds: z.int(),
              draft: z.string().nullable(),
              draft_key: z.string(),
              draft_sequence: z.int(),
              unpinned: z.string().nullable(),
              pinned: z.boolean(),
              current_post_number: z.int().exactOptional(),
              highest_post_number: z.int().nullable(),
              deleted_by: z.string().nullable(),
              has_deleted: z.boolean(),
              actions_summary: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    count: z.int(),
                    hidden: z.boolean(),
                    can_act: z.boolean(),
                  })
                  .openapi({ required: ['id', 'count', 'hidden', 'can_act'] }),
              ),
              chunk_size: z.int(),
              bookmarked: z.boolean(),
              bookmarks: z.array(z.any()),
              topic_timer: z.string().nullable(),
              message_bus_last_id: z.int(),
              participant_count: z.int(),
              show_read_indicator: z.boolean(),
              thumbnails: z.string().nullable(),
              slow_mode_enabled_until: z.string().nullable(),
              details: z
                .strictObject({
                  can_edit: z.boolean(),
                  notification_level: z.int(),
                  can_move_posts: z.boolean(),
                  can_delete: z.boolean(),
                  can_remove_allowed_users: z.boolean(),
                  can_create_post: z.boolean(),
                  can_reply_as_new_topic: z.boolean(),
                  can_invite_to: z.boolean().exactOptional(),
                  can_invite_via_email: z.boolean().exactOptional(),
                  can_flag_topic: z.boolean().exactOptional(),
                  can_convert_topic: z.boolean(),
                  can_review_topic: z.boolean(),
                  can_close_topic: z.boolean(),
                  can_archive_topic: z.boolean(),
                  can_split_merge_topic: z.boolean(),
                  can_edit_staff_notes: z.boolean(),
                  can_toggle_topic_visibility: z.boolean(),
                  can_pin_unpin_topic: z.boolean(),
                  can_banner_topic: z.boolean().exactOptional(),
                  can_moderate_category: z.boolean(),
                  can_remove_self_id: z.int(),
                  participants: z
                    .array(
                      z
                        .strictObject({
                          id: z.int(),
                          username: z.string(),
                          name: z.string(),
                          avatar_template: z.string(),
                          post_count: z.int(),
                          primary_group_name: z.string().nullable(),
                          flair_name: z.string().nullable(),
                          flair_url: z.string().nullable(),
                          flair_color: z.string().nullable(),
                          flair_bg_color: z.string().nullable(),
                          flair_group_id: z.int().nullable().exactOptional(),
                          admin: z.boolean(),
                          moderator: z.boolean(),
                          trust_level: z.int(),
                        })
                        .openapi({
                          required: [
                            'id',
                            'username',
                            'name',
                            'avatar_template',
                            'post_count',
                            'primary_group_name',
                            'flair_name',
                            'flair_url',
                            'flair_color',
                            'flair_bg_color',
                            'admin',
                            'moderator',
                            'trust_level',
                          ],
                        }),
                    )
                    .exactOptional(),
                  created_by: z
                    .strictObject({
                      id: z.int(),
                      username: z.string(),
                      name: z.string(),
                      avatar_template: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                  last_poster: z
                    .strictObject({
                      id: z.int(),
                      username: z.string(),
                      name: z.string(),
                      avatar_template: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                })
                .openapi({
                  required: [
                    'can_edit',
                    'notification_level',
                    'can_move_posts',
                    'can_delete',
                    'can_remove_allowed_users',
                    'can_create_post',
                    'can_reply_as_new_topic',
                    'can_convert_topic',
                    'can_review_topic',
                    'can_close_topic',
                    'can_archive_topic',
                    'can_split_merge_topic',
                    'can_edit_staff_notes',
                    'can_toggle_topic_visibility',
                    'can_pin_unpin_topic',
                    'can_moderate_category',
                    'can_remove_self_id',
                    'created_by',
                    'last_poster',
                  ],
                }),
            })
            .openapi({
              required: [
                'post_stream',
                'timeline_lookup',
                'suggested_topics',
                'tags',
                'tags_descriptions',
                'id',
                'title',
                'fancy_title',
                'posts_count',
                'created_at',
                'views',
                'reply_count',
                'like_count',
                'last_posted_at',
                'visible',
                'closed',
                'archived',
                'has_summary',
                'archetype',
                'slug',
                'category_id',
                'word_count',
                'deleted_at',
                'user_id',
                'featured_link',
                'pinned_globally',
                'pinned_at',
                'pinned_until',
                'image_url',
                'slow_mode_seconds',
                'draft',
                'draft_key',
                'draft_sequence',
                'unpinned',
                'pinned',
                'highest_post_number',
                'deleted_by',
                'has_deleted',
                'actions_summary',
                'chunk_size',
                'bookmarked',
                'bookmarks',
                'topic_timer',
                'message_bus_last_id',
                'participant_count',
                'show_read_indicator',
                'thumbnails',
                'slow_mode_enabled_until',
                'details',
              ],
            }),
        },
      },
    },
  },
})

export const deleteTIdJsonRoute = createRoute({
  method: 'delete',
  path: '/t/{id}.json',
  tags: ['Topics'],
  summary: 'Remove a topic',
  operationId: 'removeTopic',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: { 200: { description: 'specific posts' } },
})

export const putTDashIdJsonRoute = createRoute({
  method: 'put',
  path: '/t/-/{id}.json',
  tags: ['Topics'],
  summary: 'Update a topic',
  operationId: 'updateTopic',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              topic: z
                .object({ title: z.string().exactOptional(), category_id: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'topic updated',
      content: {
        'application/json': {
          schema: z
            .object({
              basic_topic: z
                .object({
                  id: z.int().exactOptional(),
                  title: z.string().exactOptional(),
                  fancy_title: z.string().exactOptional(),
                  slug: z.string().exactOptional(),
                  posts_count: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postTIdInviteJsonRoute = createRoute({
  method: 'post',
  path: '/t/{id}/invite.json',
  tags: ['Topics', 'Invites'],
  summary: 'Invite to topic',
  operationId: 'inviteToTopic',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ user: z.string().exactOptional(), email: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'topic updated',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  id: z.int().exactOptional(),
                  username: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  avatar_template: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postTIdInviteGroupJsonRoute = createRoute({
  method: 'post',
  path: '/t/{id}/invite-group.json',
  tags: ['Topics', 'Invites'],
  summary: 'Invite group to topic',
  operationId: 'inviteGroupToTopic',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              group: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the group to invite' }),
              should_notify: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether to notify the group, it defaults to true' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'invites to a PM',
      content: {
        'application/json': {
          schema: z
            .object({
              group: z
                .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putTIdBookmarkJsonRoute = createRoute({
  method: 'put',
  path: '/t/{id}/bookmark.json',
  tags: ['Topics'],
  summary: 'Bookmark topic',
  operationId: 'bookmarkTopic',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: { 200: { description: 'topic updated' } },
})

export const putTIdStatusJsonRoute = createRoute({
  method: 'put',
  path: '/t/{id}/status.json',
  tags: ['Topics'],
  summary: 'Update the status of a topic',
  operationId: 'updateTopicStatus',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.enum(['closed', 'pinned', 'pinned_globally', 'archived', 'visible']),
              enabled: z.enum(['true', 'false']),
              until: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Only required for `pinned` and `pinned_globally`',
                  example: '2030-12-31',
                }),
            })
            .openapi({ required: ['status', 'enabled'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'topic updated',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.string().exactOptional().openapi({ example: 'OK' }),
              topic_status_update: z.string().nullable().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getLatestJsonRoute = createRoute({
  method: 'get',
  path: '/latest.json',
  tags: ['Topics'],
  summary: 'Get the latest topics',
  operationId: 'listLatestTopics',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            description:
              'Enum: `default`, `created`, `activity`, `views`, `posts`, `category`,\n`likes`, `op_likes`, `posters`',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ascending: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ascending',
            in: 'query',
            description: 'Defaults to `desc`, add `ascending=true` to sort asc',
            schema: { type: 'string' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'per_page',
            in: 'query',
            description: 'Maximum number of topics returned, between 1-100',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'topic updated',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().nullable().exactOptional(),
                      avatar_template: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              primary_groups: z.array(z.any()).exactOptional(),
              topic_list: z
                .object({
                  can_create_topic: z.boolean().exactOptional(),
                  draft: z.string().nullable().exactOptional(),
                  draft_key: z.string().exactOptional(),
                  draft_sequence: z.int().exactOptional(),
                  per_page: z.int().exactOptional(),
                  topics: z
                    .array(
                      z
                        .object({
                          id: z.int().exactOptional(),
                          title: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          image_url: z.string().exactOptional(),
                          created_at: z.string().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          archetype: z.string().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          unpinned: z.string().nullable().exactOptional(),
                          visible: z.boolean().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          category_id: z.int().exactOptional(),
                          op_like_count: z.int().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  extras: z.string().exactOptional(),
                                  description: z.string().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                  primary_group_id: z.int().nullable().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTopJsonRoute = createRoute({
  method: 'get',
  path: '/top.json',
  tags: ['Topics'],
  summary: 'Get the top topics filtered by period',
  operationId: 'listTopTopics',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'period',
            in: 'query',
            description: 'Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`',
            schema: { type: 'string' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'per_page',
            in: 'query',
            description: 'Maximum number of topics returned, between 1-100',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      avatar_template: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              primary_groups: z.array(z.any()).exactOptional(),
              topic_list: z
                .object({
                  can_create_topic: z.boolean().exactOptional(),
                  draft: z.string().nullable().exactOptional(),
                  draft_key: z.string().exactOptional(),
                  draft_sequence: z.int().exactOptional(),
                  for_period: z.string().exactOptional(),
                  per_page: z.int().exactOptional(),
                  topics: z
                    .array(
                      z
                        .object({
                          id: z.int().exactOptional(),
                          title: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          image_url: z.string().nullable().exactOptional(),
                          created_at: z.string().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          archetype: z.string().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          unpinned: z.boolean().exactOptional(),
                          visible: z.boolean().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          category_id: z.int().exactOptional(),
                          op_like_count: z.int().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  extras: z.string().nullable().exactOptional(),
                                  description: z.string().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                  primary_group_id: z.int().nullable().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postTIdNotificationsJsonRoute = createRoute({
  method: 'post',
  path: '/t/{id}/notifications.json',
  tags: ['Topics'],
  summary: 'Set notification level',
  operationId: 'setNotificationLevel',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ notification_level: z.enum(['0', '1', '2', '3']) })
            .openapi({ required: ['notification_level'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'topic updated',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.string().exactOptional().openapi({ example: 'OK' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putTIdChangeTimestampJsonRoute = createRoute({
  method: 'put',
  path: '/t/{id}/change-timestamp.json',
  tags: ['Topics'],
  summary: 'Update topic timestamp',
  operationId: 'updateTopicTimestamp',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ timestamp: z.string().openapi({ example: '1594291380' }) })
            .openapi({ required: ['timestamp'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'topic updated',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.string().exactOptional().openapi({ example: 'OK' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postTIdTimerJsonRoute = createRoute({
  method: 'post',
  path: '/t/{id}/timer.json',
  tags: ['Topics'],
  summary: 'Create topic timer',
  operationId: 'createTopicTimer',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              time: z.string().exactOptional().openapi({ example: '' }),
              status_type: z.string().exactOptional(),
              based_on_last_post: z.boolean().exactOptional(),
              category_id: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'topic updated',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.string().exactOptional().openapi({ example: 'OK' }),
              execute_at: z.string().exactOptional(),
              duration: z.string().nullable().exactOptional(),
              based_on_last_post: z.boolean().exactOptional(),
              closed: z.boolean().exactOptional(),
              category_id: z.int().nullable().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTExternalIdExternalIdJsonRoute = createRoute({
  method: 'get',
  path: '/t/external_id/{external_id}.json',
  tags: ['Topics'],
  summary: 'Get topic by external_id',
  operationId: 'getTopicByExternalId',
  request: {
    params: z.object({
      external_id: z
        .string()
        .openapi({
          param: { name: 'external_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 301: { description: 'redirects to /t/{topic_id}.json' } },
})

export const postUploadsJsonRoute = createRoute({
  method: 'post',
  path: '/uploads.json',
  tags: ['Uploads'],
  summary: 'Creates an upload',
  operationId: 'createUpload',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .strictObject({
              upload_type: z.enum([
                'avatar',
                'profile_background',
                'card_background',
                'custom_emoji',
                'composer',
              ]),
              user_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: 'required if uploading an avatar' }),
              synchronous: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Use this flag to return an id and url' }),
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: ['upload_type'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'file uploaded',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.int(),
              url: z.string(),
              original_filename: z.string(),
              filesize: z.int(),
              width: z.int(),
              height: z.int(),
              thumbnail_width: z.int(),
              thumbnail_height: z.int(),
              extension: z.string(),
              short_url: z.string(),
              short_path: z.string(),
              retain_hours: z.string().nullable(),
              human_filesize: z.string(),
              dominant_color: z.string().nullable().exactOptional(),
              thumbnail: z
                .strictObject({
                  id: z.int().exactOptional(),
                  upload_id: z.int().exactOptional(),
                  url: z.string().exactOptional(),
                  extension: z.string().exactOptional(),
                  width: z.int().exactOptional(),
                  height: z.int().exactOptional(),
                  filesize: z.int().exactOptional(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: [] }),
              optimized_video: z
                .strictObject({
                  id: z.int().exactOptional(),
                  upload_id: z.int().exactOptional(),
                  url: z.string().exactOptional(),
                  extension: z.string().exactOptional(),
                  filesize: z.int().exactOptional(),
                  sha1: z.string().exactOptional(),
                  original_filename: z.string().exactOptional(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              required: [
                'id',
                'url',
                'original_filename',
                'filesize',
                'width',
                'height',
                'thumbnail_width',
                'thumbnail_height',
                'extension',
                'short_url',
                'short_path',
                'retain_hours',
                'human_filesize',
              ],
            }),
        },
      },
    },
  },
})

export const postUploadsGeneratePresignedPutJsonRoute = createRoute({
  method: 'post',
  path: '/uploads/generate-presigned-put.json',
  tags: ['Uploads'],
  summary: 'Initiates a direct external upload',
  description:
    'Direct external uploads bypass the usual method of creating uploads\nvia the POST /uploads route, and upload directly to an external provider,\nwhich by default is S3. This route begins the process, and will return\na unique identifier for the external upload as well as a presigned URL\nwhich is where the file binary blob should be uploaded to.\n\nOnce the upload is complete to the external service, you must call the\nPOST /complete-external-upload route using the unique identifier returned\nby this route, which will create any required Upload record in the Discourse\ndatabase and also move file from its temporary location to the final\ndestination in the external storage service.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n',
  operationId: 'generatePresignedPut',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              type: z.enum([
                'avatar',
                'profile_background',
                'card_background',
                'custom_emoji',
                'composer',
              ]),
              file_name: z.string().openapi({ example: 'IMG_2021.jpeg' }),
              file_size: z
                .int()
                .openapi({
                  description: 'File size should be represented in bytes.',
                  example: 4096,
                }),
              metadata: z
                .strictObject({
                  'sha1-checksum': z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The SHA1 checksum of the upload binary blob. Optionally\nbe provided and serves as an additional security check when\nlater processing the file in complete-external-upload endpoint.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['type', 'file_name', 'file_size'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'external upload initialized',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              key: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The path of the temporary file on the external storage\nservice.',
                  example: 'temp/site/uploads/default/12345/67890.jpg',
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A presigned PUT URL which must be used to upload\nthe file binary blob to.',
                  example:
                    'https://file-uploads.s3.us-west-2.amazonaws.com/temp/site/uploads/default/123/456.jpg?x-amz-acl=private&x-amz-meta-sha1-checksum=sha1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AAAAus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211221T011246Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=12345678',
                }),
              signed_headers: z
                .object({})
                .exactOptional()
                .openapi({
                  description: 'A map of headers that must be sent with the PUT request.',
                  example: { 'x-amz-acl': 'private', 'x-amz-meta-sha1-checksum': 'sha1' },
                }),
              unique_identifier: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique string that identifies the external upload.\nThis must be stored and then sent in the /complete-external-upload\nendpoint to complete the direct upload.',
                  example: '66e86218-80d9-4bda-b4d5-2b6def968705',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postUploadsCompleteExternalUploadJsonRoute = createRoute({
  method: 'post',
  path: '/uploads/complete-external-upload.json',
  tags: ['Uploads'],
  summary: 'Completes a direct external upload',
  description:
    'Completes an external upload initialized with /get-presigned-put. The\nfile will be moved from its temporary location in external storage to\na final destination in the S3 bucket. An Upload record will also be\ncreated in the database in most cases.\n\nIf a sha1-checksum was provided in the initial request it will also\nbe compared with the uploaded file in storage to make sure the same\nfile was uploaded. The file size will be compared for the same reason.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n',
  operationId: 'completeExternalUpload',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              unique_identifier: z
                .string()
                .openapi({
                  example: '66e86218-80d9-4bda-b4d5-2b6def968705',
                  description:
                    'The unique identifier returned in the original /generate-presigned-put\nrequest.',
                }),
              for_private_message: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'true',
                  description:
                    'Optionally set this to true if the upload is for a\nprivate message.',
                }),
              for_site_setting: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'true',
                  description: 'Optionally set this to true if the upload is for a\nsite setting.',
                }),
              pasted: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'true',
                  description:
                    'Optionally set this to true if the upload was pasted\ninto the upload area. This will convert PNG files to JPEG.',
                }),
            })
            .openapi({ required: ['unique_identifier'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'external upload initialized',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.int(),
              url: z.string(),
              original_filename: z.string(),
              filesize: z.int(),
              width: z.int(),
              height: z.int(),
              thumbnail_width: z.int(),
              thumbnail_height: z.int(),
              extension: z.string(),
              short_url: z.string(),
              short_path: z.string(),
              retain_hours: z.string().nullable(),
              human_filesize: z.string(),
              dominant_color: z.string().nullable().exactOptional(),
              thumbnail: z
                .strictObject({
                  id: z.int().exactOptional(),
                  upload_id: z.int().exactOptional(),
                  url: z.string().exactOptional(),
                  extension: z.string().exactOptional(),
                  width: z.int().exactOptional(),
                  height: z.int().exactOptional(),
                  filesize: z.int().exactOptional(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: [] }),
              optimized_video: z
                .strictObject({
                  id: z.int().exactOptional(),
                  upload_id: z.int().exactOptional(),
                  url: z.string().exactOptional(),
                  extension: z.string().exactOptional(),
                  filesize: z.int().exactOptional(),
                  sha1: z.string().exactOptional(),
                  original_filename: z.string().exactOptional(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              required: [
                'id',
                'url',
                'original_filename',
                'filesize',
                'width',
                'height',
                'thumbnail_width',
                'thumbnail_height',
                'extension',
                'short_url',
                'short_path',
                'retain_hours',
                'human_filesize',
              ],
            }),
        },
      },
    },
  },
})

export const postUploadsCreateMultipartJsonRoute = createRoute({
  method: 'post',
  path: '/uploads/create-multipart.json',
  tags: ['Uploads'],
  summary: 'Creates a multipart external upload',
  description:
    'Creates a multipart upload in the external storage provider, storing\na temporary reference to the external upload similar to /get-presigned-put.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n',
  operationId: 'createMultipartUpload',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              upload_type: z.enum([
                'avatar',
                'profile_background',
                'card_background',
                'custom_emoji',
                'composer',
              ]),
              file_name: z.string().openapi({ example: 'IMG_2021.jpeg' }),
              file_size: z
                .int()
                .openapi({
                  description: 'File size should be represented in bytes.',
                  example: 4096,
                }),
              metadata: z
                .strictObject({
                  'sha1-checksum': z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The SHA1 checksum of the upload binary blob. Optionally\nbe provided and serves as an additional security check when\nlater processing the file in complete-external-upload endpoint.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['upload_type', 'file_name', 'file_size'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'external upload initialized',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              key: z
                .string()
                .openapi({
                  description: 'The path of the temporary file on the external storage\nservice.',
                  example: 'temp/site/uploads/default/12345/67890.jpg',
                }),
              external_upload_identifier: z
                .string()
                .openapi({
                  description:
                    'The identifier of the multipart upload in the external\nstorage provider. This is the multipart upload_id in AWS S3.',
                  example:
                    '84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ',
                }),
              unique_identifier: z
                .string()
                .openapi({
                  description:
                    'A unique string that identifies the external upload.\nThis must be stored and then sent in the /complete-multipart\nand /batch-presign-multipart-parts endpoints.',
                  example: '66e86218-80d9-4bda-b4d5-2b6def968705',
                }),
            })
            .openapi({ required: ['external_upload_identifier', 'key', 'unique_identifier'] }),
        },
      },
    },
  },
})

export const postUploadsBatchPresignMultipartPartsJsonRoute = createRoute({
  method: 'post',
  path: '/uploads/batch-presign-multipart-parts.json',
  tags: ['Uploads'],
  summary: 'Generates batches of presigned URLs for multipart parts',
  description:
    'Multipart uploads are uploaded in chunks or parts to individual presigned\nURLs, similar to the one generated by /generate-presigned-put. The part\nnumbers provided must be between 1 and 10000. The total number of parts\nwill depend on the chunk size in bytes that you intend to use to upload\neach chunk. For example a 12MB file may have 2 5MB chunks and a final\n2MB chunk, for part numbers 1, 2, and 3.\n\nThis endpoint will return a presigned URL for each part number provided,\nwhich you can then use to send PUT requests for the binary chunk corresponding\nto that part. When the part is uploaded, the provider should return an\nETag for the part, and this should be stored along with the part number,\nbecause this is needed to complete the multipart upload.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n',
  operationId: 'batchPresignMultipartParts',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              part_numbers: z
                .array(z.any())
                .openapi({
                  description:
                    'The part numbers to generate the presigned URLs for,\nmust be between 1 and 10000.',
                  example: [1, 2, 3],
                }),
              unique_identifier: z
                .string()
                .openapi({
                  description:
                    'The unique identifier returned in the original /create-multipart\nrequest.',
                  example: '66e86218-80d9-4bda-b4d5-2b6def968705',
                }),
            })
            .openapi({ required: ['part_numbers', 'unique_identifier'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'external upload initialized',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              presigned_urls: z
                .object({})
                .openapi({
                  description:
                    'The presigned URLs for each part number, which has\nthe part numbers as keys.',
                  example: {
                    '1': 'https://discourse-martin-uploads-test.s3.us-east-2.amazonaws.com/temp/uploads/default/123abc/123abc.jpg?partNumber=1&uploadId=123456abcd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=test&X-Amz-Date=20211222T012336Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=abc123',
                  },
                }),
            })
            .openapi({ required: ['presigned_urls'] }),
        },
      },
    },
  },
})

export const postUploadsAbortMultipartJsonRoute = createRoute({
  method: 'post',
  path: '/uploads/abort-multipart.json',
  tags: ['Uploads'],
  summary: 'Abort multipart upload',
  description:
    'This endpoint aborts the multipart upload initiated with /create-multipart.\nThis should be used when cancelling the upload. It does not matter if parts\nwere already uploaded into the external storage provider.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n',
  operationId: 'abortMultipart',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              external_upload_identifier: z
                .string()
                .openapi({
                  description:
                    'The identifier of the multipart upload in the external\nstorage provider. This is the multipart upload_id in AWS S3.',
                  example:
                    '84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ',
                }),
            })
            .openapi({ required: ['external_upload_identifier'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'external upload initialized',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const postUploadsCompleteMultipartJsonRoute = createRoute({
  method: 'post',
  path: '/uploads/complete-multipart.json',
  tags: ['Uploads'],
  summary: 'Complete multipart upload',
  description:
    'Completes the multipart upload in the external store, and copies the\nfile from its temporary location to its final location in the store.\nAll of the parts must have been uploaded to the external storage provider.\nAn Upload record will be completed in most cases once the file is copied\nto its final location.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n',
  operationId: 'completeMultipart',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              unique_identifier: z
                .string()
                .openapi({
                  example: '66e86218-80d9-4bda-b4d5-2b6def968705',
                  description:
                    'The unique identifier returned in the original /create-multipart\nrequest.',
                }),
              parts: z.array(z.any()).openapi({
                example: [
                  { part_number: 1, etag: '0c376dcfcc2606f4335bbc732de93344' },
                  { part_number: 2, etag: '09ert8cfcc2606f4335bbc732de91122' },
                ],
                description:
                  'All of the part numbers and their corresponding ETags\nthat have been uploaded must be provided.',
              }),
            })
            .openapi({ required: ['unique_identifier', 'parts'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'external upload initialized',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.int(),
              url: z.string(),
              original_filename: z.string(),
              filesize: z.int(),
              width: z.int(),
              height: z.int(),
              thumbnail_width: z.int(),
              thumbnail_height: z.int(),
              extension: z.string(),
              short_url: z.string(),
              short_path: z.string(),
              retain_hours: z.string().nullable(),
              human_filesize: z.string(),
              dominant_color: z.string().nullable().exactOptional(),
              thumbnail: z
                .strictObject({
                  id: z.int().exactOptional(),
                  upload_id: z.int().exactOptional(),
                  url: z.string().exactOptional(),
                  extension: z.string().exactOptional(),
                  width: z.int().exactOptional(),
                  height: z.int().exactOptional(),
                  filesize: z.int().exactOptional(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: [] }),
              optimized_video: z
                .strictObject({
                  id: z.int().exactOptional(),
                  upload_id: z.int().exactOptional(),
                  url: z.string().exactOptional(),
                  extension: z.string().exactOptional(),
                  filesize: z.int().exactOptional(),
                  sha1: z.string().exactOptional(),
                  original_filename: z.string().exactOptional(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              required: [
                'id',
                'url',
                'original_filename',
                'filesize',
                'width',
                'height',
                'thumbnail_width',
                'thumbnail_height',
                'extension',
                'short_url',
                'short_path',
                'retain_hours',
                'human_filesize',
              ],
            }),
        },
      },
    },
  },
})

export const postUserBadgesJsonRoute = createRoute({
  method: 'post',
  path: '/user_badges.json',
  tags: ['Badges', 'Users'],
  summary: 'Grant a badge to a user',
  operationId: 'grantUserBadge',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .union([
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'badge_id')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['badge_id'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'badge_name')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['badge_name'] }),
            ])
            .and(
              z
                .object({
                  username: z
                    .string()
                    .openapi({ description: 'The username of the user to grant the badge to.' }),
                  badge_id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The ID of the badge to grant. Either badge_id or badge_name\nis required.',
                    }),
                  badge_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name of the badge to grant. Either badge_id or\nbadge_name is required.',
                    }),
                  reason: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Optional URL of a post or topic associated with the\ngrant. Cannot be used together with post_id.',
                    }),
                  post_id: z
                    .int()
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'Optional ID of a visible, non-deleted post associated\nwith the grant. Cannot be used together with reason.',
                    }),
                  suppress_notification: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'Suppress the notification for this grant only. Omit\nor set to false to preserve normal notification behavior, including\nexisting suppression rules. The badge is still granted and grant\nevents still occur.',
                    }),
                })
                .openapi({ required: ['username'] }),
            )
            .openapi({ required: ['username'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'badge granted' } },
})

export const getUserBadgesUsernameJsonRoute = createRoute({
  method: 'get',
  path: '/user-badges/{username}.json',
  tags: ['Badges', 'Users'],
  summary: 'List badges for a user',
  operationId: 'listUserBadges',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', schema: { type: 'string' }, required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              badges: z
                .array(
                  z
                    .strictObject({
                      id: z.int(),
                      name: z.string(),
                      description: z.string(),
                      grant_count: z.int(),
                      allow_title: z.boolean(),
                      multiple_grant: z.boolean(),
                      icon: z.string(),
                      image_url: z.string().nullable(),
                      listable: z.boolean(),
                      enabled: z.boolean(),
                      badge_grouping_id: z.int(),
                      system: z.boolean(),
                      slug: z.string(),
                      manually_grantable: z.boolean(),
                      badge_type_id: z.int(),
                    })
                    .openapi({
                      required: [
                        'id',
                        'name',
                        'description',
                        'grant_count',
                        'allow_title',
                        'multiple_grant',
                        'icon',
                        'image_url',
                        'listable',
                        'enabled',
                        'badge_grouping_id',
                        'system',
                        'slug',
                        'manually_grantable',
                        'badge_type_id',
                      ],
                    }),
                )
                .exactOptional(),
              badge_types: z
                .array(
                  z
                    .strictObject({ id: z.int(), name: z.string(), sort_order: z.int() })
                    .openapi({ required: ['id', 'name', 'sort_order'] }),
                )
                .exactOptional(),
              granted_bies: z
                .array(
                  z
                    .strictObject({
                      id: z.int(),
                      username: z.string(),
                      name: z.string(),
                      avatar_template: z.string(),
                      flair_name: z.string().nullable(),
                      admin: z.boolean(),
                      moderator: z.boolean(),
                      trust_level: z.int(),
                    })
                    .openapi({
                      required: [
                        'id',
                        'username',
                        'name',
                        'avatar_template',
                        'flair_name',
                        'admin',
                        'moderator',
                        'trust_level',
                      ],
                    }),
                )
                .exactOptional(),
              user_badges: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    granted_at: z.string(),
                    grouping_position: z.int(),
                    is_favorite: z.string().nullable(),
                    can_favorite: z.boolean(),
                    badge_id: z.int(),
                    granted_by_id: z.int(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'granted_at',
                      'grouping_position',
                      'is_favorite',
                      'can_favorite',
                      'badge_id',
                      'granted_by_id',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['user_badges'] }),
        },
      },
    },
  },
})

export const postUsersJsonRoute = createRoute({
  method: 'post',
  path: '/users.json',
  tags: ['Users'],
  summary: 'Creates a user',
  operationId: 'createUser',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string(),
              email: z.string(),
              password: z.string(),
              username: z.string(),
              active: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'This param requires an admin api key in the request\nheader or it will be ignored',
                }),
              approved: z.boolean().exactOptional(),
              user_fields: z
                .looseObject({ '1': z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              external_ids: z.object({}).exactOptional(),
            })
            .openapi({ required: ['name', 'email', 'password', 'username'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'user created',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              success: z.boolean(),
              active: z.boolean(),
              message: z.string(),
              user_id: z.int().exactOptional(),
            })
            .openapi({ required: ['success', 'active', 'message'] }),
        },
      },
    },
  },
})

export const getUUsernameJsonRoute = createRoute({
  method: 'get',
  path: '/u/{username}.json',
  tags: ['Users'],
  summary: 'Get a single user by username',
  operationId: 'getUser',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'user with primary group response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              user_badges: z.array(z.any()),
              user: z
                .strictObject({
                  id: z.int(),
                  username: z.string(),
                  name: z.string(),
                  avatar_template: z.string(),
                  last_posted_at: z.string().nullable(),
                  last_seen_at: z.string().nullable(),
                  created_at: z.string(),
                  ignored: z.boolean(),
                  muted: z.boolean(),
                  can_ignore_user: z.boolean(),
                  can_ignore_users: z.boolean().exactOptional(),
                  can_mute_user: z.boolean(),
                  can_mute_users: z.boolean().exactOptional(),
                  can_send_private_messages: z.boolean(),
                  can_send_private_message_to_user: z.boolean(),
                  trust_level: z.int(),
                  moderator: z.boolean(),
                  admin: z.boolean(),
                  title: z.string().nullable(),
                  badge_count: z.int(),
                  second_factor_backup_enabled: z.boolean().exactOptional(),
                  user_fields: z
                    .strictObject({ '1': z.string().nullable(), '2': z.string().nullable() })
                    .exactOptional()
                    .openapi({ required: ['1', '2'] }),
                  custom_fields: z
                    .strictObject({ first_name: z.string().nullable().exactOptional() })
                    .openapi({ required: [] }),
                  time_read: z.int(),
                  recent_time_read: z.int(),
                  primary_group_id: z.int().nullable(),
                  primary_group_name: z.string().nullable(),
                  flair_group_id: z.int().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  featured_topic: z
                    .strictObject({
                      id: z.int(),
                      title: z.string(),
                      fancy_title: z.string(),
                      slug: z.string(),
                      posts_count: z.int(),
                    })
                    .openapi({ required: ['id', 'title', 'fancy_title', 'slug', 'posts_count'] }),
                  staged: z.boolean(),
                  can_edit: z.boolean(),
                  can_edit_avatar: z.boolean(),
                  can_upload_avatar: z.boolean(),
                  can_edit_username: z.boolean(),
                  can_edit_email: z.boolean(),
                  can_edit_name: z.boolean(),
                  uploaded_avatar_id: z.int().nullable(),
                  has_title_badges: z.boolean(),
                  pending_count: z.int(),
                  pending_posts_count: z.int().exactOptional(),
                  profile_view_count: z.int(),
                  second_factor_enabled: z.boolean(),
                  can_upload_profile_header: z.boolean(),
                  can_upload_user_card_background: z.boolean(),
                  post_count: z.int(),
                  topic_count: z.int(),
                  can_be_deleted: z.boolean(),
                  can_delete_all_posts: z.boolean(),
                  locale: z.string().nullable(),
                  muted_category_ids: z.array(z.any()),
                  regular_category_ids: z.array(z.any()),
                  watched_tags: z.array(z.any()),
                  watching_first_post_tags: z.array(z.any()),
                  tracked_tags: z.array(z.any()),
                  muted_tags: z.array(z.any()),
                  tracked_category_ids: z.array(z.any()),
                  watched_category_ids: z.array(z.any()),
                  watched_first_post_category_ids: z.array(z.any()),
                  system_avatar_upload_id: z.string().nullable(),
                  system_avatar_template: z.string(),
                  associated_account_avatars: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        name: z.string(),
                        upload_id: z.int(),
                        avatar_template: z.string(),
                      })
                      .openapi({ required: ['id', 'name', 'upload_id', 'avatar_template'] }),
                  ),
                  selected_user_associated_account_id: z.int().nullable(),
                  muted_usernames: z.array(z.any()),
                  ignored_usernames: z.array(z.any()),
                  allowed_pm_usernames: z.array(z.any()),
                  mailing_list_posts_per_day: z.int(),
                  can_change_bio: z.boolean(),
                  can_change_location: z.boolean(),
                  can_change_website: z.boolean(),
                  can_change_tracking_preferences: z.boolean(),
                  user_api_keys: z.string().nullable(),
                  user_passkeys: z.array(z.any()).exactOptional(),
                  sidebar_tags: z.array(z.any()).exactOptional(),
                  sidebar_category_ids: z.array(z.any()).exactOptional(),
                  display_sidebar_tags: z.boolean().exactOptional(),
                  can_pick_theme_with_custom_homepage: z.boolean().exactOptional(),
                  user_auth_tokens: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        client_ip: z.string(),
                        location: z.string(),
                        browser: z.string(),
                        device: z.string(),
                        os: z.string(),
                        icon: z.string(),
                        created_at: z.string(),
                        seen_at: z.string(),
                        is_active: z.boolean(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'client_ip',
                          'location',
                          'browser',
                          'device',
                          'os',
                          'icon',
                          'created_at',
                          'seen_at',
                          'is_active',
                        ],
                      }),
                  ),
                  user_notification_schedule: z
                    .strictObject({
                      enabled: z.boolean(),
                      day_0_start_time: z.int(),
                      day_0_end_time: z.int(),
                      day_1_start_time: z.int(),
                      day_1_end_time: z.int(),
                      day_2_start_time: z.int(),
                      day_2_end_time: z.int(),
                      day_3_start_time: z.int(),
                      day_3_end_time: z.int(),
                      day_4_start_time: z.int(),
                      day_4_end_time: z.int(),
                      day_5_start_time: z.int(),
                      day_5_end_time: z.int(),
                      day_6_start_time: z.int(),
                      day_6_end_time: z.int(),
                    })
                    .openapi({
                      required: [
                        'enabled',
                        'day_0_start_time',
                        'day_0_end_time',
                        'day_1_start_time',
                        'day_1_end_time',
                        'day_2_start_time',
                        'day_2_end_time',
                        'day_3_start_time',
                        'day_3_end_time',
                        'day_4_start_time',
                        'day_4_end_time',
                        'day_5_start_time',
                        'day_5_end_time',
                        'day_6_start_time',
                        'day_6_end_time',
                      ],
                    }),
                  use_logo_small_as_avatar: z.boolean(),
                  featured_user_badge_ids: z.array(z.any()),
                  invited_by: z.string().nullable(),
                  groups: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        automatic: z.boolean(),
                        name: z.string(),
                        display_name: z.string(),
                        user_count: z.int(),
                        mentionable_level: z.int(),
                        messageable_level: z.int(),
                        visibility_level: z.int(),
                        primary_group: z.boolean(),
                        title: z.string().nullable(),
                        grant_trust_level: z.string().nullable(),
                        incoming_email: z.string().nullable(),
                        has_messages: z.boolean(),
                        flair_url: z.string().nullable(),
                        flair_bg_color: z.string().nullable(),
                        flair_color: z.string().nullable(),
                        bio_raw: z.string().nullable(),
                        bio_cooked: z.string().nullable(),
                        bio_excerpt: z.string().nullable(),
                        public_admission: z.boolean(),
                        public_exit: z.boolean(),
                        allow_membership_requests: z.boolean(),
                        full_name: z.string().nullable(),
                        default_notification_level: z.int(),
                        membership_request_template: z.string().nullable(),
                        members_visibility_level: z.int(),
                        can_see_members: z.boolean(),
                        can_admin_group: z.boolean(),
                        publish_read_state: z.boolean(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'automatic',
                          'name',
                          'display_name',
                          'user_count',
                          'mentionable_level',
                          'messageable_level',
                          'visibility_level',
                          'primary_group',
                          'title',
                          'grant_trust_level',
                          'incoming_email',
                          'has_messages',
                          'flair_url',
                          'flair_bg_color',
                          'flair_color',
                          'bio_raw',
                          'bio_cooked',
                          'bio_excerpt',
                          'public_admission',
                          'public_exit',
                          'allow_membership_requests',
                          'full_name',
                          'default_notification_level',
                          'membership_request_template',
                          'members_visibility_level',
                          'can_see_members',
                          'can_admin_group',
                          'publish_read_state',
                        ],
                      }),
                  ),
                  group_users: z.array(
                    z
                      .strictObject({
                        group_id: z.int(),
                        user_id: z.int(),
                        notification_level: z.int(),
                        owner: z.boolean().exactOptional(),
                      })
                      .openapi({ required: ['group_id', 'user_id', 'notification_level'] }),
                  ),
                  user_option: z
                    .strictObject({
                      user_id: z.int(),
                      mailing_list_mode: z.boolean(),
                      mailing_list_mode_frequency: z.int(),
                      email_digests: z.boolean(),
                      email_level: z.int(),
                      email_messages_level: z.int(),
                      external_links_in_new_tab: z.boolean(),
                      bookmark_auto_delete_preference: z.int().exactOptional(),
                      color_scheme_id: z.string().nullable(),
                      dark_scheme_id: z.string().nullable(),
                      dynamic_favicon: z.boolean(),
                      enable_quoting: z.boolean(),
                      enable_smart_lists: z.boolean(),
                      enable_markdown_monospace_font: z.boolean(),
                      digest_after_minutes: z.int(),
                      automatically_unpin_topics: z.boolean(),
                      auto_track_topics_after_msecs: z.int(),
                      notification_level_when_replying: z.int(),
                      new_topic_duration_minutes: z.int(),
                      email_previous_replies: z.int(),
                      email_in_reply_to: z.boolean(),
                      like_notification_frequency: z.int(),
                      notify_on_linked_posts: z.boolean(),
                      push_notification_level: z.string(),
                      enable_upcoming_change_available_notifications: z.boolean(),
                      include_tl0_in_digests: z.boolean(),
                      theme_ids: z.array(z.any()),
                      theme_key_seq: z.int(),
                      allow_private_messages: z.boolean(),
                      enable_allowed_pm_users: z.boolean(),
                      homepage_id: z.string().nullable(),
                      hide_profile_and_presence: z.boolean(),
                      hide_profile: z.boolean(),
                      hide_presence: z.boolean(),
                      text_size: z.string(),
                      text_size_seq: z.int(),
                      title_count_mode: z.string(),
                      timezone: z.string().nullable(),
                      skip_new_user_tips: z.boolean(),
                      default_calendar: z.string().exactOptional(),
                      oldest_search_log_date: z.string().nullable().exactOptional(),
                      sidebar_link_to_filtered_list: z.boolean().exactOptional(),
                      sidebar_show_count_of_new_items: z.boolean().exactOptional(),
                      watched_precedence_over_muted: z.boolean().exactOptional(),
                      seen_popups: z.array(z.any()).nullable().exactOptional(),
                      composition_mode: z.int().exactOptional(),
                      interface_color_mode: z.int(),
                      automatically_translate: z.boolean(),
                      understood_languages: z.array(z.string()),
                      hidden_composer_toolbar_buttons: z.array(z.string()),
                      show_original_content: z.boolean(),
                      send_shortcut: z.string(),
                    })
                    .openapi({
                      required: [
                        'user_id',
                        'mailing_list_mode',
                        'mailing_list_mode_frequency',
                        'email_digests',
                        'email_level',
                        'email_messages_level',
                        'external_links_in_new_tab',
                        'color_scheme_id',
                        'dark_scheme_id',
                        'dynamic_favicon',
                        'enable_quoting',
                        'enable_smart_lists',
                        'enable_markdown_monospace_font',
                        'digest_after_minutes',
                        'automatically_unpin_topics',
                        'auto_track_topics_after_msecs',
                        'notification_level_when_replying',
                        'new_topic_duration_minutes',
                        'email_previous_replies',
                        'email_in_reply_to',
                        'like_notification_frequency',
                        'notify_on_linked_posts',
                        'push_notification_level',
                        'enable_upcoming_change_available_notifications',
                        'include_tl0_in_digests',
                        'theme_ids',
                        'theme_key_seq',
                        'allow_private_messages',
                        'enable_allowed_pm_users',
                        'homepage_id',
                        'hide_profile_and_presence',
                        'hide_profile',
                        'hide_presence',
                        'text_size',
                        'text_size_seq',
                        'title_count_mode',
                        'timezone',
                        'skip_new_user_tips',
                        'interface_color_mode',
                        'show_original_content',
                        'send_shortcut',
                        'automatically_translate',
                        'understood_languages',
                        'hidden_composer_toolbar_buttons',
                      ],
                    }),
                })
                .openapi({
                  required: [
                    'id',
                    'username',
                    'name',
                    'avatar_template',
                    'last_posted_at',
                    'last_seen_at',
                    'created_at',
                    'ignored',
                    'muted',
                    'can_ignore_user',
                    'can_mute_user',
                    'can_send_private_messages',
                    'can_send_private_message_to_user',
                    'trust_level',
                    'moderator',
                    'admin',
                    'title',
                    'badge_count',
                    'custom_fields',
                    'time_read',
                    'recent_time_read',
                    'primary_group_id',
                    'primary_group_name',
                    'flair_group_id',
                    'flair_name',
                    'flair_url',
                    'flair_bg_color',
                    'flair_color',
                    'featured_topic',
                    'staged',
                    'can_edit',
                    'can_edit_avatar',
                    'can_upload_avatar',
                    'can_edit_username',
                    'can_edit_email',
                    'can_edit_name',
                    'uploaded_avatar_id',
                    'has_title_badges',
                    'pending_count',
                    'profile_view_count',
                    'second_factor_enabled',
                    'can_upload_profile_header',
                    'can_upload_user_card_background',
                    'post_count',
                    'topic_count',
                    'can_be_deleted',
                    'can_delete_all_posts',
                    'locale',
                    'muted_category_ids',
                    'regular_category_ids',
                    'watched_tags',
                    'watching_first_post_tags',
                    'tracked_tags',
                    'muted_tags',
                    'tracked_category_ids',
                    'watched_category_ids',
                    'watched_first_post_category_ids',
                    'system_avatar_upload_id',
                    'system_avatar_template',
                    'associated_account_avatars',
                    'selected_user_associated_account_id',
                    'muted_usernames',
                    'ignored_usernames',
                    'allowed_pm_usernames',
                    'mailing_list_posts_per_day',
                    'can_change_bio',
                    'can_change_location',
                    'can_change_website',
                    'can_change_tracking_preferences',
                    'user_api_keys',
                    'user_auth_tokens',
                    'user_notification_schedule',
                    'use_logo_small_as_avatar',
                    'featured_user_badge_ids',
                    'invited_by',
                    'groups',
                    'group_users',
                    'user_option',
                  ],
                }),
            })
            .openapi({ required: ['user_badges', 'user'] }),
        },
      },
    },
  },
})

export const putUUsernameJsonRoute = createRoute({
  method: 'put',
  path: '/u/{username}.json',
  tags: ['Users'],
  summary: 'Update a user',
  operationId: 'updateUser',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z.string().exactOptional(),
              external_ids: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'user updated',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string(), user: z.object({}) })
            .openapi({ required: ['success', 'user'] }),
        },
      },
    },
  },
})

export const getUByExternalExternalIdJsonRoute = createRoute({
  method: 'get',
  path: '/u/by-external/{external_id}.json',
  tags: ['Users'],
  summary: 'Get a user by external_id',
  operationId: 'getUserExternalId',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      external_id: z
        .string()
        .openapi({
          param: { name: 'external_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'user response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              user_badges: z.array(z.any()),
              user: z
                .strictObject({
                  id: z.int(),
                  username: z.string(),
                  name: z.string(),
                  avatar_template: z.string(),
                  last_posted_at: z.string().nullable(),
                  last_seen_at: z.string().nullable(),
                  created_at: z.string(),
                  ignored: z.boolean(),
                  muted: z.boolean(),
                  can_ignore_user: z.boolean(),
                  can_ignore_users: z.boolean().exactOptional(),
                  can_mute_user: z.boolean(),
                  can_mute_users: z.boolean().exactOptional(),
                  can_send_private_messages: z.boolean(),
                  can_send_private_message_to_user: z.boolean(),
                  trust_level: z.int(),
                  moderator: z.boolean(),
                  admin: z.boolean(),
                  title: z.string().nullable(),
                  badge_count: z.int(),
                  second_factor_backup_enabled: z.boolean().exactOptional(),
                  user_fields: z
                    .strictObject({ '1': z.string().nullable(), '2': z.string().nullable() })
                    .exactOptional()
                    .openapi({ required: ['1', '2'] }),
                  custom_fields: z
                    .strictObject({ first_name: z.string().nullable().exactOptional() })
                    .openapi({ required: [] }),
                  time_read: z.int(),
                  recent_time_read: z.int(),
                  primary_group_id: z.int().nullable(),
                  primary_group_name: z.string().nullable(),
                  flair_group_id: z.int().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  featured_topic: z
                    .strictObject({
                      id: z.int(),
                      title: z.string(),
                      fancy_title: z.string(),
                      slug: z.string(),
                      posts_count: z.int(),
                    })
                    .openapi({ required: ['id', 'title', 'fancy_title', 'slug', 'posts_count'] }),
                  staged: z.boolean(),
                  can_edit: z.boolean(),
                  can_edit_avatar: z.boolean(),
                  can_upload_avatar: z.boolean(),
                  can_edit_username: z.boolean(),
                  can_edit_email: z.boolean(),
                  can_edit_name: z.boolean(),
                  uploaded_avatar_id: z.int().nullable(),
                  has_title_badges: z.boolean(),
                  pending_count: z.int(),
                  pending_posts_count: z.int().exactOptional(),
                  profile_view_count: z.int(),
                  second_factor_enabled: z.boolean(),
                  can_upload_profile_header: z.boolean(),
                  can_upload_user_card_background: z.boolean(),
                  post_count: z.int(),
                  topic_count: z.int(),
                  can_be_deleted: z.boolean(),
                  can_delete_all_posts: z.boolean(),
                  locale: z.string().nullable(),
                  muted_category_ids: z.array(z.any()),
                  regular_category_ids: z.array(z.any()),
                  watched_tags: z.array(z.any()),
                  watching_first_post_tags: z.array(z.any()),
                  tracked_tags: z.array(z.any()),
                  muted_tags: z.array(z.any()),
                  tracked_category_ids: z.array(z.any()),
                  watched_category_ids: z.array(z.any()),
                  watched_first_post_category_ids: z.array(z.any()),
                  system_avatar_upload_id: z.string().nullable(),
                  system_avatar_template: z.string(),
                  associated_account_avatars: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        name: z.string(),
                        upload_id: z.int(),
                        avatar_template: z.string(),
                      })
                      .openapi({ required: ['id', 'name', 'upload_id', 'avatar_template'] }),
                  ),
                  selected_user_associated_account_id: z.int().nullable(),
                  muted_usernames: z.array(z.any()),
                  ignored_usernames: z.array(z.any()),
                  allowed_pm_usernames: z.array(z.any()),
                  mailing_list_posts_per_day: z.int(),
                  can_change_bio: z.boolean(),
                  can_change_location: z.boolean(),
                  can_change_website: z.boolean(),
                  can_change_tracking_preferences: z.boolean(),
                  user_api_keys: z.string().nullable(),
                  user_passkeys: z.array(z.any()).exactOptional(),
                  sidebar_tags: z.array(z.any()).exactOptional(),
                  sidebar_category_ids: z.array(z.any()).exactOptional(),
                  display_sidebar_tags: z.boolean().exactOptional(),
                  can_pick_theme_with_custom_homepage: z.boolean().exactOptional(),
                  user_auth_tokens: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        client_ip: z.string(),
                        location: z.string(),
                        browser: z.string(),
                        device: z.string(),
                        os: z.string(),
                        icon: z.string(),
                        created_at: z.string(),
                        seen_at: z.string(),
                        is_active: z.boolean(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'client_ip',
                          'location',
                          'browser',
                          'device',
                          'os',
                          'icon',
                          'created_at',
                          'seen_at',
                          'is_active',
                        ],
                      }),
                  ),
                  user_notification_schedule: z
                    .strictObject({
                      enabled: z.boolean(),
                      day_0_start_time: z.int(),
                      day_0_end_time: z.int(),
                      day_1_start_time: z.int(),
                      day_1_end_time: z.int(),
                      day_2_start_time: z.int(),
                      day_2_end_time: z.int(),
                      day_3_start_time: z.int(),
                      day_3_end_time: z.int(),
                      day_4_start_time: z.int(),
                      day_4_end_time: z.int(),
                      day_5_start_time: z.int(),
                      day_5_end_time: z.int(),
                      day_6_start_time: z.int(),
                      day_6_end_time: z.int(),
                    })
                    .openapi({
                      required: [
                        'enabled',
                        'day_0_start_time',
                        'day_0_end_time',
                        'day_1_start_time',
                        'day_1_end_time',
                        'day_2_start_time',
                        'day_2_end_time',
                        'day_3_start_time',
                        'day_3_end_time',
                        'day_4_start_time',
                        'day_4_end_time',
                        'day_5_start_time',
                        'day_5_end_time',
                        'day_6_start_time',
                        'day_6_end_time',
                      ],
                    }),
                  use_logo_small_as_avatar: z.boolean(),
                  featured_user_badge_ids: z.array(z.any()),
                  invited_by: z.string().nullable(),
                  groups: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        automatic: z.boolean(),
                        name: z.string(),
                        display_name: z.string(),
                        user_count: z.int(),
                        mentionable_level: z.int(),
                        messageable_level: z.int(),
                        visibility_level: z.int(),
                        primary_group: z.boolean(),
                        title: z.string().nullable(),
                        grant_trust_level: z.string().nullable(),
                        incoming_email: z.string().nullable(),
                        has_messages: z.boolean(),
                        flair_url: z.string().nullable(),
                        flair_bg_color: z.string().nullable(),
                        flair_color: z.string().nullable(),
                        bio_raw: z.string().nullable(),
                        bio_cooked: z.string().nullable(),
                        bio_excerpt: z.string().nullable(),
                        public_admission: z.boolean(),
                        public_exit: z.boolean(),
                        allow_membership_requests: z.boolean(),
                        full_name: z.string().nullable(),
                        default_notification_level: z.int(),
                        membership_request_template: z.string().nullable(),
                        members_visibility_level: z.int(),
                        can_see_members: z.boolean(),
                        can_admin_group: z.boolean(),
                        publish_read_state: z.boolean(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'automatic',
                          'name',
                          'display_name',
                          'user_count',
                          'mentionable_level',
                          'messageable_level',
                          'visibility_level',
                          'primary_group',
                          'title',
                          'grant_trust_level',
                          'incoming_email',
                          'has_messages',
                          'flair_url',
                          'flair_bg_color',
                          'flair_color',
                          'bio_raw',
                          'bio_cooked',
                          'bio_excerpt',
                          'public_admission',
                          'public_exit',
                          'allow_membership_requests',
                          'full_name',
                          'default_notification_level',
                          'membership_request_template',
                          'members_visibility_level',
                          'can_see_members',
                          'can_admin_group',
                          'publish_read_state',
                        ],
                      }),
                  ),
                  group_users: z.array(
                    z
                      .strictObject({
                        group_id: z.int(),
                        user_id: z.int(),
                        notification_level: z.int(),
                        owner: z.boolean().exactOptional(),
                      })
                      .openapi({ required: ['group_id', 'user_id', 'notification_level'] }),
                  ),
                  user_option: z
                    .strictObject({
                      user_id: z.int(),
                      mailing_list_mode: z.boolean(),
                      mailing_list_mode_frequency: z.int(),
                      email_digests: z.boolean(),
                      email_level: z.int(),
                      email_messages_level: z.int(),
                      external_links_in_new_tab: z.boolean(),
                      bookmark_auto_delete_preference: z.int().exactOptional(),
                      color_scheme_id: z.string().nullable(),
                      dark_scheme_id: z.string().nullable(),
                      dynamic_favicon: z.boolean(),
                      enable_quoting: z.boolean(),
                      enable_smart_lists: z.boolean(),
                      enable_markdown_monospace_font: z.boolean(),
                      digest_after_minutes: z.int(),
                      automatically_unpin_topics: z.boolean(),
                      auto_track_topics_after_msecs: z.int(),
                      notification_level_when_replying: z.int(),
                      new_topic_duration_minutes: z.int(),
                      email_previous_replies: z.int(),
                      email_in_reply_to: z.boolean(),
                      like_notification_frequency: z.int(),
                      notify_on_linked_posts: z.boolean(),
                      push_notification_level: z.string(),
                      enable_upcoming_change_available_notifications: z.boolean(),
                      include_tl0_in_digests: z.boolean(),
                      theme_ids: z.array(z.any()),
                      theme_key_seq: z.int(),
                      allow_private_messages: z.boolean(),
                      enable_allowed_pm_users: z.boolean(),
                      homepage_id: z.string().nullable(),
                      hide_profile_and_presence: z.boolean(),
                      hide_profile: z.boolean(),
                      hide_presence: z.boolean(),
                      text_size: z.string(),
                      text_size_seq: z.int(),
                      title_count_mode: z.string(),
                      timezone: z.string().nullable(),
                      skip_new_user_tips: z.boolean(),
                      default_calendar: z.string().exactOptional(),
                      oldest_search_log_date: z.string().nullable().exactOptional(),
                      sidebar_link_to_filtered_list: z.boolean().exactOptional(),
                      sidebar_show_count_of_new_items: z.boolean().exactOptional(),
                      watched_precedence_over_muted: z.boolean().exactOptional(),
                      seen_popups: z.array(z.any()).nullable().exactOptional(),
                      composition_mode: z.int().exactOptional(),
                      interface_color_mode: z.int(),
                      automatically_translate: z.boolean(),
                      understood_languages: z.array(z.string()),
                      hidden_composer_toolbar_buttons: z.array(z.string()),
                      show_original_content: z.boolean(),
                      send_shortcut: z.string(),
                    })
                    .openapi({
                      required: [
                        'user_id',
                        'mailing_list_mode',
                        'mailing_list_mode_frequency',
                        'email_digests',
                        'email_level',
                        'email_messages_level',
                        'external_links_in_new_tab',
                        'color_scheme_id',
                        'dark_scheme_id',
                        'dynamic_favicon',
                        'enable_quoting',
                        'enable_smart_lists',
                        'enable_markdown_monospace_font',
                        'digest_after_minutes',
                        'automatically_unpin_topics',
                        'auto_track_topics_after_msecs',
                        'notification_level_when_replying',
                        'new_topic_duration_minutes',
                        'email_previous_replies',
                        'email_in_reply_to',
                        'like_notification_frequency',
                        'notify_on_linked_posts',
                        'push_notification_level',
                        'enable_upcoming_change_available_notifications',
                        'include_tl0_in_digests',
                        'theme_ids',
                        'theme_key_seq',
                        'allow_private_messages',
                        'enable_allowed_pm_users',
                        'homepage_id',
                        'hide_profile_and_presence',
                        'hide_profile',
                        'hide_presence',
                        'text_size',
                        'text_size_seq',
                        'title_count_mode',
                        'timezone',
                        'skip_new_user_tips',
                        'interface_color_mode',
                        'show_original_content',
                        'send_shortcut',
                        'automatically_translate',
                        'understood_languages',
                        'hidden_composer_toolbar_buttons',
                      ],
                    }),
                })
                .openapi({
                  required: [
                    'id',
                    'username',
                    'name',
                    'avatar_template',
                    'last_posted_at',
                    'last_seen_at',
                    'created_at',
                    'ignored',
                    'muted',
                    'can_ignore_user',
                    'can_mute_user',
                    'can_send_private_messages',
                    'can_send_private_message_to_user',
                    'trust_level',
                    'moderator',
                    'admin',
                    'title',
                    'badge_count',
                    'custom_fields',
                    'time_read',
                    'recent_time_read',
                    'primary_group_id',
                    'primary_group_name',
                    'flair_group_id',
                    'flair_name',
                    'flair_url',
                    'flair_bg_color',
                    'flair_color',
                    'featured_topic',
                    'staged',
                    'can_edit',
                    'can_edit_avatar',
                    'can_upload_avatar',
                    'can_edit_username',
                    'can_edit_email',
                    'can_edit_name',
                    'uploaded_avatar_id',
                    'has_title_badges',
                    'pending_count',
                    'profile_view_count',
                    'second_factor_enabled',
                    'can_upload_profile_header',
                    'can_upload_user_card_background',
                    'post_count',
                    'topic_count',
                    'can_be_deleted',
                    'can_delete_all_posts',
                    'locale',
                    'muted_category_ids',
                    'regular_category_ids',
                    'watched_tags',
                    'watching_first_post_tags',
                    'tracked_tags',
                    'muted_tags',
                    'tracked_category_ids',
                    'watched_category_ids',
                    'watched_first_post_category_ids',
                    'system_avatar_upload_id',
                    'system_avatar_template',
                    'associated_account_avatars',
                    'selected_user_associated_account_id',
                    'muted_usernames',
                    'ignored_usernames',
                    'allowed_pm_usernames',
                    'mailing_list_posts_per_day',
                    'can_change_bio',
                    'can_change_location',
                    'can_change_website',
                    'can_change_tracking_preferences',
                    'user_api_keys',
                    'user_auth_tokens',
                    'user_notification_schedule',
                    'use_logo_small_as_avatar',
                    'featured_user_badge_ids',
                    'invited_by',
                    'groups',
                    'group_users',
                    'user_option',
                  ],
                }),
            })
            .openapi({ required: ['user_badges', 'user'] }),
        },
      },
    },
  },
})

export const getUByExternalProviderExternalIdJsonRoute = createRoute({
  method: 'get',
  path: '/u/by-external/{provider}/{external_id}.json',
  tags: ['Users'],
  summary: 'Get a user by identity provider external ID',
  operationId: 'getUserIdentiyProviderExternalId',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      provider: z
        .string()
        .openapi({
          param: {
            name: 'provider',
            in: 'path',
            required: true,
            description:
              'Authentication provider name. Can be found in the provider callback\nURL: `/auth/{provider}/callback`',
            schema: { type: 'string' },
          },
        }),
      external_id: z
        .string()
        .openapi({
          param: { name: 'external_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'user response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              user_badges: z.array(z.any()),
              user: z
                .strictObject({
                  id: z.int(),
                  username: z.string(),
                  name: z.string(),
                  avatar_template: z.string(),
                  last_posted_at: z.string().nullable(),
                  last_seen_at: z.string().nullable(),
                  created_at: z.string(),
                  ignored: z.boolean(),
                  muted: z.boolean(),
                  can_ignore_user: z.boolean(),
                  can_ignore_users: z.boolean().exactOptional(),
                  can_mute_user: z.boolean(),
                  can_mute_users: z.boolean().exactOptional(),
                  can_send_private_messages: z.boolean(),
                  can_send_private_message_to_user: z.boolean(),
                  trust_level: z.int(),
                  moderator: z.boolean(),
                  admin: z.boolean(),
                  title: z.string().nullable(),
                  badge_count: z.int(),
                  second_factor_backup_enabled: z.boolean().exactOptional(),
                  user_fields: z
                    .strictObject({ '1': z.string().nullable(), '2': z.string().nullable() })
                    .exactOptional()
                    .openapi({ required: ['1', '2'] }),
                  custom_fields: z
                    .strictObject({ first_name: z.string().nullable().exactOptional() })
                    .openapi({ required: [] }),
                  time_read: z.int(),
                  recent_time_read: z.int(),
                  primary_group_id: z.int().nullable(),
                  primary_group_name: z.string().nullable(),
                  flair_group_id: z.int().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  featured_topic: z
                    .strictObject({
                      id: z.int(),
                      title: z.string(),
                      fancy_title: z.string(),
                      slug: z.string(),
                      posts_count: z.int(),
                    })
                    .openapi({ required: ['id', 'title', 'fancy_title', 'slug', 'posts_count'] }),
                  staged: z.boolean(),
                  can_edit: z.boolean(),
                  can_edit_avatar: z.boolean(),
                  can_upload_avatar: z.boolean(),
                  can_edit_username: z.boolean(),
                  can_edit_email: z.boolean(),
                  can_edit_name: z.boolean(),
                  uploaded_avatar_id: z.int().nullable(),
                  has_title_badges: z.boolean(),
                  pending_count: z.int(),
                  pending_posts_count: z.int().exactOptional(),
                  profile_view_count: z.int(),
                  second_factor_enabled: z.boolean(),
                  can_upload_profile_header: z.boolean(),
                  can_upload_user_card_background: z.boolean(),
                  post_count: z.int(),
                  topic_count: z.int(),
                  can_be_deleted: z.boolean(),
                  can_delete_all_posts: z.boolean(),
                  locale: z.string().nullable(),
                  muted_category_ids: z.array(z.any()),
                  regular_category_ids: z.array(z.any()),
                  watched_tags: z.array(z.any()),
                  watching_first_post_tags: z.array(z.any()),
                  tracked_tags: z.array(z.any()),
                  muted_tags: z.array(z.any()),
                  tracked_category_ids: z.array(z.any()),
                  watched_category_ids: z.array(z.any()),
                  watched_first_post_category_ids: z.array(z.any()),
                  system_avatar_upload_id: z.string().nullable(),
                  system_avatar_template: z.string(),
                  associated_account_avatars: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        name: z.string(),
                        upload_id: z.int(),
                        avatar_template: z.string(),
                      })
                      .openapi({ required: ['id', 'name', 'upload_id', 'avatar_template'] }),
                  ),
                  selected_user_associated_account_id: z.int().nullable(),
                  muted_usernames: z.array(z.any()),
                  ignored_usernames: z.array(z.any()),
                  allowed_pm_usernames: z.array(z.any()),
                  mailing_list_posts_per_day: z.int(),
                  can_change_bio: z.boolean(),
                  can_change_location: z.boolean(),
                  can_change_website: z.boolean(),
                  can_change_tracking_preferences: z.boolean(),
                  user_api_keys: z.string().nullable(),
                  user_passkeys: z.array(z.any()).exactOptional(),
                  sidebar_tags: z.array(z.any()).exactOptional(),
                  sidebar_category_ids: z.array(z.any()).exactOptional(),
                  display_sidebar_tags: z.boolean().exactOptional(),
                  can_pick_theme_with_custom_homepage: z.boolean().exactOptional(),
                  user_auth_tokens: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        client_ip: z.string(),
                        location: z.string(),
                        browser: z.string(),
                        device: z.string(),
                        os: z.string(),
                        icon: z.string(),
                        created_at: z.string(),
                        seen_at: z.string(),
                        is_active: z.boolean(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'client_ip',
                          'location',
                          'browser',
                          'device',
                          'os',
                          'icon',
                          'created_at',
                          'seen_at',
                          'is_active',
                        ],
                      }),
                  ),
                  user_notification_schedule: z
                    .strictObject({
                      enabled: z.boolean(),
                      day_0_start_time: z.int(),
                      day_0_end_time: z.int(),
                      day_1_start_time: z.int(),
                      day_1_end_time: z.int(),
                      day_2_start_time: z.int(),
                      day_2_end_time: z.int(),
                      day_3_start_time: z.int(),
                      day_3_end_time: z.int(),
                      day_4_start_time: z.int(),
                      day_4_end_time: z.int(),
                      day_5_start_time: z.int(),
                      day_5_end_time: z.int(),
                      day_6_start_time: z.int(),
                      day_6_end_time: z.int(),
                    })
                    .openapi({
                      required: [
                        'enabled',
                        'day_0_start_time',
                        'day_0_end_time',
                        'day_1_start_time',
                        'day_1_end_time',
                        'day_2_start_time',
                        'day_2_end_time',
                        'day_3_start_time',
                        'day_3_end_time',
                        'day_4_start_time',
                        'day_4_end_time',
                        'day_5_start_time',
                        'day_5_end_time',
                        'day_6_start_time',
                        'day_6_end_time',
                      ],
                    }),
                  use_logo_small_as_avatar: z.boolean(),
                  featured_user_badge_ids: z.array(z.any()),
                  invited_by: z.string().nullable(),
                  groups: z.array(
                    z
                      .strictObject({
                        id: z.int(),
                        automatic: z.boolean(),
                        name: z.string(),
                        display_name: z.string(),
                        user_count: z.int(),
                        mentionable_level: z.int(),
                        messageable_level: z.int(),
                        visibility_level: z.int(),
                        primary_group: z.boolean(),
                        title: z.string().nullable(),
                        grant_trust_level: z.string().nullable(),
                        incoming_email: z.string().nullable(),
                        has_messages: z.boolean(),
                        flair_url: z.string().nullable(),
                        flair_bg_color: z.string().nullable(),
                        flair_color: z.string().nullable(),
                        bio_raw: z.string().nullable(),
                        bio_cooked: z.string().nullable(),
                        bio_excerpt: z.string().nullable(),
                        public_admission: z.boolean(),
                        public_exit: z.boolean(),
                        allow_membership_requests: z.boolean(),
                        full_name: z.string().nullable(),
                        default_notification_level: z.int(),
                        membership_request_template: z.string().nullable(),
                        members_visibility_level: z.int(),
                        can_see_members: z.boolean(),
                        can_admin_group: z.boolean(),
                        publish_read_state: z.boolean(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'automatic',
                          'name',
                          'display_name',
                          'user_count',
                          'mentionable_level',
                          'messageable_level',
                          'visibility_level',
                          'primary_group',
                          'title',
                          'grant_trust_level',
                          'incoming_email',
                          'has_messages',
                          'flair_url',
                          'flair_bg_color',
                          'flair_color',
                          'bio_raw',
                          'bio_cooked',
                          'bio_excerpt',
                          'public_admission',
                          'public_exit',
                          'allow_membership_requests',
                          'full_name',
                          'default_notification_level',
                          'membership_request_template',
                          'members_visibility_level',
                          'can_see_members',
                          'can_admin_group',
                          'publish_read_state',
                        ],
                      }),
                  ),
                  group_users: z.array(
                    z
                      .strictObject({
                        group_id: z.int(),
                        user_id: z.int(),
                        notification_level: z.int(),
                        owner: z.boolean().exactOptional(),
                      })
                      .openapi({ required: ['group_id', 'user_id', 'notification_level'] }),
                  ),
                  user_option: z
                    .strictObject({
                      user_id: z.int(),
                      mailing_list_mode: z.boolean(),
                      mailing_list_mode_frequency: z.int(),
                      email_digests: z.boolean(),
                      email_level: z.int(),
                      email_messages_level: z.int(),
                      external_links_in_new_tab: z.boolean(),
                      bookmark_auto_delete_preference: z.int().exactOptional(),
                      color_scheme_id: z.string().nullable(),
                      dark_scheme_id: z.string().nullable(),
                      dynamic_favicon: z.boolean(),
                      enable_quoting: z.boolean(),
                      enable_smart_lists: z.boolean(),
                      enable_markdown_monospace_font: z.boolean(),
                      digest_after_minutes: z.int(),
                      automatically_unpin_topics: z.boolean(),
                      auto_track_topics_after_msecs: z.int(),
                      notification_level_when_replying: z.int(),
                      new_topic_duration_minutes: z.int(),
                      email_previous_replies: z.int(),
                      email_in_reply_to: z.boolean(),
                      like_notification_frequency: z.int(),
                      notify_on_linked_posts: z.boolean(),
                      push_notification_level: z.string(),
                      enable_upcoming_change_available_notifications: z.boolean(),
                      include_tl0_in_digests: z.boolean(),
                      theme_ids: z.array(z.any()),
                      theme_key_seq: z.int(),
                      allow_private_messages: z.boolean(),
                      enable_allowed_pm_users: z.boolean(),
                      homepage_id: z.string().nullable(),
                      hide_profile_and_presence: z.boolean(),
                      hide_profile: z.boolean(),
                      hide_presence: z.boolean(),
                      text_size: z.string(),
                      text_size_seq: z.int(),
                      title_count_mode: z.string(),
                      timezone: z.string().nullable(),
                      skip_new_user_tips: z.boolean(),
                      default_calendar: z.string().exactOptional(),
                      oldest_search_log_date: z.string().nullable().exactOptional(),
                      sidebar_link_to_filtered_list: z.boolean().exactOptional(),
                      sidebar_show_count_of_new_items: z.boolean().exactOptional(),
                      watched_precedence_over_muted: z.boolean().exactOptional(),
                      seen_popups: z.array(z.any()).nullable().exactOptional(),
                      composition_mode: z.int().exactOptional(),
                      interface_color_mode: z.int(),
                      automatically_translate: z.boolean(),
                      understood_languages: z.array(z.string()),
                      hidden_composer_toolbar_buttons: z.array(z.string()),
                      show_original_content: z.boolean(),
                      send_shortcut: z.string(),
                    })
                    .openapi({
                      required: [
                        'user_id',
                        'mailing_list_mode',
                        'mailing_list_mode_frequency',
                        'email_digests',
                        'email_level',
                        'email_messages_level',
                        'external_links_in_new_tab',
                        'color_scheme_id',
                        'dark_scheme_id',
                        'dynamic_favicon',
                        'enable_quoting',
                        'enable_smart_lists',
                        'enable_markdown_monospace_font',
                        'digest_after_minutes',
                        'automatically_unpin_topics',
                        'auto_track_topics_after_msecs',
                        'notification_level_when_replying',
                        'new_topic_duration_minutes',
                        'email_previous_replies',
                        'email_in_reply_to',
                        'like_notification_frequency',
                        'notify_on_linked_posts',
                        'push_notification_level',
                        'enable_upcoming_change_available_notifications',
                        'include_tl0_in_digests',
                        'theme_ids',
                        'theme_key_seq',
                        'allow_private_messages',
                        'enable_allowed_pm_users',
                        'homepage_id',
                        'hide_profile_and_presence',
                        'hide_profile',
                        'hide_presence',
                        'text_size',
                        'text_size_seq',
                        'title_count_mode',
                        'timezone',
                        'skip_new_user_tips',
                        'interface_color_mode',
                        'show_original_content',
                        'send_shortcut',
                        'automatically_translate',
                        'understood_languages',
                        'hidden_composer_toolbar_buttons',
                      ],
                    }),
                })
                .openapi({
                  required: [
                    'id',
                    'username',
                    'name',
                    'avatar_template',
                    'last_posted_at',
                    'last_seen_at',
                    'created_at',
                    'ignored',
                    'muted',
                    'can_ignore_user',
                    'can_mute_user',
                    'can_send_private_messages',
                    'can_send_private_message_to_user',
                    'trust_level',
                    'moderator',
                    'admin',
                    'title',
                    'badge_count',
                    'custom_fields',
                    'time_read',
                    'recent_time_read',
                    'primary_group_id',
                    'primary_group_name',
                    'flair_group_id',
                    'flair_name',
                    'flair_url',
                    'flair_bg_color',
                    'flair_color',
                    'featured_topic',
                    'staged',
                    'can_edit',
                    'can_edit_avatar',
                    'can_upload_avatar',
                    'can_edit_username',
                    'can_edit_email',
                    'can_edit_name',
                    'uploaded_avatar_id',
                    'has_title_badges',
                    'pending_count',
                    'profile_view_count',
                    'second_factor_enabled',
                    'can_upload_profile_header',
                    'can_upload_user_card_background',
                    'post_count',
                    'topic_count',
                    'can_be_deleted',
                    'can_delete_all_posts',
                    'locale',
                    'muted_category_ids',
                    'regular_category_ids',
                    'watched_tags',
                    'watching_first_post_tags',
                    'tracked_tags',
                    'muted_tags',
                    'tracked_category_ids',
                    'watched_category_ids',
                    'watched_first_post_category_ids',
                    'system_avatar_upload_id',
                    'system_avatar_template',
                    'associated_account_avatars',
                    'selected_user_associated_account_id',
                    'muted_usernames',
                    'ignored_usernames',
                    'allowed_pm_usernames',
                    'mailing_list_posts_per_day',
                    'can_change_bio',
                    'can_change_location',
                    'can_change_website',
                    'can_change_tracking_preferences',
                    'user_api_keys',
                    'user_auth_tokens',
                    'user_notification_schedule',
                    'use_logo_small_as_avatar',
                    'featured_user_badge_ids',
                    'invited_by',
                    'groups',
                    'group_users',
                    'user_option',
                  ],
                }),
            })
            .openapi({ required: ['user_badges', 'user'] }),
        },
      },
    },
  },
})

export const putUUsernamePreferencesAvatarPickJsonRoute = createRoute({
  method: 'put',
  path: '/u/{username}/preferences/avatar/pick.json',
  tags: ['Users'],
  summary: 'Update avatar',
  operationId: 'updateAvatar',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([
              z
                .object({
                  type: z.enum(['uploaded', 'custom', 'gravatar', 'current']).exactOptional(),
                })
                .openapi({ required: ['upload_id'] }),
              z
                .object({ type: z.literal('associated_account').exactOptional() })
                .openapi({ required: ['associated_account_id'] }),
              z.object({ type: z.literal('system').exactOptional() }).openapi({ required: [] }),
            ])
            .openapi({ required: ['type'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'avatar updated',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const putUUsernamePreferencesEmailJsonRoute = createRoute({
  method: 'put',
  path: '/u/{username}/preferences/email.json',
  tags: ['Users'],
  summary: 'Update email',
  operationId: 'updateEmail',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ email: z.email() }).openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'email updated' } },
})

export const putUUsernamePreferencesUsernameJsonRoute = createRoute({
  method: 'put',
  path: '/u/{username}/preferences/username.json',
  tags: ['Users'],
  summary: 'Update username',
  operationId: 'updateUsername',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ new_username: z.string() })
            .openapi({ required: ['new_username'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'username updated' } },
})

export const getDirectoryItemsJsonRoute = createRoute({
  method: 'get',
  path: '/directory_items.json',
  tags: ['Users'],
  summary: 'Get a public list of users',
  operationId: 'listUsersPublic',
  request: {
    query: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'all'])
        .openapi({
          param: {
            name: 'period',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'all'],
            },
            required: true,
          },
        }),
      order: z
        .enum([
          'likes_received',
          'likes_given',
          'topic_count',
          'post_count',
          'topics_entered',
          'posts_read',
          'days_visited',
        ])
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            schema: {
              type: 'string',
              enum: [
                'likes_received',
                'likes_given',
                'topic_count',
                'post_count',
                'topics_entered',
                'posts_read',
                'days_visited',
              ],
            },
            required: true,
          },
        }),
      asc: z
        .literal('true')
        .exactOptional()
        .openapi({
          param: {
            name: 'asc',
            in: 'query',
            schema: { type: 'string', enum: ['true'] },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'page', in: 'query', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'directory items response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              directory_items: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    likes_received: z.int(),
                    likes_given: z.int(),
                    topics_entered: z.int(),
                    topic_count: z.int(),
                    post_count: z.int(),
                    posts_read: z.int(),
                    days_visited: z.int(),
                    user: z
                      .strictObject({
                        id: z.int(),
                        username: z.string(),
                        name: z.string().nullable(),
                        avatar_template: z.string(),
                        title: z.string().nullable(),
                      })
                      .openapi({
                        required: ['id', 'username', 'name', 'avatar_template', 'title'],
                      }),
                  })
                  .openapi({
                    required: [
                      'id',
                      'likes_received',
                      'likes_given',
                      'topics_entered',
                      'topic_count',
                      'post_count',
                      'posts_read',
                      'days_visited',
                      'user',
                    ],
                  }),
              ),
              meta: z
                .strictObject({
                  last_updated_at: z.string().nullable(),
                  total_rows_directory_items: z.int(),
                  load_more_directory_items: z.string(),
                })
                .openapi({
                  required: [
                    'last_updated_at',
                    'total_rows_directory_items',
                    'load_more_directory_items',
                  ],
                }),
            })
            .openapi({ required: ['directory_items', 'meta'] }),
        },
      },
    },
  },
})

export const getAdminUsersIdJsonRoute = createRoute({
  method: 'get',
  path: '/admin/users/{id}.json',
  tags: ['Users', 'Admin'],
  summary: 'Get a user by id',
  operationId: 'adminGetUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              id: z.int(),
              username: z.string(),
              name: z.string().nullable(),
              avatar_template: z.string(),
              active: z.boolean(),
              admin: z.boolean(),
              moderator: z.boolean(),
              last_seen_at: z.string().nullable(),
              last_emailed_at: z.string().nullable(),
              created_at: z.string(),
              last_seen_age: z.number().nullable(),
              last_emailed_age: z.number().nullable(),
              created_at_age: z.number().nullable(),
              trust_level: z.int(),
              manual_locked_trust_level: z.string().nullable(),
              title: z.string().nullable(),
              time_read: z.int(),
              staged: z.boolean(),
              days_visited: z.int(),
              posts_read_count: z.int(),
              topics_entered: z.int(),
              post_count: z.int(),
              associated_accounts: z.array(z.any()).exactOptional(),
              can_send_activation_email: z.boolean(),
              can_activate: z.boolean(),
              can_deactivate: z.boolean(),
              can_change_trust_level: z.boolean().exactOptional(),
              ip_address: z.string(),
              registration_ip_address: z.string().nullable(),
              can_grant_admin: z.boolean(),
              can_revoke_admin: z.boolean(),
              can_grant_moderation: z.boolean(),
              can_revoke_moderation: z.boolean(),
              can_impersonate: z.boolean(),
              like_count: z.int(),
              like_given_count: z.int(),
              topic_count: z.int(),
              flags_given_count: z.int(),
              flags_received_count: z.int(),
              private_topics_count: z.int(),
              can_delete_all_posts: z.boolean(),
              can_be_deleted: z.boolean().exactOptional(),
              can_be_anonymized: z.boolean(),
              can_be_merged: z.boolean(),
              full_suspend_reason: z.string().nullable(),
              latest_export: z.object({}).nullable().exactOptional(),
              full_silence_reason: z.string().nullable().exactOptional(),
              silence_reason: z.string().nullable().exactOptional(),
              post_edits_count: z.int().nullable().exactOptional(),
              primary_group_id: z.int().nullable(),
              badge_count: z.int(),
              warnings_received_count: z.int(),
              bounce_score: z.int().nullable(),
              reset_bounce_score_after: z.string().nullable(),
              can_view_action_logs: z.boolean(),
              can_disable_second_factor: z.boolean(),
              can_delete_sso_record: z.boolean(),
              api_key_count: z.int(),
              similar_users_count: z.int().exactOptional(),
              single_sign_on_record: z.string().nullable(),
              approved_by: z
                .strictObject({
                  id: z.int(),
                  username: z.string(),
                  name: z.string(),
                  avatar_template: z.string(),
                })
                .nullable()
                .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
              suspended_by: z.string().nullable(),
              silenced_by: z.string().nullable(),
              penalty_counts: z
                .strictObject({ silenced: z.int(), suspended: z.int() })
                .exactOptional()
                .openapi({ required: ['silenced', 'suspended'] }),
              next_penalty: z.string().exactOptional(),
              tl3_requirements: z
                .strictObject({
                  time_period: z.int(),
                  requirements_met: z.boolean(),
                  requirements_lost: z.boolean(),
                  trust_level_locked: z.boolean(),
                  on_grace_period: z.boolean(),
                  days_visited: z.int(),
                  min_days_visited: z.int(),
                  num_topics_replied_to: z.int(),
                  min_topics_replied_to: z.int(),
                  topics_viewed: z.int(),
                  min_topics_viewed: z.int(),
                  posts_read: z.int(),
                  min_posts_read: z.int(),
                  topics_viewed_all_time: z.int(),
                  min_topics_viewed_all_time: z.int(),
                  posts_read_all_time: z.int(),
                  min_posts_read_all_time: z.int(),
                  num_flagged_posts: z.int(),
                  max_flagged_posts: z.int(),
                  num_flagged_by_users: z.int(),
                  max_flagged_by_users: z.int(),
                  num_likes_given: z.int(),
                  min_likes_given: z.int(),
                  num_likes_received: z.int(),
                  min_likes_received: z.int(),
                  num_likes_received_days: z.int(),
                  min_likes_received_days: z.int(),
                  num_likes_received_users: z.int(),
                  min_likes_received_users: z.int(),
                  penalty_counts: z
                    .strictObject({ silenced: z.int(), suspended: z.int(), total: z.int() })
                    .openapi({ required: ['silenced', 'suspended', 'total'] }),
                })
                .exactOptional()
                .openapi({
                  required: [
                    'time_period',
                    'requirements_met',
                    'requirements_lost',
                    'trust_level_locked',
                    'on_grace_period',
                    'days_visited',
                    'min_days_visited',
                    'num_topics_replied_to',
                    'min_topics_replied_to',
                    'topics_viewed',
                    'min_topics_viewed',
                    'posts_read',
                    'min_posts_read',
                    'topics_viewed_all_time',
                    'min_topics_viewed_all_time',
                    'posts_read_all_time',
                    'min_posts_read_all_time',
                    'num_flagged_posts',
                    'max_flagged_posts',
                    'num_flagged_by_users',
                    'max_flagged_by_users',
                    'num_likes_given',
                    'min_likes_given',
                    'num_likes_received',
                    'min_likes_received',
                    'num_likes_received_days',
                    'min_likes_received_days',
                    'num_likes_received_users',
                    'min_likes_received_users',
                    'penalty_counts',
                  ],
                }),
              groups: z.array(
                z
                  .strictObject({
                    id: z.int(),
                    automatic: z.boolean(),
                    name: z.string(),
                    display_name: z.string(),
                    user_count: z.int(),
                    mentionable_level: z.int(),
                    messageable_level: z.int(),
                    visibility_level: z.int(),
                    primary_group: z.boolean(),
                    title: z.string().nullable(),
                    grant_trust_level: z.string().nullable(),
                    incoming_email: z.string().nullable(),
                    has_messages: z.boolean(),
                    flair_url: z.string().nullable(),
                    flair_bg_color: z.string().nullable(),
                    flair_color: z.string().nullable(),
                    flair_group_id: z.int().nullable().exactOptional(),
                    bio_raw: z.string().nullable(),
                    bio_cooked: z.string().nullable(),
                    bio_excerpt: z.string().nullable(),
                    public_admission: z.boolean(),
                    public_exit: z.boolean(),
                    allow_membership_requests: z.boolean(),
                    full_name: z.string().nullable(),
                    default_notification_level: z.int(),
                    membership_request_template: z.string().nullable(),
                    members_visibility_level: z.int(),
                    can_see_members: z.boolean(),
                    can_admin_group: z.boolean(),
                    publish_read_state: z.boolean(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'automatic',
                      'name',
                      'display_name',
                      'user_count',
                      'mentionable_level',
                      'messageable_level',
                      'visibility_level',
                      'primary_group',
                      'title',
                      'grant_trust_level',
                      'incoming_email',
                      'has_messages',
                      'flair_url',
                      'flair_bg_color',
                      'flair_color',
                      'bio_raw',
                      'bio_cooked',
                      'bio_excerpt',
                      'public_admission',
                      'public_exit',
                      'allow_membership_requests',
                      'full_name',
                      'default_notification_level',
                      'membership_request_template',
                      'members_visibility_level',
                      'can_see_members',
                      'can_admin_group',
                      'publish_read_state',
                    ],
                  }),
              ),
              external_ids: z.object({}),
              include_ip: z.boolean(),
              upcoming_changes_stats: z
                .array(
                  z
                    .strictObject({
                      name: z.string(),
                      humanized_name: z.string(),
                      description: z.string(),
                      enabled: z.boolean(),
                      specific_groups: z.array(z.string()),
                      reason: z.enum([
                        'enabled_for_everyone',
                        'enabled_for_no_one',
                        'in_specific_groups',
                        'not_in_specific_groups',
                      ]),
                    })
                    .openapi({
                      required: [
                        'name',
                        'humanized_name',
                        'description',
                        'enabled',
                        'specific_groups',
                        'reason',
                      ],
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              required: [
                'id',
                'username',
                'name',
                'avatar_template',
                'active',
                'admin',
                'moderator',
                'last_seen_at',
                'last_emailed_at',
                'created_at',
                'last_seen_age',
                'last_emailed_age',
                'created_at_age',
                'trust_level',
                'manual_locked_trust_level',
                'title',
                'time_read',
                'staged',
                'days_visited',
                'posts_read_count',
                'topics_entered',
                'post_count',
                'can_send_activation_email',
                'can_activate',
                'can_deactivate',
                'ip_address',
                'registration_ip_address',
                'can_grant_admin',
                'can_revoke_admin',
                'can_grant_moderation',
                'can_revoke_moderation',
                'can_impersonate',
                'like_count',
                'like_given_count',
                'topic_count',
                'flags_given_count',
                'flags_received_count',
                'private_topics_count',
                'can_delete_all_posts',
                'can_be_anonymized',
                'can_be_merged',
                'full_suspend_reason',
                'primary_group_id',
                'badge_count',
                'warnings_received_count',
                'bounce_score',
                'reset_bounce_score_after',
                'can_view_action_logs',
                'can_disable_second_factor',
                'can_delete_sso_record',
                'api_key_count',
                'single_sign_on_record',
                'approved_by',
                'suspended_by',
                'silenced_by',
                'groups',
                'external_ids',
                'include_ip',
              ],
            }),
        },
      },
    },
  },
})

export const deleteAdminUsersIdJsonRoute = createRoute({
  method: 'delete',
  path: '/admin/users/{id}.json',
  tags: ['Users', 'Admin'],
  summary: 'Delete a user',
  operationId: 'deleteUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              delete_posts: z.boolean().exactOptional(),
              block_email: z.boolean().exactOptional(),
              block_urls: z.boolean().exactOptional(),
              block_ip: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.strictObject({ deleted: z.boolean() }).openapi({ required: ['deleted'] }),
        },
      },
    },
  },
})

export const putAdminUsersIdActivateJsonRoute = createRoute({
  method: 'put',
  path: '/admin/users/{id}/activate.json',
  tags: ['Users', 'Admin'],
  summary: 'Activate a user',
  operationId: 'activateUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const putAdminUsersIdDeactivateJsonRoute = createRoute({
  method: 'put',
  path: '/admin/users/{id}/deactivate.json',
  tags: ['Users', 'Admin'],
  summary: 'Deactivate a user',
  operationId: 'deactivateUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const putAdminUsersIdSuspendJsonRoute = createRoute({
  method: 'put',
  path: '/admin/users/{id}/suspend.json',
  tags: ['Users', 'Admin'],
  summary: 'Suspend a user',
  operationId: 'suspendUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              suspend_until: z.string().openapi({ example: '2121-02-22' }),
              reason: z.string(),
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Will send an email with this message when present' }),
              post_action: z.string().exactOptional().openapi({ example: 'delete' }),
            })
            .openapi({ required: ['suspend_until', 'reason'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              suspension: z
                .strictObject({
                  suspend_reason: z.string(),
                  full_suspend_reason: z.string(),
                  suspended_till: z.string(),
                  suspended_at: z.string(),
                  suspended_by: z
                    .strictObject({
                      id: z.int(),
                      username: z.string(),
                      name: z.string(),
                      avatar_template: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                })
                .openapi({
                  required: [
                    'suspend_reason',
                    'full_suspend_reason',
                    'suspended_till',
                    'suspended_at',
                    'suspended_by',
                  ],
                }),
            })
            .openapi({ required: ['suspension'] }),
        },
      },
    },
  },
})

export const putAdminUsersIdSilenceJsonRoute = createRoute({
  method: 'put',
  path: '/admin/users/{id}/silence.json',
  tags: ['Users', 'Admin'],
  summary: 'Silence a user',
  operationId: 'silenceUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              silenced_till: z.string().openapi({ example: '2022-06-01T08:00:00.000Z' }),
              reason: z.string(),
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Will send an email with this message when present' }),
              post_action: z.string().exactOptional().openapi({ example: 'delete' }),
            })
            .openapi({ required: ['silenced_till', 'reason'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              silence: z
                .strictObject({
                  silenced: z.boolean(),
                  silence_reason: z.string(),
                  full_silence_reason: z.string(),
                  silenced_till: z.string(),
                  silenced_at: z.string(),
                  silenced_by: z
                    .strictObject({
                      id: z.int(),
                      username: z.string(),
                      name: z.string(),
                      avatar_template: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                })
                .openapi({
                  required: [
                    'silenced',
                    'silence_reason',
                    'full_silence_reason',
                    'silenced_till',
                    'silenced_at',
                    'silenced_by',
                  ],
                }),
            })
            .openapi({ required: ['silence'] }),
        },
      },
    },
  },
})

export const putAdminUsersIdAnonymizeJsonRoute = createRoute({
  method: 'put',
  path: '/admin/users/{id}/anonymize.json',
  tags: ['Users', 'Admin'],
  summary: 'Anonymize a user',
  operationId: 'anonymizeUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string(), username: z.string() })
            .openapi({ required: ['success', 'username'] }),
        },
      },
    },
  },
})

export const postAdminUsersIdMergeJsonRoute = createRoute({
  method: 'post',
  path: '/admin/users/{id}/merge.json',
  tags: ['Users', 'Admin'],
  summary: 'Merge a user',
  description:
    'Merge a user into another user. Requires admin permissions. The\nsource user cannot be a staff member. The merge runs in the background and\ndeletes the source user when complete.',
  operationId: 'mergeUser',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { name: 'Api-Key', in: 'header', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { name: 'Api-Username', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the user to merge',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              target_username: z
                .string()
                .openapi({ description: 'Username of the user to merge into' }),
            })
            .openapi({ required: ['target_username'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const postAdminUsersIdLogOutJsonRoute = createRoute({
  method: 'post',
  path: '/admin/users/{id}/log_out.json',
  tags: ['Users', 'Admin'],
  summary: 'Log a user out',
  operationId: 'logOutUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ example: 'OK' }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const postUserAvatarUsernameRefreshGravatarJsonRoute = createRoute({
  method: 'post',
  path: '/user_avatar/{username}/refresh_gravatar.json',
  tags: ['Users', 'Admin'],
  summary: 'Refresh gravatar',
  operationId: 'refreshGravatar',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              gravatar_upload_id: z.int().nullable(),
              gravatar_avatar_template: z.string().nullable(),
            })
            .openapi({ required: ['gravatar_upload_id', 'gravatar_avatar_template'] }),
        },
      },
    },
  },
})

export const getAdminUsersJsonRoute = createRoute({
  method: 'get',
  path: '/admin/users.json',
  tags: ['Users', 'Admin'],
  summary: 'List users',
  operationId: 'adminListUsers',
  request: {
    query: z.object({
      order: z
        .enum([
          'created',
          'last_emailed',
          'seen',
          'username',
          'email',
          'trust_level',
          'days_visited',
          'posts_read',
          'topics_viewed',
          'posts',
          'read_time',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            schema: {
              type: 'string',
              enum: [
                'created',
                'last_emailed',
                'seen',
                'username',
                'email',
                'trust_level',
                'days_visited',
                'posts_read',
                'topics_viewed',
                'posts',
                'read_time',
              ],
            },
            required: false,
          },
        }),
      asc: z
        .literal('true')
        .exactOptional()
        .openapi({
          param: {
            name: 'asc',
            in: 'query',
            schema: { type: 'string', enum: ['true'] },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'page', in: 'query', schema: { type: 'integer' }, required: false },
        }),
      show_emails: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'show_emails',
            in: 'query',
            description:
              'Include user email addresses in response. These requests will\nbe logged in the staff action logs.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      stats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'stats',
            in: 'query',
            description: 'Include user stats information',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: 'Filter to the user with this email address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ip',
            in: 'query',
            description: 'Filter to users with this IP address',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'users response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  id: z.int(),
                  username: z.string(),
                  name: z.string().nullable(),
                  avatar_template: z.string(),
                  email: z.string().exactOptional(),
                  secondary_emails: z.array(z.any()).exactOptional(),
                  active: z.boolean(),
                  admin: z.boolean(),
                  moderator: z.boolean(),
                  last_seen_at: z.string().nullable(),
                  last_emailed_at: z.string().nullable(),
                  created_at: z.string(),
                  last_seen_age: z.number().nullable(),
                  last_emailed_age: z.number().nullable(),
                  created_at_age: z.number().nullable(),
                  trust_level: z.int(),
                  manual_locked_trust_level: z.string().nullable(),
                  title: z.string().nullable(),
                  time_read: z.int(),
                  staged: z.boolean(),
                  days_visited: z.int(),
                  posts_read_count: z.int(),
                  topics_entered: z.int(),
                  post_count: z.int(),
                })
                .openapi({
                  required: [
                    'id',
                    'username',
                    'name',
                    'avatar_template',
                    'active',
                    'admin',
                    'moderator',
                    'last_seen_at',
                    'last_emailed_at',
                    'created_at',
                    'last_seen_age',
                    'last_emailed_age',
                    'created_at_age',
                    'trust_level',
                    'manual_locked_trust_level',
                    'title',
                    'time_read',
                    'staged',
                    'days_visited',
                    'posts_read_count',
                    'topics_entered',
                    'post_count',
                  ],
                }),
            )
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        },
      },
    },
  },
})

export const getAdminUsersListFlagJsonRoute = createRoute({
  method: 'get',
  path: '/admin/users/list/{flag}.json',
  tags: ['Users', 'Admin'],
  summary: 'List users by flag',
  operationId: 'adminListUsersFlag',
  request: {
    params: z.object({
      flag: z
        .enum(['active', 'new', 'staff', 'suspended', 'blocked', 'suspect'])
        .openapi({
          param: {
            name: 'flag',
            in: 'path',
            schema: {
              type: 'string',
              enum: ['active', 'new', 'staff', 'suspended', 'blocked', 'suspect'],
            },
            required: true,
          },
        }),
    }),
    query: z.object({
      order: z
        .enum([
          'created',
          'last_emailed',
          'seen',
          'username',
          'email',
          'trust_level',
          'days_visited',
          'posts_read',
          'topics_viewed',
          'posts',
          'read_time',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            schema: {
              type: 'string',
              enum: [
                'created',
                'last_emailed',
                'seen',
                'username',
                'email',
                'trust_level',
                'days_visited',
                'posts_read',
                'topics_viewed',
                'posts',
                'read_time',
              ],
            },
            required: false,
          },
        }),
      asc: z
        .literal('true')
        .exactOptional()
        .openapi({
          param: {
            name: 'asc',
            in: 'query',
            schema: { type: 'string', enum: ['true'] },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { name: 'page', in: 'query', schema: { type: 'integer' }, required: false },
        }),
      show_emails: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'show_emails',
            in: 'query',
            description:
              'Include user email addresses in response. These requests will\nbe logged in the staff action logs.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      stats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'stats',
            in: 'query',
            description: 'Include user stats information',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: 'Filter to the user with this email address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ip',
            in: 'query',
            description: 'Filter to users with this IP address',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  id: z.int(),
                  username: z.string(),
                  name: z.string().nullable(),
                  avatar_template: z.string(),
                  email: z.string().exactOptional(),
                  secondary_emails: z.array(z.any()).exactOptional(),
                  active: z.boolean(),
                  admin: z.boolean(),
                  moderator: z.boolean(),
                  last_seen_at: z.string().nullable(),
                  last_emailed_at: z.string().nullable(),
                  created_at: z.string(),
                  last_seen_age: z.number().nullable(),
                  last_emailed_age: z.number().nullable(),
                  created_at_age: z.number().nullable(),
                  trust_level: z.int(),
                  manual_locked_trust_level: z.string().nullable(),
                  title: z.string().nullable(),
                  time_read: z.int(),
                  staged: z.boolean(),
                  days_visited: z.int(),
                  posts_read_count: z.int(),
                  topics_entered: z.int(),
                  post_count: z.int(),
                })
                .openapi({
                  required: [
                    'id',
                    'username',
                    'name',
                    'avatar_template',
                    'active',
                    'admin',
                    'moderator',
                    'last_seen_at',
                    'last_emailed_at',
                    'created_at',
                    'last_seen_age',
                    'last_emailed_age',
                    'created_at_age',
                    'trust_level',
                    'manual_locked_trust_level',
                    'title',
                    'time_read',
                    'staged',
                    'days_visited',
                    'posts_read_count',
                    'topics_entered',
                    'post_count',
                  ],
                }),
            )
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        },
      },
    },
  },
})

export const getUserActionsJsonRoute = createRoute({
  method: 'get',
  path: '/user_actions.json',
  tags: ['Users'],
  summary: 'Get a list of user actions',
  operationId: 'listUserActions',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { name: 'offset', in: 'query', required: true, schema: { type: 'integer' } },
        }),
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'query', required: true, schema: { type: 'string' } },
        }),
      filter: z
        .string()
        .openapi({
          param: { name: 'filter', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              user_actions: z.array(
                z
                  .strictObject({
                    excerpt: z.string(),
                    action_type: z.int(),
                    created_at: z.string(),
                    avatar_template: z.string(),
                    acting_avatar_template: z.string(),
                    slug: z.string(),
                    topic_id: z.int(),
                    target_user_id: z.int(),
                    target_name: z.string().nullable(),
                    target_username: z.string(),
                    post_number: z.int(),
                    post_id: z.string().nullable(),
                    username: z.string(),
                    name: z.string().nullable(),
                    user_id: z.int(),
                    acting_username: z.string(),
                    acting_name: z.string().nullable(),
                    acting_user_id: z.int(),
                    title: z.string(),
                    deleted: z.boolean(),
                    hidden: z.string().nullable(),
                    post_type: z.string().nullable(),
                    action_code: z.string().nullable(),
                    category_id: z.int(),
                    closed: z.boolean(),
                    archived: z.boolean(),
                  })
                  .openapi({
                    required: [
                      'excerpt',
                      'action_type',
                      'created_at',
                      'avatar_template',
                      'acting_avatar_template',
                      'slug',
                      'topic_id',
                      'target_user_id',
                      'target_name',
                      'target_username',
                      'post_number',
                      'post_id',
                      'username',
                      'name',
                      'user_id',
                      'acting_username',
                      'acting_name',
                      'acting_user_id',
                      'title',
                      'deleted',
                      'hidden',
                      'post_type',
                      'action_code',
                      'category_id',
                      'closed',
                      'archived',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['user_actions'] }),
        },
      },
    },
  },
})

export const postSessionForgotPasswordJsonRoute = createRoute({
  method: 'post',
  path: '/session/forgot_password.json',
  tags: ['Users'],
  summary: 'Send password reset email',
  operationId: 'sendPasswordResetEmail',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ login: z.string() }).openapi({ required: ['login'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string(), user_found: z.boolean() })
            .openapi({ required: ['success', 'user_found'] }),
        },
      },
    },
  },
})

export const putUsersPasswordResetTokenJsonRoute = createRoute({
  method: 'put',
  path: '/users/password-reset/{token}.json',
  tags: ['Users'],
  summary: 'Change password',
  operationId: 'changePassword',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ username: z.string(), password: z.string() })
            .openapi({ required: ['username', 'password'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'success response' } },
})

export const getUUsernameEmailsJsonRoute = createRoute({
  method: 'get',
  path: '/u/{username}/emails.json',
  tags: ['Users'],
  summary: 'Get email addresses belonging to a user',
  operationId: 'getUserEmails',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              email: z.string(),
              secondary_emails: z.array(z.any()),
              unconfirmed_emails: z.array(z.any()),
              associated_accounts: z.array(z.any()),
            })
            .openapi({
              required: ['email', 'secondary_emails', 'unconfirmed_emails', 'associated_accounts'],
            }),
        },
      },
    },
  },
})
