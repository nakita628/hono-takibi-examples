import { OpenAPIHono } from '@hono/zod-openapi'
import {
  archivesHandler,
  docgenBatchesHandler,
  docgenBatchJobsHandler,
  docgenJobsHandler,
  docgenTemplateJobsHandler,
  docgenTemplatesHandler,
  enterpriseConfigurationsHandler,
  enterpriseHubsHandler,
  externalUsersHandler,
  hubCollaborationsHandler,
  hubDocumentBlocksHandler,
  hubDocumentPagesHandler,
  hubItemsHandler,
  hubsHandler,
  shieldListsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', docgenTemplatesHandler)
  .route('/', docgenJobsHandler)
  .route('/', docgenTemplateJobsHandler)
  .route('/', docgenBatchJobsHandler)
  .route('/', docgenBatchesHandler)
  .route('/', enterpriseConfigurationsHandler)
  .route('/', hubsHandler)
  .route('/', enterpriseHubsHandler)
  .route('/', hubCollaborationsHandler)
  .route('/', hubItemsHandler)
  .route('/', hubDocumentPagesHandler)
  .route('/', hubDocumentBlocksHandler)
  .route('/', shieldListsHandler)
  .route('/', archivesHandler)
  .route('/', externalUsersHandler)

export default app
