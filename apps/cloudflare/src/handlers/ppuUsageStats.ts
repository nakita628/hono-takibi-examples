import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrZoneAccountOrZoneIdPayPerUseUsageStatsRoute,
  getAccountsAccountIdPayPerUseUsageStatsRoute,
  getZonesZoneIdPayPerUseUsageStatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ppuUsageStatsHandler = app
  .openapi(getAccountsAccountIdPayPerUseUsageStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPayPerUseUsageStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdPayPerUseUsageStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
