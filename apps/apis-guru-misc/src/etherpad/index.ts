import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appendTextHandler,
  authorHandler,
  copyPadHandler,
  copyPadWithoutHistoryHandler,
  getAttributePoolHandler,
  getPadIDHandler,
  getRevisionChangesetHandler,
  getSavedRevisionsCountHandler,
  getStatsHandler,
  groupHandler,
  listSavedRevisionsHandler,
  movePadHandler,
  padHandler,
  restoreRevisionHandler,
  saveRevisionHandler,
  sessionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', padHandler)
  .route('/', appendTextHandler)
  .route('/', copyPadHandler)
  .route('/', copyPadWithoutHistoryHandler)
  .route('/', authorHandler)
  .route('/', groupHandler)
  .route('/', sessionHandler)
  .route('/', getAttributePoolHandler)
  .route('/', getPadIDHandler)
  .route('/', getRevisionChangesetHandler)
  .route('/', getSavedRevisionsCountHandler)
  .route('/', getStatsHandler)
  .route('/', listSavedRevisionsHandler)
  .route('/', movePadHandler)
  .route('/', restoreRevisionHandler)
  .route('/', saveRevisionHandler)

export default app
