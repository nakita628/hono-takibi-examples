import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsDownloadableLinksIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsDownloadableLinksIdHandler = app.openapi(
  deleteV1ProductsDownloadableLinksIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
