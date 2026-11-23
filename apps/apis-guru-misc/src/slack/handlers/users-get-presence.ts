import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersGetPresenceRoute } from '../routes'

const app = new OpenAPIHono()

export const usersGetPresenceHandler = app.openapi(getUsersGetPresenceRoute, (c) => {
  throw new Error('Not implemented')
})
