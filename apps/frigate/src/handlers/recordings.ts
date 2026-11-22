import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecordingsStartStartEndEndRoute,
  getCameraNameRecordingsCoverageRoute,
  getCameraNameRecordingsRoute,
  getCameraNameRecordingsSummaryRoute,
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
  .openapi(getCameraNameRecordingsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameRecordingsCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingsUnavailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecordingsStartStartEndEndRoute, (c) => {
    throw new Error('Not implemented')
  })
