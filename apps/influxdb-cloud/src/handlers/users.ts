import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIDRoute,
  getMeRoute,
  getUsersUserIDRoute,
  patchUsersUserIDRoute,
  postUsersRoute,
  putMePasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePasswordRoute, (c) => {
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
