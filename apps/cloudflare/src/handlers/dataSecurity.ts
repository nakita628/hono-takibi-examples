import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountsAccountIdAnalyticsQueryDataSecurityContentFindingsTopNRoute,
  postAccountsAccountIdAnalyticsQueryDataSecurityFindingsSummaryRoute,
  postAccountsAccountIdAnalyticsQueryDataSecurityFindingsTimeseriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataSecurityHandler = app
  .openapi(postAccountsAccountIdAnalyticsQueryDataSecurityContentFindingsTopNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAnalyticsQueryDataSecurityFindingsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAnalyticsQueryDataSecurityFindingsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
