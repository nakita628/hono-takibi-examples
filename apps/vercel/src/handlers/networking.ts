import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectNetworksNetworkIdRoute,
  deleteV1NetworkingPrivatelinkEndpointsEndpointIdRoute,
  getV1ConnectNetworksNetworkIdRoute,
  getV1ConnectNetworksRoute,
  getV1NetworkingPrivatelinkEndpointsEndpointIdRoute,
  getV1NetworkingPrivatelinkEndpointsRoute,
  patchV1ConnectNetworksNetworkIdRoute,
  patchV1NetworkingPrivatelinkEndpointsEndpointIdRoute,
  patchV1ProjectsIdOrNameSharedConnectLinksRoute,
  postV1ConnectNetworksRoute,
  postV1NetworkingPrivatelinkEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkingHandler = app
  .openapi(getV1ConnectNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConnectNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NetworkingPrivatelinkEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NetworkingPrivatelinkEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NetworkingPrivatelinkEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NetworkingPrivatelinkEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NetworkingPrivatelinkEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsIdOrNameSharedConnectLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
