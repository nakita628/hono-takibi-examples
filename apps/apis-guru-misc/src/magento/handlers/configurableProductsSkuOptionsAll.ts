import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConfigurableProductsSkuOptionsAllRoute } from '../routes'

const app = new OpenAPIHono()

export const configurableProductsSkuOptionsAllHandler = app.openapi(
  getV1ConfigurableProductsSkuOptionsAllRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
