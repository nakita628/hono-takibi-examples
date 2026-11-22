import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SalesRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const salesRulesHandler = app.openapi(postV1SalesRulesRoute, (c) => {
  throw new Error('Not implemented')
})
