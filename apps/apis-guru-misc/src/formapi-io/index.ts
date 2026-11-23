import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationHandler,
  combinedSubmissionsHandler,
  combinedSubmissionsV2Handler,
  customFilesHandler,
  dataRequestsHandler,
  foldersHandler,
  submissionsHandler,
  templatesDescCachedUploadHandler,
  templatesDescHtmlHandler,
  templatesHandler,
  uploadsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authenticationHandler)
  .route('/', combinedSubmissionsHandler)
  .route('/', combinedSubmissionsV2Handler)
  .route('/', customFilesHandler)
  .route('/', dataRequestsHandler)
  .route('/', foldersHandler)
  .route('/', submissionsHandler)
  .route('/', templatesHandler)
  .route('/', templatesDescCachedUploadHandler)
  .route('/', templatesDescHtmlHandler)
  .route('/', uploadsHandler)

export default app
