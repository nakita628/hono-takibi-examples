import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  actionTargetsHandler,
  administratorHandler,
  associationsHandler,
  associationsSecurityControlIdHandler,
  findingAggregatorHandler,
  findingsHandler,
  insightsHandler,
  invitationsHandler,
  masterHandler,
  membersHandler,
  organizationHandler,
  productsHandler,
  productSubscriptionsHandler,
  securityControlsHandler,
  standardsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', administratorHandler)
  .route('/', masterHandler)
  .route('/', standardsHandler)
  .route('/', securityControlsHandler)
  .route('/', associationsHandler)
  .route('/', findingsHandler)
  .route('/', actionTargetsHandler)
  .route('/', findingAggregatorHandler)
  .route('/', insightsHandler)
  .route('/', membersHandler)
  .route('/', invitationsHandler)
  .route('/', accountsHandler)
  .route('/', organizationHandler)
  .route('/', productsHandler)
  .route('/', productSubscriptionsHandler)
  .route('/', associationsSecurityControlIdHandler)
  .route('/', tagsHandler)

export default app
