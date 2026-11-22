import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSnapshotSchedulesRoute,
  postActionDescribeSnapshotSchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeSnapshotSchedulesHandler = app
  .openapi(getActionDescribeSnapshotSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSnapshotSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
