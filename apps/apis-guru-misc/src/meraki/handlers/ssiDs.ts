import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdDevicesSerialWirelessStatusRoute,
  getNetworksNetworkIdSsidsNumberRoute,
  getNetworksNetworkIdSsidsRoute,
  putNetworksNetworkIdSsidsNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssiDsHandler = app
  .openapi(getNetworksNetworkIdDevicesSerialWirelessStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSsidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSsidsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSsidsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
