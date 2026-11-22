import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1UsersIdRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getV1UsersIdRoute, (c) => {
  throw new Error('Not implemented')
})
