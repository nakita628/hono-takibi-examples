import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsManagedDeviceMobileAppConfigurationAssignmentIdRoute,
  deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesManagedDeviceMobileAppConfigurationDeviceStatusIdRoute,
  deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusSummaryRoute,
  deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdRoute,
  deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesManagedDeviceMobileAppConfigurationUserStatusIdRoute,
  deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusSummaryRoute,
  getDeviceAppManagementMobileAppConfigurationsCountRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsCountRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsManagedDeviceMobileAppConfigurationAssignmentIdRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesCountRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesManagedDeviceMobileAppConfigurationDeviceStatusIdRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusSummaryRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesCountRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesManagedDeviceMobileAppConfigurationUserStatusIdRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusSummaryRoute,
  getDeviceAppManagementMobileAppConfigurationsRoute,
  patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsManagedDeviceMobileAppConfigurationAssignmentIdRoute,
  patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesManagedDeviceMobileAppConfigurationDeviceStatusIdRoute,
  patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusSummaryRoute,
  patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdRoute,
  patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesManagedDeviceMobileAppConfigurationUserStatusIdRoute,
  patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusSummaryRoute,
  postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsRoute,
  postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignRoute,
  postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesRoute,
  postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesRoute,
  postDeviceAppManagementMobileAppConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementManagedDeviceMobileAppConfigurationHandler = app
  .openapi(getDeviceAppManagementMobileAppConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementMobileAppConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsManagedDeviceMobileAppConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsManagedDeviceMobileAppConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsManagedDeviceMobileAppConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesManagedDeviceMobileAppConfigurationDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesManagedDeviceMobileAppConfigurationDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesManagedDeviceMobileAppConfigurationDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesManagedDeviceMobileAppConfigurationUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesManagedDeviceMobileAppConfigurationUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesManagedDeviceMobileAppConfigurationUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementMobileAppConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
