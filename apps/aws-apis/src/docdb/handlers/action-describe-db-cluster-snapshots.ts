import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBClusterSnapshotsRoute,
  postActionDescribeDBClusterSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbClusterSnapshotsHandler = app
  .openapi(getActionDescribeDBClusterSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClusterSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
