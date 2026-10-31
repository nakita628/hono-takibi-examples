import { createRoute, z } from '@hono/zod-openapi'

const APIKeyInfoSchema = z
  .object({
    customer_email: z.string().exactOptional().openapi({ description: 'State' }),
    customer_name: z.string().exactOptional().openapi({ description: 'State' }),
    expires: z.string().exactOptional().openapi({ description: 'State' }),
    item_id: z.string().exactOptional().openapi({ description: 'State' }),
    item_name: z.string().exactOptional().openapi({ description: 'State' }),
    license: z.string().exactOptional().openapi({ description: 'State' }),
    license_limit: z.string().exactOptional().openapi({ description: 'State' }),
    price_id: z.string().exactOptional().openapi({ description: 'State' }),
    success: z.string().exactOptional().openapi({ description: 'State' }),
  })
  .openapi({ required: [] })
  .openapi('APIKeyInfo')

const MXRecordsSchema = z
  .object({
    exchange: z.string().exactOptional().openapi({ description: 'MX domain' }),
    priority: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MXRecords')

const DomainsSchema = z
  .object({
    A: z.array(z.string().openapi({ description: 'A record' })).exactOptional(),
    CNAME: z.array(z.string().openapi({ description: 'CNAME record' })).exactOptional(),
    MX: z.array(MXRecordsSchema).exactOptional(),
    NS: z.array(z.string().openapi({ description: 'NS record' })).exactOptional(),
    TXT: z.array(z.string().openapi({ description: 'TXT record' })).exactOptional(),
    country: z.string().exactOptional().openapi({ description: 'Hosting Country' }),
    create_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Domain creation date' }),
    domain: z.string().exactOptional().openapi({ description: 'Domain name' }),
    isDead: z.string().exactOptional().openapi({ description: 'If Domain is Dead' }),
    update_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Domain last update date' }),
  })
  .openapi({ required: [] })
  .openapi('Domains')

const ResponseParametersSchema = z
  .object({
    next_page: z.string().exactOptional().openapi({ description: 'Next page id' }),
    time: z.string().openapi({ description: 'Time took' }),
    total: z.int().exactOptional().openapi({ description: 'Total days reported' }),
  })
  .openapi({ required: ['time'] })
  .openapi('ResponseParameters')

const SearchResultsSchema = ResponseParametersSchema.and(
  z.object({ domains: z.array(DomainsSchema).exactOptional() }).openapi({ required: [] }),
).openapi('SearchResults')

const UpdateModelSchema = z
  .object({
    added: z.string().exactOptional().openapi({ description: 'Updates added list' }),
    added_download: z.string().exactOptional().openapi({ description: 'Download link for added' }),
    date: z.string().exactOptional().openapi({ description: 'Update date' }),
    deleted: z.string().exactOptional().openapi({ description: 'Updates deleted list' }),
    deleted_download: z
      .string()
      .exactOptional()
      .openapi({ description: 'Download link for deleted' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateModel')

const ZoneInfoSchema = z
  .object({
    description: z.array(z.string().openapi({ description: 'Sub TLDs included' })).exactOptional(),
    in_bundles: z.array(z.string().openapi({ description: 'Sub TLDs included' })).exactOptional(),
    includes: z.array(z.string().openapi({ description: 'Sub TLDs included' })).exactOptional(),
    type: z.string().openapi({ description: 'TLD type' }),
    zone: z.string().openapi({ description: 'TLD name' }),
  })
  .openapi({ required: ['type', 'zone'] })
  .openapi('ZoneInfo')

const ZoneStatisticsSchema = z
  .object({
    date: z.iso.datetime({ offset: true }).openapi({ description: 'Report Date' }),
    dec: z.int().openapi({ description: 'Increase' }),
    inc: z.int().openapi({ description: 'Decrease' }),
    total: z.int().openapi({ description: 'Total number of records' }),
    zone: z.string().openapi({ description: 'TLD name' }),
  })
  .openapi({ required: ['date', 'dec', 'inc', 'total', 'zone'] })
  .openapi('ZoneStatistics')

const ZoneStatsSchema = ResponseParametersSchema.and(
  z.object({ statistics: z.array(ZoneStatisticsSchema).exactOptional() }).openapi({ required: [] }),
).openapi('ZoneStats')

const MaskErrorResponse = { description: 'When any error occurs on mask' }

const ParseErrorResponse = { description: "When a mask can't be parsed" }

export const getDomainsSearchRoute = createRoute({
  method: 'get',
  path: '/domains/search',
  tags: ['domains/'],
  summary: 'Domains Database Search',
  operationId: 'get_search_domain_item',
  request: {
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request date',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search page to request',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'limit',
            schema: { default: 50, type: 'integer' },
            required: false,
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Domain includes',
            in: 'query',
            name: 'domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      zone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'In Zone',
            in: 'query',
            name: 'zone',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Hosting Country',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      isDead: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Dead or Not, default not',
            in: 'query',
            name: 'isDead',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      A: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A record includes',
            in: 'query',
            name: 'A',
            schema: { type: 'string' },
            required: false,
          },
        }),
      NS: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'NS record includes',
            in: 'query',
            name: 'NS',
            schema: { type: 'string' },
            required: false,
          },
        }),
      CNAME: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CNAME record includes',
            in: 'query',
            name: 'CNAME',
            schema: { type: 'string' },
            required: false,
          },
        }),
      MX: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'MX record includes',
            in: 'query',
            name: 'MX',
            schema: { type: 'string' },
            required: false,
          },
        }),
      TXT: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'TXT record includes',
            in: 'query',
            name: 'TXT',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResultsSchema } },
    },
    403: { description: 'api_key is not valid' },
    404: { description: 'Results not found' },
  },
})

