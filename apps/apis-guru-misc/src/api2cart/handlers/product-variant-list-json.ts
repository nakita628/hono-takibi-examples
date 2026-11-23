import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductVariantListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantListJsonHandler = app.openapi(getProductVariantListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
