import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportActivitiesRoute,
  getReportCloudRecordingRoute,
  getReportDailyRoute,
  getReportMeetingsMeetingIdParticipantsRoute,
  getReportMeetingsMeetingIdPollsRoute,
  getReportMeetingsMeetingIdRoute,
  getReportOperationlogsRoute,
  getReportTelephoneRoute,
  getReportUsersRoute,
  getReportUsersUserIdMeetingsRoute,
  getReportWebinarsWebinarIdParticipantsRoute,
  getReportWebinarsWebinarIdPollsRoute,
  getReportWebinarsWebinarIdQaRoute,
  getReportWebinarsWebinarIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportHandler = app
  .openapi(getReportActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportCloudRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportMeetingsMeetingIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportMeetingsMeetingIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportOperationlogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportTelephoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportUsersUserIdMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportWebinarsWebinarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportWebinarsWebinarIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportWebinarsWebinarIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportWebinarsWebinarIdQaRoute, (c) => {
    throw new Error('Not implemented')
  })
