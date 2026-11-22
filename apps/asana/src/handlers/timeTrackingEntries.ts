import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTimeTrackingEntriesTimeTrackingEntryGidRoute,
  getTasksTaskGidTimeTrackingEntriesRoute,
  getTimeTrackingEntriesRoute,
  getTimeTrackingEntriesTimeTrackingEntryGidRoute,
  postTasksTaskGidTimeTrackingEntriesRoute,
  putTimeTrackingEntriesTimeTrackingEntryGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeTrackingEntriesHandler = app
  .openapi(getTasksTaskGidTimeTrackingEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskGidTimeTrackingEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeTrackingEntriesTimeTrackingEntryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTimeTrackingEntriesTimeTrackingEntryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimeTrackingEntriesTimeTrackingEntryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeTrackingEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
