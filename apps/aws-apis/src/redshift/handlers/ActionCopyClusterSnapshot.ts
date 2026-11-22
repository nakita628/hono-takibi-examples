import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCopyClusterSnapshotRoute, postActionCopyClusterSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCopyClusterSnapshotHandler = app
  .openapi(getActionCopyClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
