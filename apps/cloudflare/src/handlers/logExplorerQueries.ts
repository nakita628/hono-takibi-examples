import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRoute,
  getAccountsAccountIdLogsExplorerQuerySqlRoute,
  getZonesZoneIdLogsExplorerQuerySqlRoute,
  postAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRoute,
  postAccountsAccountIdLogsExplorerQuerySqlRoute,
  postZonesZoneIdLogsExplorerQuerySqlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logExplorerQueriesHandler = app
  .openapi(getAccountsAccountIdLogsExplorerQuerySqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogsExplorerQuerySqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogsExplorerQuerySqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogsExplorerQuerySqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLogsExplorerQuerySqlRoute, (c) => {
    throw new Error('Not implemented')
  })
