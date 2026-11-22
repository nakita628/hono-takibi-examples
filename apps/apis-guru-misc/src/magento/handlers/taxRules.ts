import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1TaxRulesRoute, putV1TaxRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const taxRulesHandler = app
  .openapi(postV1TaxRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
