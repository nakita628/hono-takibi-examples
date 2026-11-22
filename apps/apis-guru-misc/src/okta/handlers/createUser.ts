import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1UsersRoute } from '../routes'

const app = new OpenAPIHono()

export const createUserHandler = app.openapi(postApiV1UsersRoute, (c) => {
  throw new Error('Not implemented')
})
