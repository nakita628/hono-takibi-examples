import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app.openapi(postQueryRoute, (c) => {
  throw new Error('Not implemented')
})
