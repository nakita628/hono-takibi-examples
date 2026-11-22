import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdUplinkSettingsRoute,
  putNetworksNetworkIdUplinkSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trafficShapingUplinkSettingsHandler = app
  .openapi(getNetworksNetworkIdUplinkSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdUplinkSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
