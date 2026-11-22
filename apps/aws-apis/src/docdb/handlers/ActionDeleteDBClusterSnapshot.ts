import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteDBClusterSnapshotRoute,
  postActionDeleteDBClusterSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteDBClusterSnapshotHandler = app
  .openapi(getActionDeleteDBClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
