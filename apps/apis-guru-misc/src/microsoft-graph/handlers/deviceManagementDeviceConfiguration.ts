import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsDeviceConfigurationAssignmentIdRoute,
  deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
  deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesDeviceConfigurationDeviceStatusIdRoute,
  deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusOverviewRoute,
  deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdRoute,
  deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesDeviceConfigurationUserStatusIdRoute,
  deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusOverviewRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsDeviceConfigurationAssignmentIdRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesDeviceConfigurationDeviceStatusIdRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusOverviewRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesDeviceConfigurationUserStatusIdRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusOverviewRoute,
  getDeviceManagementDeviceConfigurationsRoute,
  patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsDeviceConfigurationAssignmentIdRoute,
  patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
  patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesDeviceConfigurationDeviceStatusIdRoute,
  patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusOverviewRoute,
  patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdRoute,
  patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesDeviceConfigurationUserStatusIdRoute,
  patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusOverviewRoute,
  postDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsRoute,
  postDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesRoute,
  postDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesRoute,
  postDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesRoute,
  postDeviceManagementDeviceConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceConfigurationHandler = app
  .openapi(getDeviceManagementDeviceConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementDeviceConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceConfigurationsDeviceConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsDeviceConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsDeviceConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsDeviceConfigurationAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesSettingStateDeviceSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesDeviceConfigurationDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesDeviceConfigurationDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesDeviceConfigurationDeviceStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesDeviceConfigurationUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesDeviceConfigurationUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesDeviceConfigurationUserStatusIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
