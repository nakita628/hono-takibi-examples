import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEducationClassesCountRoute,
  getEducationClassesEducationClassIdAssignmentCategoriesCountRoute,
  getEducationClassesEducationClassIdAssignmentsCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
  getEducationClassesEducationClassIdMembersCountRoute,
  getEducationClassesEducationClassIdSchoolsCountRoute,
  getEducationClassesEducationClassIdTeachersCountRoute,
  getEducationMeAssignmentsCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdCategoriesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdResourcesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
  getEducationMeClassesCountRoute,
  getEducationMeRubricsCountRoute,
  getEducationMeSchoolsCountRoute,
  getEducationMeTaughtClassesCountRoute,
  getEducationSchoolsCountRoute,
  getEducationSchoolsEducationSchoolIdClassesCountRoute,
  getEducationSchoolsEducationSchoolIdUsersCountRoute,
  getEducationUsersCountRoute,
  getEducationUsersEducationUserIdAssignmentsCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
  getEducationUsersEducationUserIdClassesCountRoute,
  getEducationUsersEducationUserIdRubricsCountRoute,
  getEducationUsersEducationUserIdSchoolsCountRoute,
  getEducationUsersEducationUserIdTaughtClassesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationHandler = app
  .openapi(getEducationClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationClassesEducationClassIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdSchoolsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdTeachersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdSubmissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationMeClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeRubricsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeSchoolsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeTaughtClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsEducationSchoolIdClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationSchoolsEducationSchoolIdUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationUsersEducationUserIdClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdRubricsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdSchoolsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdTaughtClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
