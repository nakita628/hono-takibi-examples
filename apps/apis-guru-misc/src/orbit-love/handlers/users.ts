import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getUserRoute, (c) => {
  throw new Error('Not implemented')
})
