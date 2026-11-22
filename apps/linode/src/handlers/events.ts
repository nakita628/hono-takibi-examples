import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountEventsEventIdRoute,
  getApiVersionAccountEventsRoute,
  postApiVersionAccountEventsEventIdSeenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getApiVersionAccountEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountEventsEventIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
