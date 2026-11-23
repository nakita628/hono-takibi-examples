import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductCurrencyListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productCurrencyListJsonHandler = app.openapi(getProductCurrencyListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
