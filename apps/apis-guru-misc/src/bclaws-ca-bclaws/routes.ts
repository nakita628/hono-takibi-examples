import { createRoute, z } from '@hono/zod-openapi'

export const getContentAspectIdRoute = createRoute({
  method: 'get',
  path: '/content/{aspectId}',
  tags: ['content'],
  summary:
    "Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library",
  request: {
    params: z.object({
      aspectId: z
        .enum(['complete', 'corpreg', 'bcgaz1', 'bcgaz2', 'oic', 'psl', 'ecb', 'hscr', 'arch_oic'])
        .default('complete')
        .openapi({
          param: {
            description: "The identifier of the 'aspect' (content group) to search",
            in: 'path',
            name: 'aspectId',
            required: true,
            schema: {
              default: 'complete',
              enum: [
                'complete',
                'corpreg',
                'bcgaz1',
                'bcgaz2',
                'oic',
                'psl',
                'ecb',
                'hscr',
                'arch_oic',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List documents and directories within the aspect.' } },
})

export const getContentAspectIdCivixDocumentIdRoute = createRoute({
  method: 'get',
  path: '/content/{aspectId}/{civixDocumentId}',
  tags: ['content'],
  summary:
    'Lists the metadata available for the specified index or directory from the BCLaws legislative respository',
  request: {
    params: z.object({
      aspectId: z
        .enum(['complete', 'corpreg', 'bcgaz1', 'bcgaz2', 'oic', 'psl', 'ecb', 'hscr', 'arch_oic'])
        .default('complete')
        .openapi({
          param: {
            description: "The identifier of the 'aspect' (content group) to search",
            in: 'path',
            name: 'aspectId',
            required: true,
            schema: {
              default: 'complete',
              enum: [
                'complete',
                'corpreg',
                'bcgaz1',
                'bcgaz2',
                'oic',
                'psl',
                'ecb',
                'hscr',
                'arch_oic',
              ],
              type: 'string',
            },
          },
        }),
      civixDocumentId: z
        .string()
        .default('statreg')
        .openapi({
          param: {
            description: 'The document identification code for an index or directory',
            in: 'path',
            name: 'civixDocumentId',
            required: true,
            schema: { default: 'statreg', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List documents and directories within the aspect.' } },
})

export const getDocumentIdAspectIdCivixIndexIdCivixDocumentIdRoute = createRoute({
  method: 'get',
  path: '/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}',
  tags: ['document'],
  summary: 'Retrieves a specific document from the BCLaws legislative repository (HTML format)',
  description:
    'The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.',
  request: {
    params: z.object({
      aspectId: z
        .enum(['complete', 'corpreg', 'bcgaz1', 'bcgaz2', 'oic', 'psl', 'ecb', 'hscr', 'arch_oic'])
        .default('complete')
        .openapi({
          param: {
            description: "The identifier of the 'aspect' (content group) to search",
            in: 'path',
            name: 'aspectId',
            required: true,
            schema: {
              default: 'complete',
              enum: [
                'complete',
                'corpreg',
                'bcgaz1',
                'bcgaz2',
                'oic',
                'psl',
                'ecb',
                'hscr',
                'arch_oic',
              ],
              type: 'string',
            },
          },
        }),
      civixIndexId: z
        .string()
        .default('statreg')
        .openapi({
          param: {
            description: 'Index identification code',
            in: 'path',
            name: 'civixIndexId',
            required: true,
            schema: { default: 'statreg', type: 'string' },
          },
        }),
      civixDocumentId: z
        .string()
        .default('01009_01')
        .openapi({
          param: {
            description: 'The document identification code for an index or directory',
            in: 'path',
            name: 'civixDocumentId',
            required: true,
            schema: { default: '01009_01', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List documents and directories within the aspect.' } },
})

export const getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRoute = createRoute({
  method: 'get',
  path: '/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/search/{searchString}',
  tags: ['document'],
  summary:
    'Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)',
  description:
    'The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.',
  request: {
    params: z.object({
      aspectId: z
        .enum(['complete', 'corpreg', 'bcgaz1', 'bcgaz2', 'oic', 'psl', 'ecb', 'hscr', 'arch_oic'])
        .default('complete')
        .openapi({
          param: {
            description: "The identifier of the 'aspect' (content group) to search",
            in: 'path',
            name: 'aspectId',
            required: true,
            schema: {
              default: 'complete',
              enum: [
                'complete',
                'corpreg',
                'bcgaz1',
                'bcgaz2',
                'oic',
                'psl',
                'ecb',
                'hscr',
                'arch_oic',
              ],
              type: 'string',
            },
          },
        }),
      civixIndexId: z
        .string()
        .default('statreg')
        .openapi({
          param: {
            description: 'Index identification code',
            in: 'path',
            name: 'civixIndexId',
            required: true,
            schema: { default: 'statreg', type: 'string' },
          },
        }),
      civixDocumentId: z
        .string()
        .default('01009_01')
        .openapi({
          param: {
            description: 'The document identification code for an index or directory',
            in: 'path',
            name: 'civixDocumentId',
            required: true,
            schema: { default: '01009_01', type: 'string' },
          },
        }),
      searchString: z
        .string()
        .default('water')
        .openapi({
          param: {
            description: 'The text to search for within the document',
            in: 'path',
            name: 'searchString',
            required: true,
            schema: { default: 'water', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List documents and directories within the aspect.' } },
})

export const getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRoute = createRoute({
  method: 'get',
  path: '/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml',
  tags: ['document'],
  summary: 'Retrieves a specific document from the BCLaws legislative repository (XML format)',
  description:
    'The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.',
  request: {
    params: z.object({
      aspectId: z
        .enum(['complete', 'corpreg', 'bcgaz1', 'bcgaz2', 'oic', 'psl', 'ecb', 'hscr', 'arch_oic'])
        .default('complete')
        .openapi({
          param: {
            description: "The identifier of the 'aspect' (content group) to search",
            in: 'path',
            name: 'aspectId',
            required: true,
            schema: {
              default: 'complete',
              enum: [
                'complete',
                'corpreg',
                'bcgaz1',
                'bcgaz2',
                'oic',
                'psl',
                'ecb',
                'hscr',
                'arch_oic',
              ],
              type: 'string',
            },
          },
        }),
      civixIndexId: z
        .string()
        .default('statreg')
        .openapi({
          param: {
            description: 'Index identification code',
            in: 'path',
            name: 'civixIndexId',
            required: true,
            schema: { default: 'statreg', type: 'string' },
          },
        }),
      civixDocumentId: z
        .string()
        .default('01009_01')
        .openapi({
          param: {
            description: 'The document identification code for an index or directory',
            in: 'path',
            name: 'civixDocumentId',
            required: true,
            schema: { default: '01009_01', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List documents and directories within the aspect.' } },
})

export const getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRoute =
  createRoute({
    method: 'get',
    path: '/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml/search/{searchString}',
    tags: ['document'],
    summary:
      'Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)',
    description:
      'The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.',
    request: {
      params: z.object({
        aspectId: z
          .enum([
            'complete',
            'corpreg',
            'bcgaz1',
            'bcgaz2',
            'oic',
            'psl',
            'ecb',
            'hscr',
            'arch_oic',
          ])
          .default('complete')
          .openapi({
            param: {
              description: "The identifier of the 'aspect' (content group) to search",
              in: 'path',
              name: 'aspectId',
              required: true,
              schema: {
                default: 'complete',
                enum: [
                  'complete',
                  'corpreg',
                  'bcgaz1',
                  'bcgaz2',
                  'oic',
                  'psl',
                  'ecb',
                  'hscr',
                  'arch_oic',
                ],
                type: 'string',
              },
            },
          }),
        civixIndexId: z
          .string()
          .default('statreg')
          .openapi({
            param: {
              description: 'Index identification code',
              in: 'path',
              name: 'civixIndexId',
              required: true,
              schema: { default: 'statreg', type: 'string' },
            },
          }),
        civixDocumentId: z
          .string()
          .default('01009_01')
          .openapi({
            param: {
              description: 'The document identification code for an index or directory',
              in: 'path',
              name: 'civixDocumentId',
              required: true,
              schema: { default: '01009_01', type: 'string' },
            },
          }),
        searchString: z
          .string()
          .default('water')
          .openapi({
            param: {
              description: 'The text to search for within the document',
              in: 'path',
              name: 'searchString',
              required: true,
              schema: { default: 'water', type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'List documents and directories within the aspect.' } },
  })

export const getSearchAspectIdFullsearchRoute = createRoute({
  method: 'get',
  path: '/search/{aspectId}/fullsearch',
  tags: ['search'],
  summary:
    'A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository',
  request: {
    params: z.object({
      aspectId: z
        .enum(['complete', 'corpreg', 'bcgaz1', 'bcgaz2', 'oic', 'psl', 'ecb', 'hscr', 'arch_oic'])
        .default('complete')
        .openapi({
          param: {
            description: "The identifier of the 'aspect' (content group) to search",
            in: 'path',
            name: 'aspectId',
            required: true,
            schema: {
              default: 'complete',
              enum: [
                'complete',
                'corpreg',
                'bcgaz1',
                'bcgaz2',
                'oic',
                'psl',
                'ecb',
                'hscr',
                'arch_oic',
              ],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      q: z
        .string()
        .default('water')
        .openapi({
          param: {
            description: 'query term',
            in: 'query',
            name: 'q',
            required: true,
            schema: { default: 'water', type: 'string' },
          },
        }),
      s: z
        .string()
        .default('0')
        .openapi({
          param: {
            description: 'first hit (start index)',
            in: 'query',
            name: 's',
            required: true,
            schema: { default: '0', type: 'string' },
          },
        }),
      e: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .openapi({
          param: {
            description: 'last hit (end index)',
            in: 'query',
            name: 'e',
            required: true,
            schema: { default: 20, type: 'integer' },
          },
        }),
      nFrag: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(5)
        .openapi({
          param: {
            description: 'number of fragment snippets to return (< 10)',
            in: 'query',
            name: 'nFrag',
            required: true,
            schema: { default: 5, type: 'integer' },
          },
        }),
      lFrag: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .openapi({
          param: {
            description: 'length of fragment snippets (< 200)',
            in: 'query',
            name: 'lFrag',
            required: true,
            schema: { default: 100, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'List of metadata available for the specified aspect and search term' },
  },
})
