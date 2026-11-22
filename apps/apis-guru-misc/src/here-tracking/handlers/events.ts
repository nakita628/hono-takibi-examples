import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventsV3HealthRoute,
  getEventsV3Route,
  getEventsV3StatusesDeviceCountsRoute,
  getEventsV3StatusesRoute,
  getEventsV3TrackingIdRoute,
  getEventsV3VersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsV3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsV3HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsV3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsV3StatusesDeviceCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsV3VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsV3TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
