import { createRoute, z } from '@hono/zod-openapi'

export const getPlatformDocsRoute = createRoute({
  method: 'get',
  path: '/platform/docs',
  tags: ['private'],
  summary: 'Browse API documentation',
  description: 'Access api docs as served by Redoc',
  operationId: 'getApiDocs',
  responses: { 200: { description: 'Redoc API documentation file' } },
})

export const getPlatformDocsSwaggerUiRoute = createRoute({
  method: 'get',
  path: '/platform/docs/swagger-ui',
  tags: ['private'],
  summary: 'Browse interactive API documentation',
  description: 'Interactive API docs using swagger-ui',
  operationId: 'getApiSwaggerUI',
  responses: { 200: { description: 'Swagger-UI API documentation file' } },
})

export const getPlatformPrivateAutocompleteRoute = createRoute({
  method: 'get',
  path: '/platform/private/autocomplete',
  tags: ['private'],
  summary: 'Get `autocomplete` objects.',
  description: 'Search for the closest term to autocomplete in the search box.\n',
  operationId: 'getAutocomplete',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'A full text query.',
            in: 'query',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum amount of results to return. Defaults to 5.',
            in: 'query',
            name: 'size',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPrivateBesthitsearchRoute = createRoute({
  method: 'post',
  path: '/platform/private/besthitsearch',
  tags: ['private'],
  summary: 'Find the best hit',
  description: 'Fire the search method for multiple strings\n',
  operationId: 'postBestHitSearch',
  request: {
    body: {
      description: 'list of strings to search for',
      content: { 'application/json': { schema: z.string() } },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPrivateDiseaseRoute = createRoute({
  method: 'post',
  path: '/platform/private/disease',
  tags: ['private'],
  summary: 'Find information about a list of diseases',
  description: 'Get `disease` objects.\n',
  operationId: 'postDiseaseById',
  request: {
    body: {
      description: 'An EFO identifier.',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({ example: '{"disease":["disease1", "disease2"],\n"facets" = "true"}\n' }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPrivateDiseaseDiseaseRoute = createRoute({
  method: 'get',
  path: '/platform/private/disease/{disease}',
  tags: ['private'],
  summary: 'Find information about a disease',
  description: 'Get `disease` objects.\n',
  operationId: 'getDiseaseById',
  request: {
    params: z.object({
      disease: z
        .string()
        .openapi({
          param: {
            description: 'An EFO identifier.',
            in: 'path',
            name: 'disease',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPrivateDrugDRUGIDRoute = createRoute({
  method: 'get',
  path: '/platform/private/drug/{DRUG_ID}',
  tags: ['private'],
  summary: 'Get drug by ID',
  description: 'Get `drug` objects.\n',
  operationId: 'getDrugByID',
  request: {
    query: z.object({
      drug_id: z
        .string()
        .openapi({
          param: {
            description: 'An ID in the drug index.',
            in: 'query',
            name: 'drug_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      DRUG_ID: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'DRUG_ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPrivateEcoECOIDRoute = createRoute({
  method: 'get',
  path: '/platform/private/eco/{ECO_ID}',
  tags: ['private'],
  summary: 'Get evidence code by ID',
  description: 'Get `ECO` objects.\n',
  operationId: 'getECObyID',
  request: {
    params: z.object({
      ECO_ID: z
        .string()
        .openapi({
          param: {
            description:
              'An [evidence code ontology](http://www.ebi.ac.uk/ols/v2/browse.do?ontName=ECO) ID.',
            in: 'path',
            name: 'ECO_ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPrivateEnrichmentTargetsRoute = createRoute({
  method: 'post',
  path: '/platform/private/enrichment/targets',
  tags: ['private'],
  summary: 'Enrichment analysis',
  description: 'Returns an enrichment analysis for a list of targets passed in the body\n',
  operationId: 'postEnrichmentTarget',
  request: {
    body: {
      description: 'IDs of the targets to do the enrichment analysis for.',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              example:
                '{"target" : ["ENSG00000001", "ENSG00000002"],\n "pvalue" : 0.001,\n "size" : 20}\n',
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPrivateQuicksearchRoute = createRoute({
  method: 'get',
  path: '/platform/private/quicksearch',
  tags: ['private'],
  summary: 'Search most relevant results',
  description: 'Get `search-result` objects. Enables search bar functionality.\n',
  operationId: 'getQuickSearch',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'A full text query.',
            in: 'query',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum amount of results to return. Defaults to 5.',
            in: 'query',
            name: 'size',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPrivateRelationRoute = createRoute({
  method: 'post',
  path: '/platform/private/relation',
  tags: ['private'],
  summary: 'Find related entities',
  description: 'Get `relation` objects.\n',
  operationId: 'postRelation',
  request: {
    body: {
      description: 'An Ensembl gene identifier.',
      content: {
        'application/json': {
          schema: z.string().openapi({ example: '{"subject":["gene1", "gene2"]}\n' }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPrivateRelationDiseaseDiseaseRoute = createRoute({
  method: 'get',
  path: '/platform/private/relation/disease/{disease}',
  tags: ['private'],
  summary: 'Find related entities by disease',
  description: 'Get `relation` objects starting from diseases.\n',
  operationId: 'getRelationByEFOID',
  request: {
    params: z.object({
      disease: z
        .string()
        .openapi({
          param: {
            description: 'An EFO gene identifier.',
            in: 'path',
            name: 'disease',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPrivateRelationTargetTargetRoute = createRoute({
  method: 'get',
  path: '/platform/private/relation/target/{target}',
  tags: ['private'],
  summary: 'Find related entities by target',
  description: 'Get `relation` objects starting from diseases.\n',
  operationId: 'getRelationByENSGID',
  request: {
    params: z.object({
      target: z
        .string()
        .openapi({
          param: {
            description: 'An Ensembl gene identifier.',
            in: 'path',
            name: 'target',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPrivateTargetRoute = createRoute({
  method: 'post',
  path: '/platform/private/target',
  tags: ['private'],
  summary: 'Find information about a list of targets',
  description: 'Get `target` objects. Used for the target profile page.\n',
  operationId: 'postTargetByENSGID',
  request: {
    body: {
      description: 'An Ensembl gene identifier.',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({ example: '{"target":["target1", "target2"],\n"facets" = "true"}\n' }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPrivateTargetExpressionRoute = createRoute({
  method: 'get',
  path: '/platform/private/target/expression',
  tags: ['private'],
  summary: 'Query expression levels',
  description: 'Get `gene-expression` objects.\n',
  operationId: 'getTargetExpressionByENSGID',
  request: {
    query: z.object({
      gene: z
        .string()
        .openapi({
          param: {
            description: 'An Ensembl gene identifier.',
            in: 'query',
            name: 'gene',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPrivateTargetExpressionRoute = createRoute({
  method: 'post',
  path: '/platform/private/target/expression',
  tags: ['private'],
  summary: 'Batch query expression levels',
  description: 'Get `gene-expression` objects.\n',
  operationId: 'postTargetExpressionByENSGID',
  request: {
    body: {
      description: 'An Ensembl gene identifier.',
      content: {
        'application/json': {
          schema: z.string().openapi({ example: '{"gene":["gene1", "gene2"]}\n' }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPrivateTargetTargetRoute = createRoute({
  method: 'get',
  path: '/platform/private/target/{target}',
  tags: ['private'],
  summary: 'Find information about a target',
  description: 'Get `target` objects.\n',
  operationId: 'getTargetByENSGID',
  request: {
    params: z.object({
      target: z
        .string()
        .openapi({
          param: {
            description: 'An Ensembl gene ID for the target of interest.',
            in: 'path',
            name: 'target',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicAssociationRoute = createRoute({
  method: 'get',
  path: '/platform/public/association',
  tags: ['public', 'retrieve'],
  summary: 'Get association by id',
  description:
    'Once we integrate all evidence connecting a target to a specific disease, we\n compute an association score by the means of an harmonic sum. This *association score* provides\n an indication of how strong the evidence behind each connection is and can be\n used to rank genes in order of likelihood as drug targets.\n The association ID is constructed by using the Ensembl ID of the gene and the\n EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).\n The method returns an association object, which contains the data and summary\n on each evidence type included in the calculation of the score, as well as the score itself.\n',
  operationId: 'getAssociationById',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'An association ID usually in the form of `TARGET_ID-DISEASE_ID`.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicAssociationFilterRoute = createRoute({
  method: 'get',
  path: '/platform/public/association/filter',
  tags: ['public', 'filter'],
  summary: 'Filter available associations',
  description:
    'More complex queries for associations scores and objects can be done using\nthis method, which allows to sort in different order, restrict to a specific class\nof diseases or targets, as well as filtering results by score and associated pathways.\n',
  operationId: 'getAssociationFilter',
  request: {
    query: z.object({
      target: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A target identifier listed as target.id.',
            in: 'query',
            name: 'target',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disease: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An EFO code listed as disease.id.',
            in: 'query',
            name: 'disease',
            required: false,
            schema: { type: 'string' },
          },
        }),
      therapeutic_area: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An EFO code of a therapeutic area.',
            in: 'query',
            name: 'therapeutic_area',
            required: false,
            schema: { type: 'string' },
          },
        }),
      datasource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Data source to consider.',
            in: 'query',
            name: 'datasource',
            required: false,
            schema: { type: 'string' },
          },
        }),
      datatype: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Data type to consider.',
            in: 'query',
            name: 'datatype',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pathway: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A Reactome pathway identifier (returning only those targets linked to the specified pathway).',
            in: 'query',
            name: 'pathway',
            required: false,
            schema: { type: 'string' },
          },
        }),
      target_class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A ChEMBL target class identifier (returning only those targets belonging to the specified class).',
            in: 'query',
            name: 'target_class',
            required: false,
            schema: { type: 'string' },
          },
        }),
      uniprotkw: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A UniProt keyword (meaning all the targets linked to that keyword).',
            in: 'query',
            name: 'uniprotkw',
            required: false,
            schema: { type: 'string' },
          },
        }),
      direct: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true`, it returns associations that have at least one direct evidence connecting the target and the disease. If `false` it only returns associations for which there is no direct evidence connecting the target and the disease, but only evidence connecting the target to a children of the disease in the EFO ontology.',
            in: 'query',
            name: 'direct',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      datastructure: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.",
            in: 'query',
            name: 'datastructure',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Fields you want to retrieve. This will get priority over the data structure requested.',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      facets: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns facets',
            in: 'query',
            name: 'facets',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      scorevalue_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.',
            in: 'query',
            name: 'scorevalue_min',
            required: false,
            schema: { default: 0, format: 'float', type: 'number' },
          },
        }),
      scorevalue_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by maximum score value.',
            in: 'query',
            name: 'scorevalue_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      scorevalue_types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Score types to apply the score value min and max filters. The default is `overall`.',
            in: 'query',
            name: 'scorevalue_types',
            required: false,
            schema: { type: 'string' },
          },
        }),
      size: z
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
            description: 'Maximum amount of results to return. Defaults to 10, max is 10000.',
            in: 'query',
            name: 'size',
            required: false,
            schema: { format: 'integer', type: 'number' },
          },
        }),
      from: z
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
            description: 'How many initial results should be skipped. Defaults to 0.',
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'integer', type: 'number' },
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.",
            in: 'query',
            name: 'format',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Sort by the given score type. Defaults to 'overall' and descending order. Use '~' prefix to do ascending\norder e.g. '~overall'. You will call a data type score like: 'datatypes.literature', and a data source as\n'datasources.gwas'. Supports multiple entries.\n",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the filtered results to those matching the passed string. The matching is done with a\nphrase match prefix.\n',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPublicAssociationFilterRoute = createRoute({
  method: 'post',
  path: '/platform/public/association/filter',
  tags: ['public', 'filter'],
  summary: 'Batch query available associations',
  description:
    'Complex queries and filters for association objects can also be submitted using a JSON\nobject and the equivalent POST method.\n',
  operationId: 'postAssociationFilter',
  request: {
    body: {
      description: 'Filters to apply when retrieving association objects.',
      content: {
        'application/json': {
          schema: z.string().openapi({ example: '{"target":["target1", "target2"]}\n' }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicEvidenceRoute = createRoute({
  method: 'get',
  path: '/platform/public/evidence',
  tags: ['public', 'retrieve'],
  summary: 'Get evidence by ID',
  description:
    'We call **evidence** a unit of data that support a connection between a target and a disease.\nThe Open Targets Platform integrates multiple types of evidence including genetic associations,\nsomatic mutations, RNA expression and target-disease associations mined from the literature.\nThis method allows you to retrieve a single evidence item or a list of pieces of evidence by using their\ntargetvalidation.org ID.\n\nEvidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).\nYou can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).\n\n**Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.\n',
  operationId: 'getEvidenceById',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Internal unique ID of the evidence string to retrieve.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPublicEvidenceRoute = createRoute({
  method: 'post',
  path: '/platform/public/evidence',
  tags: ['public', 'retrieve'],
  summary: 'Get evidence for a list of IDs',
  description:
    'This is the POST version of [/public/evidence](#!/public/get_public_evidence).\nIt allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.\n',
  operationId: 'postEvidenceById',
  request: {
    body: {
      description: 'IDs of the evidence string to retrieve.',
      content: {
        'application/json': { schema: z.string().openapi({ example: '{"id":["id1", "id2"]}\n' }) },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicEvidenceFilterRoute = createRoute({
  method: 'get',
  path: '/platform/public/evidence/filter',
  tags: ['public', 'filter'],
  summary: 'Filter available evidence',
  description:
    'The filter method allows to retrieve the specific data that supports a connection between targets and diseases.\nFilters can be used to restrict the results by source and type of data,\nor limit results to targets which are part of a particular pathway.\nMinimum and maximum scores can be specified as well as the type of evidence linking target and disease.\n**Note** that multiple genes and diseases can be specified in the same request.\n',
  operationId: 'getEvidenceFilter',
  request: {
    query: z.object({
      target: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A target identifier listed as target.id.',
            in: 'query',
            name: 'target',
            required: false,
            schema: { type: 'string' },
          },
        }),
      disease: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An EFO code listed as disease.id.',
            in: 'query',
            name: 'disease',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'data source': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Data source to consider.',
            in: 'query',
            name: 'data source',
            required: false,
            schema: { type: 'string' },
          },
        }),
      datatype: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Data type to consider.',
            in: 'query',
            name: 'datatype',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pathway: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A pathway identifier (meaning all the targets linked to that pathway).',
            in: 'query',
            name: 'pathway',
            required: false,
            schema: { type: 'string' },
          },
        }),
      uniprotkw: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A UniProt keyword (meaning all the targets linked to that keyword).',
            in: 'query',
            name: 'uniprotkw',
            required: false,
            schema: { type: 'string' },
          },
        }),
      datastructure: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.",
            in: 'query',
            name: 'datastructure',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The fields you want to retrieve. This will get priority over the data structure requested.',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
      scorevalue_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.',
            in: 'query',
            name: 'scorevalue_min',
            required: false,
            schema: { default: 0, format: 'float', type: 'number' },
          },
        }),
      scorevalue_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by maximum score value.',
            in: 'query',
            name: 'scorevalue_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Sort by the given field. The default is 'scores.association_score' in descending order. Use '~' prefix to do ascending\norder e.g. '~scores.association_score'. It supports multiple entries.\n",
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
      size: z
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
            description: 'Maximum amount of results to return. Defaults to 10, max is 10000.',
            in: 'query',
            name: 'size',
            required: false,
            schema: { format: 'integer', type: 'number' },
          },
        }),
      from: z
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
            description: 'How many initial results should be skipped. Defaults to 0.',
            in: 'query',
            name: 'from',
            required: false,
            schema: { format: 'integer', type: 'number' },
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.",
            in: 'query',
            name: 'format',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const postPlatformPublicEvidenceFilterRoute = createRoute({
  method: 'post',
  path: '/platform/public/evidence/filter',
  tags: ['public', 'filter'],
  summary: 'Batch filter available evidence',
  description:
    'POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).\nFilters can be specified as part of a `json` object in the body, simplifying the submission of queries.\n',
  operationId: 'postEvidenceFilter',
  request: {
    body: {
      description: 'Filters to apply when retrieving evidence string objects.',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              example:
                '{"target":["ENSG00000094755", "ENSG00000167207"], "disease":["EFO_0003767"]}\n',
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicSearchRoute = createRoute({
  method: 'get',
  path: '/platform/public/search',
  tags: ['public', 'search'],
  summary: 'Search for a disease or a target',
  description:
    'This method allows you to look for gene or diseases of interest using a free text search,\nreplicating the functionality of the search box on our homepage. It should be used to identify\nthe best match for a disease or target of interest, rather than gathering a specific set of evidence.\n',
  operationId: 'getSearch',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'A full text query.',
            in: 'query',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum amount of results to return. Defaults to 10, max is 10000.',
            in: 'query',
            name: 'size',
            required: false,
            schema: { type: 'string' },
          },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'How many initial results should be skipped. Defaults to 0.',
            in: 'query',
            name: 'from',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict the search to the type requested. Eg. `target` or `disease`.',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicUtilsMetricsRoute = createRoute({
  method: 'get',
  path: '/platform/public/utils/metrics',
  tags: ['public', 'utils'],
  summary: 'Get metrics about the current data release',
  description:
    'Returns the metrics about associations and evidences, divided by datasource, genes and so on.\n',
  operationId: 'getDataMetrics',
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicUtilsPingRoute = createRoute({
  method: 'get',
  path: '/platform/public/utils/ping',
  tags: ['public', 'utils'],
  summary: 'Ping service',
  description: 'Check if the API is up\n',
  operationId: 'getPing',
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicUtilsStatsRoute = createRoute({
  method: 'get',
  path: '/platform/public/utils/stats',
  tags: ['public', 'utils'],
  summary: 'Get statistics about the current data release',
  description: 'Returns the number of associations and evidences, divided by datasource.\n',
  operationId: 'getDataStats',
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicUtilsTherapeuticareasRoute = createRoute({
  method: 'get',
  path: '/platform/public/utils/therapeuticareas',
  tags: ['public', 'utils'],
  summary: 'Get the list of therapeutic areas about the current data release',
  description: 'Returns the list of therapeutic areas for the current data release\n',
  operationId: 'getTherapeuticAreas',
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformPublicUtilsVersionRoute = createRoute({
  method: 'get',
  path: '/platform/public/utils/version',
  tags: ['public', 'utils'],
  summary: 'Get API version',
  description: 'Returns current API version.\n',
  operationId: 'getVersion',
  responses: { 200: { description: 'Successful response' } },
})

export const getPlatformSwaggerRoute = createRoute({
  method: 'get',
  path: '/platform/swagger',
  tags: ['private'],
  summary: 'Get OpenAPI schema',
  description: 'Get swagger.yaml specs for the API',
  operationId: 'getSwagger',
  responses: { 200: { description: 'Swagger.yaml file' } },
})
