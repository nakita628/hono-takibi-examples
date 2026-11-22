import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventEventIdRoute, getEventRoute } from '../routes'

const app = new OpenAPIHono()

export const eventHandler = app
  .openapi(getEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
