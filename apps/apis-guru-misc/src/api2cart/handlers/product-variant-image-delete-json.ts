import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteProductVariantImageDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantImageDeleteJsonHandler = app.openapi(
  deleteProductVariantImageDeleteJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
