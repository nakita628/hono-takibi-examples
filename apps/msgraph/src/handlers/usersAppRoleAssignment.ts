import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getUsersUserIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getUsersUserIdAppRoleAssignmentsCountRoute,
  getUsersUserIdAppRoleAssignmentsRoute,
  patchUsersUserIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  postUsersUserIdAppRoleAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersAppRoleAssignmentHandler = app
  .openapi(getUsersUserIdAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAppRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
