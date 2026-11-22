import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUsernameRoute,
  getAuthFirstTimeLoginRoute,
  getAuthRoute,
  getLogoutRoute,
  getProfileRoute,
  getUsersRoute,
  postLoginRoute,
  postUsersRoute,
  putUsersUsernamePasswordRoute,
  putUsersUsernameRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getAuthFirstTimeLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
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
