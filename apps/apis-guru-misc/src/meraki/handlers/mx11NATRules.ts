import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdOneToOneNatRulesRoute,
  putNetworksNetworkIdOneToOneNatRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mx11NATRulesHandler = app
  .openapi(getNetworksNetworkIdOneToOneNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdOneToOneNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
