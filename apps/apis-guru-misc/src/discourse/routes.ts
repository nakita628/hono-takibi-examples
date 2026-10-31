import { createRoute, z } from '@hono/zod-openapi'

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
                .object({ filename: z.string(), last_modified: z.string(), size: z.int() })
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
            .strictObject({ success: z.string().openapi({ examples: ['OK'] }) })
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
          param: { in: 'path', name: 'filename', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: { in: 'query', name: 'token', required: true, schema: { type: 'string' } },
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
          param: { in: 'path', name: 'filename', required: true, schema: { type: 'string' } },
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
              admin_badges: z
                .strictObject({
                  badge_grouping_ids: z.array(z.any()),
                  badge_ids: z.array(z.any()),
                  badge_type_ids: z.array(z.any()),
                  protected_system_fields: z.array(z.any()),
                  triggers: z
                    .strictObject({
                      none: z.int(),
                      post_action: z.int(),
                      post_revision: z.int(),
                      trust_level_change: z.int(),
                      user_change: z.int(),
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
              badge_groupings: z.array(
                z
                  .strictObject({
                    description: z.string().nullable(),
                    id: z.int(),
                    name: z.string(),
                    position: z.int(),
                    system: z.boolean(),
                  })
                  .openapi({ required: ['id', 'name', 'description', 'position', 'system'] }),
              ),
              badge_types: z.array(
                z
                  .strictObject({ id: z.int(), name: z.string(), sort_order: z.int() })
                  .openapi({ required: ['id', 'name', 'sort_order'] }),
              ),
              badges: z.array(
                z
                  .strictObject({
                    allow_title: z.boolean(),
                    auto_revoke: z.boolean(),
                    badge_grouping_id: z.int(),
                    badge_type_id: z.int(),
                    description: z.string(),
                    enabled: z.boolean(),
                    grant_count: z.int(),
                    i18n_name: z.string().nullable().exactOptional(),
                    icon: z.string(),
                    id: z.int(),
                    image_url: z.string().nullable(),
                    listable: z.boolean(),
                    long_description: z.string(),
                    manually_grantable: z.boolean(),
                    multiple_grant: z.boolean(),
                    name: z.string(),
                    query: z.string().nullable(),
                    show_posts: z.boolean(),
                    slug: z.string(),
                    system: z.boolean(),
                    target_posts: z.boolean(),
                    trigger: z.int().nullable(),
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
                    ],
                  }),
              ),
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
              badge_type_id: z
                .int()
                .openapi({
                  description:
                    'The ID for the badge type. 1 for Gold, 2 for Silver,\n3 for Bronze.',
                }),
              name: z.string().openapi({ description: 'The name for the new badge.' }),
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
              badge: z
                .strictObject({
                  allow_title: z.boolean(),
                  auto_revoke: z.boolean(),
                  badge_grouping_id: z.int(),
                  badge_type_id: z.int(),
                  description: z.string(),
                  enabled: z.boolean(),
                  grant_count: z.int(),
                  icon: z.string(),
                  id: z.int(),
                  image_url: z.string().nullable(),
                  listable: z.boolean(),
                  long_description: z.string(),
                  manually_grantable: z.boolean(),
                  multiple_grant: z.boolean(),
                  name: z.string(),
                  query: z.string().nullable(),
                  show_posts: z.boolean(),
                  slug: z.string(),
                  system: z.boolean(),
                  target_posts: z.boolean(),
                  trigger: z.string().nullable(),
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
                  ],
                }),
              badge_types: z.array(
                z
                  .strictObject({ id: z.int(), name: z.string(), sort_order: z.int() })
                  .openapi({ required: ['id', 'name', 'sort_order'] }),
              ),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              badge_type_id: z
                .int()
                .openapi({
                  description:
                    'The ID for the badge type. 1 for Gold, 2 for Silver,\n3 for Bronze.',
                }),
              name: z.string().openapi({ description: 'The name for the new badge.' }),
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
              badge: z
                .strictObject({
                  allow_title: z.boolean(),
                  auto_revoke: z.boolean(),
                  badge_grouping_id: z.int(),
                  badge_type_id: z.int(),
                  description: z.string(),
                  enabled: z.boolean(),
                  grant_count: z.int(),
                  icon: z.string(),
                  id: z.int(),
                  image_url: z.string().nullable(),
                  listable: z.boolean(),
                  long_description: z.string(),
                  manually_grantable: z.boolean(),
                  multiple_grant: z.boolean(),
                  name: z.string(),
                  query: z.string().nullable(),
                  show_posts: z.boolean(),
                  slug: z.string(),
                  system: z.boolean(),
                  target_posts: z.boolean(),
                  trigger: z.string().nullable(),
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
                  ],
                }),
              badge_types: z.array(
                z
                  .strictObject({ id: z.int(), name: z.string(), sort_order: z.int() })
                  .openapi({ required: ['id', 'name', 'sort_order'] }),
              ),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'success response' } },
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
                  automatic_membership_email_domains: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'pipe|separated' }),
                  bio_raw: z.string().exactOptional().openapi({ description: 'About Group' }),
                  default_notification_level: z.int().exactOptional(),
                  flair_bg_color: z.string().exactOptional(),
                  flair_icon: z.string().exactOptional(),
                  flair_upload_id: z.int().exactOptional(),
                  full_name: z.string().exactOptional(),
                  muted_category_ids: z.array(z.int()).exactOptional(),
                  name: z.string(),
                  owner_usernames: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'comma,separated' }),
                  primary_group: z.boolean().exactOptional(),
                  public_admission: z.boolean().exactOptional(),
                  public_exit: z.boolean().exactOptional(),
                  regular_category_ids: z.array(z.int()).exactOptional(),
                  tracking_category_ids: z.array(z.int()).exactOptional(),
                  usernames: z.string().exactOptional().openapi({ description: 'comma,separated' }),
                  visibility_level: z.int().exactOptional(),
                  watching_category_ids: z.array(z.int()).exactOptional(),
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
                  allow_membership_requests: z.boolean(),
                  automatic: z.boolean(),
                  bio_cooked: z.string().nullable(),
                  bio_excerpt: z.string().nullable(),
                  bio_raw: z.string().nullable(),
                  can_admin_group: z.boolean(),
                  can_edit_group: z.boolean().exactOptional(),
                  can_see_members: z.boolean(),
                  default_notification_level: z.int(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  full_name: z.string().nullable(),
                  grant_trust_level: z.string().nullable(),
                  has_messages: z.boolean(),
                  id: z.int(),
                  incoming_email: z.string().nullable(),
                  members_visibility_level: z.int(),
                  membership_request_template: z.string().nullable(),
                  mentionable_level: z.int(),
                  messageable_level: z.int(),
                  name: z.string(),
                  primary_group: z.boolean(),
                  public_admission: z.boolean(),
                  public_exit: z.boolean(),
                  publish_read_state: z.boolean(),
                  title: z.string().nullable(),
                  user_count: z.int(),
                  visibility_level: z.int(),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ examples: ['OK'] }) })
            .openapi({ required: ['success'] }),
        },
      },
    },
  },
})

