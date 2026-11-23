import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeImportSnapshotTasksRoute,
  postActionDescribeImportSnapshotTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeImportSnapshotTasksHandler = app
  .openapi(getActionDescribeImportSnapshotTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeImportSnapshotTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
