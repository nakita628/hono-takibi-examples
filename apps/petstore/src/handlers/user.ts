import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUsernameRoute,
  getUserLoginRoute,
  getUserLogoutRoute,
  getUserUsernameRoute,
  postUserCreateWithListRoute,
  postUserRoute,
  putUserUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCreateWithListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
