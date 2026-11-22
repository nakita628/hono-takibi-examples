import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHistoryClientsRoute,
  getHistoryDatabaseClientsRoute,
  getHistoryDatabaseRoute,
  getHistoryRoute,
  getQueriesRoute,
  getQueriesSuggestionsRoute,
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

export const metricsHandler = app
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
  .openapi(getHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryDatabaseClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
