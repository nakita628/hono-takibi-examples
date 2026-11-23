import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdRoute,
  getUsersRoute,
  getUsersUserIdExportRoute,
  patchUsersRoute,
  postUsersDeactivateRoute,
  postUsersDeleteRoute,
  postUsersReactivateRoute,
  postUsersRestoreRoute,
  postUsersRoute,
  postUsersUserIdDeactivateRoute,
  postUsersUserIdEventRoute,
  postUsersUserIdReactivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
