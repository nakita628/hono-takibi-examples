import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductVariantImageAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantImageAddJsonHandler = app.openapi(
  postProductVariantImageAddJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
