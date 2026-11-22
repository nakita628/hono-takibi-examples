import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute,
  getDeviceManagementExchangeConnectorsCountRoute,
  getDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute,
  getDeviceManagementExchangeConnectorsRoute,
  patchDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute,
  postDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdSyncRoute,
  postDeviceManagementExchangeConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceManagementExchangeConnectorHandler = app
  .openapi(getDeviceManagementExchangeConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementExchangeConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdSyncRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementExchangeConnectorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
