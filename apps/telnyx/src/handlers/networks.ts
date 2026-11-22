import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksIdDefaultGatewayRoute,
  deleteNetworksIdRoute,
  getNetworksIdDefaultGatewayRoute,
  getNetworksIdNetworkInterfacesRoute,
  getNetworksIdRoute,
  getNetworksRoute,
  patchNetworksIdRoute,
  postNetworksIdDefaultGatewayRoute,
  postNetworksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(getNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksIdDefaultGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksIdDefaultGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksIdDefaultGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksIdNetworkInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
