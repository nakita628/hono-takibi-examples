import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  getCommunicationsOnlineMeetingsCountRoute,
  getCommunicationsOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getCommunicationsOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsDeltaRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRoute,
  getCommunicationsOnlineMeetingsRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  postCommunicationsOnlineMeetingsCreateOrGetRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRoute,
  postCommunicationsOnlineMeetingsRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationsOnlineMeetingHandler = app
  .openapi(getCommunicationsOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
    deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
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
  .openapi(
    deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsOnlineMeetingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsOnlineMeetingsCreateOrGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCommunicationsOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
