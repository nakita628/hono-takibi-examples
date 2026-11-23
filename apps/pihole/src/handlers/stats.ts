import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatsDatabaseQueryTypesRoute,
  getStatsDatabaseSummaryRoute,
  getStatsDatabaseTopClientsRoute,
  getStatsDatabaseTopDomainsRoute,
  getStatsDatabaseUpstreamsRoute,
  getStatsQueryTypesRoute,
  getStatsRecentBlockedRoute,
  getStatsSummaryRoute,
  getStatsTopClientsRoute,
  getStatsTopDomainsRoute,
  getStatsUpstreamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getStatsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsDatabaseSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsUpstreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsDatabaseUpstreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsTopDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsDatabaseTopDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsTopClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsDatabaseTopClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsQueryTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsDatabaseQueryTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsRecentBlockedRoute, (c) => {
    throw new Error('Not implemented')
  })
