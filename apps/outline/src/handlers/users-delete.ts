import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const usersDeleteHandler = app.openapi(postUsersDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
