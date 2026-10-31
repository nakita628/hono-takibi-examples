import { createRoute, z } from '@hono/zod-openapi'

const AmpIssueSchema = z
  .object({
    issueMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Brief description of this issue.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'WARNING', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'Severity of this issue: WARNING or ERROR.' }),
  })
  .openapi({ description: 'AMP issue.', required: [] })
  .openapi('AmpIssue')

const AmpInspectionResultSchema = z
  .object({
    ampIndexStatusVerdict: z
      .enum(['VERDICT_UNSPECIFIED', 'PASS', 'PARTIAL', 'FAIL', 'NEUTRAL'])
      .exactOptional()
      .openapi({ description: 'Index status of the AMP URL.' }),
    ampUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected.',
      }),
    indexingState: z
      .enum([
        'AMP_INDEXING_STATE_UNSPECIFIED',
        'AMP_INDEXING_ALLOWED',
        'BLOCKED_DUE_TO_NOINDEX',
        'BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER',
      ])
      .exactOptional()
      .openapi({ description: 'Whether or not the page blocks indexing through a noindex rule.' }),
    issues: z
      .array(AmpIssueSchema)
      .exactOptional()
      .openapi({ description: 'A list of zero or more AMP issues found for the inspected URL.' }),
    lastCrawlTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully.',
      }),
    pageFetchState: z
      .enum([
        'PAGE_FETCH_STATE_UNSPECIFIED',
        'SUCCESSFUL',
        'SOFT_404',
        'BLOCKED_ROBOTS_TXT',
        'NOT_FOUND',
        'ACCESS_DENIED',
        'SERVER_ERROR',
        'REDIRECT_ERROR',
        'ACCESS_FORBIDDEN',
        'BLOCKED_4XX',
        'INTERNAL_CRAWL_ERROR',
        'INVALID_URL',
      ])
      .exactOptional()
      .openapi({ description: 'Whether or not Google could fetch the AMP.' }),
    robotsTxtState: z
      .enum(['ROBOTS_TXT_STATE_UNSPECIFIED', 'ALLOWED', 'DISALLOWED'])
      .exactOptional()
      .openapi({
        description: 'Whether or not the page is blocked to Google by a robots.txt rule.',
      }),
    verdict: z
      .enum(['VERDICT_UNSPECIFIED', 'PASS', 'PARTIAL', 'FAIL', 'NEUTRAL'])
      .exactOptional()
      .openapi({
        description:
          'The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results.',
      }),
  })
  .openapi({
    description:
      "AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.",
    required: [],
  })
  .openapi('AmpInspectionResult')

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
    dimension: z.enum(['QUERY', 'PAGE', 'COUNTRY', 'DEVICE', 'SEARCH_APPEARANCE']).exactOptional(),
    expression: z.string().exactOptional(),
    operator: z
      .enum([
        'EQUALS',
        'NOT_EQUALS',
        'CONTAINS',
        'NOT_CONTAINS',
        'INCLUDING_REGEX',
        'EXCLUDING_REGEX',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      "A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it.",
    required: [],
  })
  .openapi('ApiDimensionFilter')

const ApiDimensionFilterGroupSchema = z
  .object({
    filters: z.array(ApiDimensionFilterSchema).exactOptional(),
    groupType: z.literal('AND').exactOptional(),
  })
  .openapi({
    description:
      "A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.",
    required: [],
  })
  .openapi('ApiDimensionFilterGroup')

const BlockedResourceSchema = z
  .object({
    url: z.string().exactOptional().openapi({ description: 'URL of the blocked resource.' }),
  })
  .openapi({ description: 'Blocked resource.', required: [] })
  .openapi('BlockedResource')

const RichResultsIssueSchema = z
  .object({
    issueMessage: z.string().exactOptional().openapi({ description: 'Rich Results issue type.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'WARNING', 'ERROR'])
      .exactOptional()
      .openapi({
        description:
          'Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results.',
      }),
  })
  .openapi({
    description:
      'Severity and status of a single issue affecting a single rich result instance on a page.',
    required: [],
  })
  .openapi('RichResultsIssue')

const ItemSchema = z
  .object({
    issues: z
      .array(RichResultsIssueSchema)
      .exactOptional()
      .openapi({
        description: 'A list of zero or more rich result issues found for this instance.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-provided name of this item.' }),
  })
  .openapi({ description: 'A specific rich result found on the page.', required: [] })
  .openapi('Item')

const DetectedItemsSchema = z
  .object({
    items: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({ description: 'List of Rich Results items.' }),
    richResultType: z.string().exactOptional().openapi({ description: 'Rich Results type' }),
  })
  .openapi({ description: 'Rich Results items grouped by type.', required: [] })
  .openapi('DetectedItems')

const ImageSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The mime-type of the image data.' }),
  })
  .openapi({ description: 'Describe image data.', required: [] })
  .openapi('Image')

