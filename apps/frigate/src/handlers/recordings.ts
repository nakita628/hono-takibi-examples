import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecordingsStartStartEndEndRoute,
  getRecordingsStorageRoute,
  getRecordingsSummaryRoute,
  getRecordingsUnavailableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordingsHandler = app
  .openapi(getRecordingsStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingsUnavailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecordingsStartStartEndEndRoute, (c) => {
    throw new Error('Not implemented')
  })
