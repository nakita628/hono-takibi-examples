import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSessionsSessionIdRoute,
  patchSessionsSessionIdRoute,
  postSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(postSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
