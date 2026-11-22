import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
  getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesCountRoute,
  getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
  getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesRoute,
  patchDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
  postDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportRoute,
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
  .openapi(
    deleteDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportedWindowsAutopilotDeviceIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementImportedWindowsAutopilotDeviceIdentitiesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
