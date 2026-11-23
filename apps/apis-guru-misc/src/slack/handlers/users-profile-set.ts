import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersProfileSetRoute } from '../routes'

const app = new OpenAPIHono()

export const usersProfileSetHandler = app.openapi(postUsersProfileSetRoute, (c) => {
  throw new Error('Not implemented')
})
