import { OpenAPIHono } from '@hono/zod-openapi'
import { getSessionsSessionIdRoute, postSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(postSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
