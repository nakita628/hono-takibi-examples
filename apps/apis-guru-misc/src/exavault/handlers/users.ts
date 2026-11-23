import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdRoute,
  getUsersIdRoute,
  getUsersRoute,
  patchUsersIdRoute,
  postUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
