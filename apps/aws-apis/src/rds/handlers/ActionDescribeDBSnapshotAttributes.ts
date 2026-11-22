import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBSnapshotAttributesRoute,
  postActionDescribeDBSnapshotAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBSnapshotAttributesHandler = app
  .openapi(getActionDescribeDBSnapshotAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBSnapshotAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
