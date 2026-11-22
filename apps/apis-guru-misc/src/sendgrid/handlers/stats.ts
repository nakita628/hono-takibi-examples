import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBrowsersStatsRoute,
  getClientsClientTypeStatsRoute,
  getClientsStatsRoute,
  getDevicesStatsRoute,
  getGeoStatsRoute,
  getMailboxProvidersStatsRoute,
  getStatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getBrowsersStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientsClientTypeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeoStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailboxProvidersStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
