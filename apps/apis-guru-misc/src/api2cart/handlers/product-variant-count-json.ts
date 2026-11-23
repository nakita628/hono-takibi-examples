import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductVariantCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantCountJsonHandler = app.openapi(getProductVariantCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
