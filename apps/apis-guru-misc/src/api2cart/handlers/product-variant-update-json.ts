import { OpenAPIHono } from '@hono/zod-openapi'
import { putProductVariantUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantUpdateJsonHandler = app.openapi(
  putProductVariantUpdateJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
