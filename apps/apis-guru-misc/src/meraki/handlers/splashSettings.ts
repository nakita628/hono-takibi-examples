import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdSsidsNumberSplashSettingsRoute,
  putNetworksNetworkIdSsidsNumberSplashSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const splashSettingsHandler = app
  .openapi(getNetworksNetworkIdSsidsNumberSplashSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSsidsNumberSplashSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