const IndexStatusInspectionResultSchema = z
  .object({
    coverageState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Could Google find and index the page. More details about page indexing appear in 'indexing_state'.",
      }),
    crawledAs: z
      .enum(['CRAWLING_USER_AGENT_UNSPECIFIED', 'DESKTOP', 'MOBILE'])
      .exactOptional()
      .openapi({ description: 'Primary crawler that was used by Google to crawl your site.' }),
    googleCanonical: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent.',
      }),
    indexingState: z
      .enum([
        'INDEXING_STATE_UNSPECIFIED',
        'INDEXING_ALLOWED',
        'BLOCKED_BY_META_TAG',
        'BLOCKED_BY_HTTP_HEADER',
        'BLOCKED_BY_ROBOTS_TXT',
      ])
      .exactOptional()
      .openapi({ description: 'Whether or not the page blocks indexing through a noindex rule.' }),
    lastCrawlTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last time this URL was crawled by Google using the [primary crawler](https://support.google.com/webmasters/answer/7440203#primary_crawler). Absent if the URL was never crawled successfully.',
      }),
    pageFetchState: z
      .enum([
        'PAGE_FETCH_STATE_UNSPECIFIED',
        'SUCCESSFUL',
        'SOFT_404',
        'BLOCKED_ROBOTS_TXT',
        'NOT_FOUND',
        'ACCESS_DENIED',
        'SERVER_ERROR',
        'REDIRECT_ERROR',
        'ACCESS_FORBIDDEN',
        'BLOCKED_4XX',
        'INTERNAL_CRAWL_ERROR',
        'INVALID_URL',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether or not Google could retrieve the page from your server. Equivalent to ["page fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL inspection report.',
      }),
    referringUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'URLs that link to the inspected URL, directly and indirectly.' }),
    robotsTxtState: z
      .enum(['ROBOTS_TXT_STATE_UNSPECIFIED', 'ALLOWED', 'DISALLOWED'])
      .exactOptional()
      .openapi({
        description: 'Whether or not the page is blocked to Google by a robots.txt rule.',
      }),
    sitemap: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no sitemaps were found.',
      }),
    userCanonical: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL that your page or site [declares as canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical). If you did not declare a canonical URL, this field is absent.',
      }),
    verdict: z
      .enum(['VERDICT_UNSPECIFIED', 'PASS', 'PARTIAL', 'FAIL', 'NEUTRAL'])
      .exactOptional()
      .openapi({
        description:
          'High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection).',
      }),
  })
  .openapi({
    description:
      "Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).",
    required: [],
  })
  .openapi('IndexStatusInspectionResult')

const InspectUrlIndexRequestSchema = z
  .object({
    inspectionUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. URL to inspect. Must be under the property specified in "site_url".',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US".',
      }),
    siteUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The URL of the property as defined in Search Console. **Examples:** `http://www.example.com/` for a URL-prefix property, or `sc-domain:example.com` for a Domain property.',
      }),
  })
  .openapi({ description: 'Index inspection request.', required: [] })
  .openapi('InspectUrlIndexRequest')

