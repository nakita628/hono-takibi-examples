import { createRoute, z } from '@hono/zod-openapi'

const StateSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized name of the state, province, or territory' }),
    stateKey: z.string().exactOptional().openapi({ description: 'The state code' }),
  })
  .openapi({ required: [] })
  .openapi('State')

const CountrySchema = z
  .object({
    callingCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The calling code prefix used for phone numbers in this country' }),
    countryKey: z.string().exactOptional().openapi({ description: 'The ISO country-code' }),
    label: z.string().exactOptional().openapi({ description: 'The localized name of the country' }),
    states: z
      .array(StateSchema)
      .exactOptional()
      .openapi({ description: 'List of states/provinces in this country' }),
  })
  .openapi({ required: [] })
  .openapi('Country')

const ArrayOfCountrySchema = z.array(CountrySchema).openapi('ArrayOfCountry')

const CountrySummarySchema = z
  .object({
    callingCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The calling code prefix used for phone numbers in this country' }),
    countryKey: z.string().exactOptional().openapi({ description: 'The ISO country-code' }),
    label: z.string().exactOptional().openapi({ description: 'The localized name of the country' }),
  })
  .openapi({ required: [] })
  .openapi('CountrySummary')

const ArrayOfCountrySummarySchema = z.array(CountrySummarySchema).openapi('ArrayOfCountrySummary')

const ErrorFieldSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable, English description of the problem with the contents of the field',
      }),
    path: z
      .string()
      .openapi({
        description:
          'JSONPath referring to the field within the submitted data containing an error',
      }),
  })
  .openapi({ required: ['path', 'code'] })
  .openapi('ErrorField')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    stack: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Stack trace indicating where the error occurred.<br/>\nNOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.\nHowever, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems',
      }),
  })
  .openapi({ required: ['code'] })
  .openapi('Error')

const ErrorLimitSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    retryAfterSec: z
      .int()
      .openapi({ description: 'Number of seconds to wait before attempting a similar request' }),
    stack: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Stack trace indicating where the error occurred.<br/>\nNOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.\nHowever, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems',
      }),
  })
  .openapi({ required: ['retryAfterSec', 'code'] })
  .openapi('ErrorLimit')

export const getV1CountriesRoute = createRoute({
  method: 'get',
  path: '/v1/countries',
  tags: ['v1'],
  summary: 'Retrieves summary country information for the provided marketId and filters',
  description: 'Authorization is not required',
  operationId: 'getCountries',
  request: {
    query: z.object({
      marketId: z
        .string()
        .openapi({
          param: {
            description:
              'MarketId in which the request is being made, and for which responses should be localized',
            in: 'query',
            name: 'marketId',
            required: true,
            schema: { format: 'bcp-47', type: 'string' },
          },
        }),
      regionTypeId: z
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
              'Restrict countries to this region type; required if regionName is supplied',
            in: 'query',
            name: 'regionTypeId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      regionName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict countries to this region name; required if regionTypeId is supplied',
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .enum(['key', 'label'])
        .default('key')
        .exactOptional()
        .openapi({
          param: {
            description: 'The term to sort the result countries by.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { default: 'key', enum: ['key', 'label'], type: 'string' },
          },
        }),
      order: z
        .enum(['ascending', 'descending'])
        .default('ascending')
        .exactOptional()
        .openapi({
          param: {
            description: 'The direction to sort the result countries by.',
            in: 'query',
            name: 'order',
            required: false,
            schema: { default: 'ascending', enum: ['ascending', 'descending'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: ArrayOfCountrySummarySchema } },
    },
    422: {
      description:
        'marketId is required<br>regionTypeId is not a valid integer<br>regionName is required when regionTypeId is provided<br>regionTypeId is required when regionName is provided',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1CountriesCountryKeyRoute = createRoute({
  method: 'get',
  path: '/v1/countries/{countryKey}',
  tags: ['v1'],
  summary: 'Retrieves country and summary state information for provided countryKey',
  description: 'Authorization is not required',
  operationId: 'getCountry',
  request: {
    params: z.object({
      countryKey: z
        .string()
        .openapi({
          param: {
            description: 'The country key',
            in: 'path',
            name: 'countryKey',
            required: true,
            schema: { format: 'iso-country-code', type: 'string' },
          },
        }),
    }),
    query: z.object({
      marketId: z
        .string()
        .openapi({
          param: {
            description:
              'MarketId in which the request is being made, and for which responses should be localized',
            in: 'query',
            name: 'marketId',
            required: true,
            schema: { format: 'bcp-47', type: 'string' },
          },
        }),
      sort: z
        .enum(['key', 'label'])
        .default('key')
        .exactOptional()
        .openapi({
          param: {
            description: 'The term to sort the result country states by.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { default: 'key', enum: ['key', 'label'], type: 'string' },
          },
        }),
      order: z
        .enum(['ascending', 'descending'])
        .default('ascending')
        .exactOptional()
        .openapi({
          param: {
            description: 'The direction to sort the result country states by.',
            in: 'query',
            name: 'order',
            required: false,
            schema: { default: 'ascending', enum: ['ascending', 'descending'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: ArrayOfCountrySchema } },
    },
    404: {
      description: 'Country not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'marketId is required',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
