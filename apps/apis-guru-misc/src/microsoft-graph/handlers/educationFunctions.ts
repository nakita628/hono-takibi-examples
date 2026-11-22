import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEducationClassesEducationClassIdAssignmentCategoriesMicrosoftGraphDeltaRoute,
  getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesMicrosoftGraphDeltaRoute,
  getEducationClassesEducationClassIdAssignmentsMicrosoftGraphDeltaRoute,
  getEducationClassesMicrosoftGraphDeltaRoute,
  getEducationMeAssignmentsEducationAssignmentIdCategoriesMicrosoftGraphDeltaRoute,
  getEducationMeAssignmentsMicrosoftGraphDeltaRoute,
  getEducationSchoolsMicrosoftGraphDeltaRoute,
  getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesMicrosoftGraphDeltaRoute,
  getEducationUsersEducationUserIdAssignmentsMicrosoftGraphDeltaRoute,
  getEducationUsersMicrosoftGraphDeltaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationFunctionsHandler = app
  .openapi(getEducationClassesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentCategoriesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationClassesEducationClassIdAssignmentsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationClassesEducationClassIdAssignmentsEducationAssignmentIdCategoriesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationMeAssignmentsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationMeAssignmentsEducationAssignmentIdCategoriesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationSchoolsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationUsersEducationUserIdAssignmentsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationUsersEducationUserIdAssignmentsEducationAssignmentIdCategoriesMicrosoftGraphDeltaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
