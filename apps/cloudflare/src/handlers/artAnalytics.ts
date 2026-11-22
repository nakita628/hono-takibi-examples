import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountsAccountIdAnalyticsQueryDatasetSummaryRoute,
  postAccountsAccountIdAnalyticsQueryDatasetTimeseriesRoute,
  postAccountsAccountIdAnalyticsQueryDatasetTopNRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artAnalyticsHandler = app
  .openapi(postAccountsAccountIdAnalyticsQueryDatasetSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAnalyticsQueryDatasetTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAnalyticsQueryDatasetTopNRoute, (c) => {
    throw new Error('Not implemented')
  })
