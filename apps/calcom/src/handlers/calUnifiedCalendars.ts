import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CalendarsCalendarEventsEventUidRoute,
  deleteV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
  getV2CalendarsCalendarEventEventUidRoute,
  getV2CalendarsCalendarEventsEventUidRoute,
  getV2CalendarsCalendarEventsRoute,
  getV2CalendarsCalendarFreebusyRoute,
  getV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
  getV2CalendarsConnectionsConnectionIdEventsRoute,
  getV2CalendarsConnectionsConnectionIdFreebusyRoute,
  getV2CalendarsConnectionsRoute,
  patchV2CalendarsCalendarEventEventUidRoute,
  patchV2CalendarsCalendarEventsEventUidRoute,
  patchV2CalendarsConnectionsConnectionIdEventsEventIdRoute,
  postV2CalendarsCalendarEventsRoute,
  postV2CalendarsConnectionsConnectionIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calUnifiedCalendarsHandler = app
  .openapi(getV2CalendarsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsConnectionsConnectionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsConnectionsConnectionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsConnectionsConnectionIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CalendarsConnectionsConnectionIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CalendarsConnectionsConnectionIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsConnectionsConnectionIdFreebusyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarEventsEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CalendarsCalendarEventsEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CalendarsCalendarEventsEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarEventEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CalendarsCalendarEventEventUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CalendarsCalendarEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CalendarsCalendarFreebusyRoute, (c) => {
    throw new Error('Not implemented')
  })
