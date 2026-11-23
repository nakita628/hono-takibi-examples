import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreFromClusterSnapshotRoute,
  postActionRestoreFromClusterSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRestoreFromClusterSnapshotHandler = app
  .openapi(getActionRestoreFromClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreFromClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
