import { createRoute, z } from '@hono/zod-openapi'

export const postDumpsRoute = createRoute({
  method: 'post',
  path: '/dumps',
  tags: ['Dumps'],
  summary: 'Create a dump',
  description: 'Create a dump',
  operationId: 'createADump',
  responses: { 200: { description: '' } },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Stats'],
  summary: 'Health',
  description: 'Health',
  operationId: 'health',
  responses: { 200: { description: '' } },
})

export const getIndexesRoute = createRoute({
  method: 'get',
  path: '/indexes',
  tags: ['Indexes'],
  summary: 'Get indexes',
  description: 'Get indexes',
  operationId: 'getIndexes',
  request: {
    query: z.object({
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { example: '0', type: 'string' },
            required: false,
          },
          example: '0',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '2', type: 'string' },
            required: false,
          },
          example: '2',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postIndexesRoute = createRoute({
  method: 'post',
  path: '/indexes',
  tags: ['Indexes'],
  summary: 'Create index with primary key',
  description: 'Create index with primary key',
  operationId: 'createIndexWithPrimaryKey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              primaryKey: z.string().exactOptional().openapi({ example: 'number' }),
              uid: z.string().exactOptional().openapi({ example: 'books' }),
            })
            .openapi({ required: [] }),
          example: { primaryKey: 'number', uid: 'books' },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksRoute = createRoute({
  method: 'get',
  path: '/indexes/books',
  tags: ['Indexes'],
  summary: 'Show index',
  description: 'Show index',
  operationId: 'showIndex',
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksRoute = createRoute({
  method: 'delete',
  path: '/indexes/books',
  tags: ['Indexes'],
  summary: 'Delete an index',
  description: 'Delete an index',
  operationId: 'deleteAnIndex',
  responses: { 200: { description: '' } },
})

export const patchIndexesBooksRoute = createRoute({
  method: 'patch',
  path: '/indexes/books',
  tags: ['Indexes'],
  summary: 'Udpate index ',
  description: 'Can only change the document identifier if it has not already been added before.',
  operationId: 'udpateIndex',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ primaryKey: z.string().exactOptional().openapi({ example: 'title' }) })
            .openapi({ required: [] }),
          example: { primaryKey: 'title' },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksDocumentsRoute = createRoute({
  method: 'get',
  path: '/indexes/books/documents',
  tags: ['Documents'],
  summary: 'Get documents',
  description: 'Get documents',
  operationId: 'getDocuments',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1', type: 'string' },
            required: false,
          },
          example: '1',
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fields',
            schema: { example: 'id', type: 'string' },
            required: false,
          },
          example: 'id',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const putIndexesBooksDocumentsRoute = createRoute({
  method: 'put',
  path: '/indexes/books/documents',
  tags: ['Documents'],
  summary: 'Add or update documents',
  description: 'Add or update documents',
  operationId: 'addOrUpdateDocuments',
  request: {
    query: z.object({
      primaryKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'primaryKey',
            schema: { example: 'id', type: 'string' },
            required: false,
          },
          example: 'id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  author: z.string().exactOptional().openapi({ example: 'J. Austen' }),
                  date: z.string().exactOptional().openapi({ example: '1813' }),
                  id: z.number().exactOptional().openapi({ example: 2 }),
                })
                .openapi({ required: [] }),
            )
            .openapi({ example: [{ author: 'J. Austen', date: '1813', id: 2 }] }),
          example: [{ author: 'J. Austen', date: '1813', id: 2 }],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postIndexesBooksDocumentsRoute = createRoute({
  method: 'post',
  path: '/indexes/books/documents',
  tags: ['Documents'],
  summary: 'Add or replace documents',
  description: 'Add or replace documents',
  operationId: 'addOrReplaceDocuments',
  request: {
    query: z.object({
      primaryKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'primaryKey',
            schema: { example: 'id', type: 'string' },
            required: false,
          },
          example: 'id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  author: z.string().exactOptional().openapi({ example: 'Jane Austen' }),
                  genre: z.string().exactOptional().openapi({ example: 'romance' }),
                  id: z.number().exactOptional().openapi({ example: 2 }),
                  price: z.number().exactOptional().openapi({ example: 3.5 }),
                  title: z.string().exactOptional().openapi({ example: 'Pride and Prejudice' }),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              example: [
                {
                  author: 'Jane Austen',
                  genre: 'romance',
                  id: 2,
                  price: 3.5,
                  title: 'Pride and Prejudice',
                },
                {
                  author: 'Antoine de Saint-Exupéry',
                  genre: 'adventure',
                  id: 456,
                  price: 10,
                  title: 'Le Petit Prince',
                },
                {
                  author: 'Lewis Carroll',
                  genre: 'fantasy',
                  id: 1,
                  price: 25.99,
                  title: 'Alice In Wonderland',
                },
                { author: 'J. R. R. Tolkien', genre: 'fantasy', id: 1344, title: 'The Hobbit' },
                {
                  author: 'J. K. Rowling',
                  genre: 'fantasy',
                  id: 4,
                  title: 'Harry Potter and the Half-Blood Prince',
                },
                { author: 'Douglas Adams', id: 42, title: "The Hitchhiker's Guide to the Galaxy" },
              ],
            }),
          example: [
            {
              author: 'Jane Austen',
              genre: 'romance',
              id: 2,
              price: 3.5,
              title: 'Pride and Prejudice',
            },
            {
              author: 'Antoine de Saint-Exupéry',
              genre: 'adventure',
              id: 456,
              price: 10,
              title: 'Le Petit Prince',
            },
            {
              author: 'Lewis Carroll',
              genre: 'fantasy',
              id: 1,
              price: 25.99,
              title: 'Alice In Wonderland',
            },
            { author: 'J. R. R. Tolkien', genre: 'fantasy', id: 1344, title: 'The Hobbit' },
            {
              author: 'J. K. Rowling',
              genre: 'fantasy',
              id: 4,
              title: 'Harry Potter and the Half-Blood Prince',
            },
            { author: 'Douglas Adams', id: 42, title: "The Hitchhiker's Guide to the Galaxy" },
          ],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksDocumentsRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/documents',
  tags: ['Documents'],
  summary: 'Delete all documents',
  description: 'Delete all documents',
  operationId: 'deleteAllDocuments',
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksDocuments1Route = createRoute({
  method: 'delete',
  path: '/indexes/books/documents/1',
  tags: ['Documents'],
  summary: 'Delete one document',
  description: 'Delete one document',
  operationId: 'deleteOneDocument',
  request: { body: { content: {} } },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksDocuments2Route = createRoute({
  method: 'get',
  path: '/indexes/books/documents/2',
  tags: ['Documents'],
  summary: 'Get one document',
  description: 'Get one document',
  operationId: 'getOneDocument',
  request: {
    query: z.object({
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fields',
            schema: { example: 'id', type: 'string' },
            required: false,
          },
          example: 'id',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postIndexesBooksDocumentsDeleteBatchRoute = createRoute({
  method: 'post',
  path: '/indexes/books/documents/delete-batch',
  tags: ['Documents'],
  summary: 'Delete documents',
  description: 'Delete documents',
  operationId: 'deleteDocuments',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.number().openapi({ example: 1 })).openapi({ example: [1, 2] }),
          example: [1, 2],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSearchRoute = createRoute({
  method: 'get',
  path: '/indexes/books/search',
  tags: ['Search'],
  summary: 'Search in index',
  description: 'Search in index',
  operationId: 'searchInIndex',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { example: 'prinec', type: 'string' },
            required: false,
          },
          example: 'prinec',
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { example: '0', type: 'string' },
            required: false,
          },
          example: '0',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1', type: 'string' },
            required: false,
          },
          example: '1',
        }),
      attributesToRetrieve: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'attributesToRetrieve',
            schema: { example: 'title,author', type: 'string' },
            required: false,
          },
          example: 'title,author',
        }),
      attributesToCrop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'attributesToCrop',
            schema: { example: 'title', type: 'string' },
            required: false,
          },
          example: 'title',
        }),
      attributesToHighlight: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'attributesToHighlight',
            schema: { example: '*', type: 'string' },
            required: false,
          },
          example: '*',
        }),
      cropLength: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cropLength',
            schema: { example: '5', type: 'string' },
            required: false,
          },
          example: '5',
        }),
      cropMarker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cropMarker',
            schema: { example: '[...]', type: 'string' },
            required: false,
          },
          example: '[...]',
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter',
            schema: { example: 'genre="fantasy"', type: 'string' },
            required: false,
          },
          example: 'genre="fantasy"',
        }),
      showMatchesPosition: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'showMatchesPosition',
            schema: { example: 'true', type: 'string' },
            required: false,
          },
          example: 'true',
        }),
      facets: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'facets',
            schema: { example: 'genre', type: 'string' },
            required: false,
          },
          example: 'genre',
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            schema: { example: 'price', type: 'string' },
            required: false,
          },
          example: 'price',
        }),
      highlightPreTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'highlightPreTag',
            schema: { example: '<mark>', type: 'string' },
            required: false,
          },
          example: '<mark>',
        }),
      highlightPostTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'highlightPostTag',
            schema: { example: '</mark>', type: 'string' },
            required: false,
          },
          example: '</mark>',
        }),
      matchingStrategy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'matchingStrategy',
            schema: { example: 'all', type: 'string' },
            required: false,
          },
          example: 'all',
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { example: '2', type: 'string' },
            required: false,
          },
          example: '2',
        }),
      hitsPerPage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'hitsPerPage',
            schema: { example: '50', type: 'string' },
            required: false,
          },
          example: '50',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postIndexesBooksSearchRoute = createRoute({
  method: 'post',
  path: '/indexes/books/search',
  tags: ['Search'],
  summary: 'Search in index',
  description: 'Search in index',
  operationId: 'searchInIndex1',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attributesToHighlight: z
                .array(z.string().openapi({ example: 'title' }))
                .exactOptional()
                .openapi({ example: ['title'] }),
              q: z.string().exactOptional().openapi({ example: '' }),
            })
            .openapi({ required: [] }),
          example: { attributesToHighlight: ['title'], q: '' },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings',
  tags: ['Settings'],
  summary: 'Get all settings',
  description: 'Get all settings',
  operationId: 'getAllSettings',
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings',
  tags: ['Settings'],
  summary: 'Reset all settings',
  description: 'Reset all settings',
  operationId: 'resetAllSettings',
  responses: { 200: { description: '' } },
})

