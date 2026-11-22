import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUserUserIdRoute, getUsersRoute, getUserUserIdRoute, postUserRoute } from '../routes'

const app = new OpenAPIHono()

export const teamMembersHandler = app
  .openapi(postUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
