import { createRoute, z } from '@hono/zod-openapi'

const NetworkObjectSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency used for prices for this network.', example: 'EUR' }),
    mcc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) of the operator.',
        example: '302',
      }),
    mnc: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Mobile Network Code of the operator.', example: '530' }),
    networkCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Mobile Country Code and Mobile Network Code combined to give a unique reference for the operator.',
        example: '302530',
      }),
    networkName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The company/organisational name of the operator.',
        example: 'Keewaytinook Okimakanak',
      }),
    price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The cost to send a message or make a call to this network',
        example: '0.00590000',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of network: mobile or landline.', example: 'mobile' }),
  })
  .openapi({ required: [] })
  .openapi('NetworkObject')

const CountryObjectSchema = z
  .object({
    countryDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Readable country name.', example: 'Canada' }),
    countryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Readable country name.', example: 'Canada' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD.',
        example: 'EUR',
      }),
    defaultPrice: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default price.', example: '0.00620000' }),
    dialingPrefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dialling prefix.', example: '1' }),
    networks: z
      .array(NetworkObjectSchema)
      .exactOptional()
      .openapi({ description: 'An array of network objects' }),
  })
  .openapi({ required: [] })
  .openapi('CountryObject')

const PricingCountriesResponseSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of countries retrieved.', example: '243' }),
    countries: z
      .array(CountryObjectSchema)
      .exactOptional()
      .openapi({ description: 'A list of countries.' }),
  })
  .openapi({ required: [] })
  .openapi('PricingCountriesResponse')

const PricingCountryResponseSchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Two letter country code.', example: 'CA' }),
    countryDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Readable country name.', example: 'Canada' }),
    countryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Readable country name.', example: 'Canada' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD.',
        example: 'EUR',
      }),
    defaultPrice: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default price.', example: '0.00620000' }),
    dialingPrefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dialling prefix.', example: '1' }),
    networks: z
      .array(NetworkObjectSchema)
      .exactOptional()
      .openapi({ description: 'An array of network objects' }),
  })
  .openapi({ required: [] })
  .openapi('PricingCountryResponse')

const BadRequestErrorResponse = {
  description: 'Bad request. You probably provided an invalid parameter.',
  content: {
    'application/json': {
      schema: z
        .object({
          error_title: z.string().openapi({ example: 'Bad Request' }),
          invalid_parameters: z
            .object({
              message: z.string().exactOptional().openapi({ example: 'Is required' }),
              parameter: z.string().exactOptional().openapi({ example: 'country' }),
            })
            .openapi({ required: [] }),
          type: z.string().openapi({ example: 'BAD_REQUEST' }),
        })
        .openapi({ required: ['type', 'error_title', 'invalid_parameters'] }),
    },
  },
}

const NotFoundErrorResponse = { description: 'The page you requested was not found' }

const TooManyRequestsErrorResponse = {
  description: 'You made too many requests. The API is rate limited to one request per second.',
}

const UnauthorizedErrorResponse = {
  description: 'You did not provide valid credentials',
  content: {
    'application/json': {
      schema: z
        .object({
          code: z.string().openapi({ example: '401' }),
          currency: z.string().openapi({ example: 'EUR' }),
          'error-code-label': z.string().openapi({ example: 'authentication failed' }),
        })
        .openapi({ required: ['currency', 'code', 'error-code-label'] }),
    },
  },
}

const ApiKeyParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Your Nexmo API key.',
      in: 'query',
      name: 'api_key',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiSecretParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Your Nexmo API secret.',
      in: 'query',
      name: 'api_secret',
      required: true,
      schema: { type: 'string' },
    },
  })

const TypeParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.',
      example: 'sms',
      in: 'path',
      name: 'type',
      required: true,
      schema: { type: 'string' },
    },
  })

export const getGetFullPricingOutboundTypeRoute = createRoute({
  method: 'get',
  path: '/get-full-pricing/outbound/{type}',
  tags: ['Pricing'],
  summary: 'Retrieve outbound pricing for all countries.',
  description: 'Retrieves the pricing information for all countries.\n',
  operationId: 'retrievePricingAllCountries',
  request: {
    params: z.object({ type: TypeParamsSchema }),
    query: z.object({ api_key: ApiKeyParamsSchema, api_secret: ApiSecretParamsSchema }),
  },
  responses: {
    200: {
      description: 'Pricing response',
      content: { 'application/json': { schema: PricingCountriesResponseSchema } },
    },
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
    429: TooManyRequestsErrorResponse,
  },
})

export const getGetPrefixPricingOutboundTypeRoute = createRoute({
  method: 'get',
  path: '/get-prefix-pricing/outbound/{type}',
  tags: ['Pricing'],
  summary: 'Retrieve outbound pricing for a specific dialing prefix.',
  description: 'Retrieves the pricing information based on the dialing prefix.\n',
  operationId: 'retrievePrefixPricing',
  request: {
    params: z.object({ type: TypeParamsSchema }),
    query: z.object({
      api_key: ApiKeyParamsSchema,
      api_secret: ApiSecretParamsSchema,
      prefix: z
        .string()
        .openapi({
          param: {
            description:
              'The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on.',
            in: 'query',
            name: 'prefix',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pricing countries response',
      content: { 'application/json': { schema: PricingCountriesResponseSchema } },
    },
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
    429: TooManyRequestsErrorResponse,
  },
})

export const getGetPricingOutboundTypeRoute = createRoute({
  method: 'get',
  path: '/get-pricing/outbound/{type}',
  tags: ['Pricing'],
  summary: 'Retrieve outbound pricing for a specific country.',
  description: 'Retrieves the pricing information based on the specified country.\n',
  operationId: 'retrievePricingCountry',
  request: {
    params: z.object({ type: TypeParamsSchema }),
    query: z.object({
      api_key: ApiKeyParamsSchema,
      api_secret: ApiSecretParamsSchema,
      country: z
        .string()
        .openapi({
          param: {
            description:
              'A two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, `CA`.',
            in: 'query',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pricing information for a specific country.',
      content: { 'application/json': { schema: PricingCountryResponseSchema } },
    },
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
    429: TooManyRequestsErrorResponse,
  },
})