export const patchIndexesBooksSettingsRoute = createRoute({
  method: 'patch',
  path: '/indexes/books/settings',
  tags: ['Settings'],
  summary: 'Update settings',
  description: 'Update settings',
  operationId: 'updateSettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              displayedAttributes: z
                .array(z.string().openapi({ example: 'title' }))
                .exactOptional()
                .openapi({ example: ['title', 'author', 'genre', 'price'] }),
              filterableAttributes: z
                .array(z.string().openapi({ example: 'genre' }))
                .exactOptional()
                .openapi({ example: ['genre', 'price'] }),
              searchableAttributes: z
                .array(z.string().openapi({ example: 'title' }))
                .exactOptional()
                .openapi({ example: ['title', 'author'] }),
              sortableAttributes: z
                .array(z.string().openapi({ example: 'price' }))
                .exactOptional()
                .openapi({ example: ['price'] }),
              stopWords: z
                .array(z.string().openapi({ example: 'of' }))
                .exactOptional()
                .openapi({ example: ['of', 'the'] }),
            })
            .openapi({ required: [] }),
          example: {
            displayedAttributes: ['title', 'author', 'genre', 'price'],
            filterableAttributes: ['genre', 'price'],
            searchableAttributes: ['title', 'author'],
            sortableAttributes: ['price'],
            stopWords: ['of', 'the'],
          },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsDisplayedAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/displayed-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get displayed attributes',
  description: 'Get displayed attributes',
  operationId: 'getDisplayedAttributes',
  responses: { 200: { description: '' } },
})

export const putIndexesBooksSettingsDisplayedAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/books/settings/displayed-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update displayed attributes',
  description: 'Update displayed attributes',
  operationId: 'updateDisplayedAttributes',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string().openapi({ example: 'title' })).openapi({ example: ['title'] }),
          example: ['title'],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsDisplayedAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/displayed-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset displayed attributes',
  description: 'Reset displayed attributes',
  operationId: 'resetDisplayedAttributes',
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsDistinctAttributeRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/distinct-attribute',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get distinct attribute',
  description: 'Get distinct attribute',
  operationId: 'getDistinctAttribute',
  responses: { 200: { description: '' } },
})

export const putIndexesBooksSettingsDistinctAttributeRoute = createRoute({
  method: 'put',
  path: '/indexes/books/settings/distinct-attribute',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update distinct attribute',
  description: 'Update distinct attribute',
  operationId: 'updateDistinctAttribute',
  request: { body: { content: {} } },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsDistinctAttributeRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/distinct-attribute',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset distinct attribute',
  description: 'Reset distinct attribute',
  operationId: 'resetDistinctAttribute',
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsFacetingRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/faceting',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get faceting',
  description: 'Get faceting',
  operationId: 'getFaceting',
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsFacetingRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/faceting',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset faceting',
  description: 'Reset faceting',
  operationId: 'resetFaceting',
  responses: { 200: { description: '' } },
})

