import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const usersJsonHandler = app.openapi(postUsersJsonRoute, (c) => {
  throw new Error('Not implemented')
})
