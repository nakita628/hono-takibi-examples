import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifySnapshotScheduleRoute,
  postActionModifySnapshotScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifySnapshotScheduleHandler = app
  .openapi(getActionModifySnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifySnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
