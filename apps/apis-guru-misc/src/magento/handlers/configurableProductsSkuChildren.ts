import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConfigurableProductsSkuChildrenRoute } from '../routes'

const app = new OpenAPIHono()

export const configurableProductsSkuChildrenHandler = app.openapi(
  getV1ConfigurableProductsSkuChildrenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
