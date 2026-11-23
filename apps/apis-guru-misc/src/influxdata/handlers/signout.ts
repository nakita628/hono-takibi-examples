import { OpenAPIHono } from '@hono/zod-openapi'
import { postSignoutRoute } from '../routes'

const app = new OpenAPIHono()

export const signoutHandler = app.openapi(postSignoutRoute, (c) => {
  throw new Error('Not implemented')
})
