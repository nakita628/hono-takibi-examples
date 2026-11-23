import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreDBClusterFromSnapshotRoute,
  postActionRestoreDBClusterFromSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRestoreDbClusterFromSnapshotHandler = app
  .openapi(getActionRestoreDBClusterFromSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreDBClusterFromSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
