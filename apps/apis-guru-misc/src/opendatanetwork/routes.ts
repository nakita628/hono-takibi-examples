import { createRoute, z } from '@hono/zod-openapi'

const DataAvailabilitySchema = z.any().openapi('DataAvailability')

const DataConstraintsSchema = z.any().openapi('DataConstraints')

const DataValuesSchema = z.any().openapi('DataValues')

const EntityLookupSchema = z.any().openapi('EntityLookup')

const EntityRelationshipsSchema = z.any().openapi('EntityRelationships')

const MapCreationSchema = z.any().openapi('MapCreation')

const SearchDatasetsSchema = z.any().openapi('SearchDatasets')

const SearchQuestionsSchema = z.any().openapi('SearchQuestions')

const SuggestionsSchema = z.any().openapi('Suggestions')

export const getDataV1AvailabilityIndexRoute = createRoute({
  method: 'get',
  path: '/data/v1/availability/',
  tags: [],
  summary: 'Find all available data for some entities',
  operationId: 'Find all available data for some entities',
  request: {
    query: z.object({
      entity_id: z
        .string()
        .openapi({
          param: {
            description: 'Comma separated list of entity IDs.',
            example: '0100000US,0400000US53',
            in: 'query',
            name: 'entity_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getDataV1ConstraintVariableRoute = createRoute({
  method: 'get',
  path: '/data/v1/constraint/{variable}',
  tags: [],
  summary: 'Get constraint permutations for entities',
  operationId: 'Get constraint permutations for entities',
  request: {
    params: z.object({
      variable: z
        .string()
        .openapi({
          param: {
            description: 'Full ID of the variable to retrieve.',
            example: 'demographics.population.count',
            in: 'path',
            name: 'variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      entity_id: z
        .string()
        .openapi({
          param: {
            description: 'Comma separated list of entity IDs.',
            example: '0100000US,0400000US53',
            in: 'query',
            name: 'entity_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      constraint: z
        .string()
        .openapi({
          param: {
            description: 'Constraint to use.',
            example: 'year',
            in: 'query',
            name: 'constraint',
            required: true,
            schema: { type: 'string' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getDataV1MapNewRoute = createRoute({
  method: 'get',
  path: '/data/v1/map/new',
  tags: [],
  summary: 'Create a map',
  operationId: 'Create a map',
  request: {
    query: z.object({
      variable: z
        .string()
        .openapi({
          param: {
            description: 'A single variable ID.',
            example: 'demographics.population.count',
            in: 'query',
            name: 'variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity_id: z
        .string()
        .openapi({
          param: {
            description:
              'A comma separated list of entity IDs.\nEntities must have the same type and represent geographical regions.',
            example: '0400000US53,0400000US08',
            in: 'query',
            name: 'entity_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      constraint: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Values must be specified for each constraint in the dataset.\nFor example, to generate map data for `demographics.population.count`,\nyou must specify a value for `year` by passing `year=2013`.',
            in: 'query',
            name: 'constraint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getDataV1ValuesRoute = createRoute({
  method: 'get',
  path: '/data/v1/values',
  tags: [],
  summary: 'Get values for variables',
  operationId: 'Get values for variables',
  request: {
    query: z.object({
      variable: z
        .string()
        .openapi({
          param: {
            description:
              'Comma separated list of variable IDs.\nDefaults to retrieving all variables.\nIt is also possible to pass in a topic such as\n`demographics`, or a dataset such as `demographics.population`,\nwhich would both be equivalent to specifying\n`demographics.population.count` and `demographics.population.change`.\nNote that only variables in the same dataset are allowed.',
            example: 'demographics.population.count',
            in: 'query',
            name: 'variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
      entity_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of entity IDs.\nDefaults to retrieving all entities.\nNote that since there is currently no results pagination,\nretrieving values for all entities may produce incomplete results.',
            example: '0100000US,0400000US53',
            in: 'query',
            name: 'entity_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      forecast: z
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
            description:
              'Number of steps to forecast.\nMust be an integer between 0 and 20.\nForecasts are produced using linear extrapolation\non the data. They are only available when retrieving\ndata for a single variable across many numerical\nconstraint options.\n\n+ Default `0`',
            example: '3',
            in: 'query',
            name: 'forecast',
            required: false,
            schema: { type: 'number' },
          },
        }),
      describe: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether or not to produce a description of the data.\nSet to `true` to produce a description.\nDescriptions are not available if no entities are specified.\n\n+ Default `false`',
            example: 'false',
            in: 'query',
            name: 'describe',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      format: z
        .literal('google')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If format is set to `google`, the data frame will be formatted\nas a [Google Visualizations data table](https://developers.google.com/chart/interactive/docs/reference#datatable-class).\nIf the format is not provided or invalid, then the frame\nwill be formatted normally.',
            in: 'query',
            name: 'format',
            required: false,
            schema: { enum: ['google'], type: 'string' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEntityV1Route = createRoute({
  method: 'get',
  path: '/entity/v1',
  tags: [],
  summary: 'Get Entities',
  operationId: 'Get Entities',
  request: {
    query: z.object({
      entity_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the entity.',
            example: '0400000US53',
            in: 'query',
            name: 'entity_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      entity_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the entity.',
            example: 'washington',
            in: 'query',
            name: 'entity_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      entity_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the entity.',
            example: 'region.state',
            in: 'query',
            name: 'entity_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEntityV1RelationRoute = createRoute({
  method: 'get',
  path: '/entity/v1/{relation}',
  tags: [],
  summary: 'Find the relatives of an entity',
  operationId: 'Find the relatives of an entity',
  request: {
    params: z.object({
      relation: z
        .enum(['parent', 'child', 'sibling', 'peer'])
        .openapi({
          param: {
            description: 'The type of relation to find.',
            example: 'parent',
            in: 'path',
            name: 'relation',
            required: true,
            schema: { enum: ['parent', 'child', 'sibling', 'peer'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      entity_id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the target entity.',
            example: '0400000US53',
            in: 'query',
            name: 'entity_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      variable_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If this parameter is included, only entities with data for the given\nvariable will be returned. Note that this may cause the number of\nentities returned to be less than the specified `limit`.',
            example: 'demographics.population.seattle',
            in: 'query',
            name: 'variable_id',
            required: false,
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
          z.number(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of entities in each group.\nMust be an integer from 1 to 1000.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 10, type: 'number' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSearchV1DatasetRoute = createRoute({
  method: 'get',
  path: '/search/v1/dataset',
  tags: [],
  summary: 'Get datasets',
  operationId: 'Get datasets',
  request: {
    query: z.object({
      entity_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Entities to use in formulating the query.',
            example: '0100000US',
            in: 'query',
            name: 'entity_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      dataset_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If included, the search terms of the dataset\nwill be used in the query.',
            example: 'demographics.population',
            in: 'query',
            name: 'dataset_id',
            required: false,
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
          z.number(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of results to return.\nMust be an integer from 0 to 50000.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 10, type: 'number' },
          },
        }),
      offset: z
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
            description: 'Number of results to skip.\nUsed for pagination.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'number' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSearchV1QuestionRoute = createRoute({
  method: 'get',
  path: '/search/v1/question',
  tags: [],
  summary: 'Get questions',
  operationId: 'Get questions',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'String to search against.',
            example: 'seattle',
            in: 'query',
            name: 'query',
            required: true,
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
          z.number(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of results to return.\nMust be an integer from 0 to 50000.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 10, type: 'number' },
          },
        }),
      offset: z
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
            description: 'Number of results to skip.\nUsed for pagination.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'number' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSuggestV1TypeRoute = createRoute({
  method: 'get',
  path: '/suggest/v1/{type}',
  tags: [],
  summary: 'Get suggestions',
  operationId: 'Get suggestions',
  request: {
    params: z.object({
      type: z
        .enum(['entity', 'category', 'publisher', 'dataset', 'question'])
        .openapi({
          param: {
            description: 'Type of the object to find.',
            example: 'entity',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['entity', 'category', 'publisher', 'dataset', 'question'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query to match.',
            example: 'seattl',
            in: 'query',
            name: 'query',
            required: true,
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
          z.number(),
        )
        .default(5)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.\nMust be an integer from 0 to 100.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 5, type: 'number' },
          },
        }),
      variable_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This parameter is only available when suggesting entities with `type=entity`.\nIf it is provided, suggestions will be filtered to include\nonly entities that have data for the given variable.\n\nIf the variable provided is invalid, no entities will be returned.\n\nNote that this filtering will increase response time significantly,\nso it should only be used when necessary.',
            example: 'demographics.population.count',
            in: 'query',
            name: 'variable_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      app_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be\nused with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'query',
            name: 'app_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-App-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. cQovpGcdUT1CSzgYk0KPYdAI0',
            example: 'cQovpGcdUT1CSzgYk0KPYdAI0',
            in: 'header',
            name: 'X-App-Token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})
