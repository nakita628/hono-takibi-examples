import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlockStorageSnapshotIdRoute,
  getBlockStorageSnapshotIdRoute,
  getBlockStorageSnapshotRoute,
  putBlockStorageSnapshotIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blockStorageSnapshotHandler = app
  .openapi(deleteBlockStorageSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBlockStorageSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockStorageSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockStorageSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
