import { createRoute, z } from '@hono/zod-openapi'

const CitiesOrderSchema = z
  .enum(['city', 'country', 'firstUpdated', 'lastUpdated'])
  .openapi({ description: 'An enumeration.', title: 'CitiesOrder' })
  .openapi('CitiesOrder')

const CitiesRowSchema = z
  .object({
    city: z.string().openapi({ title: 'City' }),
    count: z.int().openapi({ title: 'Count' }),
    country: z.string().exactOptional().openapi({ title: 'Country' }),
    firstUpdated: z.iso.datetime({ offset: true }).openapi({ title: 'Firstupdated' }),
    lastUpdated: z.iso.datetime({ offset: true }).openapi({ title: 'Lastupdated' }),
    locations: z.int().openapi({ title: 'Locations' }),
    parameters: z.array(z.string()).openapi({ title: 'Parameters' }),
  })
  .openapi({
    required: ['city', 'count', 'locations', 'firstUpdated', 'lastUpdated', 'parameters'],
    title: 'CitiesRow',
  })
  .openapi('CitiesRow')

const CountriesOrderSchema = z
  .enum(['country', 'firstUpdated', 'lastUpdated', 'locations', 'count'])
  .openapi({ description: 'An enumeration.', title: 'CountriesOrder' })
  .openapi('CountriesOrder')

const CountriesRowSchema = z
  .object({
    cities: z.int().openapi({ title: 'Cities' }),
    code: z.string().openapi({ title: 'Code' }),
    count: z.int().openapi({ title: 'Count' }),
    firstUpdated: z.iso.datetime({ offset: true }).openapi({ title: 'Firstupdated' }),
    lastUpdated: z.iso.datetime({ offset: true }).openapi({ title: 'Lastupdated' }),
    locations: z.int().openapi({ title: 'Locations' }),
    name: z.string().openapi({ title: 'Name' }),
    parameters: z.array(z.string()).openapi({ title: 'Parameters' }),
    sources: z.int().openapi({ title: 'Sources' }),
  })
  .openapi({
    required: [
      'code',
      'name',
      'locations',
      'firstUpdated',
      'lastUpdated',
      'parameters',
      'count',
      'cities',
      'sources',
    ],
    title: 'CountriesRow',
  })
  .openapi('CountriesRow')

const EntityTypesSchema = z
  .enum(['government', 'community', 'research'])
  .openapi({ description: 'An enumeration.', title: 'EntityTypes' })
  .openapi('EntityTypes')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.string()).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const LocationsOrderSchema = z
  .enum([
    'city',
    'country',
    'location',
    'sourceName',
    'firstUpdated',
    'lastUpdated',
    'count',
    'random',
  ])
  .openapi({ description: 'An enumeration.', title: 'LocationsOrder' })
  .openapi('LocationsOrder')

const MeasOrderSchema = z
  .enum(['city', 'country', 'location', 'datetime'])
  .openapi({ description: 'An enumeration.', title: 'MeasOrder' })
  .openapi('MeasOrder')

const MetaSchema = z
  .object({
    found: z.int().default(0).exactOptional().openapi({ title: 'Found' }),
    license: z.string().default('CC BY 4.0d').exactOptional().openapi({ title: 'License' }),
    limit: z.int().default(100).exactOptional().openapi({ title: 'Limit' }),
    name: z.string().default('openaq-api').exactOptional().openapi({ title: 'Name' }),
    page: z.int().default(1).exactOptional().openapi({ title: 'Page' }),
    website: z.string().default('/').exactOptional().openapi({ title: 'Website' }),
  })
  .openapi({ title: 'Meta', required: [] })
  .openapi('Meta')

