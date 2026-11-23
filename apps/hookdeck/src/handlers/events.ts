import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventsIdRawBodyRoute,
  getEventsIdRoute,
  getEventsRoute,
  postEventsIdRetryRoute,
  putEventsIdMuteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdRawBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsIdMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
