import { OpenAPIHono } from '@hono/zod-openapi'
import {
  archivesHandler,
  boxDocGenHandler,
  boxDocGenTemplatesHandler,
  boxHubCollaborationsHandler,
  boxHubDocumentHandler,
  boxHubItemsHandler,
  boxHubsHandler,
  enterpriseConfigurationsHandler,
  externalUsersHandler,
  shieldListsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', boxDocGenTemplatesHandler)
  .route('/', boxDocGenHandler)
  .route('/', enterpriseConfigurationsHandler)
  .route('/', boxHubsHandler)
  .route('/', boxHubCollaborationsHandler)
  .route('/', boxHubItemsHandler)
  .route('/', boxHubDocumentHandler)
  .route('/', shieldListsHandler)
  .route('/', archivesHandler)
  .route('/', externalUsersHandler)

export default app
