import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementConditionalAccessSettingsRoute,
  getDeviceManagementConditionalAccessSettingsRoute,
  patchDeviceManagementConditionalAccessSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementOnPremisesConditionalAccessSettingsHandler = app
  .openapi(getDeviceManagementConditionalAccessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementConditionalAccessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementConditionalAccessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
