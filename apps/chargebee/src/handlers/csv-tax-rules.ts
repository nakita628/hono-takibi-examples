import { OpenAPIHono } from '@hono/zod-openapi'
import { postCsvTaxRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const csvTaxRulesHandler = app.openapi(postCsvTaxRulesRoute, (c) => {
  throw new Error('Not implemented')
})
