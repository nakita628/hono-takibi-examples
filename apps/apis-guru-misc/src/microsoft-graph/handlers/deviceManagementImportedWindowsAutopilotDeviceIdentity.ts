import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
  getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
  getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesRoute,
  patchDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
  postDeviceManagementImportedWindowsAutopilotDeviceIdentitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementImportedWindowsAutopilotDeviceIdentityHandler = app
  .openapi(getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementImportedWindowsAutopilotDeviceIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
