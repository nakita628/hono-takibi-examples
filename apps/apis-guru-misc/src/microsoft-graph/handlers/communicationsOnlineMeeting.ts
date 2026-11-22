import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  getCommunicationsOnlineMeetingsRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  postCommunicationsOnlineMeetingsRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationsOnlineMeetingHandler = app
  .openapi(getCommunicationsOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
