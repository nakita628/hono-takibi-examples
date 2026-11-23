import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClusterSnapshotsRoute,
  postActionDescribeClusterSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClusterSnapshotsHandler = app
  .openapi(getActionDescribeClusterSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClusterSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