const OpenAQCitiesResultSchema = z
  .object({
    meta: MetaSchema.default({
      found: 0,
      license: 'CC BY 4.0d',
      limit: 100,
      name: 'openaq-api',
      page: 1,
      website: '/',
    })
      .exactOptional()
      .openapi({ title: 'Meta' }),
    results: z.array(CitiesRowSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results'], title: 'OpenAQCitiesResult' })
  .openapi('OpenAQCitiesResult')

const OpenAQCountriesResultSchema = z
  .object({
    meta: MetaSchema.default({
      found: 0,
      license: 'CC BY 4.0d',
      limit: 100,
      name: 'openaq-api',
      page: 1,
      website: '/',
    })
      .exactOptional()
      .openapi({ title: 'Meta' }),
    results: z.array(CountriesRowSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results'], title: 'OpenAQCountriesResult' })
  .openapi('OpenAQCountriesResult')

const ParametersRowSchema = z
  .object({
    description: z.string().openapi({ title: 'Description' }),
    displayName: z.string().openapi({ title: 'Displayname' }),
    id: z.int().openapi({ title: 'Id' }),
    isCore: z.boolean().exactOptional().openapi({ title: 'Iscore' }),
    maxColorValue: z.number().exactOptional().openapi({ title: 'Maxcolorvalue' }),
    name: z.string().openapi({ title: 'Name' }),
    preferredUnit: z.string().openapi({ title: 'Preferredunit' }),
  })
  .openapi({
    required: ['id', 'name', 'displayName', 'description', 'preferredUnit'],
    title: 'ParametersRow',
  })
  .openapi('ParametersRow')

const OpenAQParametersResultSchema = z
  .object({
    meta: MetaSchema.default({
      found: 0,
      license: 'CC BY 4.0d',
      limit: 100,
      name: 'openaq-api',
      page: 1,
      website: '/',
    })
      .exactOptional()
      .openapi({ title: 'Meta' }),
    results: z.array(ParametersRowSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results'], title: 'OpenAQParametersResult' })
  .openapi('OpenAQParametersResult')

const ProjectParameterDetailsSchema = z
  .object({
    average: z.number().openapi({ title: 'Average' }),
    count: z.int().openapi({ title: 'Count' }),
    displayName: z.string().exactOptional().openapi({ title: 'Displayname' }),
    firstUpdated: z.iso.datetime({ offset: true }).openapi({ title: 'Firstupdated' }),
    lastUpdated: z.iso.datetime({ offset: true }).openapi({ title: 'Lastupdated' }),
    lastValue: z.number().openapi({ title: 'Lastvalue' }),
    locations: z.int().openapi({ title: 'Locations' }),
    parameter: z.string().openapi({ title: 'Parameter' }),
    parameterId: z.int().openapi({ title: 'Parameterid' }),
    unit: z.string().openapi({ title: 'Unit' }),
  })
  .openapi({
    required: [
      'unit',
      'count',
      'average',
      'lastValue',
      'locations',
      'parameter',
      'lastUpdated',
      'firstUpdated',
      'parameterId',
    ],
    title: 'ProjectParameterDetails',
  })
  .openapi('ProjectParameterDetails')

const ProjectsRowSchema = z
  .object({
    bbox: z.array(z.number()).exactOptional().openapi({ title: 'Bbox' }),
    countries: z.array(z.string()).exactOptional().openapi({ title: 'Countries' }),
    entity: z.string().exactOptional().openapi({ title: 'Entity' }),
    firstUpdated: z.iso.datetime({ offset: true }).openapi({ title: 'Firstupdated' }),
    id: z.int().openapi({ title: 'Id' }),
    isAnalysis: z.boolean().exactOptional().openapi({ title: 'Isanalysis' }),
    isMobile: z.boolean().exactOptional().openapi({ title: 'Ismobile' }),
    lastUpdated: z.iso.datetime({ offset: true }).openapi({ title: 'Lastupdated' }),
    locationIds: z.array(z.int()).openapi({ title: 'Locationids' }),
    locations: z.int().openapi({ title: 'Locations' }),
    measurements: z.int().openapi({ title: 'Measurements' }),
    name: z.string().openapi({ title: 'Name' }),
    parameters: z.array(ProjectParameterDetailsSchema).openapi({ title: 'Parameters' }),
    sensorType: z.string().exactOptional().openapi({ title: 'Sensortype' }),
    sources: z.array(z.any()).exactOptional().openapi({ title: 'Sources' }),
    subtitle: z.string().openapi({ title: 'Subtitle' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'subtitle',
      'locations',
      'locationIds',
      'parameters',
      'measurements',
      'firstUpdated',
      'lastUpdated',
    ],
    title: 'ProjectsRow',
  })
  .openapi('ProjectsRow')

const OpenAQProjectsResultSchema = z
  .object({
    meta: MetaSchema.default({
      found: 0,
      license: 'CC BY 4.0d',
      limit: 100,
      name: 'openaq-api',
      page: 1,
      website: '/',
    })
      .exactOptional()
      .openapi({ title: 'Meta' }),
    results: z.array(ProjectsRowSchema).openapi({ title: 'Results' }),
  })
  .openapi({ required: ['results'], title: 'OpenAQProjectsResult' })
  .openapi('OpenAQProjectsResult')

const OpenAQResultSchema = z
  .object({
    meta: MetaSchema.default({
      found: 0,
      license: 'CC BY 4.0d',
      limit: 100,
      name: 'openaq-api',
      page: 1,
      website: '/',
    })
      .exactOptional()
      .openapi({ title: 'Meta' }),
    results: z.array(z.any()).default([]).exactOptional().openapi({ title: 'Results' }),
  })
  .openapi({ title: 'OpenAQResult', required: [] })
  .openapi('OpenAQResult')

const ProjectsOrderSchema = z
  .enum(['id', 'name', 'subtitle', 'firstUpdated', 'lastUpdated'])
  .openapi({ description: 'An enumeration.', title: 'ProjectsOrder' })
  .openapi('ProjectsOrder')

const SensorTypesSchema = z
  .enum(['reference grade', 'low-cost sensor'])
  .openapi({ description: 'An enumeration.', title: 'SensorTypes' })
  .openapi('SensorTypes')

const SortSchema = z
  .enum(['asc', 'desc'])
  .openapi({ description: 'An enumeration.', title: 'Sort' })
  .openapi('Sort')

const SourcesOrderSchema = z
  .enum(['sourceName', 'firstUpdated', 'lastUpdated'])
  .openapi({ description: 'An enumeration.', title: 'SourcesOrder' })
  .openapi('SourcesOrder')

const SourcesV1OrderSchema = z
  .literal('name')
  .openapi({ description: 'An enumeration.', title: 'SourcesV1Order' })
  .openapi('SourcesV1Order')

const SpatialSchema = z
  .enum(['country', 'location', 'project', 'total'])
  .openapi({ description: 'An enumeration.', title: 'Spatial' })
  .openapi('Spatial')

const TemporalSchema = z
  .enum(['day', 'month', 'year', 'moy', 'dow', 'hour', 'hod'])
  .openapi({ description: 'An enumeration.', title: 'Temporal' })
  .openapi('Temporal')

const TileJSONSchema = z
  .object({
    attribution: z.string().exactOptional().openapi({ title: 'Attribution' }),
    bounds: z
      .array(z.number())
      .default([-180, -90, 180, 90])
      .exactOptional()
      .openapi({ title: 'Bounds' }),
    data: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Data' }),
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    grids: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Grids' }),
    legend: z.string().exactOptional().openapi({ title: 'Legend' }),
    maxzoom: z.int().min(0).max(30).default(30).exactOptional().openapi({ title: 'Maxzoom' }),
    minzoom: z.int().min(0).max(30).default(0).exactOptional().openapi({ title: 'Minzoom' }),
    name: z.string().exactOptional().openapi({ title: 'Name' }),
    scheme: z.string().default('xyz').exactOptional().openapi({ title: 'Scheme' }),
    template: z.string().exactOptional().openapi({ title: 'Template' }),
    tilejson: z.string().default('2.2.0').exactOptional().openapi({ title: 'Tilejson' }),
    tiles: z.array(z.string()).openapi({ title: 'Tiles' }),
    version: z.string().default('1.0.0').exactOptional().openapi({ title: 'Version' }),
  })
  .openapi({
    description:
      'TileJSON model.\nBased on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0',
    required: ['tiles'],
    title: 'TileJSON',
  })
  .openapi('TileJSON')

export const getFaviconIcoRoute = createRoute({
  method: 'get',
  path: '/favicon.ico',
  summary: 'Favico',
  operationId: 'favico_favicon_ico_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const getPingRoute = createRoute({
  method: 'get',
  path: '/ping',
  summary: 'Pong',
  description:
    'Sanity check.\nThis will let the user know that the service is operational.\nAnd this path operation will:\n* show a lifesign',
  operationId: 'pong_ping_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const getV1CitiesRoute = createRoute({
  method: 'get',
  path: '/v1/cities',
  tags: ['v1'],
  summary: 'Provides a simple listing of cities within the platform',
  operationId: 'cities_getv1_v1_cities_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      order_by: CitiesOrderSchema.default('city')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/CitiesOrder' }],
              default: 'city',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      entity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'entity',
            required: false,
            schema: { title: 'Entity', type: 'string' },
          },
          title: 'Entity',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQCitiesResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1CountriesRoute = createRoute({
  method: 'get',
  path: '/v1/countries',
  tags: ['v1'],
  summary: 'Countries Getv1',
  operationId: 'countries_getv1_v1_countries_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 200, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      order_by: CountriesOrderSchema.default('country')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/CountriesOrder' }],
              default: 'country',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQCountriesResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1CountriesCountryIdRoute = createRoute({
  method: 'get',
  path: '/v1/countries/{country_id}',
  tags: ['v1'],
  summary: 'Countries Get',
  operationId: 'countries_get_v1_countries__country_id__get',
  request: {
    params: z.object({
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .openapi({
          param: {
            in: 'path',
            name: 'country_id',
            required: true,
            schema: {
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          title: 'Country Id',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 200, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      order_by: CountriesOrderSchema.default('country')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/CountriesOrder' }],
              default: 'country',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQCountriesResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LatestRoute = createRoute({
  method: 'get',
  path: '/v1/latest',
  tags: ['v1'],
  summary: 'Latest V1 Get',
  operationId: 'latest_v1_get_v1_latest_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort Direction',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Sort Direction',
            },
          },
          description: 'Sort Direction',
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location_id: z
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
            in: 'query',
            name: 'location_id',
            required: false,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: LocationsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/LocationsOrder' }],
              default: 'lastUpdated',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location is mobile',
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { description: 'Location is mobile', title: 'Ismobile', type: 'boolean' },
          },
          description: 'Location is mobile',
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Data is the product of a previous analysis/aggregation and not raw measurements',
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: {
              description:
                'Data is the product of a previous analysis/aggregation and not raw measurements',
              title: 'Isanalysis',
              type: 'boolean',
            },
          },
          description:
            'Data is the product of a previous analysis/aggregation and not raw measurements',
          title: 'Isanalysis',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the data source',
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: {
              description: 'Name of the data source',
              items: { type: 'string' },
              title: 'Sourcename',
              type: 'array',
            },
          },
          description: 'Name of the data source',
          title: 'Sourcename',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          description: 'Source entity type.',
          in: 'query',
          name: 'entity',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/EntityTypes' }],
            description: 'Source entity type.',
          },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          description: 'Type of Sensor',
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/SensorTypes' }],
            description: 'Type of Sensor',
          },
        },
      }).exactOptional(),
      modelName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Model Name of Sensor',
            in: 'query',
            name: 'modelName',
            required: false,
            schema: {
              description: 'Model Name of Sensor',
              items: { type: 'string' },
              title: 'Modelname',
              type: 'array',
            },
          },
          description: 'Model Name of Sensor',
          title: 'Modelname',
        }),
      manufacturerName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Manufacturer of Sensor',
            in: 'query',
            name: 'manufacturerName',
            required: false,
            schema: {
              description: 'Manufacturer of Sensor',
              items: { type: 'string' },
              title: 'Manufacturername',
              type: 'array',
            },
          },
          description: 'Manufacturer of Sensor',
          title: 'Manufacturername',
        }),
      dumpRaw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dumpRaw',
            required: false,
            schema: { default: false, title: 'Dumpraw', type: 'boolean' },
          },
          title: 'Dumpraw',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LatestLocationIdRoute = createRoute({
  method: 'get',
  path: '/v1/latest/{location_id}',
  tags: ['v1'],
  summary: 'Latest V1 Get',
  operationId: 'latest_v1_get_v1_latest__location_id__get',
  request: {
    params: z.object({
      location_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'location_id',
            required: true,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort Direction',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Sort Direction',
            },
          },
          description: 'Sort Direction',
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: LocationsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/LocationsOrder' }],
              default: 'lastUpdated',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location is mobile',
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { description: 'Location is mobile', title: 'Ismobile', type: 'boolean' },
          },
          description: 'Location is mobile',
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Data is the product of a previous analysis/aggregation and not raw measurements',
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: {
              description:
                'Data is the product of a previous analysis/aggregation and not raw measurements',
              title: 'Isanalysis',
              type: 'boolean',
            },
          },
          description:
            'Data is the product of a previous analysis/aggregation and not raw measurements',
          title: 'Isanalysis',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the data source',
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: {
              description: 'Name of the data source',
              items: { type: 'string' },
              title: 'Sourcename',
              type: 'array',
            },
          },
          description: 'Name of the data source',
          title: 'Sourcename',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          description: 'Source entity type.',
          in: 'query',
          name: 'entity',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/EntityTypes' }],
            description: 'Source entity type.',
          },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          description: 'Type of Sensor',
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/SensorTypes' }],
            description: 'Type of Sensor',
          },
        },
      }).exactOptional(),
      modelName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Model Name of Sensor',
            in: 'query',
            name: 'modelName',
            required: false,
            schema: {
              description: 'Model Name of Sensor',
              items: { type: 'string' },
              title: 'Modelname',
              type: 'array',
            },
          },
          description: 'Model Name of Sensor',
          title: 'Modelname',
        }),
      manufacturerName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Manufacturer of Sensor',
            in: 'query',
            name: 'manufacturerName',
            required: false,
            schema: {
              description: 'Manufacturer of Sensor',
              items: { type: 'string' },
              title: 'Manufacturername',
              type: 'array',
            },
          },
          description: 'Manufacturer of Sensor',
          title: 'Manufacturername',
        }),
      dumpRaw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dumpRaw',
            required: false,
            schema: { default: false, title: 'Dumpraw', type: 'boolean' },
          },
          title: 'Dumpraw',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LocationsRoute = createRoute({
  method: 'get',
  path: '/v1/locations',
  tags: ['v1'],
  summary: 'Locationsv1 Get',
  operationId: 'locationsv1_get_v1_locations_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort Direction',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Sort Direction',
            },
          },
          description: 'Sort Direction',
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location_id: z
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
            in: 'query',
            name: 'location_id',
            required: false,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: LocationsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/LocationsOrder' }],
              default: 'lastUpdated',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location is mobile',
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { description: 'Location is mobile', title: 'Ismobile', type: 'boolean' },
          },
          description: 'Location is mobile',
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Data is the product of a previous analysis/aggregation and not raw measurements',
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: {
              description:
                'Data is the product of a previous analysis/aggregation and not raw measurements',
              title: 'Isanalysis',
              type: 'boolean',
            },
          },
          description:
            'Data is the product of a previous analysis/aggregation and not raw measurements',
          title: 'Isanalysis',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the data source',
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: {
              description: 'Name of the data source',
              items: { type: 'string' },
              title: 'Sourcename',
              type: 'array',
            },
          },
          description: 'Name of the data source',
          title: 'Sourcename',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          description: 'Source entity type.',
          in: 'query',
          name: 'entity',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/EntityTypes' }],
            description: 'Source entity type.',
          },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          description: 'Type of Sensor',
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/SensorTypes' }],
            description: 'Type of Sensor',
          },
        },
      }).exactOptional(),
      modelName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Model Name of Sensor',
            in: 'query',
            name: 'modelName',
            required: false,
            schema: {
              description: 'Model Name of Sensor',
              items: { type: 'string' },
              title: 'Modelname',
              type: 'array',
            },
          },
          description: 'Model Name of Sensor',
          title: 'Modelname',
        }),
      manufacturerName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Manufacturer of Sensor',
            in: 'query',
            name: 'manufacturerName',
            required: false,
            schema: {
              description: 'Manufacturer of Sensor',
              items: { type: 'string' },
              title: 'Manufacturername',
              type: 'array',
            },
          },
          description: 'Manufacturer of Sensor',
          title: 'Manufacturername',
        }),
      dumpRaw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dumpRaw',
            required: false,
            schema: { default: false, title: 'Dumpraw', type: 'boolean' },
          },
          title: 'Dumpraw',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LocationsLocationIdRoute = createRoute({
  method: 'get',
  path: '/v1/locations/{location_id}',
  tags: ['v1'],
  summary: 'Locationsv1 Get',
  operationId: 'locationsv1_get_v1_locations__location_id__get',
  request: {
    params: z.object({
      location_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'location_id',
            required: true,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort Direction',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Sort Direction',
            },
          },
          description: 'Sort Direction',
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: LocationsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/LocationsOrder' }],
              default: 'lastUpdated',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location is mobile',
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { description: 'Location is mobile', title: 'Ismobile', type: 'boolean' },
          },
          description: 'Location is mobile',
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Data is the product of a previous analysis/aggregation and not raw measurements',
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: {
              description:
                'Data is the product of a previous analysis/aggregation and not raw measurements',
              title: 'Isanalysis',
              type: 'boolean',
            },
          },
          description:
            'Data is the product of a previous analysis/aggregation and not raw measurements',
          title: 'Isanalysis',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the data source',
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: {
              description: 'Name of the data source',
              items: { type: 'string' },
              title: 'Sourcename',
              type: 'array',
            },
          },
          description: 'Name of the data source',
          title: 'Sourcename',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          description: 'Source entity type.',
          in: 'query',
          name: 'entity',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/EntityTypes' }],
            description: 'Source entity type.',
          },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          description: 'Type of Sensor',
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/SensorTypes' }],
            description: 'Type of Sensor',
          },
        },
      }).exactOptional(),
      modelName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Model Name of Sensor',
            in: 'query',
            name: 'modelName',
            required: false,
            schema: {
              description: 'Model Name of Sensor',
              items: { type: 'string' },
              title: 'Modelname',
              type: 'array',
            },
          },
          description: 'Model Name of Sensor',
          title: 'Modelname',
        }),
      manufacturerName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Manufacturer of Sensor',
            in: 'query',
            name: 'manufacturerName',
            required: false,
            schema: {
              description: 'Manufacturer of Sensor',
              items: { type: 'string' },
              title: 'Manufacturername',
              type: 'array',
            },
          },
          description: 'Manufacturer of Sensor',
          title: 'Manufacturername',
        }),
      dumpRaw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dumpRaw',
            required: false,
            schema: { default: false, title: 'Dumpraw', type: 'boolean' },
          },
          title: 'Dumpraw',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1MeasurementsRoute = createRoute({
  method: 'get',
  path: '/v1/measurements',
  tags: ['v1'],
  summary: 'Measurements Get V1',
  operationId: 'measurements_get_v1_v1_measurements_get',
  request: {
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: { title: 'Format', type: 'string' },
          },
          title: 'Format',
        }),
      date_from: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .default('2000-01-01T00:00:00+00:00')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date_from',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              default: '2000-01-01T00:00:00+00:00',
              title: 'Date From',
            },
          },
          title: 'Date From',
        }),
      date_to: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .default('2021-08-23T09:48:00+00:00')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date_to',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              default: '2021-08-23T09:48:00+00:00',
              title: 'Date To',
            },
          },
          title: 'Date To',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/Sort' }], default: 'desc' },
          },
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location_id: z
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
            in: 'query',
            name: 'location_id',
            required: false,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: MeasOrderSchema.default('datetime')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/MeasOrder' }], default: 'datetime' },
          },
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { title: 'Ismobile', type: 'boolean' },
          },
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: { title: 'Isanalysis', type: 'boolean' },
          },
          title: 'Isanalysis',
        }),
      project: z
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
            in: 'query',
            name: 'project',
            required: false,
            schema: { title: 'Project', type: 'integer' },
          },
          title: 'Project',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          in: 'query',
          name: 'entity',
          required: false,
          schema: { $ref: '#/components/schemas/EntityTypes' },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: { $ref: '#/components/schemas/SensorTypes' },
        },
      }).exactOptional(),
      value_from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'value_from',
            required: false,
            schema: { title: 'Value From', type: 'number' },
          },
          title: 'Value From',
        }),
      value_to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'value_to',
            required: false,
            schema: { title: 'Value To', type: 'number' },
          },
          title: 'Value To',
        }),
      include_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include_fields',
            required: false,
            schema: { title: 'Include Fields', type: 'string' },
          },
          title: 'Include Fields',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ParametersRoute = createRoute({
  method: 'get',
  path: '/v1/parameters',
  tags: ['v1'],
  summary: 'Parameters Getv1',
  operationId: 'parameters_getv1_v1_parameters_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: { items: { type: 'string' }, title: 'Sourcename', type: 'array' },
          },
          title: 'Sourcename',
        }),
      sourceId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceId',
            required: false,
            schema: { items: { type: 'integer' }, title: 'Sourceid', type: 'array' },
          },
          title: 'Sourceid',
        }),
      sourceSlug: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceSlug',
            required: false,
            schema: { items: { type: 'string' }, title: 'Sourceslug', type: 'array' },
          },
          title: 'Sourceslug',
        }),
      order_by: z
        .union([z.string(), z.string(), z.string()])
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'string' }, { type: 'string' }],
              default: 'id',
              title: 'Order By',
            },
          },
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQParametersResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1SourcesRoute = createRoute({
  method: 'get',
  path: '/v1/sources',
  tags: ['v1'],
  summary: 'Sources V1 Get',
  operationId: 'sources_v1_get_v1_sources_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            required: false,
            schema: { title: 'Name', type: 'string' },
          },
          title: 'Name',
        }),
      order_by: SourcesV1OrderSchema.default('name')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/SourcesV1Order' }], default: 'name' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2AveragesRoute = createRoute({
  method: 'get',
  path: '/v2/averages',
  tags: ['v2'],
  summary: 'Averages V2 Get',
  operationId: 'averages_v2_get_v2_averages_get',
  request: {
    query: z.object({
      date_from: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .default('2000-01-01T00:00:00+00:00')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date_from',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              default: '2000-01-01T00:00:00+00:00',
              title: 'Date From',
            },
          },
          title: 'Date From',
        }),
      date_to: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .default('2021-08-23T09:48:00+00:00')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date_to',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              default: '2021-08-23T09:48:00+00:00',
              title: 'Date To',
            },
          },
          title: 'Date To',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      project_id: z
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
            in: 'query',
            name: 'project_id',
            required: false,
            schema: { title: 'Project Id', type: 'integer' },
          },
          title: 'Project Id',
        }),
      project: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'project',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Project',
              type: 'array',
            },
          },
          title: 'Project',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      spatial: SpatialSchema.openapi({
        param: {
          in: 'query',
          name: 'spatial',
          required: true,
          schema: { $ref: '#/components/schemas/Spatial' },
        },
      }),
      temporal: TemporalSchema.openapi({
        param: {
          in: 'query',
          name: 'temporal',
          required: true,
          schema: { $ref: '#/components/schemas/Temporal' },
        },
      }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: { items: { type: 'string' }, title: 'Location', type: 'array' },
          },
          title: 'Location',
        }),
      group: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'group',
            required: false,
            schema: { default: false, title: 'Group', type: 'boolean' },
          },
          title: 'Group',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2CitiesRoute = createRoute({
  method: 'get',
  path: '/v2/cities',
  tags: ['v2'],
  summary: 'Provides a simple listing of cities within the platform',
  operationId: 'cities_get_v2_cities_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      order_by: CitiesOrderSchema.default('city')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/CitiesOrder' }],
              default: 'city',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      entity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'entity',
            required: false,
            schema: { title: 'Entity', type: 'string' },
          },
          title: 'Entity',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQCitiesResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2CountriesRoute = createRoute({
  method: 'get',
  path: '/v2/countries',
  tags: ['v2'],
  summary: 'Countries Get',
  operationId: 'countries_get_v2_countries_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 200, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      order_by: CountriesOrderSchema.default('country')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/CountriesOrder' }],
              default: 'country',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQCountriesResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2CountriesCountryIdRoute = createRoute({
  method: 'get',
  path: '/v2/countries/{country_id}',
  tags: ['v2'],
  summary: 'Countries Get',
  operationId: 'countries_get_v2_countries__country_id__get',
  request: {
    params: z.object({
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .openapi({
          param: {
            in: 'path',
            name: 'country_id',
            required: true,
            schema: {
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          title: 'Country Id',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(200)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 200, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      order_by: CountriesOrderSchema.default('country')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/CountriesOrder' }],
              default: 'country',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQCountriesResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2LatestRoute = createRoute({
  method: 'get',
  path: '/v2/latest',
  tags: ['v2'],
  summary: 'Latest Get',
  operationId: 'latest_get_v2_latest_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort Direction',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Sort Direction',
            },
          },
          description: 'Sort Direction',
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location_id: z
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
            in: 'query',
            name: 'location_id',
            required: false,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: LocationsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/LocationsOrder' }],
              default: 'lastUpdated',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location is mobile',
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { description: 'Location is mobile', title: 'Ismobile', type: 'boolean' },
          },
          description: 'Location is mobile',
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Data is the product of a previous analysis/aggregation and not raw measurements',
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: {
              description:
                'Data is the product of a previous analysis/aggregation and not raw measurements',
              title: 'Isanalysis',
              type: 'boolean',
            },
          },
          description:
            'Data is the product of a previous analysis/aggregation and not raw measurements',
          title: 'Isanalysis',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the data source',
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: {
              description: 'Name of the data source',
              items: { type: 'string' },
              title: 'Sourcename',
              type: 'array',
            },
          },
          description: 'Name of the data source',
          title: 'Sourcename',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          description: 'Source entity type.',
          in: 'query',
          name: 'entity',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/EntityTypes' }],
            description: 'Source entity type.',
          },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          description: 'Type of Sensor',
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/SensorTypes' }],
            description: 'Type of Sensor',
          },
        },
      }).exactOptional(),
      modelName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Model Name of Sensor',
            in: 'query',
            name: 'modelName',
            required: false,
            schema: {
              description: 'Model Name of Sensor',
              items: { type: 'string' },
              title: 'Modelname',
              type: 'array',
            },
          },
          description: 'Model Name of Sensor',
          title: 'Modelname',
        }),
      manufacturerName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Manufacturer of Sensor',
            in: 'query',
            name: 'manufacturerName',
            required: false,
            schema: {
              description: 'Manufacturer of Sensor',
              items: { type: 'string' },
              title: 'Manufacturername',
              type: 'array',
            },
          },
          description: 'Manufacturer of Sensor',
          title: 'Manufacturername',
        }),
      dumpRaw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dumpRaw',
            required: false,
            schema: { default: false, title: 'Dumpraw', type: 'boolean' },
          },
          title: 'Dumpraw',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2LatestLocationIdRoute = createRoute({
  method: 'get',
  path: '/v2/latest/{location_id}',
  tags: ['v2'],
  summary: 'Latest Get',
  operationId: 'latest_get_v2_latest__location_id__get',
  request: {
    params: z.object({
      location_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'location_id',
            required: true,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort Direction',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Sort Direction',
            },
          },
          description: 'Sort Direction',
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: LocationsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/LocationsOrder' }],
              default: 'lastUpdated',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location is mobile',
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { description: 'Location is mobile', title: 'Ismobile', type: 'boolean' },
          },
          description: 'Location is mobile',
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Data is the product of a previous analysis/aggregation and not raw measurements',
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: {
              description:
                'Data is the product of a previous analysis/aggregation and not raw measurements',
              title: 'Isanalysis',
              type: 'boolean',
            },
          },
          description:
            'Data is the product of a previous analysis/aggregation and not raw measurements',
          title: 'Isanalysis',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the data source',
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: {
              description: 'Name of the data source',
              items: { type: 'string' },
              title: 'Sourcename',
              type: 'array',
            },
          },
          description: 'Name of the data source',
          title: 'Sourcename',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          description: 'Source entity type.',
          in: 'query',
          name: 'entity',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/EntityTypes' }],
            description: 'Source entity type.',
          },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          description: 'Type of Sensor',
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/SensorTypes' }],
            description: 'Type of Sensor',
          },
        },
      }).exactOptional(),
      modelName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Model Name of Sensor',
            in: 'query',
            name: 'modelName',
            required: false,
            schema: {
              description: 'Model Name of Sensor',
              items: { type: 'string' },
              title: 'Modelname',
              type: 'array',
            },
          },
          description: 'Model Name of Sensor',
          title: 'Modelname',
        }),
      manufacturerName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Manufacturer of Sensor',
            in: 'query',
            name: 'manufacturerName',
            required: false,
            schema: {
              description: 'Manufacturer of Sensor',
              items: { type: 'string' },
              title: 'Manufacturername',
              type: 'array',
            },
          },
          description: 'Manufacturer of Sensor',
          title: 'Manufacturername',
        }),
      dumpRaw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dumpRaw',
            required: false,
            schema: { default: false, title: 'Dumpraw', type: 'boolean' },
          },
          title: 'Dumpraw',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2LocationsRoute = createRoute({
  method: 'get',
  path: '/v2/locations',
  tags: ['v2'],
  summary: 'Locations Get',
  operationId: 'locations_get_v2_locations_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort Direction',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Sort Direction',
            },
          },
          description: 'Sort Direction',
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location_id: z
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
            in: 'query',
            name: 'location_id',
            required: false,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: LocationsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/LocationsOrder' }],
              default: 'lastUpdated',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location is mobile',
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { description: 'Location is mobile', title: 'Ismobile', type: 'boolean' },
          },
          description: 'Location is mobile',
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Data is the product of a previous analysis/aggregation and not raw measurements',
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: {
              description:
                'Data is the product of a previous analysis/aggregation and not raw measurements',
              title: 'Isanalysis',
              type: 'boolean',
            },
          },
          description:
            'Data is the product of a previous analysis/aggregation and not raw measurements',
          title: 'Isanalysis',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the data source',
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: {
              description: 'Name of the data source',
              items: { type: 'string' },
              title: 'Sourcename',
              type: 'array',
            },
          },
          description: 'Name of the data source',
          title: 'Sourcename',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          description: 'Source entity type.',
          in: 'query',
          name: 'entity',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/EntityTypes' }],
            description: 'Source entity type.',
          },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          description: 'Type of Sensor',
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/SensorTypes' }],
            description: 'Type of Sensor',
          },
        },
      }).exactOptional(),
      modelName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Model Name of Sensor',
            in: 'query',
            name: 'modelName',
            required: false,
            schema: {
              description: 'Model Name of Sensor',
              items: { type: 'string' },
              title: 'Modelname',
              type: 'array',
            },
          },
          description: 'Model Name of Sensor',
          title: 'Modelname',
        }),
      manufacturerName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Manufacturer of Sensor',
            in: 'query',
            name: 'manufacturerName',
            required: false,
            schema: {
              description: 'Manufacturer of Sensor',
              items: { type: 'string' },
              title: 'Manufacturername',
              type: 'array',
            },
          },
          description: 'Manufacturer of Sensor',
          title: 'Manufacturername',
        }),
      dumpRaw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dumpRaw',
            required: false,
            schema: { default: false, title: 'Dumpraw', type: 'boolean' },
          },
          title: 'Dumpraw',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2LocationsTilesMobileGeneralizedTilesJsonRoute = createRoute({
  method: 'get',
  path: '/v2/locations/tiles/mobile-generalized/tiles.json',
  tags: ['v2'],
  summary: 'Mobilegentilejson',
  operationId: 'mobilegentilejson_v2_locations_tiles_mobile_generalized_tiles_json_get',
  responses: {
    200: {
      description: 'Return a tilejson',
      content: { 'application/json': { schema: TileJSONSchema } },
    },
  },
})

