type InspectUrlIndexRequest = {
  inspectionUrl?: string | undefined
  languageCode?: string | undefined
  siteUrl?: string | undefined
}
type AmpIssue = {
  issueMessage?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'WARNING' | 'ERROR' | undefined
}
type AmpInspectionResult = {
  ampIndexStatusVerdict?:
    | 'VERDICT_UNSPECIFIED'
    | 'PASS'
    | 'PARTIAL'
    | 'FAIL'
    | 'NEUTRAL'
    | undefined
  ampUrl?: string | undefined
  indexingState?:
    | 'AMP_INDEXING_STATE_UNSPECIFIED'
    | 'AMP_INDEXING_ALLOWED'
    | 'BLOCKED_DUE_TO_NOINDEX'
    | 'BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER'
    | undefined
  issues?: AmpIssue[] | undefined
  lastCrawlTime?: string | undefined
  pageFetchState?:
    | 'PAGE_FETCH_STATE_UNSPECIFIED'
    | 'SUCCESSFUL'
    | 'SOFT_404'
    | 'BLOCKED_ROBOTS_TXT'
    | 'NOT_FOUND'
    | 'ACCESS_DENIED'
    | 'SERVER_ERROR'
    | 'REDIRECT_ERROR'
    | 'ACCESS_FORBIDDEN'
    | 'BLOCKED_4XX'
    | 'INTERNAL_CRAWL_ERROR'
    | 'INVALID_URL'
    | undefined
  robotsTxtState?: 'ROBOTS_TXT_STATE_UNSPECIFIED' | 'ALLOWED' | 'DISALLOWED' | undefined
  verdict?: 'VERDICT_UNSPECIFIED' | 'PASS' | 'PARTIAL' | 'FAIL' | 'NEUTRAL' | undefined
}
type IndexStatusInspectionResult = {
  coverageState?: string | undefined
  crawledAs?: 'CRAWLING_USER_AGENT_UNSPECIFIED' | 'DESKTOP' | 'MOBILE' | undefined
  googleCanonical?: string | undefined
  indexingState?:
    | 'INDEXING_STATE_UNSPECIFIED'
    | 'INDEXING_ALLOWED'
    | 'BLOCKED_BY_META_TAG'
    | 'BLOCKED_BY_HTTP_HEADER'
    | 'BLOCKED_BY_ROBOTS_TXT'
    | undefined
  lastCrawlTime?: string | undefined
  pageFetchState?:
    | 'PAGE_FETCH_STATE_UNSPECIFIED'
    | 'SUCCESSFUL'
    | 'SOFT_404'
    | 'BLOCKED_ROBOTS_TXT'
    | 'NOT_FOUND'
    | 'ACCESS_DENIED'
    | 'SERVER_ERROR'
    | 'REDIRECT_ERROR'
    | 'ACCESS_FORBIDDEN'
    | 'BLOCKED_4XX'
    | 'INTERNAL_CRAWL_ERROR'
    | 'INVALID_URL'
    | undefined
  referringUrls?: string[] | undefined
  robotsTxtState?: 'ROBOTS_TXT_STATE_UNSPECIFIED' | 'ALLOWED' | 'DISALLOWED' | undefined
  sitemap?: string[] | undefined
  userCanonical?: string | undefined
  verdict?: 'VERDICT_UNSPECIFIED' | 'PASS' | 'PARTIAL' | 'FAIL' | 'NEUTRAL' | undefined
}
type MobileUsabilityIssue = {
  issueType?:
    | 'MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED'
    | 'USES_INCOMPATIBLE_PLUGINS'
    | 'CONFIGURE_VIEWPORT'
    | 'FIXED_WIDTH_VIEWPORT'
    | 'SIZE_CONTENT_TO_VIEWPORT'
    | 'USE_LEGIBLE_FONT_SIZES'
    | 'TAP_TARGETS_TOO_CLOSE'
    | undefined
  message?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'WARNING' | 'ERROR' | undefined
}
type MobileUsabilityInspectionResult = {
  issues?: MobileUsabilityIssue[] | undefined
  verdict?: 'VERDICT_UNSPECIFIED' | 'PASS' | 'PARTIAL' | 'FAIL' | 'NEUTRAL' | undefined
}
type RichResultsIssue = {
  issueMessage?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'WARNING' | 'ERROR' | undefined
}
type Item = { issues?: RichResultsIssue[] | undefined; name?: string | undefined }
type DetectedItems = { items?: Item[] | undefined; richResultType?: string | undefined }
type RichResultsInspectionResult = {
  detectedItems?: DetectedItems[] | undefined
  verdict?: 'VERDICT_UNSPECIFIED' | 'PASS' | 'PARTIAL' | 'FAIL' | 'NEUTRAL' | undefined
}
type UrlInspectionResult = {
  ampResult?: AmpInspectionResult | undefined
  indexStatusResult?: IndexStatusInspectionResult | undefined
  inspectionResultLink?: string | undefined
  mobileUsabilityResult?: MobileUsabilityInspectionResult | undefined
  richResultsResult?: RichResultsInspectionResult | undefined
}
type InspectUrlIndexResponse = { inspectionResult?: UrlInspectionResult | undefined }
type RunMobileFriendlyTestRequest = {
  requestScreenshot?: boolean | undefined
  url?: string | undefined
}
type MobileFriendlyIssue = {
  rule?:
    | 'MOBILE_FRIENDLY_RULE_UNSPECIFIED'
    | 'USES_INCOMPATIBLE_PLUGINS'
    | 'CONFIGURE_VIEWPORT'
    | 'FIXED_WIDTH_VIEWPORT'
    | 'SIZE_CONTENT_TO_VIEWPORT'
    | 'USE_LEGIBLE_FONT_SIZES'
    | 'TAP_TARGETS_TOO_CLOSE'
    | undefined
}
type BlockedResource = { url?: string | undefined }
type ResourceIssue = { blockedResource?: BlockedResource | undefined }
type Image = { data?: string | undefined; mimeType?: string | undefined }
type TestStatus = {
  details?: string | undefined
  status?:
    | 'TEST_STATUS_UNSPECIFIED'
    | 'COMPLETE'
    | 'INTERNAL_ERROR'
    | 'PAGE_UNREACHABLE'
    | undefined
}
type RunMobileFriendlyTestResponse = {
  mobileFriendliness?:
    | 'MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED'
    | 'MOBILE_FRIENDLY'
    | 'NOT_MOBILE_FRIENDLY'
    | undefined
  mobileFriendlyIssues?: MobileFriendlyIssue[] | undefined
  resourceIssues?: ResourceIssue[] | undefined
  screenshot?: Image | undefined
  testStatus?: TestStatus | undefined
}
type WmxSite = {
  permissionLevel?:
    | 'SITE_PERMISSION_LEVEL_UNSPECIFIED'
    | 'SITE_OWNER'
    | 'SITE_FULL_USER'
    | 'SITE_RESTRICTED_USER'
    | 'SITE_UNVERIFIED_USER'
    | undefined
  siteUrl?: string | undefined
}
type SitesListResponse = { siteEntry?: WmxSite[] | undefined }
type ApiDimensionFilter = {
  dimension?: 'QUERY' | 'PAGE' | 'COUNTRY' | 'DEVICE' | 'SEARCH_APPEARANCE' | undefined
  expression?: string | undefined
  operator?:
    | 'EQUALS'
    | 'NOT_EQUALS'
    | 'CONTAINS'
    | 'NOT_CONTAINS'
    | 'INCLUDING_REGEX'
    | 'EXCLUDING_REGEX'
    | undefined
}
type ApiDimensionFilterGroup = {
  filters?: ApiDimensionFilter[] | undefined
  groupType?: 'AND' | undefined
}
type SearchAnalyticsQueryRequest = {
  aggregationType?: 'AUTO' | 'BY_PROPERTY' | 'BY_PAGE' | 'BY_NEWS_SHOWCASE_PANEL' | undefined
  dataState?: 'DATA_STATE_UNSPECIFIED' | 'FINAL' | 'ALL' | undefined
  dimensionFilterGroups?: ApiDimensionFilterGroup[] | undefined
  dimensions?:
    | ('DATE' | 'QUERY' | 'PAGE' | 'COUNTRY' | 'DEVICE' | 'SEARCH_APPEARANCE')[]
    | undefined
  endDate?: string | undefined
  rowLimit?: number | undefined
  searchType?: 'WEB' | 'IMAGE' | 'VIDEO' | 'NEWS' | 'DISCOVER' | 'GOOGLE_NEWS' | undefined
  startDate?: string | undefined
  startRow?: number | undefined
  type?: 'WEB' | 'IMAGE' | 'VIDEO' | 'NEWS' | 'DISCOVER' | 'GOOGLE_NEWS' | undefined
}
type ApiDataRow = {
  clicks?: number | undefined
  ctr?: number | undefined
  impressions?: number | undefined
  keys?: string[] | undefined
  position?: number | undefined
}
type SearchAnalyticsQueryResponse = {
  responseAggregationType?:
    | 'AUTO'
    | 'BY_PROPERTY'
    | 'BY_PAGE'
    | 'BY_NEWS_SHOWCASE_PANEL'
    | undefined
  rows?: ApiDataRow[] | undefined
}
type WmxSitemapContent = {
  indexed?: string | undefined
  submitted?: string | undefined
  type?:
    | 'WEB'
    | 'IMAGE'
    | 'VIDEO'
    | 'NEWS'
    | 'MOBILE'
    | 'ANDROID_APP'
    | 'PATTERN'
    | 'IOS_APP'
    | 'DATA_FEED_ELEMENT'
    | undefined
}
type WmxSitemap = {
  contents?: WmxSitemapContent[] | undefined
  errors?: string | undefined
  isPending?: boolean | undefined
  isSitemapsIndex?: boolean | undefined
  lastDownloaded?: string | undefined
  lastSubmitted?: string | undefined
  path?: string | undefined
  type?:
    | 'NOT_SITEMAP'
    | 'URL_LIST'
    | 'SITEMAP'
    | 'RSS_FEED'
    | 'ATOM_FEED'
    | 'PATTERN_SITEMAP'
    | 'OCEANFRONT'
    | undefined
  warnings?: string | undefined
}
type SitemapsListResponse = { sitemap?: WmxSitemap[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/urlInspection/index:inspect': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: InspectUrlIndexRequest }
        output: InspectUrlIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/urlTestingTools/mobileFriendlyTest:run': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RunMobileFriendlyTestRequest }
        output: RunMobileFriendlyTestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webmasters/v3/sites': {
      $get: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SitesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webmasters/v3/sites/:siteUrl': {
      $delete: {
        input: { param: { siteUrl: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { siteUrl: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: WmxSite
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { siteUrl: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/webmasters/v3/sites/:siteUrl/searchAnalytics/query': {
      $post: {
        input: { param: { siteUrl: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SearchAnalyticsQueryRequest }
        output: SearchAnalyticsQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webmasters/v3/sites/:siteUrl/sitemaps': {
      $get: {
        input: { param: { siteUrl: string } } & {
          query: {
            sitemapIndex?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SitemapsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webmasters/v3/sites/:siteUrl/sitemaps/:feedpath': {
      $delete: {
        input: { param: { siteUrl: string; feedpath: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { siteUrl: string; feedpath: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: WmxSitemap
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { siteUrl: string; feedpath: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
