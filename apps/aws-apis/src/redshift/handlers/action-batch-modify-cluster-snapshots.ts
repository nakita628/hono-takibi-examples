import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchModifyClusterSnapshotsRoute,
  postActionBatchModifyClusterSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionBatchModifyClusterSnapshotsHandler = app
  .openapi(getActionBatchModifyClusterSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchModifyClusterSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
