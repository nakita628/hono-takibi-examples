import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSnapshotCopyGrantsRoute,
  postActionDescribeSnapshotCopyGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSnapshotCopyGrantsHandler = app
  .openapi(getActionDescribeSnapshotCopyGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSnapshotCopyGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