export const getDomainsTldZoneIdRoute = createRoute({
  method: 'get',
  path: '/domains/tld/{zone_id}',
  tags: ['domains/'],
  summary: 'Get TLD records',
  operationId: 'get_tld_domain_item',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'zone_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request date',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search page to request',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'limit',
            schema: { default: 50, type: 'integer' },
            required: false,
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Domain includes',
            in: 'query',
            name: 'domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Hosting Country',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      isDead: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Dead or Not, default not',
            in: 'query',
            name: 'isDead',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      A: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A record includes',
            in: 'query',
            name: 'A',
            schema: { type: 'string' },
            required: false,
          },
        }),
      NS: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'NS record includes',
            in: 'query',
            name: 'NS',
            schema: { type: 'string' },
            required: false,
          },
        }),
      CNAME: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CNAME record includes',
            in: 'query',
            name: 'CNAME',
            schema: { type: 'string' },
            required: false,
          },
        }),
      MX: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'MX record includes',
            in: 'query',
            name: 'MX',
            schema: { type: 'string' },
            required: false,
          },
        }),
      TXT: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'TXT record includes',
            in: 'query',
            name: 'TXT',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResultsSchema } },
    },
    403: { description: "No api_key or it's not valid" },
    404: { description: 'Results not found' },
  },
})

export const getDomainsTldZoneIdDownloadRoute = createRoute({
  method: 'get',
  path: '/domains/tld/{zone_id}/download',
  tags: ['domains/'],
  summary: 'Download Whole Dataset for TLD',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'zone_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request date',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    403: { description: "No api_key or it's not valid" },
    404: { description: 'Results not found' },
  },
})

export const getDomainsTldZoneIdSearchRoute = createRoute({
  method: 'get',
  path: '/domains/tld/{zone_id}/search',
  tags: ['domains/'],
  summary: 'Domains Search for TLD',
  request: {
    params: z.object({
      zone_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'zone_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request date',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search page to request',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'limit',
            schema: { default: 50, type: 'integer' },
            required: false,
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Domain includes',
            in: 'query',
            name: 'domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Hosting Country',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      isDead: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Dead or Not, default not',
            in: 'query',
            name: 'isDead',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      A: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A record includes',
            in: 'query',
            name: 'A',
            schema: { type: 'string' },
            required: false,
          },
        }),
      NS: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'NS record includes',
            in: 'query',
            name: 'NS',
            schema: { type: 'string' },
            required: false,
          },
        }),
      CNAME: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CNAME record includes',
            in: 'query',
            name: 'CNAME',
            schema: { type: 'string' },
            required: false,
          },
        }),
      MX: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'MX record includes',
            in: 'query',
            name: 'MX',
            schema: { type: 'string' },
            required: false,
          },
        }),
      TXT: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'TXT record includes',
            in: 'query',
            name: 'TXT',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResultsSchema } },
    },
    403: { description: "No api_key or it's not valid" },
    404: { description: 'Results not found' },
  },
})

