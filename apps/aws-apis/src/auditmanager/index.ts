import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  assessmentFrameworksFrameworkTypeHandler,
  assessmentFrameworksHandler,
  assessmentFrameworkShareRequestsHandler,
  assessmentFrameworkShareRequestsRequestTypeHandler,
  assessmentReportsHandler,
  assessmentsHandler,
  controlsControlTypeHandler,
  controlsHandler,
  dataSourceKeywordsSourceHandler,
  delegationsHandler,
  insightsHandler,
  notificationsHandler,
  servicesHandler,
  settingsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assessmentsHandler)
  .route('/', assessmentFrameworksHandler)
  .route('/', controlsHandler)
  .route('/', assessmentFrameworkShareRequestsHandler)
  .route('/', accountHandler)
  .route('/', delegationsHandler)
  .route('/', insightsHandler)
  .route('/', servicesHandler)
  .route('/', settingsHandler)
  .route('/', assessmentFrameworkShareRequestsRequestTypeHandler)
  .route('/', assessmentFrameworksFrameworkTypeHandler)
  .route('/', assessmentReportsHandler)
  .route('/', controlsControlTypeHandler)
  .route('/', dataSourceKeywordsSourceHandler)
  .route('/', notificationsHandler)
  .route('/', tagsHandler)

export default app
