import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdRoute,
  getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlRoute,
  getAnalysesUsernameProjectSlugRoute,
  postAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsRoute,
  postAnalysesUsernameProjectSlugAnalysisSlugUrlsExportRoute,
  postAnalysesUsernameProjectSlugAnalysisSlugUrlsRoute,
  postAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analysesHandler = app
  .openapi(getAnalysesUsernameProjectSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalysesUsernameProjectSlugAnalysisSlugUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalysesUsernameProjectSlugAnalysisSlugUrlsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
