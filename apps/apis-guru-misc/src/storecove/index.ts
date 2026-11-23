import { OpenAPIHono } from '@hono/zod-openapi'
import {
  discoveryHandler,
  documentSubmissionsHandler,
  invoiceSubmissionsHandler,
  legalEntitiesHandler,
  purchaseInvoicesHandler,
  receivedDocumentsHandler,
  webhookInstancesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', discoveryHandler)
  .route('/', documentSubmissionsHandler)
  .route('/', invoiceSubmissionsHandler)
  .route('/', legalEntitiesHandler)
  .route('/', purchaseInvoicesHandler)
  .route('/', receivedDocumentsHandler)
  .route('/', webhookInstancesHandler)

export default app
