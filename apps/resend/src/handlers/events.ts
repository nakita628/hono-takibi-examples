import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsIdentifierRoute,
  getEventsIdentifierRoute,
  getEventsRoute,
  patchEventsIdentifierRoute,
  postEventsRoute,
  postEventsSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
