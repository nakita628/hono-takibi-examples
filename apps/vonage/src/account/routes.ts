import { createRoute, z } from '@hono/zod-openapi'

const ErrorAPIKeyNotFoundSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'More detail regarding this error, including the API key supplied',
        example: "API key 'abc123' not found",
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({ description: 'Description of the error', example: 'Invalid API Key' }),
    type: z
      .string()
      .openapi({
        description: 'URL for further information',
        example: 'https://developer.nexmo.com/api-errors#invalid-api-key',
      }),
  })
  .openapi({
    description: 'This API key was not recognised',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorAPIKeyNotFound')

const ErrorAuthenticationFailedSchema = z
  .object({
    'error-code': z.any().exactOptional().openapi({ example: '401' }),
    'error-code-label': z.any().exactOptional().openapi({ example: 'authentication failed' }),
  })
  .openapi({ description: 'Authentication Failed', xml: { name: 'response' }, required: [] })
  .openapi('ErrorAuthenticationFailed')

const ErrorAuthenticationFailedAccountBalanceSchema = z
  .object({
    'error-code': z.any().exactOptional().openapi({ example: '401' }),
    'error-code-label': z.any().exactOptional().openapi({ example: 'authentication failed' }),
  })
  .openapi({ description: 'Authentication Failed', xml: { name: 'accountBalance' }, required: [] })
  .openapi('ErrorAuthenticationFailedAccountBalance')

const ErrorAutoReloadNotEnabledSchema = z
  .object({
    'error-code': z.any().exactOptional().openapi({ example: '401' }),
    'error-code-label': z.any().exactOptional().openapi({ example: 'not auto-reload enabled' }),
  })
  .openapi({ description: 'Auto-Reload not enabled', xml: { name: 'response' }, required: [] })
  .openapi('ErrorAutoReloadNotEnabled')

const ErrorSecretIDNotFoundSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'More detail regarding this error, including the secret ID supplied',
        example: "ID '07239aeb-d756-4c32-a1de-cf64f8b21827' could not be found",
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Description of the error', example: 'Invalid ID' }),
    type: z
      .string()
      .openapi({
        description: 'URL for further information',
        example: 'https://developer.nexmo.com/api-errors#invalid-id',
      }),
  })
  .openapi({
    description: 'This secret ID was not recognised',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorSecretIDNotFound')

const AccountBalanceSchema = z
  .object({
    autoReload: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ description: 'Whether the account has auto-reloading enabled', example: false }),
    value: z
      .number()
      .exactOptional()
      .openapi({ description: 'The balance of the account, in EUR', example: 10.28 }),
  })
  .openapi({ xml: { name: 'accountBalance' }, required: [] })
  .openapi('AccountBalance')

const AccountSettingsSchema = z
  .object({
    'dr-callback-url': z
      .url()
      .exactOptional()
      .openapi({
        description: 'The current or updated delivery receipt webhook URI',
        example: 'https://example.com/webhooks/delivery-receipt',
      }),
    'max-calls-per-second': z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximum number of API calls per second.', example: 30 }),
    'max-inbound-request': z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximum number of inbound messages per second.', example: 30 }),
    'max-outbound-request': z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximum number of outbound messages per second.', example: 30 }),
    'mo-callback-url': z
      .url()
      .exactOptional()
      .openapi({
        description: 'The current or updated inbound message webhook URI',
        example: 'https://example.com/webhooks/inbound-sms',
      }),
  })
  .openapi({ xml: { name: 'account-settings' }, required: [] })
  .openapi('AccountSettings')

const AccountSettingsRequestSchema = z
  .object({
    drCallBackUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The webhook URL that Vonage makes a request to when a delivery receipt is available  for an SMS sent by one of your Vonage numbers.\nSend an empty string to unset this value.',
        example: 'https://example.com/webhooks/delivery-receipt',
      }),
    moCallBackUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The default webhook URL for inbound SMS. If an SMS is received at a Vonage number  that does not have its own inbound SMS webhook configured, Vonage makes a request here.\nSend an empty string to unset this value.',
        example: 'https://example.com/webhooks/inbound-sms',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountSettingsRequest')

