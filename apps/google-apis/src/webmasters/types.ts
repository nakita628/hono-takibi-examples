type WmxSite = { permissionLevel?: string | undefined; siteUrl?: string | undefined }
type SitesListResponse = { siteEntry?: WmxSite[] | undefined }
type ApiDimensionFilter = {
  dimension?: string | undefined
  expression?: string | undefined
  operator?: string | undefined
}
type ApiDimensionFilterGroup = {
  filters?: ApiDimensionFilter[] | undefined
  groupType?: string | undefined
}
type SearchAnalyticsQueryRequest = {
  aggregationType?: string | undefined
  dataState?: string | undefined
  dimensionFilterGroups?: ApiDimensionFilterGroup[] | undefined
  dimensions?: string[] | undefined
  endDate?: string | undefined
  rowLimit?: number | undefined
  searchType?: string | undefined
  startDate?: string | undefined
  startRow?: number | undefined
}
type ApiDataRow = {
  clicks?: number | undefined
  ctr?: number | undefined
  impressions?: number | undefined
  keys?: string[] | undefined
  position?: number | undefined
}
type SearchAnalyticsQueryResponse = {
  responseAggregationType?: string | undefined
  rows?: ApiDataRow[] | undefined
}
type WmxSitemapContent = {
  indexed?: string | undefined
  submitted?: string | undefined
  type?: string | undefined
}
type WmxSitemap = {
  contents?: WmxSitemapContent[] | undefined
  errors?: string | undefined
  isPending?: boolean | undefined
  isSitemapsIndex?: boolean | undefined
  lastDownloaded?: string | undefined
  lastSubmitted?: string | undefined
  path?: string | undefined
  type?: string | undefined
  warnings?: string | undefined
}
type SitemapsListResponse = { sitemap?: WmxSitemap[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/sites': {
      $get: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: SitesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:siteUrl': {
      $delete: {
        input: { param: { siteUrl: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { siteUrl: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: WmxSite
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { siteUrl: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sites/:siteUrl/searchAnalytics/query': {
      $post: {
        input: { param: { siteUrl: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: SearchAnalyticsQueryRequest }
        output: SearchAnalyticsQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:siteUrl/sitemaps': {
      $get: {
        input: { param: { siteUrl: string } } & {
          query: {
            sitemapIndex?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: SitemapsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:siteUrl/sitemaps/:feedpath': {
      $delete: {
        input: { param: { siteUrl: string; feedpath: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { siteUrl: string; feedpath: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: WmxSitemap
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { siteUrl: string; feedpath: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
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
