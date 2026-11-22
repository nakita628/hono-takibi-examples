import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicV1UsersRoute } from '../routes'

const app = new OpenAPIHono()

export const publicUsersHandler = app.openapi(getPublicV1UsersRoute, (c) => {
  throw new Error('Not implemented')
})
