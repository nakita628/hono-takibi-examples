import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(postUsersRoute, (c) => {
  throw new Error('Not implemented')
})
