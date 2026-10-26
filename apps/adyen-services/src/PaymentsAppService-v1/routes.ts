import { createRoute, z } from '@hono/zod-openapi'

const SubMerchantDataSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'The city of the sub-merchant.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country of the sub-merchant.' }),
    displayName: z.string().min(1).openapi({ description: 'The display name of the merchant.' }),
    email: z.email().exactOptional().openapi({ description: 'The email of the sub-merchant.' }),
    id: z.string().min(1).openapi({ description: "The sub-merchant's ID." }),
    mcc: z.string().min(1).openapi({ description: 'The MCC of the sub-merchant.' }),
    name: z.string().min(1).openapi({ description: 'The name of the sub-merchant.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the sub-merchant.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code of the sub-merchant.' }),
    state: z.string().exactOptional().openapi({ description: 'The state of the sub-merchant.' }),
    street: z.string().exactOptional().openapi({ description: 'The street of the sub-merchant.' }),
    taxId: z.string().exactOptional().openapi({ description: 'The tax ID of the sub-merchant.' }),
  })
  .openapi({ required: ['displayName', 'id', 'mcc', 'name'] })
  .openapi('SubMerchantData')

const BoardingTokenRequestSchema = z
  .object({
    boardingRequestToken: z.string().openapi({ description: 'The boardingToken request token.' }),
    subMerchantData: SubMerchantDataSchema.exactOptional().openapi({
      description: 'Data of the sub-merchant.',
    }),
  })
  .openapi({ required: ['boardingRequestToken'] })
  .openapi('BoardingTokenRequest')

const BoardingTokenResponseSchema = z
  .object({
    boardingToken: z
      .string()
      .openapi({ description: 'The boarding token that allows the Payments App to board.' }),
    installationId: z
      .string()
      .openapi({ description: 'The unique identifier of the Payments App instance.' }),
  })
  .openapi({ required: ['boardingToken', 'installationId'] })
  .openapi('BoardingTokenResponse')

const InvalidFieldSchema = z
  .object({
    message: z.string().openapi({ description: 'Description of the validation error.' }),
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
  })
  .openapi({ required: ['message', 'name', 'value'] })
  .openapi('InvalidField')

const DefaultErrorResponseEntitySchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    errorCode: z.string().exactOptional().openapi({ description: 'Unique business error code.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URI that identifies the specific occurrence of the problem if applicable.',
      }),
    invalidFields: z
      .array(InvalidFieldSchema)
      .exactOptional()
      .openapi({ description: 'Array of fields with validation errors when applicable.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique reference for the request.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI that identifies the validation error type. It points to human-readable documentation for the problem type.',
      }),
  })
  .openapi({
    description: 'Standardized error response following RFC-7807 format',
    externalDocs: { url: 'https://www.rfc-editor.org/rfc/rfc7807' },
    required: [],
  })
  .openapi('DefaultErrorResponseEntity')

const PaymentsAppDtoSchema = z
  .object({
    installationId: z
      .string()
      .openapi({ description: 'The unique identifier of the Payments App instance.' }),
    merchantAccountCode: z
      .string()
      .openapi({ description: 'The account code associated with the Payments App instance.' }),
    merchantStoreCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The store code associated with the Payments App instance.' }),
    status: z.string().openapi({ description: 'The status of the Payments App instance.' }),
  })
  .openapi({ required: ['installationId', 'merchantAccountCode', 'status'] })
  .openapi('PaymentsAppDto')

