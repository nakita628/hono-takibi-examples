import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdR2MetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const r2AccountHandler = app.openapi(getAccountsAccountIdR2MetricsRoute, (c) => {
  throw new Error('Not implemented')
})
