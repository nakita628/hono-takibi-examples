import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProductAnalyticsColumnsRoute,
  getV1ProductAnalyticsExplorationsIdRoute,
  getV1ProductAnalyticsSearchRoute,
  postV1ProductAnalyticsColumnValuesRoute,
  postV1ProductAnalyticsDataSourceExplorationRoute,
  postV1ProductAnalyticsFactTableExplorationRoute,
  postV1ProductAnalyticsFunnelExplorationRoute,
  postV1ProductAnalyticsJourneyExplorationRoute,
  postV1ProductAnalyticsMetricExplorationRoute,
  postV1ProductAnalyticsSqlExplorationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsExplorationsHandler = app
  .openapi(postV1ProductAnalyticsMetricExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsFactTableExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsDataSourceExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsSqlExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsFunnelExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsJourneyExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductAnalyticsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductAnalyticsColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsColumnValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductAnalyticsExplorationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
