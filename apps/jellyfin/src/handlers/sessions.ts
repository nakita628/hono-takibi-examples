import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSessionsSessionIdUserUserIdRoute,
  getSessionsRoute,
  postSessionsCapabilitiesFullRoute,
  postSessionsCapabilitiesRoute,
  postSessionsLogoutRoute,
  postSessionsPlayingPingRoute,
  postSessionsPlayingProgressRoute,
  postSessionsPlayingRoute,
  postSessionsPlayingStoppedRoute,
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

export const sessionsHandler = app
  .openapi(postSessionsPlayingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsPlayingPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsPlayingProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsPlayingStoppedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsRoute, (c) => {
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
  .openapi(postSessionsSessionIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSessionsSessionIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsSessionIdViewingRoute, (c) => {
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
