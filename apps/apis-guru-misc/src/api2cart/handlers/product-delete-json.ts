import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteProductDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productDeleteJsonHandler = app.openapi(deleteProductDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
