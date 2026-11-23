import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductVariantAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantAddJsonHandler = app.openapi(postProductVariantAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
