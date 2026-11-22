import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSessionIdRoute,
  getSessionIdRoute,
  getSessionRoute,
  patchSessionIdRoute,
  postSessionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(postSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
