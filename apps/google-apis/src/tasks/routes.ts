import { createRoute, z } from '@hono/zod-openapi'

const TaskSchema = z
  .object({
    completed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether the task has been deleted. The default is False.',
      }),
    due: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.",
      }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.',
      }),
    id: z.string().exactOptional().openapi({ description: 'Task identifier.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the resource. This is always "tasks#task".' }),
    links: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The description. In HTML speak: Everything between <a> and </a>.',
              }),
            link: z.string().exactOptional().openapi({ description: 'The URL.' }),
            type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of the link, e.g. "email".' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Collection of links. This collection is read-only.' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Notes describing the task. Optional.' }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level.',
      }),
    position: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task\'s corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position.',
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL pointing to this task. Used to retrieve, update, or delete this task.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Status of the task. This is either "needsAction" or "completed".' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the task.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last modification time of the task (as a RFC 3339 timestamp).' }),
  })
  .openapi({ required: [] })
  .openapi('Task')

const TaskListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    id: z.string().exactOptional().openapi({ description: 'Task list identifier.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the resource. This is always "tasks#taskList".' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL pointing to this task list. Used to retrieve, update, or delete this task list.',
      }),
    title: z.string().exactOptional().openapi({ description: 'Title of the task list.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modification time of the task list (as a RFC 3339 timestamp).',
      }),
  })
  .openapi({ required: [] })
  .openapi('TaskList')

const TaskListsSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z
      .array(TaskListSchema)
      .exactOptional()
      .openapi({ description: 'Collection of task lists.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the resource. This is always "tasks#taskLists".' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token that can be used to request the next page of this result.' }),
  })
  .openapi({ required: [] })
  .openapi('TaskLists')

const TasksSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z.array(TaskSchema).exactOptional().openapi({ description: 'Collection of tasks.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the resource. This is always "tasks#tasks".' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token used to access the next page of this result.' }),
  })
  .openapi({ required: [] })
  .openapi('Tasks')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/tasks':
          'Create, edit, organize, and delete all your tasks',
        'https://www.googleapis.com/auth/tasks.readonly': 'View your tasks',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/tasks':
          'Create, edit, organize, and delete all your tasks',
        'https://www.googleapis.com/auth/tasks.readonly': 'View your tasks',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postTasksV1ListsTasklistClearRoute = createRoute({
  method: 'post',
  path: '/tasks/v1/lists/{tasklist}/clear',
  tags: ['tasks'],
  description:
    "Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.",
  operationId: 'tasks.tasks.clear',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const getTasksV1ListsTasklistTasksRoute = createRoute({
  method: 'get',
  path: '/tasks/v1/lists/{tasklist}/tasks',
  tags: ['tasks'],
  description: 'Returns all tasks in the specified task list.',
  operationId: 'tasks.tasks.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      completedMax: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.",
            in: 'query',
            name: 'completedMax',
            schema: { type: 'string' },
            required: false,
          },
        }),
      completedMin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.",
            in: 'query',
            name: 'completedMin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dueMax: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.",
            in: 'query',
            name: 'dueMax',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dueMin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.",
            in: 'query',
            name: 'dueMin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description:
              'Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token specifying the result page to return. Optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showCompleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Flag indicating whether completed tasks are returned in the result. Optional. The default is True. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps.",
            in: 'query',
            name: 'showCompleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.',
            in: 'query',
            name: 'showDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      showHidden: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.',
            in: 'query',
            name: 'showHidden',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      updatedMin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.",
            in: 'query',
            name: 'updatedMin',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TasksSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks.readonly'],
    },
  ],
})

