import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSessionsRoute, postSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(deleteSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
