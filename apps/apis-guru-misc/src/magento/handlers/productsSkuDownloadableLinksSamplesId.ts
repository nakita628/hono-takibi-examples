import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1ProductsSkuDownloadableLinksSamplesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSkuDownloadableLinksSamplesIdHandler = app.openapi(
  putV1ProductsSkuDownloadableLinksSamplesIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
