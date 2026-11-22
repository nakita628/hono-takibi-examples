import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  getMeOnlineMeetingsOnlineMeetingIdRoute,
  getMeOnlineMeetingsRoute,
  patchMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchMeOnlineMeetingsOnlineMeetingIdRoute,
  postMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postMeOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  postMeOnlineMeetingsRoute,
  putMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meOnlineMeetingHandler = app
  .openapi(getMeOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
