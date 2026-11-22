import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2EventsEventIdRoute,
  getApiV2EventsRoute,
  postApiV2EventsRoute,
  postApiV2EventsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getApiV2EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2EventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