export const getV2LocationsTilesMobileGeneralizedZXYPbfRoute = createRoute({
  method: 'get',
  path: '/v2/locations/tiles/mobile-generalized/{z}/{x}/{y}.pbf',
  tags: ['v2'],
  summary: 'Get Mobilegentile',
  operationId: 'get_mobilegentile_v2_locations_tiles_mobile_generalized__z___x___y__pbf_get',
  request: {
    params: z.object({
      z: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'z', required: true, schema: { title: 'Z', type: 'integer' } },
          title: 'Z',
        }),
      x: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'x', required: true, schema: { title: 'X', type: 'integer' } },
          title: 'X',
        }),
      y: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'y', required: true, schema: { title: 'Y', type: 'integer' } },
          title: 'Y',
        }),
    }),
    query: z.object({
      parameter: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.union([z.int(), z.string()]))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'string' }], title: 'Parameter' },
          },
          title: 'Parameter',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'limit data to location id',
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              description: 'limit data to location id',
              items: { type: 'integer' },
              title: 'Location',
              type: 'array',
            },
          },
          description: 'limit data to location id',
          title: 'Location',
        }),
      lastUpdatedFrom: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lastUpdatedFrom',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              title: 'Lastupdatedfrom',
            },
          },
          title: 'Lastupdatedfrom',
        }),
      lastUpdatedTo: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lastUpdatedTo',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              title: 'Lastupdatedto',
            },
          },
          title: 'Lastupdatedto',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { title: 'Ismobile', type: 'boolean' },
          },
          title: 'Ismobile',
        }),
      project: z
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
            in: 'query',
            name: 'project',
            required: false,
            schema: { title: 'Project', type: 'integer' },
          },
          title: 'Project',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: { title: 'Isanalysis', type: 'boolean' },
          },
          title: 'Isanalysis',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: {} },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2LocationsTilesMobileTilesJsonRoute = createRoute({
  method: 'get',
  path: '/v2/locations/tiles/mobile/tiles.json',
  tags: ['v2'],
  summary: 'Mobiletilejson',
  operationId: 'mobiletilejson_v2_locations_tiles_mobile_tiles_json_get',
  responses: {
    200: {
      description: 'Return a tilejson',
      content: { 'application/json': { schema: TileJSONSchema } },
    },
  },
})

