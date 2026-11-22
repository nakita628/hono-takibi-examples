import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdPortForwardingRulesRoute,
  putNetworksNetworkIdPortForwardingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxPortForwardingRulesHandler = app
  .openapi(getNetworksNetworkIdPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