export const patchIndexesBooksSettingsFacetingRoute = createRoute({
  method: 'patch',
  path: '/indexes/books/settings/faceting',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update faceting',
  description: 'Update faceting',
  operationId: 'updateFaceting',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ maxValuesPerFacet: z.number().exactOptional().openapi({ example: 3000 }) })
            .openapi({ required: [] }),
          example: { maxValuesPerFacet: 3000 },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsFilterableAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/filterable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get filterable attributes',
  description: 'Get filterable attributes',
  operationId: 'getFilterableAttributes',
  responses: { 200: { description: '' } },
})

export const putIndexesBooksSettingsFilterableAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/books/settings/filterable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update filterable attributes',
  description: 'Update filterable attributes',
  operationId: 'updateFilterableAttributes',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string().openapi({ example: 'genre' })).openapi({ example: ['genre'] }),
          example: ['genre'],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsFilterableAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/filterable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset filterable attributes',
  description: 'Reset filterable attributes',
  operationId: 'resetFilterableAttributes',
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsPaginationRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/pagination',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get pagination',
  description: 'Get pagination',
  operationId: 'getPagination',
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsPaginationRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/pagination',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset pagination',
  description: 'Reset pagination',
  operationId: 'resetPagination',
  responses: { 200: { description: '' } },
})

export const patchIndexesBooksSettingsPaginationRoute = createRoute({
  method: 'patch',
  path: '/indexes/books/settings/pagination',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update pagination',
  description: 'Update pagination',
  operationId: 'updatePagination',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ maxTotalHits: z.number().exactOptional().openapi({ example: 2000 }) })
            .openapi({ required: [] }),
          example: { maxTotalHits: 2000 },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsRankingRulesRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/ranking-rules',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get ranking rules',
  description: 'Get ranking rules',
  operationId: 'getRankingRules',
  responses: { 200: { description: '' } },
})

export const putIndexesBooksSettingsRankingRulesRoute = createRoute({
  method: 'put',
  path: '/indexes/books/settings/ranking-rules',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update ranking rules',
  description: 'Update ranking rules',
  operationId: 'updateRankingRules',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string().openapi({ example: 'typo' })).openapi({ example: ['typo'] }),
          example: ['typo'],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsRankingRulesRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/ranking-rules',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset ranking rules',
  description: 'Reset ranking rules',
  operationId: 'resetRankingRules',
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsSearchableAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/searchable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get searchable attributes',
  description: 'Get searchable attributes',
  operationId: 'getSearchableAttributes',
  responses: { 200: { description: '' } },
})

export const putIndexesBooksSettingsSearchableAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/books/settings/searchable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update searchable attributes',
  description: 'Update searchable attributes',
  operationId: 'updateSearchableAttributes',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ example: 'title' }))
            .openapi({ example: ['title', 'author'] }),
          example: ['title', 'author'],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsSearchableAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/searchable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset searchable attributes',
  description: 'Reset searchable attributes',
  operationId: 'resetSearchableAttributes',
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsSortableAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/sortable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get sortable attributes',
  description: 'Get sortable attributes',
  operationId: 'getSortableAttributes',
  responses: { 200: { description: '' } },
})

export const putIndexesBooksSettingsSortableAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/books/settings/sortable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update sortable attributes',
  description: 'Update sortable attributes',
  operationId: 'updateSortableAttributes',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string().openapi({ example: 'price' })).openapi({ example: ['price'] }),
          example: ['price'],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsSortableAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/sortable-attributes',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset sortable attributes',
  description: 'Reset sortable attributes',
  operationId: 'resetSortableAttributes',
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsStopWordsRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/stop-words',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get stop-words',
  description: 'Get stop-words',
  operationId: 'getStopWords',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string().openapi({ example: 'the' })).openapi({ example: ['the'] }),
          example: ['the'],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const putIndexesBooksSettingsStopWordsRoute = createRoute({
  method: 'put',
  path: '/indexes/books/settings/stop-words',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update stop-words',
  description: 'Update stop-words',
  operationId: 'updateStopWords',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ example: 'the' }))
            .openapi({ example: ['the', 'of'] }),
          example: ['the', 'of'],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsStopWordsRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/stop-words',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset stop-words',
  description: 'Reset stop-words',
  operationId: 'resetStopWords',
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsSynonymsRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/synonyms',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get synonyms',
  description: 'Get synonyms',
  operationId: 'getSynonyms',
  responses: { 200: { description: '' } },
})

export const putIndexesBooksSettingsSynonymsRoute = createRoute({
  method: 'put',
  path: '/indexes/books/settings/synonyms',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update synonyms',
  description: 'Update synonyms',
  operationId: 'updateSynonyms',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              'harry potter': z
                .array(z.string().openapi({ example: 'hp' }))
                .exactOptional()
                .openapi({ example: ['hp'] }),
              hp: z
                .array(z.string().openapi({ example: 'harry potter' }))
                .exactOptional()
                .openapi({ example: ['harry potter'] }),
            })
            .openapi({ required: [] }),
          example: { 'harry potter': ['hp'], hp: ['harry potter'] },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsSynonymsRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/synonyms',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset synonyms',
  description: 'Reset synonyms',
  operationId: 'resetSynonyms',
  request: { body: { content: {} } },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksSettingsTypoToleranceRoute = createRoute({
  method: 'get',
  path: '/indexes/books/settings/typo-tolerance',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Get typo-tolerance',
  description: 'Get typo-tolerance',
  operationId: 'getTypoTolerance',
  responses: { 200: { description: '' } },
})

export const deleteIndexesBooksSettingsTypoToleranceRoute = createRoute({
  method: 'delete',
  path: '/indexes/books/settings/typo-tolerance',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Reset typo-tolerance',
  description: 'Reset typo-tolerance',
  operationId: 'resetTypoTolerance',
  responses: { 200: { description: '' } },
})

