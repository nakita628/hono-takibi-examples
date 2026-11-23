import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventsEventIdOverviewRoute,
  getEventsEventIdParametersRoute,
  postEventsPagedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postEventsPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
