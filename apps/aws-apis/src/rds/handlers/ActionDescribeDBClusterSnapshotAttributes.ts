import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBClusterSnapshotAttributesRoute,
  postActionDescribeDBClusterSnapshotAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBClusterSnapshotAttributesHandler = app
  .openapi(getActionDescribeDBClusterSnapshotAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClusterSnapshotAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
