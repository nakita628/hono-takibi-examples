import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersRoute, getUsersTagsRoute, getUsersTagTagIdRoute, postUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
