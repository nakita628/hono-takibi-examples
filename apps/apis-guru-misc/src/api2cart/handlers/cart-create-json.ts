import { OpenAPIHono } from '@hono/zod-openapi'
import { postCartCreateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartCreateJsonHandler = app.openapi(postCartCreateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
