import { createRoute, z } from '@hono/zod-openapi'

const UserSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'The user ID.', example: 1 }),
    github_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'The GitHub ID', example: 3074765 }),
    github_login: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's GitHub login", example: 'jules2689' }),
    last_synced_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time of the last sync.',
        example: '2017-02-22T15:49:32.104Z',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time of creation.',
        example: '2017-02-22T15:49:32.104Z',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time of the last update.',
        example: '2017-02-22T15:49:32.104Z',
      }),
  })
  .openapi({ title: 'User Information', required: [] })
  .openapi('User')

const RefreshSettingSchema = z
  .object({
    refresh_interval: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The refresh interval on which a sync should be initiated (while viewing the app). In milliseconds.',
        example: 60000,
      }),
  })
  .openapi({ title: 'Refresh Setting', required: [] })
  .openapi('RefreshSetting')

const WritePinnedSearchSchema = z
  .object({
    query: z.string().exactOptional().openapi({ example: 'foo' }),
    name: z.string().exactOptional().openapi({ example: 'bar' }),
  })
  .openapi({ title: 'Post or Patch Pinned Search', required: [] })
  .openapi('WritePinnedSearch')

const PinnedSearchSchema = z
  .object({
    id: z.number().exactOptional().openapi({ description: 'The search ID.', example: 35778 }),
    user_id: z.number().exactOptional().openapi({ description: 'The User ID.', example: 11741 }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'The search query.', example: 'owner:octobox inbox:true' }),
    name: z.string().exactOptional().openapi({ description: 'The search name.', example: 'Work' }),
    count: z.number().exactOptional().openapi({ description: 'The count.', example: 0 }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time of creation.',
        example: '2021-11-23T19:48:39.953Z',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time of update.',
        example: '2021-11-23T19:48:39.953Z',
      }),
  })
  .openapi({ title: 'Return Pinned Search', required: [] })
  .openapi('PinnedSearch')

const SubjectSchema = z
  .object({
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
    type: z.string().exactOptional(),
    state: z.string().exactOptional(),
  })
  .openapi({ title: 'Subject', required: [] })
  .openapi('Subject')

const RepoSchema = z
  .object({
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    owner: z.string().exactOptional(),
    repo_url: z.string().exactOptional(),
  })
  .openapi({ title: 'Repo', required: [] })
  .openapi('Repo')

const NotificationSchema = z
  .object({
    id: z.int().exactOptional(),
    github_id: z.int().exactOptional(),
    reason: z.string().exactOptional(),
    unread: z.boolean().exactOptional(),
    archived: z.boolean().exactOptional(),
    starred: z.boolean().exactOptional(),
    url: z.string().exactOptional(),
    web_url: z.string().exactOptional(),
    last_read_at: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    subject: SubjectSchema.exactOptional(),
    repo: RepoSchema.exactOptional(),
  })
  .openapi({ title: 'Notification', required: [] })
  .openapi('Notification')

const NotificationsSchema = z
  .object({
    pagination: z
      .object({
        total_notifications: z.int().exactOptional(),
        page: z.int().exactOptional(),
        total_pages: z.int().exactOptional(),
        per_page: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    types: z
      .object({ PullRequest: z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    reasons: z
      .object({ mention: z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    unread_repositories: z
      .object({ 'octobox/octobox': z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    notifications: z.array(NotificationSchema).exactOptional(),
  })
  .openapi({ title: 'Notifications', required: [] })
  .openapi('Notifications')

const SubjectUrlResponseSchema = z
  .object({
    id: z.int().exactOptional(),
    github_id: z.int().exactOptional(),
    reason: z.string().exactOptional(),
    unread: z.boolean().exactOptional(),
    archived: z.boolean().exactOptional(),
    starred: z.boolean().exactOptional(),
    url: z.string().exactOptional(),
    web_url: z.string().exactOptional(),
    last_read_at: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    subject: SubjectSchema.exactOptional(),
    repo: RepoSchema.exactOptional(),
  })
  .openapi({ title: 'Subject URL Response', required: [] })
  .openapi('SubjectUrlResponse')

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

const ApiKeyAuthSecurityScheme = { type: 'apiKey', in: 'header', name: 'X-Octobox-API' }

export const postApiNotificationsArchiveSelectedJsonRoute = createRoute({
  method: 'post',
  path: '/api/notifications/archive_selected.json',
  tags: ['Notifications'],
  summary: 'Archive notifications.',
  description:
    'Archive GitHub notifications. You can choose to archive all notifications or only selected ones.',
  operationId: 'ArchiveNotifications',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description:
              '**Notification ID.** _Example: 1_. You can select a single notification ID or an array of IDs to archive. If ID is set to ‘all’, all notifications will be archived.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Archive successful.' } },
})

export const deleteApiNotificationsDeleteSelectedJsonRoute = createRoute({
  method: 'delete',
  path: '/api/notifications/delete_selected.json',
  tags: ['Notifications'],
  summary: 'Delete notifications.',
  description:
    'Delete GitHub notifications. You can choose to delete all notifications or only selected ones.',
  operationId: 'DeleteNotifications',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description:
              '**Notification ID.** _Example: 1_. You can select a single notification ID or an array of IDs to delete. If ID is set to ‘all’, all of your notifications will be deleted.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Deletion successful.' } },
})

export const getApiNotificationsJsonRoute = createRoute({
  method: 'get',
  path: '/api/notifications.json',
  tags: ['Notifications'],
  summary: 'Return notifications.',
  description:
    'Return a list of notifications and associated data for the user. See the example response below for the data that will be returned.',
  operationId: 'ReturnNotifications',
  request: {
    query: z.object({
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
            description:
              '**Search page.** _Example: 1_. You can request a specific page of notifications using this parameter.',
            schema: { type: 'integer' },
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
          z.int().max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'per_page',
            in: 'query',
            description:
              '**Results per page.** _Example: 100._ You can identify the number of results to include per page. The default value is 20, and the maximum value is 100.',
            schema: { type: 'integer', maximum: 100 },
            required: false,
          },
        }),
      starred: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'starred',
            in: 'query',
            description:
              '**Return starred notifications.** _Example: true_. You can return only your starred notifications.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      archive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archive',
            in: 'query',
            description:
              '**Return archived notifications.** _Example: true_. You can use this parameter to return only notifications that you have archived.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description:
              "**Search by subject title.** _Example: 'Improve Rest API Docs.'_ You can use this parameter to search for a notification using its subject title.",
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: NotificationsSchema } },
    },
  },
})

