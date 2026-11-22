import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1BundleProductsOptionsOptionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleProductsOptionsOptionIdHandler = app.openapi(
  putV1BundleProductsOptionsOptionIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
