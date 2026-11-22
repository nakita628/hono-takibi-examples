import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyClusterSnapshotScheduleRoute,
  postActionModifyClusterSnapshotScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyClusterSnapshotScheduleHandler = app
  .openapi(getActionModifyClusterSnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClusterSnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
