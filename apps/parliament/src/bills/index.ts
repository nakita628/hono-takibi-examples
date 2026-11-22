import { OpenAPIHono } from '@hono/zod-openapi'
import {
  amendmentsHandler,
  billNewsHandler,
  billsHandler,
  billTypesHandler,
  documentsHandler,
  publicationsHandler,
  publicationTypesHandler,
  rssHandler,
  sittingsHandler,
  stagesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', billTypesHandler)
  .route('/', billsHandler)
  .route('/', billNewsHandler)
  .route('/', publicationsHandler)
  .route('/', amendmentsHandler)
  .route('/', publicationTypesHandler)
  .route('/', documentsHandler)
  .route('/', rssHandler)
  .route('/', sittingsHandler)
  .route('/', stagesHandler)

export default app
