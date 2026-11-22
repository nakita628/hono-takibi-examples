import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEducationMeAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdRubricRefRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdRubricRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  deleteEducationMeRoute,
  deleteEducationMeRubricsEducationRubricIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  deleteEducationUsersEducationUserIdRoute,
  deleteEducationUsersEducationUserIdRubricsEducationRubricIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute,
  getEducationMeAssignmentsEducationAssignmentIdCategoriesRoute,
  getEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdRubricRefRoute,
  getEducationMeAssignmentsEducationAssignmentIdRubricRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  getEducationMeAssignmentsEducationAssignmentIdSubmissionsRoute,
  getEducationMeAssignmentsRoute,
  getEducationMeClassesEducationClassIdRoute,
  getEducationMeClassesRoute,
  getEducationMeRoute,
  getEducationMeRubricsEducationRubricIdRoute,
  getEducationMeRubricsRoute,
  getEducationMeSchoolsEducationSchoolIdRoute,
  getEducationMeSchoolsRoute,
  getEducationMeTaughtClassesEducationClassIdRoute,
  getEducationMeTaughtClassesRoute,
  getEducationMeUserRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsRoute,
  getEducationUsersEducationUserIdAssignmentsRoute,
  getEducationUsersEducationUserIdClassesEducationClassIdRoute,
  getEducationUsersEducationUserIdClassesRoute,
  getEducationUsersEducationUserIdRoute,
  getEducationUsersEducationUserIdRubricsEducationRubricIdRoute,
  getEducationUsersEducationUserIdRubricsRoute,
  getEducationUsersEducationUserIdSchoolsEducationSchoolIdRoute,
  getEducationUsersEducationUserIdSchoolsRoute,
  getEducationUsersEducationUserIdTaughtClassesEducationClassIdRoute,
  getEducationUsersEducationUserIdTaughtClassesRoute,
  getEducationUsersEducationUserIdUserRoute,
  getEducationUsersRoute,
  patchEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdRubricRoute,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  patchEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  patchEducationMeRoute,
  patchEducationMeRubricsEducationRubricIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  patchEducationUsersEducationUserIdRoute,
  patchEducationUsersEducationUserIdRubricsEducationRubricIdRoute,
  postEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute,
  postEducationMeAssignmentsEducationAssignmentIdCategoriesRoute,
  postEducationMeAssignmentsEducationAssignmentIdResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  postEducationMeAssignmentsEducationAssignmentIdSubmissionsRoute,
  postEducationMeAssignmentsRoute,
  postEducationMeRubricsRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  postEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsRoute,
  postEducationUsersEducationUserIdAssignmentsRoute,
  postEducationUsersEducationUserIdRubricsRoute,
  postEducationUsersRoute,
  putEducationMeAssignmentsEducationAssignmentIdRubricRefRoute,
  putEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationEducationUserHandler = app
  .openapi(deleteEducationMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdCategoriesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationMeAssignmentsEducationAssignmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(deleteEducationMeAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEducationMeAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeAssignmentsEducationAssignmentIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeAssignmentsEducationAssignmentIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
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
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
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
    deleteEducationMeAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
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
  .openapi(getEducationMeClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeRubricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationMeRubricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationMeRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationMeRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeTaughtClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeTaughtClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationMeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationUsersEducationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationUsersEducationUserIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRoute, (c) => {
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
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
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
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEducationUsersEducationUserIdAssignmentsEducationAssignmentIdRubricRefRoute, (c) => {
    throw new Error('Not implemented')
  })
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
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
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
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
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
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
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
    deleteEducationUsersEducationUserIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
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
  .openapi(getEducationUsersEducationUserIdClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdRubricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationUsersEducationUserIdRubricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationUsersEducationUserIdRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationUsersEducationUserIdRubricsEducationRubricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdTaughtClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdTaughtClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
