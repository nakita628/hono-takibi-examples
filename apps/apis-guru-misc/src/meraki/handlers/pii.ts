import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdPiiRequestsRequestIdRoute,
  getNetworksNetworkIdPiiPiiKeysRoute,
  getNetworksNetworkIdPiiRequestsRequestIdRoute,
  getNetworksNetworkIdPiiRequestsRoute,
  getNetworksNetworkIdPiiSmDevicesForKeyRoute,
  getNetworksNetworkIdPiiSmOwnersForKeyRoute,
  postNetworksNetworkIdPiiRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const piiHandler = app
  .openapi(getNetworksNetworkIdPiiPiiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdPiiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdPiiRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiSmDevicesForKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiSmOwnersForKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
