import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersSetPresenceRoute } from '../routes'

const app = new OpenAPIHono()

export const usersSetPresenceHandler = app.openapi(postUsersSetPresenceRoute, (c) => {
  throw new Error('Not implemented')
})
