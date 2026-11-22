import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumReplaySessionsSessionIdWatchesRoute,
  getApiV2RumReplaySessionsSessionIdWatchersRoute,
  getApiV2RumReplayViewershipHistorySessionsRoute,
  postApiV2RumReplaySessionsSessionIdWatchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumReplayViewershipHandler = app
  .openapi(getApiV2RumReplaySessionsSessionIdWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumReplaySessionsSessionIdWatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumReplaySessionsSessionIdWatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumReplayViewershipHistorySessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
