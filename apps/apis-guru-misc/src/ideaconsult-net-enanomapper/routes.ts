import { createRoute, z } from '@hono/zod-openapi'

const DatasetSchema = z
  .object({
    dataEntry: z.object({}).exactOptional(),
    feature: z.object({}).exactOptional(),
    model_uri: z.string().exactOptional(),
    query: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Dataset')

const FacetSchema = z
  .object({ facet: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('Facet')

const InvestigationSchema = z
  .object({
    _childDocuments_: z.object({}).exactOptional(),
    assay: z.string().exactOptional(),
    document_uuid: z.string().exactOptional(),
    effectendpoint: z.string().exactOptional(),
    endpoint: z.string().exactOptional(),
    endpointcategory: z.string().exactOptional(),
    err: z.number().exactOptional(),
    errQualifier: z.string().exactOptional(),
    guidance: z.string().exactOptional(),
    investigation: z.string().exactOptional(),
    loQualifier: z.string().exactOptional(),
    loValue: z.number().exactOptional(),
    name: z.string().exactOptional(),
    owner_name: z.string().exactOptional(),
    publicname: z.string().exactOptional(),
    reference: z.string().exactOptional(),
    reference_owner: z.string().exactOptional(),
    reference_year: z.string().exactOptional(),
    resulttype: z.string().exactOptional(),
    s_uuid: z.string().exactOptional(),
    studyResultType: z.string().exactOptional(),
    substanceType: z.string().exactOptional(),
    textValue: z.string().exactOptional(),
    topcategory: z.string().exactOptional(),
    type_s: z.string().exactOptional(),
    unit: z.string().exactOptional(),
    upQualifier: z.string().exactOptional(),
    upValue: z.number().exactOptional(),
    updated: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Investigation')

const SolrQuerySchema = z
  .object({
    facet: z.string().exactOptional(),
    filter: z.string().exactOptional(),
    query: z.string().exactOptional(),
    rows: z.int().exactOptional(),
    sort: z.boolean().exactOptional(),
    start: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SolrQuery')

const SolrResponseSchema = z
  .object({
    response: z
      .object({
        docs: z.array(z.object({})).exactOptional(),
        maxScore: z.number().exactOptional(),
        numFound: z.int().exactOptional(),
        start: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    responseHeader: z
      .object({
        QTime: z.int().exactOptional(),
        params: z.object({}).exactOptional(),
        status: z.int().exactOptional(),
        zkConnected: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SolrResponse')

const SubstanceSchema = z
  .object({ substance: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('Substance')

const SubstanceCompositionSchema = z
  .object({ composition: z.object({}).exactOptional(), feature: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('SubstanceComposition')

const SubstanceStudySchema = z
  .object({ study: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('SubstanceStudy')

const SubstanceStudySummarySchema = z
  .object({ facet: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('SubstanceStudySummary')

const AmbitDatabaseIdParamsSchema = z
  .enum([
    'calibrate',
    'enanomapper',
    'enpra',
    'marina',
    'nanogenotox',
    'nanoinformatix',
    'nanoreg1',
    'nanoreg2',
    'nanotest',
  ])
  .default('nanoreg1')
  .openapi({
    param: {
      description: 'Database ID',
      explode: false,
      in: 'path',
      name: 'db',
      required: true,
      schema: {
        default: 'nanoreg1',
        enum: [
          'calibrate',
          'enanomapper',
          'enpra',
          'marina',
          'nanogenotox',
          'nanoinformatix',
          'nanoreg1',
          'nanoreg2',
          'nanotest',
        ],
        type: 'string',
      },
      style: 'simple',
    },
  })

const QueryBodyRequestBody = {
  description: 'a JSON object with Solr query parameters',
  content: {
    'application/json': {
      schema: z
        .object({
          facet: z.object({}).exactOptional(),
          params: z
            .object({ fl: z.array(z.string()).exactOptional(), rows: z.int().exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({
          example:
            '{\n  "params": {\n    "fl": [\n      "[child parentFilter=type_s:substance childFilter=type_s:composition limit=100]",\n      "dbtag_hss",\n      "name:name_hs",\n      "publicname:publicname_hs",\n      "owner_name:owner_name_hs",\n      "substanceType:substanceType_hs",\n      "s_uuid:s_uuid_hs",\n      "content:content_hss",\n      "SUMMARY.*"\n    ],\n    "rows": 20\n  },\n  "facet": {\n    "owner_name": {\n      "type": "terms",\n      "field": "owner_name_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "owner_name_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "reference_owner": {\n      "type": "terms",\n      "field": "reference_owner_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "reference_owner_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "substanceType": {\n      "type": "terms",\n      "field": "substanceType_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "substanceType_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "nm_name": {\n      "type": "terms",\n      "field": "publicname_s",\n      "mincount": 451,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "nm_name_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "protocol": {\n      "type": "terms",\n      "field": "guidance_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "protocol_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "method": {\n      "type": "terms",\n      "field": "E.method_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "method_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "cell": {\n      "type": "terms",\n      "field": "E.cell_type_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "cell_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "species": {\n      "type": "terms",\n      "field": "E.animal_model_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "species_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "route": {\n      "type": "terms",\n      "field": "E.exposure_route_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "route_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "interpretation": {\n      "type": "terms",\n      "field": "MEDIUM_s",\n      "mincount": 2,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "interpretation_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "dprotocol": {\n      "type": "terms",\n      "field": "Dispersion protocol_s",\n      "mincount": 2,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "dprotocol_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "reference_year": {\n      "type": "terms",\n      "field": "reference_year_s",\n      "mincount": 2,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "reference_year_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "reference": {\n      "type": "terms",\n      "field": "reference_s",\n      "mincount": 2,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "reference_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "release": {\n      "type": "terms",\n      "field": "updated_s",\n      "mincount": 1,\n      "limit": -1,\n      "domain": {\n        "excludeTags": "release_tag",\n        "blockChildren": "type_s:substance"\n      }\n    },\n    "topcategory": {\n      "type": "terms",\n      "field": "topcategory_s",\n      "mincount": 1,\n      "limit": -1,\n      "facet": {\n        "min": "min(loValue_d)",\n        "max": "max(loValue_d)",\n        "avg": "avg(loValue_d)",\n        "endpointcategory": {\n          "type": "terms",\n          "field": "endpointcategory_s",\n          "mincount": 1,\n          "limit": -1,\n          "facet": {\n            "min": "min(loValue_d)",\n            "max": "max(loValue_d)",\n            "avg": "avg(loValue_d)",\n            "effectendpoint": {\n              "type": "terms",\n              "field": "effectendpoint_s",\n              "mincount": 1,\n              "limit": -1,\n              "facet": {\n                "min": "min(loValue_d)",\n                "max": "max(loValue_d)",\n                "avg": "avg(loValue_d)",\n                "unit": {\n                  "type": "terms",\n                  "field": "unit_s",\n                  "mincount": 1,\n                  "limit": -1,\n                  "facet": {\n                    "min": "min(loValue_d)",\n                    "max": "max(loValue_d)",\n                    "avg": "avg(loValue_d)"\n                  }\n                }\n              }\n            }\n          }\n        }\n      },\n      "domain": {\n        "blockChildren": "type_s:substance"\n      }\n    }\n  }\n}\n',
          required: [],
        }),
    },
  },
}

export const getEnmDbInvestigationRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/investigation',
  tags: ['Studies'],
  summary: 'Details of multiple studies',
  description: 'Multiple studies in tabular form',
  operationId: 'getInvestigationResults',
  request: {
    params: z.object({ db: AmbitDatabaseIdParamsSchema }),
    query: z.object({
      type: z
        .enum([
          'byinvestigation',
          'byassay',
          'bysubstance',
          'byprovider',
          'bycitation',
          'bystudytype',
          'bystructure_inchikey',
          'bystructure_smiles',
          'bystructure_name',
          'bysubstance_name',
          'bysubstance_type',
        ])
        .openapi({
          param: {
            description: 'query type',
            example: 'bystudytype',
            explode: true,
            in: 'query',
            name: 'type',
            required: true,
            schema: {
              enum: [
                'byinvestigation',
                'byassay',
                'bysubstance',
                'byprovider',
                'bycitation',
                'bystudytype',
                'bystructure_inchikey',
                'bystructure_smiles',
                'bystructure_name',
                'bysubstance_name',
                'bysubstance_type',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      search: z
        .string()
        .openapi({
          param: {
            description: 'Search parameter, UUID of the investigation or a substance',
            example: 'PC_GRANULOMETRY_SECTION',
            explode: true,
            in: 'query',
            name: 'search',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      inchikey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search parameter, InChI key(s) of the substance component(s), comma delimited',
            example: 'YUYCVXFAYWRXLS-UHFFFAOYSA-N',
            explode: true,
            in: 'query',
            name: 'inchikey',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search parameter, chemical structure or substance identifier(s), comma delimited',
            explode: true,
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Entries found',
      content: {
        'application/json': { schema: InvestigationSchema },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: InvestigationSchema,
        },
        'application/x-javascript': { schema: InvestigationSchema },
        'text/csv': { schema: InvestigationSchema },
        'text/plain': { schema: InvestigationSchema },
      },
    },
    404: { description: 'Entries not found' },
  },
})

export const getEnmDbQueryCompoundTermRepresentationRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/query/compound/{term}/{representation}',
  tags: ['Structures'],
  summary: 'Exact chemical structure search',
  description: 'Returns compounds found',
  externalDocs: {
    description: 'Learn more about operations provided by this API.',
    url: 'http://ambit.sf.net',
  },
  operationId: 'searchByIdentifier',
  request: {
    params: z.object({
      db: AmbitDatabaseIdParamsSchema,
      term: z
        .enum(['search', 'url', 'inchikey'])
        .openapi({
          param: {
            description: 'search term type',
            explode: false,
            in: 'path',
            name: 'term',
            required: true,
            schema: { enum: ['search', 'url', 'inchikey'], type: 'string' },
            style: 'simple',
          },
        }),
      representation: z
        .enum([
          'all',
          'smiles',
          'reach',
          'stdinchi',
          'stdinchikey',
          'names',
          'iupac_name',
          'synonym',
          'cas',
          'einecs',
        ])
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'representation',
            required: true,
            schema: {
              enum: [
                'all',
                'smiles',
                'reach',
                'stdinchi',
                'stdinchikey',
                'names',
                'iupac_name',
                'synonym',
                'cas',
                'einecs',
              ],
              type: 'string',
            },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Compound identifier (SMILES, InChI, name, registry identifiers)',
            explode: true,
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      b64search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Base64 encoded mol file; if included, will be used instead of the 'search' parameter",
            explode: true,
            in: 'query',
            name: 'b64search',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      casesens: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Case sensitive search if yes',
            explode: true,
            in: 'query',
            name: 'casesens',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      bundle_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Bundle URI',
            explode: true,
            in: 'query',
            name: 'bundle_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      sameas: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Ontology URI to define groups of columns',
            explode: true,
            in: 'query',
            name: 'sameas',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Entries found',
      content: { 'application/json': { schema: DatasetSchema } },
    },
    404: { description: 'Entries not found' },
  },
})

export const getEnmDbQuerySimilarityRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/query/similarity',
  tags: ['Structures'],
  summary: 'Exact similarity search',
  description: 'Returns similar compounds',
  externalDocs: {
    description: 'Learn more about operations provided by this API.',
    url: 'http://ambit.sf.net',
  },
  operationId: 'searchBySimilarity',
  request: {
    params: z.object({ db: AmbitDatabaseIdParamsSchema }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Compound identifier (SMILES, InChI, name, registry identifiers)',
            explode: true,
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      b64search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Base64 encoded mol file; if included, will be used instead of the 'search' parameter",
            explode: true,
            in: 'query',
            name: 'b64search',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      type: z
        .enum(['smiles', 'mol', 'url'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the expected content of the search parameter',
            explode: true,
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['smiles', 'mol', 'url'], type: 'string' },
            style: 'form',
          },
        }),
      threshold: z
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
            description: 'Similarity threshold',
            explode: true,
            in: 'query',
            name: 'threshold',
            required: false,
            schema: { type: 'number' },
            style: 'form',
          },
        }),
      dataset_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict the search within the AMBIT dataset specified with the URI',
            explode: true,
            in: 'query',
            name: 'dataset_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      filterBySubstance: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the search within the set of structures with assigned substances',
            explode: true,
            in: 'query',
            name: 'filterBySubstance',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      bundle_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the structure is used in the specified bundle URI, the selection tag will be returned',
            explode: true,
            in: 'query',
            name: 'bundle_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      sameas: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Ontology URI to define groups of columns',
            explode: true,
            in: 'query',
            name: 'sameas',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      mol: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only for application/json; to include mol as JSON field',
            explode: true,
            in: 'query',
            name: 'mol',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Entries found',
      content: { 'application/json': { schema: DatasetSchema } },
    },
    404: { description: 'Entries not found' },
  },
})

export const getEnmDbQuerySmartsRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/query/smarts',
  tags: ['Structures'],
  summary: 'Substructure search',
  description: 'Returns compounds with the specified substructure',
  externalDocs: {
    description: 'Learn more about operations provided by this API.',
    url: 'http://ambit.sf.net',
  },
  operationId: 'searchBySmarts',
  request: {
    params: z.object({ db: AmbitDatabaseIdParamsSchema }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Compound identifier (SMILES, InChI, name, registry identifiers)',
            explode: true,
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      b64search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Base64 encoded mol file; if included, will be used instead of the 'search' parameter",
            explode: true,
            in: 'query',
            name: 'b64search',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      type: z
        .enum(['smiles', 'mol', 'url'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the expected content of the search parameter',
            explode: true,
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['smiles', 'mol', 'url'], type: 'string' },
            style: 'form',
          },
        }),
      dataset_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict the search within the AMBIT dataset specified with the URI',
            explode: true,
            in: 'query',
            name: 'dataset_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      filterBySubstance: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the search within the set of structures with assigned substances',
            explode: true,
            in: 'query',
            name: 'filterBySubstance',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      bundle_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the structure is used in the specified bundle URI, the selection tag will be returned',
            explode: true,
            in: 'query',
            name: 'bundle_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      sameas: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Ontology URI to define groups of columns',
            explode: true,
            in: 'query',
            name: 'sameas',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      mol: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only for application/json; to include mol as JSON field',
            explode: true,
            in: 'query',
            name: 'mol',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Entries found',
      content: { 'application/json': { schema: DatasetSchema } },
    },
    404: { description: 'Entries not found' },
  },
})

export const getEnmDbQueryStudyRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/query/study',
  tags: ['Studies', 'Facets'],
  summary: 'Search endpoint summary',
  description: 'Returns endpoint summary',
  operationId: 'getEndpointSummary',
  request: {
    params: z.object({ db: AmbitDatabaseIdParamsSchema }),
    query: z.object({
      top: z
        .enum(['P-CHEM', 'ECOTOX', 'ENV FATE', 'TOX', 'EXPOSURE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Top endpoint category',
            explode: true,
            in: 'query',
            name: 'top',
            required: false,
            schema: { enum: ['P-CHEM', 'ECOTOX', 'ENV FATE', 'TOX', 'EXPOSURE'], type: 'string' },
            style: 'form',
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Endpoint category (The value in the protocol.category.code field)',
            explode: true,
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK.', content: { 'application/json': { schema: FacetSchema } } },
    404: { description: 'Entries not found' },
  },
})

export const getEnmDbSubstanceRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/substance',
  tags: ['Substances'],
  summary: 'List substances',
  description: 'Returns a list of substances, according to the search criteria',
  operationId: 'getSubstances',
  request: {
    params: z.object({ db: AmbitDatabaseIdParamsSchema }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search parameter',
            explode: true,
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      type: z
        .enum([
          'substancetype',
          'name',
          'like',
          'regexp',
          'uuif',
          'CompTox',
          'DOI',
          'reliability',
          'purposeFlag',
          'studyResultType',
          'isRobustStudy',
          'citation',
          'citationowner',
          'topcategory',
          'endpointcategory',
          'params',
          'owner_name',
          'owner_uuid',
          'related',
          'reference',
          'facet',
        ])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              enum: [
                'substancetype',
                'name',
                'like',
                'regexp',
                'uuif',
                'CompTox',
                'DOI',
                'reliability',
                'purposeFlag',
                'studyResultType',
                'isRobustStudy',
                'citation',
                'citationowner',
                'topcategory',
                'endpointcategory',
                'params',
                'owner_name',
                'owner_uuid',
                'related',
                'reference',
                'facet',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      compound_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If type=related finds all substances containing this compound; if typ =reference - finds all substances with this compound as reference structure',
            explode: true,
            in: 'query',
            name: 'compound_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      bundle_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieves if selected in this bundle',
            explode: true,
            in: 'query',
            name: 'bundle_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      addDummySubstance: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Adds a compound record as substance in JSON; only if type=related',
            explode: true,
            in: 'query',
            name: 'addDummySubstance',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      studysummary: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true retrieves study summary for each substance',
            explode: true,
            in: 'query',
            name: 'studysummary',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Substances found',
      content: { 'application/json': { schema: SubstanceSchema } },
    },
    404: { description: 'Substances not found' },
  },
})

export const getEnmDbSubstanceUuidRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/substance/{uuid}',
  tags: ['Substances'],
  summary: 'Get a substance',
  description: 'Returns substance representation',
  operationId: 'getSubstanceByUUID',
  request: {
    params: z.object({
      db: AmbitDatabaseIdParamsSchema,
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'Substance UUID',
            explode: false,
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      'property_uris[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Property URIs',
            explode: true,
            in: 'query',
            name: 'property_uris[]',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Substances found',
      content: { 'application/json': { schema: SubstanceSchema } },
    },
    404: { description: 'Substances not found' },
  },
})

export const getEnmDbSubstanceUuidCompositionRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/substance/{uuid}/composition',
  tags: ['Structures', 'Substances'],
  summary: 'Substance composition',
  description: 'Returns substance composition',
  operationId: 'getSubstanceComposition',
  request: {
    params: z.object({
      db: AmbitDatabaseIdParamsSchema,
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'Substance UUID',
            explode: false,
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'true (Show all compositions) false (do not show hidden compositions)',
            explode: true,
            in: 'query',
            name: 'all',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. compositions found',
      content: { 'application/json': { schema: SubstanceCompositionSchema } },
    },
    404: { description: 'compositions not found' },
  },
})

export const getEnmDbSubstanceUuidStructuresRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/substance/{uuid}/structures',
  tags: ['Structures', 'Substances'],
  summary: 'Get substance composition as a dataset',
  description: 'Returns substance composition',
  operationId: 'getSubstanceStructures',
  request: {
    params: z.object({
      db: AmbitDatabaseIdParamsSchema,
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'Substance UUID',
            explode: false,
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. compositions found',
      content: { 'application/json': { schema: DatasetSchema } },
    },
    404: { description: 'compositions not found' },
  },
})

export const getEnmDbSubstanceUuidStudyRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/substance/{uuid}/study',
  tags: ['Studies', 'Substances'],
  summary: 'get substance study',
  description: 'Returns substance study representation',
  operationId: 'getSubstanceStudy',
  request: {
    params: z.object({
      db: AmbitDatabaseIdParamsSchema,
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'Substance UUID',
            explode: false,
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      top: z
        .enum(['P-CHEM', 'ECOTOX', 'ENV FATE', 'TOX', 'EXPOSURE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Top endpoint category',
            explode: true,
            in: 'query',
            name: 'top',
            required: false,
            schema: { enum: ['P-CHEM', 'ECOTOX', 'ENV FATE', 'TOX', 'EXPOSURE'], type: 'string' },
            style: 'form',
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Endpoint category (The value in the protocol.category.code field)',
            explode: true,
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      property_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Property URI https://data.enanomapper.net/property/{UUID} , see Property service',
            explode: true,
            in: 'query',
            name: 'property_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Property UUID',
            explode: true,
            in: 'query',
            name: 'property',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      investigation_uuid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Investigation UUID, a code to link different studies',
            explode: true,
            in: 'query',
            name: 'investigation_uuid',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK. Substances found',
      content: { 'application/json': { schema: SubstanceStudySchema } },
    },
    404: { description: 'Substances not found' },
  },
})

export const getEnmDbSubstanceUuidStudySummaryRoute = createRoute({
  method: 'get',
  path: '/enm/{db}/substance/{uuid}/studySummary',
  tags: ['Studies', 'Substances'],
  summary: 'Get study summary for the substance',
  description: 'Study summary',
  operationId: 'getSubstanceStudySummary',
  request: {
    params: z.object({
      db: AmbitDatabaseIdParamsSchema,
      uuid: z
        .string()
        .openapi({
          param: {
            description: 'Substance UUID',
            explode: false,
            in: 'path',
            name: 'uuid',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      top: z
        .enum(['P-CHEM', 'ECOTOX', 'ENV FATE', 'TOX', 'EXPOSURE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Top endpoint category',
            explode: true,
            in: 'query',
            name: 'top',
            required: false,
            schema: { enum: ['P-CHEM', 'ECOTOX', 'ENV FATE', 'TOX', 'EXPOSURE'], type: 'string' },
            style: 'form',
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Endpoint category (The value in the protocol.category.code field)',
            explode: true,
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      property_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Property URI https://data.enanomapper.net/property/{UUID} , see Property service',
            explode: true,
            in: 'query',
            name: 'property_uri',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      property: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Property UUID, see Property service',
            explode: true,
            in: 'query',
            name: 'property',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      result: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true will group by topcategory,endpointcategory,interpretation result',
            explode: true,
            in: 'query',
            name: 'result',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      page: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pagesize: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK.',
      content: { 'application/json': { schema: SubstanceStudySummarySchema } },
    },
    404: { description: 'Entries not found' },
  },
})

export const getSelectRoute = createRoute({
  method: 'get',
  path: '/select',
  tags: ['Search'],
  summary: 'Apache Solr powered search',
  description:
    'GET is simpler to use, but imposes restrictions on the complexity and the lenght of the parameters.',
  operationId: 'solrquery_get',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The query',
            example: '*:*',
            explode: true,
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      fq: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter query',
            explode: true,
            in: 'query',
            name: 'fq',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      fl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field list',
            example: '*',
            explode: true,
            in: 'query',
            name: 'fl',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      start: z
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
            description: 'Starting page',
            example: 0,
            explode: true,
            in: 'query',
            name: 'start',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      rows: z
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
            description: 'Page size',
            example: 10,
            explode: true,
            in: 'query',
            name: 'rows',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      wt: z
        .enum(['json', 'xml', 'csv'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            description: 'Response format',
            example: 'json',
            explode: true,
            in: 'query',
            name: 'wt',
            required: false,
            schema: { default: 'xml', enum: ['json', 'xml', 'csv'], type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query performed successfully',
      content: {
        'application/json': { schema: SolrResponseSchema },
        'application/xml': { schema: SolrResponseSchema },
      },
    },
    400: { description: 'BAD_REQUEST' },
    401: { description: 'UNAUTHORIZED' },
    403: { description: 'FORBIDDEN' },
    404: { description: 'NOT_FOUND' },
    409: { description: 'CONFLICT' },
    415: { description: 'UNSUPPORTED_MEDIA_TYPE' },
    500: { description: 'SERVER_ERROR' },
    503: { description: 'SERVICE_UNAVAILABLE' },
    510: { description: 'INVALID_STATE          ' },
  },
})

export const postSelectRoute = createRoute({
  method: 'post',
  path: '/select',
  tags: ['Search'],
  summary: 'Apache Solr powered search',
  description:
    'POST is more complex to use, but also allows for much for complex and lengthy queries.',
  operationId: 'solrquery_post',
  request: {
    query: z.object({
      wt: z
        .enum(['json', 'xml'])
        .default('xml')
        .exactOptional()
        .openapi({
          param: {
            description: 'Response format',
            example: 'json',
            explode: true,
            in: 'query',
            name: 'wt',
            required: false,
            schema: { default: 'xml', enum: ['json', 'xml'], type: 'string' },
            style: 'form',
          },
        }),
    }),
    body: QueryBodyRequestBody,
  },
  responses: {
    200: {
      description: 'Query performed successfully',
      content: {
        'application/json': { schema: SolrResponseSchema },
        'application/xml': { schema: SolrResponseSchema },
      },
    },
    400: { description: 'BAD_REQUEST' },
    401: { description: 'UNAUTHORIZED' },
    403: { description: 'FORBIDDEN' },
    404: { description: 'NOT_FOUND' },
    409: { description: 'CONFLICT' },
    415: { description: 'UNSUPPORTED_MEDIA_TYPE' },
    500: { description: 'SERVER_ERROR' },
    503: { description: 'SERVICE_UNAVAILABLE' },
    510: { description: 'INVALID_STATE' },
  },
})
