import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteProductPriceDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productPriceDeleteJsonHandler = app.openapi(deleteProductPriceDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
