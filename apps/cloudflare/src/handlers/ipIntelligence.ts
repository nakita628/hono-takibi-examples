import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdIntelIpRoute } from '../routes'

const app = new OpenAPIHono()

export const ipIntelligenceHandler = app.openapi(getAccountsAccountIdIntelIpRoute, (c) => {
  throw new Error('Not implemented')
})
