type User = {
  company_name?: string | undefined
  date_joined?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  is_organization?: string | undefined
  last_name?: string | undefined
  login?: string | undefined
  status?: string | undefined
  url?: string | undefined
}
type Analysis = {
  config?: string | undefined
  date_created?: string | undefined
  date_finished?: string | undefined
  date_last_modified?: string | undefined
  date_launched?: string | undefined
  features?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  slug?: string | undefined
  status?: string | undefined
  url?: string | undefined
  urls_done?: string | undefined
  urls_in_queue?: string | undefined
  user: User
}
type DefaultPayload = {
  error?:
    | {
        error_code?: string | undefined
        error_detail?: { [x: string]: unknown } | undefined
        message?: string | undefined
      }
    | undefined
}
type AnalysisDetail = {
  config?: string | undefined
  date_finished?: string | undefined
  date_last_modified?: string | undefined
  date_launched?: string | undefined
  failures?: string | undefined
  features?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  red_button_domain?: string | undefined
  slug?: string | undefined
  url?: string | undefined
  urls_done?: string | undefined
  urls_in_queue?: string | undefined
  user: User
}
type CrawlStatistics = {
  depth_current: bigint
  last_upd_dt: string
  pages_dones: bigint
  pages_dones_2xx: bigint
  pages_dones_3xx: bigint
  pages_dones_4xx: bigint
  pages_dones_5xx: bigint
  pages_dones_networkerror: bigint
  pages_dones_xxx: bigint
  pages_known: bigint
}
type CrawlStatisticsTimePoint = { count: bigint; datetime: string }
type CrawlStatisticsTime = {
  avg_delay: CrawlStatisticsTimePoint[]
  avg_size: CrawlStatisticsTimePoint[]
  frequency: string
  http_code_2xx: CrawlStatisticsTimePoint[]
  http_code_3xx: CrawlStatisticsTimePoint[]
  http_code_4xx: CrawlStatisticsTimePoint[]
  http_code_5xx: CrawlStatisticsTimePoint[]
  http_code_xxx: CrawlStatisticsTimePoint[]
  last_update_date: string
  new_urls: CrawlStatisticsTimePoint[]
}
type CrawlOrphanURLs = { url: string; visits: bigint }
type LinksPercentilesItem = {
  avg: bigint
  id: bigint
  max: bigint
  metric_total: bigint
  min: bigint
  url_total: bigint
}
type LinksPercentiles = { domain: string; percentiles: LinksPercentilesItem[] }
type PageRankLost = { external: number; non_crawled: number; robots_txt: number }
type SitemapsReportSitemapError = { message: string; type: string }
type SitemapsReportSitemap = {
  error?: SitemapsReportSitemapError | undefined
  file_type?: string | undefined
  invalid_urls?: bigint | undefined
  sitemap_indexes?: string[] | undefined
  url: string
  valid_urls?: bigint | undefined
}
type SitemapsReportOnly = { in_configuration: bigint; out_of_configuration: bigint }
type SitemapsReport = {
  count: bigint
  errors: SitemapsReportSitemap[]
  sitemap_indexes: SitemapsReportSitemap[]
  sitemap_only: SitemapsReportOnly
  sitemaps: SitemapsReportSitemap[]
}
type LinksTopDomainsSamples = { sources: string[]; unique_links: bigint; url: string }
type LinksTopDomains = {
  domain: string
  follow_links: bigint
  follow_samples: LinksTopDomainsSamples[]
  nofollow_links: bigint
  nofollow_samples: LinksTopDomainsSamples[]
  unique_follow_links: bigint
  unique_nofollow_links: bigint
}
type UrlsQuery = {
  fields?: string[] | undefined
  filters?: { [x: string]: unknown } | undefined
  sort?: { [x: string]: unknown }[] | undefined
}
type UrlDetail = { [x: string]: unknown }
type UrlsAggsQuery = {
  aggs?: { [x: string]: unknown }[] | undefined
  filters?: { [x: string]: unknown } | undefined
}
type UrlsAggsQueries = UrlsAggsQuery[]
type CrawlDatamodelField = {
  group: string
  id: string
  multiple: boolean
  name: string
  permissions: string[]
  subtype: string
  type: string
}
type CrawlDatamodelGroup = { id: string; name: string }
type CrawlDatamodel = { fields: CrawlDatamodelField[]; groups: CrawlDatamodelGroup[] }
type CsvExportStatus = {
  area?: bigint | undefined
  date_created?: string | undefined
  job_id?: string | undefined
  job_status?: string | undefined
  job_url?: string | undefined
  nb_results?: bigint | undefined
  query: UrlsQuery
  results?: string | undefined
}
type ProjectSettingsSerializer = {
  allowed_domains: string[]
  blacklisted_domains: string[]
  compare_crawl?: boolean | undefined
  crawl_gzip?: boolean | undefined
  extra_headers?: string | undefined
  google_analytics_account_email?: string | undefined
  google_analytics_nb_days?: bigint | undefined
  google_analytics_site_id?: bigint | undefined
  google_social_auth_id?: bigint | undefined
  has_robots_txt?: string | undefined
  header_settings: string[]
  max_depth?: bigint | undefined
  max_nb_pages: bigint
  max_pages_per_sec?: bigint | undefined
  respect_nofollow?: boolean | undefined
  sitemaps: string[]
  start_urls: string[]
  user_agent?: string | undefined
}
type Project = {
  active?: boolean | undefined
  current_settings: ProjectSettingsSerializer
  date_created?: string | undefined
  name: string
  slug: string
  user: User
}
type RewritingRuleSerializer = { ignore_case: boolean; regex: string; replace: string }
type URLRewritingRulesSerializer = { rules: RewritingRuleSerializer[]; urls: string[] }
type ProjectSavedFilter = {
  filters: { [x: string]: unknown }
  identifier?: string | undefined
  name: string
}
type Default = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/analyses/:username/:project_slug': {
      $get:
        | {
            input: { param: { username: string; project_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: Analysis[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: AnalysisDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: CrawlStatistics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics/time': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { limit?: number | undefined; frequency: '1mn' | '5mn' | '60mn' }
            }
            output: CrawlStatisticsTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { limit?: number | undefined; frequency: '1mn' | '5mn' | '60mn' }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics/urls/:list_type': {
      $get:
        | {
            input: {
              param: {
                username: string
                project_slug: string
                analysis_slug: string
                list_type: 'crawled' | 'errors'
              }
            }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                username: string
                project_slug: string
                analysis_slug: string
                list_type: 'crawled' | 'errors'
              }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/features/ganalytics/orphan_urls/:medium/:source': {
      $get:
        | {
            input: {
              param: {
                username: string
                project_slug: string
                analysis_slug: string
                medium: 'organic' | 'social'
                source:
                  | 'all'
                  | 'aol'
                  | 'ask'
                  | 'baidu'
                  | 'bing'
                  | 'facebook'
                  | 'google'
                  | 'google+'
                  | 'linkedin'
                  | 'naver'
                  | 'pinterest'
                  | 'reddit'
                  | 'tumblr'
                  | 'twitter'
                  | 'yahoo'
                  | 'yandex'
              }
            } & { query: { page?: number | undefined; size?: number | undefined } }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: CrawlOrphanURLs[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                username: string
                project_slug: string
                analysis_slug: string
                medium: 'organic' | 'social'
                source:
                  | 'all'
                  | 'aol'
                  | 'ask'
                  | 'baidu'
                  | 'bing'
                  | 'facebook'
                  | 'google'
                  | 'google+'
                  | 'linkedin'
                  | 'naver'
                  | 'pinterest'
                  | 'reddit'
                  | 'tumblr'
                  | 'twitter'
                  | 'yahoo'
                  | 'yandex'
              }
            } & { query: { page?: number | undefined; size?: number | undefined } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/features/links/percentiles': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: LinksPercentiles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/features/pagerank/lost': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: PageRankLost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/report': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: SitemapsReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/samples/out_of_config': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: string[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/samples/sitemap_only': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: string[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/features/top_domains/domains': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: LinksTopDomains[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/features/top_domains/subdomains': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: LinksTopDomains[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/urls': {
      $post:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | 'search_engines_orphans' | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { json: UrlsQuery }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: UrlDetail[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | 'search_engines_orphans' | undefined
                page?: number | undefined
                size?: number | undefined
              }
            } & { json: UrlsQuery }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/urls/aggs': {
      $post:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | 'search_engines_orphans' | undefined
              }
            } & { json: UrlsAggsQueries }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | 'search_engines_orphans' | undefined
              }
            } & { json: UrlsAggsQueries }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/urls/datamodel': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | 'search_engines_orphans' | undefined
              }
            }
            output: CrawlDatamodel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | 'search_engines_orphans' | undefined
              }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/urls/export': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: CsvExportStatus[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | 'search_engines_orphans' | undefined
              }
            } & { json: UrlsQuery }
            output: CsvExportStatus
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | 'search_engines_orphans' | undefined
              }
            } & { json: UrlsQuery }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/urls/export/:url_export_id': {
      $get:
        | {
            input: {
              param: {
                username: string
                project_slug: string
                analysis_slug: string
                url_export_id: string
              }
            }
            output: CsvExportStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                username: string
                project_slug: string
                analysis_slug: string
                url_export_id: string
              }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/urls/suggested_filters': {
      $post:
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { area?: 'current' | 'new' | undefined }
            } & { json: UrlsAggsQuery }
            output: UrlsAggsQuery
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string; project_slug: string; analysis_slug: string } } & {
              query: { area?: 'current' | 'new' | undefined }
            } & { json: UrlsAggsQuery }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/analyses/:username/:project_slug/:analysis_slug/urls/:url': {
      $get:
        | {
            input: {
              param: { username: string; project_slug: string; analysis_slug: string; url: string }
            } & { query: { fields?: string[] | undefined } }
            output: UrlDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { username: string; project_slug: string; analysis_slug: string; url: string }
            } & { query: { fields?: string[] | undefined } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:username': {
      $get:
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: Project[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:username/:project_slug/features/url_rewriting/rules_validator': {
      $post:
        | {
            input: { param: { username: string; project_slug: string } }
            output: URLRewritingRulesSerializer
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string; project_slug: string } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:username/:project_slug/filters': {
      $get:
        | {
            input: { param: { username: string; project_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: {
              count?: number | undefined
              next?: string | undefined
              page?: number | undefined
              previous?: string | undefined
              results?: ProjectSavedFilter[] | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:username/:project_slug/filters/:identifier': {
      $get:
        | {
            input: { param: { username: string; project_slug: string; identifier: string } }
            output: ProjectSavedFilter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; project_slug: string; identifier: string } }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/projects/:username/:project_slug/urls/aggs': {
      $post:
        | {
            input: { param: { username: string; project_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | undefined
                last_analysis_slug?: string | undefined
                nb_analyses?: number | undefined
              }
            } & { json: UrlsAggsQueries }
            output: Default
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { username: string; project_slug: string } } & {
              query: {
                area?: 'current' | 'disappeared' | 'new' | undefined
                last_analysis_slug?: string | undefined
                nb_analyses?: number | undefined
              }
            } & { json: UrlsAggsQueries }
            output: DefaultPayload
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
