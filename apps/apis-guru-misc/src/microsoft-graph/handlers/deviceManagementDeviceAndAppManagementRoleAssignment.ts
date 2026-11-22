import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementRoleAssignmentsDeviceAndAppManagementRoleAssignmentIdRoute,
  getDeviceManagementRoleAssignmentsDeviceAndAppManagementRoleAssignmentIdRoute,
  getDeviceManagementRoleAssignmentsRoute,
  patchDeviceManagementRoleAssignmentsDeviceAndAppManagementRoleAssignmentIdRoute,
  postDeviceManagementRoleAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceAndAppManagementRoleAssignmentHandler = app
  .openapi(getDeviceManagementRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementRoleAssignmentsDeviceAndAppManagementRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementRoleAssignmentsDeviceAndAppManagementRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementRoleAssignmentsDeviceAndAppManagementRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
