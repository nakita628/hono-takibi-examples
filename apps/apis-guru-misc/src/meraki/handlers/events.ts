import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdEventsEventTypesRoute,
  getNetworksNetworkIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getNetworksNetworkIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdEventsEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
