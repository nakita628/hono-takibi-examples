import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdRoute,
  getUserManagementUsersUserIdAuthorizedApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementUsersAuthorizedApplicationsHandler = app
  .openapi(getUserManagementUsersUserIdAuthorizedApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementUsersUserIdAuthorizedApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
