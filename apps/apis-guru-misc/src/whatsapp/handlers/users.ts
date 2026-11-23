import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserUsernameRoute,
  getUsersUserUsernameRoute,
  postUsersLoginRoute,
  postUsersLogoutRoute,
  postUsersRoute,
  putUsersUserUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