const MobileUsabilityIssueSchema = z
  .object({
    issueType: z
      .enum([
        'MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED',
        'USES_INCOMPATIBLE_PLUGINS',
        'CONFIGURE_VIEWPORT',
        'FIXED_WIDTH_VIEWPORT',
        'SIZE_CONTENT_TO_VIEWPORT',
        'USE_LEGIBLE_FONT_SIZES',
        'TAP_TARGETS_TOO_CLOSE',
      ])
      .exactOptional()
      .openapi({ description: 'Mobile-usability issue type.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information regarding the issue.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'WARNING', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'Not returned; reserved for future use.' }),
  })
  .openapi({ description: 'Mobile-usability issue.', required: [] })
  .openapi('MobileUsabilityIssue')

const MobileUsabilityInspectionResultSchema = z
  .object({
    issues: z
      .array(MobileUsabilityIssueSchema)
      .exactOptional()
      .openapi({
        description: 'A list of zero or more mobile-usability issues detected for this URL.',
      }),
    verdict: z
      .enum(['VERDICT_UNSPECIFIED', 'PASS', 'PARTIAL', 'FAIL', 'NEUTRAL'])
      .exactOptional()
      .openapi({ description: 'High-level mobile-usability inspection result for this URL.' }),
  })
  .openapi({ description: 'Mobile-usability inspection results.', required: [] })
  .openapi('MobileUsabilityInspectionResult')

const RichResultsInspectionResultSchema = z
  .object({
    detectedItems: z
      .array(DetectedItemsSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of zero or more rich results detected on this page. Rich results that cannot even be parsed due to syntactic issues will not be listed here.',
      }),
    verdict: z
      .enum(['VERDICT_UNSPECIFIED', 'PASS', 'PARTIAL', 'FAIL', 'NEUTRAL'])
      .exactOptional()
      .openapi({ description: 'High-level rich results inspection result for this URL.' }),
  })
  .openapi({
    description: 'Rich-Results inspection result, including any rich results found at this URL.',
    required: [],
  })
  .openapi('RichResultsInspectionResult')

const UrlInspectionResultSchema = z
  .object({
    ampResult: AmpInspectionResultSchema.exactOptional().openapi({
      description: 'Result of the AMP analysis. Absent if the page is not an AMP page.',
    }),
    indexStatusResult: IndexStatusInspectionResultSchema.exactOptional().openapi({
      description: 'Result of the index status analysis.',
    }),
    inspectionResultLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to Search Console URL inspection.' }),
    mobileUsabilityResult: MobileUsabilityInspectionResultSchema.exactOptional().openapi({
      description: 'Result of the Mobile usability analysis.',
    }),
    richResultsResult: RichResultsInspectionResultSchema.exactOptional().openapi({
      description:
        'Result of the Rich Results analysis. Absent if there are no rich results found.',
    }),
  })
  .openapi({
    description: 'URL inspection result, including all inspection results.',
    required: [],
  })
  .openapi('UrlInspectionResult')

const InspectUrlIndexResponseSchema = z
  .object({
    inspectionResult: UrlInspectionResultSchema.exactOptional().openapi({
      description: 'URL inspection results.',
    }),
  })
  .openapi({ description: 'Index-Status inspection response.', required: [] })
  .openapi('InspectUrlIndexResponse')

const MobileFriendlyIssueSchema = z
  .object({
    rule: z
      .enum([
        'MOBILE_FRIENDLY_RULE_UNSPECIFIED',
        'USES_INCOMPATIBLE_PLUGINS',
        'CONFIGURE_VIEWPORT',
        'FIXED_WIDTH_VIEWPORT',
        'SIZE_CONTENT_TO_VIEWPORT',
        'USE_LEGIBLE_FONT_SIZES',
        'TAP_TARGETS_TOO_CLOSE',
      ])
      .exactOptional()
      .openapi({ description: 'Rule violated.' }),
  })
  .openapi({ description: 'Mobile-friendly issue.', required: [] })
  .openapi('MobileFriendlyIssue')

const ResourceIssueSchema = z
  .object({
    blockedResource: BlockedResourceSchema.exactOptional().openapi({
      description: 'Describes a blocked resource issue.',
    }),
  })
  .openapi({ description: 'Information about a resource with issue.', required: [] })
  .openapi('ResourceIssue')

const RunMobileFriendlyTestRequestSchema = z
  .object({
    requestScreenshot: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not screenshot is requested. Default is false.' }),
    url: z.string().exactOptional().openapi({ description: 'URL for inspection.' }),
  })
  .openapi({ description: 'Mobile-friendly test request.', required: [] })
  .openapi('RunMobileFriendlyTestRequest')

const TestStatusSchema = z
  .object({
    details: z.string().exactOptional().openapi({ description: 'Error details if applicable.' }),
    status: z
      .enum(['TEST_STATUS_UNSPECIFIED', 'COMPLETE', 'INTERNAL_ERROR', 'PAGE_UNREACHABLE'])
      .exactOptional()
      .openapi({ description: 'Status of the test.' }),
  })
  .openapi({
    description: 'Final state of the test, including error details if necessary.',
    required: [],
  })
  .openapi('TestStatus')

const RunMobileFriendlyTestResponseSchema = z
  .object({
    mobileFriendliness: z
      .enum(['MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED', 'MOBILE_FRIENDLY', 'NOT_MOBILE_FRIENDLY'])
      .exactOptional()
      .openapi({ description: 'Test verdict, whether the page is mobile friendly or not.' }),
    mobileFriendlyIssues: z
      .array(MobileFriendlyIssueSchema)
      .exactOptional()
      .openapi({ description: 'List of mobile-usability issues.' }),
    resourceIssues: z
      .array(ResourceIssueSchema)
      .exactOptional()
      .openapi({ description: 'Information about embedded resources issues.' }),
    screenshot: ImageSchema.exactOptional().openapi({
      description: 'Screenshot of the requested URL.',
    }),
    testStatus: TestStatusSchema.exactOptional().openapi({
      description: 'Final state of the test, can be either complete or an error.',
    }),
  })
  .openapi({
    description:
      'Mobile-friendly test response, including mobile-friendly issues and resource issues.',
    required: [],
  })
  .openapi('RunMobileFriendlyTestResponse')

const SearchAnalyticsQueryRequestSchema = z
  .object({
    aggregationType: z
      .enum(['AUTO', 'BY_PROPERTY', 'BY_PAGE', 'BY_NEWS_SHOWCASE_PANEL'])
      .exactOptional()
      .openapi({
        description:
          '[Optional; Default is \\"auto\\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.',
      }),
    dataState: z
      .enum(['DATA_STATE_UNSPECIFIED', 'FINAL', 'ALL'])
      .exactOptional()
      .openapi({
        description:
          'The data state to be fetched, can be full or all, the latter including full and partial data.',
      }),
    dimensionFilterGroups: z
      .array(ApiDimensionFilterGroupSchema)
      .exactOptional()
      .openapi({
        description:
          '[Optional] Zero or more filters to apply to the dimension grouping values; for example, \'query contains \\"buy\\"\' to see only data where the query string contains the substring \\"buy\\" (not case-sensitive). You can filter by a dimension without grouping by it.',
      }),
    dimensions: z
      .array(z.enum(['DATE', 'QUERY', 'PAGE', 'COUNTRY', 'DEVICE', 'SEARCH_APPEARANCE']))
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
          '[Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive).',
      }),
    searchType: z
      .enum(['WEB', 'IMAGE', 'VIDEO', 'NEWS', 'DISCOVER', 'GOOGLE_NEWS'])
      .exactOptional()
      .openapi({ description: '[Optional; Default is \\"web\\"] The search type to filter for.' }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          ' [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.',
      }),
    startRow: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.',
      }),
    type: z
      .enum(['WEB', 'IMAGE', 'VIDEO', 'NEWS', 'DISCOVER', 'GOOGLE_NEWS'])
      .exactOptional()
      .openapi({
        description:
          'Optional. [Optional; Default is \\"web\\"] Type of report: search type, or either Discover or Gnews.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchAnalyticsQueryRequest')

const SearchAnalyticsQueryResponseSchema = z
  .object({
    responseAggregationType: z
      .enum(['AUTO', 'BY_PROPERTY', 'BY_PAGE', 'BY_NEWS_SHOWCASE_PANEL'])
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
      .openapi({ deprecated: true, description: '*Deprecated; do not use.*' }),
    submitted: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of URLs in the sitemap (of the content type).' }),
    type: z
      .enum([
        'WEB',
        'IMAGE',
        'VIDEO',
        'NEWS',
        'MOBILE',
        'ANDROID_APP',
        'PATTERN',
        'IOS_APP',
        'DATA_FEED_ELEMENT',
      ])
      .exactOptional()
      .openapi({
        description: 'The specific type of content in this sitemap. For example: `web`.',
        'x-enumDeprecated': [false, false, false, false, false, false, true, false, true],
      }),
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
    lastDownloaded: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).',
      }),
    lastSubmitted: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).',
      }),
    path: z.string().exactOptional().openapi({ description: 'The url of the sitemap.' }),
    type: z
      .enum([
        'NOT_SITEMAP',
        'URL_LIST',
        'SITEMAP',
        'RSS_FEED',
        'ATOM_FEED',
        'PATTERN_SITEMAP',
        'OCEANFRONT',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of the sitemap. For example: `rssFeed`.',
        'x-enumDeprecated': [false, false, false, false, false, true, true],
      }),
    warnings: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.',
      }),
  })
  .openapi({
    description:
      'Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).',
    required: [],
  })
  .openapi('WmxSitemap')

