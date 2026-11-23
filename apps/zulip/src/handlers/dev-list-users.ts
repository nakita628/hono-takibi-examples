import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const devListUsersHandler = app.openapi(getDevListUsersRoute, (c) => {
  throw new Error('Not implemented')
})
