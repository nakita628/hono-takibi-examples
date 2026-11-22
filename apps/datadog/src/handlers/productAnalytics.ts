import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV2ProdlyticsRoute,
  postApiV2ProductAnalyticsAnalyticsListRoute,
  postApiV2ProductAnalyticsAnalyticsScalarRoute,
  postApiV2ProductAnalyticsAnalyticsTimeseriesRoute,
  postApiV2ProductAnalyticsJourneyFunnelRoute,
  postApiV2ProductAnalyticsJourneyListRoute,
  postApiV2ProductAnalyticsJourneyScalarRoute,
  postApiV2ProductAnalyticsJourneyTimeseriesRoute,
  postApiV2ProductAnalyticsRetentionGridRoute,
  postApiV2ProductAnalyticsRetentionListRoute,
  postApiV2ProductAnalyticsRetentionScalarRoute,
  postApiV2ProductAnalyticsRetentionTimeseriesRoute,
  postApiV2ProductAnalyticsSankeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productAnalyticsHandler = app
  .openapi(postApiV2ProdlyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsAnalyticsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsAnalyticsScalarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsAnalyticsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsJourneyFunnelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsJourneyListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsJourneyScalarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsJourneyTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsRetentionGridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsRetentionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsRetentionScalarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsRetentionTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProductAnalyticsSankeyRoute, (c) => {
    throw new Error('Not implemented')
  })
