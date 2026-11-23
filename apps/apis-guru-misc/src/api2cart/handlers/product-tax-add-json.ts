import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductTaxAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productTaxAddJsonHandler = app.openapi(postProductTaxAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
