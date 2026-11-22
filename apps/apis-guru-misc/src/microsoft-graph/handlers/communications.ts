import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommunicationsCallRecordsCallRecordIdSessionsCountRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsCountRoute,
  getCommunicationsCallRecordsCountRoute,
  getCommunicationsCallsCallIdAudioRoutingGroupsCountRoute,
  getCommunicationsCallsCallIdContentSharingSessionsCountRoute,
  getCommunicationsCallsCallIdOperationsCountRoute,
  getCommunicationsCallsCallIdParticipantsCountRoute,
  getCommunicationsCallsCountRoute,
  getCommunicationsOnlineMeetingsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getCommunicationsPresencesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationsHandler = app
  .openapi(getCommunicationsCallRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallRecordsCallRecordIdSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdAudioRoutingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdContentSharingSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdParticipantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsPresencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
