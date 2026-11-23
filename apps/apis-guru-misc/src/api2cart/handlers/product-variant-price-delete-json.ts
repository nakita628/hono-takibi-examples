import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteProductVariantPriceDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantPriceDeleteJsonHandler = app.openapi(
  deleteProductVariantPriceDeleteJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