const CreateSecretRequestSchema = z
  .object({
    secret: z
      .string()
      .openapi({
        description:
          'The new secret must follow these rules:\n\n* minimum 8 characters\n* maximum 25 characters\n* minimum 1 lower case character\n* minimum 1 upper case character\n* minimum 1 digit\n',
        example: 'example-4PI-secret',
      }),
  })
  .openapi({ required: ['secret'] })
  .openapi('CreateSecretRequest')

const RegisterEmailRequestSchema = z
  .object({
    application_ids: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          "An optional array of additional ApplicationID's that the value is to be assigned to.",
        example: ['6ec9eb7de1d34e77ac2c0ad597c9554a', '5dba5838689f402dba0c77957e2181f3'],
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional name to be attached to this binding',
        example: 'my-email-link',
      }),
    provider: z
      .literal('email')
      .openapi({
        description: 'The delivery method by which the value would be assigned. Always `email`',
        example: 'email',
      }),
    value: z
      .email()
      .openapi({
        description: 'The email adress to attach to the application(s)',
        example: 'bob@company.com',
      }),
  })
  .openapi({ required: ['provider', 'value'] })
  .openapi('RegisterEmailRequest')

const RegisterEmailResponseSchema = z
  .object({
    application_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of ApplicationID strings attached to the value provided.',
        example: ['6ec9eb7de1d34e77ac2c0ad597c9554a', '5dba5838689f402dba0c77957e2181f3'],
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional name to be attached to this binding',
        example: 'optionalName',
      }),
    provider: z
      .literal('email')
      .exactOptional()
      .openapi({ description: 'Enum identifer of provider type.', example: 'email' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value given to the provider to attach to the Application IDs.',
        example: 'alice@company.com',
      }),
  })
  .openapi({ required: [] })
  .openapi('RegisterEmailResponse')

const SecretMgmtLinksSchema = z
  .object({
    self: z
      .object({
        href: z.string().exactOptional().openapi({ description: 'The URI for this resource' }),
      })
      .exactOptional()
      .openapi({ description: 'This resource', required: [] }),
  })
  .openapi({ description: 'Links related to this resource', required: [] })
  .openapi('SecretMgmtLinks')

const SecretInfoSchema = z
  .object({
    _links: SecretMgmtLinksSchema.exactOptional(),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Creation date/time for this secret',
        example: '2017-03-02T16:34:49Z',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Secret ID', example: 'ad6dc56f-07b5-46e1-a527-85530e625800' }),
  })
  .openapi({ required: [] })
  .openapi('SecretInfo')

const SuccessSchema = z
  .object({
    'error-code': z.any().exactOptional().openapi({ example: '200' }),
    'error-code-label': z.any().exactOptional().openapi({ example: 'success' }),
  })
  .openapi({ xml: { name: 'response' }, required: [] })
  .openapi('Success')

const TopupRequestSchema = z
  .object({
    trx: z
      .string()
      .openapi({
        description:
          'The transaction reference of the transaction when balance was added and auto-reload was enabled on your account.',
        example: '8ef2447e69604f642ae59363aa5f781b',
      }),
  })
  .openapi({ required: ['trx'] })
  .openapi('TopupRequest')

const BadCredentialsErrorResponse = {
  description: 'Credentials are missing or invalid',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .exactOptional()
            .openapi({
              description: 'More detail regarding this error, including the expected value',
              example: 'You did not provide correct credentials.',
            }),
          instance: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Internal Trace ID',
              example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
            }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Description of the error', example: 'Unauthorized' }),
          type: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL for further information',
              example: 'https://developer.nexmo.com/api-errors#unauthorized',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const APIKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The API key to manage secrets for',
      example: 'abcd1234',
      in: 'path',
      name: 'api_key',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeyForAuthParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)',
      in: 'query',
      name: 'api_key',
      required: true,
      schema: { example: 'abcd1234', type: 'string' },
    },
    example: 'abcd1234',
  })

const ApiSecretForAuthParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)',
      in: 'query',
      name: 'api_secret',
      required: true,
      schema: { example: 'ABCDEFGH01234abc', type: 'string' },
    },
    example: 'ABCDEFGH01234abc',
  })

const SecretIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the API Secret',
      example: '01234567-aaaa-bbbb-cccc-defdefdefdef',
      in: 'path',
      name: 'secret_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const BasicAuthSecurityScheme = {
  description:
    'Provide an `Authorization` header, with a value of "Basic" followed by the result of base64-encoding your Vonage API key and secret separated by a colon. You can find your API key and secret on the [dashboard](https://dashboard.nexmo.com) and more information is available [on the developer portal](https://developer.nexmo.com/concepts/guides/authentication#header-based-api-key-and-secret-authentication).\nIf your API key were aaa012 and your API secret were abc123456789 then your HTTP header would be: `Authorization: Basic YWFhMDEyOmFiYzEyMzQ1Njc4OQ==`',
  scheme: 'basic',
  type: 'http',
}

export const getAccountGetBalanceRoute = createRoute({
  method: 'get',
  path: '/account/get-balance',
  tags: ['Balance'],
  summary: 'Get Account Balance',
  description: 'Retrieve the current balance of your Vonage API account',
  operationId: 'getAccountBalance',
  request: {
    query: z.object({
      api_key: ApiKeyForAuthParamsSchema,
      api_secret: ApiSecretForAuthParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The current balance of your account',
      content: {
        'application/json': {
          schema: AccountBalanceSchema,
          example: { autoReload: false, value: 10.171275 },
        },
        'application/xml': {
          schema: AccountBalanceSchema,
          example:
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <accountBalance>\n  <value>10.17127500</value>\n  <autoReload>false</autoReload>\n</accountBalance>',
        },
      },
    },
    401: {
      description:
        'Not Authorised. You must supply your `api_key` and `api_secret` as query parameters to this request',
      content: {
        'application/json': { schema: ErrorAuthenticationFailedAccountBalanceSchema },
        'application/xml': { schema: ErrorAuthenticationFailedAccountBalanceSchema },
      },
    },
  },
})

export const postAccountRegisterSenderRoute = createRoute({
  method: 'post',
  path: '/account/register-sender',
  tags: ['Configuration'],
  summary: 'Register an email sender',
  description: 'Register an email sender with an API Key for using email with Verify V2.',
  operationId: 'registerSender',
  request: {
    query: z.object({
      api_key: ApiKeyForAuthParamsSchema,
      api_secret: ApiSecretForAuthParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: RegisterEmailRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RegisterEmailResponseSchema } },
    },
  },
})

export const postAccountSettingsRoute = createRoute({
  method: 'post',
  path: '/account/settings',
  tags: ['Configuration'],
  summary: 'Change Account Settings',
  description:
    'Update the default webhook URLs associated with your account:\n  * Callback URL for incoming SMS messages\n  * Callback URL for delivery receipts\n\nNote that the URLs you provide must be valid and active. Vonage will check that they return a 200 OK response before the setting is saved.',
  operationId: 'changeAccountSettings',
  request: {
    query: z.object({
      api_key: ApiKeyForAuthParamsSchema,
      api_secret: ApiSecretForAuthParamsSchema,
    }),
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: AccountSettingsRequestSchema } },
    },
  },
  responses: {
    200: {
      description:
        'OK. Settings were updated if supplied, the details of the current settings are included in the response.',
      content: {
        'application/json': {
          schema: AccountSettingsSchema,
          example:
            '{\n  "mo-callback-url": "https:\\/\\/example.com\\/webhooks\\/inbound-sms",\n  "dr-callback-url": "https:\\/\\/example.com\\/webhooks\\/delivery-receipt",\n  "max-outbound-request": 30,\n  "max-inbound-request": 30,\n  "max-calls-per-second": 30\n}',
        },
        'application/xml': {
          schema: AccountSettingsSchema,
          example:
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <account-settings>\n  <mo-callback-url>https://example.com/webhooks/inbound-sms</mo-callback-url>\n  <dr-callback-url>https://example.com/webhooks/delivery-receipt</dr-callback-url>\n  <max-outbound-request>30</max-outbound-request>\n  <max-inbound-request>30</max-inbound-request>\n  <max-calls-per-second>30</max-calls-per-second>\n</account-settings>',
        },
      },
    },
    401: {
      description:
        'Not Authorised. You must supply your `api_key` and `api_secret` as query parameters to this request',
    },
  },
})

