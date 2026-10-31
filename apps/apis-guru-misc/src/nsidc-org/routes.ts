import { createRoute, z } from '@hono/zod-openapi'

export const getFacetsRoute = createRoute({
  method: 'get',
  path: '/Facets',
  tags: ['SwaggerDocs'],
  summary: 'View the facet information corresponding to a search',
  description:
    'In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.',
  operationId: 'facets',
  request: {
    query: z.object({
      searchTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'URL-encoded keyword or keywords desired by the client; OpenSearch 1.1',
            in: 'query',
            name: 'searchTerms',
            required: false,
            schema: { type: 'string' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of search results per page desired by the client; OpenSearch 1.1',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 25, type: 'integer' },
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'First search result desired by the search client; OpenSearch 1.1',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      spatial: z
        .string()
        .default('-180.0,-90.0,180.0,90.0')
        .exactOptional()
        .openapi({
          param: {
            description:
              '4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter',
            in: 'query',
            name: 'spatial',
            required: false,
            schema: { default: '-180.0,-90.0,180.0,90.0', type: 'string' },
          },
        }),
      sortKeys: z
        .enum([
          'score,,desc',
          'spatial_area,,asc',
          'spatial_area,,desc',
          'temporal_duration,,asc',
          'temporal_duration,,desc',
          'updated,,desc',
        ])
        .default('score,,desc')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0',
            in: 'query',
            name: 'sortKeys',
            required: false,
            schema: {
              default: 'score,,desc',
              enum: [
                'score,,desc',
                'spatial_area,,asc',
                'spatial_area,,desc',
                'temporal_duration,,asc',
                'temporal_duration,,desc',
                'updated,,desc',
              ],
              type: 'string',
            },
          },
        }),
      startDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The start date in yyyy-mm-dd format',
            in: 'query',
            name: 'startDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The end date in yyyy-mm-dd format',
            in: 'query',
            name: 'endDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      facetFilters: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values',
            in: 'query',
            name: 'facetFilters',
            required: false,
            schema: { type: 'string' },
          },
        }),
      source: z
        .enum(['NSIDC', 'ADE'])
        .default('NSIDC')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC',
            in: 'query',
            name: 'source',
            required: false,
            schema: { default: 'NSIDC', enum: ['NSIDC', 'ADE'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/nsidcfacets+xml': { schema: z.string() } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal server error' },
  },
})

export const getOpenSearchRoute = createRoute({
  method: 'get',
  path: '/OpenSearch',
  tags: ['SwaggerDocs'],
  summary: 'Search documents using the OpenSearch 1.1 Specification',
  description:
    'This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.',
  operationId: 'open search',
  request: {
    query: z.object({
      searchTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'URL-encoded keyword or keywords desired by the client; OpenSearch 1.1',
            in: 'query',
            name: 'searchTerms',
            required: false,
            schema: { type: 'string' },
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of search results per page desired by the client; OpenSearch 1.1',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 25, type: 'integer' },
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'First search result desired by the search client; OpenSearch 1.1',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      spatial: z
        .string()
        .default('-180.0,-90.0,180.0,90.0')
        .exactOptional()
        .openapi({
          param: {
            description:
              '4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter',
            in: 'query',
            name: 'spatial',
            required: false,
            schema: { default: '-180.0,-90.0,180.0,90.0', type: 'string' },
          },
        }),
      sortKeys: z
        .enum([
          'score,,desc',
          'spatial_area,,asc',
          'spatial_area,,desc',
          'temporal_duration,,asc',
          'temporal_duration,,desc',
          'updated,,desc',
        ])
        .default('score,,desc')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0',
            in: 'query',
            name: 'sortKeys',
            required: false,
            schema: {
              default: 'score,,desc',
              enum: [
                'score,,desc',
                'spatial_area,,asc',
                'spatial_area,,desc',
                'temporal_duration,,asc',
                'temporal_duration,,desc',
                'updated,,desc',
              ],
              type: 'string',
            },
          },
        }),
      startDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The start date in yyyy-mm-dd format',
            in: 'query',
            name: 'startDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The end date in yyyy-mm-dd format',
            in: 'query',
            name: 'endDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      facetFilters: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values',
            in: 'query',
            name: 'facetFilters',
            required: false,
            schema: { type: 'string' },
          },
        }),
      source: z
        .enum(['NSIDC', 'ADE'])
        .default('NSIDC')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC',
            in: 'query',
            name: 'source',
            required: false,
            schema: { default: 'NSIDC', enum: ['NSIDC', 'ADE'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/atom+xml': { schema: z.string() } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal server error' },
  },
})

export const getOpenSearchDescriptionRoute = createRoute({
  method: 'get',
  path: '/OpenSearchDescription',
  tags: ['SwaggerDocs'],
  summary: "Describes the web interface of NSIDC's data search engine",
  operationId: 'opensearch description',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/opensearchdescription+xml': { schema: z.string() } },
    },
  },
})

export const getSuggestRoute = createRoute({
  method: 'get',
  path: '/suggest',
  tags: ['SwaggerDocs'],
  summary: 'Suggest search terms based on a partial query',
  description:
    'In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.',
  operationId: 'id',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'Search terms typed into the interface (minimum two characters)',
            in: 'query',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
      source: z
        .enum(['NSIDC', 'ADE'])
        .default('NSIDC')
        .openapi({
          param: {
            description:
              'Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC',
            in: 'query',
            name: 'source',
            required: true,
            schema: { default: 'NSIDC', enum: ['NSIDC', 'ADE'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/x-suggestions+json': { schema: z.string() } },
    },
    400: { description: 'Bad request' },
    500: { description: 'Internal server error' },
  },
})
