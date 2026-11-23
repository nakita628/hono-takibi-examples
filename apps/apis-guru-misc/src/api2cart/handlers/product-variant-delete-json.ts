import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteProductVariantDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantDeleteJsonHandler = app.openapi(
  deleteProductVariantDeleteJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
