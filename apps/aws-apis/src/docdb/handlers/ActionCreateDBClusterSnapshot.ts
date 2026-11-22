import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateDBClusterSnapshotRoute,
  postActionCreateDBClusterSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDBClusterSnapshotHandler = app
  .openapi(getActionCreateDBClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
