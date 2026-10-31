import { createRoute, z } from '@hono/zod-openapi'

export const getFeatureCategoriesRoute = createRoute({
  method: 'get',
  path: '/featureCategories',
  tags: ['feature taxonomy'],
  summary: 'Get all feature categories',
  description:
    'Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A list of feature categories' } },
})

export const getFeatureClassesRoute = createRoute({
  method: 'get',
  path: '/featureClasses',
  tags: ['feature taxonomy'],
  summary: 'Get all feature classes',
  description:
    'Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A list of feature classes' } },
})

export const getFeatureTypesRoute = createRoute({
  method: 'get',
  path: '/featureTypes',
  tags: ['feature taxonomy'],
  summary: 'Get all feature types',
  description:
    'Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A list of feature types' } },
})

export const getFeaturesFeatureIdRoute = createRoute({
  method: 'get',
  path: '/features/{featureId}',
  tags: ['feature'],
  summary: 'Get a feature by its featureId',
  description: 'Get information about the geographical feature with the specified featureId.',
  request: {
    params: z.object({
      featureId: z
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
            description: 'The unique identifier for a feature',
            example: 8879,
            in: 'path',
            name: 'featureId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about the feature with the specified featureId (XML format only)',
    },
    404: { description: "The feature with the given featureId doesn't exist" },
  },
})

export const getNameAuthoritiesRoute = createRoute({
  method: 'get',
  path: '/nameAuthorities',
  tags: ['name authority'],
  summary: 'Get all name authorities',
  description:
    'Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A list of name authorities' } },
})

export const getNamesChangesRoute = createRoute({
  method: 'get',
  path: '/names/changes',
  tags: ['search', 'name'],
  summary: 'Search for names with metadata changes in a given period',
  description:
    'Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'kml', 'csv'], type: 'string' },
          },
        }),
      fromDate: z
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
            description:
              'Defines the earliest date (YYYY-MM-DD format) of the change time window for the search',
            example: '2017-01-01',
            in: 'query',
            name: 'fromDate',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      toDate: z
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
            description:
              'Defines the latest date (YYYY-MM-DD format) of the change time window for the search',
            example: '2017-06-30',
            in: 'query',
            name: 'toDate',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      featureClass: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.",
            in: 'query',
            name: 'featureClass',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureCategory: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.",
            in: 'query',
            name: 'featureCategory',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureType: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included",
            in: 'query',
            name: 'featureType',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      sortBy: z
        .enum(['name', 'featureType', 'decisionDate'])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'name',
              enum: ['name', 'featureType', 'decisionDate'],
              type: 'string',
            },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(3857),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries.',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      embed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: [0, 1], type: 'integer' },
          },
        }),
      outputStyle: z
        .enum(['summary', 'detail'])
        .default('summary')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)',
            in: 'query',
            name: 'outputStyle',
            required: false,
            schema: { default: 'summary', enum: ['summary', 'detail'], type: 'string' },
          },
        }),
      itemsPerPage: z
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
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of search results to return (1-200)',
            in: 'query',
            name: 'itemsPerPage',
            required: false,
            schema: { default: 20, type: 'integer' },
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
            description: 'The index of the first record to be returned (>= 1)',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A list of names matching the search criteria' },
    400: { description: 'A required parameter is missing or invalid' },
  },
})

