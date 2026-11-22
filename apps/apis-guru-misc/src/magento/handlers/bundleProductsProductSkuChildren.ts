import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BundleProductsProductSkuChildrenRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleProductsProductSkuChildrenHandler = app.openapi(
  getV1BundleProductsProductSkuChildrenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
