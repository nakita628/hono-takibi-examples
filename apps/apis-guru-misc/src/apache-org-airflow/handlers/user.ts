import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUsernameRoute,
  getUsersRoute,
  getUsersUsernameRoute,
  patchUsersUsernameRoute,
  postUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
