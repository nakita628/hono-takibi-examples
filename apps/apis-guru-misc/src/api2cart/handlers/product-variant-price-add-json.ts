import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductVariantPriceAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantPriceAddJsonHandler = app.openapi(
  postProductVariantPriceAddJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
