import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersSetActiveRoute } from '../routes'

const app = new OpenAPIHono()

export const usersSetActiveHandler = app.openapi(postUsersSetActiveRoute, (c) => {
  throw new Error('Not implemented')
})
