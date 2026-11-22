import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute,
  getNetworksNetworkIdBluetoothClientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bluetoothClientsHandler = app
  .openapi(getNetworksNetworkIdBluetoothClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
