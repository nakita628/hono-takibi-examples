import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSessionsSocketRoute,
  postSessionsRoute,
  putSessionsIdSessionRoute,
  putSessionsIdSessionStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(postSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSocketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSessionsIdSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSessionsIdSessionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
