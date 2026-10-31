import { createRoute, z } from '@hono/zod-openapi'

const AreaSchema = z
  .object({
    Description: z.string(),
    Id: z.string().exactOptional(),
    Name: z.string(),
    XLatitude: z
      .string()
      .regex(
        /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$/,
      ),
    XLongitude: z
      .string()
      .regex(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$/),
    YLatitude: z
      .string()
      .regex(
        /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,15})?))$/,
      ),
    YLongitude: z
      .string()
      .regex(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,15})?))$/),
  })
  .openapi({
    required: ['Name', 'Description', 'XLongitude', 'XLatitude', 'YLongitude', 'YLatitude'],
  })
  .openapi('Area')

const AreaResponseSchema = z
  .object({ areas: z.array(AreaSchema).exactOptional(), row_count: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('AreaResponse')

const QualitiesSchema = z
  .object({
    Date: z.iso.datetime({ offset: true }).exactOptional(),
    Quality: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Qualities')

const DailyQualityResponseSchema = z
  .object({
    Qualities: z.array(QualitiesSchema).exactOptional(),
    row_count: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DailyQualityResponse')

const ObjectSchema = z.object({}).openapi('Object')

const OverallQualityResponseSchema = z
  .object({
    data_quality: z.int32().exactOptional(),
    end_date: z.string().exactOptional(),
    row_count: z.int32().exactOptional(),
    sites: z.string().exactOptional(),
    start_date: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OverallQualityResponse')

const SiteResultSchema = z
  .object({
    Description: z.string().exactOptional(),
    Id: z.string().exactOptional(),
    Latitude: z.float64().exactOptional(),
    Longitude: z.float64().exactOptional(),
    Name: z.string().exactOptional(),
    Status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SiteResult')

const SiteResponseSchema = z
  .object({
    row_count: z.int32().exactOptional(),
    sites: z.array(SiteResultSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SiteResponse')

const SiteTypeSchema = z
  .object({ Description: z.string().exactOptional(), Id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SiteType')

const SitesSchema = z
  .object({
    Active: z.array(z.boolean()).exactOptional(),
    Description: z.array(z.string()).exactOptional(),
    Id: z.array(z.string()).exactOptional(),
    Lattitude: z.array(z.float64()).exactOptional(),
    Longitude: z.array(z.float64()).exactOptional(),
    SiteId: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Sites')

const SiteTypeLayerSchema = z
  .object({ Sites: z.array(SitesSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SiteTypeLayer')

const SiteTypeResponseSchema = z
  .object({
    row_count: z.int32().exactOptional(),
    sitetypes: z.array(SiteTypeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SiteTypeResponse')

export const getVVersionAreasRoute = createRoute({
  method: 'get',
  path: '/v{version}/areas',
  tags: ['Areas'],
  summary: 'Returns list of areas',
  operationId: 'Areas_Get',
  request: {
    params: z.object({
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AreaResponseSchema } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionAreasAreaIdsRoute = createRoute({
  method: 'get',
  path: '/v{version}/areas/{area_Ids}',
  tags: ['Areas'],
  summary: 'Returns details of selected area',
  request: {
    params: z.object({
      area_Ids: z
        .string()
        .openapi({
          param: { in: 'path', name: 'area_Ids', required: true, schema: { type: 'string' } },
        }),
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AreaResponseSchema } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionQualityDailyRoute = createRoute({
  method: 'get',
  path: '/v{version}/quality/daily',
  tags: ['Quality'],
  summary: 'Get Site DailyQuality',
  operationId: 'Quality_GetDailyDataQualityForSite',
  request: {
    query: z.object({
      siteId: z
        .string()
        .openapi({
          param: { in: 'query', name: 'siteId', required: true, schema: { type: 'string' } },
        }),
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'The start date of the report in the format ddmmyyyy (i.e 31012016)',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            description: 'The end date of the report in the format ddmmyyyy (i.e 31012016)',
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DailyQualityResponseSchema } },
    },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionQualityOverallRoute = createRoute({
  method: 'get',
  path: '/v{version}/quality/overall',
  tags: ['Quality'],
  summary: 'Get Site OverallQuality',
  operationId: 'Quality_GetOverallDataQualityForSites',
  request: {
    query: z.object({
      sites: z
        .string()
        .openapi({
          param: {
            description: 'Get site quality by site id delimited by ,',
            in: 'query',
            name: 'sites',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'The start date of the report in the format ddmmyyyy (i.e 31012016)',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            description: 'The end date of the report in the format ddmmyyyy (i.e 31012016)',
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OverallQualityResponseSchema } },
    },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionReportsReportTypeRoute = createRoute({
  method: 'get',
  path: '/v{version}/reports/{report_type}',
  tags: ['Reports'],
  summary: 'Gets the daily report.',
  description: "Get's the report.",
  operationId: 'Reports_Index',
  request: {
    params: z.object({
      report_type: z
        .string()
        .openapi({
          param: {
            description: 'Report Type Id (i.e Daily, Monthly, Annual)',
            in: 'path',
            name: 'report_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      sites: z
        .string()
        .openapi({
          param: {
            description: 'Comma separated list of site Ids.',
            in: 'query',
            name: 'sites',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'The start date of the report in the format ddmmyyyy (i.e 31012016)',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            description: 'The end date of the report in the format ddmmyyyy (i.e 31012016)',
            in: 'query',
            name: 'end_date',
            required: true,
            schema: { type: 'string' },
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
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The page offset to return.',
            in: 'query',
            name: 'page',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The number of rows to return.',
            in: 'query',
            name: 'page_size',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      reportSubTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'reportSubTypeId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ObjectSchema } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionReportsStartDateToEndDateReportTypeRoute = createRoute({
  method: 'get',
  path: '/v{version}/reports/{start_date}/to/{end_date}/{report_type}',
  tags: ['Reports'],
  summary: 'Gets the daily report.',
  description: "Get's the report.",
  request: {
    params: z.object({
      report_type: z
        .string()
        .openapi({
          param: {
            description: 'Report Type Id (i.e Daily, Monthly, Annual)',
            in: 'path',
            name: 'report_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'The start date of the report in the format ddmmyyyy (i.e 31012016)',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .openapi({
          param: {
            description: 'The end date of the report in the format ddmmyyyy (i.e 31012016)',
            in: 'path',
            name: 'end_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      sites: z
        .string()
        .openapi({
          param: {
            description: 'Comma separated list of site Ids.',
            in: 'query',
            name: 'sites',
            required: true,
            schema: { type: 'string' },
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
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The page offset to return.',
            in: 'query',
            name: 'page',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The number of rows to return.',
            in: 'query',
            name: 'page_size',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      reportSubTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'reportSubTypeId',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ObjectSchema } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionSitesRoute = createRoute({
  method: 'get',
  path: '/v{version}/sites',
  tags: ['Sites'],
  summary: 'Get a list of sites',
  operationId: 'Sites_Index',
  request: {
    params: z.object({
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SiteResponseSchema } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionSitesSiteIdsRoute = createRoute({
  method: 'get',
  path: '/v{version}/sites/{site_Ids}',
  tags: ['Sites'],
  summary: 'Get selected sites',
  request: {
    params: z.object({
      site_Ids: z
        .string()
        .openapi({
          param: {
            description: 'site id',
            in: 'path',
            name: 'site_Ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SiteResponseSchema } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionSitetypesRoute = createRoute({
  method: 'get',
  path: '/v{version}/sitetypes',
  tags: ['SiteTypes'],
  summary: 'Return list of site types',
  operationId: 'SiteTypes_Index',
  request: {
    params: z.object({
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SiteTypeResponseSchema } } },
    400: { description: 'Bad request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getVVersionSitetypesSiteTypeIdSitesRoute = createRoute({
  method: 'get',
  path: '/v{version}/sitetypes/{siteType_Id}/sites',
  tags: ['SiteTypes'],
  summary: 'Returns the layer metadata for the LayerId specified.',
  operationId: 'SiteTypes_GetSitesForPublicFacingAPI',
  request: {
    params: z.object({
      siteType_Id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '1 = MIDAS, 2 = TAME, 3 = TMU, 4 = TRADS Legacy',
            in: 'path',
            name: 'siteType_Id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SiteTypeLayerSchema } } },
    400: { description: 'Bad request' },
    404: { description: 'Layer not found' },
    500: { description: 'Internal Server Error' },
  },
})
