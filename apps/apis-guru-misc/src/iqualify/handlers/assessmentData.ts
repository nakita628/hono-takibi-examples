import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOfferingsOfferingIdAnalyticsActivitiesResponsesRoute,
  getOfferingsOfferingIdAnalyticsMarksAssignmentsRoute,
  getOfferingsOfferingIdAnalyticsMarksQuizzesRoute,
  getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRoute,
  getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRoute,
  getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assessmentDataHandler = app
  .openapi(getOfferingsOfferingIdAnalyticsActivitiesResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsMarksAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsMarksQuizzesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
