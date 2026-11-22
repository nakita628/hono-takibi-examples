import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdUsersUserIdRolesRoleIdRoute,
  getProjectsProjectIdUsersUserIdRolesRoleIdRoute,
  getProjectsProjectIdUsersUserIdRolesRoute,
  postProjectsProjectIdUsersUserIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectUserRoleAssignmentsHandler = app
  .openapi(getProjectsProjectIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
