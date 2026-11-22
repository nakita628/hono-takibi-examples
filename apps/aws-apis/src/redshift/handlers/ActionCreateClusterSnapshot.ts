import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateClusterSnapshotRoute,
  postActionCreateClusterSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateClusterSnapshotHandler = app
  .openapi(getActionCreateClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClusterSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
