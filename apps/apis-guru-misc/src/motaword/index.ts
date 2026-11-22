import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityHandler,
  asyncHandler,
  authHandler,
  blogHandler,
  cacheHandler,
  commissionHandler,
  continuousProjectHandler,
  corporateHandler,
  documentHandler,
  glossaryHandler,
  integrationsHandler,
  invitationHandler,
  machineLearningHandler,
  pamHandler,
  paymentHandler,
  projectDocumentHandler,
  projectHandler,
  projectWebhooksHandler,
  reportHandler,
  searchHandler,
  staticHandler,
  statsHandler,
  stringsHandler,
  styleGuideHandler,
  surveysHandler,
  userHandler,
  vendorHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', staticHandler)
  .route('/', asyncHandler)
  .route('/', blogHandler)
  .route('/', cacheHandler)
  .route('/', commissionHandler)
  .route('/', continuousProjectHandler)
  .route('/', stringsHandler)
  .route('/', corporateHandler)
  .route('/', userHandler)
  .route('/', documentHandler)
  .route('/', glossaryHandler)
  .route('/', integrationsHandler)
  .route('/', invitationHandler)
  .route('/', machineLearningHandler)
  .route('/', pamHandler)
  .route('/', paymentHandler)
  .route('/', projectHandler)
  .route('/', activityHandler)
  .route('/', projectWebhooksHandler)
  .route('/', projectDocumentHandler)
  .route('/', styleGuideHandler)
  .route('/', reportHandler)
  .route('/', searchHandler)
  .route('/', statsHandler)
  .route('/', surveysHandler)
  .route('/', authHandler)
  .route('/', vendorHandler)

export default app
