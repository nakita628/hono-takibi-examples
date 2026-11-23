import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSnapshotIdRoute,
  getSnapshotIdRoute,
  getSnapshotRoute,
  postSnapshotIdExportRoute,
  postSnapshotIdPromoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotHandler = app
  .openapi(postSnapshotIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
