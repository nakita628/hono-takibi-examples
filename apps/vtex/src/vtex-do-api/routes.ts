import { createRoute, z } from '@hono/zod-openapi'

const AddCommentRequestSchema = z
  .object({ text: z.string() })
  .openapi({
    example: { text: 'escreva seu comentário' },
    required: ['text'],
    title: 'AddCommentRequest',
  })
  .openapi('AddCommentRequest')

const AssigneeSchema = z
  .object({ email: z.string(), id: z.string().nullable(), name: z.string().nullable() })
  .openapi({
    example: { email: 'frederico.santos@vtex.com.br', id: null, name: null },
    required: ['id', 'name', 'email'],
    title: 'Assignee',
  })
  .openapi('Assignee')

const EditTaskRequestSchema = z
  .object({ status: z.string() })
  .openapi({ example: { status: 'InProgress' }, required: ['status'], title: 'EditTaskRequest' })
  .openapi('EditTaskRequest')

const FollowerSchema = z
  .object({ email: z.string(), id: z.string().nullable(), name: z.string().nullable() })
  .openapi({
    example: { email: 'alan.dantas@vtex.com.br', id: null, name: null },
    required: ['id', 'name', 'email'],
    title: 'Follower',
  })
  .openapi('Follower')

const NewNoteRequestSchema = z
  .object({
    description: z.string(),
    domain: z.string(),
    target: z
      .object({
        id: z.string().exactOptional(),
        type: z.string().exactOptional(),
        url: z.string().exactOptional(),
      })
      .openapi({ description: 'Target.', required: [] }),
  })
  .openapi({ required: ['target', 'domain', 'description'] })
  .openapi('NewNoteRequest')

const TargetSchema = z
  .object({ id: z.string(), type: z.string(), url: z.string() })
  .openapi({
    example: {
      id: 'v964735bdev-01',
      type: 'order',
      url: 'https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01',
    },
    required: ['id', 'type', 'url'],
    title: 'Target',
  })
  .openapi('Target')

const NewTaskRequestSchema = z
  .object({
    assignee: AssigneeSchema,
    context: z.string(),
    description: z.string(),
    domain: z.string(),
    dueDate: z.string(),
    followers: z.array(FollowerSchema).openapi({ description: '' }),
    name: z.string(),
    parentTaskId: z.string().nullable(),
    priority: z.string(),
    surrogateKey: z.string(),
    target: z.array(TargetSchema).openapi({ description: '' }),
  })
  .openapi({
    example: {
      assignee: { email: 'frederico.santos@vtex.com.br', id: null, name: null },
      context: 'Marketplace',
      description: 'Ajudar na doc API para lancar no postman',
      domain: 'oms',
      dueDate: '2016-03-01',
      followers: [{ email: 'alan.dantas@vtex.com.br', id: null, name: null }],
      name: 'pricing',
      parentTaskId: null,
      priority: 'Critical',
      surrogateKey: '505224-0',
      target: [
        {
          id: '633730670642-01',
          type: 'order',
          url: 'https://recorrenciaqa.vtexcommercebeta.com.br/admin/checkout/orders/633730670642-01',
        },
      ],
    },
    required: [
      'target',
      'domain',
      'context',
      'name',
      'priority',
      'surrogateKey',
      'description',
      'dueDate',
      'assignee',
      'followers',
      'parentTaskId',
    ],
    title: 'NewTaskRequest',
  })
  .openapi('NewTaskRequest')

const ReasonParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data.',
      in: 'query',
      name: 'reason',
      required: false,
      schema: { example: 'data-validation', type: 'string' },
      style: 'form',
    },
    example: 'data-validation',
  })

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getNotesRoute = createRoute({
  method: 'get',
  path: '/notes',
  tags: ['Note'],
  summary: 'Get Notes by orderId',
  description: 'Retrieves notes related to a specific `orderId`.',
  operationId: 'GetNotesbyorderId',
  request: {
    query: z.object({
      'target.id': z
        .string()
        .openapi({
          param: {
            description: 'ID of the order.',
            explode: true,
            in: 'query',
            name: 'target.id',
            required: true,
            schema: {
              description: 'ID of the order.',
              example: '1172452900788-01',
              type: 'string',
            },
            style: 'form',
          },
          description: 'ID of the order.',
          example: '1172452900788-01',
        }),
      perPage: z
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
            description: 'Number of notes per page. Maximum: 30.',
            explode: true,
            in: 'query',
            name: 'perPage',
            required: false,
            schema: {
              description: 'Number of notes per page. Maximum: 30.',
              example: 20,
              type: 'integer',
            },
            style: 'form',
          },
          description: 'Number of notes per page. Maximum: 30.',
          example: 20,
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
            description: 'Number of the page to be retrieved.',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              description: 'Number of the page to be retrieved.',
              example: 3,
              type: 'integer',
            },
            style: 'form',
          },
          description: 'Number of the page to be retrieved.',
          example: 3,
        }),
      reason: ReasonParamsSchema,
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any(), example: {} } } },
  },
})

export const postNotesRoute = createRoute({
  method: 'post',
  path: '/notes',
  tags: ['Note'],
  summary: 'Create Note',
  description:
    "This endpoint creates a new note in VTEX DO. Be aware of the following limitations:\r\n\n\r- The maximum number of notes for an order is 30.\r\n\n\r- The maximum number of characters in a note's description is 2000.",
  operationId: 'NewNote',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .openapi({
                  description: 'Note description. Maximum number of characters: 2000.',
                  example: 'Order ID in the marketplace is 786-09.',
                }),
              domain: z.string().openapi({ description: 'Note domain.', example: 'oms' }),
              target: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Target ID.', example: 'v964735bdev-01' }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Target type.', example: 'order' }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Target URL.',
                      example:
                        'https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01',
                    }),
                })
                .openapi({ description: 'Target.', required: [] }),
            })
            .openapi({ required: ['target', 'domain', 'description'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.any(),
          example: {
            createdBy: {
              email: 'pedro.costa@vtex.com.br',
              id: 'fb542e51-5488-4c34-8d17-ed8fcf597a94',
              key: null,
              name: 'pedro.costa@vtex.com.br',
            },
            creationDate: '2022-01-11T15:49:17.8785392Z',
            description: "The order's ID in the marketplace is 786-09",
            domain: 'oms',
            id: 'A08CDB2519AC4FA49EB6099CF72C3642',
            lastUpdate: '2022-01-11T15:49:17.8785392Z',
            owner: 'c97ef6c8491a439f927cf9918644329f',
            target: {
              id: 'v964735bdev-01',
              type: 'order',
              url: 'https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01',
            },
          },
        },
      },
    },
  },
})

export const getNotesNoteIdRoute = createRoute({
  method: 'get',
  path: '/notes/{noteId}',
  tags: ['Note'],
  summary: 'Retrieve Note',
  description: 'Retrieves a given note in VTEX DO, filtering by `noteId`.',
  operationId: 'GetNote',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      noteId: z
        .string()
        .openapi({
          param: {
            description: "Note's ID.",
            in: 'path',
            name: 'noteId',
            required: true,
            schema: { description: "Note's ID.", example: '654321cba', type: 'string' },
            style: 'simple',
          },
          description: "Note's ID.",
          example: '654321cba',
        }),
    }),
    query: z.object({ reason: ReasonParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any(), example: {} } } },
  },
})

