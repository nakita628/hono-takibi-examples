import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsEventTriggersIdRoute,
  getEventsEventTriggersIdRoute,
  getEventsEventTriggersRoute,
  postEventsEventTriggersRoute,
  putEventsEventTriggersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventTriggersHandler = app
  .openapi(getEventsEventTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsEventTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsEventTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
