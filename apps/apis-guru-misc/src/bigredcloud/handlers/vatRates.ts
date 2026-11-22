import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1VatRatesRoute } from '../routes'

const app = new OpenAPIHono()

export const vatRatesHandler = app.openapi(getV1VatRatesRoute, (c) => {
  throw new Error('Not implemented')
})
