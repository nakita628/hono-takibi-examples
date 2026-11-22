import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute,
  getNetworksNetworkIdSwitchStacksRoute,
  getNetworksNetworkIdSwitchStacksSwitchStackIdRoute,
  postNetworksNetworkIdSwitchStacksRoute,
  postNetworksNetworkIdSwitchStacksSwitchStackIdAddRoute,
  postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const switchStacksHandler = app
  .openapi(getNetworksNetworkIdSwitchStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchStacksSwitchStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksSwitchStackIdAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
