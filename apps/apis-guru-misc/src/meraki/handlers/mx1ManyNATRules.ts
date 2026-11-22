import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdOneToManyNatRulesRoute,
  putNetworksNetworkIdOneToManyNatRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mx1ManyNATRulesHandler = app
  .openapi(getNetworksNetworkIdOneToManyNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdOneToManyNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