export const getV2LocationsTilesMobileZXYPbfRoute = createRoute({
  method: 'get',
  path: '/v2/locations/tiles/mobile/{z}/{x}/{y}.pbf',
  tags: ['v2'],
  summary: 'Get Mobiletile',
  operationId: 'get_mobiletile_v2_locations_tiles_mobile__z___x___y__pbf_get',
  request: {
    params: z.object({
      z: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'z', required: true, schema: { title: 'Z', type: 'integer' } },
          title: 'Z',
        }),
      x: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'x', required: true, schema: { title: 'X', type: 'integer' } },
          title: 'X',
        }),
      y: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'y', required: true, schema: { title: 'Y', type: 'integer' } },
          title: 'Y',
        }),
    }),
    query: z.object({
      dateFrom: z.union([z.iso.datetime({ offset: true }), z.iso.date()]).openapi({
        param: {
          in: 'query',
          name: 'dateFrom',
          required: true,
          schema: {
            anyOf: [
              { format: 'date-time', type: 'string' },
              { format: 'date', type: 'string' },
            ],
            title: 'Datefrom',
          },
        },
        title: 'Datefrom',
      }),
      dateTo: z.union([z.iso.datetime({ offset: true }), z.iso.date()]).openapi({
        param: {
          in: 'query',
          name: 'dateTo',
          required: true,
          schema: {
            anyOf: [
              { format: 'date-time', type: 'string' },
              { format: 'date', type: 'string' },
            ],
            title: 'Dateto',
          },
        },
        title: 'Dateto',
      }),
      parameter: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.union([z.int(), z.string()]))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'string' }], title: 'Parameter' },
          },
          title: 'Parameter',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'limit data to location id',
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              description: 'limit data to location id',
              items: { type: 'integer' },
              title: 'Location',
              type: 'array',
            },
          },
          description: 'limit data to location id',
          title: 'Location',
        }),
      lastUpdatedFrom: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lastUpdatedFrom',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              title: 'Lastupdatedfrom',
            },
          },
          title: 'Lastupdatedfrom',
        }),
      lastUpdatedTo: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lastUpdatedTo',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              title: 'Lastupdatedto',
            },
          },
          title: 'Lastupdatedto',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { title: 'Ismobile', type: 'boolean' },
          },
          title: 'Ismobile',
        }),
      project: z
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
            in: 'query',
            name: 'project',
            required: false,
            schema: { title: 'Project', type: 'integer' },
          },
          title: 'Project',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: { title: 'Isanalysis', type: 'boolean' },
          },
          title: 'Isanalysis',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: {} },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2LocationsTilesTilesJsonRoute = createRoute({
  method: 'get',
  path: '/v2/locations/tiles/tiles.json',
  tags: ['v2'],
  summary: 'Tilejson',
  operationId: 'tilejson_v2_locations_tiles_tiles_json_get',
  responses: {
    200: {
      description: 'Return a tilejson',
      content: { 'application/json': { schema: TileJSONSchema } },
    },
  },
})

