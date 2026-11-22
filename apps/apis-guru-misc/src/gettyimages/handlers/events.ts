import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3EventsIdRoute, getV3EventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getV3EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