export const patchIndexesBooksSettingsTypoToleranceRoute = createRoute({
  method: 'patch',
  path: '/indexes/books/settings/typo-tolerance',
  tags: ['Settings', 'Sub-routes'],
  summary: 'Update typo-tolerance',
  description: 'Update typo-tolerance',
  operationId: 'updateTypoTolerance',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              disableOnAttributes: z
                .array(z.string().openapi({ example: 'genre' }))
                .exactOptional()
                .openapi({ example: ['genre'] }),
              disableOnWords: z
                .array(z.string().openapi({ example: 'Prince' }))
                .exactOptional()
                .openapi({ example: ['Prince'] }),
              minWordSizeForTypos: z
                .object({
                  oneTypo: z.number().exactOptional().openapi({ example: 2 }),
                  twoTypos: z.number().exactOptional().openapi({ example: 11 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            disableOnAttributes: ['genre'],
            disableOnWords: ['Prince'],
            minWordSizeForTypos: { oneTypo: 2, twoTypos: 11 },
          },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getIndexesBooksStatsRoute = createRoute({
  method: 'get',
  path: '/indexes/books/stats',
  tags: ['Stats'],
  summary: 'Stats of an index',
  description: 'Stats of an index',
  operationId: 'statsOfAnIndex',
  responses: { 200: { description: '' } },
})

export const postIndexesSwapIndexesRoute = createRoute({
  method: 'post',
  path: '/indexes/swap-indexes',
  tags: ['Indexes'],
  summary: 'Swap indexes',
  description: 'Swap indexes',
  operationId: 'swapIndexes',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  indexes: z
                    .array(z.string().openapi({ example: 'books' }))
                    .exactOptional()
                    .openapi({ example: ['books', 'books_temp'] }),
                })
                .openapi({ required: [] }),
            )
            .openapi({ example: [{ indexes: ['books', 'books_temp'] }] }),
          example: [{ indexes: ['books', 'books_temp'] }],
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getKeysRoute = createRoute({
  method: 'get',
  path: '/keys',
  tags: ['Key Management'],
  summary: 'Get keys',
  description: 'Get keys',
  operationId: 'getKeys',
  request: {
    query: z.object({
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { example: '0', type: 'string' },
            required: false,
          },
          example: '0',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postKeysRoute = createRoute({
  method: 'post',
  path: '/keys',
  tags: ['Key Management'],
  summary: 'Create a key',
  description: 'Create a key',
  operationId: 'createAKey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              actions: z
                .array(z.string().openapi({ example: 'documents.add' }))
                .exactOptional()
                .openapi({ example: ['documents.add', 'documents.delete'] }),
              description: z
                .string()
                .exactOptional()
                .openapi({ example: 'Key to add and delete documents, in `books` index.' }),
              expiresAt: z.any().nullable().exactOptional().openapi({ example: null }),
              indexes: z
                .array(z.string().openapi({ example: 'books' }))
                .exactOptional()
                .openapi({ example: ['books'] }),
              name: z.string().exactOptional().openapi({ example: 'docs-key' }),
            })
            .openapi({ required: [] }),
          example: {
            actions: ['documents.add', 'documents.delete'],
            description: 'Key to add and delete documents, in `books` index.',
            expiresAt: null,
            indexes: ['books'],
            name: 'docs-key',
          },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705Route =
  createRoute({
    method: 'get',
    path: '/keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705',
    tags: ['Key Management'],
    summary: 'Get one key',
    description: 'Get one key',
    operationId: 'getOneKey',
    responses: { 200: { description: '' } },
  })

export const deleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bRoute =
  createRoute({
    method: 'delete',
    path: '/keys/kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b',
    tags: ['Key Management'],
    summary: 'Delete a key',
    description: 'Delete a key',
    operationId: 'deleteAKey',
    responses: { 200: { description: '' } },
  })

export const patchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddRoute =
  createRoute({
    method: 'patch',
    path: '/keys/wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd',
    tags: ['Key Management'],
    summary: 'Update a key',
    description: 'Update a key',
    operationId: 'updateAKey',
    request: {
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                description: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example:
                      'Key to add and delete documents, but also to create indexes, in `book` index.',
                  }),
              })
              .openapi({ required: [] }),
            example: {
              description:
                'Key to add and delete documents, but also to create indexes, in `book` index.',
            },
          },
        },
      },
    },
    responses: { 200: { description: '' } },
  })

export const getStatsRoute = createRoute({
  method: 'get',
  path: '/stats',
  tags: ['Stats'],
  summary: 'Global stats',
  description: 'Global stats',
  operationId: 'globalStats',
  responses: { 200: { description: '' } },
})

export const getTasksRoute = createRoute({
  method: 'get',
  path: '/tasks',
  tags: ['Tasks'],
  summary: 'Get all tasks',
  description: 'Get all tasks',
  operationId: 'getAllTasks',
  request: {
    query: z.object({
      uids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'uids',
            schema: { example: '3', type: 'string' },
            required: false,
          },
          example: '3',
        }),
      indexUids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'indexUids',
            schema: { example: 'books', type: 'string' },
            required: false,
          },
          example: 'books',
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'types',
            schema: { example: 'documentAdditionOrUpdate', type: 'string' },
            required: false,
          },
          example: 'documentAdditionOrUpdate',
        }),
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'statuses',
            schema: { example: 'failed', type: 'string' },
            required: false,
          },
          example: 'failed',
        }),
      beforeEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeEnqueuedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterEnqueuedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      beforeStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeStartedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterStartedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      beforeFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeFinishedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterFinishedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      canceledBy: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'canceledBy', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '2', type: 'string' },
            required: false,
          },
          example: '2',
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const deleteTasksRoute = createRoute({
  method: 'delete',
  path: '/tasks',
  tags: ['Tasks'],
  summary: 'Delete tasks',
  description: 'Delete tasks',
  operationId: 'deleteTasks',
  request: {
    query: z.object({
      uids: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'uids', schema: { type: 'string' }, required: false },
        }),
      indexUids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'indexUids',
            schema: { example: 'books', type: 'string' },
            required: false,
          },
          example: 'books',
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'types',
            schema: { example: 'documentAdditionOrUpdate', type: 'string' },
            required: false,
          },
          example: 'documentAdditionOrUpdate',
        }),
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'statuses',
            schema: { example: 'failed', type: 'string' },
            required: false,
          },
          example: 'failed',
        }),
      beforeEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeEnqueuedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterEnqueuedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      beforeStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeStartedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterStartedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      beforeFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeFinishedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterFinishedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      canceledBy: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'canceledBy', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '2', type: 'string' },
            required: false,
          },
          example: '2',
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getTasks0Route = createRoute({
  method: 'get',
  path: '/tasks/0',
  tags: ['Tasks'],
  summary: 'Get one task',
  description: 'Get one task',
  operationId: 'getOneTask',
  responses: { 200: { description: '' } },
})

export const postTasksCancelRoute = createRoute({
  method: 'post',
  path: '/tasks/cancel',
  tags: ['Tasks'],
  summary: 'Cancel tasks',
  description: 'Cancel tasks',
  operationId: 'cancelTasks',
  request: {
    query: z.object({
      uids: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'uids', schema: { type: 'string' }, required: false },
        }),
      indexUids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'indexUids',
            schema: { example: 'books', type: 'string' },
            required: false,
          },
          example: 'books',
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'types',
            schema: { example: 'documentAdditionOrUpdate', type: 'string' },
            required: false,
          },
          example: 'documentAdditionOrUpdate',
        }),
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'statuses',
            schema: { example: 'failed', type: 'string' },
            required: false,
          },
          example: 'failed',
        }),
      beforeEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeEnqueuedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterEnqueuedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      beforeStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeStartedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterStartedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      beforeFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'beforeFinishedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      afterFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'afterFinishedAt',
            schema: { type: 'string' },
            required: false,
          },
        }),
      canceledBy: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'canceledBy', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '2', type: 'string' },
            required: false,
          },
          example: '2',
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['Stats'],
  summary: 'Version',
  description: 'Version',
  operationId: 'version',
  responses: { 200: { description: '' } },
})
