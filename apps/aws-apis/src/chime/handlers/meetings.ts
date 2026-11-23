import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeetingsMeetingIdAttendeesAttendeeIdRoute,
  deleteMeetingsMeetingIdRoute,
  getMeetingsMeetingIdAttendeesAttendeeIdRoute,
  getMeetingsMeetingIdAttendeesAttendeeIdTagsRoute,
  getMeetingsMeetingIdAttendeesRoute,
  getMeetingsMeetingIdRoute,
  getMeetingsMeetingIdTagsRoute,
  getMeetingsRoute,
  postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddRoute,
  postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteRoute,
  postMeetingsMeetingIdAttendeesOperationBatchCreateRoute,
  postMeetingsMeetingIdAttendeesRoute,
  postMeetingsMeetingIdDialOutsRoute,
  postMeetingsMeetingIdTagsOperationAddRoute,
  postMeetingsMeetingIdTagsOperationDeleteRoute,
  postMeetingsMeetingIdTranscriptionOperationStartRoute,
  postMeetingsMeetingIdTranscriptionOperationStopRoute,
  postMeetingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingsHandler = app
  .openapi(postMeetingsMeetingIdAttendeesOperationBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdDialOutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeetingsMeetingIdAttendeesAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdAttendeesAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdAttendeesAttendeeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingsMeetingIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdTranscriptionOperationStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdTranscriptionOperationStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdTagsOperationAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingsMeetingIdTagsOperationDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
