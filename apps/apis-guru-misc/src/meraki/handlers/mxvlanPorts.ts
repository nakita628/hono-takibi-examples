import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdAppliancePortsAppliancePortIdRoute,
  getNetworksNetworkIdAppliancePortsRoute,
  putNetworksNetworkIdAppliancePortsAppliancePortIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxvlanPortsHandler = app
  .openapi(getNetworksNetworkIdAppliancePortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAppliancePortsAppliancePortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdAppliancePortsAppliancePortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
