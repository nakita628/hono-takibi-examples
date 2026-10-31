import { createRoute, z } from '@hono/zod-openapi'

const DestinationModelSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO alpha-2 [country code](//en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)',
      }),
    os: z
      .string()
      .exactOptional()
      .openapi({ description: 'Please check the [supported OS list](#tag/OperatingSystems)' }),
    url: z.string(),
  })
  .openapi({ required: ['url'] })
  .openapi('DestinationModel')

const MetaTagModelSchema = z
  .object({ content: z.string(), name: z.string() })
  .openapi({ required: ['name', 'content'] })
  .openapi('MetaTagModel')

const SnippetModelSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'Please check the [supported snippets list](#tag/Snippets)' }),
    parameters: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('SnippetModel')

const AliasModelSchema = z
  .object({
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
      .openapi({ type: 'integer', format: 'int64', example: 1595845801514 }),
    destinations: z.array(DestinationModelSchema).exactOptional(),
    domainName: z.string().exactOptional().openapi({ example: 'your.domain.com' }),
    metatags: z.array(MetaTagModelSchema).exactOptional(),
    name: z.string().openapi({ example: 'aBcDe012' }),
    snippets: z.array(SnippetModelSchema).exactOptional(),
    updatedAt: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1595845801514 }),
  })
  .openapi({ required: ['name'] })
  .openapi('AliasModel')

