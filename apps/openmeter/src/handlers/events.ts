import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1EventsRoute, getApiV2EventsRoute, postApiV1EventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getApiV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
