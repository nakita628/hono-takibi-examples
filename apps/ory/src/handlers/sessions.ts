import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSessionsIdRoute,
  deleteSessionsRoute,
  getSessionsRoute,
  getSessionsTokenExchangeRoute,
  getSessionsWhoamiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(deleteSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsTokenExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsWhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
