import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiEventsIdRoute, getApiEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventHandler = app
  .openapi(getApiEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
