import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSessionsSessionIdUserUserIdRoute,
  getAuthPasswordResetProvidersRoute,
  getAuthProvidersRoute,
  getSessionsRoute,
  postSessionsCapabilitiesFullRoute,
  postSessionsCapabilitiesRoute,
  postSessionsLogoutRoute,
  postSessionsSessionIdCommandCommandRoute,
  postSessionsSessionIdCommandRoute,
  postSessionsSessionIdMessageRoute,
  postSessionsSessionIdPlayingCommandRoute,
  postSessionsSessionIdPlayingRoute,
  postSessionsSessionIdSystemCommandRoute,
  postSessionsSessionIdUserUserIdRoute,
  postSessionsSessionIdViewingRoute,
  postSessionsViewingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app
  .openapi(getAuthPasswordResetProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsCapabilitiesFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsViewingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdCommandCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdPlayingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdPlayingCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdSystemCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSessionsSessionIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdViewingRoute, (c) => {
    throw new Error('Not implemented')
  })
