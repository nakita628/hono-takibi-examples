import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  deleteMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  deleteMeAdhocCallsAdhocCallIdRoute,
  deleteMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  deleteMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  deleteMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  getMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  getMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  getMeAdhocCallsAdhocCallIdRecordingsCountRoute,
  getMeAdhocCallsAdhocCallIdRecordingsDeltaRoute,
  getMeAdhocCallsAdhocCallIdRecordingsRoute,
  getMeAdhocCallsAdhocCallIdRoute,
  getMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  getMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  getMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  getMeAdhocCallsAdhocCallIdTranscriptsCountRoute,
  getMeAdhocCallsAdhocCallIdTranscriptsDeltaRoute,
  getMeAdhocCallsAdhocCallIdTranscriptsRoute,
  getMeAdhocCallsCountRoute,
  getMeAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getMeAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getMeAdhocCallsRoute,
  patchMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  patchMeAdhocCallsAdhocCallIdRoute,
  patchMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  postMeAdhocCallsAdhocCallIdRecordingsRoute,
  postMeAdhocCallsAdhocCallIdTranscriptsRoute,
  postMeAdhocCallsRoute,
  putMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  putMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  putMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meAdhocCallHandler = app
  .openapi(getMeAdhocCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAdhocCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAdhocCallsAdhocCallIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdRecordingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdRecordingsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAdhocCallsAdhocCallIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdTranscriptsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsAdhocCallIdTranscriptsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAdhocCallsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
