import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIDRoute,
  getFlagsRoute,
  getMeRoute,
  getUsersRoute,
  getUsersUserIDRoute,
  patchUsersUserIDRoute,
  postUsersRoute,
  postUsersUserIDPasswordRoute,
  putMePasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
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
