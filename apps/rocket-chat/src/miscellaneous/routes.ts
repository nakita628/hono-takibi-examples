import { createRoute, z } from '@hono/zod-openapi'

const TrueSuccessResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
      examples: { Success: { value: { success: true } } },
    },
  },
}

const AuthorizationErrorResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
        .openapi({ required: [] }),
      examples: {
        'Authorization Error': {
          value: { success: false, error: 'You must be logged in to do this.' },
        },
      },
    },
  },
}

const ForbiddenErrorResponse = {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: z
        .object({
          success: z.boolean().exactOptional(),
          error: z.string().exactOptional(),
          errorType: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
      examples: {
        'Permission Error': {
          value: {
            success: false,
            error: 'User does not have the permissions required for this action',
            errorType: 'error-forbidden',
          },
        },
      },
    },
  },
}

const OffsetParamsSchema = z
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
      name: 'offset',
      in: 'query',
      description:
        'Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: { type: 'integer' },
      example: 50,
    },
  })

const CountParamsSchema = z
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
      name: 'count',
      in: 'query',
      description:
        'The number of items to return.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: { type: 'integer' },
      example: 50,
    },
  })

const SortParamsSchema = z
  .any()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: {},
    },
  })

const AuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      description: 'The `authToken` of the authenticated user.',
      required: true,
      schema: { type: 'string' },
      example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f',
    },
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      description: 'The `userId` of the authenticated user.',
      required: true,
      schema: { type: 'string' },
      example: 'rbAXPnMktTFbNpwtJ',
    },
  })

