import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TaxRulesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const taxRulesSearchHandler = app.openapi(getV1TaxRulesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
