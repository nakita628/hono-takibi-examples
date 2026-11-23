import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIDRoute,
  getUsersRoute,
  getUsersUserIDRoute,
  patchUsersUserIDRoute,
  postUsersRoute,
  postUsersUserIDPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIDPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
