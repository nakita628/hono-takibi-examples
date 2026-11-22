import { OpenAPIHono } from '@hono/zod-openapi'
import {
  additionalTaxIdentifiersHandler,
  administrationsHandler,
  discoveryHandler,
  documentSubmissionsHandler,
  invoiceSubmissionsHandler,
  legalEntitiesHandler,
  peppolIdentifiersHandler,
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
  .route('/', additionalTaxIdentifiersHandler)
  .route('/', administrationsHandler)
  .route('/', peppolIdentifiersHandler)
  .route('/', receivedDocumentsHandler)
  .route('/', purchaseInvoicesHandler)
  .route('/', webhookInstancesHandler)

export default app
