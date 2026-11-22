import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdWorkersObservabilityUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app.openapi(getAccountsAccountIdWorkersObservabilityUsageRoute, (c) => {
  throw new Error('Not implemented')
})
