import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdVlansVlanIdRoute,
  getNetworksNetworkIdVlansEnabledStateRoute,
  getNetworksNetworkIdVlansRoute,
  getNetworksNetworkIdVlansVlanIdRoute,
  postNetworksNetworkIdVlansRoute,
  putNetworksNetworkIdVlansEnabledStateRoute,
  putNetworksNetworkIdVlansVlanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vlaNsHandler = app
  .openapi(getNetworksNetworkIdVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlansEnabledStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdVlansEnabledStateRoute, (c) => {
    throw new Error('Not implemented')
  })
