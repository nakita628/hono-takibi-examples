import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommunicationsCallRecordsCallRecordIdRoute,
  deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute,
  deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
  getCommunicationsCallRecordsCallRecordIdRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
  getCommunicationsCallRecordsRoute,
  patchCommunicationsCallRecordsCallRecordIdRoute,
  patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute,
  patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
  postCommunicationsCallRecordsCallRecordIdSessionsRoute,
  postCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute,
  postCommunicationsCallRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationsCallRecordHandler = app
  .openapi(getCommunicationsCallRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallRecordsCallRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallRecordsCallRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallRecordsCallRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallRecordsCallRecordIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallRecordsCallRecordIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