export const postAccountTopUpRoute = createRoute({
  method: 'post',
  path: '/account/top-up',
  tags: ['Balance'],
  summary: 'Top Up Account Balance',
  description:
    'You can top up your account using this API when you have enabled auto-reload in the dashboard. The amount added by the top-up operation will be the same amount as was added in the payment when auto-reload was enabled.\nYour account balance is checked every 5-10 minutes and if it falls below the threshold and auto-reload is enabled, then it will be topped up automatically. Use this endpoint  if you need to top up at times when your credit may be exhausted more quickly than the auto-reload may occur.',
  externalDocs: {
    description: 'Read more about automatic payments on the Knowledgebase',
    url: 'https://help.nexmo.com/hc/en-us/articles/205603248-How-do-I-set-up-automatic-payments-using-PayPal-or-credit-card-',
  },
  operationId: 'topUpAccountBalance',
  request: {
    query: z.object({
      api_key: ApiKeyForAuthParamsSchema,
      api_secret: ApiSecretForAuthParamsSchema,
    }),
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: TopupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: SuccessSchema },
        'application/xml': { schema: SuccessSchema },
      },
    },
    401: {
      description: 'Not Authorised',
      content: {
        'application/json': {
          schema: z.xor([ErrorAuthenticationFailedSchema, ErrorAutoReloadNotEnabledSchema]),
        },
        'application/xml': {
          schema: z.xor([ErrorAuthenticationFailedSchema, ErrorAutoReloadNotEnabledSchema]),
        },
      },
    },
  },
})

