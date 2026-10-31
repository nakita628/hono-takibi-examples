import { createRoute, z } from '@hono/zod-openapi'

const _401ResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({ example: "Request header 'Authorization' missing / Invalid Token" }),
    title: z.string().exactOptional().openapi({ example: 'Unauthorised' }),
  })
  .openapi({ required: [] })
  .openapi('_401Response')

const _403ResponseSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Wrong authentication - You are not authorised to access this resource',
      }),
  })
  .openapi({ required: [] })
  .openapi('_403Response')

const AccountResponseSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The provider access token (only for `messenger`)',
        example: 'accessToken',
      }),
    api_key: z
      .string()
      .openapi({ description: 'The external api key for this account', example: 'abcd1234' }),
    applications: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The array of associated application ids',
        example: ['applicationId'],
      }),
    external_id: z
      .string()
      .openapi({ description: 'The external identifier for this account', example: '12345678' }),
    name: z.string().exactOptional().openapi({ description: 'The account name', example: 'name' }),
    provider: z
      .enum(['messenger', 'viber_service_msg', 'whatsapp'])
      .openapi({
        description: 'The provider (will be one of `messenger, viber_service_msg, whatsapp`).',
        example: 'messenger',
      }),
  })
  .openapi({ required: ['external_id', 'api_key', 'provider'] })
  .openapi('AccountResponse')

const MessengerAccountResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({ description: 'The provider access token', example: 'myAccessToken' }),
    api_key: z
      .string()
      .openapi({ description: 'The external api key for this account', example: 'abcd1234' }),
    applications: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The array of associated application ids',
        example: ['optionalApplicationId'],
      }),
    external_id: z
      .string()
      .openapi({ description: 'The external identifier for this account', example: '12345678' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account name', example: 'optionalName' }),
    provider: z
      .string()
      .openapi({ description: 'The provider (will be `messenger`).', example: 'messenger' }),
  })
  .openapi({ required: ['external_id', 'api_key', 'provider', 'access_token'] })
  .openapi('MessengerAccountResponse')

const VSMAccountResponseSchema = z
  .object({
    api_key: z
      .string()
      .openapi({ description: 'The external api key for this account', example: 'abcd1234' }),
    applications: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The array of associated application ids',
        example: ['optionalApplicationId'],
      }),
    external_id: z
      .string()
      .openapi({ description: 'The external identifier for this account', example: '12345678' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account name', example: 'optionalName' }),
    provider: z
      .string()
      .openapi({
        description: 'The provider (will be `viber_service_msg`).',
        example: 'viber_service_msg',
      }),
  })
  .openapi({ required: ['external_id', 'api_key', 'provider'] })
  .openapi('VSMAccountResponse')

const WAAccountResponseSchema = z
  .object({
    api_key: z
      .string()
      .openapi({ description: 'The external api key for this account', example: 'abcd1234' }),
    applications: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The array of associated application ids',
        example: ['optionalApplicationId'],
      }),
    external_id: z
      .string()
      .openapi({ description: 'The external identifier for this account', example: '12345678' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account name', example: 'optionalName' }),
    provider: z
      .string()
      .openapi({ description: 'The provider (will be `whatsapp`).', example: 'whatsapp' }),
  })
  .openapi({ required: ['external_id', 'api_key', 'provider'] })
  .openapi('WAAccountResponse')

