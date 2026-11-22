import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsSandboxesRoute, getEventsSandboxesSandboxIDRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsSandboxesSandboxIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
