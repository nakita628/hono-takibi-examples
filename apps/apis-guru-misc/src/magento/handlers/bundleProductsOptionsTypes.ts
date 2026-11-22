import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BundleProductsOptionsTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleProductsOptionsTypesHandler = app.openapi(
  getV1BundleProductsOptionsTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
