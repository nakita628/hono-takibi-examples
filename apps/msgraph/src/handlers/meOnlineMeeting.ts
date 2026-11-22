import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
  deleteMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  getMeOnlineMeetingsCountRoute,
  getMeOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getMeOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  getMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  getMeOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRoute,
  getMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  getMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  getMeOnlineMeetingsOnlineMeetingIdRecordingsCountRoute,
  getMeOnlineMeetingsOnlineMeetingIdRecordingsDeltaRoute,
  getMeOnlineMeetingsOnlineMeetingIdRecordingsRoute,
  getMeOnlineMeetingsOnlineMeetingIdRoute,
  getMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  getMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
  getMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  getMeOnlineMeetingsOnlineMeetingIdTranscriptsCountRoute,
  getMeOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRoute,
  getMeOnlineMeetingsOnlineMeetingIdTranscriptsRoute,
  getMeOnlineMeetingsRoute,
  patchMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  patchMeOnlineMeetingsOnlineMeetingIdRoute,
  patchMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  postMeOnlineMeetingsCreateOrGetRoute,
  postMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postMeOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  postMeOnlineMeetingsOnlineMeetingIdRecordingsRoute,
  postMeOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRoute,
  postMeOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRoute,
  postMeOnlineMeetingsOnlineMeetingIdTranscriptsRoute,
  postMeOnlineMeetingsRoute,
  putMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  putMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  putMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  putMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meOnlineMeetingHandler = app
  .openapi(getMeOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
    deleteMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
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
  .openapi(
    deleteMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsOnlineMeetingIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdRecordingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdRecordingsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsOnlineMeetingIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnlineMeetingsOnlineMeetingIdTranscriptsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnlineMeetingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnlineMeetingsCreateOrGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
