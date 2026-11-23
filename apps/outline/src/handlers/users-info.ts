import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const usersInfoHandler = app.openapi(postUsersInfoRoute, (c) => {
  throw new Error('Not implemented')
})
