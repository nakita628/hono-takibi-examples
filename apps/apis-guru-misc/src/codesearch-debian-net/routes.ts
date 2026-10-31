import { createRoute, z } from '@hono/zod-openapi'

const SearchResultSchema = z
  .object({
    context: z
      .string()
      .openapi({
        description: 'The full line containing the search result.',
        example: '        i3Font cursor_font = load_font("cursor", false);',
      }),
    context_after: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Up to 2 full lines after the search result (see `context`).',
        example: ['        xcb_create_glyph_cursor(', '            xcb_connection,'],
      }),
    context_before: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Up to 2 full lines before the search result (see `context`).',
        example: ['    } else {', '        cursor = xcb_generate_id(xcb_connection);'],
      }),
    line: z
      .uint32()
      .openapi({ description: 'Line number containing the search result.', example: 1313 }),
    package: z
      .string()
      .openapi({
        description:
          'The Debian source package containing this search result, including the full Debian version number.',
        example: 'i3-wm_4.18-1',
      }),
    path: z
      .string()
      .openapi({
        description: 'Path to the file containing the this search result, starting with `package`.',
        example: 'i3bar/src/xcb.c',
      }),
  })
  .openapi({
    description:
      'A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.',
    required: ['context', 'line', 'package', 'path'],
  })
  .openapi('SearchResult')

const PackageSearchResultSchema = z
  .object({
    package: z
      .string()
      .openapi({
        description:
          'The Debian source package for which up to 2 search results have been aggregated in `results`.',
        example: 'i3-wm_4.18-1',
      }),
    results: z.array(SearchResultSchema),
  })
  .openapi({ required: ['package', 'results'] })
  .openapi('PackageSearchResult')

const MatchModeParamParamsSchema = z
  .enum(['literal', 'regexp'])
  .default('regexp')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.',
      in: 'query',
      name: 'match_mode',
      schema: { default: 'regexp', enum: ['literal', 'regexp'], type: 'string' },
      required: false,
    },
  })

const QueryParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The search query, for example `who knows...` (literal) or `who knows\\.\\.\\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt',
      in: 'query',
      name: 'query',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeySecurityScheme = { in: 'header', name: 'x-dcs-apikey', type: 'apiKey' }

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['search'],
  summary: 'Searches through source code',
  description:
    'Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).\n\nSearch results are ordered by their ranking (best results come first).',
  operationId: 'search',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description:
              'The search query, for example `who knows...` (literal) or `who knows\\.\\.\\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      match_mode: z
        .enum(['literal', 'regexp'])
        .default('regexp')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.',
            in: 'query',
            name: 'match_mode',
            schema: { default: 'regexp', enum: ['literal', 'regexp'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All search results',
      content: { 'application/json': { schema: z.array(SearchResultSchema) } },
    },
    403: {
      description:
        'The x-dcs-apikey header was either not set at all, or contained an invalid (no longer valid?) API key. Please see https://codesearch.debian.net/apikeys/ for obtaining a key.',
      content: {},
    },
  },
  security: [{ api_key: [] }],
})

export const getSearchperpackageRoute = createRoute({
  method: 'get',
  path: '/searchperpackage',
  tags: ['search'],
  summary: 'Like /search, but aggregates per package',
  description:
    'The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719',
  operationId: 'searchperpackage',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description:
              'The search query, for example `who knows...` (literal) or `who knows\\.\\.\\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      match_mode: z
        .enum(['literal', 'regexp'])
        .default('regexp')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.',
            in: 'query',
            name: 'match_mode',
            schema: { default: 'regexp', enum: ['literal', 'regexp'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All search results',
      content: { 'application/json': { schema: z.array(PackageSearchResultSchema) } },
    },
    403: {
      description:
        'The x-dcs-apikey header was either not set at all, or contained an invalid (no longer valid?) API key. Please see https://codesearch.debian.net/apikeys/ for obtaining a key.',
      content: {},
    },
  },
  security: [{ api_key: [] }],
})
