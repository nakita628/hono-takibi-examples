import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1TaxRatesRoute, putV1TaxRatesRoute } from '../routes'

const app = new OpenAPIHono()

export const taxRatesHandler = app
  .openapi(postV1TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
