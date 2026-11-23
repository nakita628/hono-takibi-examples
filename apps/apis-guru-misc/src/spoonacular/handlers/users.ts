import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersConnectRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(postUsersConnectRoute, (c) => {
  throw new Error('Not implemented')
})
