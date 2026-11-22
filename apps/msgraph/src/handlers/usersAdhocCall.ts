import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  deleteUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  deleteUsersUserIdAdhocCallsAdhocCallIdRoute,
  deleteUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  deleteUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  deleteUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  getUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  getUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  getUsersUserIdAdhocCallsAdhocCallIdRecordingsCountRoute,
  getUsersUserIdAdhocCallsAdhocCallIdRecordingsDeltaRoute,
  getUsersUserIdAdhocCallsAdhocCallIdRecordingsRoute,
  getUsersUserIdAdhocCallsAdhocCallIdRoute,
  getUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  getUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  getUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  getUsersUserIdAdhocCallsAdhocCallIdTranscriptsCountRoute,
  getUsersUserIdAdhocCallsAdhocCallIdTranscriptsDeltaRoute,
  getUsersUserIdAdhocCallsAdhocCallIdTranscriptsRoute,
  getUsersUserIdAdhocCallsCountRoute,
  getUsersUserIdAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getUsersUserIdAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getUsersUserIdAdhocCallsRoute,
  patchUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  patchUsersUserIdAdhocCallsAdhocCallIdRoute,
  patchUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  postUsersUserIdAdhocCallsAdhocCallIdRecordingsRoute,
  postUsersUserIdAdhocCallsAdhocCallIdTranscriptsRoute,
  postUsersUserIdAdhocCallsRoute,
  putUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  putUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  putUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersAdhocCallHandler = app
  .openapi(getUsersUserIdAdhocCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAdhocCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAdhocCallsAdhocCallIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdRecordingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdRecordingsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAdhocCallsAdhocCallIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdTranscriptsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsAdhocCallIdTranscriptsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAdhocCallsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
