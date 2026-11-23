import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteEventsIdRoute, getEventsIdRoute, putEventsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(deleteEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
