import { createRoute, z } from '@hono/zod-openapi'

const ApiVersionSchema = z
  .strictObject({
    added: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the version was added' }),
    externalDocs: z
      .object({})
      .refine((val) => Object.keys(val).length >= 1)
      .exactOptional()
      .openapi({ description: 'Copy of `externalDocs` section from OpenAPI definition' }),
    info: z
      .object({})
      .refine((val) => Object.keys(val).length >= 1)
      .openapi({ description: 'Copy of `info` section from OpenAPI definition' }),
    link: z
      .url()
      .exactOptional()
      .openapi({ description: 'Link to the individual API entry for this API' }),
    openapiVer: z
      .string()
      .openapi({
        description: 'The value of the `openapi` or `swagger` property of the source definition',
      }),
    swaggerUrl: z.url().openapi({ description: 'URL to OpenAPI definition in JSON format' }),
    swaggerYamlUrl: z.url().openapi({ description: 'URL to OpenAPI definition in YAML format' }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the version was updated' }),
  })
  .openapi({ required: ['added', 'updated', 'swaggerUrl', 'swaggerYamlUrl', 'info', 'openapiVer'] })
  .openapi('ApiVersion')

const APISchema = z
  .strictObject({
    added: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the API was first added to the directory' }),
    preferred: z.string().openapi({ description: 'Recommended version' }),
    versions: z
      .record(z.string(), ApiVersionSchema)
      .refine((val) => Object.keys(val).length >= 1)
      .openapi({ description: 'List of supported versions of the API' }),
  })
  .openapi({
    description: 'Meta information about API',
    required: ['added', 'preferred', 'versions'],
  })
  .openapi('API')

const APIsSchema = z
  .record(z.string(), APISchema)
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description:
      'List of API details.\nIt is a JSON object with API IDs(`<provider>[:<service>]`) as keys.\n',
    example: {
      'googleapis.com:drive': {
        added: '2015-02-22T20:00:45.000Z',
        preferred: 'v3',
        versions: {
          v2: {
            added: '2015-02-22T20:00:45.000Z',
            info: {
              title: 'Drive',
              version: 'v2',
              'x-apiClientRegistration': { url: 'https://console.developers.google.com' },
              'x-logo': {
                url: 'https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png',
              },
              'x-origin': {
                format: 'google',
                url: 'https://www.googleapis.com/discovery/v1/apis/drive/v2/rest',
                version: 'v1',
              },
              'x-preferred': false,
              'x-providerName': 'googleapis.com',
              'x-serviceName': 'drive',
            },
            swaggerUrl: 'https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.json',
            swaggerYamlUrl: 'https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.yaml',
            updated: '2016-06-17T00:21:44.000Z',
          },
          v3: {
            added: '2015-12-12T00:25:13.000Z',
            info: {
              title: 'Drive',
              version: 'v3',
              'x-apiClientRegistration': { url: 'https://console.developers.google.com' },
              'x-logo': {
                url: 'https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png',
              },
              'x-origin': {
                format: 'google',
                url: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
                version: 'v1',
              },
              'x-preferred': true,
              'x-providerName': 'googleapis.com',
              'x-serviceName': 'drive',
            },
            swaggerUrl: 'https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.json',
            swaggerYamlUrl: 'https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.yaml',
            updated: '2016-06-17T00:21:44.000Z',
          },
        },
      },
    },
  })
  .openapi('APIs')

const MetricsSchema = z
  .strictObject({
    datasets: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Data used for charting etc' }),
    fixedPct: z
      .int()
      .exactOptional()
      .openapi({ description: 'Percentage of all APIs where auto fixes have been applied' }),
    fixes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of fixes applied across all APIs' }),
    invalid: z.int().exactOptional().openapi({ description: 'Number of newly invalid APIs' }),
    issues: z.int().exactOptional().openapi({ description: 'Open GitHub issues on our main repo' }),
    numAPIs: z.int().min(1).openapi({ description: 'Number of unique APIs' }),
    numDrivers: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of methods of API retrieval' }),
    numEndpoints: z
      .int()
      .min(1)
      .openapi({ description: 'Total number of endpoints inside all definitions' }),
    numProviders: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of API providers in directory' }),
    numSpecs: z
      .int()
      .min(1)
      .openapi({
        description: 'Number of API definitions including different versions of the same API',
      }),
    stars: z.int().exactOptional().openapi({ description: 'GitHub stars for our main repo' }),
    thisWeek: z
      .object({
        added: z.int().exactOptional().openapi({ description: 'APIs added in the last week' }),
        updated: z.int().exactOptional().openapi({ description: 'APIs updated in the last week' }),
      })
      .exactOptional()
      .openapi({ description: 'Summary totals for the last 7 days', required: [] }),
    unofficial: z.int().exactOptional().openapi({ description: 'Number of unofficial APIs' }),
    unreachable: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of unreachable (4XX,5XX status) APIs' }),
  })
  .openapi({
    description: 'List of basic metrics',
    example: {
      datasets: [],
      fixedPct: 22,
      fixes: 81119,
      invalid: 598,
      issues: 28,
      numAPIs: 2501,
      numDrivers: 10,
      numEndpoints: 106448,
      numProviders: 659,
      numSpecs: 3329,
      stars: 2429,
      thisWeek: { added: 45, updated: 171 },
      unofficial: 25,
      unreachable: 123,
    },
    required: ['numSpecs', 'numAPIs', 'numEndpoints'],
  })
  .openapi('Metrics')

const ApiParamsSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({
    param: {
      in: 'path',
      name: 'api',
      required: true,
      schema: { example: '2.1.0', maxLength: 255, minLength: 1, type: 'string' },
    },
    example: '2.1.0',
  })

const ProviderParamsSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({
    param: {
      in: 'path',
      name: 'provider',
      required: true,
      schema: { example: 'apis.guru', maxLength: 255, minLength: 1, type: 'string' },
    },
    example: 'apis.guru',
  })

export const getListJsonRoute = createRoute({
  method: 'get',
  path: '/list.json',
  tags: ['APIs'],
  summary: 'List all APIs',
  description:
    'List all APIs in the directory.\nReturns links to the OpenAPI definitions for each API in the directory.\nIf API exist in multiple versions `preferred` one is explicitly marked.\nSome basic info from the OpenAPI definition is cached inside each object.\nThis allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.\n',
  operationId: 'listAPIs',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: APIsSchema } } },
  },
})

export const getMetricsJsonRoute = createRoute({
  method: 'get',
  path: '/metrics.json',
  tags: ['APIs'],
  summary: 'Get basic metrics',
  description:
    'Some basic metrics for the entire directory.\nJust stunning numbers to put on a front page and are intended purely for WoW effect :)\n',
  operationId: 'getMetrics',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MetricsSchema } } },
  },
})

export const getProvidersJsonRoute = createRoute({
  method: 'get',
  path: '/providers.json',
  tags: ['APIs'],
  summary: 'List all providers',
  description: 'List all the providers in the directory\n',
  operationId: 'getProviders',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(z.string().min(1)).min(1).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSpecsProviderApiJsonRoute = createRoute({
  method: 'get',
  path: '/specs/{provider}/{api}.json',
  tags: ['APIs'],
  summary: 'Retrieve one version of a particular API',
  description:
    'Returns the API entry for one specific version of an API where there is no serviceName.',
  operationId: 'getAPI',
  request: { params: z.object({ provider: ProviderParamsSchema, api: ApiParamsSchema }) },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: APISchema } } } },
})

export const getSpecsProviderServiceApiJsonRoute = createRoute({
  method: 'get',
  path: '/specs/{provider}/{service}/{api}.json',
  tags: ['APIs'],
  summary: 'Retrieve one version of a particular API with a serviceName.',
  description:
    'Returns the API entry for one specific version of an API where there is a serviceName.',
  operationId: 'getServiceAPI',
  request: {
    params: z.object({
      provider: ProviderParamsSchema,
      service: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            in: 'path',
            name: 'service',
            required: true,
            schema: { example: 'graph', maxLength: 255, minLength: 1, type: 'string' },
          },
          example: 'graph',
        }),
      api: ApiParamsSchema,
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: APISchema } } } },
})

export const getProviderJsonRoute = createRoute({
  method: 'get',
  path: '/{provider}.json',
  tags: ['APIs'],
  summary: 'List all APIs for a particular provider',
  description:
    'List all APIs in the directory for a particular providerName\nReturns links to the individual API entry for each API.\n',
  operationId: 'getProvider',
  request: { params: z.object({ provider: ProviderParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: APIsSchema } } },
  },
})

export const getProviderServicesJsonRoute = createRoute({
  method: 'get',
  path: '/{provider}/services.json',
  tags: ['APIs'],
  summary: 'List all serviceNames for a particular provider',
  description: 'List all serviceNames in the directory for a particular providerName\n',
  operationId: 'getServices',
  request: { params: z.object({ provider: ProviderParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(z.string().min(0)).min(1).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
