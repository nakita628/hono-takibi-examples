import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsSkuRoute, getV1ProductsSkuRoute, putV1ProductsSkuRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuHandler = app
  .openapi(deleteV1ProductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
