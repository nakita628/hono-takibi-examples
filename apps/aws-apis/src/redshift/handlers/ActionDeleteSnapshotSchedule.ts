import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteSnapshotScheduleRoute,
  postActionDeleteSnapshotScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteSnapshotScheduleHandler = app
  .openapi(getActionDeleteSnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSnapshotScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
