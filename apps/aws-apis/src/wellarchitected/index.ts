import { OpenAPIHono } from '@hono/zod-openapi'
import {
  consolidatedReportFormatHandler,
  globalSettingsHandler,
  importLensHandler,
  lensesHandler,
  notificationsHandler,
  shareInvitationsHandler,
  tagsHandler,
  workloadsHandler,
  workloadsSummariesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', workloadsHandler)
  .route('/', lensesHandler)
  .route('/', consolidatedReportFormatHandler)
  .route('/', importLensHandler)
  .route('/', notificationsHandler)
  .route('/', shareInvitationsHandler)
  .route('/', tagsHandler)
  .route('/', workloadsSummariesHandler)
  .route('/', globalSettingsHandler)

export default app
