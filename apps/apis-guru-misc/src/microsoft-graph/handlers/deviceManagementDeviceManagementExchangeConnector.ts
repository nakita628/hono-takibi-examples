import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute,
  getDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute,
  getDeviceManagementExchangeConnectorsRoute,
  patchDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute,
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
  .openapi(
    deleteDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
