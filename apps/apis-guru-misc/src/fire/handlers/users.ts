import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1UsersRoute, getV1UserUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV1UserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