export const getAdminUsersListFlagJsonRoute = createRoute({
  method: 'get',
  path: '/admin/users/list/{flag}.json',
  tags: ['Users', 'Admin'],
  summary: 'Get a list of users',
  operationId: 'adminListUsers',
  request: {
    params: z.object({
      flag: z
        .enum(['active', 'new', 'staff', 'suspended', 'blocked', 'suspect'])
        .openapi({
          param: {
            in: 'path',
            name: 'flag',
            required: true,
            schema: {
              enum: ['active', 'new', 'staff', 'suspended', 'blocked', 'suspect'],
              type: 'string',
            },
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
            in: 'query',
            name: 'order',
            schema: {
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
              type: 'string',
            },
            required: false,
          },
        }),
      asc: z
        .literal('true')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'asc',
            schema: { enum: ['true'], type: 'string' },
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
          param: { in: 'query', name: 'page', schema: { type: 'integer' }, required: false },
        }),
      show_emails: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'show_emails', schema: { type: 'boolean' }, required: false },
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
                  active: z.boolean(),
                  admin: z.boolean(),
                  avatar_template: z.string(),
                  created_at: z.string(),
                  created_at_age: z.number().nullable(),
                  days_visited: z.int(),
                  email: z.string().exactOptional(),
                  flag_level: z.int(),
                  id: z.int(),
                  last_emailed_age: z.number().nullable(),
                  last_emailed_at: z.string().nullable(),
                  last_seen_age: z.number().nullable(),
                  last_seen_at: z.string().nullable(),
                  manual_locked_trust_level: z.string().nullable(),
                  moderator: z.boolean(),
                  name: z.string().nullable(),
                  post_count: z.int(),
                  posts_read_count: z.int(),
                  secondary_emails: z.array(z.any()).exactOptional(),
                  staged: z.boolean(),
                  time_read: z.int(),
                  title: z.string().nullable(),
                  topics_entered: z.int(),
                  trust_level: z.int(),
                  username: z.string(),
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
                    'flag_level',
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
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
              active: z.boolean(),
              admin: z.boolean(),
              api_key_count: z.int(),
              approved_by: z
                .strictObject({
                  avatar_template: z.string(),
                  id: z.int(),
                  name: z.string(),
                  username: z.string(),
                })
                .nullable()
                .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
              associated_accounts: z.array(z.any()).exactOptional(),
              avatar_template: z.string(),
              badge_count: z.int(),
              bounce_score: z.int().nullable(),
              can_activate: z.boolean(),
              can_be_anonymized: z.boolean(),
              can_be_deleted: z.boolean(),
              can_be_merged: z.boolean(),
              can_deactivate: z.boolean(),
              can_delete_all_posts: z.boolean(),
              can_delete_sso_record: z.boolean(),
              can_disable_second_factor: z.boolean(),
              can_grant_admin: z.boolean(),
              can_grant_moderation: z.boolean(),
              can_impersonate: z.boolean(),
              can_revoke_admin: z.boolean(),
              can_revoke_moderation: z.boolean(),
              can_send_activation_email: z.boolean(),
              can_view_action_logs: z.boolean(),
              created_at: z.string(),
              created_at_age: z.number().nullable(),
              days_visited: z.int(),
              external_ids: z.object({}),
              flag_level: z.int(),
              flags_given_count: z.int(),
              flags_received_count: z.int(),
              full_suspend_reason: z.string().nullable(),
              groups: z.array(
                z
                  .strictObject({
                    allow_membership_requests: z.boolean(),
                    automatic: z.boolean(),
                    bio_cooked: z.string().nullable(),
                    bio_excerpt: z.string().nullable(),
                    bio_raw: z.string().nullable(),
                    can_admin_group: z.boolean(),
                    can_see_members: z.boolean(),
                    default_notification_level: z.int(),
                    display_name: z.string(),
                    flair_bg_color: z.string().nullable(),
                    flair_color: z.string().nullable(),
                    flair_url: z.string().nullable(),
                    full_name: z.string().nullable(),
                    grant_trust_level: z.string().nullable(),
                    has_messages: z.boolean(),
                    id: z.int(),
                    incoming_email: z.string().nullable(),
                    members_visibility_level: z.int(),
                    membership_request_template: z.string().nullable(),
                    mentionable_level: z.int(),
                    messageable_level: z.int(),
                    name: z.string(),
                    primary_group: z.boolean(),
                    public_admission: z.boolean(),
                    public_exit: z.boolean(),
                    publish_read_state: z.boolean(),
                    title: z.string().nullable(),
                    user_count: z.int(),
                    visibility_level: z.int(),
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
              id: z.int(),
              ip_address: z.string(),
              last_emailed_age: z.number().nullable(),
              last_emailed_at: z.string().nullable(),
              last_seen_age: z.number().nullable(),
              last_seen_at: z.string().nullable(),
              like_count: z.int(),
              like_given_count: z.int(),
              manual_locked_trust_level: z.string().nullable(),
              moderator: z.boolean(),
              name: z.string().nullable(),
              next_penalty: z.string().exactOptional(),
              penalty_counts: z
                .strictObject({ silenced: z.int(), suspended: z.int() })
                .exactOptional()
                .openapi({ required: ['silenced', 'suspended'] }),
              post_count: z.int(),
              post_edits_count: z.int().nullable().exactOptional(),
              posts_read_count: z.int(),
              primary_group_id: z.string().nullable(),
              private_topics_count: z.int(),
              registration_ip_address: z.string().nullable(),
              reset_bounce_score_after: z.string().nullable(),
              silence_reason: z.string().nullable(),
              silenced_by: z.string().nullable(),
              single_sign_on_record: z.string().nullable(),
              staged: z.boolean(),
              suspended_by: z.string().nullable(),
              time_read: z.int(),
              title: z.string().nullable(),
              tl3_requirements: z
                .strictObject({
                  days_visited: z.int(),
                  max_flagged_by_users: z.int(),
                  max_flagged_posts: z.int(),
                  min_days_visited: z.int(),
                  min_likes_given: z.int(),
                  min_likes_received: z.int(),
                  min_likes_received_days: z.int(),
                  min_likes_received_users: z.int(),
                  min_posts_read: z.int(),
                  min_posts_read_all_time: z.int(),
                  min_topics_replied_to: z.int(),
                  min_topics_viewed: z.int(),
                  min_topics_viewed_all_time: z.int(),
                  num_flagged_by_users: z.int(),
                  num_flagged_posts: z.int(),
                  num_likes_given: z.int(),
                  num_likes_received: z.int(),
                  num_likes_received_days: z.int(),
                  num_likes_received_users: z.int(),
                  num_topics_replied_to: z.int(),
                  on_grace_period: z.boolean(),
                  penalty_counts: z
                    .strictObject({ silenced: z.int(), suspended: z.int(), total: z.int() })
                    .openapi({ required: ['silenced', 'suspended', 'total'] }),
                  posts_read: z.int(),
                  posts_read_all_time: z.int(),
                  requirements_lost: z.boolean(),
                  requirements_met: z.boolean(),
                  time_period: z.int(),
                  topics_viewed: z.int(),
                  topics_viewed_all_time: z.int(),
                  trust_level_locked: z.boolean(),
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
              topic_count: z.int(),
              topics_entered: z.int(),
              trust_level: z.int(),
              username: z.string(),
              warnings_received_count: z.int(),
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
                'flag_level',
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
                'can_be_deleted',
                'can_be_anonymized',
                'can_be_merged',
                'full_suspend_reason',
                'silence_reason',
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              block_email: z.boolean().exactOptional(),
              block_ip: z.boolean().exactOptional(),
              block_urls: z.boolean().exactOptional(),
              delete_posts: z.boolean().exactOptional(),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .strictObject({ success: z.string().openapi({ examples: ['OK'] }) })
            .openapi({ required: ['success'] }),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Will send an email with this message when present' }),
              post_action: z
                .string()
                .exactOptional()
                .openapi({ examples: ['delete'] }),
              reason: z.string().exactOptional(),
              silenced_till: z
                .string()
                .exactOptional()
                .openapi({ examples: ['2022-06-01T08:00:00.000Z'] }),
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
          schema: z
            .strictObject({
              silence: z
                .strictObject({
                  silence_reason: z.string(),
                  silenced: z.boolean(),
                  silenced_at: z.string(),
                  silenced_by: z
                    .strictObject({
                      avatar_template: z.string(),
                      id: z.int(),
                      name: z.string(),
                      username: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                  silenced_till: z.string(),
                })
                .openapi({
                  required: [
                    'silenced',
                    'silence_reason',
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Will send an email with this message when present' }),
              post_action: z
                .string()
                .exactOptional()
                .openapi({ examples: ['delete'] }),
              reason: z.string(),
              suspend_until: z.string().openapi({ examples: ['2121-02-22'] }),
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
                  full_suspend_reason: z.string(),
                  suspend_reason: z.string(),
                  suspended_at: z.string(),
                  suspended_by: z
                    .strictObject({
                      avatar_template: z.string(),
                      id: z.int(),
                      name: z.string(),
                      username: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                  suspended_till: z.string(),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
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
                  all_topics_wiki: z.boolean(),
                  allow_badges: z.boolean(),
                  allow_global_tags: z.boolean().exactOptional(),
                  allow_unlimited_owner_edits_on_first_post: z.boolean(),
                  allowed_tag_groups: z.array(z.any()).exactOptional(),
                  allowed_tags: z.array(z.any()).exactOptional(),
                  auto_close_based_on_last_post: z.boolean(),
                  auto_close_hours: z.string().nullable(),
                  available_groups: z.array(z.any()),
                  can_delete: z.boolean(),
                  can_edit: z.boolean(),
                  color: z.string(),
                  custom_fields: z.strictObject({}),
                  default_list_filter: z.string(),
                  default_slow_mode_seconds: z.string().nullable(),
                  default_top_period: z.string(),
                  default_view: z.string().nullable(),
                  description: z.string().nullable(),
                  description_excerpt: z.string().nullable(),
                  description_text: z.string().nullable(),
                  email_in: z.string().nullable(),
                  email_in_allow_strangers: z.boolean(),
                  form_template_ids: z.array(z.any()).exactOptional(),
                  group_permissions: z.array(
                    z
                      .strictObject({ group_name: z.string(), permission_type: z.int() })
                      .openapi({ required: ['permission_type', 'group_name'] }),
                  ),
                  has_children: z.string().nullable(),
                  id: z.int(),
                  mailinglist_mirror: z.boolean(),
                  minimum_required_tags: z.int(),
                  name: z.string(),
                  navigate_to_first_post_after_read: z.boolean(),
                  notification_level: z.int(),
                  num_featured_topics: z.int(),
                  permission: z.int().nullable(),
                  position: z.int(),
                  post_count: z.int(),
                  read_only_banner: z.string().nullable(),
                  read_restricted: z.boolean(),
                  required_tag_groups: z.array(
                    z
                      .strictObject({ min_count: z.int(), name: z.string() })
                      .openapi({ required: ['name', 'min_count'] }),
                  ),
                  search_priority: z.int(),
                  show_subcategory_list: z.boolean(),
                  slug: z.string(),
                  sort_ascending: z.string().nullable(),
                  sort_order: z.string().nullable(),
                  subcategory_list_style: z.string(),
                  text_color: z.string(),
                  topic_count: z.int(),
                  topic_featured_link_allowed: z.boolean(),
                  topic_template: z.string().nullable(),
                  topic_url: z.string().nullable(),
                  uploaded_background: z.string().nullable(),
                  uploaded_logo: z.string().nullable(),
                  uploaded_logo_dark: z.string().nullable(),
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
                    'has_children',
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
                    'uploaded_logo',
                    'uploaded_logo_dark',
                    'uploaded_background',
                  ],
                }),
            })
            .openapi({ required: ['category'] }),
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
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
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
              primary_groups: z.array(z.any()).exactOptional(),
              topic_list: z
                .strictObject({
                  can_create_topic: z.boolean(),
                  per_page: z.int(),
                  top_tags: z.array(z.any()).exactOptional(),
                  topics: z.array(
                    z
                      .strictObject({
                        archetype: z.string(),
                        archived: z.boolean(),
                        bookmarked: z.string().nullable(),
                        bumped: z.boolean(),
                        bumped_at: z.string(),
                        category_id: z.int(),
                        closed: z.boolean(),
                        created_at: z.string(),
                        excerpt: z.string(),
                        fancy_title: z.string(),
                        featured_link: z.string().nullable(),
                        has_summary: z.boolean(),
                        highest_post_number: z.int(),
                        id: z.int(),
                        image_url: z.string().nullable(),
                        last_posted_at: z.string(),
                        last_poster_username: z.string(),
                        like_count: z.int(),
                        liked: z.string().nullable(),
                        pinned: z.boolean(),
                        pinned_globally: z.boolean(),
                        posters: z.array(
                          z
                            .strictObject({
                              description: z.string(),
                              extras: z.string(),
                              primary_group_id: z.string().nullable(),
                              user_id: z.int(),
                            })
                            .openapi({
                              required: ['extras', 'description', 'user_id', 'primary_group_id'],
                            }),
                        ),
                        posts_count: z.int(),
                        reply_count: z.int(),
                        slug: z.string(),
                        title: z.string(),
                        unpinned: z.string().nullable(),
                        unseen: z.boolean(),
                        views: z.int(),
                        visible: z.boolean(),
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
              users: z
                .array(
                  z
                    .strictObject({
                      avatar_template: z.string(),
                      id: z.int(),
                      name: z.string(),
                      username: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: ['topic_list'] }),
        },
      },
    },
  },
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
            in: 'query',
            name: 'include_subcategories',
            schema: { enum: [true], type: 'boolean' },
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
                        can_edit: z.boolean(),
                        color: z.string(),
                        default_list_filter: z.string(),
                        default_top_period: z.string(),
                        default_view: z.string().nullable(),
                        description: z.string().nullable(),
                        description_excerpt: z.string().nullable(),
                        description_text: z.string().nullable(),
                        has_children: z.boolean(),
                        id: z.int(),
                        is_uncategorized: z.boolean().exactOptional(),
                        minimum_required_tags: z.int(),
                        name: z.string(),
                        navigate_to_first_post_after_read: z.boolean(),
                        notification_level: z.int(),
                        num_featured_topics: z.int(),
                        permission: z.int(),
                        position: z.int(),
                        post_count: z.int(),
                        read_restricted: z.boolean(),
                        show_subcategory_list: z.boolean(),
                        slug: z.string(),
                        sort_ascending: z.string().nullable(),
                        sort_order: z.string().nullable(),
                        subcategory_ids: z.array(z.any()),
                        subcategory_list: z.array(z.any()).nullable().exactOptional(),
                        subcategory_list_style: z.string(),
                        text_color: z.string(),
                        topic_count: z.int(),
                        topic_template: z.string().nullable(),
                        topic_url: z.string().nullable(),
                        topics_all_time: z.int(),
                        topics_day: z.int(),
                        topics_month: z.int(),
                        topics_week: z.int(),
                        topics_year: z.int(),
                        uploaded_background: z.string().nullable(),
                        uploaded_logo: z.string().nullable(),
                        uploaded_logo_dark: z.string().nullable(),
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
                          'has_children',
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
              allow_badges: z.boolean().exactOptional(),
              color: z
                .string()
                .exactOptional()
                .openapi({ examples: ['49d9e9'] }),
              form_template_ids: z.array(z.any()).exactOptional(),
              name: z.string(),
              parent_category_id: z.int().exactOptional(),
              permissions: z
                .looseObject({
                  everyone: z
                    .int()
                    .exactOptional()
                    .openapi({ examples: [1] }),
                  staff: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              search_priority: z.int().exactOptional(),
              slug: z.string().exactOptional(),
              text_color: z
                .string()
                .exactOptional()
                .openapi({ examples: ['f0fcfd'] }),
              topic_featured_links_allowed: z.boolean().exactOptional(),
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
                  all_topics_wiki: z.boolean(),
                  allow_badges: z.boolean(),
                  allow_global_tags: z.boolean().exactOptional(),
                  allow_unlimited_owner_edits_on_first_post: z.boolean(),
                  allowed_tag_groups: z.array(z.any()).exactOptional(),
                  allowed_tags: z.array(z.any()).exactOptional(),
                  auto_close_based_on_last_post: z.boolean(),
                  auto_close_hours: z.string().nullable(),
                  available_groups: z.array(z.any()),
                  can_delete: z.boolean(),
                  can_edit: z.boolean(),
                  color: z.string(),
                  custom_fields: z.strictObject({}),
                  default_list_filter: z.string(),
                  default_slow_mode_seconds: z.string().nullable(),
                  default_top_period: z.string(),
                  default_view: z.string().nullable(),
                  description: z.string().nullable(),
                  description_excerpt: z.string().nullable(),
                  description_text: z.string().nullable(),
                  email_in: z.string().nullable(),
                  email_in_allow_strangers: z.boolean(),
                  form_template_ids: z.array(z.any()).exactOptional(),
                  group_permissions: z.array(
                    z
                      .strictObject({ group_name: z.string(), permission_type: z.int() })
                      .openapi({ required: ['permission_type', 'group_name'] }),
                  ),
                  has_children: z.string().nullable(),
                  id: z.int(),
                  mailinglist_mirror: z.boolean(),
                  minimum_required_tags: z.int(),
                  name: z.string(),
                  navigate_to_first_post_after_read: z.boolean(),
                  notification_level: z.int(),
                  num_featured_topics: z.int(),
                  permission: z.int().nullable(),
                  position: z.int(),
                  post_count: z.int(),
                  read_only_banner: z.string().nullable(),
                  read_restricted: z.boolean(),
                  required_tag_groups: z.array(
                    z
                      .strictObject({ min_count: z.int(), name: z.string() })
                      .openapi({ required: ['name', 'min_count'] }),
                  ),
                  search_priority: z.int(),
                  show_subcategory_list: z.boolean(),
                  slug: z.string(),
                  sort_ascending: z.string().nullable(),
                  sort_order: z.string().nullable(),
                  subcategory_list_style: z.string(),
                  text_color: z.string(),
                  topic_count: z.int(),
                  topic_featured_link_allowed: z.boolean(),
                  topic_template: z.string().nullable(),
                  topic_url: z.string().nullable(),
                  uploaded_background: z.string().nullable(),
                  uploaded_logo: z.string().nullable(),
                  uploaded_logo_dark: z.string().nullable(),
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
                    'has_children',
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
                    'uploaded_logo',
                    'uploaded_logo_dark',
                    'uploaded_background',
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              allow_badges: z.boolean().exactOptional(),
              color: z
                .string()
                .exactOptional()
                .openapi({ examples: ['49d9e9'] }),
              form_template_ids: z.array(z.any()).exactOptional(),
              name: z.string(),
              parent_category_id: z.int().exactOptional(),
              permissions: z
                .looseObject({
                  everyone: z
                    .int()
                    .exactOptional()
                    .openapi({ examples: [1] }),
                  staff: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              search_priority: z.int().exactOptional(),
              slug: z.string().exactOptional(),
              text_color: z
                .string()
                .exactOptional()
                .openapi({ examples: ['f0fcfd'] }),
              topic_featured_links_allowed: z.boolean().exactOptional(),
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
                  all_topics_wiki: z.boolean(),
                  allow_badges: z.boolean(),
                  allow_global_tags: z.boolean().exactOptional(),
                  allow_unlimited_owner_edits_on_first_post: z.boolean(),
                  allowed_tag_groups: z.array(z.any()).exactOptional(),
                  allowed_tags: z.array(z.any()).exactOptional(),
                  auto_close_based_on_last_post: z.boolean(),
                  auto_close_hours: z.string().nullable(),
                  available_groups: z.array(z.any()),
                  can_delete: z.boolean(),
                  can_edit: z.boolean(),
                  color: z.string(),
                  custom_fields: z.strictObject({}),
                  default_list_filter: z.string(),
                  default_slow_mode_seconds: z.string().nullable(),
                  default_top_period: z.string(),
                  default_view: z.string().nullable(),
                  description: z.string().nullable(),
                  description_excerpt: z.string().nullable(),
                  description_text: z.string().nullable(),
                  email_in: z.string().nullable(),
                  email_in_allow_strangers: z.boolean(),
                  form_template_ids: z.array(z.any()),
                  group_permissions: z.array(
                    z
                      .strictObject({ group_name: z.string(), permission_type: z.int() })
                      .openapi({ required: ['permission_type', 'group_name'] }),
                  ),
                  has_children: z.string().nullable(),
                  id: z.int(),
                  mailinglist_mirror: z.boolean(),
                  minimum_required_tags: z.int(),
                  name: z.string(),
                  navigate_to_first_post_after_read: z.boolean(),
                  notification_level: z.int(),
                  num_featured_topics: z.int(),
                  permission: z.string().nullable(),
                  position: z.int(),
                  post_count: z.int(),
                  read_only_banner: z.string().nullable(),
                  read_restricted: z.boolean(),
                  required_tag_groups: z.array(
                    z
                      .strictObject({ min_count: z.int(), name: z.string() })
                      .openapi({ required: ['name', 'min_count'] }),
                  ),
                  search_priority: z.int(),
                  show_subcategory_list: z.boolean(),
                  slug: z.string(),
                  sort_ascending: z.string().nullable(),
                  sort_order: z.string().nullable(),
                  subcategory_list_style: z.string(),
                  text_color: z.string(),
                  topic_count: z.int(),
                  topic_featured_link_allowed: z.boolean(),
                  topic_template: z.string().nullable(),
                  topic_url: z.string().nullable(),
                  uploaded_background: z.string().nullable(),
                  uploaded_logo: z.string().nullable(),
                  uploaded_logo_dark: z.string().nullable(),
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
                    'form_template_ids',
                    'has_children',
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
                    'uploaded_logo',
                    'uploaded_logo_dark',
                    'uploaded_background',
                  ],
                }),
              success: z.string(),
            })
            .openapi({ required: ['success', 'category'] }),
        },
      },
    },
  },
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
            in: 'query',
            name: 'period',
            required: true,
            schema: {
              enum: ['daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'all'],
              type: 'string',
            },
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
            in: 'query',
            name: 'order',
            required: true,
            schema: {
              enum: [
                'likes_received',
                'likes_given',
                'topic_count',
                'post_count',
                'topics_entered',
                'posts_read',
                'days_visited',
              ],
              type: 'string',
            },
          },
        }),
      asc: z
        .literal('true')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'asc',
            schema: { enum: ['true'], type: 'string' },
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
          param: { in: 'query', name: 'page', schema: { type: 'integer' }, required: false },
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
                    days_visited: z.int(),
                    id: z.int(),
                    likes_given: z.int(),
                    likes_received: z.int(),
                    post_count: z.int(),
                    posts_read: z.int(),
                    topic_count: z.int(),
                    topics_entered: z.int(),
                    user: z
                      .strictObject({
                        avatar_template: z.string(),
                        id: z.int(),
                        name: z.string().nullable(),
                        title: z.string().nullable(),
                        username: z.string(),
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
                  load_more_directory_items: z.string(),
                  total_rows_directory_items: z.int(),
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
              extras: z
                .strictObject({ type_filters: z.array(z.any()) })
                .openapi({ required: ['type_filters'] }),
              groups: z.array(
                z
                  .strictObject({
                    allow_membership_requests: z.boolean(),
                    automatic: z.boolean(),
                    bio_cooked: z.string().nullable(),
                    bio_excerpt: z.string().nullable(),
                    bio_raw: z.string().nullable(),
                    can_admin_group: z.boolean(),
                    can_edit_group: z.boolean().exactOptional(),
                    can_see_members: z.boolean(),
                    default_notification_level: z.int(),
                    display_name: z.string(),
                    flair_bg_color: z.string().nullable(),
                    flair_color: z.string().nullable(),
                    flair_url: z.string().nullable(),
                    full_name: z.string().nullable(),
                    grant_trust_level: z.string().nullable(),
                    has_messages: z.boolean(),
                    id: z.int(),
                    incoming_email: z.string().nullable(),
                    is_group_owner: z.boolean().exactOptional(),
                    is_group_user: z.boolean().exactOptional(),
                    members_visibility_level: z.int(),
                    membership_request_template: z.string().nullable(),
                    mentionable_level: z.int(),
                    messageable_level: z.int(),
                    name: z.string(),
                    primary_group: z.boolean(),
                    public_admission: z.boolean(),
                    public_exit: z.boolean(),
                    publish_read_state: z.boolean(),
                    title: z.string().nullable(),
                    user_count: z.int(),
                    visibility_level: z.int(),
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
              load_more_groups: z.string(),
              total_rows_groups: z.int(),
            })
            .openapi({ required: ['groups', 'extras', 'total_rows_groups', 'load_more_groups'] }),
        },
      },
    },
  },
})

export const getGroupsIdJsonRoute = createRoute({
  method: 'get',
  path: '/groups/{id}.json',
  tags: ['Groups'],
  summary: 'Get a group',
  operationId: 'getGroup',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Use group name instead of id',
            example: 'name',
            in: 'path',
            name: 'id',
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
              extras: z
                .strictObject({ visible_group_names: z.array(z.any()) })
                .openapi({ required: ['visible_group_names'] }),
              group: z
                .strictObject({
                  allow_membership_requests: z.boolean(),
                  allow_unknown_sender_topic_replies: z.boolean(),
                  associated_group_ids: z.array(z.any()).exactOptional(),
                  automatic: z.boolean(),
                  automatic_membership_email_domains: z.string().nullable(),
                  bio_cooked: z.string().nullable(),
                  bio_excerpt: z.string().nullable(),
                  bio_raw: z.string().nullable(),
                  can_admin_group: z.boolean(),
                  can_edit_group: z.boolean().exactOptional(),
                  can_see_members: z.boolean(),
                  default_notification_level: z.int(),
                  email_from_alias: z.string().nullable().exactOptional(),
                  email_password: z.string().nullable(),
                  email_username: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  full_name: z.string().nullable(),
                  grant_trust_level: z.string().nullable(),
                  has_messages: z.boolean(),
                  id: z.int(),
                  imap_enabled: z.boolean().exactOptional(),
                  imap_last_error: z.string().nullable(),
                  imap_mailbox_name: z.string(),
                  imap_mailboxes: z.array(z.any()),
                  imap_new_emails: z.string().nullable(),
                  imap_old_emails: z.string().nullable(),
                  imap_port: z.string().nullable(),
                  imap_server: z.string().nullable(),
                  imap_ssl: z.string().nullable(),
                  imap_updated_at: z.string().nullable().exactOptional(),
                  imap_updated_by: z.object({}).nullable().exactOptional(),
                  incoming_email: z.string().nullable(),
                  is_group_owner_display: z.boolean(),
                  is_group_user: z.boolean(),
                  members_visibility_level: z.int(),
                  membership_request_template: z.string().nullable(),
                  mentionable: z.boolean(),
                  mentionable_level: z.int(),
                  message_count: z.int(),
                  messageable: z.boolean(),
                  messageable_level: z.int(),
                  muted_category_ids: z.array(z.any()),
                  muted_tags: z.array(z.any()).exactOptional(),
                  name: z.string(),
                  primary_group: z.boolean(),
                  public_admission: z.boolean(),
                  public_exit: z.boolean(),
                  publish_read_state: z.boolean(),
                  regular_category_ids: z.array(z.any()),
                  regular_tags: z.array(z.any()).exactOptional(),
                  smtp_enabled: z.boolean().exactOptional(),
                  smtp_port: z.string().nullable(),
                  smtp_server: z.string().nullable(),
                  smtp_ssl: z.string().nullable(),
                  smtp_updated_at: z.string().nullable().exactOptional(),
                  smtp_updated_by: z.object({}).nullable().exactOptional(),
                  title: z.string().nullable(),
                  tracking_category_ids: z.array(z.any()),
                  tracking_tags: z.array(z.any()).exactOptional(),
                  user_count: z.int(),
                  visibility_level: z.int(),
                  watching_category_ids: z.array(z.any()),
                  watching_first_post_category_ids: z.array(z.any()),
                  watching_first_post_tags: z.array(z.any()).exactOptional(),
                  watching_tags: z.array(z.any()).exactOptional(),
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
                    'smtp_ssl',
                    'imap_server',
                    'imap_port',
                    'imap_ssl',
                    'imap_mailbox_name',
                    'imap_mailboxes',
                    'email_username',
                    'email_password',
                    'imap_last_error',
                    'imap_old_emails',
                    'imap_new_emails',
                    'message_count',
                    'allow_unknown_sender_topic_replies',
                    'watching_category_ids',
                    'tracking_category_ids',
                    'watching_first_post_category_ids',
                    'regular_category_ids',
                    'muted_category_ids',
                  ],
                }),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              group: z
                .strictObject({
                  automatic_membership_email_domains: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'pipe|separated' }),
                  bio_raw: z.string().exactOptional().openapi({ description: 'About Group' }),
                  default_notification_level: z.int().exactOptional(),
                  flair_bg_color: z.string().exactOptional(),
                  flair_icon: z.string().exactOptional(),
                  flair_upload_id: z.int().exactOptional(),
                  full_name: z.string().exactOptional(),
                  muted_category_ids: z.array(z.int()).exactOptional(),
                  name: z.string(),
                  owner_usernames: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'comma,separated' }),
                  primary_group: z.boolean().exactOptional(),
                  public_admission: z.boolean().exactOptional(),
                  public_exit: z.boolean().exactOptional(),
                  regular_category_ids: z.array(z.int()).exactOptional(),
                  tracking_category_ids: z.array(z.int()).exactOptional(),
                  usernames: z.string().exactOptional().openapi({ description: 'comma,separated' }),
                  visibility_level: z.int().exactOptional(),
                  watching_category_ids: z.array(z.int()).exactOptional(),
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
            .object({
              success: z
                .string()
                .exactOptional()
                .openapi({ examples: ['OK'] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getGroupsIdMembersJsonRoute = createRoute({
  method: 'get',
  path: '/groups/{id}/members.json',
  tags: ['Groups'],
  summary: 'List group members',
  operationId: 'listGroupMembers',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Use group name instead of id',
            example: 'name',
            in: 'path',
            name: 'id',
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
                    added_at: z.string(),
                    avatar_template: z.string(),
                    id: z.int(),
                    last_posted_at: z.string(),
                    last_seen_at: z.string(),
                    name: z.string().nullable(),
                    timezone: z.string(),
                    title: z.string().nullable(),
                    username: z.string(),
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
                .strictObject({ limit: z.int(), offset: z.int(), total: z.int() })
                .openapi({ required: ['total', 'limit', 'offset'] }),
              owners: z.array(
                z
                  .strictObject({
                    added_at: z.string(),
                    avatar_template: z.string(),
                    id: z.int(),
                    last_posted_at: z.string(),
                    last_seen_at: z.string(),
                    name: z.string().nullable(),
                    timezone: z.string(),
                    title: z.string().nullable(),
                    username: z.string(),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
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
                .openapi({
                  description: 'comma separated list',
                  examples: ['username1,username2'],
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
              emails: z.array(z.any()),
              success: z.string(),
              usernames: z.array(z.any()),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
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
                .openapi({
                  description: 'comma separated list',
                  examples: ['username1,username2'],
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
              skipped_usernames: z.array(z.any()),
              success: z.string(),
              usernames: z.array(z.any()),
            })
            .openapi({ required: ['success', 'usernames', 'skipped_usernames'] }),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              custom_message: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional, for email invites' }),
              email: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'required for email invites only',
                  examples: ['not-a-user-yet@example.com'],
                }),
              expires_at: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'optional, if not supplied, the invite_expiry_days site\nsetting is used',
                }),
              group_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'optional, either this or `group_names`' }),
              group_names: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional, either this or `group_id`' }),
              max_redemptions_allowed: z
                .int()
                .default(1)
                .exactOptional()
                .openapi({ description: 'optional, for link invites', examples: [5] }),
              skip_email: z.boolean().default(false).exactOptional(),
              topic_id: z.int().exactOptional(),
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
              created_at: z
                .string()
                .exactOptional()
                .openapi({ examples: ['2021-01-01T12:00:00.000Z'] }),
              custom_message: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ examples: ['Hello world!'] }),
              email: z
                .string()
                .exactOptional()
                .openapi({ examples: ['not-a-user-yet@example.com'] }),
              emailed: z
                .boolean()
                .exactOptional()
                .openapi({ examples: [false] }),
              expired: z
                .boolean()
                .exactOptional()
                .openapi({ examples: [false] }),
              expires_at: z
                .string()
                .exactOptional()
                .openapi({ examples: ['2021-02-01T12:00:00.000Z'] }),
              groups: z
                .array(z.any())
                .exactOptional()
                .openapi({ examples: [[]] }),
              id: z
                .int()
                .exactOptional()
                .openapi({ examples: [42] }),
              link: z
                .string()
                .exactOptional()
                .openapi({
                  examples: ['http://example.com/invites/9045fd767efe201ca60c6658bcf14158'],
                }),
              topics: z
                .array(z.any())
                .exactOptional()
                .openapi({ examples: [[]] }),
              updated_at: z
                .string()
                .exactOptional()
                .openapi({ examples: ['2021-01-01T12:00:00.000Z'] }),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enum: `default`, `created`, `activity`, `views`, `posts`, `category`,\n`likes`, `op_likes`, `posters`',
            in: 'query',
            name: 'order',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ascending: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defaults to `desc`, add `ascending=true` to sort asc',
            in: 'query',
            name: 'ascending',
            schema: { type: 'string' },
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
                          archetype: z.string().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          category_id: z.int().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          created_at: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          id: z.int().exactOptional(),
                          image_url: z.string().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          op_like_count: z.int().exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  description: z.string().exactOptional(),
                                  extras: z.string().exactOptional(),
                                  primary_group_id: z.string().nullable().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          slug: z.string().exactOptional(),
                          title: z.string().exactOptional(),
                          unpinned: z.string().nullable().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          visible: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              users: z
                .array(
                  z
                    .object({
                      avatar_template: z.string().exactOptional(),
                      id: z.int().exactOptional(),
                      name: z.string().nullable().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
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
              load_more_notifications: z.string().exactOptional(),
              notifications: z
                .array(
                  z
                    .object({
                      created_at: z.string().exactOptional(),
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
                      id: z.int().exactOptional(),
                      notification_type: z.int().exactOptional(),
                      post_number: z.string().nullable().exactOptional(),
                      read: z.boolean().exactOptional(),
                      slug: z.string().nullable().exactOptional(),
                      topic_id: z.int().nullable().exactOptional(),
                      user_id: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              seen_notification_id: z.int().exactOptional(),
              total_rows_notifications: z.int().exactOptional(),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              flag_topic: z.boolean().exactOptional(),
              id: z.int(),
              post_action_type_id: z.int(),
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
            .object({
              actions_summary: z
                .array(
                  z
                    .object({
                      acted: z.boolean().exactOptional(),
                      can_undo: z.boolean().exactOptional(),
                      count: z.int().exactOptional(),
                      id: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              admin: z.boolean().exactOptional(),
              avatar_template: z.string().exactOptional(),
              can_delete: z.boolean().exactOptional(),
              can_edit: z.boolean().exactOptional(),
              can_recover: z.boolean().exactOptional(),
              can_view_edit_history: z.boolean().exactOptional(),
              can_wiki: z.boolean().exactOptional(),
              cooked: z.string().exactOptional(),
              created_at: z.string().exactOptional(),
              deleted_at: z.string().nullable().exactOptional(),
              display_username: z.string().exactOptional(),
              edit_reason: z.string().nullable().exactOptional(),
              flair_bg_color: z.string().nullable().exactOptional(),
              flair_color: z.string().nullable().exactOptional(),
              flair_name: z.string().nullable().exactOptional(),
              flair_url: z.string().nullable().exactOptional(),
              hidden: z.boolean().exactOptional(),
              id: z.int().exactOptional(),
              incoming_link_count: z.int().exactOptional(),
              moderator: z.boolean().exactOptional(),
              name: z.string().exactOptional(),
              notice: z.object({}).exactOptional(),
              post_number: z.int().exactOptional(),
              post_type: z.int().exactOptional(),
              primary_group_name: z.string().nullable().exactOptional(),
              quote_count: z.int().exactOptional(),
              readers_count: z.int().exactOptional(),
              reads: z.int().exactOptional(),
              reply_count: z.int().exactOptional(),
              reply_to_post_number: z.string().nullable().exactOptional(),
              reviewable_id: z.string().nullable().exactOptional(),
              reviewable_score_count: z.int().exactOptional(),
              reviewable_score_pending_count: z.int().exactOptional(),
              score: z.number().exactOptional(),
              staff: z.boolean().exactOptional(),
              topic_id: z.int().exactOptional(),
              topic_slug: z.string().exactOptional(),
              trust_level: z.int().exactOptional(),
              updated_at: z.string().exactOptional(),
              user_deleted: z.boolean().exactOptional(),
              user_id: z.int().exactOptional(),
              user_title: z.string().nullable().exactOptional(),
              username: z.string().exactOptional(),
              version: z.int().exactOptional(),
              wiki: z.boolean().exactOptional(),
              yours: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
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
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Load posts with an id lower than this value. Useful for pagination.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
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
            .object({
              latest_posts: z
                .array(
                  z
                    .object({
                      actions_summary: z
                        .array(
                          z
                            .object({
                              can_act: z.boolean().exactOptional(),
                              id: z.int().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      admin: z.boolean().exactOptional(),
                      avatar_template: z.string().exactOptional(),
                      can_delete: z.boolean().exactOptional(),
                      can_edit: z.boolean().exactOptional(),
                      can_recover: z.boolean().exactOptional(),
                      can_view_edit_history: z.boolean().exactOptional(),
                      can_wiki: z.boolean().exactOptional(),
                      category_id: z.int().exactOptional(),
                      cooked: z.string().exactOptional(),
                      created_at: z.string().exactOptional(),
                      deleted_at: z.string().nullable().exactOptional(),
                      display_username: z.string().exactOptional(),
                      edit_reason: z.string().nullable().exactOptional(),
                      flair_bg_color: z.string().nullable().exactOptional(),
                      flair_color: z.string().nullable().exactOptional(),
                      flair_name: z.string().nullable().exactOptional(),
                      flair_url: z.string().nullable().exactOptional(),
                      hidden: z.boolean().exactOptional(),
                      id: z.int().exactOptional(),
                      incoming_link_count: z.int().exactOptional(),
                      moderator: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      post_number: z.int().exactOptional(),
                      post_type: z.int().exactOptional(),
                      primary_group_name: z.string().nullable().exactOptional(),
                      quote_count: z.int().exactOptional(),
                      raw: z.string().exactOptional(),
                      readers_count: z.int().exactOptional(),
                      reads: z.int().exactOptional(),
                      reply_count: z.int().exactOptional(),
                      reply_to_post_number: z.string().nullable().exactOptional(),
                      reviewable_id: z.string().nullable().exactOptional(),
                      reviewable_score_count: z.int().exactOptional(),
                      reviewable_score_pending_count: z.int().exactOptional(),
                      score: z.number().exactOptional(),
                      staff: z.boolean().exactOptional(),
                      topic_html_title: z.string().exactOptional(),
                      topic_id: z.int().exactOptional(),
                      topic_slug: z.string().exactOptional(),
                      topic_title: z.string().exactOptional(),
                      trust_level: z.int().exactOptional(),
                      updated_at: z.string().exactOptional(),
                      user_deleted: z.boolean().exactOptional(),
                      user_id: z.int().exactOptional(),
                      user_title: z.string().nullable().exactOptional(),
                      username: z.string().exactOptional(),
                      version: z.int().exactOptional(),
                      wiki: z.boolean().exactOptional(),
                      yours: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
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
              archetype: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Required for new private message.',
                  examples: ['private_message'],
                }),
              category: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Optional if creating a new topic, and ignored if creating\na new post.',
                }),
              created_at: z.string().exactOptional(),
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
              raw: z.string(),
              target_recipients: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Required for private message, comma separated.',
                  examples: ['blake,sam'],
                }),
              target_usernames: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description: 'Deprecated. Use target_recipients instead.',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Required if creating a new topic or new private message.',
                }),
              topic_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Required if creating a new post.' }),
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
              actions_summary: z.array(
                z
                  .strictObject({ can_act: z.boolean(), id: z.int() })
                  .openapi({ required: ['id', 'can_act'] }),
              ),
              admin: z.boolean(),
              avatar_template: z.string(),
              bookmarked: z.boolean(),
              can_delete: z.boolean(),
              can_edit: z.boolean(),
              can_recover: z.boolean(),
              can_view_edit_history: z.boolean(),
              can_wiki: z.boolean(),
              cooked: z.string(),
              created_at: z.string(),
              deleted_at: z.string().nullable(),
              display_username: z.string().nullable(),
              draft_sequence: z.int(),
              edit_reason: z.string().nullable(),
              flair_bg_color: z.string().nullable(),
              flair_color: z.string().nullable(),
              flair_name: z.string().nullable(),
              flair_url: z.string().nullable(),
              hidden: z.boolean(),
              id: z.int(),
              incoming_link_count: z.int(),
              mentioned_users: z.array(z.any()).exactOptional(),
              moderator: z.boolean(),
              name: z.string().nullable(),
              post_number: z.int(),
              post_type: z.int(),
              primary_group_name: z.string().nullable(),
              quote_count: z.int(),
              raw: z.string().exactOptional(),
              readers_count: z.int(),
              reads: z.int(),
              reply_count: z.int(),
              reply_to_post_number: z.string().nullable(),
              reviewable_id: z.string().nullable(),
              reviewable_score_count: z.int(),
              reviewable_score_pending_count: z.int(),
              score: z.int(),
              staff: z.boolean(),
              topic_id: z.int(),
              topic_slug: z.string(),
              trust_level: z.int(),
              updated_at: z.string(),
              user_deleted: z.boolean(),
              user_id: z.int(),
              user_title: z.string().nullable(),
              username: z.string(),
              version: z.int(),
              wiki: z.boolean(),
              yours: z.boolean(),
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
  operationId: 'getPost',
  request: {
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'latest posts',
      content: {
        'application/json': {
          schema: z
            .object({
              actions_summary: z
                .array(
                  z
                    .object({ can_act: z.boolean().exactOptional(), id: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              admin: z.boolean().exactOptional(),
              avatar_template: z.string().exactOptional(),
              can_delete: z.boolean().exactOptional(),
              can_edit: z.boolean().exactOptional(),
              can_recover: z.boolean().exactOptional(),
              can_view_edit_history: z.boolean().exactOptional(),
              can_wiki: z.boolean().exactOptional(),
              cooked: z.string().exactOptional(),
              created_at: z.string().exactOptional(),
              deleted_at: z.string().nullable().exactOptional(),
              display_username: z.string().nullable().exactOptional(),
              edit_reason: z.string().nullable().exactOptional(),
              flair_bg_color: z.string().nullable().exactOptional(),
              flair_color: z.string().nullable().exactOptional(),
              flair_name: z.string().nullable().exactOptional(),
              flair_url: z.string().nullable().exactOptional(),
              hidden: z.boolean().exactOptional(),
              id: z.int().exactOptional(),
              incoming_link_count: z.int().exactOptional(),
              moderator: z.boolean().exactOptional(),
              name: z.string().nullable().exactOptional(),
              post_number: z.int().exactOptional(),
              post_type: z.int().exactOptional(),
              primary_group_name: z.string().nullable().exactOptional(),
              quote_count: z.int().exactOptional(),
              raw: z.string().exactOptional(),
              readers_count: z.int().exactOptional(),
              reads: z.int().exactOptional(),
              reply_count: z.int().exactOptional(),
              reply_to_post_number: z.string().nullable().exactOptional(),
              reviewable_id: z.string().nullable().exactOptional(),
              reviewable_score_count: z.int().exactOptional(),
              reviewable_score_pending_count: z.int().exactOptional(),
              score: z.int().exactOptional(),
              staff: z.boolean().exactOptional(),
              topic_id: z.int().exactOptional(),
              topic_slug: z.string().exactOptional(),
              trust_level: z.int().exactOptional(),
              updated_at: z.string().exactOptional(),
              user_deleted: z.boolean().exactOptional(),
              user_id: z.int().exactOptional(),
              user_title: z.string().nullable().exactOptional(),
              username: z.string().exactOptional(),
              version: z.int().exactOptional(),
              wiki: z.boolean().exactOptional(),
              yours: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
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
    headers: z.object({
      'Api-Key': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              post: z
                .object({ edit_reason: z.string().exactOptional(), raw: z.string() })
                .exactOptional()
                .openapi({ required: ['raw'] }),
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
            .object({
              post: z
                .object({
                  actions_summary: z
                    .array(
                      z
                        .object({
                          can_act: z.boolean().exactOptional(),
                          id: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  admin: z.boolean().exactOptional(),
                  avatar_template: z.string().exactOptional(),
                  can_delete: z.boolean().exactOptional(),
                  can_edit: z.boolean().exactOptional(),
                  can_recover: z.boolean().exactOptional(),
                  can_view_edit_history: z.boolean().exactOptional(),
                  can_wiki: z.boolean().exactOptional(),
                  cooked: z.string().exactOptional(),
                  created_at: z.string().exactOptional(),
                  deleted_at: z.string().nullable().exactOptional(),
                  display_username: z.string().nullable().exactOptional(),
                  draft_sequence: z.int().exactOptional(),
                  edit_reason: z.string().nullable().exactOptional(),
                  flair_bg_color: z.string().nullable().exactOptional(),
                  flair_color: z.string().nullable().exactOptional(),
                  flair_url: z.string().nullable().exactOptional(),
                  hidden: z.boolean().exactOptional(),
                  id: z.int().exactOptional(),
                  incoming_link_count: z.int().exactOptional(),
                  moderator: z.boolean().exactOptional(),
                  name: z.string().nullable().exactOptional(),
                  post_number: z.int().exactOptional(),
                  post_type: z.int().exactOptional(),
                  primary_group_name: z.string().nullable().exactOptional(),
                  quote_count: z.int().exactOptional(),
                  readers_count: z.int().exactOptional(),
                  reads: z.int().exactOptional(),
                  reply_count: z.int().exactOptional(),
                  reply_to_post_number: z.string().nullable().exactOptional(),
                  reviewable_id: z.string().nullable().exactOptional(),
                  reviewable_score_count: z.int().exactOptional(),
                  reviewable_score_pending_count: z.int().exactOptional(),
                  score: z.number().exactOptional(),
                  staff: z.boolean().exactOptional(),
                  topic_id: z.int().exactOptional(),
                  topic_slug: z.string().exactOptional(),
                  trust_level: z.int().exactOptional(),
                  updated_at: z.string().exactOptional(),
                  user_deleted: z.boolean().exactOptional(),
                  user_id: z.int().exactOptional(),
                  user_title: z.string().nullable().exactOptional(),
                  username: z.string().exactOptional(),
                  version: z.int().exactOptional(),
                  wiki: z.boolean().exactOptional(),
                  yours: z.boolean().exactOptional(),
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
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
                  description:
                    'The `SiteSetting.can_permanently_delete` needs to be\nenabled first before this param can be used. Also this endpoint\nneeds to be called first without `force_destroy` and then followed\nup with a second call 5 minutes later with `force_destroy` to\npermanently delete.',
                  examples: [true],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'success response' } },
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ locked: z.string() }).openapi({ required: ['locked'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'post updated',
      content: {
        'application/json': {
          schema: z.object({ locked: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
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
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
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
                  actions_summary: z.array(
                    z
                      .strictObject({ can_act: z.boolean(), id: z.int() })
                      .openapi({ required: ['id', 'can_act'] }),
                  ),
                  admin: z.boolean(),
                  avatar_template: z.string(),
                  bookmarked: z.boolean(),
                  can_delete: z.boolean(),
                  can_edit: z.boolean(),
                  can_recover: z.boolean(),
                  can_view_edit_history: z.boolean(),
                  can_wiki: z.boolean(),
                  cooked: z.string(),
                  created_at: z.string(),
                  deleted_at: z.string().nullable(),
                  display_username: z.string().nullable(),
                  edit_reason: z.string().nullable(),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  hidden: z.boolean(),
                  id: z.int(),
                  incoming_link_count: z.int(),
                  moderator: z.boolean(),
                  name: z.string().nullable(),
                  post_number: z.int(),
                  post_type: z.int(),
                  primary_group_name: z.string().nullable(),
                  quote_count: z.int(),
                  readers_count: z.int(),
                  reads: z.int(),
                  reply_count: z.int(),
                  reply_to_post_number: z.int(),
                  reply_to_user: z
                    .strictObject({
                      avatar_template: z.string(),
                      name: z.string().exactOptional(),
                      username: z.string(),
                    })
                    .openapi({ required: ['username', 'avatar_template'] }),
                  reviewable_id: z.string().nullable(),
                  reviewable_score_count: z.int(),
                  reviewable_score_pending_count: z.int(),
                  score: z.int(),
                  staff: z.boolean(),
                  topic_id: z.int(),
                  topic_slug: z.string(),
                  trust_level: z.int(),
                  updated_at: z.string(),
                  user_deleted: z.boolean(),
                  user_id: z.int(),
                  user_title: z.string().nullable(),
                  username: z.string(),
                  version: z.int(),
                  wiki: z.boolean(),
                  yours: z.boolean(),
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
            description:
              'The query string needs to be url encoded and is made up of the following options:\n- Search term. This is just a string. Usually it would be the first item in the query.\n- `@<username>`: Use the `@` followed by the username to specify posts by this user.\n- `#<category>`: Use the `#` followed by the category slug to search within this category.\n- `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.\n- `before:`: `yyyy-mm-dd`\n- `after:`: `yyyy-mm-dd`\n- `order:`: `latest`, `likes`, `views`, `latest_topic`\n- `assigned:`: username (without `@`)\n- `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`\n- `with:`: `images`\n- `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved`\n- `group:`: group_name or group_id\n- `group_messages:`: group_name or group_id\n- `min_posts:`: 1\n- `max_posts:`: 10\n- `min_views:`: 1\n- `max_views:`: 10\n\nIf you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:\n\n```\ncurl -i -sS -X GET -G "http://localhost:4200/search.json" \\\n--data-urlencode \'q=wordpress @scossar #fun after:2020-01-01\'\n```\n',
            example:
              'api @blake #support tags:api after:2021-06-04 in:unseen in:open\norder:latest_topic',
            in: 'query',
            name: 'q',
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
            example: 1,
            in: 'query',
            name: 'page',
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
              categories: z.array(z.any()),
              grouped_search_result: z
                .strictObject({
                  can_create_topic: z.boolean(),
                  category_ids: z.array(z.any()),
                  error: z.string().nullable(),
                  group_ids: z.array(z.any()),
                  more_categories: z.string().nullable(),
                  more_full_page_results: z.string().nullable(),
                  more_posts: z.string().nullable(),
                  more_users: z.string().nullable(),
                  post_ids: z.array(z.any()),
                  search_log_id: z.int(),
                  tag_ids: z.array(z.any()),
                  term: z.string(),
                  user_ids: z.array(z.any()),
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
              groups: z.array(z.any()),
              posts: z.array(z.any()),
              tags: z.array(z.any()),
              users: z.array(z.any()),
            })
            .openapi({
              required: ['posts', 'users', 'categories', 'tags', 'groups', 'grouped_search_result'],
            }),
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
              anonymous_top_menu_items: z.array(z.any()),
              archetypes: z.array(
                z
                  .strictObject({ id: z.string(), name: z.string(), options: z.array(z.any()) })
                  .openapi({ required: ['id', 'name', 'options'] }),
              ),
              auth_providers: z.array(z.any()),
              can_associate_groups: z.boolean().exactOptional(),
              can_create_tag: z.boolean(),
              can_tag_pms: z.boolean(),
              can_tag_topics: z.boolean(),
              categories: z.array(
                z
                  .strictObject({
                    allow_global_tags: z.boolean(),
                    allowed_tag_groups: z.array(z.any()),
                    allowed_tags: z.array(z.any()),
                    can_edit: z.boolean(),
                    color: z.string(),
                    custom_fields: z.looseObject({}).nullable().exactOptional(),
                    default_list_filter: z.string(),
                    default_top_period: z.string(),
                    default_view: z.string().nullable(),
                    description: z.string().nullable().exactOptional(),
                    description_excerpt: z.string().nullable().exactOptional(),
                    description_text: z.string().nullable().exactOptional(),
                    form_template_ids: z.array(z.any()).exactOptional(),
                    has_children: z.boolean(),
                    id: z.int(),
                    minimum_required_tags: z.int(),
                    name: z.string(),
                    navigate_to_first_post_after_read: z.boolean(),
                    notification_level: z.int(),
                    num_featured_topics: z.int(),
                    parent_category_id: z.int().exactOptional(),
                    permission: z.int(),
                    position: z.int(),
                    post_count: z.int(),
                    read_only_banner: z.string().nullable(),
                    read_restricted: z.boolean(),
                    required_tag_groups: z.array(
                      z
                        .strictObject({ min_count: z.int(), name: z.string() })
                        .openapi({ required: ['name', 'min_count'] }),
                    ),
                    show_subcategory_list: z.boolean(),
                    slug: z.string(),
                    sort_ascending: z.string().nullable(),
                    sort_order: z.string().nullable(),
                    subcategory_list_style: z.string(),
                    text_color: z.string(),
                    topic_count: z.int(),
                    topic_template: z.string().nullable(),
                    topic_url: z.string(),
                    uploaded_background: z.string().nullable(),
                    uploaded_logo: z.string().nullable(),
                    uploaded_logo_dark: z.string().nullable(),
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
                      'has_children',
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
                      'allowed_tags',
                      'allowed_tag_groups',
                      'allow_global_tags',
                      'required_tag_groups',
                      'read_only_banner',
                      'uploaded_logo',
                      'uploaded_logo_dark',
                      'uploaded_background',
                      'can_edit',
                    ],
                  }),
              ),
              censored_regexp: z.array(z.object({})),
              custom_emoji_translation: z.strictObject({}),
              default_archetype: z.string(),
              default_dark_color_scheme: z.object({}).nullable(),
              displayed_about_plugin_stat_groups: z.array(z.any()).exactOptional(),
              filters: z.array(z.any()),
              groups: z.array(
                z
                  .strictObject({
                    flair_bg_color: z.string().nullable(),
                    flair_color: z.string().nullable(),
                    flair_url: z.string().nullable(),
                    id: z.int(),
                    name: z.string(),
                  })
                  .openapi({
                    required: ['id', 'name', 'flair_url', 'flair_bg_color', 'flair_color'],
                  }),
              ),
              hashtag_configurations: z.object({}).exactOptional(),
              hashtag_icons: z.array(z.any()).exactOptional(),
              markdown_additional_options: z.object({}).exactOptional(),
              notification_types: z
                .strictObject({
                  assigned: z.int().exactOptional(),
                  bookmark_reminder: z.int(),
                  chat_group_mention: z.int(),
                  chat_invitation: z.int(),
                  chat_mention: z.int(),
                  chat_message: z.int(),
                  chat_quoted: z.int().exactOptional(),
                  circles_activity: z.int().exactOptional(),
                  code_review_commit_approved: z.int(),
                  custom: z.int(),
                  edited: z.int(),
                  event_invitation: z.int(),
                  event_reminder: z.int(),
                  following: z.int().exactOptional(),
                  following_created_topic: z.int().exactOptional(),
                  following_replied: z.int().exactOptional(),
                  granted_badge: z.int(),
                  group_mentioned: z.int(),
                  group_message_summary: z.int(),
                  invited_to_private_message: z.int(),
                  invited_to_topic: z.int(),
                  invitee_accepted: z.int(),
                  liked: z.int(),
                  liked_consolidated: z.int(),
                  linked: z.int(),
                  membership_request_accepted: z.int(),
                  membership_request_consolidated: z.int(),
                  mentioned: z.int(),
                  moved_post: z.int(),
                  new_features: z.int().exactOptional(),
                  post_approved: z.int(),
                  posted: z.int(),
                  private_message: z.int(),
                  question_answer_user_commented: z.int().exactOptional(),
                  quoted: z.int(),
                  reaction: z.int(),
                  replied: z.int(),
                  topic_reminder: z.int(),
                  votes_released: z.int(),
                  watching_category_or_tag: z.int(),
                  watching_first_post: z.int(),
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
              periods: z.array(z.any()),
              post_action_types: z.array(
                z
                  .strictObject({
                    description: z.string(),
                    id: z.int().nullable(),
                    is_custom_flag: z.boolean(),
                    is_flag: z.boolean(),
                    name: z.string(),
                    name_key: z.string().nullable(),
                    short_description: z.string(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name_key',
                      'name',
                      'description',
                      'short_description',
                      'is_flag',
                      'is_custom_flag',
                    ],
                  }),
              ),
              post_types: z
                .strictObject({
                  moderator_action: z.int(),
                  regular: z.int(),
                  small_action: z.int(),
                  whisper: z.int(),
                })
                .openapi({ required: ['regular', 'moderator_action', 'small_action', 'whisper'] }),
              show_welcome_topic_banner: z.boolean().exactOptional(),
              tags_filter_regexp: z.string(),
              top_menu_items: z.array(z.any()),
              top_tags: z.array(z.any()),
              topic_featured_link_allowed_category_ids: z.array(z.any()),
              topic_flag_types: z.array(
                z
                  .strictObject({
                    description: z.string(),
                    id: z.int().nullable(),
                    is_custom_flag: z.boolean(),
                    is_flag: z.boolean(),
                    name: z.string(),
                    name_key: z.string().nullable(),
                    short_description: z.string(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name_key',
                      'name',
                      'description',
                      'short_description',
                      'is_flag',
                      'is_custom_flag',
                    ],
                  }),
              ),
              trust_levels: z
                .strictObject({
                  basic: z.int(),
                  leader: z.int(),
                  member: z.int(),
                  newuser: z.int(),
                  regular: z.int(),
                })
                .openapi({ required: ['newuser', 'basic', 'member', 'regular', 'leader'] }),
              uncategorized_category_id: z.int(),
              user_color_schemes: z.array(
                z
                  .strictObject({ id: z.int(), is_dark: z.boolean(), name: z.string() })
                  .openapi({ required: ['id', 'name', 'is_dark'] }),
              ),
              user_field_max_length: z.int(),
              user_fields: z.array(z.any()),
              user_themes: z.array(
                z
                  .strictObject({
                    color_scheme_id: z.int().nullable(),
                    default: z.boolean(),
                    name: z.string(),
                    theme_id: z.int(),
                  })
                  .openapi({ required: ['theme_id', 'name', 'default', 'color_scheme_id'] }),
              ),
              watched_words_link: z.string().nullable(),
              watched_words_replace: z.string().nullable(),
              whispers_allowed_groups_names: z.array(z.any()).exactOptional(),
              wizard_required: z.boolean().exactOptional(),
            })
            .openapi({
              required: [
                'default_archetype',
                'notification_types',
                'post_types',
                'trust_levels',
                'groups',
                'filters',
                'periods',
                'top_menu_items',
                'anonymous_top_menu_items',
                'uncategorized_category_id',
                'user_field_max_length',
                'post_action_types',
                'topic_flag_types',
                'can_create_tag',
                'can_tag_topics',
                'can_tag_pms',
                'tags_filter_regexp',
                'top_tags',
                'topic_featured_link_allowed_category_ids',
                'user_themes',
                'user_color_schemes',
                'default_dark_color_scheme',
                'censored_regexp',
                'custom_emoji_translation',
                'watched_words_replace',
                'watched_words_link',
                'categories',
                'archetypes',
                'user_fields',
                'auth_providers',
              ],
            }),
        },
      },
    },
  },
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              topic: z
                .object({ category_id: z.int().exactOptional(), title: z.string().exactOptional() })
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
                  fancy_title: z.string().exactOptional(),
                  id: z.int().exactOptional(),
                  posts_count: z.int().exactOptional(),
                  slug: z.string().exactOptional(),
                  title: z.string().exactOptional(),
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
          param: { in: 'path', name: 'external_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 301: { description: 'redirects to /t/{topic_id}.json' } },
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'specific posts',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              actions_summary: z.array(
                z
                  .strictObject({
                    can_act: z.boolean(),
                    count: z.int(),
                    hidden: z.boolean(),
                    id: z.int(),
                  })
                  .openapi({ required: ['id', 'count', 'hidden', 'can_act'] }),
              ),
              archetype: z.string(),
              archived: z.boolean(),
              bookmarked: z.boolean(),
              bookmarks: z.array(z.any()),
              category_id: z.int(),
              chunk_size: z.int(),
              closed: z.boolean(),
              created_at: z.string(),
              current_post_number: z.int().exactOptional(),
              deleted_at: z.string().nullable(),
              deleted_by: z.string().nullable(),
              details: z
                .strictObject({
                  can_archive_topic: z.boolean(),
                  can_close_topic: z.boolean(),
                  can_convert_topic: z.boolean(),
                  can_create_post: z.boolean(),
                  can_delete: z.boolean(),
                  can_edit: z.boolean(),
                  can_edit_staff_notes: z.boolean(),
                  can_flag_topic: z.boolean().exactOptional(),
                  can_invite_to: z.boolean().exactOptional(),
                  can_invite_via_email: z.boolean().exactOptional(),
                  can_moderate_category: z.boolean(),
                  can_move_posts: z.boolean(),
                  can_pin_unpin_topic: z.boolean(),
                  can_remove_allowed_users: z.boolean(),
                  can_remove_self_id: z.int(),
                  can_reply_as_new_topic: z.boolean(),
                  can_review_topic: z.boolean(),
                  can_split_merge_topic: z.boolean(),
                  can_toggle_topic_visibility: z.boolean(),
                  created_by: z
                    .strictObject({
                      avatar_template: z.string(),
                      id: z.int(),
                      name: z.string(),
                      username: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                  last_poster: z
                    .strictObject({
                      avatar_template: z.string(),
                      id: z.int(),
                      name: z.string(),
                      username: z.string(),
                    })
                    .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                  notification_level: z.int(),
                  participants: z
                    .array(
                      z
                        .strictObject({
                          admin: z.boolean(),
                          avatar_template: z.string(),
                          flair_bg_color: z.string().nullable(),
                          flair_color: z.string().nullable(),
                          flair_name: z.string().nullable(),
                          flair_url: z.string().nullable(),
                          id: z.int(),
                          moderator: z.boolean(),
                          name: z.string(),
                          post_count: z.int(),
                          primary_group_name: z.string().nullable(),
                          trust_level: z.int(),
                          username: z.string(),
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
              draft: z.string().nullable(),
              draft_key: z.string(),
              draft_sequence: z.int(),
              fancy_title: z.string(),
              featured_link: z.string().nullable(),
              has_deleted: z.boolean(),
              has_summary: z.boolean(),
              highest_post_number: z.int().nullable(),
              id: z.int(),
              image_url: z.string().nullable(),
              last_posted_at: z.string().nullable(),
              like_count: z.int(),
              message_bus_last_id: z.int(),
              participant_count: z.int(),
              pinned: z.boolean(),
              pinned_at: z.string().nullable(),
              pinned_globally: z.boolean(),
              pinned_until: z.string().nullable(),
              post_stream: z
                .strictObject({
                  posts: z.array(
                    z
                      .strictObject({
                        actions_summary: z.array(
                          z
                            .strictObject({ can_act: z.boolean(), id: z.int() })
                            .openapi({ required: ['id', 'can_act'] }),
                        ),
                        admin: z.boolean(),
                        avatar_template: z.string(),
                        bookmarked: z.boolean(),
                        can_delete: z.boolean(),
                        can_edit: z.boolean(),
                        can_recover: z.boolean(),
                        can_view_edit_history: z.boolean(),
                        can_wiki: z.boolean(),
                        cooked: z.string(),
                        created_at: z.string(),
                        deleted_at: z.string().nullable(),
                        display_username: z.string(),
                        edit_reason: z.string().nullable(),
                        flair_bg_color: z.string().nullable(),
                        flair_color: z.string().nullable(),
                        flair_name: z.string().nullable(),
                        flair_url: z.string().nullable(),
                        hidden: z.boolean(),
                        id: z.int(),
                        incoming_link_count: z.int(),
                        link_counts: z.array(
                          z
                            .strictObject({
                              clicks: z.int(),
                              internal: z.boolean(),
                              reflection: z.boolean(),
                              title: z.string(),
                              url: z.string(),
                            })
                            .openapi({
                              required: ['url', 'internal', 'reflection', 'title', 'clicks'],
                            }),
                        ),
                        moderator: z.boolean(),
                        name: z.string(),
                        post_number: z.int(),
                        post_type: z.int(),
                        primary_group_name: z.string().nullable(),
                        quote_count: z.int(),
                        read: z.boolean(),
                        readers_count: z.int(),
                        reads: z.int(),
                        reply_count: z.int(),
                        reply_to_post_number: z.string().nullable(),
                        reviewable_id: z.int(),
                        reviewable_score_count: z.int(),
                        reviewable_score_pending_count: z.int(),
                        score: z.int(),
                        staff: z.boolean(),
                        topic_id: z.int(),
                        topic_slug: z.string(),
                        trust_level: z.int(),
                        updated_at: z.string(),
                        user_deleted: z.boolean(),
                        user_id: z.int(),
                        user_title: z.string().nullable(),
                        username: z.string(),
                        version: z.int(),
                        wiki: z.boolean(),
                        yours: z.boolean(),
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
              posts_count: z.int(),
              reply_count: z.int(),
              show_read_indicator: z.boolean(),
              slow_mode_enabled_until: z.string().nullable(),
              slow_mode_seconds: z.int(),
              slug: z.string(),
              suggested_topics: z.array(
                z
                  .strictObject({
                    archetype: z.string(),
                    archived: z.boolean(),
                    bookmarked: z.string().nullable(),
                    bumped: z.boolean(),
                    bumped_at: z.string(),
                    category_id: z.int(),
                    closed: z.boolean(),
                    created_at: z.string(),
                    excerpt: z.string(),
                    fancy_title: z.string(),
                    featured_link: z.string().nullable(),
                    highest_post_number: z.int(),
                    id: z.int(),
                    image_url: z.string().nullable(),
                    last_posted_at: z.string().nullable(),
                    like_count: z.int(),
                    liked: z.string().nullable(),
                    pinned: z.boolean(),
                    posters: z.array(
                      z
                        .strictObject({
                          description: z.string(),
                          extras: z.string(),
                          user: z
                            .strictObject({
                              avatar_template: z.string(),
                              id: z.int(),
                              name: z.string(),
                              username: z.string(),
                            })
                            .openapi({ required: ['id', 'username', 'name', 'avatar_template'] }),
                        })
                        .openapi({ required: ['extras', 'description', 'user'] }),
                    ),
                    posts_count: z.int(),
                    reply_count: z.int(),
                    slug: z.string(),
                    tags: z.array(z.any()),
                    tags_descriptions: z.strictObject({}),
                    title: z.string(),
                    unpinned: z.string().nullable(),
                    unseen: z.boolean(),
                    views: z.int(),
                    visible: z.boolean(),
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
              tags: z.array(z.any()),
              tags_descriptions: z.strictObject({}),
              thumbnails: z.string().nullable(),
              timeline_lookup: z.array(z.any()),
              title: z.string(),
              topic_timer: z.string().nullable(),
              unpinned: z.string().nullable(),
              user_id: z.int(),
              views: z.int(),
              visible: z.boolean(),
              word_count: z.int().nullable(),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'specific posts' } },
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'topic updated' } },
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ timestamp: z.string().openapi({ examples: ['1594291380'] }) })
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
            .object({
              success: z
                .string()
                .exactOptional()
                .openapi({ examples: ['OK'] }),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ email: z.string().exactOptional(), user: z.string().exactOptional() })
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
                  avatar_template: z.string().exactOptional(),
                  id: z.int().exactOptional(),
                  name: z.string().exactOptional(),
                  username: z.string().exactOptional(),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
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
            .object({
              success: z
                .string()
                .exactOptional()
                .openapi({ examples: ['OK'] }),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
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
              id: z.int().exactOptional(),
              post_stream: z
                .object({
                  posts: z
                    .array(
                      z
                        .object({
                          actions_summary: z
                            .array(
                              z
                                .object({
                                  can_act: z.boolean().exactOptional(),
                                  id: z.int().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          admin: z.boolean().exactOptional(),
                          avatar_template: z.string().exactOptional(),
                          can_delete: z.boolean().exactOptional(),
                          can_edit: z.boolean().exactOptional(),
                          can_recover: z.boolean().exactOptional(),
                          can_view_edit_history: z.boolean().exactOptional(),
                          can_wiki: z.boolean().exactOptional(),
                          cooked: z.string().exactOptional(),
                          created_at: z.string().exactOptional(),
                          deleted_at: z.string().nullable().exactOptional(),
                          display_username: z.string().nullable().exactOptional(),
                          edit_reason: z.string().nullable().exactOptional(),
                          flair_bg_color: z.string().nullable().exactOptional(),
                          flair_color: z.string().nullable().exactOptional(),
                          flair_name: z.string().nullable().exactOptional(),
                          flair_url: z.string().nullable().exactOptional(),
                          hidden: z.boolean().exactOptional(),
                          id: z.int().exactOptional(),
                          incoming_link_count: z.int().exactOptional(),
                          moderator: z.boolean().exactOptional(),
                          name: z.string().nullable().exactOptional(),
                          post_number: z.int().exactOptional(),
                          post_type: z.int().exactOptional(),
                          primary_group_name: z.string().nullable().exactOptional(),
                          quote_count: z.int().exactOptional(),
                          read: z.boolean().exactOptional(),
                          readers_count: z.int().exactOptional(),
                          reads: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          reply_to_post_number: z.string().nullable().exactOptional(),
                          reviewable_id: z.int().exactOptional(),
                          reviewable_score_count: z.int().exactOptional(),
                          reviewable_score_pending_count: z.int().exactOptional(),
                          score: z.int().exactOptional(),
                          staff: z.boolean().exactOptional(),
                          topic_id: z.int().exactOptional(),
                          topic_slug: z.string().exactOptional(),
                          trust_level: z.int().exactOptional(),
                          updated_at: z.string().exactOptional(),
                          user_deleted: z.boolean().exactOptional(),
                          user_id: z.int().exactOptional(),
                          user_title: z.string().nullable().exactOptional(),
                          username: z.string().exactOptional(),
                          version: z.int().exactOptional(),
                          wiki: z.boolean().exactOptional(),
                          yours: z.boolean().exactOptional(),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z.enum(['true', 'false']),
              status: z.enum(['closed', 'pinned', 'pinned_globally', 'archived', 'visible']),
              until: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Only required for `pinned` and `pinned_globally`',
                  examples: ['2030-12-31'],
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
              success: z
                .string()
                .exactOptional()
                .openapi({ examples: ['OK'] }),
              topic_status_update: z.string().nullable().exactOptional(),
            })
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              based_on_last_post: z.boolean().exactOptional(),
              category_id: z.int().exactOptional(),
              status_type: z.string().exactOptional(),
              time: z
                .string()
                .exactOptional()
                .openapi({ examples: [''] }),
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
              based_on_last_post: z.boolean().exactOptional(),
              category_id: z.string().nullable().exactOptional(),
              closed: z.boolean().exactOptional(),
              duration: z.string().nullable().exactOptional(),
              execute_at: z.string().exactOptional(),
              success: z
                .string()
                .exactOptional()
                .openapi({ examples: ['OK'] }),
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
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
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
                          staff: z.boolean().exactOptional(),
                          topic_count: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  topics: z
                    .array(
                      z
                        .object({
                          archetype: z.string().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          category_id: z.int().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          created_at: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          id: z.int().exactOptional(),
                          image_url: z.string().nullable().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  description: z.string().exactOptional(),
                                  extras: z.string().exactOptional(),
                                  primary_group_id: z.string().nullable().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          slug: z.string().exactOptional(),
                          tags: z.array(z.any()).exactOptional(),
                          title: z.string().exactOptional(),
                          unpinned: z.string().nullable().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          visible: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              users: z
                .array(
                  z
                    .object({
                      avatar_template: z.string().exactOptional(),
                      id: z.int().exactOptional(),
                      name: z.string().nullable().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
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
            .object({
              tag_groups: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      name: z.string().exactOptional(),
                      one_per_topic: z.boolean().exactOptional(),
                      parent_tag_name: z.array(z.any()).exactOptional(),
                      permissions: z
                        .object({ staff: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tag_names: z.array(z.any()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
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
                  one_per_topic: z.boolean(),
                  parent_tag_name: z.array(z.any()),
                  permissions: z.object({}),
                  tag_names: z.array(z.any()),
                })
                .openapi({
                  required: [
                    'id',
                    'name',
                    'tag_names',
                    'parent_tag_name',
                    'one_per_topic',
                    'permissions',
                  ],
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
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
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
                  one_per_topic: z.boolean().exactOptional(),
                  parent_tag_name: z.array(z.any()).exactOptional(),
                  permissions: z
                    .object({ everyone: z.int().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  tag_names: z.array(z.any()).exactOptional(),
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
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
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
                  one_per_topic: z.boolean().exactOptional(),
                  parent_tag_name: z.array(z.any()).exactOptional(),
                  permissions: z
                    .object({ everyone: z.int().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  tag_names: z.array(z.any()).exactOptional(),
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
              extras: z
                .object({ categories: z.array(z.any()).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              tags: z
                .array(
                  z
                    .object({
                      count: z.int().exactOptional(),
                      id: z.string().exactOptional(),
                      pm_count: z.int().exactOptional(),
                      target_tag: z.string().nullable().exactOptional(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`',
            in: 'query',
            name: 'period',
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
            .object({
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
                          archetype: z.string().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          category_id: z.int().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          created_at: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          id: z.int().exactOptional(),
                          image_url: z.string().nullable().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          op_like_count: z.int().exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  description: z.string().exactOptional(),
                                  extras: z.string().nullable().exactOptional(),
                                  primary_group_id: z.string().nullable().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          slug: z.string().exactOptional(),
                          title: z.string().exactOptional(),
                          unpinned: z.boolean().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          visible: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              users: z
                .array(
                  z
                    .object({
                      avatar_template: z.string().exactOptional(),
                      id: z.int().exactOptional(),
                      name: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
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
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
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
                          allowed_user_count: z.int().exactOptional(),
                          archetype: z.string().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          category_id: z.string().nullable().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          created_at: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          id: z.int().exactOptional(),
                          image_url: z.string().nullable().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          participants: z.array(z.any()).exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  description: z.string().exactOptional(),
                                  extras: z.string().exactOptional(),
                                  primary_group_id: z.string().nullable().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          slug: z.string().exactOptional(),
                          title: z.string().exactOptional(),
                          unpinned: z.string().nullable().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          visible: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              users: z
                .array(
                  z
                    .object({
                      avatar_template: z.string().exactOptional(),
                      id: z.int().exactOptional(),
                      name: z.string().nullable().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
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
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
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
                          allowed_user_count: z.int().exactOptional(),
                          archetype: z.string().exactOptional(),
                          archived: z.boolean().exactOptional(),
                          bookmarked: z.boolean().exactOptional(),
                          bumped: z.boolean().exactOptional(),
                          bumped_at: z.string().exactOptional(),
                          category_id: z.string().nullable().exactOptional(),
                          closed: z.boolean().exactOptional(),
                          created_at: z.string().exactOptional(),
                          fancy_title: z.string().exactOptional(),
                          featured_link: z.string().nullable().exactOptional(),
                          has_summary: z.boolean().exactOptional(),
                          highest_post_number: z.int().exactOptional(),
                          id: z.int().exactOptional(),
                          image_url: z.string().nullable().exactOptional(),
                          last_posted_at: z.string().exactOptional(),
                          last_poster_username: z.string().exactOptional(),
                          last_read_post_number: z.int().exactOptional(),
                          like_count: z.int().exactOptional(),
                          liked: z.boolean().exactOptional(),
                          notification_level: z.int().exactOptional(),
                          participants: z
                            .array(
                              z
                                .object({
                                  description: z.string().nullable().exactOptional(),
                                  extras: z.string().exactOptional(),
                                  primary_group_id: z.string().nullable().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          pinned: z.boolean().exactOptional(),
                          pinned_globally: z.boolean().exactOptional(),
                          posters: z
                            .array(
                              z
                                .object({
                                  description: z.string().exactOptional(),
                                  extras: z.string().exactOptional(),
                                  primary_group_id: z.string().nullable().exactOptional(),
                                  user_id: z.int().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          posts_count: z.int().exactOptional(),
                          reply_count: z.int().exactOptional(),
                          slug: z.string().exactOptional(),
                          title: z.string().exactOptional(),
                          unpinned: z.string().nullable().exactOptional(),
                          unread_posts: z.int().exactOptional(),
                          unseen: z.boolean().exactOptional(),
                          views: z.int().exactOptional(),
                          visible: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              users: z
                .array(
                  z
                    .object({
                      avatar_template: z.string().exactOptional(),
                      id: z.int().exactOptional(),
                      name: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      external_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'external_id', required: true, schema: { type: 'string' } },
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
              user: z
                .strictObject({
                  admin: z.boolean(),
                  allowed_pm_usernames: z.array(z.any()),
                  avatar_template: z.string(),
                  badge_count: z.int(),
                  can_be_deleted: z.boolean(),
                  can_change_bio: z.boolean(),
                  can_change_location: z.boolean(),
                  can_change_tracking_preferences: z.boolean(),
                  can_change_website: z.boolean(),
                  can_delete_all_posts: z.boolean(),
                  can_edit: z.boolean(),
                  can_edit_email: z.boolean(),
                  can_edit_name: z.boolean(),
                  can_edit_username: z.boolean(),
                  can_ignore_user: z.boolean(),
                  can_mute_user: z.boolean(),
                  can_send_private_message_to_user: z.boolean(),
                  can_send_private_messages: z.boolean(),
                  can_upload_profile_header: z.boolean(),
                  can_upload_user_card_background: z.boolean(),
                  created_at: z.string(),
                  custom_fields: z
                    .strictObject({ first_name: z.string().nullable().exactOptional() })
                    .openapi({ required: [] }),
                  featured_topic: z.string().nullable(),
                  featured_user_badge_ids: z.array(z.any()),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  flair_group_id: z.string().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  group_users: z.array(
                    z
                      .strictObject({
                        group_id: z.int(),
                        notification_level: z.int(),
                        owner: z.boolean().exactOptional(),
                        user_id: z.int(),
                      })
                      .openapi({ required: ['group_id', 'user_id', 'notification_level'] }),
                  ),
                  groups: z.array(
                    z
                      .strictObject({
                        allow_membership_requests: z.boolean(),
                        automatic: z.boolean(),
                        bio_cooked: z.string().nullable(),
                        bio_excerpt: z.string().nullable(),
                        bio_raw: z.string().nullable(),
                        can_admin_group: z.boolean(),
                        can_see_members: z.boolean(),
                        default_notification_level: z.int(),
                        display_name: z.string(),
                        flair_bg_color: z.string().nullable(),
                        flair_color: z.string().nullable(),
                        flair_url: z.string().nullable(),
                        full_name: z.string().nullable(),
                        grant_trust_level: z.string().nullable(),
                        has_messages: z.boolean(),
                        id: z.int(),
                        incoming_email: z.string().nullable(),
                        members_visibility_level: z.int(),
                        membership_request_template: z.string().nullable(),
                        mentionable_level: z.int(),
                        messageable_level: z.int(),
                        name: z.string(),
                        primary_group: z.boolean(),
                        public_admission: z.boolean(),
                        public_exit: z.boolean(),
                        publish_read_state: z.boolean(),
                        title: z.string().nullable(),
                        user_count: z.int(),
                        visibility_level: z.int(),
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
                  has_title_badges: z.boolean(),
                  id: z.int(),
                  ignored: z.boolean(),
                  ignored_usernames: z.array(z.any()),
                  invited_by: z.string().nullable(),
                  last_posted_at: z.string().nullable(),
                  last_seen_at: z.string().nullable(),
                  locale: z.string().nullable(),
                  mailing_list_posts_per_day: z.int(),
                  moderator: z.boolean(),
                  muted: z.boolean(),
                  muted_category_ids: z.array(z.any()),
                  muted_tags: z.array(z.any()),
                  muted_usernames: z.array(z.any()),
                  name: z.string(),
                  pending_count: z.int(),
                  pending_posts_count: z.int().exactOptional(),
                  post_count: z.int(),
                  primary_group_id: z.string().nullable(),
                  primary_group_name: z.string().nullable(),
                  profile_view_count: z.int(),
                  recent_time_read: z.int(),
                  regular_category_ids: z.array(z.any()),
                  second_factor_backup_enabled: z.boolean().exactOptional(),
                  second_factor_enabled: z.boolean(),
                  staged: z.boolean(),
                  system_avatar_template: z.string(),
                  system_avatar_upload_id: z.string().nullable(),
                  time_read: z.int(),
                  title: z.string().nullable(),
                  tracked_category_ids: z.array(z.any()),
                  tracked_tags: z.array(z.any()),
                  trust_level: z.int(),
                  uploaded_avatar_id: z.string().nullable(),
                  use_logo_small_as_avatar: z.boolean(),
                  user_api_keys: z.string().nullable(),
                  user_auth_tokens: z.array(
                    z
                      .strictObject({
                        browser: z.string(),
                        client_ip: z.string(),
                        created_at: z.string(),
                        device: z.string(),
                        icon: z.string(),
                        id: z.int(),
                        is_active: z.boolean(),
                        location: z.string(),
                        os: z.string(),
                        seen_at: z.string(),
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
                  user_fields: z
                    .strictObject({ '1': z.string().nullable(), '2': z.string().nullable() })
                    .exactOptional()
                    .openapi({ required: ['1', '2'] }),
                  user_notification_schedule: z
                    .strictObject({
                      day_0_end_time: z.int(),
                      day_0_start_time: z.int(),
                      day_1_end_time: z.int(),
                      day_1_start_time: z.int(),
                      day_2_end_time: z.int(),
                      day_2_start_time: z.int(),
                      day_3_end_time: z.int(),
                      day_3_start_time: z.int(),
                      day_4_end_time: z.int(),
                      day_4_start_time: z.int(),
                      day_5_end_time: z.int(),
                      day_5_start_time: z.int(),
                      day_6_end_time: z.int(),
                      day_6_start_time: z.int(),
                      enabled: z.boolean(),
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
                  user_option: z
                    .strictObject({
                      allow_private_messages: z.boolean(),
                      auto_track_topics_after_msecs: z.int(),
                      automatically_unpin_topics: z.boolean(),
                      bookmark_auto_delete_preference: z.int().exactOptional(),
                      color_scheme_id: z.string().nullable(),
                      dark_scheme_id: z.string().nullable(),
                      default_calendar: z.string().exactOptional(),
                      digest_after_minutes: z.int(),
                      dynamic_favicon: z.boolean(),
                      email_digests: z.boolean(),
                      email_in_reply_to: z.boolean(),
                      email_level: z.int(),
                      email_messages_level: z.int(),
                      email_previous_replies: z.int(),
                      enable_allowed_pm_users: z.boolean(),
                      enable_defer: z.boolean(),
                      enable_quoting: z.boolean(),
                      external_links_in_new_tab: z.boolean(),
                      hide_profile_and_presence: z.boolean(),
                      homepage_id: z.string().nullable(),
                      include_tl0_in_digests: z.boolean(),
                      like_notification_frequency: z.int(),
                      mailing_list_mode: z.boolean(),
                      mailing_list_mode_frequency: z.int(),
                      new_topic_duration_minutes: z.int(),
                      notification_level_when_replying: z.int(),
                      oldest_search_log_date: z.string().nullable().exactOptional(),
                      seen_popups: z.array(z.any()).nullable().exactOptional(),
                      sidebar_list_destination: z.string().exactOptional(),
                      skip_new_user_tips: z.boolean(),
                      text_size: z.string(),
                      text_size_seq: z.int(),
                      theme_ids: z.array(z.any()),
                      theme_key_seq: z.int(),
                      timezone: z.string().nullable(),
                      title_count_mode: z.string(),
                      user_id: z.int(),
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
                        'enable_defer',
                        'digest_after_minutes',
                        'automatically_unpin_topics',
                        'auto_track_topics_after_msecs',
                        'notification_level_when_replying',
                        'new_topic_duration_minutes',
                        'email_previous_replies',
                        'email_in_reply_to',
                        'like_notification_frequency',
                        'include_tl0_in_digests',
                        'theme_ids',
                        'theme_key_seq',
                        'allow_private_messages',
                        'enable_allowed_pm_users',
                        'homepage_id',
                        'hide_profile_and_presence',
                        'text_size',
                        'text_size_seq',
                        'title_count_mode',
                        'timezone',
                        'skip_new_user_tips',
                      ],
                    }),
                  username: z.string(),
                  watched_category_ids: z.array(z.any()),
                  watched_first_post_category_ids: z.array(z.any()),
                  watched_tags: z.array(z.any()),
                  watching_first_post_tags: z.array(z.any()),
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
              user_badges: z.array(z.any()),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      provider: z
        .string()
        .openapi({
          param: {
            description:
              'Authentication provider name. Can be found in the provider callback\nURL: `/auth/{provider}/callback`',
            in: 'path',
            name: 'provider',
            required: true,
            schema: { type: 'string' },
          },
        }),
      external_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'external_id', required: true, schema: { type: 'string' } },
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
              user: z
                .strictObject({
                  admin: z.boolean(),
                  allowed_pm_usernames: z.array(z.any()),
                  avatar_template: z.string(),
                  badge_count: z.int(),
                  can_be_deleted: z.boolean(),
                  can_change_bio: z.boolean(),
                  can_change_location: z.boolean(),
                  can_change_tracking_preferences: z.boolean(),
                  can_change_website: z.boolean(),
                  can_delete_all_posts: z.boolean(),
                  can_edit: z.boolean(),
                  can_edit_email: z.boolean(),
                  can_edit_name: z.boolean(),
                  can_edit_username: z.boolean(),
                  can_ignore_user: z.boolean(),
                  can_mute_user: z.boolean(),
                  can_send_private_message_to_user: z.boolean(),
                  can_send_private_messages: z.boolean(),
                  can_upload_profile_header: z.boolean(),
                  can_upload_user_card_background: z.boolean(),
                  created_at: z.string(),
                  custom_fields: z
                    .strictObject({ first_name: z.string().nullable().exactOptional() })
                    .openapi({ required: [] }),
                  featured_topic: z.string().nullable(),
                  featured_user_badge_ids: z.array(z.any()),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  flair_group_id: z.string().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  group_users: z.array(
                    z
                      .strictObject({
                        group_id: z.int(),
                        notification_level: z.int(),
                        owner: z.boolean().exactOptional(),
                        user_id: z.int(),
                      })
                      .openapi({ required: ['group_id', 'user_id', 'notification_level'] }),
                  ),
                  groups: z.array(
                    z
                      .strictObject({
                        allow_membership_requests: z.boolean(),
                        automatic: z.boolean(),
                        bio_cooked: z.string().nullable(),
                        bio_excerpt: z.string().nullable(),
                        bio_raw: z.string().nullable(),
                        can_admin_group: z.boolean(),
                        can_see_members: z.boolean(),
                        default_notification_level: z.int(),
                        display_name: z.string(),
                        flair_bg_color: z.string().nullable(),
                        flair_color: z.string().nullable(),
                        flair_url: z.string().nullable(),
                        full_name: z.string().nullable(),
                        grant_trust_level: z.string().nullable(),
                        has_messages: z.boolean(),
                        id: z.int(),
                        incoming_email: z.string().nullable(),
                        members_visibility_level: z.int(),
                        membership_request_template: z.string().nullable(),
                        mentionable_level: z.int(),
                        messageable_level: z.int(),
                        name: z.string(),
                        primary_group: z.boolean(),
                        public_admission: z.boolean(),
                        public_exit: z.boolean(),
                        publish_read_state: z.boolean(),
                        title: z.string().nullable(),
                        user_count: z.int(),
                        visibility_level: z.int(),
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
                  has_title_badges: z.boolean(),
                  id: z.int(),
                  ignored: z.boolean(),
                  ignored_usernames: z.array(z.any()),
                  invited_by: z.string().nullable(),
                  last_posted_at: z.string().nullable(),
                  last_seen_at: z.string().nullable(),
                  locale: z.string().nullable(),
                  mailing_list_posts_per_day: z.int(),
                  moderator: z.boolean(),
                  muted: z.boolean(),
                  muted_category_ids: z.array(z.any()),
                  muted_tags: z.array(z.any()),
                  muted_usernames: z.array(z.any()),
                  name: z.string(),
                  pending_count: z.int(),
                  pending_posts_count: z.int().exactOptional(),
                  post_count: z.int(),
                  primary_group_id: z.string().nullable(),
                  primary_group_name: z.string().nullable(),
                  profile_view_count: z.int(),
                  recent_time_read: z.int(),
                  regular_category_ids: z.array(z.any()),
                  second_factor_backup_enabled: z.boolean().exactOptional(),
                  second_factor_enabled: z.boolean(),
                  staged: z.boolean(),
                  system_avatar_template: z.string(),
                  system_avatar_upload_id: z.string().nullable(),
                  time_read: z.int(),
                  title: z.string().nullable(),
                  tracked_category_ids: z.array(z.any()),
                  tracked_tags: z.array(z.any()),
                  trust_level: z.int(),
                  uploaded_avatar_id: z.string().nullable(),
                  use_logo_small_as_avatar: z.boolean(),
                  user_api_keys: z.string().nullable(),
                  user_auth_tokens: z.array(
                    z
                      .strictObject({
                        browser: z.string(),
                        client_ip: z.string(),
                        created_at: z.string(),
                        device: z.string(),
                        icon: z.string(),
                        id: z.int(),
                        is_active: z.boolean(),
                        location: z.string(),
                        os: z.string(),
                        seen_at: z.string(),
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
                  user_fields: z
                    .strictObject({ '1': z.string().nullable(), '2': z.string().nullable() })
                    .exactOptional()
                    .openapi({ required: ['1', '2'] }),
                  user_notification_schedule: z
                    .strictObject({
                      day_0_end_time: z.int(),
                      day_0_start_time: z.int(),
                      day_1_end_time: z.int(),
                      day_1_start_time: z.int(),
                      day_2_end_time: z.int(),
                      day_2_start_time: z.int(),
                      day_3_end_time: z.int(),
                      day_3_start_time: z.int(),
                      day_4_end_time: z.int(),
                      day_4_start_time: z.int(),
                      day_5_end_time: z.int(),
                      day_5_start_time: z.int(),
                      day_6_end_time: z.int(),
                      day_6_start_time: z.int(),
                      enabled: z.boolean(),
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
                  user_option: z
                    .strictObject({
                      allow_private_messages: z.boolean(),
                      auto_track_topics_after_msecs: z.int(),
                      automatically_unpin_topics: z.boolean(),
                      bookmark_auto_delete_preference: z.int().exactOptional(),
                      color_scheme_id: z.string().nullable(),
                      dark_scheme_id: z.string().nullable(),
                      default_calendar: z.string().exactOptional(),
                      digest_after_minutes: z.int(),
                      dynamic_favicon: z.boolean(),
                      email_digests: z.boolean(),
                      email_in_reply_to: z.boolean(),
                      email_level: z.int(),
                      email_messages_level: z.int(),
                      email_previous_replies: z.int(),
                      enable_allowed_pm_users: z.boolean(),
                      enable_defer: z.boolean(),
                      enable_quoting: z.boolean(),
                      external_links_in_new_tab: z.boolean(),
                      hide_profile_and_presence: z.boolean(),
                      homepage_id: z.string().nullable(),
                      include_tl0_in_digests: z.boolean(),
                      like_notification_frequency: z.int(),
                      mailing_list_mode: z.boolean(),
                      mailing_list_mode_frequency: z.int(),
                      new_topic_duration_minutes: z.int(),
                      notification_level_when_replying: z.int(),
                      oldest_search_log_date: z.string().nullable().exactOptional(),
                      seen_popups: z.array(z.any()).nullable().exactOptional(),
                      sidebar_list_destination: z.string().exactOptional(),
                      skip_new_user_tips: z.boolean(),
                      text_size: z.string(),
                      text_size_seq: z.int(),
                      theme_ids: z.array(z.any()),
                      theme_key_seq: z.int(),
                      timezone: z.string().nullable(),
                      title_count_mode: z.string(),
                      user_id: z.int(),
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
                        'enable_defer',
                        'digest_after_minutes',
                        'automatically_unpin_topics',
                        'auto_track_topics_after_msecs',
                        'notification_level_when_replying',
                        'new_topic_duration_minutes',
                        'email_previous_replies',
                        'email_in_reply_to',
                        'like_notification_frequency',
                        'include_tl0_in_digests',
                        'theme_ids',
                        'theme_key_seq',
                        'allow_private_messages',
                        'enable_allowed_pm_users',
                        'homepage_id',
                        'hide_profile_and_presence',
                        'text_size',
                        'text_size_seq',
                        'title_count_mode',
                        'timezone',
                        'skip_new_user_tips',
                      ],
                    }),
                  username: z.string(),
                  watched_category_ids: z.array(z.any()),
                  watched_first_post_category_ids: z.array(z.any()),
                  watched_tags: z.array(z.any()),
                  watching_first_post_tags: z.array(z.any()),
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
              user_badges: z.array(z.any()),
            })
            .openapi({ required: ['user_badges', 'user'] }),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
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
              user: z
                .strictObject({
                  admin: z.boolean(),
                  allowed_pm_usernames: z.array(z.any()),
                  avatar_template: z.string(),
                  badge_count: z.int(),
                  can_be_deleted: z.boolean(),
                  can_change_bio: z.boolean(),
                  can_change_location: z.boolean(),
                  can_change_tracking_preferences: z.boolean(),
                  can_change_website: z.boolean(),
                  can_delete_all_posts: z.boolean(),
                  can_edit: z.boolean(),
                  can_edit_email: z.boolean(),
                  can_edit_name: z.boolean(),
                  can_edit_username: z.boolean(),
                  can_ignore_user: z.boolean(),
                  can_mute_user: z.boolean(),
                  can_send_private_message_to_user: z.boolean(),
                  can_send_private_messages: z.boolean(),
                  can_upload_profile_header: z.boolean(),
                  can_upload_user_card_background: z.boolean(),
                  created_at: z.string(),
                  custom_fields: z
                    .strictObject({ first_name: z.string().nullable().exactOptional() })
                    .openapi({ required: [] }),
                  featured_topic: z.string().nullable(),
                  featured_user_badge_ids: z.array(z.any()),
                  flair_bg_color: z.string().nullable(),
                  flair_color: z.string().nullable(),
                  flair_group_id: z.string().nullable(),
                  flair_name: z.string().nullable(),
                  flair_url: z.string().nullable(),
                  group_users: z.array(
                    z
                      .strictObject({
                        group_id: z.int(),
                        notification_level: z.int(),
                        owner: z.boolean().exactOptional(),
                        user_id: z.int(),
                      })
                      .openapi({ required: ['group_id', 'user_id', 'notification_level'] }),
                  ),
                  groups: z.array(
                    z
                      .strictObject({
                        allow_membership_requests: z.boolean(),
                        automatic: z.boolean(),
                        bio_cooked: z.string().nullable(),
                        bio_excerpt: z.string().nullable(),
                        bio_raw: z.string().nullable(),
                        can_admin_group: z.boolean(),
                        can_see_members: z.boolean(),
                        default_notification_level: z.int(),
                        display_name: z.string(),
                        flair_bg_color: z.string().nullable(),
                        flair_color: z.string().nullable(),
                        flair_url: z.string().nullable(),
                        full_name: z.string().nullable(),
                        grant_trust_level: z.string().nullable(),
                        has_messages: z.boolean(),
                        id: z.int(),
                        incoming_email: z.string().nullable(),
                        members_visibility_level: z.int(),
                        membership_request_template: z.string().nullable(),
                        mentionable_level: z.int(),
                        messageable_level: z.int(),
                        name: z.string(),
                        primary_group: z.boolean(),
                        public_admission: z.boolean(),
                        public_exit: z.boolean(),
                        publish_read_state: z.boolean(),
                        title: z.string().nullable(),
                        user_count: z.int(),
                        visibility_level: z.int(),
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
                  has_title_badges: z.boolean(),
                  id: z.int(),
                  ignored: z.boolean(),
                  ignored_usernames: z.array(z.any()),
                  invited_by: z.string().nullable(),
                  last_posted_at: z.string().nullable(),
                  last_seen_at: z.string().nullable(),
                  locale: z.string().nullable(),
                  mailing_list_posts_per_day: z.int(),
                  moderator: z.boolean(),
                  muted: z.boolean(),
                  muted_category_ids: z.array(z.any()),
                  muted_tags: z.array(z.any()),
                  muted_usernames: z.array(z.any()),
                  name: z.string(),
                  pending_count: z.int(),
                  pending_posts_count: z.int().exactOptional(),
                  post_count: z.int(),
                  primary_group_id: z.string().nullable(),
                  primary_group_name: z.string().nullable(),
                  profile_view_count: z.int(),
                  recent_time_read: z.int(),
                  regular_category_ids: z.array(z.any()),
                  second_factor_backup_enabled: z.boolean().exactOptional(),
                  second_factor_enabled: z.boolean(),
                  staged: z.boolean(),
                  system_avatar_template: z.string(),
                  system_avatar_upload_id: z.string().nullable(),
                  time_read: z.int(),
                  title: z.string().nullable(),
                  tracked_category_ids: z.array(z.any()),
                  tracked_tags: z.array(z.any()),
                  trust_level: z.int(),
                  uploaded_avatar_id: z.string().nullable(),
                  use_logo_small_as_avatar: z.boolean(),
                  user_api_keys: z.string().nullable(),
                  user_auth_tokens: z.array(
                    z
                      .strictObject({
                        browser: z.string(),
                        client_ip: z.string(),
                        created_at: z.string(),
                        device: z.string(),
                        icon: z.string(),
                        id: z.int(),
                        is_active: z.boolean(),
                        location: z.string(),
                        os: z.string(),
                        seen_at: z.string(),
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
                  user_fields: z
                    .strictObject({ '1': z.string().nullable(), '2': z.string().nullable() })
                    .exactOptional()
                    .openapi({ required: ['1', '2'] }),
                  user_notification_schedule: z
                    .strictObject({
                      day_0_end_time: z.int(),
                      day_0_start_time: z.int(),
                      day_1_end_time: z.int(),
                      day_1_start_time: z.int(),
                      day_2_end_time: z.int(),
                      day_2_start_time: z.int(),
                      day_3_end_time: z.int(),
                      day_3_start_time: z.int(),
                      day_4_end_time: z.int(),
                      day_4_start_time: z.int(),
                      day_5_end_time: z.int(),
                      day_5_start_time: z.int(),
                      day_6_end_time: z.int(),
                      day_6_start_time: z.int(),
                      enabled: z.boolean(),
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
                  user_option: z
                    .strictObject({
                      allow_private_messages: z.boolean(),
                      auto_track_topics_after_msecs: z.int(),
                      automatically_unpin_topics: z.boolean(),
                      bookmark_auto_delete_preference: z.int().exactOptional(),
                      color_scheme_id: z.string().nullable(),
                      dark_scheme_id: z.string().nullable(),
                      default_calendar: z.string().exactOptional(),
                      digest_after_minutes: z.int(),
                      dynamic_favicon: z.boolean(),
                      email_digests: z.boolean(),
                      email_in_reply_to: z.boolean(),
                      email_level: z.int(),
                      email_messages_level: z.int(),
                      email_previous_replies: z.int(),
                      enable_allowed_pm_users: z.boolean(),
                      enable_defer: z.boolean(),
                      enable_quoting: z.boolean(),
                      external_links_in_new_tab: z.boolean(),
                      hide_profile_and_presence: z.boolean(),
                      homepage_id: z.string().nullable(),
                      include_tl0_in_digests: z.boolean(),
                      like_notification_frequency: z.int(),
                      mailing_list_mode: z.boolean(),
                      mailing_list_mode_frequency: z.int(),
                      new_topic_duration_minutes: z.int(),
                      notification_level_when_replying: z.int(),
                      oldest_search_log_date: z.string().nullable().exactOptional(),
                      seen_popups: z.array(z.any()).nullable().exactOptional(),
                      sidebar_list_destination: z.string().exactOptional(),
                      skip_new_user_tips: z.boolean(),
                      text_size: z.string(),
                      text_size_seq: z.int(),
                      theme_ids: z.array(z.any()),
                      theme_key_seq: z.int(),
                      timezone: z.string().nullable(),
                      title_count_mode: z.string(),
                      user_id: z.int(),
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
                        'enable_defer',
                        'digest_after_minutes',
                        'automatically_unpin_topics',
                        'auto_track_topics_after_msecs',
                        'notification_level_when_replying',
                        'new_topic_duration_minutes',
                        'email_previous_replies',
                        'email_in_reply_to',
                        'like_notification_frequency',
                        'include_tl0_in_digests',
                        'theme_ids',
                        'theme_key_seq',
                        'allow_private_messages',
                        'enable_allowed_pm_users',
                        'homepage_id',
                        'hide_profile_and_presence',
                        'text_size',
                        'text_size_seq',
                        'title_count_mode',
                        'timezone',
                        'skip_new_user_tips',
                      ],
                    }),
                  username: z.string(),
                  watched_category_ids: z.array(z.any()),
                  watched_first_post_category_ids: z.array(z.any()),
                  watched_tags: z.array(z.any()),
                  watching_first_post_tags: z.array(z.any()),
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
              user_badges: z.array(z.any()),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              email: z.string().exactOptional(),
              external_ids: z.object({}).exactOptional(),
              name: z.string().exactOptional(),
              password: z.string().exactOptional(),
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
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
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
              associated_accounts: z.array(z.any()),
              email: z.string(),
              secondary_emails: z.array(z.any()),
              unconfirmed_emails: z.array(z.any()),
            })
            .openapi({
              required: ['email', 'secondary_emails', 'unconfirmed_emails', 'associated_accounts'],
            }),
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
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              type: z.enum(['uploaded', 'custom', 'gravatar', 'system']),
              upload_id: z.int(),
            })
            .openapi({ required: ['upload_id', 'type'] }),
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
            .strictObject({ success: z.string().openapi({ examples: ['OK'] }) })
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
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
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
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
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
              file: z.any().exactOptional(),
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
              type: z.enum([
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
            })
            .openapi({ required: ['type'] }),
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
              dominant_color: z.string().nullable().exactOptional(),
              extension: z.string(),
              filesize: z.int(),
              height: z.int(),
              human_filesize: z.string(),
              id: z.int(),
              original_filename: z.string(),
              retain_hours: z.string().nullable(),
              short_path: z.string(),
              short_url: z.string(),
              thumbnail_height: z.int(),
              thumbnail_width: z.int(),
              url: z.string(),
              width: z.int(),
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
                  examples: [
                    '84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ',
                  ],
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
            .strictObject({ success: z.string().openapi({ examples: ['OK'] }) })
            .openapi({ required: ['success'] }),
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
                  examples: [[1, 2, 3]],
                }),
              unique_identifier: z
                .string()
                .openapi({
                  description:
                    'The unique identifier returned in the original /create-multipart\nrequest.',
                  examples: ['66e86218-80d9-4bda-b4d5-2b6def968705'],
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
                  examples: [
                    {
                      '1': 'https://discourse-martin-uploads-test.s3.us-east-2.amazonaws.com/temp/uploads/default/123abc/123abc.jpg?partNumber=1&uploadId=123456abcd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=test&X-Amz-Date=20211222T012336Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=abc123',
                    },
                  ],
                }),
            })
            .openapi({ required: ['presigned_urls'] }),
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
              for_private_message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optionally set this to true if the upload is for a\nprivate message.',
                  examples: ['true'],
                }),
              for_site_setting: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optionally set this to true if the upload is for a\nsite setting.',
                  examples: ['true'],
                }),
              pasted: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optionally set this to true if the upload was pasted\ninto the upload area. This will convert PNG files to JPEG.',
                  examples: ['true'],
                }),
              unique_identifier: z
                .string()
                .openapi({
                  description:
                    'The unique identifier returned in the original /generate-presigned-put\nrequest.',
                  examples: ['66e86218-80d9-4bda-b4d5-2b6def968705'],
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
              dominant_color: z.string().nullable().exactOptional(),
              extension: z.string(),
              filesize: z.int(),
              height: z.int(),
              human_filesize: z.string(),
              id: z.int(),
              original_filename: z.string(),
              retain_hours: z.string().nullable(),
              short_path: z.string(),
              short_url: z.string(),
              thumbnail_height: z.int(),
              thumbnail_width: z.int(),
              url: z.string(),
              width: z.int(),
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
              parts: z.array(z.any()).openapi({
                description:
                  'All of the part numbers and their corresponding ETags\nthat have been uploaded must be provided.',
                examples: [
                  [
                    { etag: '0c376dcfcc2606f4335bbc732de93344', part_number: 1 },
                    { etag: '09ert8cfcc2606f4335bbc732de91122', part_number: 2 },
                  ],
                ],
              }),
              unique_identifier: z
                .string()
                .openapi({
                  description:
                    'The unique identifier returned in the original /create-multipart\nrequest.',
                  examples: ['66e86218-80d9-4bda-b4d5-2b6def968705'],
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
              dominant_color: z.string().nullable().exactOptional(),
              extension: z.string(),
              filesize: z.int(),
              height: z.int(),
              human_filesize: z.string(),
              id: z.int(),
              original_filename: z.string(),
              retain_hours: z.string().nullable(),
              short_path: z.string(),
              short_url: z.string(),
              thumbnail_height: z.int(),
              thumbnail_width: z.int(),
              url: z.string(),
              width: z.int(),
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
              file_name: z.string().openapi({ examples: ['IMG_2021.jpeg'] }),
              file_size: z
                .int()
                .openapi({
                  description: 'File size should be represented in bytes.',
                  examples: [4096],
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
              upload_type: z.enum([
                'avatar',
                'profile_background',
                'card_background',
                'custom_emoji',
                'composer',
              ]),
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
              external_upload_identifier: z
                .string()
                .openapi({
                  description:
                    'The identifier of the multipart upload in the external\nstorage provider. This is the multipart upload_id in AWS S3.',
                  examples: [
                    '84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ',
                  ],
                }),
              key: z
                .string()
                .openapi({
                  description: 'The path of the temporary file on the external storage\nservice.',
                  examples: ['temp/site/uploads/default/12345/67890.jpg'],
                }),
              unique_identifier: z
                .string()
                .openapi({
                  description:
                    'A unique string that identifies the external upload.\nThis must be stored and then sent in the /complete-multipart\nand /batch-presign-multipart-parts endpoints.',
                  examples: ['66e86218-80d9-4bda-b4d5-2b6def968705'],
                }),
            })
            .openapi({ required: ['external_upload_identifier', 'key', 'unique_identifier'] }),
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
              file_name: z.string().openapi({ examples: ['IMG_2021.jpeg'] }),
              file_size: z
                .int()
                .openapi({
                  description: 'File size should be represented in bytes.',
                  examples: [4096],
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
              type: z.enum([
                'avatar',
                'profile_background',
                'card_background',
                'custom_emoji',
                'composer',
              ]),
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
                  examples: ['temp/site/uploads/default/12345/67890.jpg'],
                }),
              unique_identifier: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique string that identifies the external upload.\nThis must be stored and then sent in the /complete-external-upload\nendpoint to complete the direct upload.',
                  examples: ['66e86218-80d9-4bda-b4d5-2b6def968705'],
                }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A presigned PUT URL which must be used to upload\nthe file binary blob to.',
                  examples: [
                    'https://file-uploads.s3.us-west-2.amazonaws.com/temp/site/uploads/default/123/456.jpg?x-amz-acl=private&x-amz-meta-sha1-checksum=sha1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AAAAus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211221T011246Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=12345678',
                  ],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
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
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
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
              badge_types: z
                .array(
                  z
                    .strictObject({ id: z.int(), name: z.string(), sort_order: z.int() })
                    .openapi({ required: ['id', 'name', 'sort_order'] }),
                )
                .exactOptional(),
              badges: z
                .array(
                  z
                    .strictObject({
                      allow_title: z.boolean(),
                      badge_grouping_id: z.int(),
                      badge_type_id: z.int(),
                      description: z.string(),
                      enabled: z.boolean(),
                      grant_count: z.int(),
                      icon: z.string(),
                      id: z.int(),
                      image_url: z.string().nullable(),
                      listable: z.boolean(),
                      manually_grantable: z.boolean(),
                      multiple_grant: z.boolean(),
                      name: z.string(),
                      slug: z.string(),
                      system: z.boolean(),
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
              granted_bies: z
                .array(
                  z
                    .strictObject({
                      admin: z.boolean(),
                      avatar_template: z.string(),
                      flair_name: z.string().nullable(),
                      id: z.int(),
                      moderator: z.boolean(),
                      name: z.string(),
                      trust_level: z.int(),
                      username: z.string(),
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
                    badge_id: z.int(),
                    can_favorite: z.boolean(),
                    granted_at: z.string(),
                    granted_by_id: z.int(),
                    grouping_position: z.int(),
                    id: z.int(),
                    is_favorite: z.string().nullable(),
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
          param: { in: 'query', name: 'offset', required: true, schema: { type: 'integer' } },
        }),
      username: z
        .string()
        .openapi({
          param: { in: 'query', name: 'username', required: true, schema: { type: 'string' } },
        }),
      filter: z
        .string()
        .openapi({
          param: { in: 'query', name: 'filter', required: true, schema: { type: 'string' } },
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
                    acting_avatar_template: z.string(),
                    acting_name: z.string().nullable(),
                    acting_user_id: z.int(),
                    acting_username: z.string(),
                    action_code: z.string().nullable(),
                    action_type: z.int(),
                    archived: z.boolean(),
                    avatar_template: z.string(),
                    category_id: z.int(),
                    closed: z.boolean(),
                    created_at: z.string(),
                    deleted: z.boolean(),
                    excerpt: z.string(),
                    hidden: z.string().nullable(),
                    name: z.string().nullable(),
                    post_id: z.string().nullable(),
                    post_number: z.int(),
                    post_type: z.string().nullable(),
                    slug: z.string(),
                    target_name: z.string().nullable(),
                    target_user_id: z.int(),
                    target_username: z.string(),
                    title: z.string(),
                    topic_id: z.int(),
                    user_id: z.int(),
                    username: z.string(),
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
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
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
              gravatar_avatar_template: z.string().nullable(),
              gravatar_upload_id: z.int().nullable(),
            })
            .openapi({ required: ['gravatar_upload_id', 'gravatar_avatar_template'] }),
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
          param: { in: 'header', name: 'Api-Key', required: true, schema: { type: 'string' } },
        }),
      'Api-Username': z
        .string()
        .openapi({
          param: { in: 'header', name: 'Api-Username', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              active: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'This param requires an api key in the request header\nor it will be ignored',
                }),
              approved: z.boolean().exactOptional(),
              email: z.string(),
              external_ids: z.object({}).exactOptional(),
              name: z.string(),
              password: z.string(),
              'user_fields[1]': z.boolean().exactOptional(),
              username: z.string(),
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
              active: z.boolean(),
              message: z.string(),
              success: z.boolean(),
              user_id: z.int().exactOptional(),
            })
            .openapi({ required: ['success', 'active', 'message'] }),
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
          param: { in: 'path', name: 'token', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ password: z.string(), username: z.string() })
            .openapi({ required: ['username', 'password'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'success response' } },
})
