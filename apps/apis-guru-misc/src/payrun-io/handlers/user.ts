import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIdRoute,
  getUsersRoute,
  getUserUserIdRoute,
  patchUserUserIdRoute,
  postUsersRoute,
  putUserUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(deleteUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
