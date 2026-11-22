import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAnalyticsSqlIntrospectionRoute,
  getAccountsAccountIdAnalyticsSqlRoute,
  getAnalyticsSqlIntrospectionRoute,
  getAnalyticsSqlRoute,
  postAccountsAccountIdAnalyticsSqlRoute,
  postAnalyticsSqlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsSQLHandler = app
  .openapi(getAccountsAccountIdAnalyticsSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAnalyticsSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAnalyticsSqlIntrospectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyticsSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyticsSqlIntrospectionRoute, (c) => {
    throw new Error('Not implemented')
  })
