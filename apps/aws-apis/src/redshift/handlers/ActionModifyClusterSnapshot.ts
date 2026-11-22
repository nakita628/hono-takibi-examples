import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyClusterSnapshotRoute,
  postActionModifyClusterSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyClusterSnapshotHandler = app
  .openapi(getActionModifyClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
