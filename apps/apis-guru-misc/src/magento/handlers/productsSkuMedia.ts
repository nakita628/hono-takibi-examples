import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsSkuMediaRoute, postV1ProductsSkuMediaRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuMediaHandler = app
  .openapi(getV1ProductsSkuMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
