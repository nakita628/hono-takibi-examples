import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSnapshotsSnapshotNameRoute,
  getSnapshotsRoute,
  getSnapshotsSnapshotNameRoute,
  postSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(getSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
