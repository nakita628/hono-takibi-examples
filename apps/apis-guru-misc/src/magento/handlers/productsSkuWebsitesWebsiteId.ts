import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsSkuWebsitesWebsiteIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuWebsitesWebsiteIdHandler = app.openapi(
  deleteV1ProductsSkuWebsitesWebsiteIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
