import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiInfoHandler,
  assessmentDataHandler,
  assessmentGroupsHandler,
  assessmentManagementHandler,
  badgesHandler,
  channelsHandler,
  courseMappingsHandler,
  courseMetadataHandler,
  coursesHandler,
  learnerActivityHandler,
  offeringLearnersHandler,
  offeringMetadataHandler,
  offeringsHandler,
  organisationHandler,
  pulsesHandler,
  usersInIQualifyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiInfoHandler)
  .route('/', courseMappingsHandler)
  .route('/', coursesHandler)
  .route('/', courseMetadataHandler)
  .route('/', offeringsHandler)
  .route('/', assessmentManagementHandler)
  .route('/', assessmentDataHandler)
  .route('/', channelsHandler)
  .route('/', learnerActivityHandler)
  .route('/', pulsesHandler)
  .route('/', badgesHandler)
  .route('/', assessmentGroupsHandler)
  .route('/', offeringMetadataHandler)
  .route('/', offeringLearnersHandler)
  .route('/', organisationHandler)
  .route('/', usersInIQualifyHandler)

export default app