export const getV2LocationsTilesViewerRoute = createRoute({
  method: 'get',
  path: '/v2/locations/tiles/viewer',
  tags: ['v2'],
  summary: 'Demo',
  operationId: 'demo_v2_locations_tiles_viewer_get',
  responses: {
    200: { description: 'Successful Response', content: { 'text/html': { schema: z.string() } } },
  },
})

export const getV2LocationsTilesZXYPbfRoute = createRoute({
  method: 'get',
  path: '/v2/locations/tiles/{z}/{x}/{y}.pbf',
  tags: ['v2'],
  summary: 'Get Tile',
  operationId: 'get_tile_v2_locations_tiles__z___x___y__pbf_get',
  request: {
    params: z.object({
      z: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'z', required: true, schema: { title: 'Z', type: 'integer' } },
          title: 'Z',
        }),
      x: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'x', required: true, schema: { title: 'X', type: 'integer' } },
          title: 'X',
        }),
      y: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'y', required: true, schema: { title: 'Y', type: 'integer' } },
          title: 'Y',
        }),
    }),
    query: z.object({
      parameter: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.union([z.int(), z.string()]))
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: { anyOf: [{ type: 'integer' }, { type: 'string' }], title: 'Parameter' },
          },
          title: 'Parameter',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'limit data to location id',
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              description: 'limit data to location id',
              items: { type: 'integer' },
              title: 'Location',
              type: 'array',
            },
          },
          description: 'limit data to location id',
          title: 'Location',
        }),
      lastUpdatedFrom: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lastUpdatedFrom',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              title: 'Lastupdatedfrom',
            },
          },
          title: 'Lastupdatedfrom',
        }),
      lastUpdatedTo: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lastUpdatedTo',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              title: 'Lastupdatedto',
            },
          },
          title: 'Lastupdatedto',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { title: 'Ismobile', type: 'boolean' },
          },
          title: 'Ismobile',
        }),
      project: z
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
            in: 'query',
            name: 'project',
            required: false,
            schema: { title: 'Project', type: 'integer' },
          },
          title: 'Project',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: { title: 'Isanalysis', type: 'boolean' },
          },
          title: 'Isanalysis',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: {} },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2LocationsLocationIdRoute = createRoute({
  method: 'get',
  path: '/v2/locations/{location_id}',
  tags: ['v2'],
  summary: 'Locations Get',
  operationId: 'locations_get_v2_locations__location_id__get',
  request: {
    params: z.object({
      location_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'location_id',
            required: true,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort Direction',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'desc',
              description: 'Sort Direction',
            },
          },
          description: 'Sort Direction',
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: LocationsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by a field',
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/LocationsOrder' }],
              default: 'lastUpdated',
              description: 'Order by a field',
            },
          },
          description: 'Order by a field',
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location is mobile',
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { description: 'Location is mobile', title: 'Ismobile', type: 'boolean' },
          },
          description: 'Location is mobile',
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Data is the product of a previous analysis/aggregation and not raw measurements',
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: {
              description:
                'Data is the product of a previous analysis/aggregation and not raw measurements',
              title: 'Isanalysis',
              type: 'boolean',
            },
          },
          description:
            'Data is the product of a previous analysis/aggregation and not raw measurements',
          title: 'Isanalysis',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the data source',
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: {
              description: 'Name of the data source',
              items: { type: 'string' },
              title: 'Sourcename',
              type: 'array',
            },
          },
          description: 'Name of the data source',
          title: 'Sourcename',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          description: 'Source entity type.',
          in: 'query',
          name: 'entity',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/EntityTypes' }],
            description: 'Source entity type.',
          },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          description: 'Type of Sensor',
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: {
            allOf: [{ $ref: '#/components/schemas/SensorTypes' }],
            description: 'Type of Sensor',
          },
        },
      }).exactOptional(),
      modelName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Model Name of Sensor',
            in: 'query',
            name: 'modelName',
            required: false,
            schema: {
              description: 'Model Name of Sensor',
              items: { type: 'string' },
              title: 'Modelname',
              type: 'array',
            },
          },
          description: 'Model Name of Sensor',
          title: 'Modelname',
        }),
      manufacturerName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Manufacturer of Sensor',
            in: 'query',
            name: 'manufacturerName',
            required: false,
            schema: {
              description: 'Manufacturer of Sensor',
              items: { type: 'string' },
              title: 'Manufacturername',
              type: 'array',
            },
          },
          description: 'Manufacturer of Sensor',
          title: 'Manufacturername',
        }),
      dumpRaw: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dumpRaw',
            required: false,
            schema: { default: false, title: 'Dumpraw', type: 'boolean' },
          },
          title: 'Dumpraw',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2ManufacturersRoute = createRoute({
  method: 'get',
  path: '/v2/manufacturers',
  tags: ['v2'],
  summary: 'Mfr Get',
  operationId: 'mfr_get_v2_manufacturers_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
  },
})

