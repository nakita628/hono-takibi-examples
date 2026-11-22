import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1ProductsSkuDownloadableLinksIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuDownloadableLinksIdHandler = app.openapi(
  putV1ProductsSkuDownloadableLinksIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
