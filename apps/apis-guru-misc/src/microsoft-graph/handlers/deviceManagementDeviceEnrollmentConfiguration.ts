import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsEnrollmentConfigurationAssignmentIdRoute,
  deleteDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdRoute,
  getDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsEnrollmentConfigurationAssignmentIdRoute,
  getDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsRoute,
  getDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdRoute,
  getDeviceManagementDeviceEnrollmentConfigurationsRoute,
  patchDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsEnrollmentConfigurationAssignmentIdRoute,
  patchDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdRoute,
  postDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsRoute,
  postDeviceManagementDeviceEnrollmentConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceEnrollmentConfigurationHandler = app
  .openapi(getDeviceManagementDeviceEnrollmentConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementDeviceEnrollmentConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsEnrollmentConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsEnrollmentConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsEnrollmentConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
