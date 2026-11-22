import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BundleProductsSkuOptionsAllRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleProductsSkuOptionsAllHandler = app.openapi(
  getV1BundleProductsSkuOptionsAllRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
