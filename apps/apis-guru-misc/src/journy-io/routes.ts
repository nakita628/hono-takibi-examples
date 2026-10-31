import { createRoute, z } from '@hono/zod-openapi'

export const deleteAccountsRoute = createRoute({
  method: 'delete',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Delete account',
  description: 'Endpoint used to delete an account.',
  operationId: 'deleteAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identification: z
                .object({
                  accountId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier for the account in your database' }),
                  domain: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The domain associated with the account (e.g. acme-inc.com)',
                    }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'Account identification requires an accountId, domain or both',
                  required: [],
                }),
            })
            .openapi({ description: 'Delete an account', required: ['identification'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postAccountsUpsertRoute = createRoute({
  method: 'post',
  path: '/accounts/upsert',
  tags: ['Accounts'],
  summary: 'Create or update account',
  description: 'Endpoint used to create or update an account.',
  operationId: 'upsertAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identification: z
                .object({
                  accountId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier for the account in your database' }),
                  domain: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The domain associated with the account (e.g. acme-inc.com)',
                    }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'Account identification requires an accountId, domain or both',
                  required: [],
                }),
              properties: z
                .record(
                  z.string(),
                  z.xor([z.string().nullable(), z.boolean(), z.number(), z.array(z.string())]),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)',
                }),
            })
            .openapi({
              description: 'Update properties and/or members of an account',
              required: ['identification'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Account will be created',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  message: z.string().openapi({ example: 'Account will be created or updated' }),
                })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  rejected: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'If validation fails, specifies the property name and error message',
                      example: { created_at: 'Expected a date but found a boolean.' },
                    }),
                })
                .openapi({
                  description: 'Specifies if any warnings occurred when validating the properties',
                  required: [],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postAccountsUsersAddRoute = createRoute({
  method: 'post',
  path: '/accounts/users/add',
  tags: ['Accounts'],
  summary: 'Add users to an account',
  description: 'You can add up to 100 users to an account.',
  operationId: 'addUserToAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account: z
                .object({
                  accountId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier for the account in your database' }),
                  domain: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The domain associated with the account (e.g. acme-inc.com)',
                    }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'Account identification requires an accountId, domain or both',
                  required: [],
                }),
              users: z.array(
                z
                  .object({
                    identification: z
                      .object({
                        email: z
                          .email()
                          .exactOptional()
                          .openapi({ description: 'Email address of the user' }),
                        userId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Unique identifier for the user in your database',
                          }),
                      })
                      .refine((val) => Object.keys(val).length >= 1)
                      .openapi({
                        description: 'User identification requires a userId, email or both',
                        required: [],
                      }),
                  })
                  .openapi({ required: ['identification'] }),
              ),
            })
            .openapi({
              description: 'The identification for user and account',
              required: ['account', 'users'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Object was created',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postAccountsUsersRemoveRoute = createRoute({
  method: 'post',
  path: '/accounts/users/remove',
  tags: ['Accounts'],
  summary: 'Remove user from account',
  description:
    'You can remove up to 100 users from an account.\n\nWhen removing a user, the user will still be stored in journy.io, but marked as "removed".\n',
  operationId: 'removeUserFromAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account: z
                .object({
                  accountId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier for the account in your database' }),
                  domain: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The domain associated with the account (e.g. acme-inc.com)',
                    }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'Account identification requires an accountId, domain or both',
                  required: [],
                }),
              users: z.array(
                z
                  .object({
                    identification: z
                      .object({
                        email: z
                          .email()
                          .exactOptional()
                          .openapi({ description: 'Email address of the user' }),
                        userId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Unique identifier for the user in your database',
                          }),
                      })
                      .refine((val) => Object.keys(val).length >= 1)
                      .openapi({
                        description: 'User identification requires a userId, email or both',
                        required: [],
                      }),
                  })
                  .openapi({ required: ['identification'] }),
              ),
            })
            .openapi({
              description: 'The identification for user and account',
              required: ['account', 'users'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'No content',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['Events'],
  summary: 'Get events',
  description: 'Endpoint to list events.',
  operationId: 'getEvents',
  responses: {
    200: {
      description: 'Events',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  data: z.array(
                    z
                      .object({
                        group: z
                          .object({ id: z.string(), name: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'Event group details',
                            required: ['name', 'id'],
                          }),
                        id: z.string(),
                        name: z.string(),
                      })
                      .openapi({ description: 'Event details', required: ['name', 'id'] }),
                  ),
                })
                .openapi({ required: ['data'] }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postEventsRoute = createRoute({
  method: 'post',
  path: '/events',
  tags: ['Events'],
  summary: 'Track event',
  description:
    'Endpoint used to track an event for a user or an account.\n\nThis endpoint is moved to [Track](#operation/trackEvent).',
  operationId: 'trackJourneyEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identification: z
                .object({
                  account: z
                    .object({
                      accountId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Unique identifier for the account in your database',
                        }),
                      domain: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The domain associated with the account (e.g. acme-inc.com)',
                        }),
                    })
                    .refine((val) => Object.keys(val).length >= 1)
                    .exactOptional()
                    .openapi({
                      description: 'Account identification requires an accountId, domain or both',
                      required: [],
                    }),
                  user: z
                    .object({
                      email: z
                        .email()
                        .exactOptional()
                        .openapi({ description: 'Email address of the user' }),
                      userId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Unique identifier for the user in your database',
                        }),
                    })
                    .refine((val) => Object.keys(val).length >= 1)
                    .exactOptional()
                    .openapi({
                      description: 'User identification requires a userId, email or both',
                      required: [],
                    }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'Event identification requires a user, account or both',
                  required: [],
                }),
              metadata: z
                .record(z.string(), z.xor([z.string(), z.boolean(), z.number()]))
                .exactOptional()
                .openapi({
                  description:
                    'Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601)',
                }),
              name: z.string(),
              triggeredAt: z
                .string()
                .exactOptional()
                .openapi({ description: 'If left blank this defaults to the current datetime' }),
            })
            .openapi({
              description: 'Event for a user or an account',
              required: ['identification', 'name'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Object was created',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
  deprecated: true,
})

export const postLinkRoute = createRoute({
  method: 'post',
  path: '/link',
  tags: ['Users'],
  summary: 'Link web activity to user',
  description:
    '💡 You don\'t need to use this endpoint if you use our JavaScript snippet in your application.\n\nThis endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.\n\nWhen our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named "__journey" will be set.\n\nThis will only work if your website and application are under the same top level domain.\n\nWebsite, blog or landing pages\n* www.my-domain.tld\n* blog.my-domain.tld\n* landing-page.my-domain.tld\n\nApplication\n* app.my-domain.tld\n\nThe cookie on my-domain.tld will also be send to your app domain.\n\nYou should call this endpoint after the user succesfully logged in (so that you know the user\'s ID). Use the value of the cookie as device ID.',
  operationId: 'link',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deviceId: z.string(),
              identification: z
                .object({
                  email: z
                    .email()
                    .exactOptional()
                    .openapi({ description: 'Email address of the user' }),
                  userId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier for the user in your database' }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'User identification requires a userId, email or both',
                  required: [],
                }),
            })
            .openapi({
              description: 'Link web activity to user',
              required: ['deviceId', 'identification'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Object was created',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPropertiesAccountsRoute = createRoute({
  method: 'get',
  path: '/properties/accounts',
  tags: ['Properties'],
  summary: 'Get account properties',
  description: 'Endpoint to list account properties.',
  operationId: 'getAccountProperties',
  responses: {
    200: {
      description: 'Account Properties',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  data: z.array(
                    z
                      .object({
                        group: z
                          .object({ id: z.string(), name: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'Property group details',
                            required: ['name', 'id'],
                          }),
                        isComputed: z.boolean(),
                        label: z.string(),
                        name: z.string(),
                      })
                      .openapi({
                        description: 'Properties details',
                        required: ['name', 'label', 'isComputed'],
                      }),
                  ),
                })
                .openapi({ required: ['data'] }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPropertiesUsersRoute = createRoute({
  method: 'get',
  path: '/properties/users',
  tags: ['Properties'],
  summary: 'Get user properties',
  description: 'Endpoint to list user properties.',
  operationId: 'getUserProperties',
  responses: {
    200: {
      description: 'User Properties',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  data: z.array(
                    z
                      .object({
                        group: z
                          .object({ id: z.string(), name: z.string() })
                          .exactOptional()
                          .openapi({
                            description: 'Property group details',
                            required: ['name', 'id'],
                          }),
                        isComputed: z.boolean(),
                        label: z.string(),
                        name: z.string(),
                      })
                      .openapi({
                        description: 'Properties details',
                        required: ['name', 'label', 'isComputed'],
                      }),
                  ),
                })
                .openapi({ required: ['data'] }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSegmentsAccountsRoute = createRoute({
  method: 'get',
  path: '/segments/accounts',
  tags: ['Segments'],
  summary: 'Get account segments',
  description: 'Endpoint to list account segments.',
  operationId: 'getAccountSegments',
  responses: {
    200: {
      description: 'Account Segments',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  data: z.array(
                    z
                      .object({ id: z.string(), name: z.string() })
                      .openapi({ description: 'Segment details', required: ['name', 'id'] }),
                  ),
                })
                .openapi({ required: ['data'] }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSegmentsUsersRoute = createRoute({
  method: 'get',
  path: '/segments/users',
  tags: ['Segments'],
  summary: 'Get user segments',
  description: 'Endpoint to list user segments.',
  operationId: 'getUserSegments',
  responses: {
    200: {
      description: 'User Segments',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  data: z.array(
                    z
                      .object({ id: z.string(), name: z.string() })
                      .openapi({ description: 'Segment details', required: ['name', 'id'] }),
                  ),
                })
                .openapi({ required: ['data'] }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postTrackRoute = createRoute({
  method: 'post',
  path: '/track',
  tags: ['Track'],
  summary: 'Track event',
  description: 'Endpoint used to track an event for a user or an account.',
  operationId: 'trackEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identification: z
                .object({
                  account: z
                    .object({
                      accountId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Unique identifier for the account in your database',
                        }),
                      domain: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The domain associated with the account (e.g. acme-inc.com)',
                        }),
                    })
                    .refine((val) => Object.keys(val).length >= 1)
                    .exactOptional()
                    .openapi({
                      description: 'Account identification requires an accountId, domain or both',
                      required: [],
                    }),
                  user: z
                    .object({
                      email: z
                        .email()
                        .exactOptional()
                        .openapi({ description: 'Email address of the user' }),
                      userId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Unique identifier for the user in your database',
                        }),
                    })
                    .refine((val) => Object.keys(val).length >= 1)
                    .exactOptional()
                    .openapi({
                      description: 'User identification requires a userId, email or both',
                      required: [],
                    }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'Event identification requires a user, account or both',
                  required: [],
                }),
              metadata: z
                .record(z.string(), z.xor([z.string(), z.boolean(), z.number(), z.string()]))
                .exactOptional()
                .openapi({
                  description:
                    'Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601)',
                }),
              name: z.string(),
              triggeredAt: z
                .string()
                .exactOptional()
                .openapi({ description: 'If left blank this defaults to the current datetime' }),
            })
            .openapi({
              description: 'Event for a user or an account',
              required: ['identification', 'name'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Object was created',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getTrackingSnippetRoute = createRoute({
  method: 'get',
  path: '/tracking/snippet',
  tags: ['Websites'],
  summary: 'Get snippet for a website',
  description: 'Endpoint used to get a snippet for a website.',
  operationId: 'getTrackingSnippet',
  request: {
    query: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The domain you want to receive a snippet for',
            in: 'query',
            name: 'domain',
            required: true,
            schema: { format: 'domain', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snippet',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  data: z
                    .object({ domain: z.string(), snippet: z.string() })
                    .openapi({ description: 'A snippet', required: ['domain', 'snippet'] }),
                })
                .openapi({ required: ['data'] }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteUsersRoute = createRoute({
  method: 'delete',
  path: '/users',
  tags: ['Users'],
  summary: 'Delete user',
  description: 'Endpoint to delete a user.',
  operationId: 'deleteUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identification: z
                .object({
                  email: z
                    .email()
                    .exactOptional()
                    .openapi({ description: 'Email address of the user' }),
                  userId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier for the user in your database' }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'User identification requires a userId, email or both',
                  required: [],
                }),
            })
            .openapi({ description: 'Delete a user', required: ['identification'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersUpsertRoute = createRoute({
  method: 'post',
  path: '/users/upsert',
  tags: ['Users'],
  summary: 'Create or update user',
  description: 'Endpoint to create or update a user.',
  operationId: 'upsertUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identification: z
                .object({
                  email: z
                    .email()
                    .exactOptional()
                    .openapi({ description: 'Email address of the user' }),
                  userId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Unique identifier for the user in your database' }),
                })
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description: 'User identification requires a userId, email or both',
                  required: [],
                }),
              properties: z
                .record(
                  z.string(),
                  z.xor([z.string().nullable(), z.boolean(), z.number(), z.array(z.string())]),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)',
                }),
            })
            .openapi({ description: 'Update properties of a user', required: ['identification'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'User will be created',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  message: z.string().openapi({ example: 'User will be created or updated' }),
                })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  rejected: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'If validation fails, specifies property name and error description',
                      example: { created_at: 'Expected a date but found a boolean.' },
                    }),
                })
                .openapi({
                  description: 'Specifies if any warnings occurred when validating the properties',
                  required: [],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request, some fields or parameters are incorrect',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            )
            .and(
              z
                .object({
                  errors: z
                    .object({
                      fields: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ description: 'All input fields that seemed incorrect' }),
                      parameters: z
                        .object({
                          header: z.record(z.string(), z.string()).exactOptional(),
                          path: z.record(z.string(), z.string()).exactOptional(),
                          query: z.record(z.string(), z.string()).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'All query-, header- and path- parameters that seemed incorrect',
                          required: [],
                        }),
                    })
                    .openapi({
                      description: 'Map that sums up all received values that seemed incorrect',
                      required: [],
                    }),
                })
                .openapi({
                  description: 'Specify the fields and/ or parameters that had errors',
                  required: ['errors'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getValidateRoute = createRoute({
  method: 'get',
  path: '/validate',
  tags: ['Validation'],
  summary: 'Validate API key',
  description:
    'Endpoint used to test the validity and some basic information about a specific API Key.',
  operationId: 'getValidity',
  responses: {
    200: {
      description: 'Key validation',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({
                  data: z
                    .object({ permissions: z.array(z.string()) })
                    .openapi({ description: 'Validation of API Key', required: ['permissions'] }),
                })
                .openapi({ required: ['data'] }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'No API Key was provided or the key is not authorised to perform the action',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'The API Key provided is currently not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'Too many API requests were send',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'An unexpected error occurred',
      content: {
        'application/json': {
          schema: z
            .object({
              meta: z
                .object({ requestId: z.string(), status: z.number() })
                .openapi({ required: ['requestId', 'status'] }),
            })
            .openapi({
              description:
                'The basic response containing the unique ID of the request and the response status',
              required: ['meta'],
            })
            .and(
              z
                .object({ message: z.string() })
                .openapi({
                  description: 'The message specifies what is done',
                  required: ['message'],
                }),
            ),
        },
      },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})
