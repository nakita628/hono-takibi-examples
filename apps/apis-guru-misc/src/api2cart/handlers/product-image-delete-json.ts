import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteProductImageDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productImageDeleteJsonHandler = app.openapi(deleteProductImageDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