export const getApiNotificationsLookupJsonRoute = createRoute({
  method: 'get',
  path: '/api/notifications/lookup.json',
  tags: ['Notifications'],
  summary: 'Find notification by subject URL.',
  description: 'Return a notification using its subject URL.',
  operationId: 'ReturnNotificationBySubject',
  request: {
    query: z.object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description: 'GitHub subject URL. _Example: https://github.com/{user}/{subject-URL}_.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Search successful.',
      content: { 'application/json': { schema: SubjectUrlResponseSchema } },
    },
  },
})

export const getApiNotificationsMarkReadSelectedJsonRoute = createRoute({
  method: 'get',
  path: '/api/notifications/mark_read_selected.json',
  tags: ['Notifications'],
  summary: 'Mark notifications as read.',
  description:
    'Mark notifications as read. You can choose to mark all notifications as read, or only selected ones.',
  operationId: 'MarkRead',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description:
              '**Notification ID.** _Example: 1_. You can select a single notification ID or an array of IDs to mark as read. If ID is set to ‘all’, all notifications will be marked as read.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Notifications successfully marked as read.' } },
})

export const postApiNotificationsMuteSelectedJsonRoute = createRoute({
  method: 'post',
  path: '/api/notifications/mute_selected.json',
  tags: ['Notifications'],
  summary: 'Mute notifications.',
  description:
    'Mute notifications. You can choose to mute all notifications or only selected ones. Muting notifications will also archive them.',
  operationId: 'MuteNotifications',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description:
              '**Notification ID.** _Example: 1_. You can select a single notification ID or an array of IDs to mute. If ID is set to ‘all’, all notifications will be muted. Muting notifications will also archive them.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Mute successful.' } },
})

export const postApiNotificationsIdStarJsonRoute = createRoute({
  method: 'post',
  path: '/api/notifications/{id}/star.json',
  tags: ['Notifications'],
  summary: "Change a notification's star status.",
  description:
    'Star or un-star a notification based on the current status of the notification. If the notification is currently not starred, a star will be applied. If it is currently starred, the star will be removed. ',
  operationId: 'StarNotification',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            description:
              '**Notification ID.** _Example: 1_. Note that this parameter only accepts a single notification ID.  ',
            required: true,
            in: 'path',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Star state-change successful.' } },
})

export const postApiNotificationsSyncJsonRoute = createRoute({
  method: 'post',
  path: '/api/notifications/sync.json',
  tags: ['Notifications'],
  summary: 'Sync with GitHub.',
  description: 'Initiate sync with GitHub.',
  operationId: 'SyncCheck',
  responses: {
    200: {
      description: 'Sync successful.',
      content: { 'application/json': { schema: z.object({}).openapi({ example: {} }) } },
    },
    503: {
      description:
        'Service unavailable - sync failed due to GitHub API issues or network problems.',
    },
  },
})

export const getApiNotificationsSyncingJsonRoute = createRoute({
  method: 'get',
  path: '/api/notifications/syncing.json',
  tags: ['Notifications'],
  summary: 'Check GitHub sync status.',
  description: 'Check whether Octobox is synchronizing notifications with GitHub.',
  operationId: 'Syncing',
  responses: {
    200: {
      description: 'Octobox is not currently syncing.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Any error from the last sync job' }),
            })
            .openapi({ example: { error: null }, required: [] }),
        },
      },
    },
    423: {
      description: 'Octobox is currently syncing with GitHub.',
      content: { 'application/json': { schema: z.object({}).openapi({ example: {} }) } },
    },
  },
})