export const getAccountsApiKeySecretsRoute = createRoute({
  method: 'get',
  path: '/accounts/{api_key}/secrets',
  tags: ['Secret Management'],
  summary: 'Retrieve API Secrets',
  operationId: 'retrieveAPISecrets',
  request: { params: z.object({ api_key: APIKeyParamsSchema }) },
  responses: {
    200: {
      description: 'The list of your current API secrets',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z
                .object({
                  secrets: z
                    .array(SecretInfoSchema)
                    .exactOptional()
                    .openapi({ description: 'Array of API secrets' }),
                })
                .exactOptional()
                .openapi({
                  description: 'The single `secrets` key returns an array of API secrets',
                  required: [],
                }),
              _links: SecretMgmtLinksSchema.exactOptional(),
            })
            .openapi({ required: [] }),
          example:
            '{\n  "_links": {\n    "self": {\n      "href": "/accounts/abcd1234/secrets"\n    }\n  },\n  "_embedded": {\n    "secrets": [\n      {\n        "_links": {\n          "self": {\n            "href": "/accounts/abcd1234/secrets/01234567-aaaa-bbbb-cccc-defdefdefdef"\n          }\n        },\n        "id": "01234567-aaaa-bbbb-cccc-defdefdefdef",\n        "created_at": "2018-12-03T10:07:23Z"\n      }\n    ]\n  }\n}',
        },
      },
    },
    401: BadCredentialsErrorResponse,
    404: {
      description: 'Item not found',
      content: { 'application/json': { schema: ErrorAPIKeyNotFoundSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const postAccountsApiKeySecretsRoute = createRoute({
  method: 'post',
  path: '/accounts/{api_key}/secrets',
  tags: ['Secret Management'],
  summary: 'Create API Secret',
  operationId: 'createAPISecret',
  request: {
    params: z.object({ api_key: APIKeyParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateSecretRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Secret created',
      content: {
        'application/json': {
          schema: SecretInfoSchema,
          example:
            '{\n  "_links": {\n    "self": {\n      "href": "/accounts/abcd1234/secrets/01234567-aaaa-bbbb-cccc-defdefdefdef"\n    }\n  },\n  "id": "01234567-aaaa-bbbb-cccc-defdefdefdef",\n  "created_at": "2018-12-03T10:07:23Z"\n}',
        },
      },
    },
    400: {
      description:
        'Bad request. This usually indicates valid data but can also occur when a user has exceeded the allowed number of secrets on their account.',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'More detail regarding this error, including the API key supplied',
                  example: 'The request failed due to secret validation errors',
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Internal Trace ID',
                  example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
                }),
              invalid_parameters: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Field name', example: 'secret' }),
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Explanation of why parameter is considered invalid',
                          example: 'Does not meet complexity requirements',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array of the parameters that are considered invalid, and explanations of why',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'Description of the error', example: 'Bad Request' }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL for further information',
                  example:
                    'https://developer.nexmo.com/api-errors/account/secret-management#validation',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: BadCredentialsErrorResponse,
    404: {
      description: 'Item not found',
      content: { 'application/json': { schema: ErrorAPIKeyNotFoundSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getAccountsApiKeySecretsSecretIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{api_key}/secrets/{secret_id}',
  tags: ['Secret Management'],
  summary: 'Retrieve one API Secret',
  operationId: 'retrieveAPISecret',
  request: { params: z.object({ api_key: APIKeyParamsSchema, secret_id: SecretIdParamsSchema }) },
  responses: {
    200: {
      description: 'API secret response',
      content: {
        'application/json': {
          schema: SecretInfoSchema,
          example:
            '{\n  "_links": {\n    "self": {\n      "href": "/accounts/abcd1234/secrets/01234567-aaaa-bbbb-cccc-defdefdefdef"\n    }\n  },\n  "id": "01234567-aaaa-bbbb-cccc-defdefdefdef",\n  "created_at": "2018-12-03T10:07:23Z"\n}',
        },
      },
    },
    401: BadCredentialsErrorResponse,
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z.xor([ErrorAPIKeyNotFoundSchema, ErrorSecretIDNotFoundSchema]),
        },
      },
    },
  },
  security: [{ basicAuth: [] }],
})

export const deleteAccountsApiKeySecretsSecretIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{api_key}/secrets/{secret_id}',
  tags: ['Secret Management'],
  summary: 'Revoke an API Secret',
  operationId: 'revokeAPISecret',
  request: { params: z.object({ api_key: APIKeyParamsSchema, secret_id: SecretIdParamsSchema }) },
  responses: {
    204: { description: 'Revoked secret response (without body content)' },
    401: BadCredentialsErrorResponse,
    403: {
      description:
        'Operation forbidden by permissions or because this is the only API secret and you are required to have at least one.',
      content: {
        'application/json': {
          schema: z
            .object({
              detail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'More detail regarding this error',
                  example:
                    'Can not delete the last secret. The account must always have at least 1 secret active at any time',
                }),
              instance: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Internal Trace ID',
                  example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Description of the error',
                  example: 'Secret Deletion Forbidden',
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL for further information',
                  example:
                    'https://developer.nexmo.com/api-errors/account/secret-management#delete-last-secret',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Item not found',
      content: {
        'application/json': {
          schema: z.xor([ErrorAPIKeyNotFoundSchema, ErrorSecretIDNotFoundSchema]),
        },
      },
    },
  },
  security: [{ basicAuth: [] }],
})
