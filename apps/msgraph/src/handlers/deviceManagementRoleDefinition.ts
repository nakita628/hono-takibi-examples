import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoleAssignmentIdRoute,
  deleteDeviceManagementRoleDefinitionsRoleDefinitionIdRoute,
  getDeviceManagementRoleDefinitionsCountRoute,
  getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsCountRoute,
  getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoleAssignmentIdRoleDefinitionRoute,
  getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoleAssignmentIdRoute,
  getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoute,
  getDeviceManagementRoleDefinitionsRoleDefinitionIdRoute,
  getDeviceManagementRoleDefinitionsRoute,
  patchDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoleAssignmentIdRoute,
  patchDeviceManagementRoleDefinitionsRoleDefinitionIdRoute,
  postDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoute,
  postDeviceManagementRoleDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementRoleDefinitionHandler = app
  .openapi(getDeviceManagementRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementRoleDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementRoleDefinitionsRoleDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementRoleDefinitionsRoleDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementRoleDefinitionsRoleDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsRoleAssignmentIdRoleDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementRoleDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
