import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUsersRoute, postLinkRoute, postUsersUpsertRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
