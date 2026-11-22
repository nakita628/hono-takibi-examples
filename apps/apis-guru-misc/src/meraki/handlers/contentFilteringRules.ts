import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdContentFilteringRoute,
  putNetworksNetworkIdContentFilteringRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentFilteringRulesHandler = app
  .openapi(getNetworksNetworkIdContentFilteringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdContentFilteringRoute, (c) => {
    throw new Error('Not implemented')
  })
