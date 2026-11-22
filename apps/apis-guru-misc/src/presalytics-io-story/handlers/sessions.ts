import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSessionsSessionIdRoute,
  getIdSessionsRoute,
  getSessionsSessionIdRoute,
  postIdSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(deleteSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
