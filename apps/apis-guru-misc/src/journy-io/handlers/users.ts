import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUsersRoute, postUsersUpsertRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
