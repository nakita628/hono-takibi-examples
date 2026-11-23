import { OpenAPIHono } from '@hono/zod-openapi'
import { putProductPriceUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productPriceUpdateJsonHandler = app.openapi(putProductPriceUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
