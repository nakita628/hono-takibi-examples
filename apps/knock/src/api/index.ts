import { OpenAPIHono } from '@hono/zod-openapi'
import {
  audiencesHandler,
  bulkOperationsHandler,
  channelDataHandler,
  feedsHandler,
  guidesHandler,
  integrationsHandler,
  messagesHandler,
  objectsHandler,
  providersHandler,
  schedulesHandler,
  subscriptionsHandler,
  tenantsHandler,
  usersHandler,
  workflowRecipientRunsHandler,
  workflowsHandler,
  workflowTriggersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', objectsHandler)
  .route('/', guidesHandler)
  .route('/', integrationsHandler)
  .route('/', subscriptionsHandler)
  .route('/', workflowsHandler)
  .route('/', usersHandler)
  .route('/', messagesHandler)
  .route('/', providersHandler)
  .route('/', schedulesHandler)
  .route('/', feedsHandler)
  .route('/', tenantsHandler)
  .route('/', workflowTriggersHandler)
  .route('/', workflowRecipientRunsHandler)
  .route('/', audiencesHandler)
  .route('/', channelDataHandler)
  .route('/', bulkOperationsHandler)

export default app
