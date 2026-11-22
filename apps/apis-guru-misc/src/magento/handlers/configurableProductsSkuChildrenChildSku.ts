import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ConfigurableProductsSkuChildrenChildSkuRoute } from '../routes'

const app = new OpenAPIHono()

export const configurableProductsSkuChildrenChildSkuHandler = app.openapi(
  deleteV1ConfigurableProductsSkuChildrenChildSkuRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
