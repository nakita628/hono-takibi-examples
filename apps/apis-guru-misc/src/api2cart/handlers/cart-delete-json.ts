import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCartDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartDeleteJsonHandler = app.openapi(deleteCartDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
