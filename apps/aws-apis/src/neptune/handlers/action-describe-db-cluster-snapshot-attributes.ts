import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBClusterSnapshotAttributesRoute,
  postActionDescribeDBClusterSnapshotAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbClusterSnapshotAttributesHandler = app
  .openapi(getActionDescribeDBClusterSnapshotAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClusterSnapshotAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
