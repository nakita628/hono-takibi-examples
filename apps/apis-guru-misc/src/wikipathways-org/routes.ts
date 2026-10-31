import { createRoute, z } from '@hono/zod-openapi'

export const postCreatePathwayRoute = createRoute({
  method: 'post',
  path: '/createPathway',
  tags: ['All functions', 'Write (create/update/delete)'],
  description:
    'createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.',
  request: {
    query: z.object({
      gpml: z
        .string()
        .openapi({
          param: {
            description: 'The GPML code for the new pathway',
            in: 'query',
            name: 'gpml',
            required: true,
            schema: { type: 'string' },
          },
        }),
      auth: z
        .string()
        .openapi({
          param: {
            description: 'The authentication info',
            in: 'query',
            name: 'auth',
            required: true,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'The user name',
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getFindInteractionsRoute = createRoute({
  method: 'get',
  path: '/findInteractions',
  tags: ['Search', 'All functions'],
  description: 'findInteractionsFind interactions defined in WikiPathways pathways.',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: "The name of an entity to find interactions for (e.g. 'P53')",
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getFindPathwaysByLiteratureRoute = createRoute({
  method: 'get',
  path: '/findPathwaysByLiterature',
  tags: ['Search', 'All functions'],
  description: 'findPathwaysByLiterature',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The query, can be a pubmed id, author name or title keyword.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getFindPathwaysByTextRoute = createRoute({
  method: 'get',
  path: '/findPathwaysByText',
  tags: ['All functions', 'Search'],
  description: 'findPathwaysByText',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: "The query, e.g. 'apoptosis'",
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      species: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional, limit the query by species. Leave',
            in: 'query',
            name: 'species',
            required: false,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getFindPathwaysByXrefRoute = createRoute({
  method: 'get',
  path: '/findPathwaysByXref',
  tags: ['All functions', 'Search'],
  description: 'findPathwaysByXref',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .openapi({
          param: {
            description: 'string',
            explode: false,
            in: 'query',
            name: 'ids',
            required: true,
            schema: { items: {}, type: 'array' },
            style: 'form',
          },
        }),
      codes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'string',
            explode: false,
            in: 'query',
            name: 'codes',
            required: false,
            schema: { items: {}, type: 'array' },
            style: 'form',
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetColoredPathwayRoute = createRoute({
  method: 'get',
  path: '/getColoredPathway',
  tags: ['All functions', 'Download'],
  description: 'getColoredPathwayGet a colored image version of the pathway.',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revision: z
        .string()
        .openapi({
          param: {
            description: "The revision of the pathway (use '0' for most recent)",
            in: 'query',
            name: 'revision',
            required: true,
            schema: { type: 'string' },
          },
        }),
      graphId: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .openapi({
          param: {
            description: 'string',
            explode: false,
            in: 'query',
            name: 'graphId',
            required: true,
            schema: { items: {}, type: 'array' },
            style: 'form',
          },
        }),
      color: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .openapi({
          param: {
            description: 'string',
            explode: false,
            in: 'query',
            name: 'color',
            required: true,
            schema: { items: {}, type: 'array' },
            style: 'form',
          },
        }),
      fileType: z
        .string()
        .openapi({
          param: {
            description: "The image type (One of 'svg', 'pdf' or 'png').",
            in: 'query',
            name: 'fileType',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetCurationTagHistoryRoute = createRoute({
  method: 'get',
  path: '/getCurationTagHistory',
  tags: ['All functions', 'History', 'Curation tags'],
  description: 'getCurationTagHistory',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      timestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include history from after the given date',
            in: 'query',
            name: 'timestamp',
            required: false,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetCurationTagsRoute = createRoute({
  method: 'get',
  path: '/getCurationTags',
  tags: ['All functions', 'Pathway information', 'Curation tags'],
  description:
    'getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetCurationTagsByNameRoute = createRoute({
  method: 'get',
  path: '/getCurationTagsByName',
  tags: ['All functions', 'Pathway list', 'Curation tags'],
  description:
    'getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.',
  request: {
    query: z.object({
      tagName: z
        .string()
        .openapi({
          param: {
            description: 'The tag name',
            in: 'query',
            name: 'tagName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetOntologyTermsByPathwayRoute = createRoute({
  method: 'get',
  path: '/getOntologyTermsByPathway',
  tags: ['Pathway information', 'Curation tags', 'All functions'],
  description: 'getOntologyTermsByPathway',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetPathwayRoute = createRoute({
  method: 'get',
  path: '/getPathway',
  tags: ['Pathway information', 'All functions'],
  description: 'getPathway',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revision: z
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
            description: 'The revision number of the pathway (use 0 for most recent)',
            in: 'query',
            name: 'revision',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetPathwayAsRoute = createRoute({
  method: 'get',
  path: '/getPathwayAs',
  tags: ['Download', 'All functions'],
  description: 'getPathwayAsDownload a pathway in the specified file format.',
  request: {
    query: z.object({
      fileType: z
        .string()
        .openapi({
          param: {
            description: 'The file type to convert to, e.g.',
            in: 'query',
            name: 'fileType',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revision: z
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
            description: 'The revision number of the pathway (use 0 for most recent)',
            in: 'query',
            name: 'revision',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetPathwayHistoryRoute = createRoute({
  method: 'get',
  path: '/getPathwayHistory',
  tags: ['History', 'All functions'],
  description: 'getPathwayHistoryGet the revision history of a pathway.',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Limit by time, only history items after the given',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetPathwayInfoRoute = createRoute({
  method: 'get',
  path: '/getPathwayInfo',
  tags: ['Pathway information', 'All functions'],
  description:
    'getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetPathwaysByOntologyTermRoute = createRoute({
  method: 'get',
  path: '/getPathwaysByOntologyTerm',
  tags: ['Pathway list', 'Ontology tags', 'All functions'],
  description: 'getPathwaysByOntologyTerm',
  request: {
    query: z.object({
      term: z
        .string()
        .openapi({
          param: {
            description: 'The Ontology term',
            in: 'query',
            name: 'term',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetPathwaysByParentOntologyTermRoute = createRoute({
  method: 'get',
  path: '/getPathwaysByParentOntologyTerm',
  tags: ['Pathway list', 'Ontology tags', 'All functions'],
  description: 'getPathwaysByParentOntologyTerm',
  request: {
    query: z.object({
      term: z
        .string()
        .openapi({
          param: {
            description: 'The Ontology term',
            in: 'query',
            name: 'term',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetRecentChangesRoute = createRoute({
  method: 'get',
  path: '/getRecentChanges',
  tags: ['History', 'All functions'],
  description:
    'getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.',
  request: {
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Get the changes after this time',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetUserByOrcidRoute = createRoute({
  method: 'get',
  path: '/getUserByOrcid',
  tags: ['User management', 'All functions'],
  description: 'getUserByOrcid',
  request: {
    query: z.object({
      orcid: z
        .string()
        .openapi({
          param: {
            description: 'string',
            in: 'query',
            name: 'orcid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getGetXrefListRoute = createRoute({
  method: 'get',
  path: '/getXrefList',
  tags: ['Download', 'All functions'],
  description: 'getXrefList',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier.',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      code: z
        .string()
        .openapi({
          param: {
            description: "The database code to translate to (e.g. 'S' for UniProt).",
            in: 'query',
            name: 'code',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getListOrganismsRoute = createRoute({
  method: 'get',
  path: '/listOrganisms',
  tags: ['Organism list', 'All functions'],
  description: 'listOrganisms',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getListPathwaysRoute = createRoute({
  method: 'get',
  path: '/listPathways',
  tags: ['Pathway list', 'All functions'],
  description: 'listPathways',
  request: {
    query: z.object({
      organism: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organism to filter by (optional)',
            in: 'query',
            name: 'organism',
            required: false,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getLoginRoute = createRoute({
  method: 'get',
  path: '/login',
  tags: ['User management', 'All functions'],
  description:
    'loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "The usernameset_include_path(get_include_path().PATH_SEPARATOR.realpath('../includes').PATH_SEPARATOR.realpath('../').PATH_SEPARATOR);",
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pass: z
        .string()
        .openapi({
          param: {
            description: 'The password',
            in: 'query',
            name: 'pass',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getRemoveCurationTagRoute = createRoute({
  method: 'get',
  path: '/removeCurationTag',
  tags: ['All functions', 'Search'],
  description: 'removeCurationTagRemove a curation tag from a pathway.',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tagName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the tag to apply',
            in: 'query',
            name: 'tagName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      auth: z
        .string()
        .openapi({
          param: {
            description: 'The authentication data',
            in: 'query',
            name: 'auth',
            required: true,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'The user name',
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getRemoveOntologyTagRoute = createRoute({
  method: 'get',
  path: '/removeOntologyTag',
  tags: ['Write (create/update/delete)', 'Ontology tags', 'All functions'],
  description: 'removeOntologyTag',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      termId: z
        .string()
        .openapi({
          param: {
            description: 'The ontology term identifier in the ontology',
            in: 'query',
            name: 'termId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      auth: z
        .string()
        .openapi({
          param: {
            description: 'The authentication key',
            in: 'query',
            name: 'auth',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .openapi({
          param: {
            description: 'The username',
            in: 'query',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getSaveCurationTagRoute = createRoute({
  method: 'get',
  path: '/saveCurationTag',
  tags: ['All functions', 'Write (create/update/delete)', 'Curation tags'],
  description: 'saveCurationTag',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      tagName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the tag to apply',
            in: 'query',
            name: 'tagName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      text: z
        .string()
        .openapi({
          param: {
            description: 'string',
            in: 'query',
            name: 'text',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revision: z
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
            description: 'The revision this tag applies to',
            in: 'query',
            name: 'revision',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      auth: z
        .string()
        .openapi({
          param: {
            description: 'The authentication key',
            in: 'query',
            name: 'auth',
            required: true,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'The user name',
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getSaveOntologyTagRoute = createRoute({
  method: 'get',
  path: '/saveOntologyTag',
  tags: ['Write (create/update/delete)', 'Ontology tags', 'All functions'],
  description: 'saveOntologyTag',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      term: z
        .string()
        .openapi({
          param: {
            description: 'The ontology term to apply',
            in: 'query',
            name: 'term',
            required: true,
            schema: { type: 'string' },
          },
        }),
      termId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier of the term in the ontology',
            in: 'query',
            name: 'termId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      auth: z
        .string()
        .openapi({
          param: {
            description: 'The authentication key',
            in: 'query',
            name: 'auth',
            required: true,
            schema: { type: 'string' },
          },
        }),
      user: z
        .string()
        .openapi({
          param: {
            description: 'The username',
            in: 'query',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})

export const getUpdatePathwayRoute = createRoute({
  method: 'get',
  path: '/updatePathway',
  tags: ['Write (create/update/delete)', 'All functions'],
  description:
    'updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.',
  request: {
    query: z.object({
      pwId: z
        .string()
        .openapi({
          param: {
            description: 'The pathway identifier',
            in: 'query',
            name: 'pwId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      description: z
        .string()
        .openapi({
          param: {
            description: 'A description of the modifications',
            in: 'query',
            name: 'description',
            required: true,
            schema: { type: 'string' },
          },
        }),
      gpml: z
        .string()
        .openapi({
          param: {
            description: 'The updated GPML code',
            in: 'query',
            name: 'gpml',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revision: z
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
            description: 'The revision the GPML code is based on',
            in: 'query',
            name: 'revision',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      auth: z
        .string()
        .openapi({
          param: {
            description: 'The authentication key',
            in: 'query',
            name: 'auth',
            required: true,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username',
            in: 'query',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml', 'html', 'dump', 'jpg', 'pdf'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              default: 'xml',
              enum: ['json', 'xml', 'html', 'dump', 'jpg', 'pdf'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: 'everything ok' } },
})
