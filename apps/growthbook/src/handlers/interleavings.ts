import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1InterleavingsIdRoute,
  getV1InterleavingsIdResultsRoute,
  getV1InterleavingsIdRoute,
  getV1InterleavingsIdSnapshotsRoute,
  getV1InterleavingsIdSnapshotsSnapshotIdRoute,
  getV1InterleavingsIdStatusRoute,
  getV1InterleavingsRoute,
  postV1InterleavingsIdRefreshRoute,
  postV1InterleavingsIdStartRoute,
  postV1InterleavingsIdStopRoute,
  postV1InterleavingsRoute,
  putV1InterleavingsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interleavingsHandler = app
  .openapi(getV1InterleavingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InterleavingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InterleavingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingsIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
