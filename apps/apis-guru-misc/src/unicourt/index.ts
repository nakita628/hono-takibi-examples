import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attorneyAnalyticsAPIHandler,
  authenticationAPIHandler,
  callbackAPIHandler,
  caseAnalyticsAPIHandler,
  caseDocketAPIHandler,
  caseDocumentsAPIHandler,
  caseExportAPIHandler,
  caseSearchAPIHandler,
  caseTrackingAPIHandler,
  caseUpdateAPIHandler,
  courtAvailabilityAPIHandler,
  courtStandardsAPIHandler,
  judgeAnalyticsAPIHandler,
  lawFirmAnalyticsAPIHandler,
  pacerapiHandler,
  pacerCredentialAPIHandler,
  partyAnalyticsAPIHandler,
  usageAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', caseDocketAPIHandler)
  .route('/', usageAPIHandler)
  .route('/', callbackAPIHandler)
  .route('/', caseDocumentsAPIHandler)
  .route('/', caseAnalyticsAPIHandler)
  .route('/', caseExportAPIHandler)
  .route('/', caseSearchAPIHandler)
  .route('/', caseTrackingAPIHandler)
  .route('/', caseUpdateAPIHandler)
  .route('/', courtAvailabilityAPIHandler)
  .route('/', authenticationAPIHandler)
  .route('/', courtStandardsAPIHandler)
  .route('/', attorneyAnalyticsAPIHandler)
  .route('/', judgeAnalyticsAPIHandler)
  .route('/', lawFirmAnalyticsAPIHandler)
  .route('/', partyAnalyticsAPIHandler)
  .route('/', pacerapiHandler)
  .route('/', pacerCredentialAPIHandler)

export default app
