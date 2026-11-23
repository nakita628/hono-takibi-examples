import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSessionsSessionIdRoute,
  getSessionsSessionIdRoute,
  getSessionsSessionIdViewsRoute,
  postSessionsSessionIdViewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(deleteSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSessionIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
