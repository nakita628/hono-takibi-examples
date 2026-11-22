import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsCountRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsDeltaRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsRoute,
  getCommunicationsAdhocCallsAdhocCallIdRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsCountRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsDeltaRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsRoute,
  getCommunicationsAdhocCallsCountRoute,
  getCommunicationsAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getCommunicationsAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getCommunicationsAdhocCallsRoute,
  patchCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  patchCommunicationsAdhocCallsAdhocCallIdRoute,
  patchCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  postCommunicationsAdhocCallsAdhocCallIdRecordingsRoute,
  postCommunicationsAdhocCallsAdhocCallIdTranscriptsRoute,
  postCommunicationsAdhocCallsRoute,
  putCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationsAdhocCallHandler = app
  .openapi(getCommunicationsAdhocCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsAdhocCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsAdhocCallsAdhocCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsAdhocCallsAdhocCallIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdRecordingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdRecordingsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsAdhocCallsAdhocCallIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsAdhocCallsAdhocCallIdTranscriptsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsAdhocCallIdTranscriptsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsAdhocCallsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCommunicationsAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
