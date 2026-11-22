import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBillingUsageRoute,
  getAccountsAccountIdMediaUsageRoute,
  getAccountsAccountIdStreamUsageRoute,
  getZonesZoneIdMediaUsageRoute,
  getZonesZoneIdStreamUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageAnalyticsHandler = app
  .openapi(getAccountsAccountIdBillingUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMediaUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdMediaUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdStreamUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
