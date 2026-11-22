import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsEventIdRoute,
  deleteEventsRoute,
  getEventsEventIdRoute,
  getEventsRoute,
  getEventTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
