import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSuggestionsHandler,
  getVersionsHandler,
  manageSuggestionsHandler,
  matchReceivedSKUsHandler,
  skuApprovalSettingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', getSuggestionsHandler)
  .route('/', skuApprovalSettingsHandler)
  .route('/', matchReceivedSKUsHandler)
  .route('/', manageSuggestionsHandler)
  .route('/', getVersionsHandler)

export default app
