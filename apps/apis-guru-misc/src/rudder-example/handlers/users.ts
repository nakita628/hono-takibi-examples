import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getUsersRoute, (c) => {
  throw new Error('Not implemented')
})