export const getApiNotificationsUnreadCountJsonRoute = createRoute({
  method: 'get',
  path: '/api/notifications/unread_count.json',
  tags: ['Notifications'],
  summary: 'Return unread notification count.',
  description: 'Return the number of unread notifications..',
  operationId: 'ReturnUnreadCount',
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The number of unread notifications.', example: 1 }),
            })
            .openapi({ title: 'Count', required: [] }),
        },
      },
    },
  },
})

export const getApiPinnedSearchesJsonRoute = createRoute({
  method: 'get',
  path: '/api/pinned_searches.json',
  tags: ['Pinned Searches'],
  summary: 'Return pinned searches.',
  description: 'Return a list of your pinned searches.',
  operationId: 'ReturnPinnedSearches',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(PinnedSearchSchema) } },
    },
  },
})

export const postApiPinnedSearchesJsonRoute = createRoute({
  method: 'post',
  path: '/api/pinned_searches.json',
  tags: ['Pinned Searches'],
  summary: 'Create a pinned search.',
  description: 'Create a pinned search to navigate GitHub more efficiently.',
  operationId: 'CreatePinnedSearch',
  request: { body: { content: { 'application/json': { schema: WritePinnedSearchSchema } } } },
  responses: {
    200: {
      description: 'Pinned search successfully created.',
      content: { 'application/json': { schema: PinnedSearchSchema } },
    },
  },
})

export const getApiPinnedSearchesIdJsonRoute = createRoute({
  method: 'get',
  path: '/api/pinned_searches/{id}.json',
  tags: ['Pinned Searches'],
  summary: 'Return a single pinned search.',
  description: 'Return a single pinned search using its pinned search ID.',
  operationId: 'ReturnPinnedSearch',
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
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              '**Pinned Search Id.** _Example: 35778. The ID of the pinned search you would like to get.',
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PinnedSearchSchema } },
    },
  },
})

export const deleteApiPinnedSearchesIdJsonRoute = createRoute({
  method: 'delete',
  path: '/api/pinned_searches/{id}.json',
  tags: ['Pinned Searches'],
  summary: 'Delete a pinned search.',
  description: 'Delete a pinned search that you no longer need.',
  operationId: 'DeletePinnedSearch',
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
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              '**Pinned Search Id.** _Example: 35778_. The ID of the pinned search you would like to delete.',
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Pinned search deleted successfully.' } },
})

export const patchApiPinnedSearchesIdJsonRoute = createRoute({
  method: 'patch',
  path: '/api/pinned_searches/{id}.json',
  tags: ['Pinned Searches'],
  summary: 'Update a pinned search.',
  description:
    'Update a pinned search. You can update the search query string and/or the display name of the search.',
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
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              '**Pinned Search Id.** _Example: 35778._ The ID of the pinned search you would like to update.',
            schema: { type: 'number' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WritePinnedSearchSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PinnedSearchSchema } },
    },
  },
})

export const getApiUsersProfileJsonRoute = createRoute({
  method: 'get',
  path: '/api/users/profile.json',
  tags: ['Users'],
  summary: 'Return user profile.',
  description:
    'Return user profile information for the current user. Only the current user profile can be returned.',
  operationId: 'ReturnUserProfile',
  responses: {
    200: {
      description: 'User profile successfully returned.',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const deleteApiUsersIdJsonRoute = createRoute({
  method: 'delete',
  path: '/api/users/{id}.json',
  tags: ['Users'],
  summary: 'Delete user profile.',
  description: 'Delete the user profile. Only the current user profile will be deleted.',
  operationId: 'DeleteUser',
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
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: '**GitHub user ID.** _Example: 1234351._',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deletion successful.',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const patchApiUsersIdJsonRoute = createRoute({
  method: 'patch',
  path: '/api/users/{id}.json',
  tags: ['Users'],
  summary: 'Update user profile.',
  description:
    'Allows users to update their user profile. Only the current user profile will be updated.',
  operationId: 'UpdateUser',
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
          z.number(),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: '**GitHub user ID.** _Example: 1234351._',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    query: z.object({
      personal_access_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'personal_access_token',
            in: 'query',
            description: "**The user's personal access token.**",
            schema: { type: 'string' },
            required: false,
          },
        }),
      refresh_interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'refresh_interval',
            in: 'query',
            description:
              '**Refresh interval.** _Example: 60000._ The refresh interval on which a sync should be initiated while viewing the app. _Unit: milliseconds._',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Update successful.',
      content: { 'application/json': { schema: RefreshSettingSchema } },
    },
  },
})
