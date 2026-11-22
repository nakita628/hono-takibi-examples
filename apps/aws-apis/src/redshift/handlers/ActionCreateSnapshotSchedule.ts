import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateSnapshotScheduleRoute,
  postActionCreateSnapshotScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateSnapshotScheduleHandler = app
  .openapi(getActionCreateSnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
