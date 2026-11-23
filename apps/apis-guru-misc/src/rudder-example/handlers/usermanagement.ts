import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsermanagementUsernameRoute,
  getUsermanagementRolesRoute,
  getUsermanagementUsersReloadRoute,
  getUsermanagementUsersRoute,
  postUsermanagementRoute,
  postUsermanagementUpdateUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usermanagementHandler = app
  .openapi(postUsermanagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsermanagementRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsermanagementUpdateUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsermanagementUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsermanagementUsersReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsermanagementUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