export const getNamesDecisionsRecentRoute = createRoute({
  method: 'get',
  path: '/names/decisions/recent',
  tags: ['search', 'name'],
  summary: 'Search for names affected by recent naming decision',
  description:
    "Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.",
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'kml', 'csv'], type: 'string' },
          },
        }),
      days: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(30)
        .openapi({
          param: {
            description:
              "The number of days used to define the time window of naming decisions to search.  The number is interpreted as searching for 'names affected by decisions within the last X days'.",
            example: '30',
            in: 'query',
            name: 'days',
            required: true,
            schema: { default: 30, type: 'integer' },
          },
        }),
      featureClass: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.",
            in: 'query',
            name: 'featureClass',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureCategory: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.",
            in: 'query',
            name: 'featureCategory',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureType: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included",
            in: 'query',
            name: 'featureType',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      sortBy: z
        .enum(['name', 'featureType', 'decisionDate'])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'name',
              enum: ['name', 'featureType', 'decisionDate'],
              type: 'string',
            },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(3857),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries.',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      embed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: [0, 1], type: 'integer' },
          },
        }),
      outputStyle: z
        .enum(['summary', 'detail'])
        .default('summary')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)',
            in: 'query',
            name: 'outputStyle',
            required: false,
            schema: { default: 'summary', enum: ['summary', 'detail'], type: 'string' },
          },
        }),
      itemsPerPage: z
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
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of search results to return (1-200)',
            in: 'query',
            name: 'itemsPerPage',
            required: false,
            schema: { default: 20, type: 'integer' },
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
            description: 'The index of the first record to be returned (>= 1)',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A list of names matching the search criteria' },
    400: { description: 'A required parameter is missing or invalid' },
  },
})

export const getNamesDecisionsYearRoute = createRoute({
  method: 'get',
  path: '/names/decisions/year',
  tags: ['search', 'name'],
  summary: 'Search for names affected by naming decisions in a given year',
  description:
    "Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.",
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'kml', 'csv'], type: 'string' },
          },
        }),
      year: z
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
            description: "The year in which to search for names affected by naming decisions'.",
            example: '2007',
            in: 'query',
            name: 'year',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      featureClass: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.",
            in: 'query',
            name: 'featureClass',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureCategory: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.",
            in: 'query',
            name: 'featureCategory',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureType: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included",
            in: 'query',
            name: 'featureType',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      sortBy: z
        .enum(['name', 'featureType', 'decisionDate'])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'name',
              enum: ['name', 'featureType', 'decisionDate'],
              type: 'string',
            },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(3857),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries.',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      embed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: [0, 1], type: 'integer' },
          },
        }),
      outputStyle: z
        .enum(['summary', 'detail'])
        .default('summary')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)',
            in: 'query',
            name: 'outputStyle',
            required: false,
            schema: { default: 'summary', enum: ['summary', 'detail'], type: 'string' },
          },
        }),
      itemsPerPage: z
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
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of search results to return (1-200)',
            in: 'query',
            name: 'itemsPerPage',
            required: false,
            schema: { default: 20, type: 'integer' },
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
            description: 'The index of the first record to be returned (>= 1)',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A list of names matching the search criteria' },
    400: { description: 'A required parameter is missing or invalid' },
  },
})

export const getNamesInsideRoute = createRoute({
  method: 'get',
  path: '/names/inside',
  tags: ['search', 'name'],
  summary: 'Search in a geographic area',
  description:
    'Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'kml', 'csv'], type: 'string' },
          },
        }),
      bbox: z
        .string()
        .openapi({
          param: {
            description:
              "A geographic bounding box defining the search area.  Must be specified as a string of the form 'minLongitude,minLatitude,maxLongitude,maxLatitude' (WGS84). e.g. -119,49,-118,50",
            example: '-119,49,-118,50',
            in: 'query',
            name: 'bbox',
            required: true,
            schema: { type: 'string' },
          },
        }),
      featureClass: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.",
            in: 'query',
            name: 'featureClass',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureCategory: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.",
            in: 'query',
            name: 'featureCategory',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureType: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included",
            in: 'query',
            name: 'featureType',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      sortBy: z
        .enum(['name', 'featureType', 'decisionDate'])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'name',
              enum: ['name', 'featureType', 'decisionDate'],
              type: 'string',
            },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(3857),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries.',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      embed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: [0, 1], type: 'integer' },
          },
        }),
      outputStyle: z
        .enum(['summary', 'detail'])
        .default('summary')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)',
            in: 'query',
            name: 'outputStyle',
            required: false,
            schema: { default: 'summary', enum: ['summary', 'detail'], type: 'string' },
          },
        }),
      itemsPerPage: z
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
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of search results to return (1-200)',
            in: 'query',
            name: 'itemsPerPage',
            required: false,
            schema: { default: 20, type: 'integer' },
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
            description: 'The index of the first record to be returned (>= 1)',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A list of names matching the search criteria' },
    400: { description: 'A required parameter is missing or invalid' },
  },
})

