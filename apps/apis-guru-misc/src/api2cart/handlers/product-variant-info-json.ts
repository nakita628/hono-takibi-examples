import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductVariantInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantInfoJsonHandler = app.openapi(getProductVariantInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
