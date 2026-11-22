import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ProductsDownloadableLinksSamplesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsDownloadableLinksSamplesIdHandler = app.openapi(
  deleteV1ProductsDownloadableLinksSamplesIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
