import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  patchUsersUserIdRoute,
  postUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersFindAndModifyUsersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