const ClickModelSchema = z
  .object({
    alias: z.string().exactOptional(),
    aliasId: z.string().exactOptional(),
    browser: z.string().exactOptional(),
    country: z.string().exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64' }),
    destination: z.string().exactOptional(),
    domain: z.string().exactOptional(),
    os: z.string().exactOptional(),
    referrer: z.string().exactOptional(),
    userAgent: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClickModel')

const ClickModelPgSchema = z
  .object({
    accountId: z.string().exactOptional(),
    alias: z.string().exactOptional(),
    aliasId: z.string().exactOptional(),
    browser: z.string().exactOptional(),
    country: z.string().exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64' }),
    destination: z.string().exactOptional(),
    domain: z.string().exactOptional(),
    id: z.int().exactOptional(),
    os: z.string().exactOptional(),
    referrer: z.string().exactOptional(),
    userAgent: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClickModelPg')

const ClicksFilterModelSchema = z
  .object({
    aliasId: z.string().exactOptional().openapi({ description: 'Alias Id', example: 'aBcDe012' }),
    dateFrom: z
      .string()
      .exactOptional()
      .openapi({ description: 'date From', example: '2001-05-02' }),
    dateTo: z.string().exactOptional().openapi({ description: 'date To', example: '2001-05-02' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Domain name', example: 'short.fyi' }),
    lastId: z.int().exactOptional().openapi({ description: 'last Id', example: 100 }),
  })
  .openapi({ required: [] })
  .openapi('ClicksFilterModel')

const CreateAliasModelSchema = z
  .object({
    destinations: z.array(DestinationModelSchema).exactOptional(),
    metatags: z.array(MetaTagModelSchema).exactOptional(),
    snippets: z.array(SnippetModelSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAliasModel')

const CreateAliasResponseModelSchema = z
  .object({
    aliasName: z.string().exactOptional().openapi({ example: 'aBcDe012' }),
    domainName: z.string().exactOptional().openapi({ example: 'your.domain.com' }),
    shortUrl: z.string().exactOptional().openapi({ example: 'https://your.domain.com/aBcDe012' }),
  })
  .openapi({ required: [] })
  .openapi('CreateAliasResponseModel')

const GetAliasModelSchema = z
  .object({
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
      .openapi({ type: 'integer', format: 'int64' }),
    domainName: z.string().exactOptional().openapi({ example: 'your.domain.com' }),
    name: z.string().exactOptional(),
    updatedAt: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .catchall(CreateAliasModelSchema)
  .openapi('GetAliasModel')

const GetAliasesModelSchema = z
  .object({ aliases: z.array(z.string()).exactOptional(), lastId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GetAliasesModel')

const GetClicksModelSchema = z
  .object({ clicks: z.array(ClickModelSchema).exactOptional(), lastId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GetClicksModel')

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'x-api-key', type: 'apiKey' }

export const getAliasesRoute = createRoute({
  method: 'get',
  path: '/aliases',
  tags: ['Alias'],
  summary: 'Get alias',
  description: 'Get detailed information for a single alias by providing its alias and domain name',
  operationId: 'GetAlias',
  request: {
    query: z.object({
      domainName: z
        .string()
        .default('short.fyi')
        .exactOptional()
        .openapi({
          param: {
            description: 'domain which alias belongs to (string without `http/https` or `/`)',
            example: 'your.domain.com',
            in: 'query',
            name: 'domainName',
            required: false,
            schema: { default: 'short.fyi', type: 'string' },
          },
        }),
      aliasName: z
        .string()
        .openapi({
          param: {
            description: 'alias value (without `/` at the beginning)',
            example: 'aBcDe012',
            in: 'query',
            name: 'aliasName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Alias model or **null**',
      content: { 'application/json': { schema: AliasModelSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putAliasesRoute = createRoute({
  method: 'put',
  path: '/aliases',
  tags: ['Alias'],
  summary: 'Update alias',
  description:
    "Update a single short URL by providing its alias and domain as a parameter, and the data you wish to update in the body of the request. If no domain is provided you will receive the alias found attached to the Short.fyi domain (if it exists and is linked to your account!)\n\n ### NOTE: \n\n ( * )If you add a metatag or a snippet with a same name to an alias and the domain it's related to, the value will be taken from the alias and not the domain \n\n ( ** ) When you update any array property (like destinations) the block is updated **completely** so you have to specify the old records to avoid deleting them\n\n ( *** ) The method updates only the specified properties so if there was no change in one of them you don't have to send it.",
  operationId: 'UpdateAlias',
  request: {
    query: z.object({
      domainName: z
        .string()
        .default('short.fyi')
        .exactOptional()
        .openapi({
          param: {
            description: 'domain which alias belongs to (string without `http/https` or `/`)',
            example: 'your.domain.com',
            in: 'query',
            name: 'domainName',
            required: false,
            schema: { default: 'short.fyi', type: 'string' },
          },
        }),
      aliasName: z
        .string()
        .openapi({
          param: {
            description: 'alias (without `/` at the beginning)',
            example: 'aBcDe012',
            in: 'query',
            name: 'aliasName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'alias properties you wish to be updated',
      content: { 'application/json': { schema: CreateAliasModelSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Empty response' } },
  security: [{ ApiKeyAuth: [] }],
})

export const postAliasesRoute = createRoute({
  method: 'post',
  path: '/aliases',
  tags: ['Alias'],
  summary: 'Create alias',
  description:
    'This POST method creates a new alias under a specified domain. If no domain is specified in the request the alias will be attached to the default domain Short.fyi \n\n **NOTE:** You can override the domain level Meta Tags and Tracking Snippets by specifying them for each URL. Any variables you add to a specific URL will always override domain level settings.',
  operationId: 'CreateAlias',
  request: {
    query: z.object({
      domainName: z
        .string()
        .default('short.fyi')
        .exactOptional()
        .openapi({
          param: {
            description: 'domain which alias will belong to (string without `http/https` or `/`)',
            example: 'your.domain.com',
            in: 'query',
            name: 'domainName',
            required: false,
            schema: { default: 'short.fyi', type: 'string' },
          },
        }),
      aliasName: z
        .string()
        .default('@rnd')
        .exactOptional()
        .openapi({
          param: {
            description: 'alias (without `/` at the beginning)',
            example: 'aBcDe012',
            in: 'query',
            name: 'aliasName',
            required: false,
            schema: { default: '@rnd', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'alias properties',
      content: { 'application/json': { schema: CreateAliasModelSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Response contains aliasName, domainName and full generated short link',
      content: { 'application/json': { schema: CreateAliasResponseModelSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteAliasesRoute = createRoute({
  method: 'delete',
  path: '/aliases',
  tags: ['Alias'],
  summary: 'Delete alias',
  description:
    'Deletes a single alias by providing alias and domain. If no domain is provided the API will search for the matching alias within the Short.fyi domain',
  operationId: 'DeleteAlias',
  request: {
    query: z.object({
      domainName: z
        .string()
        .default('short.fyi')
        .exactOptional()
        .openapi({
          param: {
            description: 'domain which alias belongs to (string without `http/https` or `/`)',
            example: 'your.domain.com',
            in: 'query',
            name: 'domainName',
            required: false,
            schema: { default: 'short.fyi', type: 'string' },
          },
        }),
      aliasName: z
        .string()
        .openapi({
          param: {
            description: 'alias (without `/` at the beginning)',
            example: 'aBcDe012',
            in: 'query',
            name: 'aliasName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Empty response' } },
  security: [{ ApiKeyAuth: [] }],
})

export const getAliasesAllRoute = createRoute({
  method: 'get',
  path: '/aliases/all',
  tags: ['Alias'],
  summary: 'Get aliases by domain',
  description:
    'Obtain a list of all alias names associated with your account and given domain. Result array is in descending order by creation date. \n\n If no domain is specified you will receive a list of all the alias names you have created using the Short.fyi domain. \n\n If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.',
  operationId: 'GetAliases',
  request: {
    query: z.object({
      domainName: z
        .string()
        .default('short.fyi')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The domain name to get the aliases for (string without `http/https` or `/`)',
            example: 'your.domain.com',
            in: 'query',
            name: 'domainName',
            required: false,
            schema: { default: 'short.fyi', type: 'string' },
          },
        }),
      continueFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An ID returned by a previous query to continue aliases retrieval (see lastId in response)',
            example: '1588788835614657618',
            in: 'query',
            name: 'continueFrom',
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
          z.int().min(1).max(1000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per request',
            example: 100,
            in: 'query',
            name: 'limit',
            schema: { default: 1000, maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'returns Array of aliases with lastId',
      content: { 'application/json': { schema: GetAliasesModelSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getClicksRoute = createRoute({
  method: 'get',
  path: '/clicks',
  tags: ['Click'],
  summary: 'Get clicks',
  description:
    'Retrieve the raw click data for your account. Clicks are retrieved by creation date in descending order. \n\n If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.',
  operationId: 'GetClicks',
  request: {
    query: z.object({
      continueFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An ID returned by a previous query to continue clicks retrieval (see lastId in response)',
            example: '1588788835614657618',
            in: 'query',
            name: 'continueFrom',
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
          z.int().min(1).max(1000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per request',
            example: 100,
            in: 'query',
            name: 'limit',
            schema: { default: 1000, maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'returns Array of Click models, also returns lastId',
      content: { 'application/json': { schema: GetClicksModelSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postClicksPgRoute = createRoute({
  method: 'post',
  path: '/clicks/pg',
  tags: ['Statistics'],
  summary: 'Get clicks statistics',
  description:
    'Retrieve the raw click statistics for your account. Clicks are retrieved by creation date in descending order.',
  operationId: 'GetStatistics',
  request: {
    body: {
      description: 'Filter',
      content: { 'application/json': { schema: ClicksFilterModelSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'returns Array of Click models, also returns lastId',
      content: { 'application/json': { schema: ClickModelPgSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})
