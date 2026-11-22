import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EventsInternalIDRoute,
  getV1EventsInternalIDRunsRoute,
  getV1EventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsInternalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsInternalIDRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
