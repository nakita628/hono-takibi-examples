import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1ConfigurableProductsVariationRoute } from '../routes'

const app = new OpenAPIHono()

export const configurableProductsVariationHandler = app.openapi(
  putV1ConfigurableProductsVariationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
