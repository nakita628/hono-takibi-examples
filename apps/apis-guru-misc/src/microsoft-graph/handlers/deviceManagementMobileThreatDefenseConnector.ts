import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementMobileThreatDefenseConnectorsMobileThreatDefenseConnectorIdRoute,
  getDeviceManagementMobileThreatDefenseConnectorsMobileThreatDefenseConnectorIdRoute,
  getDeviceManagementMobileThreatDefenseConnectorsRoute,
  patchDeviceManagementMobileThreatDefenseConnectorsMobileThreatDefenseConnectorIdRoute,
  postDeviceManagementMobileThreatDefenseConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementMobileThreatDefenseConnectorHandler = app
  .openapi(getDeviceManagementMobileThreatDefenseConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementMobileThreatDefenseConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementMobileThreatDefenseConnectorsMobileThreatDefenseConnectorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementMobileThreatDefenseConnectorsMobileThreatDefenseConnectorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementMobileThreatDefenseConnectorsMobileThreatDefenseConnectorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