export const getApiV1EmailInboxListRoute = createRoute({
  method: 'get',
  path: '/api/v1/email-inbox.list',
  tags: ['Email Inbox'],
  summary: 'List Email Inbox',
  description:
    'Gets Omnichannel email inbox list.\n\nPermissions required:- `manage-email-inbox`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n|3.11.0-rc.0         | Added       |',
  operationId: 'get-api-v1-email-inbox.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      sort: SortParamsSchema,
      count: CountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              emailInboxes: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      active: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      email: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      senderInfo: z.string().exactOptional(),
                      department: z.string().exactOptional(),
                      smtp: z
                        .object({
                          server: z.string().exactOptional(),
                          port: z.int().exactOptional(),
                          username: z.string().exactOptional(),
                          password: z.string().exactOptional(),
                          secure: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      imap: z
                        .object({
                          server: z.string().exactOptional(),
                          port: z.int().exactOptional(),
                          username: z.string().exactOptional(),
                          password: z.string().exactOptional(),
                          secure: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _createdAt: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      _createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                emailInboxes: [
                  {
                    _id: '60197e8ff82d6c83b96c53ff',
                    active: false,
                    name: 'Rocket.Chat sample account',
                    email: 'info@rocket.chat',
                    description: '',
                    senderInfo: '',
                    department: 'GgYvrkAF63aeQmsh4',
                    smtp: {
                      server: 'smtp.gmail.com',
                      port: 465,
                      username: 'info@rocket.chat',
                      password: 'kkviepoenakbccwf',
                      secure: true,
                    },
                    imap: {
                      server: 'imap.gmail.com',
                      port: 993,
                      username: 'info@rocket.chat',
                      password: 'kkviepoenakbccwf',
                      secure: true,
                    },
                    _createdAt: '2021-02-02T16:32:15.069Z',
                    _updatedAt: '2021-09-06T17:43:49.257Z',
                    _createdBy: { _id: 'JxemcN9PDCdfzJeZr', username: 'renato.becker' },
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1EmailInboxRoute = createRoute({
  method: 'post',
  path: '/api/v1/email-inbox',
  tags: ['Email Inbox'],
  summary: 'Set Email Inbox',
  description:
    'Configure the Omnichannel email inbox for your server.\n\nPermissions required:- `manage-email-inbox`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.11.0-rc.0         | Added       |',
  operationId: 'post-api-v1-email-inbox',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional().openapi({ description: 'Email Id' }),
              name: z.string().openapi({ description: 'The name you wish to set for your email.' }),
              email: z.string().openapi({ description: 'The email to be used' }),
              active: z
                .boolean()
                .openapi({ description: 'Set whether or not the email is active.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description for this entry.' }),
              senderInfo: z
                .string()
                .exactOptional()
                .openapi({ description: 'Sender info to be attached on outgoing emails.' }),
              department: z
                .string()
                .exactOptional()
                .openapi({ description: 'The department to which the email will be available.' }),
              smtp: z
                .object({
                  password: z.string().exactOptional(),
                  port: z.int().exactOptional(),
                  secure: z.boolean().exactOptional(),
                  server: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                })
                .openapi({
                  description:
                    'An object with your SMTP credentials to be used for outgoing emails.',
                  required: [],
                }),
              imap: z
                .object({
                  password: z.string().exactOptional(),
                  port: z.int().exactOptional(),
                  secure: z.boolean().exactOptional(),
                  server: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                })
                .openapi({
                  description:
                    'An object having your IMAP credentials to be used for incomming emails.',
                  required: [],
                }),
            })
            .openapi({ required: ['name', 'email', 'active', 'smtp', 'imap'] }),
          examples: {
            Example: {
              value: {
                name: 'new email',
                email: 'mdyemaasil@rocket.chat',
                active: false,
                description: 'This email has been set',
                senderInfo: 'email sender',
                department: 'awesome department',
                smtp: {
                  password: '10fae4dc374fb87d',
                  port: 25,
                  secure: true,
                  server: 'smtp.mailtrap.io',
                  username: 'b5ef5safd6cb806c',
                },
                imap: {
                  password: '10fae4374sdfb87d',
                  port: 993,
                  secure: true,
                  server: 'imap.mailtrap.io',
                  username: 'b5ef5aafd6cb806c',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ _id: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { Success: { value: { _id: 'JdVkn_dkOlms_', success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            Duplicate: {
              value: {
                success: false,
                error:
                  'E11000 duplicate key error index: rocketchat.rocketchat_email_inbox.$email_1 dup key: { : "mdyemail@rocket.chat" }',
              },
            },
            'Invalid Inbox': { value: { success: false, error: 'error-invalid-email-inbox' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EmailInboxIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/email-inbox/{_id}',
  tags: ['Email Inbox'],
  summary: 'Get Email Inbox by ID',
  description:
    'Gets Omnichannel email inbox by ID.\n\nPermissions required: `manage-email-inbox`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|5.3.0       | Not Found Error Added       |\n|3.11.0-rc.0         | Added       |',
  operationId: 'get-api-v1-email-inbox-id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'Enter the email inbox ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional(),
              active: z.boolean().exactOptional(),
              name: z.string().exactOptional(),
              email: z.string().exactOptional(),
              description: z.string().exactOptional(),
              senderInfo: z.string().exactOptional(),
              department: z.string().exactOptional(),
              smtp: z
                .object({
                  server: z.string().exactOptional(),
                  port: z.int().exactOptional(),
                  username: z.string().exactOptional(),
                  password: z.string().exactOptional(),
                  secure: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              imap: z
                .object({
                  server: z.string().exactOptional(),
                  port: z.int().exactOptional(),
                  username: z.string().exactOptional(),
                  password: z.string().exactOptional(),
                  secure: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              _createdAt: z.string().exactOptional(),
              _updatedAt: z.string().exactOptional(),
              _createdBy: z
                .object({ _id: z.string().exactOptional(), username: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: '60197e8ff82d6c83b96c53ff',
                active: false,
                name: 'Rocket.Chat sample account',
                email: 'info@rocket.chat',
                description: '',
                senderInfo: '',
                department: 'GgYvrkAF63aeQmsh4',
                smtp: {
                  server: 'smtp.gmail.com',
                  port: 465,
                  username: 'info@rocket.chat',
                  password: 'kkviepoenakbccwf',
                  secure: true,
                },
                imap: {
                  server: 'imap.gmail.com',
                  port: 993,
                  username: 'info@rocket.chat',
                  password: 'kkviepoenakbccwf',
                  secure: true,
                },
                _createdAt: '2021-02-02T16:32:15.069Z',
                _updatedAt: '2021-09-06T17:43:49.257Z',
                _createdBy: { _id: 'JxemcN9PDCdfzJeZr', username: 'ren.be' },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Resource not found': { value: { success: false, error: 'Resource not found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const deleteApiV1EmailInboxIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/email-inbox/{_id}',
  tags: ['Email Inbox'],
  summary: 'Delete Email Inbox by ID',
  description:
    'Delete Omnichannel email inbox using ID.\n\nPermissions required: `manage-email-inbox`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.11.0-rc.0         | Added       |',
  operationId: 'delete-api-v1-email-inbox-_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'Enter the email inbox ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ _id: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { _id: '61717dd1066bc500096cb36d', success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Email not found': { value: { success: false, error: 'Resource not found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1EmailInboxSearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/email-inbox.search',
  tags: ['Email Inbox'],
  summary: 'Search Email Inbox',
  description:
    'Searches Omnichannel email inbox by email address.\n\nPermissions required: `manage-email-inbox`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.11.0-rc.0         | Added       |',
  operationId: 'get-api-v1-email-inbox.search',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      email: z
        .string()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: 'Enter the email inbox address.',
            required: true,
            schema: { type: 'string' },
            example: 'info@rockt.chat',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              emailInbox: z
                .object({
                  _id: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  email: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  senderInfo: z.string().exactOptional(),
                  department: z.string().exactOptional(),
                  smtp: z
                    .object({
                      server: z.string().exactOptional(),
                      port: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                      password: z.string().exactOptional(),
                      secure: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  imap: z
                    .object({
                      server: z.string().exactOptional(),
                      port: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                      password: z.string().exactOptional(),
                      secure: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _createdAt: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  _createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                emailInbox: {
                  _id: '60197e8ff82d6c83b96c53ff',
                  active: false,
                  name: 'Rocket.Chat sample account',
                  email: 'info@rocket.chat',
                  description: '',
                  senderInfo: '',
                  department: 'GgYvrkAF63aeQmsh4',
                  smtp: {
                    server: 'smtp.gmail.com',
                    port: 465,
                    username: 'info@rocket.chat',
                    password: 'kkviepoenakbccwf',
                    secure: true,
                  },
                  imap: {
                    server: 'imap.gmail.com',
                    port: 993,
                    username: 'info@rocket.chat',
                    password: 'kkviepoenakbccwf',
                    secure: true,
                  },
                  _createdAt: '2021-02-02T16:32:15.069Z',
                  _updatedAt: '2021-09-06T17:43:49.257Z',
                  _createdBy: { _id: 'JxemcN9PDCdfzJeZr', username: 'renato.becker' },
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1EmailInboxSendTestIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/email-inbox.send-test/{_id}',
  tags: ['Email Inbox'],
  summary: 'Send Test Email',
  description:
    "Send a test email from an Omnichannel email inbox to check its configuration. The workspace sends the email through the inbox's SMTP server to the verified email address of the authenticated user.\n\nThe authenticated user must have a verified email address.\n\nA successful response means the workspace queued the email. It doesn't confirm that the email was delivered.\n\nPermission required: `manage-email-inbox`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.11.0         | Added       |",
  operationId: 'post-api-v1-email-inbox.send-test-id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'Enter the email inbox ID.',
            required: true,
            schema: { type: 'string' },
            example: '60197e8ff82d6c83b96c53ff',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ _id: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { _id: '60197e8ff82d6c83b96c53ff', success: true } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1ShieldSvgRoute = createRoute({
  method: 'get',
  path: '/api/v1/shield.svg',
  summary: 'Shield SVG',
  description:
    'A simple method, requires no authentication, that returns the shield svg(badge) to add in your website. It must have `API_Enable_Shields` enabled.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.55.0        | Added       |',
  operationId: 'get-api-v1-shield.svg',
  request: {
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Can either be `online`, `user`, `channel`',
            schema: { type: 'string' },
            example: 'online',
            required: false,
          },
        }),
      icon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'icon',
            in: 'query',
            schema: { type: 'string' },
            example: 'false',
            required: false,
          },
        }),
      channel: z
        .string()
        .openapi({
          param: {
            name: 'channel',
            in: 'query',
            description: 'Name of the channel',
            required: true,
            schema: { type: 'string' },
            example: 'general',
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name to show',
            required: true,
            schema: { type: 'string' },
            example: 'Rocket.Chat',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/plain': {
          schema: z.looseObject({}),
          examples: {
            Example: {
              value:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="141" height="20"> <linearGradient id="b" x2="0" y2="100%"> <stop offset="0" stop-color="#bbb" stop-opacity=".1"/> <stop offset="1" stop-opacity=".1"/> </linearGradient> <mask id="a"> <rect width="141" height="20" rx="3" fill="#fff"/> </mask> <g mask="url(#a)"> <path fill="#555" d="M0 0h67v20H0z"/> <path fill="#4c1" d="M67 0h74v20H67z"/> <path fill="url(#b)" d="M0 0h141v20H0z"/> </g> <image x="5" y="3" width="14" height="14" xlink:href="/assets/favicon.svg"/> <g fill="#fff" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"> <text x="24" y="15" fill="#010101" fill-opacity=".3">Rocket</text> <text x="24" y="14">Rocket</text> <text x="74" y="15" fill="#010101" fill-opacity=".3">JOIN CHAT</text> <text x="74" y="14">JOIN CHAT</text> </g> </svg>',
            },
          },
        },
      },
      headers: z.object({
        'Content-Type': z
          .string()
          .exactOptional()
          .openapi({
            description: 'image/svg+xml;charset=utf-8',
            param: { required: false },
            example: 'image/svg+xml;charset=utf-8',
          }),
      }),
    },
  },
})

export const getApiV1SpotlightRoute = createRoute({
  method: 'get',
  path: '/api/v1/spotlight',
  summary: 'Spotlight',
  description:
    "Searches for users or rooms that are visible to the user. It will only return rooms that user didn't join yet.\n\nIf the  <a href=\"https://docs.rocket.chat/docs/accounts\" target=\"_blank\">`Allow Anonymous Read` setting</a> is enabled, anonymous callers can use this endpoint to resolve public channels through the navbar search.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.9.0       | Changed the rate limit to 100 requests every 100 seconds per client IP address. |\n|8.6.0       | Added `usernames`, `type`, and `rid` query parameters, and allowed anonymous read when `Allow Anonymous Read` is enabled. |\n|0.64.0       | Added support to '#' and '@' searches, for channels and users respectively.       |\n|0.61.0      | Added       |",
  operationId: 'get-api-v1-spotlight',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: "The term to be searched. Supports '#' for channels and '@' for users",
            required: true,
            schema: { type: 'string' },
            example: 'john',
          },
        }),
      usernames: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'usernames',
            in: 'query',
            description: 'Comma-separated list of usernames to exclude from the user results.',
            required: false,
            schema: { type: 'string' },
            example: 'rocket.cat,john.doe',
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'Restricts the search to a single result type. Accepts `users` or `rooms`.',
            required: false,
            schema: { type: 'string' },
            example: 'users',
          },
        }),
      rid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'rid',
            in: 'query',
            description: 'The room ID to scope the user search to a specific room.',
            required: false,
            schema: { type: 'string' },
            example: 'GENERAL',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      avatarETag: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              rooms: z.array(z.looseObject({})).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                users: [
                  {
                    _id: 'rocket.cat',
                    name: 'Rocket.Cat',
                    username: 'rocket.cat',
                    status: 'online',
                    avatarETag: '5BB9B5ny5DkKdrwkq',
                  },
                ],
                rooms: [],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1SmtpCheckRoute = createRoute({
  method: 'get',
  path: '/api/v1/smtp.check',
  summary: 'Check SMTP',
  description:
    'Use this endpoint to verify whether or not SMTP has been configured in the workspace.',
  operationId: 'get-api-v1-smtp.check',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              isSMTPConfigured: z.boolean().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { isSMTPConfigured: true, success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1FingerprintRoute = createRoute({
  method: 'post',
  path: '/api/v1/fingerprint',
  summary: 'Update Fingerprint',
  description:
    'Confirms how the workspace deployment should be handled after Rocket.Chat detects a change to its deployment fingerprint.\n\nOn startup, Rocket.Chat generates a deployment fingerprint based on the configured Site_Url and MongoDB connection string. If the generated fingerprint differs from the stored value, Rocket.Chat assumes the workspace may have been duplicated, migrated, or reconfigured.\n\nUse this endpoint to confirm how the deployment should be treated:\n\n- `new-workspace`: Treats the deployment as a new workspace. This clears the existing Rocket.Chat Cloud registration data and related credentials so the workspace can register again as a new instance. Use this option for cloned environments, staging instances created from production backups, or other duplicated deployments.\n\n- `updated-configuration`: Confirms that the deployment is the same workspace and that only its configuration has changed. This preserves the existing Rocket.Chat Cloud registration and is intended for legitimate migrations, infrastructure changes, or Site_Url updates.\n\nAfter processing either option, Rocket.Chat marks the deployment fingerprint as verified and dismisses the fingerprint verification prompt.\n\nPermission required: `manage-cloud`\n  \n### Changelog\n| Version | Description | \n| ------- | ----------- | \n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n| 8.6.0 | Added an authorization check. Callers without the `manage-cloud` permission now receive a `403` error instead of a successful response. |',
  operationId: 'post-api-v1-fingerprint',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              setDeploymentAs: z
                .string()
                .openapi({
                  description:
                    'Specifies how Rocket.Chat should handle a detected deployment fingerprint change. Use `new-workspace` to reset the current workspace registration and register the deployment as a new workspace, or `updated-configuration` to preserve the existing workspace registration and confirm that only the deployment configuration has changed. Either `new-workspace` or `updated-configuration`.',
                  example: 'new-workspace',
                }),
            })
            .openapi({ required: ['setDeploymentAs'] }),
          examples: { Example: { value: { setDeploymentAs: 'new-workspace' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Parameter': {
              value: {
                success: false,
                error: 'Invalid body params',
                errorType: 'error-invalid-body-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1LicensesInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/licenses.info',
  tags: ['Licenses'],
  summary: 'Get Licenses',
  description:
    'Retrieves a list of all registered licenses and the details in the workspace.\n\nPermission required: `view-privileged-setting`.\n\nThe `licenses.isEnterprise` and `licenses.get` endpoints have been removed from 7.0. Use this endpoint instead.',
  operationId: 'get-api-v1-licenses.info',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              license: z
                .object({
                  license: z
                    .object({
                      version: z.string().exactOptional(),
                      information: z
                        .object({
                          id: z.string().exactOptional(),
                          autoRenew: z.boolean().exactOptional(),
                          createdAt: z.string().exactOptional(),
                          visualExpiration: z.string().exactOptional(),
                          notifyAdminsAt: z.string().exactOptional(),
                          notifyUsersAt: z.string().exactOptional(),
                          trial: z.boolean().exactOptional(),
                          cancellable: z.boolean().exactOptional(),
                          offline: z.boolean().exactOptional(),
                          grantedBy: z.looseObject({}).exactOptional(),
                          grantedTo: z.looseObject({}).exactOptional(),
                          tags: z
                            .array(
                              z
                                .object({
                                  name: z.string().exactOptional(),
                                  color: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      validation: z
                        .object({
                          serverUrls: z
                            .array(
                              z
                                .object({
                                  value: z.string().exactOptional(),
                                  type: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          cloudWorkspaceId: z.string().exactOptional(),
                          serverUniqueId: z.string().exactOptional(),
                          validPeriods: z
                            .array(
                              z
                                .object({
                                  validUntil: z.string().exactOptional(),
                                  invalidBehavior: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          legalTextAgreement: z
                            .object({
                              type: z.string().exactOptional(),
                              acceptedVia: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          statisticsReport: z
                            .object({
                              required: z.boolean().exactOptional(),
                              allowedStaleInDays: z.int().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      grantedModules: z
                        .array(
                          z
                            .object({ module: z.string().exactOptional() })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      limits: z
                        .object({
                          guestUsers: z
                            .array(
                              z
                                .object({
                                  max: z.int().exactOptional(),
                                  behavior: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          roomsPerGuest: z
                            .array(
                              z
                                .object({
                                  max: z.int().exactOptional(),
                                  behavior: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          monthlyActiveContacts: z
                            .array(
                              z
                                .object({
                                  max: z.int().exactOptional(),
                                  behavior: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      cloudMeta: z.looseObject({}).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  activeModules: z.array(z.string()).exactOptional(),
                  preventedActions: z
                    .object({
                      activeUsers: z.boolean().exactOptional(),
                      guestUsers: z.boolean().exactOptional(),
                      roomsPerGuest: z.boolean().exactOptional(),
                      privateApps: z.boolean().exactOptional(),
                      marketplaceApps: z.boolean().exactOptional(),
                      monthlyActiveContacts: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  limits: z
                    .object({
                      activeUsers: z
                        .object({ max: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      guestUsers: z
                        .object({ max: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      privateApps: z
                        .object({ max: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      marketplaceApps: z
                        .object({ max: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      monthlyActiveContacts: z
                        .object({ max: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  tags: z
                    .array(
                      z
                        .object({
                          name: z.string().exactOptional(),
                          color: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  trial: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                license: {
                  license: {
                    version: '3.0',
                    information: {
                      id: '6569155ab286e50001b78ec1',
                      autoRenew: true,
                      createdAt: '2024-03-17T00:51:43.529361607Z',
                      visualExpiration: '2024-03-10T00:00:00Z',
                      notifyAdminsAt: '2024-03-10T00:00:00Z',
                      notifyUsersAt: '2024-03-10T00:00:00Z',
                      trial: true,
                      cancellable: true,
                      offline: false,
                      grantedBy: {},
                      grantedTo: {},
                      tags: [{ name: 'Enterprise trial', color: '#F3BE08' }],
                    },
                    validation: {
                      serverUrls: [{ value: 'testspace.rocket.chat', type: 'url' }],
                      cloudWorkspaceId: '64df890111e1f20001d201b4',
                      serverUniqueId: 'tgxSuzXmWe68S3kWR',
                      validPeriods: [
                        {
                          validUntil: '2024-03-24T00:00:00Z',
                          invalidBehavior: 'invalidate_license',
                        },
                      ],
                      legalTextAgreement: { type: 'required', acceptedVia: 'cloud' },
                      statisticsReport: { required: true, allowedStaleInDays: 2 },
                    },
                    grantedModules: [
                      { module: 'auditing' },
                      { module: 'canned-responses' },
                      { module: 'ldap-enterprise' },
                      { module: 'livechat-enterprise' },
                      { module: 'voip-enterprise' },
                      { module: 'omnichannel-mobile-enterprise' },
                      { module: 'engagement-dashboard' },
                      { module: 'push-privacy' },
                      { module: 'scalability' },
                      { module: 'teams-mention' },
                      { module: 'saml-enterprise' },
                      { module: 'oauth-enterprise' },
                      { module: 'device-management' },
                      { module: 'federation' },
                      { module: 'videoconference-enterprise' },
                      { module: 'message-read-receipt' },
                      { module: 'outlook-calendar' },
                      { module: 'hide-watermark' },
                      { module: 'custom-roles' },
                      { module: 'accessibility-certification' },
                    ],
                    limits: {
                      guestUsers: [
                        { max: 235, behavior: 'start_fair_policy' },
                        { max: 235, behavior: 'prevent_action' },
                      ],
                      roomsPerGuest: [
                        { max: 1, behavior: 'start_fair_policy' },
                        { max: 1, behavior: 'prevent_action' },
                      ],
                      monthlyActiveContacts: [
                        { max: -1, behavior: 'start_fair_policy' },
                        { max: -1, behavior: 'prevent_action' },
                      ],
                    },
                    cloudMeta: {},
                  },
                  activeModules: [
                    'auditing',
                    'canned-responses',
                    'ldap-enterprise',
                    'livechat-enterprise',
                    'voip-enterprise',
                    'omnichannel-mobile-enterprise',
                    'engagement-dashboard',
                    'push-privacy',
                    'scalability',
                    'teams-mention',
                    'saml-enterprise',
                    'oauth-enterprise',
                    'device-management',
                    'federation',
                    'videoconference-enterprise',
                    'message-read-receipt',
                    'outlook-calendar',
                    'hide-watermark',
                    'custom-roles',
                    'accessibility-certification',
                  ],
                  preventedActions: {
                    activeUsers: false,
                    guestUsers: false,
                    roomsPerGuest: false,
                    privateApps: false,
                    marketplaceApps: false,
                    monthlyActiveContacts: false,
                  },
                  limits: {
                    activeUsers: { max: -1 },
                    guestUsers: { max: 235 },
                    privateApps: { max: -1 },
                    marketplaceApps: { max: -1 },
                    monthlyActiveContacts: { max: -1 },
                  },
                  tags: [{ name: 'Enterprise trial', color: '#F3BE08' }],
                  trial: true,
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LicensesAddRoute = createRoute({
  method: 'post',
  path: '/api/v1/licenses.add',
  tags: ['Licenses'],
  summary: 'Add License',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nYou may want to <a href="https://docs.rocket.chat/docs/rocketchat-air-gapped-deployment" target="_blank">deploy your workspace in an air-gapped environment</a>. Since the server has no internet to communicate with the cloud, we provide a license for your subscribed plan that you can apply manually to upgrade your workspace.\n\nPermission required: `edit-privileged-setting`.\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.10.0         | Added       |\n\nA successful response only means the license provided follows the accepted format. Check your <a href="https://docs.rocket.chat/docs/subscription" target="_blank">workspace subscription</a> to confirm if the license is valid and was applied to your workspace. Alternatively, you can check <b><a href="https://developer.rocket.chat/apidocs/get-licenses-1" target="_blank">Get Licenses</a></b> endpoint.',
  operationId: 'post-api-v1-licenses.add',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ license: z.string().exactOptional() }).openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                license:
                  'VFJ0vHf3Jm9AR0minB342MLaHRlZdc3Du5nf0E5Sv0QJ4SUkEIaU2boCYaDsxQ2N1UL4uhLjCF9M7iCZ/yxafJjxbHvOu1D5rOfdgO4RKlAGE9tGHDidJR9crJyXVb16jPHHvLSkUFzb7HoIq/nUXxU8gEgT3uJ9u2+Dw5ukDLX3SG2AFq1hLoPSZqsP6g2AQo=',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'license'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postApiV1LicensesValidateRoute = createRoute({
  method: 'post',
  path: '/api/v1/licenses.validate',
  tags: ['Licenses'],
  summary: 'Validate License',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nValidates a Rocket.Chat license against the current workspace without applying it. Use this endpoint to preview a license before applying it with the <b><a href="https://developer.rocket.chat/apidocs/add-license" target="_blank">Add License</a></b> endpoint. It accepts both V2 and V3 (JWT) license formats.\n\nA valid license returns a success response. An invalid license returns a failure response with the validation behaviors that rejected it listed in the `reasons` array.\n\nPermission required: `edit-privileged-setting`.\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.7.0         | Added       |',
  operationId: 'post-api-v1-licenses.validate',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              license: z
                .string()
                .openapi({ description: 'The encrypted license string to validate.' }),
            })
            .openapi({ required: ['license'] }),
          examples: {
            Example: {
              value: {
                license:
                  'VFJ0vHf3Jm9AR0minB342MLaHRlZdc3Du5nf0E5Sv0QJ4SUkEIaU2boCYaDsxQ2N1UL4uhLjCF9M7iCZ/yxafJjxbHvOu1D5rOfdgO4RKlAGE9tGHDidJR9crJyXVb16jPHHvLSkUFzb7HoIq/nUXxU8gEgT3uJ9u2+Dw5ukDLX3SG2AFq1hLoPSZqsP6g2AQo=',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              reasons: z
                .array(
                  z
                    .object({
                      behavior: z.string().exactOptional(),
                      reason: z.string().exactOptional(),
                      modules: z.array(z.string()).exactOptional(),
                      limit: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid License': {
              value: {
                success: false,
                error: 'license-invalid',
                reasons: [{ behavior: 'invalidate_license', reason: 'url' }],
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getApiV1LicensesMaxActiveUsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/licenses.maxActiveUsers',
  tags: ['Licenses'],
  summary: 'Get Maximum Active User',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nRetrieves a list of the maximum active users.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|4.0.0         | Added       |',
  operationId: 'get-licenses.maxActiveUsers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              maxActiveUsers: z.int().exactOptional(),
              activeUsers: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { maxActiveUsers: 25, activeUsers: 0, success: true } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1CommandsGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/commands.get',
  tags: ['Commands'],
  summary: 'Get Slash Command',
  description:
    'Get details of a specific slash command.\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.60.2       | Added       |',
  operationId: 'get-api-v1-commands.get',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      command: z
        .string()
        .openapi({
          param: {
            name: 'command',
            in: 'query',
            description: 'The name of the command.',
            required: true,
            schema: { type: 'string' },
            example: 'me',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              command: z
                .object({
                  command: z.string().exactOptional(),
                  params: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  clientOnly: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                command: {
                  command: 'me',
                  params: 'your_message',
                  description: 'Displays_action_text',
                  clientOnly: false,
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: { success: false, error: 'The query param "command" must be provided.' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1CommandsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/commands.list',
  tags: ['Commands'],
  summary: 'List Slash Commands',
  description:
    'Lists all available slash commands.\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n|0.60.2      | Added       |',
  operationId: 'get-api-v1-commands.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'sort',
            description:
              'Sort the commands in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON string. The options are as follows:\n * `command`: Sort by command name. For example, `sort={"command":1}`\n * `description`: Sort by description. For example, `sort={"description":-1}`',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              commands: z
                .array(
                  z
                    .object({
                      command: z.string().exactOptional(),
                      clientOnly: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                commands: [
                  { command: 'invite-all-from', clientOnly: false },
                  { command: 'slackbridge-import', clientOnly: false },
                  {
                    command: 'gimme',
                    params: 'your_message_optional',
                    description: 'Slash_Gimme_Description',
                    clientOnly: false,
                  },
                  {
                    command: 'lennyface',
                    params: 'your_message_optional',
                    description: 'Slash_LennyFace_Description',
                    clientOnly: false,
                  },
                  {
                    command: 'shrug',
                    params: 'your_message_optional',
                    description: 'Slash_Shrug_Description',
                    clientOnly: false,
                  },
                  {
                    command: 'tableflip',
                    params: 'your_message_optional',
                    description: 'Slash_Tableflip_Description',
                    clientOnly: false,
                  },
                  {
                    command: 'unflip',
                    params: 'your_message_optional',
                    description: 'Slash_TableUnflip_Description',
                    clientOnly: false,
                  },
                  { command: 'create', clientOnly: false },
                  { command: 'help', clientOnly: false },
                  { command: 'invite', clientOnly: false },
                  { command: 'invite-all-to', clientOnly: false },
                  { command: 'archive', clientOnly: false },
                  { command: 'join', clientOnly: false },
                  { command: 'kick', clientOnly: false },
                  { command: 'leave', clientOnly: false },
                  { command: 'part', clientOnly: false },
                  {
                    command: 'me',
                    params: 'your_message',
                    description: 'Displays_action_text',
                    clientOnly: false,
                  },
                  { command: 'msg', clientOnly: false },
                  { command: 'mute', clientOnly: false },
                  { command: 'unmute', clientOnly: false },
                  {
                    command: 'topic',
                    params: 'Slash_Topic_Params',
                    description: 'Slash_Topic_Description',
                    clientOnly: false,
                  },
                  { command: 'unarchive', clientOnly: false },
                ],
                offset: 0,
                count: 22,
                total: 22,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1CommandsPreviewRoute = createRoute({
  method: 'get',
  path: '/api/v1/commands.preview',
  tags: ['Commands'],
  summary: "Get Command's Preview Data",
  description:
    "Fetches the command's preview data or executes the preview item.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |",
  operationId: 'get-api-v1-commands.preview',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      command: z
        .string()
        .openapi({
          param: {
            name: 'command',
            in: 'query',
            description: 'The name of the command to be executed.',
            required: true,
            schema: { type: 'string' },
            example: 'unmute',
          },
        }),
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The ID of the room.',
            required: true,
            schema: { type: 'string' },
            example: 'ByehQjC44FwMeiLbX',
          },
        }),
      params: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'params',
            in: 'query',
            description: 'Parameters of the command if required. It is `undefined` by default.',
            schema: { type: 'string' },
            example: '@user123',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'You must provide a command to get the previews from.',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'You are not allowed to do this',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1CommandsPreviewRoute = createRoute({
  method: 'post',
  path: '/api/v1/commands.preview',
  tags: ['Commands'],
  summary: "Execute command's preview item",
  description:
    '### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n|3.0.0      | Added `tmid` and `triggerId` fields       |\n|0.65.0      | Added|',
  operationId: 'post-api-v1-commands.preview',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              command: z
                .string()
                .openapi({ description: 'The name of the command to be executed.' }),
              roomId: z.string().openapi({ description: 'The ID of the room.' }),
              tmid: z.string().openapi({ description: 'The ID of the thread to run the command.' }),
              params: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Parameters of the command if required. It is `undefined` by default.',
                }),
              triggerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The triggerId generated by the client that allows the command to interact with the UI',
                }),
              previewItem: z
                .object({
                  id: z.string().openapi({ description: 'The ID of the selected preview item' }),
                  type: z
                    .string()
                    .openapi({ description: 'The type of the selected preview item' }),
                  value: z
                    .string()
                    .openapi({ description: 'The value of the selected preview item' }),
                })
                .openapi({
                  description: 'The data of the preview item to be executed by the command',
                  required: ['id', 'type', 'value'],
                }),
            })
            .openapi({ required: ['command', 'roomId', 'tmid', 'previewItem'] }),
          examples: {
            Example: {
              value: {
                command: 'unmute',
                roomId: 'ByehQjC44FwMeiLbX',
                tmid: 'Hsj2435g4bvrj4bjh',
                params: '@user123',
                triggerId: 'awovufbukuefzuper',
                previewItem: {
                  id: 'nucobdipokaikazia',
                  type: 'image',
                  value: 'https://dev.null/gif',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'You must provide a command to run the preview item on.',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'You are not allowed to do this',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1CommandsRunRoute = createRoute({
  method: 'post',
  path: '/api/v1/commands.run',
  tags: ['Commands'],
  summary: 'Execute a Slash Command',
  description:
    'Execute a slash command in the specified room.\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n|3.0.0      | Added `triggerId` property       |\n|2.0.0      | Added `tmid` property      |\n|0.60.2      | Added        |',
  operationId: 'post-api-v1-commands.run',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              command: z
                .string()
                .openapi({ description: 'The name of the command to be executed.' }),
              roomId: z.string().openapi({ description: 'The ID of the room.' }),
              params: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Parameters of the command if required. It is `undefined` by default',
                }),
              tmid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the thread to run the command.' }),
              triggerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The triggerId generated by the client that allows the command to interact with the UI',
                }),
            })
            .openapi({ required: ['command', 'roomId'] }),
          examples: {
            Success: {
              value: {
                command: 'unmute',
                roomId: 'ByehQjC44FwMeiLbX',
                params: '@user123',
                tmid: 'Hsj2435g4bvrj4bjh',
                triggerId: 'awovufbukuefzuper',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: 'You must provide a command to run.' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'You are not allowed to do this',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1MailerRoute = createRoute({
  method: 'post',
  path: '/api/v1/mailer',
  tags: ['Mailer'],
  summary: 'Send Mailer Endpoint',
  description:
    "Send emails to users from your workspace. Make sure that you have configured the <a href='https://docs.rocket.chat/docs/configure-email' target='_blank'>email settings</a> in the workspace.\n\n| Version      | Description |\n| ---------------- | ------------|\n|5.4.0      | Added      |",
  operationId: 'post-api-v1-mailer',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              from: z
                .string()
                .openapi({ description: 'A valid email address to send mails from.' }),
              subject: z.string().openapi({ description: 'The subject of the email.' }),
              body: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The body of the email. You must use `[unsubscribe]` for the unsubscription link. You may use `[name]`, `[fname]`, `[lname]` for the user's full name, first name or last name, respectively. You may use `[email]` for the user's email.",
                }),
              dryrun: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A boolean value. If true, will only send one email to the same address as in the `From` parameter.',
                }),
            })
            .openapi({ required: ['from', 'subject'] }),
          examples: {
            Example: {
              value: {
                from: 'test.test@test.com',
                subject: 'Welcome to the Test Newsletter',
                body: 'Thank you for subscribing to the Test Newsletter. If this was not you feel free to unsubscribe by hitting the following button [unsubscribe]',
                dryrun: 'true',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ function: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid From Address': {
              value: {
                success: false,
                error: 'Invalid from address [error-invalid-from-address]',
                errorType: 'error-invalid-from-address',
                details: { function: 'Mailer.sendMail' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1MailerUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/api/v1/mailer.unsubscribe',
  tags: ['Mailer'],
  summary: 'Mailer Unsubscribe Endpoint',
  description:
    'Send emails to users from your workspace.\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|5.4.0         | Added      |',
  operationId: 'post-api-v1-mailer.unsubscribe',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z
                .string()
                .openapi({ description: 'The user id of the user that created the mailer' }),
              createdAt: z.string().openapi({ description: 'The time the mailer was created' }),
            })
            .openapi({ required: ['_id', 'createdAt'] }),
          examples: {
            Example: { value: { _id: 'c6Lsa9SFVFxJLR56H', createdAt: '1692284808957' } },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const getApiV1CalendarEventsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/calendar-events.list',
  tags: ['Calendar Events'],
  summary: 'Get List of Calendar Events',
  description: 'Use this endpoint to view the list of your calendar events for a specific date.',
  operationId: 'get-api-v1-calendar-events.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      date: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '2025-01-01' },
            in: 'query',
            name: 'date',
            description:
              'Enter the date for which you want to view the calendar events. Use the format YYYY-MM-DD.',
            required: true,
          },
          example: '2025-01-01',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(z.looseObject({})).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                data: [
                  {
                    _id: '690b02874e7e8bcf6985b27a',
                    uid: 'C38WSSzrGd2NCjzqJ',
                    startTime: '2025-03-26T07:17:00.000Z',
                    endTime: '2025-03-26T07:18:00.000Z',
                    subject: 'Subject8',
                    description: 'Description8',
                    meetingUrl: null,
                    reminderMinutesBeforeStart: 10,
                    reminderTime: '2025-03-26T07:07:00.000Z',
                    notificationSent: false,
                    _updatedAt: '2025-11-05T07:53:43.420Z',
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'date' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1CalendarEventsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/calendar-events.info',
  tags: ['Calendar Events'],
  summary: 'Get Calendar Event Info',
  description: 'Use this endpoint to get information about a specific calendar event.',
  operationId: 'get-api-v1-calendar-events.info',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '6909b8ea4e7e8bcf6985b1a8' },
            in: 'query',
            name: 'id',
            description: 'Enter the event ID.',
            required: true,
          },
          example: '6909b8ea4e7e8bcf6985b1a8',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              event: z
                .object({
                  _id: z.string().exactOptional(),
                  uid: z.string().exactOptional(),
                  startTime: z.string().exactOptional(),
                  endTime: z.string().exactOptional(),
                  subject: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  meetingUrl: z.string().nullable().exactOptional(),
                  reminderMinutesBeforeStart: z.int().exactOptional(),
                  reminderTime: z.string().exactOptional(),
                  notificationSent: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                event: {
                  _id: '690b02874e7e8bcf6985b27a',
                  uid: 'C38WSSzrGd2NCjzqJ',
                  startTime: '2025-03-26T07:17:00.000Z',
                  endTime: '2025-03-26T07:18:00.000Z',
                  subject: 'Subject8',
                  description: 'Description8',
                  meetingUrl: null,
                  reminderMinutesBeforeStart: 10,
                  reminderTime: '2025-03-26T07:07:00.000Z',
                  notificationSent: false,
                  _updatedAt: '2025-11-05T07:53:43.420Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'id' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CalendarEventsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/calendar-events.create',
  tags: ['Calendar Events'],
  summary: 'Create Calendar Event',
  description: 'Create a new calendar event.',
  operationId: 'post-api-v1-calendar-events.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              startTime: z
                .string()
                .openapi({
                  description: 'Enter the time at which the event starts.',
                  example: '2025-11-05T07:17:00.000Z',
                }),
              endTime: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Enter the time at which the event ends.',
                  example: '2025-11-05T07:18:00.000Z',
                }),
              subject: z.string().openapi({ description: 'Enter a subject for the event.' }),
              description: z
                .string()
                .openapi({ description: 'Enter a description for the event.' }),
              reminderMinutesBeforeStart: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the number of minutes before the event that the reminder should be sent.',
                  example: 10,
                }),
              busy: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enter whether or not you want to set your status as busy.',
                }),
              externalId: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'NWwwcnU3NmM1NW03dDRtZGdkMWNjNDRmamsgcmFjaGFuYS52aXNhdmFkaXlhQHJvY2tldC5jaGF0',
                  description:
                    'If you want to use an external event from another calendar, enter the event ID (eid) of the external calendar event.',
                }),
            })
            .openapi({ required: ['startTime', 'subject', 'description'] }),
          examples: {
            'Example 1': {
              value: {
                startTime: '2025-11-05T07:17:00.000Z',
                endTime: '2025-11-05T07:18:00.000Z',
                subject: 'Subject8',
                description: 'Description8',
                reminderMinutesBeforeStart: 10,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { id: '690b08674e7e8bcf6985b2d5', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CalendarEventsUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/calendar-events.update',
  tags: ['Calendar Events'],
  summary: 'Update Calendar Event',
  description: 'Update an existing calendar event.',
  operationId: 'post-api-v1-calendar-events.update',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              eventId: z
                .string()
                .openapi({ description: 'Enter the event ID that you want to update.' }),
              startTime: z
                .string()
                .openapi({ description: 'Enter the time at which the event starts.' }),
              endTime: z
                .string()
                .exactOptional()
                .openapi({ description: 'Enter the time at which the event ends.' }),
              subject: z.string().openapi({ description: 'Enter a subject for the event.' }),
              description: z
                .string()
                .openapi({ description: 'Enter a description for the event.' }),
              reminderMinutesBeforeStart: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the number of minutes before the event that the reminder should be sent.',
                }),
              busy: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enter whether or not you want to set your status as busy.',
                }),
            })
            .openapi({ required: ['eventId', 'startTime', 'subject', 'description'] }),
          examples: {
            'Example 1': {
              value: {
                eventId: '690b08674e7e8bcf6985b2d5',
                startTime: '2025-11-05T07:17:00.000Z',
                endTime: '2025-11-05T07:18:00.000Z',
                subject: 'Subject8',
                description: 'Description8',
                reminderMinutesBeforeStart: 10,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'eventId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CalendarEventsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/calendar-events.delete',
  tags: ['Calendar Events'],
  summary: 'Delete Calendar Event',
  description: 'Delete a specific calendar event.',
  operationId: 'post-api-v1-calendar-events.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              eventId: z
                .string()
                .openapi({
                  description: 'Enter the event ID that you want to delete.',
                  example: '6909b8ea4e7e8bcf6985b1a8',
                }),
            })
            .openapi({ required: ['eventId'] }),
          examples: { 'Example 1': { value: { eventId: '6909b8ea4e7e8bcf6985b1a8' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'invalid-calendar-event' } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1CalendarEventsImportRoute = createRoute({
  method: 'post',
  path: '/api/v1/calendar-events.import',
  tags: ['Calendar Events'],
  summary: 'Import Calendar Event',
  description: 'Use this endpoint to import an exteral calendar event.',
  operationId: 'post-api-v1-calendar-events.import',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              externalId: z
                .string()
                .openapi({
                  description: 'Enter the event ID (eid) of the external calendar event.',
                }),
              startTime: z
                .string()
                .openapi({ description: 'Enter the time at which the event begins.' }),
              endTime: z
                .string()
                .exactOptional()
                .openapi({ description: 'Enter the time at which the event ends.' }),
              subject: z.string().openapi({ description: 'Enter the event subject.' }),
              description: z.string().openapi({ description: 'Enter the event description.' }),
              reminderMinutesBeforeStart: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Enter the number of minutes before the event that the reminder must be sent.',
                }),
              busy: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enter whether or not you want to set your status as busy.',
                }),
            })
            .openapi({ required: ['externalId', 'startTime', 'subject', 'description'] }),
          examples: {
            'Example 1': {
              value: {
                externalId:
                  'NWwwcnU3NmM1NW03dDRtZGdkMWNjNDRmamsgcmFjaGFuYS52aXNhdmFkaXlhQHJvY2tldC5jaGF0',
                startTime: '2025-11-05T07:17:00.000Z',
                endTime: '2025-11-05T07:18:00.000Z',
                subject: 'Subject8',
                description: 'Description8',
                reminderMinutesBeforeStart: 10,
                busy: true,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { id: '690c2b2d4e7e8bcf6985b3d8', success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'externalId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiAppsPublicAppIdIncomingRoute = createRoute({
  method: 'post',
  path: '/api/apps/public/{app-id}/incoming',
  tags: ['Rasa App'],
  summary: 'Close Chat or Perform Handover',
  description:
    'Close a chat session or perform handover. The appropriate endpoint URL including the `appId` for  closing chat or perfoming handover in your workspace is displayed under **App Info > Details > APIs > POST incoming** section of the Rasa app.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|5.0.0     | Added       |',
  operationId: 'post-api-apps-public-app-id-incoming',
  request: {
    params: z.object({
      'app-id': z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'app-id',
            in: 'path',
            required: true,
            description:
              'The app id. Navigate to App Info > Details > APIs > POST incoming to get the complete URL for this endpoint.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .string()
                .openapi({ description: 'The action can either be `handover` or `close-chat`. ' }),
              sessionId: z.string().openapi({ description: 'The ID of the Rasa session.' }),
              actionData: z
                .object({
                  targetDepartment: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The targeted department.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['action', 'sessionId'] }),
          examples: {
            Example: { value: { action: 'close-chat', sessionId: '2Sfq8wXw4fYPMf6r4' } },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ msg: z.string().exactOptional() }).openapi({ required: [] }),
          examples: {
            'Close chat': { value: { msg: ' Close chat request handled successfully' } },
            'Perform handover': {
              value: { msg: ' Perform Handover request handled successfully' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1VideoConferenceJitsiUpdateTimeoutRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-conference/jitsi.update-timeout',
  tags: ['Jitsi App'],
  summary: 'Update Jitsi Timeout',
  description:
    '### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.74.0        | Added       |',
  operationId: 'post-api-v1-video-conference-jitsi.update-timeout',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({ description: 'The room Id of the room to update the jitsi timeout.' }),
            })
            .openapi({ required: ['roomId'] }),
          examples: { Example: { value: { roomId: 'hyoM5JSQi94RwqPE7' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              jitsiTimeout: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: { value: { jitsiTimeout: '2019-01-16T13:17:11.951Z', success: true } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiAppsPublicAppIdTemplateMessageRoute = createRoute({
  method: 'post',
  path: '/api/apps/public/{appId}/templateMessage',
  tags: ['WhatsApp'],
  summary: 'Send a WhatsApp Template Message',
  description:
    'Use this endpoint to send WhatsApp template messages directly to specified contacts from your workspace.\n\n1. Click the **Marketplace** icon from the main menu. Select **Explore** from the drop-down menu.\n2. Locate your preferred <a href="https://docs.rocket.chat/docs/whatsapp-apps" target="_blank">WhatsApp App</a>.\n3. Go to *App Info > Details > APIs* and find the `POST templateMessage` section.\n4. Copy the `POST templateMessage` endpoint URL for your WhatsApp app from the provided curl example. This URL includes the required `appId`. Send a template message request using this URL as the endpoint.\n\nBefore sending template messages from Rocket.Chat through any <a href="https://docs.rocket.chat/docs/whatsapp-apps" target="_blank">WhatsApp App</a>, ensure that you have set up the templates in respective WhatsApp provider account. Refer to the official guide for details on <a href="https://developer.rocket.chat/docs/whatsapp-business-template-messages#set-up-template-messages-on-whatsapp" target="_blank">configuring template messages for each WhatsApp app</a>.',
  operationId: 'post-api-apps-public-app_id-templateMessage',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: { name: 'appId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      description:
        'We strongly recommend including the + prefix for all phone numbers in the payload. While you can submit numbers without the leading + sign, we have encountered cases where WhatsApp will return an invalid response despite the number being in use.',
      content: {
        'application/json': {
          schema: z
            .object({
              phoneNumbers: z
                .array(z.string())
                .openapi({
                  description:
                    'Recipient WhatsApp IDs where you want to send the template message. You can validate a WhatsApp id from <a href="https://developers.facebook.com/docs/whatsapp/on-premises/reference/contacts" target="_blank">here</a>.',
                }),
              connectedWhatsAppNo: z
                .string()
                .openapi({
                  description:
                    'The WhatsApp Number from which you want to send this template message. The WhatsApp number connected to your workspace via the app.',
                }),
              targetAgent: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Username of the agent you want to transfer the chat to when the WhatsApp user replies.',
                }),
              targetDepartment: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Department name or ID where you want to transfer the chat to when the WhatsApp user replies.',
                }),
              template: z
                .object({
                  namespace: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  language: z
                    .object({
                      code: z.string().exactOptional(),
                      policy: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  components: z
                    .array(
                      z
                        .object({
                          type: z.string().exactOptional(),
                          parameters: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  text: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  description:
                    'Provide the details of the template message you want to send. The structure of the template object may differ depending on the template defined within your WhatsApp provider account. For further clarification, refer to the official guide on <a href="https://developer.rocket.chat/docs/whatsapp-business-template-messages#api-endpoint" target="_blank">sending template messages via API in Rocket.Chat</a>. The example template object provided here is based on the configuration outlined in the official guide for the <a href="https://developer.rocket.chat/docs/whatsapp-business-template-messages#whatsapp-cloud" target="_blank">WhatsApp Cloud App</a>.\n\nIf your template message includes parameters, make sure to replace all of them with the appropriate information before sending. Failure to do so may lead to an error.',
                  required: [],
                }),
            })
            .openapi({ required: ['phoneNumbers', 'connectedWhatsAppNo', 'template'] }),
          examples: {
            'WhatsApp Cloud': {
              value: {
                phoneNumbers: ['2368106035555'],
                connectedWhatsAppNo: '104920685899299',
                template: {
                  name: 'ship',
                  language: { code: 'en', policy: 'deterministic' },
                  components: [{ type: 'body', parameters: [{ type: 'text', text: '20' }] }],
                },
              },
            },
            'WhatsApp 360Dialog (Cloud API)': {
              value: {
                phoneNumbers: ['xxxxxxxxxxxxx'],
                connectedWhatsAppNo: '555195251xxx',
                template: {
                  name: 'boarding_pass',
                  language: { code: 'en', policy: 'deterministic' },
                  components: [
                    { type: 'header', parameters: [{ type: 'text', text: 'halo' }] },
                    {
                      type: 'body',
                      parameters: [
                        { type: 'text', text: 'abc' },
                        { type: 'text', text: 'xyz' },
                      ],
                    },
                  ],
                },
              },
            },
            'Whatsapp Sandbox': {
              value: {
                phoneNumbers: ['50364357612'],
                template: {
                  name: 'first_welcome_messsage',
                  language: { code: 'en' },
                  components: [
                    { type: 'body', parameters: [{ type: 'text', text: 'Your name goes here' }] },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Too many phone numbers': {
              value: {
                success: false,
                error: 'Too many phone numbers! Please make sure that phoneNumbers are <= 250',
              },
            },
            'Agent Not Found': {
              value: { success: false, error: 'No Agent found with username abc98' },
            },
            'Department Not Found': {
              value: { success: false, error: 'No Department found with id/Name SalesDepartment' },
            },
            'Invalid WhatsApp Contact': {
              value: {
                success: false,
                error:
                  'Connected WhatsApp Number (connectedWhatsAppNo) i.e. 565412001234 is not a valid WhatsApp contact. Contact Status is invalid',
              },
            },
            'Invalid Connected WhatsApp Number': {
              value: {
                success: false,
                error:
                  'Error! Connected WhatsApp Number (connectedWhatsAppNo) i.e. 565412001234 has not been registered yet on Rocket.Chat. Please goto #omnichannel-whatsapp-setup channel and connect this WhatsApp number first there before sending this request again.',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: ForbiddenErrorResponse,
  },
})
