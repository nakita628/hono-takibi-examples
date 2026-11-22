import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TaxRatesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const taxRatesSearchHandler = app.openapi(getV1TaxRatesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
