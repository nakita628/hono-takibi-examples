import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteClusterSnapshotRoute,
  postActionDeleteClusterSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteClusterSnapshotHandler = app
  .openapi(getActionDeleteClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
