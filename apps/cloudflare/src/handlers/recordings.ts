import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRealtimeKitAppIdRecordingsActiveRecordingMeetingIdRoute,
  getAccountsAccountIdRealtimeKitAppIdRecordingsRecordingIdRoute,
  getAccountsAccountIdRealtimeKitAppIdRecordingsRoute,
  postAccountsAccountIdRealtimeKitAppIdRecordingsRoute,
  postAccountsAccountIdRealtimeKitAppIdRecordingsTrackRoute,
  putAccountsAccountIdRealtimeKitAppIdRecordingsRecordingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordingsHandler = app
  .openapi(getAccountsAccountIdRealtimeKitAppIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdRecordingsActiveRecordingMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRealtimeKitAppIdRecordingsTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRealtimeKitAppIdRecordingsRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRealtimeKitAppIdRecordingsRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
