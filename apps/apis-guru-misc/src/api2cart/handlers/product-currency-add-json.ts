import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductCurrencyAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productCurrencyAddJsonHandler = app.openapi(postProductCurrencyAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
