import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreTableFromClusterSnapshotRoute,
  postActionRestoreTableFromClusterSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRestoreTableFromClusterSnapshotHandler = app
  .openapi(getActionRestoreTableFromClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreTableFromClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
