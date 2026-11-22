import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdIntelUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const urlIntelligenceHandler = app.openapi(getAccountsAccountIdIntelUrlRoute, (c) => {
  throw new Error('Not implemented')
})