export const getNamesNearRoute = createRoute({
  method: 'get',
  path: '/names/near',
  tags: ['search', 'name'],
  summary: 'Search near to a geographic point',
  description:
    'Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: '-119,49,-118,50',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'kml', 'csv'], type: 'string' },
          },
        }),
      featurePoint: z
        .string()
        .openapi({
          param: {
            description:
              "A geographic coordinate specifying the centre point of the search area.  Must be specified as a string of the form 'longitude,latitude' (WGS84).  e.g. -120,51",
            example: '-120,51',
            in: 'query',
            name: 'featurePoint',
            required: true,
            schema: { type: 'string' },
          },
        }),
      distance: z
        .string()
        .openapi({
          param: {
            description: 'A radius (in kilometres) around the centre point.',
            in: 'query',
            name: 'distance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      featureClass: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.",
            in: 'query',
            name: 'featureClass',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureCategory: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.",
            in: 'query',
            name: 'featureCategory',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureType: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included",
            in: 'query',
            name: 'featureType',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      sortBy: z
        .enum(['name', 'featureType', 'decisionDate'])
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'name',
              enum: ['name', 'featureType', 'decisionDate'],
              type: 'string',
            },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(3857),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries.',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      embed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: [0, 1], type: 'integer' },
          },
        }),
      outputStyle: z
        .enum(['summary', 'detail'])
        .default('summary')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)',
            in: 'query',
            name: 'outputStyle',
            required: false,
            schema: { default: 'summary', enum: ['summary', 'detail'], type: 'string' },
          },
        }),
      itemsPerPage: z
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
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of search results to return (1-200)',
            in: 'query',
            name: 'itemsPerPage',
            required: false,
            schema: { default: 20, type: 'integer' },
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
            description: 'The index of the first record to be returned (>= 1)',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A list of names matching the search criteria' },
    400: { description: 'A required parameter is missing or invalid' },
  },
})

export const getNamesNotOfficialSearchRoute = createRoute({
  method: 'get',
  path: '/names/notOfficial/search',
  tags: ['search', 'name'],
  summary: 'Search by name, limit to unofficial names only',
  description:
    'Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'kml', 'csv'], type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              "A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'",
            example: 'Victoria',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      exactSpelling: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)",
            in: 'query',
            name: 'exactSpelling',
            required: false,
            schema: { default: 0, enum: [0, 1], type: 'integer' },
          },
        }),
      featureClass: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.",
            in: 'query',
            name: 'featureClass',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureCategory: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.",
            in: 'query',
            name: 'featureCategory',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureType: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included",
            in: 'query',
            name: 'featureType',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      sortBy: z
        .enum(['relevance', 'name', 'featureType', 'decisionDate'])
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'relevance',
              enum: ['relevance', 'name', 'featureType', 'decisionDate'],
              type: 'string',
            },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(3857),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries.',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      embed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: [0, 1], type: 'integer' },
          },
        }),
      outputStyle: z
        .enum(['summary', 'detail'])
        .default('summary')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)',
            in: 'query',
            name: 'outputStyle',
            required: false,
            schema: { default: 'summary', enum: ['summary', 'detail'], type: 'string' },
          },
        }),
      itemsPerPage: z
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
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of search results to return (1-200)',
            in: 'query',
            name: 'itemsPerPage',
            required: false,
            schema: { default: 20, type: 'integer' },
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
            description: 'The index of the first record to be returned (>= 1)',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A list of names matching the search criteria' },
    400: { description: 'A required parameter is missing or invalid' },
  },
})

