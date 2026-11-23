import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnalysesUsernameProjectSlug(
  args: InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyses[':username'][':project_slug'].$get(args, options))
}

export async function getAnalysesUsernameProjectSlugAnalysisSlug(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].$get(args, options),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatistics(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.$get(
      args,
      options,
    ),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTime(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.time.$get(
      args,
      options,
    ),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListType(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.urls[
      ':list_type'
    ].$get(args, options),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSource(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].features.ganalytics.orphan_urls[
      ':medium'
    ][':source'].$get(args, options),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentiles(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].features.links.percentiles.$get(
      args,
      options,
    ),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLost(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].features.pagerank.lost.$get(
      args,
      options,
    ),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReport(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].features.sitemaps.report.$get(
      args,
      options,
    ),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfig(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][
      ':analysis_slug'
    ].features.sitemaps.samples.out_of_config.$get(args, options),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnly(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][
      ':analysis_slug'
    ].features.sitemaps.samples.sitemap_only.$get(args, options),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomains(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][
      ':analysis_slug'
    ].features.top_domains.domains.$get(args, options),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomains(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][
      ':analysis_slug'
    ].features.top_domains.subdomains.$get(args, options),
  )
}

export async function postAnalysesUsernameProjectSlugAnalysisSlugUrls(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].urls.$post(args, options),
  )
}

export async function postAnalysesUsernameProjectSlugAnalysisSlugUrlsAggs(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['aggs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].urls.aggs.$post(args, options),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodel(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].urls.datamodel.$get(
      args,
      options,
    ),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExport(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$get(args, options),
  )
}

export async function postAnalysesUsernameProjectSlugAnalysisSlugUrlsExport(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$post(
      args,
      options,
    ),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportId(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export[
      ':url_export_id'
    ].$get(args, options),
  )
}

export async function postAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFilters(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['suggested_filters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].urls.suggested_filters.$post(
      args,
      options,
    ),
  )
}

export async function getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrl(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analyses[':username'][':project_slug'][':analysis_slug'].urls[':url'].$get(
      args,
      options,
    ),
  )
}

export async function getProjectsUsername(
  args: InferRequestType<(typeof client.projects)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':username'].$get(args, options))
}

export async function postProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidator(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['features']['url_rewriting']['rules_validator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':username'][':project_slug'].features.url_rewriting.rules_validator.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsUsernameProjectSlugFilters(
  args: InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':username'][':project_slug'].filters.$get(args, options),
  )
}

export async function getProjectsUsernameProjectSlugFiltersIdentifier(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':username'][':project_slug'].filters[':identifier'].$get(args, options),
  )
}

export async function postProjectsUsernameProjectSlugUrlsAggs(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['urls']['aggs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':username'][':project_slug'].urls.aggs.$post(args, options),
  )
}
