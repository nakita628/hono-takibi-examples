import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductPriceAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productPriceAddJsonHandler = app.openapi(postProductPriceAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
