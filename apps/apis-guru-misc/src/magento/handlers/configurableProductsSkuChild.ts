import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ConfigurableProductsSkuChildRoute } from '../routes'

const app = new OpenAPIHono()

export const configurableProductsSkuChildHandler = app.openapi(
  postV1ConfigurableProductsSkuChildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
