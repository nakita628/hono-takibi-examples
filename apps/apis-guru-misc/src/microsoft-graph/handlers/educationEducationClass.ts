import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
  deleteEducationClassesEducationClassIdAssignmentDefaultsRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  deleteEducationClassesEducationClassIdAssignmentSettingsRoute,
  deleteEducationClassesEducationClassIdMembersEducationUserIdRefRoute,
  deleteEducationClassesEducationClassIdRoute,
  deleteEducationClassesEducationClassIdTeachersEducationUserIdRefRoute,
  getEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
  getEducationClassesEducationClassIdAssignmentCategoriesRoute,
  getEducationClassesEducationClassIdAssignmentDefaultsRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsRoute,
  getEducationClassesEducationClassIdAssignmentSettingsRoute,
  getEducationClassesEducationClassIdAssignmentsRoute,
  getEducationClassesEducationClassIdGroupRoute,
  getEducationClassesEducationClassIdMembersRefRoute,
  getEducationClassesEducationClassIdMembersRoute,
  getEducationClassesEducationClassIdRoute,
  getEducationClassesEducationClassIdSchoolsEducationSchoolIdRoute,
  getEducationClassesEducationClassIdSchoolsRoute,
  getEducationClassesEducationClassIdTeachersRefRoute,
  getEducationClassesEducationClassIdTeachersRoute,
  getEducationClassesRoute,
  patchEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
  patchEducationClassesEducationClassIdAssignmentDefaultsRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
  patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
  patchEducationClassesEducationClassIdAssignmentSettingsRoute,
  patchEducationClassesEducationClassIdRoute,
  postEducationClassesEducationClassIdAssignmentCategoriesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRefRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesRoute,
  postEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsRoute,
  postEducationClassesEducationClassIdAssignmentsRoute,
  postEducationClassesEducationClassIdMembersRefRoute,
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
  .openapi(deleteEducationClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdAssignmentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchEducationClassesEducationClassIdAssignmentCategoriesEducationCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteEducationClassesEducationClassIdAssignmentDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdAssignmentDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdAssignmentSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdAssignmentSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRoute, (c) => {
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
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesEducationCategoryIdRefRoute,
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
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdResourcesEducationAssignmentResourceIdRoute,
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
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRoute,
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
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdRubricRefRoute,
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
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdRoute,
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
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdOutcomesEducationOutcomeIdRoute,
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
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdResourcesEducationSubmissionResourceIdRoute,
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
    deleteEducationClassesEducationClassIdAssignmentsEducationAssignmentIdSubmissionsEducationSubmissionIdSubmittedResourcesEducationSubmissionResourceIdRoute,
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
  .openapi(getEducationClassesEducationClassIdGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdMembersEducationUserIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdSchoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdSchoolsEducationSchoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdTeachersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationClassesEducationClassIdTeachersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationClassesEducationClassIdTeachersEducationUserIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
