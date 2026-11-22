import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdRoute,
  getDeviceManagementWindowsAutopilotDeviceIdentitiesCountRoute,
  getDeviceManagementWindowsAutopilotDeviceIdentitiesRoute,
  getDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdRoute,
  patchDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdRoute,
  postDeviceManagementWindowsAutopilotDeviceIdentitiesRoute,
  postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdAssignUserToDeviceRoute,
  postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdUnassignUserFromDeviceRoute,
  postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdUpdateDevicePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementWindowsAutopilotDeviceIdentityHandler = app
  .openapi(getDeviceManagementWindowsAutopilotDeviceIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementWindowsAutopilotDeviceIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdAssignUserToDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdUnassignUserFromDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdUpdateDevicePropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementWindowsAutopilotDeviceIdentitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
