import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appsHandler,
  bulkrequestsHandler,
  fieldsHandler,
  filesHandler,
  formsHandler,
  guestsHandler,
  pluginsHandler,
  previewsHandler,
  recordsHandler,
  searchsHandler,
  spacesHandler,
  templatesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsHandler)
  .route('/', bulkrequestsHandler)
  .route('/', fieldsHandler)
  .route('/', filesHandler)
  .route('/', formsHandler)
  .route('/', guestsHandler)
  .route('/', pluginsHandler)
  .route('/', previewsHandler)
  .route('/', recordsHandler)
  .route('/', searchsHandler)
  .route('/', spacesHandler)
  .route('/', templatesHandler)

export default app
