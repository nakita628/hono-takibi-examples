import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdBluetoothSettingsRoute,
  putDevicesSerialWirelessBluetoothSettingsRoute,
  putNetworksNetworkIdBluetoothSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bluetoothSettingsHandler = app
  .openapi(putDevicesSerialWirelessBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
