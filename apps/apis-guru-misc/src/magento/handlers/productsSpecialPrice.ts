import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsSpecialPriceRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSpecialPriceHandler = app.openapi(postV1ProductsSpecialPriceRoute, (c) => {
  throw new Error('Not implemented')
})
