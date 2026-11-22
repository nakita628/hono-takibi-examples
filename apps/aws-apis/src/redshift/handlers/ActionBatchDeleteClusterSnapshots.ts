import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchDeleteClusterSnapshotsRoute,
  postActionBatchDeleteClusterSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionBatchDeleteClusterSnapshotsHandler = app
  .openapi(getActionBatchDeleteClusterSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchDeleteClusterSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
