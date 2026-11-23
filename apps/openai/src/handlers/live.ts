import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLiveSessionsSessionIdContentRoute,
  postLiveSessionsRoute,
  postLiveSessionsSessionIdAcceptRoute,
  postLiveSessionsSessionIdForkRoute,
  postLiveSessionsSessionIdHangupRoute,
  postLiveSessionsSessionIdReferRoute,
  postLiveSessionsSessionIdRejectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveHandler = app
  .openapi(postLiveSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveSessionsSessionIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveSessionsSessionIdForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveSessionsSessionIdHangupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveSessionsSessionIdReferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveSessionsSessionIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveSessionsSessionIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
