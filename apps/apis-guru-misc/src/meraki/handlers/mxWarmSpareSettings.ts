import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdWarmSpareSettingsRoute,
  postNetworksNetworkIdSwapWarmSpareRoute,
  putNetworksNetworkIdWarmSpareSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxWarmSpareSettingsHandler = app
  .openapi(postNetworksNetworkIdSwapWarmSpareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWarmSpareSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWarmSpareSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