const SitemapsListResponseSchema = z
  .object({
    sitemap: z
      .array(WmxSitemapSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).',
      }),
  })
  .openapi({ description: 'List of sitemaps.', required: [] })
  .openapi('SitemapsListResponse')

const WmxSiteSchema = z
  .object({
    permissionLevel: z
      .enum([
        'SITE_PERMISSION_LEVEL_UNSPECIFIED',
        'SITE_OWNER',
        'SITE_FULL_USER',
        'SITE_RESTRICTED_USER',
        'SITE_UNVERIFIED_USER',
      ])
      .exactOptional()
      .openapi({ description: "The user's permission level for the site." }),
    siteUrl: z.string().exactOptional().openapi({ description: 'The URL of the site.' }),
  })
  .openapi({
    description:
      'Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).',
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
          'Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).',
      }),
  })
  .openapi({ description: 'List of sites with access level information.', required: [] })
  .openapi('SitesListResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
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
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
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

export const postV1UrlInspectionIndexInspectRoute = createRoute({
  method: 'post',
  path: '/v1/urlInspection/index:inspect',
  tags: ['urlInspection'],
  description: 'Index inspection.',
  operationId: 'searchconsole.urlInspection.index.inspect',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: InspectUrlIndexRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InspectUrlIndexResponseSchema } },
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

export const postV1UrlTestingToolsMobileFriendlyTestRunRoute = createRoute({
  method: 'post',
  path: '/v1/urlTestingTools/mobileFriendlyTest:run',
  tags: ['urlTestingTools'],
  description: 'Runs Mobile-Friendly Test for a given URL.',
  operationId: 'searchconsole.urlTestingTools.mobileFriendlyTest.run',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: RunMobileFriendlyTestRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RunMobileFriendlyTestResponseSchema } },
    },
  },
})

