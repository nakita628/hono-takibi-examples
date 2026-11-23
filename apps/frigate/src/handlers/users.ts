import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUsernameRoute,
  getUsersRoute,
  postUsersRoute,
  putUsersUsernamePasswordRoute,
  putUsersUsernameRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUsernamePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUsernameRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