export const getV2MeasurementsRoute = createRoute({
  method: 'get',
  path: '/v2/measurements',
  tags: ['v2'],
  summary: 'Measurements Get',
  operationId: 'measurements_get_v2_measurements_get',
  request: {
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: { title: 'Format', type: 'string' },
          },
          title: 'Format',
        }),
      date_from: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .default('2000-01-01T00:00:00+00:00')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date_from',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              default: '2000-01-01T00:00:00+00:00',
              title: 'Date From',
            },
          },
          title: 'Date From',
        }),
      date_to: z
        .union([z.iso.datetime({ offset: true }), z.iso.date()])
        .default('2021-08-23T09:48:00+00:00')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date_to',
            required: false,
            schema: {
              anyOf: [
                { format: 'date-time', type: 'string' },
                { format: 'date', type: 'string' },
              ],
              default: '2021-08-23T09:48:00+00:00',
              title: 'Date To',
            },
          },
          title: 'Date To',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/Sort' }], default: 'desc' },
          },
        }),
      has_geo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'has_geo',
            required: false,
            schema: { title: 'Has Geo', type: 'boolean' },
          },
          title: 'Has Geo',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      coordinates: z
        .string()
        .regex(/^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'coordinates',
            required: false,
            schema: {
              pattern: '^-?\\d{1,2}\\.?\\d{0,8},-?1?\\d{1,2}\\.?\\d{0,8}$',
              title: 'Coordinates',
              type: 'string',
            },
          },
          title: 'Coordinates',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: {
              default: 1000,
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Radius',
              type: 'integer',
            },
          },
          title: 'Radius',
        }),
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      city: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
            in: 'query',
            name: 'city',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
              items: { type: 'string' },
              title: 'City',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain city or cities.\n        (ex. ?city=Chicago or ?city=Chicago&city=Boston)\n        ',
          title: 'City',
        }),
      location_id: z
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
            in: 'query',
            name: 'location_id',
            required: false,
            schema: { title: 'Location Id', type: 'integer' },
          },
          title: 'Location Id',
        }),
      location: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int(), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'location',
            required: false,
            schema: {
              items: { anyOf: [{ type: 'integer' }, { type: 'string' }] },
              title: 'Location',
              type: 'array',
            },
          },
          title: 'Location',
        }),
      order_by: MeasOrderSchema.default('datetime')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/MeasOrder' }], default: 'datetime' },
          },
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { title: 'Ismobile', type: 'boolean' },
          },
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: { title: 'Isanalysis', type: 'boolean' },
          },
          title: 'Isanalysis',
        }),
      project: z
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
            in: 'query',
            name: 'project',
            required: false,
            schema: { title: 'Project', type: 'integer' },
          },
          title: 'Project',
        }),
      entity: EntityTypesSchema.openapi({
        param: {
          in: 'query',
          name: 'entity',
          required: false,
          schema: { $ref: '#/components/schemas/EntityTypes' },
        },
      }).exactOptional(),
      sensorType: SensorTypesSchema.openapi({
        param: {
          in: 'query',
          name: 'sensorType',
          required: false,
          schema: { $ref: '#/components/schemas/SensorTypes' },
        },
      }).exactOptional(),
      value_from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'value_from',
            required: false,
            schema: { title: 'Value From', type: 'number' },
          },
          title: 'Value From',
        }),
      value_to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'value_to',
            required: false,
            schema: { title: 'Value To', type: 'number' },
          },
          title: 'Value To',
        }),
      include_fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include_fields',
            required: false,
            schema: { title: 'Include Fields', type: 'string' },
          },
          title: 'Include Fields',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2ModelsRoute = createRoute({
  method: 'get',
  path: '/v2/models',
  tags: ['v2'],
  summary: 'Model Get',
  operationId: 'model_get_v2_models_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
  },
})