export const getWebmastersV3SitesRoute = createRoute({
  method: 'get',
  path: '/webmasters/v3/sites',
  tags: ['sites'],
  description: " Lists the user's Search Console sites.",
  operationId: 'webmasters.sites.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
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

export const getWebmastersV3SitesSiteUrlRoute = createRoute({
  method: 'get',
  path: '/webmasters/v3/sites/{siteUrl}',
  tags: ['sites'],
  description: ' Retrieves information about specific site.',
  operationId: 'webmasters.sites.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description:
              'The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.',
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

export const putWebmastersV3SitesSiteUrlRoute = createRoute({
  method: 'put',
  path: '/webmasters/v3/sites/{siteUrl}',
  tags: ['sites'],
  description: " Adds a site to the set of the user's sites in Search Console.",
  operationId: 'webmasters.sites.add',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
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

export const deleteWebmastersV3SitesSiteUrlRoute = createRoute({
  method: 'delete',
  path: '/webmasters/v3/sites/{siteUrl}',
  tags: ['sites'],
  description: " Removes a site from the set of the user's Search Console sites.",
  operationId: 'webmasters.sites.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description:
              'The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.',
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

export const postWebmastersV3SitesSiteUrlSearchAnalyticsQueryRoute = createRoute({
  method: 'post',
  path: '/webmasters/v3/sites/{siteUrl}/searchAnalytics/query',
  tags: ['searchanalytics'],
  description:
    'Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.',
  operationId: 'webmasters.searchanalytics.query',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description:
              "The site's URL, including protocol. For example: `http://www.example.com/`.",
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

export const getWebmastersV3SitesSiteUrlSitemapsRoute = createRoute({
  method: 'get',
  path: '/webmasters/v3/sites/{siteUrl}/sitemaps',
  tags: ['sitemaps'],
  description:
    ' Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).',
  operationId: 'webmasters.sitemaps.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      sitemapIndex: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              " A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`.",
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
            description:
              "The site's URL, including protocol. For example: `http://www.example.com/`.",
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

export const getWebmastersV3SitesSiteUrlSitemapsFeedpathRoute = createRoute({
  method: 'get',
  path: '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}',
  tags: ['sitemaps'],
  description: 'Retrieves information about a specific sitemap.',
  operationId: 'webmasters.sitemaps.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description:
              "The site's URL, including protocol. For example: `http://www.example.com/`.",
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
              'The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.',
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

export const putWebmastersV3SitesSiteUrlSitemapsFeedpathRoute = createRoute({
  method: 'put',
  path: '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}',
  tags: ['sitemaps'],
  description: 'Submits a sitemap for a site.',
  operationId: 'webmasters.sitemaps.submit',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description:
              "The site's URL, including protocol. For example: `http://www.example.com/`.",
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
              'The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.',
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

export const deleteWebmastersV3SitesSiteUrlSitemapsFeedpathRoute = createRoute({
  method: 'delete',
  path: '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}',
  tags: ['sitemaps'],
  description:
    'Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.',
  operationId: 'webmasters.sitemaps.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      siteUrl: z
        .string()
        .openapi({
          param: {
            description:
              "The site's URL, including protocol. For example: `http://www.example.com/`.",
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
              'The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.',
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
