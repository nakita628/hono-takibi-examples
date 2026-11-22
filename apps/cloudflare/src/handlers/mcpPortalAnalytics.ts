import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAccessAiControlsMcpAnalyticsPortalsPortalIdToolCallsTimeseriesRoute,
  getAccountsAccountIdAccessAiControlsMcpAnalyticsServersServerIdToolCallsTimeseriesRoute,
  getAccountsAccountIdAccessAiControlsMcpAnalyticsToolCallsTimeseriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mcpPortalAnalyticsHandler = app
  .openapi(
    getAccountsAccountIdAccessAiControlsMcpAnalyticsPortalsPortalIdToolCallsTimeseriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdAccessAiControlsMcpAnalyticsServersServerIdToolCallsTimeseriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdAccessAiControlsMcpAnalyticsToolCallsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
