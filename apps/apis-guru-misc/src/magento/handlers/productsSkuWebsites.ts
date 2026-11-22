import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsSkuWebsitesRoute, putV1ProductsSkuWebsitesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuWebsitesHandler = app
  .openapi(postV1ProductsSkuWebsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuWebsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
