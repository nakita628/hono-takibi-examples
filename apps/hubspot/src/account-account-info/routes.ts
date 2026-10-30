import { createRoute, z } from '@hono/zod-openapi'

const ApiUsageSchema = z
  .object({
    collectedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the usage data was collected, in ISO 8601 format.',
        example: null,
      }),
    currentUsage: z
      .int32()
      .openapi({
        description: 'An integer indicating the current usage count of the API resource.',
        example: null,
      }),
    fetchStatus: z
      .enum(['CACHED', 'FAILURE', 'NOTFOUND', 'SUCCESS', 'TIMEOUT'])
      .openapi({
        description:
          "The status of the data fetch operation. Valid values include 'SUCCESS', 'TIMEOUT', 'FAILURE', 'CACHED', and 'NOTFOUND'.",
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the API resource being tracked.', example: null }),
    resetsAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the usage limit will reset, in ISO 8601 format.',
        example: null,
      }),
    usageLimit: z
      .int32()
      .openapi({
        description: 'An integer representing the maximum allowable usage for the API resource.',
        example: null,
      }),
  })
  .openapi({
    required: ['collectedAt', 'currentUsage', 'fetchStatus', 'name', 'usageLimit'],
    example: null,
  })
  .openapi('ApiUsage')

const CollectionResponseApiUsageNoPagingSchema = z
  .object({
    results: z
      .array(ApiUsageSchema)
      .openapi({
        description:
          'An array of API usage records, each detailing the usage metrics for a specific API. Each record includes information such as the name of the API, usage limits, current usage, and the status of the data fetch.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponseApiUsageNoPaging')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status code associated with the error detail. It is a string.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object where each key is a string and each value is an array of strings.',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the field or parameter in which the error was found. It is a string.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. It is a string.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error. It is a string.',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'The error category, represented as a string.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing context about the error condition. It maps property names to arrays of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request, represented as a UUID. Include this value with any error reports or support tickets.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array providing further information about the error, with each item being an ErrorDetail object.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps. Each value is a string.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. It is a string.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PortalInformationResponseSeptember2026Schema = z
  .object({
    accountType: z
      .enum(['APP_DEVELOPER', 'DEVELOPER_TEST', 'SANDBOX', 'STANDARD'])
      .openapi({
        description:
          "The type of account associated with the portal. Valid values include 'STANDARD', 'DEVELOPER_TEST', 'SANDBOX', and 'APP_DEVELOPER'.",
        example: null,
      }),
    additionalCurrencies: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of additional currencies supported by the portal, each represented as a string.',
        example: null,
      }),
    companyCurrency: z
      .string()
      .openapi({
        description: 'The primary currency used by the company, represented as a string.',
        example: null,
      }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The timestamp when the portal was created, represented as a Unix timestamp in milliseconds.',
        example: null,
      }),
    dataHostingLocation: z
      .string()
      .openapi({
        description: "The location where the portal's data is hosted, represented as a string.",
        example: null,
      }),
    portalId: z
      .int32()
      .openapi({
        description: 'The unique identifier for the HubSpot portal, represented as an integer.',
        example: null,
      }),
    portalName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the portal, represented as a string.', example: null }),
    timeZone: z
      .string()
      .openapi({
        description: 'The time zone setting of the portal, represented as a string.',
        example: null,
      }),
    uiDomain: z
      .string()
      .openapi({
        description: "The domain used for the portal's user interface, represented as a string.",
        example: null,
      }),
    utcOffset: z
      .string()
      .openapi({
        description: "The UTC offset of the portal's time zone, represented as a string.",
        example: null,
      }),
    utcOffsetMilliseconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "The UTC offset of the portal's time zone in milliseconds, represented as an integer.",
        example: null,
      }),
  })
  .openapi({
    required: [
      'accountType',
      'additionalCurrencies',
      'companyCurrency',
      'dataHostingLocation',
      'portalId',
      'timeZone',
      'uiDomain',
      'utcOffset',
      'utcOffsetMilliseconds',
    ],
    example: null,
  })
  .openapi('PortalInformationResponseSeptember2026')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: { 'account-info.security.read': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getAccountInfo202609ApiUsageDailyPrivateAppsRoute = createRoute({
  method: 'get',
  path: '/account-info/2026-09/api-usage/daily/private-apps',
  tags: ['Basic'],
  summary: 'Retrieve API Usage',
  description:
    'Retrieve the daily API usage for private apps in the account. This endpoint provides insights into the API consumption patterns, helping users monitor and manage their API usage effectively.',
  operationId: 'get-/account-info/2026-09/api-usage/daily/private-apps',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: CollectionResponseApiUsageNoPagingSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getAccountInfo202609DetailsRoute = createRoute({
  method: 'get',
  path: '/account-info/2026-09/details',
  tags: ['Basic'],
  summary: 'Retrieve details',
  description:
    "Retrieve detailed information about the account associated with the HubSpot portal. This endpoint provides insights into the account type, time zone, currency settings, and data hosting location. It is useful for obtaining a comprehensive overview of the account's configuration and settings.",
  operationId: 'get-/account-info/2026-09/details',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PortalInformationResponseSeptember2026Schema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})
