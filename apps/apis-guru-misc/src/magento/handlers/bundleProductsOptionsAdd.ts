import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1BundleProductsOptionsAddRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleProductsOptionsAddHandler = app.openapi(
  postV1BundleProductsOptionsAddRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
