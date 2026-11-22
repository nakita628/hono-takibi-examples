import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSolutionsVirtualEventsEventsVirtualEventIdPresentersVirtualEventPresenterIdRoute,
  deleteSolutionsVirtualEventsEventsVirtualEventIdRoute,
  deleteSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdRoute,
  deleteSolutionsVirtualEventsRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersVirtualEventPresenterIdRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsEmailEmailRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsUserIdUserIdRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersVirtualEventPresenterIdRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsEmailEmailRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsUserIdUserIdRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdRoute,
  getSolutionsVirtualEventsEventsCountRoute,
  getSolutionsVirtualEventsEventsRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdPresentersCountRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdPresentersRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdPresentersVirtualEventPresenterIdRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsCountRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsCountRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
  getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdRoute,
  getSolutionsVirtualEventsRoute,
  getSolutionsVirtualEventsTownhallsCountRoute,
  getSolutionsVirtualEventsTownhallsGetByUserIdAndRoleUserIdUserIdRoleRoleRoute,
  getSolutionsVirtualEventsTownhallsGetByUserRoleRoleRoleRoute,
  getSolutionsVirtualEventsTownhallsRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersCountRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersVirtualEventPresenterIdRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsCountRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsCountRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsEmailEmailRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsUserIdUserIdRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdSessionsCountRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdSessionsRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdSessionsVirtualEventSessionIdRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsCountRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsCountRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
  getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdRoute,
  getSolutionsVirtualEventsWebinarsCountRoute,
  getSolutionsVirtualEventsWebinarsGetByUserIdAndRoleUserIdUserIdRoleRoleRoute,
  getSolutionsVirtualEventsWebinarsGetByUserRoleRoleRoleRoute,
  getSolutionsVirtualEventsWebinarsRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersCountRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersVirtualEventPresenterIdRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsCountRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsCountRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsEmailEmailRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsUserIdUserIdRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdSessionsCountRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdSessionsRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdSessionsVirtualEventSessionIdRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsCountRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsCountRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
  getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdRoute,
  patchSolutionsVirtualEventsEventsVirtualEventIdPresentersVirtualEventPresenterIdRoute,
  patchSolutionsVirtualEventsEventsVirtualEventIdRoute,
  patchSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdRoute,
  patchSolutionsVirtualEventsRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersVirtualEventPresenterIdRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsEmailEmailRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsUserIdUserIdRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersVirtualEventPresenterIdRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsEmailEmailRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsUserIdUserIdRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdRoute,
  postSolutionsVirtualEventsEventsRoute,
  postSolutionsVirtualEventsEventsVirtualEventIdCancelRoute,
  postSolutionsVirtualEventsEventsVirtualEventIdPresentersRoute,
  postSolutionsVirtualEventsEventsVirtualEventIdPublishRoute,
  postSolutionsVirtualEventsEventsVirtualEventIdSessionsRoute,
  postSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
  postSolutionsVirtualEventsEventsVirtualEventIdSetExternalEventInformationRoute,
  postSolutionsVirtualEventsTownhallsRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsEmailEmailCancelRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsUserIdUserIdCancelRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdCancelRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
  postSolutionsVirtualEventsWebinarsRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsEmailEmailCancelRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsUserIdUserIdCancelRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdCancelRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const solutionsVirtualEventsRootHandler = app
  .openapi(getSolutionsVirtualEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsVirtualEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsVirtualEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsEventsVirtualEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsVirtualEventsEventsVirtualEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsVirtualEventsEventsVirtualEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsEventsVirtualEventIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsEventsVirtualEventIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsEventsVirtualEventIdSetExternalEventInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsEventsVirtualEventIdPresentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsEventsVirtualEventIdPresentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsEventsVirtualEventIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsEventsVirtualEventIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsEventsVirtualEventIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsEventsVirtualEventIdPresentersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsEventsVirtualEventIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsEventsVirtualEventIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsEventsVirtualEventIdSessionsVirtualEventSessionIdAttendanceReportsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsEventsVirtualEventIdSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsTownhallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsTownhallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdPresentersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationConfigurationQuestionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdSessionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsVirtualEventRegistrationIdSessionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsEmailEmailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsEmailEmailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsEmailEmailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsEmailEmailCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsUserIdUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsUserIdUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsUserIdUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsUserIdUserIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdRegistrationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsVirtualEventSessionIdAttendanceReportsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsTownhallsVirtualEventTownhallIdSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsTownhallsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsTownhallsGetByUserIdAndRoleUserIdUserIdRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsTownhallsGetByUserRoleRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsWebinarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsWebinarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersVirtualEventPresenterIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdPresentersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsVirtualEventRegistrationQuestionBaseIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationConfigurationQuestionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdSessionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsVirtualEventRegistrationIdSessionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsEmailEmailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsEmailEmailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsEmailEmailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsEmailEmailCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsUserIdUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsUserIdUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsUserIdUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsUserIdUserIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdRegistrationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsVirtualEventSessionIdAttendanceReportsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsVirtualEventsWebinarsVirtualEventWebinarIdSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsWebinarsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsWebinarsGetByUserIdAndRoleUserIdUserIdRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsVirtualEventsWebinarsGetByUserRoleRoleRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
