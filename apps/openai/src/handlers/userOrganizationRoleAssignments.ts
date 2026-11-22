import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationUsersUserIdRolesRoleIdRoute,
  getOrganizationUsersUserIdRolesRoleIdRoute,
  getOrganizationUsersUserIdRolesRoute,
  postOrganizationUsersUserIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userOrganizationRoleAssignmentsHandler = app
  .openapi(getOrganizationUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
