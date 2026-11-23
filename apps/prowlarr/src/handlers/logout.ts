import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const logoutHandler = app.openapi(getLogoutRoute, (c) => {
  throw new Error('Not implemented')
})