const PaymentsAppResponseSchema = z
  .object({
    paymentsApps: z.array(PaymentsAppDtoSchema).openapi({ description: 'List of Payments Apps.' }),
  })
  .openapi({ required: ['paymentsApps'] })
  .openapi('PaymentsAppResponse')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRoute = createRoute({
  method: 'post',
  path: '/merchants/{merchantId}/generatePaymentsAppBoardingToken',
  tags: ['Payments App'],
  summary: 'Create a boarding token - merchant level',
  description:
    'Creates a boarding token used to authenticate the installation of a Payments App instance on a device. The boarding token is created for the `boardingRequestToken` of the Payments App for the merchant account identified in the path. \n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Adyen Payments App role\n',
  operationId: 'post-merchants-merchantId-generatePaymentsAppBoardingToken',
  request: {
    params: z.object({
      merchantId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'merchantId',
            in: 'path',
            description: 'The unique identifier of the merchant account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BoardingTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BoardingTokenResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getMerchantsMerchantIdPaymentsAppsRoute = createRoute({
  method: 'get',
  path: '/merchants/{merchantId}/paymentsApps',
  tags: ['Payments App'],
  summary: 'Get a list of Payments Apps - merchant level',
  description:
    'Returns the list of Payments App instances for the merchant account identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Adyen Payments App role\n',
  operationId: 'get-merchants-merchantId-paymentsApps',
  request: {
    params: z.object({
      merchantId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'merchantId',
            in: 'path',
            description: 'The unique identifier of the merchant account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    query: z.object({
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'statuses',
            in: 'query',
            description:
              'The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses. \n\nPossible values:\n\n* **BOARDING**\n\n * **BOARDED**\n\n * **REVOKED**',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
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
          z.int32().max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of items to return.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', default: 10, maximum: 100 },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'The number of items to skip.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', default: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: PaymentsAppResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRoute = createRoute({
  method: 'post',
  path: '/merchants/{merchantId}/paymentsApps/{installationId}/revoke',
  tags: ['Payments App'],
  summary: 'Revoke Payments App instance authentication',
  description:
    'Revokes the authentication of the Payments App instance for the `installationId` and merchant account identified in the path. This call revokes the authentication of the Payments App instance with the `installationId` identified in the path for both merchant accounts and stores.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Adyen Payments App role\n',
  operationId: 'post-merchants-merchantId-paymentsApps-installationId-revoke',
  request: {
    params: z.object({
      merchantId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'merchantId',
            in: 'path',
            description: 'The unique identifier of the merchant account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      installationId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'installationId',
            in: 'path',
            description: 'The unique identifier of the Payments App instance on a device.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK - the request has succeeded.', content: {} },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRoute =
  createRoute({
    method: 'post',
    path: '/merchants/{merchantId}/stores/{storeId}/generatePaymentsAppBoardingToken',
    tags: ['Payments App'],
    summary: 'Create a boarding token - store level',
    description:
      'Creates a boarding token used to authenticate the installation of a Payments App instance on a device. The boarding token is created for the `boardingRequestToken` of the Payments App for the store identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Adyen Payments App role\n',
    operationId: 'post-merchants-merchantId-stores-storeId-generatePaymentsAppBoardingToken',
    request: {
      params: z.object({
        merchantId: z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'merchantId',
              in: 'path',
              description: 'The unique identifier of the merchant account.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', minLength: 1 },
            },
          }),
        storeId: z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'storeId',
              in: 'path',
              description: 'The unique identifier of the store.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', minLength: 1 },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: BoardingTokenRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK - the request has succeeded.',
        content: { 'application/json': { schema: BoardingTokenResponseSchema } },
      },
      400: {
        description: 'Bad Request - a problem reading or understanding the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      401: {
        description: 'Unauthorized - authentication required.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      403: {
        description: 'Forbidden - insufficient permissions to process the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      422: {
        description: 'Unprocessable Entity - a request validation error.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      500: {
        description: 'Internal Server Error - the server could not process the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
    },
  })

export const getMerchantsMerchantIdStoresStoreIdPaymentsAppsRoute = createRoute({
  method: 'get',
  path: '/merchants/{merchantId}/stores/{storeId}/paymentsApps',
  tags: ['Payments App'],
  summary: 'Get a list of Payments Apps - store level',
  description:
    'Returns the list of Payments App instances for the store identified in the path.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):\n* Adyen Payments App role\n',
  operationId: 'get-merchants-merchantId-stores-storeId-paymentsApps',
  request: {
    params: z.object({
      merchantId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'merchantId',
            in: 'path',
            description: 'The unique identifier of the merchant account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', minLength: 1 },
          },
        }),
      storeId: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'storeId',
            in: 'path',
            description: 'The unique identifier of the store.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
    query: z.object({
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'statuses',
            in: 'query',
            description:
              'The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses. \n\nPossible values:\n\n* **BOARDING**\n\n * **BOARDED**\n\n * **REVOKED**',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
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
          z.int32().max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of items to return.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', default: 10, maximum: 100 },
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'The number of items to skip.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int64', default: 0 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: PaymentsAppResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})
