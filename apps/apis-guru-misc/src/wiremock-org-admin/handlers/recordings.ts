import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminRecordingsStatusRoute,
  postAdminRecordingsSnapshotRoute,
  postAdminRecordingsStartRoute,
  postAdminRecordingsStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordingsHandler = app
  .openapi(postAdminRecordingsSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRecordingsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRecordingsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRecordingsStopRoute, (c) => {
    throw new Error('Not implemented')
  })
