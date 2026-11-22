import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsSkuOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuOptionsHandler = app.openapi(getV1ProductsSkuOptionsRoute, (c) => {
  throw new Error('Not implemented')
})