export const postTasksV1ListsTasklistTasksRoute = createRoute({
  method: 'post',
  path: '/tasks/v1/lists/{tasklist}/tasks',
  tags: ['tasks'],
  description: 'Creates a new task on the specified task list.',
  operationId: 'tasks.tasks.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      previous: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.',
            in: 'query',
            name: 'previous',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TaskSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const getTasksV1ListsTasklistTasksTaskRoute = createRoute({
  method: 'get',
  path: '/tasks/v1/lists/{tasklist}/tasks/{task}',
  tags: ['tasks'],
  description: 'Returns the specified task.',
  operationId: 'tasks.tasks.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      task: z
        .string()
        .openapi({
          param: {
            description: 'Task identifier.',
            in: 'path',
            name: 'task',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks.readonly'],
    },
  ],
})

export const putTasksV1ListsTasklistTasksTaskRoute = createRoute({
  method: 'put',
  path: '/tasks/v1/lists/{tasklist}/tasks/{task}',
  tags: ['tasks'],
  description: 'Updates the specified task.',
  operationId: 'tasks.tasks.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      task: z
        .string()
        .openapi({
          param: {
            description: 'Task identifier.',
            in: 'path',
            name: 'task',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TaskSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const deleteTasksV1ListsTasklistTasksTaskRoute = createRoute({
  method: 'delete',
  path: '/tasks/v1/lists/{tasklist}/tasks/{task}',
  tags: ['tasks'],
  description: 'Deletes the specified task from the task list.',
  operationId: 'tasks.tasks.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      task: z
        .string()
        .openapi({
          param: {
            description: 'Task identifier.',
            in: 'path',
            name: 'task',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const patchTasksV1ListsTasklistTasksTaskRoute = createRoute({
  method: 'patch',
  path: '/tasks/v1/lists/{tasklist}/tasks/{task}',
  tags: ['tasks'],
  description: 'Updates the specified task. This method supports patch semantics.',
  operationId: 'tasks.tasks.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      task: z
        .string()
        .openapi({
          param: {
            description: 'Task identifier.',
            in: 'path',
            name: 'task',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TaskSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const postTasksV1ListsTasklistTasksTaskMoveRoute = createRoute({
  method: 'post',
  path: '/tasks/v1/lists/{tasklist}/tasks/{task}/move',
  tags: ['tasks'],
  description:
    'Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.',
  operationId: 'tasks.tasks.move',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      previous: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.',
            in: 'query',
            name: 'previous',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      task: z
        .string()
        .openapi({
          param: {
            description: 'Task identifier.',
            in: 'path',
            name: 'task',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const getTasksV1UsersMeListsRoute = createRoute({
  method: 'get',
  path: '/tasks/v1/users/@me/lists',
  tags: ['tasklists'],
  description: "Returns all the authenticated user's task lists.",
  operationId: 'tasks.tasklists.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      maxResults: z
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
            description:
              'Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token specifying the result page to return. Optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskListsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks.readonly'],
    },
  ],
})

export const postTasksV1UsersMeListsRoute = createRoute({
  method: 'post',
  path: '/tasks/v1/users/@me/lists',
  tags: ['tasklists'],
  description: "Creates a new task list and adds it to the authenticated user's task lists.",
  operationId: 'tasks.tasklists.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: TaskListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const getTasksV1UsersMeListsTasklistRoute = createRoute({
  method: 'get',
  path: '/tasks/v1/users/@me/lists/{tasklist}',
  tags: ['tasklists'],
  description: "Returns the authenticated user's specified task list.",
  operationId: 'tasks.tasklists.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks.readonly'],
    },
  ],
})

export const putTasksV1UsersMeListsTasklistRoute = createRoute({
  method: 'put',
  path: '/tasks/v1/users/@me/lists/{tasklist}',
  tags: ['tasklists'],
  description: "Updates the authenticated user's specified task list.",
  operationId: 'tasks.tasklists.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TaskListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const deleteTasksV1UsersMeListsTasklistRoute = createRoute({
  method: 'delete',
  path: '/tasks/v1/users/@me/lists/{tasklist}',
  tags: ['tasklists'],
  description: "Deletes the authenticated user's specified task list.",
  operationId: 'tasks.tasklists.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})

export const patchTasksV1UsersMeListsTasklistRoute = createRoute({
  method: 'patch',
  path: '/tasks/v1/users/@me/lists/{tasklist}',
  tags: ['tasklists'],
  description:
    "Updates the authenticated user's specified task list. This method supports patch semantics.",
  operationId: 'tasks.tasklists.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      tasklist: z
        .string()
        .openapi({
          param: {
            description: 'Task list identifier.',
            in: 'path',
            name: 'tasklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TaskListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TaskListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/tasks'],
      Oauth2c: ['https://www.googleapis.com/auth/tasks'],
    },
  ],
})
