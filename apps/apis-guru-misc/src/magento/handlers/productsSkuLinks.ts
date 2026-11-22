import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsSkuLinksRoute, putV1ProductsSkuLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuLinksHandler = app
  .openapi(postV1ProductsSkuLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
