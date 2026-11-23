import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSessionsRoute,
  getSessionsSessionIdReverificationsReverificationIdRoute,
  getSessionsSessionIdRoute,
  patchSessionsSessionIdRoute,
  postSessionsRoute,
  postSessionsSessionIdRefreshRoute,
  postSessionsSessionIdRevokeRoute,
  postSessionsSessionIdTokensRoute,
  postSessionsSessionIdTokensTemplateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(getSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSessionIdReverificationsReverificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdTokensTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
