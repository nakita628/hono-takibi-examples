import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSyncAckRoute,
  getSyncAckRoute,
  postSyncAckRoute,
  postSyncStreamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncHandler = app
  .openapi(deleteSyncAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
