import { OpenAPIHono } from '@hono/zod-openapi'
import { putProductVariantPriceUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantPriceUpdateJsonHandler = app.openapi(
  putProductVariantPriceUpdateJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
