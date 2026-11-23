import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const usersUpdateHandler = app.openapi(postUsersUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
