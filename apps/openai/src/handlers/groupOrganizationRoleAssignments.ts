import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationGroupsGroupIdRolesRoleIdRoute,
  getOrganizationGroupsGroupIdRolesRoleIdRoute,
  getOrganizationGroupsGroupIdRolesRoute,
  postOrganizationGroupsGroupIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupOrganizationRoleAssignmentsHandler = app
  .openapi(getOrganizationGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationGroupsGroupIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationGroupsGroupIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
