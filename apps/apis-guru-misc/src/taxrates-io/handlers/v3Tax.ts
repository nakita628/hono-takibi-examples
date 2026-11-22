import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3TaxRatesRoute } from '../routes'

const app = new OpenAPIHono()

export const v3TaxHandler = app.openapi(getV3TaxRatesRoute, (c) => {
  throw new Error('Not implemented')
})
