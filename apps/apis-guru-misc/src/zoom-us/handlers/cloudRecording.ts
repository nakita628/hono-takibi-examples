import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeetingsMeetingIdRecordingsRecordingIdRoute,
  deleteMeetingsMeetingIdRecordingsRoute,
  getAccountsAccountIdRecordingsRoute,
  getArchiveFilesRoute,
  getMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute,
  getMeetingsMeetingIdRecordingsRegistrantsRoute,
  getMeetingsMeetingIdRecordingsRoute,
  getMeetingsMeetingIdRecordingsSettingsRoute,
  getUsersUserIdRecordingsRoute,
  patchMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute,
  patchMeetingsMeetingIdRecordingsSettingsRoute,
  postMeetingsMeetingIdRecordingsRegistrantsRoute,
  putMeetingsMeetingIdRecordingsRecordingIdStatusRoute,
  putMeetingsMeetingIdRecordingsRegistrantsStatusRoute,
  putMeetingsMeetingIdRecordingsStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudRecordingHandler = app
  .openapi(getAccountsAccountIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchiveFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeetingsMeetingIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdRecordingsRegistrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdRecordingsRegistrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeetingsMeetingIdRecordingsRegistrantsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdRecordingsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeetingsMeetingIdRecordingsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeetingsMeetingIdRecordingsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeetingsMeetingIdRecordingsRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeetingsMeetingIdRecordingsRecordingIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
