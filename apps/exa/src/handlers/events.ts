import { OpenAPIHono } from '@hono/zod-openapi'
import { getV0EventsIdRoute, getV0EventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getV0EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
