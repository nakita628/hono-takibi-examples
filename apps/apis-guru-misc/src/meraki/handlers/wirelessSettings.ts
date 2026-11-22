import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdWirelessSettingsRoute,
  putNetworksNetworkIdWirelessSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessSettingsHandler = app
  .openapi(getNetworksNetworkIdWirelessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
