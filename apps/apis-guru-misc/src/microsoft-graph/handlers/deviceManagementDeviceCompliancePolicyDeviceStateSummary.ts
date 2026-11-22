import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementDeviceCompliancePolicyDeviceStateSummaryRoute,
  getDeviceManagementDeviceCompliancePolicyDeviceStateSummaryRoute,
  patchDeviceManagementDeviceCompliancePolicyDeviceStateSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceCompliancePolicyDeviceStateSummaryHandler = app
  .openapi(deleteDeviceManagementDeviceCompliancePolicyDeviceStateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceCompliancePolicyDeviceStateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementDeviceCompliancePolicyDeviceStateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
