import { OpenAPIHono } from '@hono/zod-openapi'
import { postLogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const logoutHandler = app.openapi(postLogoutRoute, (c) => {
  throw new Error('Not implemented')
})
