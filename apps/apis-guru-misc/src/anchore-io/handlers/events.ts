import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsEventIdRoute,
  deleteEventsRoute,
  getEventsEventIdRoute,
  getEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
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
