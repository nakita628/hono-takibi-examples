import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAnalyticsEngineSqlRoute,
  postAccountsAccountIdAnalyticsEngineSqlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsEngineHandler = app
  .openapi(getAccountsAccountIdAnalyticsEngineSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAnalyticsEngineSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
