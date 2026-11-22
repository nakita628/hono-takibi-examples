import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSessionsIdRoute,
  deleteSessionsRoute,
  getSessionsRoute,
  postSessionsIdLockRoute,
  postSessionsRoute,
  putSessionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(deleteSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
