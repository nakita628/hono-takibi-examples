import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminApiHandler,
  correctTextHandler,
  manageGlossariesHandler,
  manageMultilingualGlossariesHandler,
  manageSpokenTermsHandler,
  manageStyleProfilesHandler,
  metaInformationHandler,
  qualityEvaluationHandler,
  rephraseTextHandler,
  translateDocumentsHandler,
  translateTextHandler,
  translationMemoriesHandler,
  v3Handler,
  voiceAPIHandler,
  voiceTranslateJobHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminApiHandler)
  .route('/', translateTextHandler)
  .route('/', translateDocumentsHandler)
  .route('/', manageGlossariesHandler)
  .route('/', manageMultilingualGlossariesHandler)
  .route('/', rephraseTextHandler)
  .route('/', correctTextHandler)
  .route('/', metaInformationHandler)
  .route('/', manageSpokenTermsHandler)
  .route('/', translationMemoriesHandler)
  .route('/', manageStyleProfilesHandler)
  .route('/', v3Handler)
  .route('/', voiceAPIHandler)
  .route('/', voiceTranslateJobHandler)
  .route('/', qualityEvaluationHandler)

export default app
