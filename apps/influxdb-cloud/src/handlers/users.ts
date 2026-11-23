import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIDRoute,
  getUsersRoute,
  getUsersUserIDRoute,
  patchUsersUserIDRoute,
  postUsersRoute,
  postUsersUserIDPasswordRoute,
  putUsersUserIDPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersUserIDPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIDPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
