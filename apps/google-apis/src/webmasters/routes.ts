import { createRoute, z } from '@hono/zod-openapi'

const ApiDataRowSchema = z
  .object({
    clicks: z.float64().exactOptional(),
    ctr: z.float64().exactOptional(),
    impressions: z.float64().exactOptional(),
    keys: z.array(z.string()).exactOptional(),
    position: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiDataRow')

const ApiDimensionFilterSchema = z
  .object({
    dimension: z.string().exactOptional(),
    expression: z.string().exactOptional(),
    operator: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiDimensionFilter')

const ApiDimensionFilterGroupSchema = z
  .object({
    filters: z.array(ApiDimensionFilterSchema).exactOptional(),
    groupType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiDimensionFilterGroup')

const SearchAnalyticsQueryRequestSchema = z
  .object({
    aggregationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Optional; Default is "auto"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see  the help documentation to learn how data is calculated differently by site versus by page.\n\nNote: If you group or filter by page, you cannot aggregate by property.\n\nIf you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.',
      }),
    dataState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Optional] If "all" (case-insensitive), data will include fresh data. If "final" (case-insensitive) or if this parameter is omitted, the returned data will include only finalized data.',
      }),
    dimensionFilterGroups: z
      .array(ApiDimensionFilterGroupSchema)
      .exactOptional()
      .openapi({
        description:
          '[Optional] Zero or more filters to apply to the dimension grouping values; for example, \'query contains "buy"\' to see only data where the query string contains the substring "buy" (not case-sensitive). You can filter by a dimension without grouping by it.',
      }),
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.',
      }),
    rowLimit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 5,000 (inclusive).',
      }),
    searchType: z
      .string()
      .exactOptional()
      .openapi({ description: '[Optional; Default is "web"] The search type to filter for.' }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.',
      }),
    startRow: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchAnalyticsQueryRequest')

const SearchAnalyticsQueryResponseSchema = z
  .object({
    responseAggregationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'How the results were aggregated.' }),
    rows: z
      .array(ApiDataRowSchema)
      .exactOptional()
      .openapi({
        description: 'A list of rows grouped by the key values in the order given in the query.',
      }),
  })
  .openapi({
    description:
      'A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.',
    required: [],
  })
  .openapi('SearchAnalyticsQueryResponse')

const WmxSitemapContentSchema = z
  .object({
    indexed: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of URLs from the sitemap that were indexed (of the content type).',
      }),
    submitted: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of URLs in the sitemap (of the content type).' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The specific type of content in this sitemap. For example: web.' }),
  })
  .openapi({
    description: 'Information about the various content types in the sitemap.',
    required: [],
  })
  .openapi('WmxSitemapContent')

const WmxSitemapSchema = z
  .object({
    contents: z
      .array(WmxSitemapContentSchema)
      .exactOptional()
      .openapi({ description: 'The various content types in the sitemap.' }),
    errors: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.',
      }),
    isPending: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the sitemap has not been processed.' }),
    isSitemapsIndex: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the sitemap is a collection of sitemaps.' }),
    lastDownloaded: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).',
      }),
    lastSubmitted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).',
      }),
    path: z.string().exactOptional().openapi({ description: 'The url of the sitemap.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the sitemap. For example: rssFeed.' }),
    warnings: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.',
      }),
  })
  .openapi({
    description: 'Contains detailed information about a specific URL submitted as a sitemap.',
    required: [],
  })
  .openapi('WmxSitemap')

const SitemapsListResponseSchema = z
  .object({
    sitemap: z
      .array(WmxSitemapSchema)
      .exactOptional()
      .openapi({
        description: 'Contains detailed information about a specific URL submitted as a sitemap.',
      }),
  })
  .openapi({ description: 'List of sitemaps.', required: [] })
  .openapi('SitemapsListResponse')

const WmxSiteSchema = z
  .object({
    permissionLevel: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's permission level for the site." }),
    siteUrl: z.string().exactOptional().openapi({ description: 'The URL of the site.' }),
  })
  .openapi({
    description:
      'Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.',
    required: [],
  })
  .openapi('WmxSite')

const SitesListResponseSchema = z
  .object({
    siteEntry: z
      .array(WmxSiteSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains permission level information about a Search Console site. For more information, see Permissions in Search Console.',
      }),
  })
  .openapi({ description: 'List of sites with access level information.', required: [] })
  .openapi('SitesListResponse')

