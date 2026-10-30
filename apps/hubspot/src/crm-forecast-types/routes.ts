import { createRoute, z } from '@hono/zod-openapi'

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
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
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
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

const ForecastTypeDealSplitPropertiesSchema = z
  .object({
    dealCustomAmountProperty: z
      .string()
      .openapi({
        description: 'A string representing a custom amount property for a deal.',
        example: null,
      }),
    dealCustomAmountPropertyInHomeCurrency: z
      .string()
      .openapi({
        description:
          'A string representing a custom amount property for a deal, expressed in the home currency.',
        example: null,
      }),
    dealCustomDateProperty: z
      .string()
      .openapi({
        description: 'A string representing a custom date property for a deal.',
        example: null,
      }),
    dealSplitCustomAmountProperty: z
      .string()
      .openapi({
        description: 'A string representing a custom amount property for a deal split.',
        example: null,
      }),
    dealSplitCustomAmountPropertyInHomeCurrency: z
      .string()
      .openapi({
        description:
          'A string representing a custom amount property for a deal split, expressed in the home currency.',
        example: null,
      }),
    dealSplitWeightedCustomAmountProperty: z
      .string()
      .openapi({
        description: 'A string representing a weighted custom amount property for a deal split.',
        example: null,
      }),
    dealSplitWeightedCustomAmountPropertyInHomeCurrency: z
      .string()
      .openapi({
        description:
          'A string representing a weighted custom amount property for a deal split, expressed in the home currency.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'dealCustomAmountProperty',
      'dealCustomAmountPropertyInHomeCurrency',
      'dealCustomDateProperty',
      'dealSplitCustomAmountProperty',
      'dealSplitCustomAmountPropertyInHomeCurrency',
      'dealSplitWeightedCustomAmountProperty',
      'dealSplitWeightedCustomAmountPropertyInHomeCurrency',
    ],
    example: null,
  })
  .openapi('ForecastTypeDealSplitProperties')

const ForecastTypeSettingPublicResponseSchema = z
  .object({
    amountInHomeCurrencyProperty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the property for the amount in the home currency.',
        example: null,
      }),
    amountOrDatePropertyRestrictedForUser: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the amount or date property is restricted for the user.',
        example: null,
      }),
    amountProperty: z
      .string()
      .openapi({
        description:
          'The property used to represent the amount in the forecast, specified as a string.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the forecast type was created, in ISO 8601 format.',
        example: null,
      }),
    createdAtTimestamp: z
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
          'An integer representing the timestamp of creation, in milliseconds since the Unix epoch.',
        example: null,
      }),
    createdBy: z
      .int32()
      .openapi({
        description: 'An integer representing the ID of the user who created the forecast type.',
        example: null,
      }),
    dateProperty: z
      .string()
      .openapi({
        description:
          'The property used to represent the date in the forecast, specified as a string.',
        example: null,
      }),
    dealSplitProperties: ForecastTypeDealSplitPropertiesSchema.exactOptional(),
    defaultType: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this forecast type is the default.',
        example: null,
      }),
    forecastName: z
      .string()
      .openapi({
        description: 'The name of the forecast type, represented as a string.',
        example: null,
      }),
    forecastTypeId: z
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
        description: 'An integer identifier for the forecast type.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A string identifier for the forecast type setting.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description: 'A string identifier for the object type associated with the forecast.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the forecast type was last updated, in ISO 8601 format.',
        example: null,
      }),
    updatedBy: z
      .int32()
      .openapi({
        description:
          'An integer representing the ID of the user who last updated the forecast type.',
        example: null,
      }),
    updatedTimestamp: z
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
          'An integer representing the timestamp of the last update, in milliseconds since the Unix epoch.',
        example: null,
      }),
    weightedAmountInHomeCurrencyProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the property for the weighted amount in the home currency.',
        example: null,
      }),
    weightedAmountProperty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The property representing the weighted amount, specified as a string.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'amountOrDatePropertyRestrictedForUser',
      'amountProperty',
      'createdAt',
      'createdAtTimestamp',
      'createdBy',
      'dateProperty',
      'defaultType',
      'forecastName',
      'forecastTypeId',
      'id',
      'objectTypeId',
      'updatedAt',
      'updatedBy',
      'updatedTimestamp',
    ],
    example: null,
  })
  .openapi('ForecastTypeSettingPublicResponse')

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
      scopes: {},
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getForecastSettings202609ForecastTypesRoute = createRoute({
  method: 'get',
  path: '/forecast-settings/2026-09/forecast-types',
  tags: ['Basic'],
  summary: 'Retrieve forecast types',
  description:
    'Returns all forecast types configured for the portal. Forecast types define which properties are used to calculate forecasts. This endpoint is useful for retrieving the different forecast configurations available in your HubSpot account, allowing you to understand how forecasts are generated based on various properties.',
  operationId:
    'get-/forecast-settings/2026-09/forecast-types_/forecast-settings/2026-09-beta/forecast-types',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ForecastTypeSettingPublicResponseSchema, example: null },
      },
    },
    401: { description: 'Unauthorized - missing or invalid authentication', content: {} },
    403: { description: 'Forbidden - insufficient permissions', content: {} },
    default: ErrorResponse,
  },
  security: [],
})

export const getForecastSettings202609ForecastTypesForecastTypeIdRoute = createRoute({
  method: 'get',
  path: '/forecast-settings/2026-09/forecast-types/{forecastTypeId}',
  tags: ['Basic'],
  summary: 'Retrieve a forecast type',
  description:
    'Retrieve a specific forecast type by its ID from the HubSpot account. This endpoint is useful for accessing detailed information about a particular forecast type, which defines the properties used in forecasting calculations.',
  operationId:
    'get-/forecast-settings/2026-09/forecast-types/{forecastTypeId}_/forecast-settings/2026-09-beta/forecast-types/{forecastTypeId}',
  request: {
    params: z.object({
      forecastTypeId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'forecastTypeId',
            in: 'path',
            description: 'The ID of the forecast type to retrieve',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ForecastTypeSettingPublicResponseSchema, example: null },
      },
    },
    401: { description: 'Unauthorized - missing or invalid authentication', content: {} },
    403: { description: 'Forbidden - insufficient permissions', content: {} },
    404: { description: 'Forecast type not found', content: {} },
    default: ErrorResponse,
  },
  security: [],
})
