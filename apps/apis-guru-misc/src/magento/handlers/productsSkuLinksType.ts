import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsSkuLinksTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuLinksTypeHandler = app.openapi(getV1ProductsSkuLinksTypeRoute, (c) => {
  throw new Error('Not implemented')
})
