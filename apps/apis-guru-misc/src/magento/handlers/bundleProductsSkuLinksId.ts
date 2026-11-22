import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1BundleProductsSkuLinksIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleProductsSkuLinksIdHandler = app.openapi(
  putV1BundleProductsSkuLinksIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
