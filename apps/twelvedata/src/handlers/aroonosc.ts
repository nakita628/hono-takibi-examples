import { OpenAPIHono } from '@hono/zod-openapi'
import { getAroonoscRoute } from '../routes'

const app = new OpenAPIHono()

export const aroonoscHandler = app.openapi(getAroonoscRoute, (c) => {
  throw new Error('Not implemented')
})