export const getV2ParametersRoute = createRoute({
  method: 'get',
  path: '/v2/parameters',
  tags: ['v2'],
  summary: 'Parameters Get',
  operationId: 'parameters_get_v2_parameters_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: { items: { type: 'string' }, title: 'Sourcename', type: 'array' },
          },
          title: 'Sourcename',
        }),
      sourceId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceId',
            required: false,
            schema: { items: { type: 'integer' }, title: 'Sourceid', type: 'array' },
          },
          title: 'Sourceid',
        }),
      sourceSlug: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceSlug',
            required: false,
            schema: { items: { type: 'string' }, title: 'Sourceslug', type: 'array' },
          },
          title: 'Sourceslug',
        }),
      order_by: z
        .union([z.string(), z.string(), z.string()])
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'string' }, { type: 'string' }],
              default: 'id',
              title: 'Order By',
            },
          },
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQParametersResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2ProjectsRoute = createRoute({
  method: 'get',
  path: '/v2/projects',
  tags: ['v2'],
  summary: 'Projects Get',
  operationId: 'projects_get_v2_projects_get',
  request: {
    query: z.object({
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      project_id: z
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
            in: 'query',
            name: 'project_id',
            required: false,
            schema: { title: 'Project Id', type: 'integer' },
          },
          title: 'Project Id',
        }),
      project: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'project',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Project',
              type: 'array',
            },
          },
          title: 'Project',
        }),
      order_by: ProjectsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/ProjectsOrder' }],
              default: 'lastUpdated',
            },
          },
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { title: 'Ismobile', type: 'boolean' },
          },
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: { title: 'Isanalysis', type: 'boolean' },
          },
          title: 'Isanalysis',
        }),
      entity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'entity',
            required: false,
            schema: { title: 'Entity', type: 'string' },
          },
          title: 'Entity',
        }),
      sensorType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sensorType',
            required: false,
            schema: { title: 'Sensortype', type: 'string' },
          },
          title: 'Sensortype',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: { items: { type: 'string' }, title: 'Sourcename', type: 'array' },
          },
          title: 'Sourcename',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQProjectsResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2ProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{project_id}',
  tags: ['v2'],
  summary: 'Projects Get',
  operationId: 'projects_get_v2_projects__project_id__get',
  request: {
    params: z.object({
      project_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'project_id',
            required: true,
            schema: { title: 'Project Id', type: 'integer' },
          },
          title: 'Project Id',
        }),
    }),
    query: z.object({
      country_id: z
        .string()
        .regex(/[a-zA-Z][a-zA-Z]/)
        .length(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
            in: 'query',
            name: 'country_id',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
              maxLength: 2,
              minLength: 2,
              pattern: '[a-zA-Z][a-zA-Z]',
              title: 'Country Id',
              type: 'string',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. /US)\n        ',
          title: 'Country Id',
        }),
      country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/[a-zA-Z][a-zA-Z]/)
              .length(2),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              description:
                '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
              items: { maxLength: 2, minLength: 2, pattern: '[a-zA-Z][a-zA-Z]', type: 'string' },
              title: 'Country',
              type: 'array',
            },
          },
          description:
            '\n        Limit results by a certain country using two letter country code.\n        (ex. ?country=US or ?country=US&country=MX)\n        ',
          title: 'Country',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      parameter_id: z
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
            in: 'query',
            name: 'parameter_id',
            required: false,
            schema: { title: 'Parameter Id', type: 'integer' },
          },
          title: 'Parameter Id',
        }),
      parameter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parameter',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Parameter',
              type: 'array',
            },
          },
          title: 'Parameter',
        }),
      unit: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'unit',
            required: false,
            schema: { items: { type: 'string' }, title: 'Unit', type: 'array' },
          },
          title: 'Unit',
        }),
      project: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            ((schema) =>
              z.union([
                z.preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  schema,
                ),
                schema,
              ]))(z.union([z.int().positive().max(2147483647), z.string()])),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'project',
            required: false,
            schema: {
              items: {
                anyOf: [
                  { exclusiveMinimum: true, maximum: 2147483647, minimum: 0, type: 'integer' },
                  { type: 'string' },
                ],
              },
              title: 'Project',
              type: 'array',
            },
          },
          title: 'Project',
        }),
      order_by: ProjectsOrderSchema.default('lastUpdated')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/ProjectsOrder' }],
              default: 'lastUpdated',
            },
          },
        }),
      isMobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isMobile',
            required: false,
            schema: { title: 'Ismobile', type: 'boolean' },
          },
          title: 'Ismobile',
        }),
      isAnalysis: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'isAnalysis',
            required: false,
            schema: { title: 'Isanalysis', type: 'boolean' },
          },
          title: 'Isanalysis',
        }),
      entity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'entity',
            required: false,
            schema: { title: 'Entity', type: 'string' },
          },
          title: 'Entity',
        }),
      sensorType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sensorType',
            required: false,
            schema: { title: 'Sensortype', type: 'string' },
          },
          title: 'Sensortype',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: { items: { type: 'string' }, title: 'Sourcename', type: 'array' },
          },
          title: 'Sourcename',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQProjectsResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2SourcesRoute = createRoute({
  method: 'get',
  path: '/v2/sources',
  tags: ['v2'],
  summary: 'Sources Get',
  operationId: 'sources_get_v2_sources_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(100000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Change the number of results returned.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 100,
              description: 'Change the number of results returned.',
              exclusiveMinimum: true,
              maximum: 100000,
              minimum: 0,
              title: 'Limit',
              type: 'integer',
            },
          },
          description: 'Change the number of results returned.',
          title: 'Limit',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(6000),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Paginate through results.',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'Paginate through results.',
              exclusiveMinimum: true,
              maximum: 6000,
              minimum: 0,
              title: 'Page',
              type: 'integer',
            },
          },
          description: 'Paginate through results.',
          title: 'Page',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, maximum: 10000, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
      sort: SortSchema.default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Define sort order.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Sort' }],
              default: 'asc',
              description: 'Define sort order.',
            },
          },
          description: 'Define sort order.',
        }),
      sourceName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceName',
            required: false,
            schema: { items: { type: 'string' }, title: 'Sourcename', type: 'array' },
          },
          title: 'Sourcename',
        }),
      sourceId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceId',
            required: false,
            schema: { items: { type: 'integer' }, title: 'Sourceid', type: 'array' },
          },
          title: 'Sourceid',
        }),
      sourceSlug: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceSlug',
            required: false,
            schema: { items: { type: 'string' }, title: 'Sourceslug', type: 'array' },
          },
          title: 'Sourceslug',
        }),
      order_by: SourcesOrderSchema.default('sourceName')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/SourcesOrder' }],
              default: 'sourceName',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2SourcesReadmeSlugRoute = createRoute({
  method: 'get',
  path: '/v2/sources/readme/{slug}',
  tags: ['v2'],
  summary: 'Readme Get',
  operationId: 'readme_get_v2_sources_readme__slug__get',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'slug',
            required: true,
            schema: { title: 'Slug', type: 'string' },
          },
          title: 'Slug',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV2SummaryRoute = createRoute({
  method: 'get',
  path: '/v2/summary',
  tags: ['v2'],
  summary: 'Summary Get',
  operationId: 'summary_get_v2_summary_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAQResultSchema } },
    },
  },
})
