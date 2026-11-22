import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementDeviceConfigurationDeviceStateSummariesRoute,
  getDeviceManagementDeviceConfigurationDeviceStateSummariesRoute,
  patchDeviceManagementDeviceConfigurationDeviceStateSummariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceConfigurationDeviceStateSummaryHandler = app
  .openapi(deleteDeviceManagementDeviceConfigurationDeviceStateSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceConfigurationDeviceStateSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementDeviceConfigurationDeviceStateSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