export const getTasksRoute = createRoute({
  method: 'get',
  path: '/tasks',
  tags: ['Task'],
  summary: 'List tasks',
  description:
    'This endpoint allows you to filter tasks. You can choose between the following filtering options: \r\n\r\n- **Assignees:** using `assignee.email` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?assignee.email={{person@email.com}}&status={{open}}`. \r\n\r\n- **Targets:** using `targetId` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?target.id={{name}}&status={{open}}`. \r\n\r\n- **Paged tasks:** using `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?page={{1}}&perPage={{10}}&status=;{{-Closed}}`. \r\n\r\n- **Context:** using `context`, `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?context={{context}}&page={{1}}&perPage={{10}}&status={{-Closed}}`.',
  operationId: 'Listtasksbyassignee',
  request: {
    query: z.object({
      'assignee.email': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If you wish to list tasks by assignee, insert the desired assignee's email and status.",
            explode: true,
            in: 'query',
            name: 'assignee.email',
            required: false,
            schema: { example: '{{assigneeEmail}}', type: 'string' },
            style: 'form',
          },
          example: '{{assigneeEmail}}',
        }),
      'target.id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you wish to list tasks by target, insert the desired `targetId` and `status`.',
            explode: true,
            in: 'query',
            name: 'target.id',
            required: false,
            schema: { example: '{{targetId}}', type: 'string' },
            style: 'form',
          },
          example: '{{targetId}}',
        }),
      context: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you wish to list tasks by context, insert the desired context, `page`, `perPage` and `status`.',
            explode: true,
            in: 'query',
            name: 'context',
            required: false,
            schema: { example: '{{context}}', type: 'string' },
            style: 'form',
          },
          example: '{{context}}',
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If you wish to list tasks by context, also insert the desired `page`.',
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { example: '{{page}}', type: 'string' },
            style: 'form',
          },
          example: '{{page}}',
        }),
      perPage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you wish to list tasks by context, also insert the desired `perPage` value.',
            explode: true,
            in: 'query',
            name: 'perPage',
            required: false,
            schema: { example: '{{desired number per page}}', type: 'string' },
            style: 'form',
          },
          example: '{{desired number per page}}',
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If you wish to list tasks by context, also insert the desired `status`.',
            explode: true,
            in: 'query',
            name: 'status',
            required: false,
            schema: { example: 'open', type: 'string' },
            style: 'form',
          },
          example: 'open',
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any(), example: {} } } },
  },
})

export const postTasksRoute = createRoute({
  method: 'post',
  path: '/tasks',
  tags: ['Task'],
  summary: 'Create Task',
  description: 'Creates a new task in VTEX DO.',
  operationId: 'NewTask',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: NewTaskRequestSchema,
          example: {
            assignee: { email: 'frederico.santos@vtex.com.br', id: null, name: null },
            context: 'Marketplace',
            description: 'Ajudar na doc API para lancar no postman',
            domain: 'oms',
            dueDate: '2016-03-01',
            followers: [{ email: 'alan.dantas@vtex.com.br', id: null, name: null }],
            name: 'pricing',
            parentTaskId: null,
            priority: 'Critical',
            surrogateKey: '505224-0',
            target: [
              {
                id: '633730670642-01',
                type: 'order',
                url: 'https://recorrenciaqa.vtexcommercebeta.com.br/admin/checkout/orders/633730670642-01',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any(), example: {} } } },
  },
})

export const getTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskId}',
  tags: ['Task'],
  summary: 'Retrieve Task',
  description: 'Retrieves a given task, filtering by `taskId`.',
  operationId: 'GetTask',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: 'Task ID.',
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { example: '123456abc', type: 'string' },
            style: 'simple',
          },
          example: '123456abc',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any(), example: {} } } },
  },
})

export const putTasksTaskIdRoute = createRoute({
  method: 'put',
  path: '/tasks/{taskId}',
  tags: ['Task'],
  summary: 'Update Task',
  description: "Updates a given task's status, for example, filtering by `taskId`.",
  operationId: 'EditTask',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: 'Task ID.',
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { example: '123456abc', type: 'string' },
            style: 'simple',
          },
          example: '123456abc',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': { schema: EditTaskRequestSchema, example: { status: 'InProgress' } },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any(), example: {} } } },
  },
})

export const postTasksTaskIdCommentsRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskId}/comments',
  tags: ['Task'],
  summary: 'Add Comment on a Task',
  description: 'Adds a comment to a given task, filtering by `taskId`.',
  operationId: 'AddComment',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: 'Task ID.',
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { example: '123456abc', type: 'string' },
            style: 'simple',
          },
          example: '123456abc',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: AddCommentRequestSchema,
          example: { text: 'write your comment here' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.any(), example: {} } } },
  },
})
