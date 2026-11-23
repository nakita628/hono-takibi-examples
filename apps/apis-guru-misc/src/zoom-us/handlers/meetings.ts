import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeetingsMeetingIdPollsPollIdRoute,
  deleteMeetingsMeetingIdRecordingsRecordingIdRoute,
  deleteMeetingsMeetingIdRecordingsRoute,
  deleteMeetingsMeetingIdRegistrantsRegistrantIdRoute,
  deleteMeetingsMeetingIdRoute,
  getMeetingsMeetingIdInvitationRoute,
  getMeetingsMeetingIdLivestreamRoute,
  getMeetingsMeetingIdPollsPollIdRoute,
  getMeetingsMeetingIdPollsRoute,
  getMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute,
  getMeetingsMeetingIdRecordingsRegistrantsRoute,
  getMeetingsMeetingIdRecordingsRoute,
  getMeetingsMeetingIdRecordingsSettingsRoute,
  getMeetingsMeetingIdRegistrantsQuestionsRoute,
  getMeetingsMeetingIdRegistrantsRoute,
  getMeetingsMeetingIdRoute,
  patchMeetingsMeetingIdLivestreamRoute,
  patchMeetingsMeetingIdLivestreamStatusRoute,
  patchMeetingsMeetingIdRecordingsRegistrantsQuestionsRoute,
  patchMeetingsMeetingIdRecordingsSettingsRoute,
  patchMeetingsMeetingIdRegistrantsQuestionsRoute,
  patchMeetingsMeetingIdRoute,
  postMeetingsMeetingIdBatchPollsRoute,
  postMeetingsMeetingIdPollsRoute,
  postMeetingsMeetingIdRecordingsRegistrantsRoute,
  postMeetingsMeetingIdRegistrantsRoute,
  putMeetingsMeetingIdPollsPollIdRoute,
  putMeetingsMeetingIdRecordingsRecordingIdStatusRoute,
  putMeetingsMeetingIdRecordingsRegistrantsStatusRoute,
  putMeetingsMeetingIdRecordingsStatusRoute,
  putMeetingsMeetingIdRegistrantsStatusRoute,
  putMeetingsMeetingIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingsHandler = app
  .openapi(deleteMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdBatchPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdLivestreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeetingsMeetingIdLivestreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeetingsMeetingIdLivestreamStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeetingsMeetingIdPollsPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdPollsPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeetingsMeetingIdPollsPollIdRoute, (c) => {
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
  .openapi(getMeetingsMeetingIdRegistrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdRegistrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdRegistrantsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeetingsMeetingIdRegistrantsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeetingsMeetingIdRegistrantsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeetingsMeetingIdRegistrantsRegistrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeetingsMeetingIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