export const getDomainsUpdatesAddedRoute = createRoute({
  method: 'get',
  path: '/domains/updates/added',
  tags: ['domains/'],
  summary: 'Get added domains, latest if date not specified',
  request: {
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request date',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search page to request',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'limit',
            schema: { default: 50, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResultsSchema } },
    },
    403: { description: "No api_key or it's not valid" },
    404: { description: 'Results not found' },
  },
})

export const getDomainsUpdatesAddedDownloadRoute = createRoute({
  method: 'get',
  path: '/domains/updates/added/download',
  tags: ['domains/'],
  summary: 'Download added domains, latest if date not specified',
  request: {
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request date',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    403: { description: "No api_key or it's not valid" },
    404: { description: 'Results not found' },
  },
})

export const getDomainsUpdatesDeletedRoute = createRoute({
  method: 'get',
  path: '/domains/updates/deleted',
  tags: ['domains/'],
  summary: 'Get deleted domains, latest if date not specified',
  request: {
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request date',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search page to request',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'limit',
            schema: { default: 50, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResultsSchema } },
    },
    403: { description: "No api_key or it's not valid" },
    404: { description: 'Results not found' },
  },
})

export const getDomainsUpdatesDeletedDownloadRoute = createRoute({
  method: 'get',
  path: '/domains/updates/deleted/download',
  tags: ['domains/'],
  summary: 'Download deleted domains, latest if date not specified',
  request: {
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request date',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    403: { description: "No api_key or it's not valid" },
    404: { description: 'Results not found' },
  },
})

export const getDomainsUpdatesListRoute = createRoute({
  method: 'get',
  path: '/domains/updates/list',
  tags: ['domains/'],
  summary: 'List of updates',
  request: {
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UpdateModelSchema } } },
    403: { description: "No api_key or it's not valid" },
    404: { description: 'Results not found' },
  },
})

export const getInfoApiRoute = createRoute({
  method: 'get',
  path: '/info/api',
  tags: ['info/'],
  operationId: 'get_api_info_item',
  request: {
    query: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'API key',
            in: 'query',
            name: 'api_key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: APIKeyInfoSchema } } },
  },
})

export const getInfoStatIndexRoute = createRoute({
  method: 'get',
  path: '/info/stat/',
  tags: ['info/'],
  summary: 'Returns overall stagtistics',
  operationId: 'get_statistics_collection',
  request: {
    query: z.object({
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search page to request',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'limit',
            schema: { default: 50, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ZoneStatsSchema) } },
    },
  },
})

export const getInfoStatZoneRoute = createRoute({
  method: 'get',
  path: '/info/stat/{zone}',
  tags: ['info/'],
  summary: 'Returns statistics for specific zone',
  operationId: 'get_statistics_item',
  request: {
    params: z.object({
      zone: z
        .string()
        .openapi({
          param: { in: 'path', name: 'zone', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search page to request',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'limit',
            schema: { default: 50, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ZoneStatsSchema } } },
    404: { description: 'Zone not found.' },
  },
})

export const getInfoTldIndexRoute = createRoute({
  method: 'get',
  path: '/info/tld/',
  tags: ['info/'],
  summary: 'Returns overall Tld info',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ZoneInfoSchema) } },
    },
  },
})

export const getInfoTldZoneRoute = createRoute({
  method: 'get',
  path: '/info/tld/{zone}',
  tags: ['info/'],
  summary: 'Returns statistics for specific zone',
  request: {
    params: z.object({
      zone: z
        .string()
        .openapi({
          param: { in: 'path', name: 'zone', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search page to request',
            in: 'query',
            name: 'page',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page',
            in: 'query',
            name: 'limit',
            schema: { default: 50, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ZoneInfoSchema } } },
    404: { description: 'Zone not found.' },
  },
})