const AltParamsSchema = z
  .literal('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json'], type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/webmasters':
          'View and manage Search Console data for your verified sites',
        'https://www.googleapis.com/auth/webmasters.readonly':
          'View Search Console data for your verified sites',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/webmasters':
          'View and manage Search Console data for your verified sites',
        'https://www.googleapis.com/auth/webmasters.readonly':
          'View Search Console data for your verified sites',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getSitesRoute = createRoute({
  method: 'get',
  path: '/sites',
  tags: ['sites'],
  description: "Lists the user's Search Console sites.",
  operationId: 'webmasters.sites.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SitesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters.readonly'],
    },
  ],
})

export const getSitesSiteUrlRoute = createRoute({
  method: 'get',
  path: '/sites/{siteUrl}',
  tags: ['sites'],
  description: 'Retrieves information about specific site.',
  operationId: 'webmasters.sites.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description:
              'The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.',
            in: 'path',
            name: 'siteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WmxSiteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters.readonly'],
    },
  ],
})

export const putSitesSiteUrlRoute = createRoute({
  method: 'put',
  path: '/sites/{siteUrl}',
  tags: ['sites'],
  description: "Adds a site to the set of the user's sites in Search Console.",
  operationId: 'webmasters.sites.add',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description: 'The URL of the site to add.',
            in: 'path',
            name: 'siteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
  ],
})

export const deleteSitesSiteUrlRoute = createRoute({
  method: 'delete',
  path: '/sites/{siteUrl}',
  tags: ['sites'],
  description: "Removes a site from the set of the user's Search Console sites.",
  operationId: 'webmasters.sites.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description:
              'The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.',
            in: 'path',
            name: 'siteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
  ],
})

export const postSitesSiteUrlSearchAnalyticsQueryRoute = createRoute({
  method: 'post',
  path: '/sites/{siteUrl}/searchAnalytics/query',
  tags: ['searchanalytics'],
  description:
    'Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.\n\nWhen date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.',
  operationId: 'webmasters.searchanalytics.query',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description: "The site's URL, including protocol. For example: http://www.example.com/",
            in: 'path',
            name: 'siteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchAnalyticsQueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchAnalyticsQueryResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters.readonly'],
    },
  ],
})

export const getSitesSiteUrlSitemapsRoute = createRoute({
  method: 'get',
  path: '/sites/{siteUrl}/sitemaps',
  tags: ['sitemaps'],
  description:
    'Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).',
  operationId: 'webmasters.sitemaps.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      sitemapIndex: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml",
            in: 'query',
            name: 'sitemapIndex',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description: "The site's URL, including protocol. For example: http://www.example.com/",
            in: 'path',
            name: 'siteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SitemapsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters.readonly'],
    },
  ],
})

export const getSitesSiteUrlSitemapsFeedpathRoute = createRoute({
  method: 'get',
  path: '/sites/{siteUrl}/sitemaps/{feedpath}',
  tags: ['sitemaps'],
  description: 'Retrieves information about a specific sitemap.',
  operationId: 'webmasters.sitemaps.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description: "The site's URL, including protocol. For example: http://www.example.com/",
            in: 'path',
            name: 'siteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
      feedpath: z
        .string()
        .openapi({
          param: {
            description:
              'The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml',
            in: 'path',
            name: 'feedpath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WmxSitemapSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters.readonly'],
    },
  ],
})

export const putSitesSiteUrlSitemapsFeedpathRoute = createRoute({
  method: 'put',
  path: '/sites/{siteUrl}/sitemaps/{feedpath}',
  tags: ['sitemaps'],
  description: 'Submits a sitemap for a site.',
  operationId: 'webmasters.sitemaps.submit',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description: "The site's URL, including protocol. For example: http://www.example.com/",
            in: 'path',
            name: 'siteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
      feedpath: z
        .string()
        .openapi({
          param: {
            description:
              'The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml',
            in: 'path',
            name: 'feedpath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
  ],
})

export const deleteSitesSiteUrlSitemapsFeedpathRoute = createRoute({
  method: 'delete',
  path: '/sites/{siteUrl}/sitemaps/{feedpath}',
  tags: ['sitemaps'],
  description: 'Deletes a sitemap from this site.',
  operationId: 'webmasters.sitemaps.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description: "The site's URL, including protocol. For example: http://www.example.com/",
            in: 'path',
            name: 'siteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
      feedpath: z
        .string()
        .openapi({
          param: {
            description:
              'The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml',
            in: 'path',
            name: 'feedpath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/webmasters'],
      Oauth2c: ['https://www.googleapis.com/auth/webmasters'],
    },
  ],
})
