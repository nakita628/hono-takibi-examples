import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SalesRulesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const salesRulesSearchHandler = app.openapi(getV1SalesRulesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
