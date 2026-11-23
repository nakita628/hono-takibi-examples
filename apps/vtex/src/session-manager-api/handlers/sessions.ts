import { OpenAPIHono } from '@hono/zod-openapi'
import { getSessionsRoute, patchSessionsRoute, postSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(getSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
