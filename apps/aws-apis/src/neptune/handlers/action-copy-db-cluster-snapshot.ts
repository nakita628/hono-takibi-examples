import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCopyDBClusterSnapshotRoute,
  postActionCopyDBClusterSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCopyDbClusterSnapshotHandler = app
  .openapi(getActionCopyDBClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyDBClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
