import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEducationMeAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  deleteEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdRubricRefRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdRubricRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  deleteEducationMeRoute,
  deleteEducationMeRubricsEducationRubricIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  deleteEducationUsersEducationUserIdRoute,
  deleteEducationUsersEducationUserIdRubricsEducationRubricIdRoute,
  getEducationMeAssignmentsCountRoute,
  getEducationMeAssignmentsDeltaRoute,
  getEducationMeAssignmentsEducationAssignmentIdCategoriesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdCategoriesDeltaRoute,
  getEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute,
  getEducationMeAssignmentsEducationAssignmentIdCategoriesRoute,
  getEducationMeAssignmentsEducationAssignmentIdGradingCategoryRoute,
  getEducationMeAssignmentsEducationAssignmentIdGradingSchemeRoute,
  getEducationMeAssignmentsEducationAssignmentIdResourcesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdRubricRefRoute,
  getEducationMeAssignmentsEducationAssignmentIdRubricRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsRoute,
  getEducationMeAssignmentsRoute,
  getEducationMeClassesCountRoute,
  getEducationMeClassesEducationClassIdRoute,
  getEducationMeClassesRoute,
  getEducationMeRoute,
  getEducationMeRubricsCountRoute,
  getEducationMeRubricsEducationRubricIdRoute,
  getEducationMeRubricsRoute,
  getEducationMeSchoolsCountRoute,
  getEducationMeSchoolsEducationSchoolIdRoute,
  getEducationMeSchoolsRoute,
  getEducationMeTaughtClassesCountRoute,
  getEducationMeTaughtClassesEducationClassIdRoute,
  getEducationMeTaughtClassesRoute,
  getEducationMeUserMailboxSettingsRoute,
  getEducationMeUserRoute,
  getEducationMeUserServiceProvisioningErrorsCountRoute,
  getEducationMeUserServiceProvisioningErrorsRoute,
  getEducationUsersCountRoute,
  getEducationUsersDeltaRoute,
  getEducationUsersEducationUserIdAssignmentsCountRoute,
  getEducationUsersEducationUserIdAssignmentsDeltaRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesDeltaRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdGradingCategoryRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdGradingSchemeRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsRoute,
  getEducationUsersEducationUserIdAssignmentsRoute,
  getEducationUsersEducationUserIdClassesCountRoute,
  getEducationUsersEducationUserIdClassesEducationClassIdRoute,
  getEducationUsersEducationUserIdClassesRoute,
  getEducationUsersEducationUserIdRoute,
  getEducationUsersEducationUserIdRubricsCountRoute,
  getEducationUsersEducationUserIdRubricsEducationRubricIdRoute,
  getEducationUsersEducationUserIdRubricsRoute,
  getEducationUsersEducationUserIdSchoolsCountRoute,
  getEducationUsersEducationUserIdSchoolsEducationSchoolIdRoute,
  getEducationUsersEducationUserIdSchoolsRoute,
  getEducationUsersEducationUserIdTaughtClassesCountRoute,
  getEducationUsersEducationUserIdTaughtClassesEducationClassIdRoute,
  getEducationUsersEducationUserIdTaughtClassesRoute,
  getEducationUsersEducationUserIdUserMailboxSettingsRoute,
  getEducationUsersEducationUserIdUserRoute,
  getEducationUsersEducationUserIdUserServiceProvisioningErrorsCountRoute,
  getEducationUsersEducationUserIdUserServiceProvisioningErrorsRoute,
  getEducationUsersRoute,
  patchEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  patchEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdRubricRoute,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  patchEducationMeRoute,
  patchEducationMeRubricsEducationRubricIdRoute,
  patchEducationMeUserMailboxSettingsRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  patchEducationUsersEducationUserIdRoute,
  patchEducationUsersEducationUserIdRubricsEducationRubricIdRoute,
  patchEducationUsersEducationUserIdUserMailboxSettingsRoute,
  postEducationMeAssignmentsEducationAssignmentIdActivateRoute,
  postEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute,
  postEducationMeAssignmentsEducationAssignmentIdCategoriesRoute,
  postEducationMeAssignmentsEducationAssignmentIdDeactivateRoute,
  postEducationMeAssignmentsEducationAssignmentIdPublishRoute,
  postEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSetUpFeedbackResourcesFolderRoute,
  postEducationMeAssignmentsEducationAssignmentIdSetUpResourcesFolderRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdExcuseRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReassignRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReturnRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSetUpResourcesFolderRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmitRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdUnsubmitRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsRoute,
  postEducationMeAssignmentsRoute,
  postEducationMeRubricsRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdActivateRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdDeactivateRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdPublishRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSetUpFeedbackResourcesFolderRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSetUpResourcesFolderRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdExcuseRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReassignRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReturnRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSetUpResourcesFolderRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmitRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdUnsubmitRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsRoute,
  postEducationUsersEducationUserIdAssignmentsRoute,
  postEducationUsersEducationUserIdRubricsRoute,
  postEducationUsersRoute,
  putEducationMeAssignmentsEducationAssignmentIdRubricRefRoute,
  putEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationEducationUserHandler = app
  .openapi(getEducationMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationMeAssignmentsEducationAssignmentIdCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdCategoriesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdGradingCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdGradingSchemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSetUpFeedbackResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postEducationMeAssignmentsEducationAssignmentIdSetUpResourcesFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationMeAssignmentsEducationAssignmentIdResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEducationMeAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdExcuseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReassignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReturnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSetUpResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdUnsubmitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
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
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
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
  .openapi(getEducationMeAssignmentsEducationAssignmentIdSubmissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeRubricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeRubricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeRubricsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeSchoolsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeTaughtClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeTaughtClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeTaughtClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationUsersEducationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationUsersEducationUserIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdGradingCategoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdGradingSchemeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdDeactivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSetUpFeedbackResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSetUpResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesCountRoute,
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
  .openapi(getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdExcuseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReassignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReturnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSetUpResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdUnsubmitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
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
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
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
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
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
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationUsersEducationUserIdAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdRubricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationUsersEducationUserIdRubricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationUsersEducationUserIdRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdRubricsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdSchoolsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdTaughtClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdTaughtClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdTaughtClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
