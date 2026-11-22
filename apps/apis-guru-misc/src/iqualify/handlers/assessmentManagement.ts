import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRoute,
  deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRoute,
  getOfferingsOfferingIdActivitiesOpenresponseRoute,
  getOfferingsOfferingIdAssessmentsRoute,
  getOfferingsOfferingIdLearnersPendingSubmissionRoute,
  getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRoute,
  patchOfferingsOfferingIdAssessmentsAssessmentIdRoute,
  patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assessmentManagementHandler = app
  .openapi(getOfferingsOfferingIdActivitiesOpenresponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOfferingsOfferingIdAssessmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdLearnersPendingSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
