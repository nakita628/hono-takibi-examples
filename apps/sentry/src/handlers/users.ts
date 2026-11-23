import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUserIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getUsersUserIdIndexRoute, (c) => {
  throw new Error('Not implemented')
})
