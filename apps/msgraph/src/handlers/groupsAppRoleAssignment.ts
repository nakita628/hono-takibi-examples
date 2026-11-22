import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getGroupsGroupIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getGroupsGroupIdAppRoleAssignmentsCountRoute,
  getGroupsGroupIdAppRoleAssignmentsRoute,
  patchGroupsGroupIdAppRoleAssignmentsAppRoleAssignmentIdRoute,
  postGroupsGroupIdAppRoleAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsAppRoleAssignmentHandler = app
  .openapi(getGroupsGroupIdAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdAppRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
