import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeetingsMeetingIdPollsPollIdRoute,
  deleteMeetingsMeetingIdRegistrantsRegistrantIdRoute,
  deleteMeetingsMeetingIdRoute,
  getMeetingsMeetingIdInvitationRoute,
  getMeetingsMeetingIdLivestreamRoute,
  getMeetingsMeetingIdPollsPollIdRoute,
  getMeetingsMeetingIdPollsRoute,
  getMeetingsMeetingIdRegistrantsQuestionsRoute,
  getMeetingsMeetingIdRegistrantsRoute,
  getMeetingsMeetingIdRoute,
  getPastMeetingsMeetingIdInstancesRoute,
  getPastMeetingsMeetingIdPollsRoute,
  getPastMeetingsMeetingUUIDParticipantsRoute,
  getPastMeetingsMeetingUUIDRoute,
  getUsersUserIdMeetingsRoute,
  getUsersUserIdMeetingTemplatesRoute,
  patchLiveMeetingsMeetingIdEventsRoute,
  patchMeetingsMeetingIdLivestreamRoute,
  patchMeetingsMeetingIdLivestreamStatusRoute,
  patchMeetingsMeetingIdRegistrantsQuestionsRoute,
  patchMeetingsMeetingIdRoute,
  postMeetingsMeetingIdBatchPollsRoute,
  postMeetingsMeetingIdPollsRoute,
  postMeetingsMeetingIdRegistrantsRoute,
  postUsersUserIdMeetingsRoute,
  putMeetingsMeetingIdPollsPollIdRoute,
  putMeetingsMeetingIdRegistrantsStatusRoute,
  putMeetingsMeetingIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingsHandler = app
  .openapi(patchLiveMeetingsMeetingIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getPastMeetingsMeetingIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastMeetingsMeetingIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastMeetingsMeetingUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastMeetingsMeetingUUIDParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMeetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
