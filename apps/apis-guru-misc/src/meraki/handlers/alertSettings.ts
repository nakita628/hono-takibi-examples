import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdAlertSettingsRoute,
  putNetworksNetworkIdAlertSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertSettingsHandler = app
  .openapi(getNetworksNetworkIdAlertSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdAlertSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
