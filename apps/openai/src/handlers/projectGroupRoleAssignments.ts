import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdGroupsGroupIdRolesRoleIdRoute,
  getProjectsProjectIdGroupsGroupIdRolesRoleIdRoute,
  getProjectsProjectIdGroupsGroupIdRolesRoute,
  postProjectsProjectIdGroupsGroupIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectGroupRoleAssignmentsHandler = app
  .openapi(getProjectsProjectIdGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdGroupsGroupIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdGroupsGroupIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
