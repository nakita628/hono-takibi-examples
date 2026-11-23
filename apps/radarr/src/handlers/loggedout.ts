import { OpenAPIHono } from '@hono/zod-openapi'
import { getLoggedoutRoute } from '../routes'

const app = new OpenAPIHono()

export const loggedoutHandler = app.openapi(getLoggedoutRoute, (c) => {
  throw new Error('Not implemented')
})