const GetAllAccountResponseSchema = MessengerAccountResponseSchema.and(VSMAccountResponseSchema)
  .and(WAAccountResponseSchema)
  .openapi('GetAllAccountResponse')

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Account'],
  summary: 'Retrieve all accounts you own',
  operationId: 'GetAllAccounts',
  request: {
    query: z.object({
      provider: z
        .enum(['messenger', 'viber_service_msg', 'whatsapp'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by provider',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { enum: ['messenger', 'viber_service_msg', 'whatsapp'], type: 'string' },
          },
        }),
      page_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number of the results',
            in: 'query',
            name: 'page_number',
            required: false,
            schema: { default: 1, example: 1, type: 'integer' },
          },
          example: 1,
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size of the results',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 20, example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK.',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z.array(GetAllAccountResponseSchema).exactOptional(),
              _links: z
                .object({
                  first: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/beta/chatapp-accounts?page_number=1&page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  last: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/beta/chatapp-accounts?page_number=4&page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  next: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/beta/chatapp-accounts?page_number=3&page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  prev: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/beta/chatapp-accounts?page_number=1&page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  self: z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://api.nexmo.com/beta/chatapp-accounts?page_number=1&page_size=10',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              page_number: z.int().exactOptional().openapi({ example: 1 }),
              page_size: z.int().exactOptional().openapi({ example: 10 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})

export const postMessengerRoute = createRoute({
  method: 'post',
  path: '/messenger',
  tags: ['Facebook Messenger'],
  summary: 'Create a Messenger account',
  operationId: 'CreateMessengerAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .openapi({
                  description:
                    'This is the Facebook Business Page token. You can obtain the token using one of the following methods:\n\n* Linking your Facebook Business Page to your account [with our Dashboard tool](https://dashboard.nexmo.com/messages/social-channels/facebook-connect)\n* Requesting a Page Access Token using the steps in the [Facebook token reference](https://developers.facebook.com/docs/pages/access-tokens/)\n',
                  example: 'myAccessToken',
                }),
              applications: z
                .array(z.string())
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    'Contains a list of application IDs which are linked to the account. <ul> <li>There is just one application allowed per an account.</li> <li>The application type must be type "messages".</li> </ul> For more information see [Application API spec](https://developer.nexmo.com/api/application.v2)',
                  example: ['optionalApplicationId'],
                }),
              external_id: z
                .string()
                .openapi({
                  description:
                    'This is the unique identifier within the provider\'s domain. In this case it is the Page ID for your Facebook Page. Go to your Facebook Page, click "Settings", click "Messenger platform " scroll down to "Messenger link" to find your Page ID.',
                  example: '12345678',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Custom account name', example: 'optionalName' }),
            })
            .openapi({ required: ['external_id', 'access_token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created.',
      content: { 'application/json': { schema: MessengerAccountResponseSchema } },
    },
    400: {
      description: 'Bad Request.',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'Found errors validating 1 of your submitted parameters.' }),
              instance: z.string().exactOptional().openapi({ example: null }),
              invalid_params: z
                .array(
                  z
                    .object({
                      name: z.string().exactOptional().openapi({ example: 'external_id' }),
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Missing `external_id` field' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: "Your request parameters didn't validate." }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://www.nexmo.com/messages/Errors#InvalidParams' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: _403ResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})

export const getMessengerExternalIdRoute = createRoute({
  method: 'get',
  path: '/messenger/{external_id}',
  tags: ['Facebook Messenger'],
  summary: 'Retrieve a Messenger account',
  operationId: 'GetMessengerAccount',
  request: {
    params: z.object({
      external_id: z
        .string()
        .openapi({
          param: {
            description:
              'External id of the account you want to retrieve. In this case it is the Facebook Page ID.',
            in: 'path',
            name: 'external_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK.',
      content: { 'application/json': { schema: MessengerAccountResponseSchema } },
    },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
    404: { description: 'Not Found.' },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})

export const deleteMessengerExternalIdRoute = createRoute({
  method: 'delete',
  path: '/messenger/{external_id}',
  tags: ['Facebook Messenger'],
  summary: 'Delete a Messenger account',
  operationId: 'DeleteMessengerAccount',
  request: {
    params: z.object({
      external_id: z
        .string()
        .openapi({
          param: {
            description:
              'External id of the account you want to delete. In this case it is the Facebook Page ID.',
            in: 'path',
            name: 'external_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content.' },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: _403ResponseSchema } },
    },
    404: { description: 'Not Found.' },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})

export const patchMessengerExternalIdRoute = createRoute({
  method: 'patch',
  path: '/messenger/{external_id}',
  tags: ['Facebook Messenger'],
  summary: 'Update a Messenger account',
  operationId: 'UpdateMessengerAccount',
  request: {
    params: z.object({
      external_id: z
        .string()
        .openapi({
          param: {
            description:
              'External id of the account you want to update. In this case it is the Facebook Page ID.',
            in: 'path',
            name: 'external_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Request body can contain any of the following',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z.string().exactOptional().openapi({ example: 'updatedAccessToken' }),
              applications: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['newApplicationId'] }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The new account name', example: 'newName' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK.',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .openapi({
                  description: 'The provider access token',
                  example: 'updatedAccessToken',
                }),
              api_key: z
                .string()
                .openapi({
                  description: 'The external api key for this account',
                  example: 'abcd1234',
                }),
              applications: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The array of associated application ids',
                  example: ['newApplicationId'],
                }),
              external_id: z
                .string()
                .openapi({
                  description:
                    'The external identifier for this account. In this case it is the Facebook Page ID.',
                  example: '12345678',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The account name', example: 'newName' }),
              provider: z
                .string()
                .openapi({
                  description: 'The provider (will be `messenger`).',
                  example: 'messenger',
                }),
            })
            .openapi({ required: ['external_id', 'api_key', 'provider', 'access_token'] }),
        },
      },
    },
    400: {
      description: 'Bad Request.',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({ example: 'Found errors validating 1 of your submitted parameters.' }),
              instance: z.string().exactOptional().openapi({ example: null }),
              invalid_params: z
                .array(
                  z
                    .object({
                      name: z.string().exactOptional().openapi({ example: 'external_id' }),
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({ example: "'external_id' parameter cannot be changed" }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: "Your request parameters didn't validate." }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://www.nexmo.com/messages/Errors#InvalidParams' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: { 'application/json': { schema: _403ResponseSchema } },
    },
    404: { description: 'Not Found.' },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})

export const getViberServiceMsgExternalIdRoute = createRoute({
  method: 'get',
  path: '/viber_service_msg/{external_id}',
  tags: ['Viber Service Message'],
  summary: 'Retrieve a Viber Service Message account',
  operationId: 'GetVSMAccount',
  request: {
    params: z.object({
      external_id: z
        .string()
        .openapi({
          param: {
            description:
              'External id of the account you want to retrieve. In this case it will be your Viber Service Message ID.',
            in: 'path',
            name: 'external_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK.',
      content: { 'application/json': { schema: VSMAccountResponseSchema } },
    },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
    404: { description: 'Not Found.' },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})

export const getWhatsappExternalIdRoute = createRoute({
  method: 'get',
  path: '/whatsapp/{external_id}',
  tags: ['WhatsApp'],
  summary: 'Retrieve a Whatsapp account',
  operationId: 'GetWAAccount',
  request: {
    params: z.object({
      external_id: z
        .string()
        .openapi({
          param: {
            description:
              'External id of the account you want to retrieve. In this case it will be the WhatsApp number.',
            in: 'path',
            name: 'external_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK.',
      content: { 'application/json': { schema: WAAccountResponseSchema } },
    },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
    404: { description: 'Not Found.' },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})

export const postProviderExternalIdApplicationsRoute = createRoute({
  method: 'post',
  path: '/{provider}/{external_id}/applications',
  tags: ['Application'],
  summary: 'Link application to an account',
  operationId: 'LinkApplication',
  request: {
    params: z.object({
      provider: z
        .enum(['messenger', 'viber_service_msg', 'whatsapp'])
        .openapi({
          param: {
            description: 'Provider of the account you want to assign an application to',
            in: 'path',
            name: 'provider',
            required: true,
            schema: { enum: ['messenger', 'viber_service_msg', 'whatsapp'], type: 'string' },
          },
        }),
      external_id: z
        .string()
        .openapi({
          param: {
            description:
              'External id of the account you want to assign an application to. This is channel dependent. For Facebook it will be your Facebook Page ID, for Viber your Viber Service Message ID and for WhatsApp your WhatsApp number.',
            in: 'path',
            name: 'external_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Request body can contain any of the following. Please note, the only one application can be linked to the account.',
      content: {
        'application/json': {
          schema: z
            .object({
              application: z
                .string()
                .openapi({
                  description:
                    'There is just one application allowed per an account. The application type must be type "messages". For more information please see [Application API Spec](https://developer.nexmo.com/api/application.v2)',
                  example: 'applicationId',
                }),
            })
            .openapi({ required: ['application'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK.', content: { 'application/json': { schema: AccountResponseSchema } } },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The application does not exist or the application type is not "messages"',
                  example: 'Cannot link application',
                }),
              title: z.string().exactOptional().openapi({ example: 'Forbidden' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://www.nexmo.com/messages/Errors#Forbidden' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    409: {
      description: 'Conflict.',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The account reached limit of maximum number of linked applications. (The only one application is allowed per an account)',
                  example: 'Unable to link application',
                }),
              title: z.string().exactOptional().openapi({ example: 'Application conflict' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://www.nexmo.com/messages/Errors#Conflict' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})

export const deleteProviderExternalIdApplicationsApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/{provider}/{external_id}/applications/{application_id}',
  tags: ['Application'],
  summary: 'Unlink application from an account',
  operationId: 'UnliWithoutApplicationnkApplication',
  request: {
    params: z.object({
      provider: z
        .enum(['messenger', 'viber_service_msg', 'whatsapp'])
        .openapi({
          param: {
            description: 'Provider of the account you want to unlink an application from',
            in: 'path',
            name: 'provider',
            required: true,
            schema: { enum: ['messenger', 'viber_service_msg', 'whatsapp'], type: 'string' },
          },
        }),
      external_id: z
        .string()
        .openapi({
          param: {
            description: 'External id of the account you want to unlink an application from',
            in: 'path',
            name: 'external_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      application_id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the application you want to unlink',
            in: 'path',
            name: 'application_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content.' },
    401: {
      description: 'Unauthorized.',
      content: { 'application/json': { schema: _401ResponseSchema } },
    },
    403: {
      description: 'Forbidden.',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z.string().exactOptional().openapi({ example: 'Cannot unlink application' }),
              title: z.string().exactOptional().openapi({ example: 'Forbidden' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://www.nexmo.com/messages/Errors#Forbidden' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    409: {
      description: 'Conflict.',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: "The application is not linked or doesn't exist.",
                  example: 'Unable to unlink application',
                }),
              title: z.string().exactOptional().openapi({ example: 'Application conflict' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://www.nexmo.com/messages/Errors#Conflict' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }, { basicAuth: [] }],
})
