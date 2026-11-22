import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdRoute,
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
  deleteUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  getUsersUserIdOnlineMeetingsCountRoute,
  getUsersUserIdOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getUsersUserIdOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCountRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsDeltaRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCountRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRoute,
  getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsRoute,
  getUsersUserIdOnlineMeetingsRoute,
  patchUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  patchUsersUserIdOnlineMeetingsOnlineMeetingIdRoute,
  patchUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  postUsersUserIdOnlineMeetingsCreateOrGetRoute,
  postUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  postUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsRoute,
  postUsersUserIdOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRoute,
  postUsersUserIdOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRoute,
  postUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsRoute,
  postUsersUserIdOnlineMeetingsRoute,
  putUsersUserIdOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  putUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  putUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  putUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersOnlineMeetingHandler = app
  .openapi(getUsersUserIdOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnlineMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnlineMeetingsOnlineMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnlineMeetingsOnlineMeetingIdAttendeeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUsersUserIdOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdRecordingsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnlineMeetingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnlineMeetingsCreateOrGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
