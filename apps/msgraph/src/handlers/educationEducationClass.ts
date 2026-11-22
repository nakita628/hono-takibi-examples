import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
  deleteEducationClassesEducationClassIdAssignmentDefaultsRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  deleteEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesEducationGradingCategoryIdRoute,
  deleteEducationClassesEducationClassIdAssignmentSettingsGradingSchemesEducationGradingSchemeIdRoute,
  deleteEducationClassesEducationClassIdAssignmentSettingsRoute,
  deleteEducationClassesEducationClassIdMembersEducationUserIdRefRoute,
  deleteEducationClassesEducationClassIdMembersRefRoute,
  deleteEducationClassesEducationClassIdModulesEducationModuleIdResourcesEducationModuleResourceIdRoute,
  deleteEducationClassesEducationClassIdModulesEducationModuleIdRoute,
  deleteEducationClassesEducationClassIdRoute,
  deleteEducationClassesEducationClassIdTeachersEducationUserIdRefRoute,
  deleteEducationClassesEducationClassIdTeachersRefRoute,
  getEducationClassesCountRoute,
  getEducationClassesDeltaRoute,
  getEducationClassesEducationClassIdAssignmentCategoriesCountRoute,
  getEducationClassesEducationClassIdAssignmentCategoriesDeltaRoute,
  getEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
  getEducationClassesEducationClassIdAssignmentCategoriesRoute,
  getEducationClassesEducationClassIdAssignmentDefaultsRoute,
  getEducationClassesEducationClassIdAssignmentsCountRoute,
  getEducationClassesEducationClassIdAssignmentsDeltaRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesDeltaRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdGradingCategoryRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdGradingSchemeRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsRoute,
  getEducationClassesEducationClassIdAssignmentSettingsDefaultGradingSchemeRoute,
  getEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesCountRoute,
  getEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesEducationGradingCategoryIdRoute,
  getEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesRoute,
  getEducationClassesEducationClassIdAssignmentSettingsGradingSchemesCountRoute,
  getEducationClassesEducationClassIdAssignmentSettingsGradingSchemesEducationGradingSchemeIdRoute,
  getEducationClassesEducationClassIdAssignmentSettingsGradingSchemesRoute,
  getEducationClassesEducationClassIdAssignmentSettingsRoute,
  getEducationClassesEducationClassIdAssignmentsRoute,
  getEducationClassesEducationClassIdGetRecentlyModifiedSubmissionsRoute,
  getEducationClassesEducationClassIdGroupRoute,
  getEducationClassesEducationClassIdGroupServiceProvisioningErrorsCountRoute,
  getEducationClassesEducationClassIdGroupServiceProvisioningErrorsRoute,
  getEducationClassesEducationClassIdMembersCountRoute,
  getEducationClassesEducationClassIdMembersRefRoute,
  getEducationClassesEducationClassIdMembersRoute,
  getEducationClassesEducationClassIdModulesCountRoute,
  getEducationClassesEducationClassIdModulesEducationModuleIdResourcesCountRoute,
  getEducationClassesEducationClassIdModulesEducationModuleIdResourcesEducationModuleResourceIdRoute,
  getEducationClassesEducationClassIdModulesEducationModuleIdResourcesRoute,
  getEducationClassesEducationClassIdModulesEducationModuleIdRoute,
  getEducationClassesEducationClassIdModulesRoute,
  getEducationClassesEducationClassIdRoute,
  getEducationClassesEducationClassIdSchoolsCountRoute,
  getEducationClassesEducationClassIdSchoolsEducationSchoolIdRoute,
  getEducationClassesEducationClassIdSchoolsRoute,
  getEducationClassesEducationClassIdTeachersCountRoute,
  getEducationClassesEducationClassIdTeachersRefRoute,
  getEducationClassesEducationClassIdTeachersRoute,
  getEducationClassesRoute,
  patchEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
  patchEducationClassesEducationClassIdAssignmentDefaultsRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  patchEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesEducationGradingCategoryIdRoute,
  patchEducationClassesEducationClassIdAssignmentSettingsGradingSchemesEducationGradingSchemeIdRoute,
  patchEducationClassesEducationClassIdAssignmentSettingsRoute,
  patchEducationClassesEducationClassIdModulesEducationModuleIdResourcesEducationModuleResourceIdRoute,
  patchEducationClassesEducationClassIdModulesEducationModuleIdRoute,
  patchEducationClassesEducationClassIdRoute,
  postEducationClassesEducationClassIdAssignmentCategoriesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdActivateRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdDeactivateRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdPublishRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSetUpFeedbackResourcesFolderRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSetUpResourcesFolderRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdExcuseRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReassignRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReturnRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSetUpResourcesFolderRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmitRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdUnsubmitRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsRoute,
  postEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesRoute,
  postEducationClassesEducationClassIdAssignmentSettingsGradingSchemesRoute,
  postEducationClassesEducationClassIdAssignmentsRoute,
  postEducationClassesEducationClassIdMembersRefRoute,
  postEducationClassesEducationClassIdModulesEducationModuleIdPinRoute,
  postEducationClassesEducationClassIdModulesEducationModuleIdPublishRoute,
  postEducationClassesEducationClassIdModulesEducationModuleIdResourcesRoute,
  postEducationClassesEducationClassIdModulesEducationModuleIdSetUpResourcesFolderRoute,
  postEducationClassesEducationClassIdModulesEducationModuleIdUnpinRoute,
  postEducationClassesEducationClassIdModulesRoute,
  postEducationClassesEducationClassIdTeachersRefRoute,
  postEducationClassesRoute,
  putEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationEducationClassHandler = app
  .openapi(getEducationClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdAssignmentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationClassesEducationClassIdAssignmentCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentCategoriesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdAssignmentDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdAssignmentDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdGradingCategoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdGradingSchemeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdActivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdDeactivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdPublishRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSetUpFeedbackResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSetUpResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesEducationAssignmentResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdDependentResourcesCountRoute,
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
  .openapi(getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdExcuseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReassignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdReturnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSetUpResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdUnsubmitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
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
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
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
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesEducationSubmissionResourceId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdDependentResourcesCountRoute,
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
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationClassesEducationClassIdAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdAssignmentSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdAssignmentSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentSettingsDefaultGradingSchemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesEducationGradingCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesEducationGradingCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesEducationGradingCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEducationClassesEducationClassIdAssignmentSettingsGradingCategoriesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationClassesEducationClassIdAssignmentSettingsGradingSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdAssignmentSettingsGradingSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationClassesEducationClassIdAssignmentSettingsGradingSchemesEducationGradingSchemeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdAssignmentSettingsGradingSchemesEducationGradingSchemeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentSettingsGradingSchemesEducationGradingSchemeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationClassesEducationClassIdAssignmentSettingsGradingSchemesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdGroupServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdGroupServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdMembersEducationUserIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdGetRecentlyModifiedSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdModulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdModulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdModulesEducationModuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdModulesEducationModuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdModulesEducationModuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdModulesEducationModuleIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdModulesEducationModuleIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postEducationClassesEducationClassIdModulesEducationModuleIdSetUpResourcesFolderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postEducationClassesEducationClassIdModulesEducationModuleIdUnpinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdModulesEducationModuleIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdModulesEducationModuleIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationClassesEducationClassIdModulesEducationModuleIdResourcesEducationModuleResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationClassesEducationClassIdModulesEducationModuleIdResourcesEducationModuleResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationClassesEducationClassIdModulesEducationModuleIdResourcesEducationModuleResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationClassesEducationClassIdModulesEducationModuleIdResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdModulesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdSchoolsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdTeachersEducationUserIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdTeachersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdTeachersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdTeachersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdTeachersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
