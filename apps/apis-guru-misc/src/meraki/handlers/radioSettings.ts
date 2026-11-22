import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  getNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  getNetworksNetworkIdWirelessRfProfilesRoute,
  postNetworksNetworkIdWirelessRfProfilesRoute,
  putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radioSettingsHandler = app
  .openapi(getNetworksNetworkIdWirelessRfProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWirelessRfProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
