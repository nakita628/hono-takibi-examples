import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ConfigurableProductsSkuOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const configurableProductsSkuOptionsHandler = app.openapi(
  postV1ConfigurableProductsSkuOptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