export const getNamesOfficialSearchRoute = createRoute({
  method: 'get',
  path: '/names/official/search',
  tags: ['search', 'name'],
  summary: 'Search by name, limit to official names only',
  description:
    'Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'kml', 'csv'], type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              "A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'",
            example: 'Victoria',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      exactSpelling: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)",
            in: 'query',
            name: 'exactSpelling',
            required: false,
            schema: { default: 0, enum: [0, 1], type: 'integer' },
          },
        }),
      featureClass: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.",
            in: 'query',
            name: 'featureClass',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureCategory: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.",
            in: 'query',
            name: 'featureCategory',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureType: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included",
            in: 'query',
            name: 'featureType',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      sortBy: z
        .enum(['relevance', 'name', 'featureType', 'decisionDate'])
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'relevance',
              enum: ['relevance', 'name', 'featureType', 'decisionDate'],
              type: 'string',
            },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(3857),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries.',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      embed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: [0, 1], type: 'integer' },
          },
        }),
      outputStyle: z
        .enum(['summary', 'detail'])
        .default('summary')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)',
            in: 'query',
            name: 'outputStyle',
            required: false,
            schema: { default: 'summary', enum: ['summary', 'detail'], type: 'string' },
          },
        }),
      itemsPerPage: z
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
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of search results to return (1-200)',
            in: 'query',
            name: 'itemsPerPage',
            required: false,
            schema: { default: 20, type: 'integer' },
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
            description: 'The index of the first record to be returned (>= 1)',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A list of names matching the search criteria' },
    400: { description: 'A required parameter is missing or invalid' },
  },
})

export const getNamesSearchRoute = createRoute({
  method: 'get',
  path: '/names/search',
  tags: ['search', 'name'],
  summary: 'Search by name',
  description:
    'Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.',
  request: {
    query: z.object({
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'query',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'kml', 'csv'], type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              "A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'",
            example: 'Victoria',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      exactSpelling: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              "If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)",
            in: 'query',
            name: 'exactSpelling',
            required: false,
            schema: { default: 0, enum: [0, 1], type: 'integer' },
          },
        }),
      featureClass: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.",
            in: 'query',
            name: 'featureClass',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureCategory: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.",
            in: 'query',
            name: 'featureCategory',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      featureType: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            description:
              "A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included",
            in: 'query',
            name: 'featureType',
            required: false,
            schema: { default: '*', type: 'string' },
          },
        }),
      sortBy: z
        .enum(['relevance', 'name', 'featureType', 'decisionDate'])
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: {
              default: 'relevance',
              enum: ['relevance', 'name', 'featureType', 'decisionDate'],
              type: 'string',
            },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(3857),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries.',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 3857, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      embed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A flag to indicate whether to embed the corresponding 'feature' into each matching name",
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: [0, 1], type: 'integer' },
          },
        }),
      outputStyle: z
        .enum(['summary', 'detail'])
        .default('summary')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)',
            in: 'query',
            name: 'outputStyle',
            required: false,
            schema: { default: 'summary', enum: ['summary', 'detail'], type: 'string' },
          },
        }),
      itemsPerPage: z
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
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of search results to return (1-200)',
            in: 'query',
            name: 'itemsPerPage',
            required: false,
            schema: { default: 20, type: 'integer' },
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
            description: 'The index of the first record to be returned (>= 1)',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A list of names matching the search criteria' },
    400: { description: 'A required parameter is missing or invalid' },
  },
})

export const getNamesNameIdOutputFormatRoute = createRoute({
  method: 'get',
  path: '/names/{nameId}.{outputFormat}',
  tags: ['name'],
  summary: 'Get a name by its nameId',
  description: 'Get information about the geographical name with the specified nameId.',
  request: {
    params: z.object({
      nameId: z
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
            description: 'The unique identifier for a name',
            example: 22474,
            in: 'path',
            name: 'nameId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      outputFormat: z
        .enum(['json', 'xml', 'kml', 'csv', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'The format of the output.',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: {
              default: 'json',
              enum: ['json', 'xml', 'kml', 'csv', 'html'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Information about the name with the specified nameId' },
    404: {
      description: "The name with the given nameId doesn't exist, or the output format is invalid.",
    },
  },
})
