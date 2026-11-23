import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdRoute,
  postUsersUserIdApproveRoute,
  postUsersUserIdDeleteRoute,
  postUsersUserIdRestoreRoute,
  postUsersUserIdRoleRoute,
  postUsersUserIdSuspendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
