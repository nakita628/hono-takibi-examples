import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abTestsHandler,
  advancedHandler,
  basicHandler,
  batchHandler,
  foldersHandler,
  landingPagesHandler,
  multiLanguageHandler,
  websitePagesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', landingPagesHandler)
  .route('/', abTestsHandler)
  .route('/', batchHandler)
  .route('/', foldersHandler)
  .route('/', multiLanguageHandler)
  .route('/', websitePagesHandler)
  .route('/', advancedHandler)
  .route('/', basicHandler)

export default app
