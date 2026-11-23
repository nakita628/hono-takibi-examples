import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTimeTrackingEntriesTimeTrackingEntryGidRoute,
  getTimeTrackingEntriesRoute,
  getTimeTrackingEntriesTimeTrackingEntryGidRoute,
  putTimeTrackingEntriesTimeTrackingEntryGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeTrackingEntriesHandler = app
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
