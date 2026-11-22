import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumReplayPlaylistsPlaylistIdRoute,
  deleteApiV2RumReplayPlaylistsPlaylistIdSessionsRoute,
  deleteApiV2RumReplayPlaylistsPlaylistIdSessionsSessionIdRoute,
  getApiV2RumReplayPlaylistsPlaylistIdRoute,
  getApiV2RumReplayPlaylistsPlaylistIdSessionsRoute,
  getApiV2RumReplayPlaylistsRoute,
  postApiV2RumReplayPlaylistsRoute,
  putApiV2RumReplayPlaylistsPlaylistIdRoute,
  putApiV2RumReplayPlaylistsPlaylistIdSessionsSessionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumReplayPlaylistsHandler = app
  .openapi(getApiV2RumReplayPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumReplayPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumReplayPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumReplayPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RumReplayPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumReplayPlaylistsPlaylistIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumReplayPlaylistsPlaylistIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumReplayPlaylistsPlaylistIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RumReplayPlaylistsPlaylistIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
