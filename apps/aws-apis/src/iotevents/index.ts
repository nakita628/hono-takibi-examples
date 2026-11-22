import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alarmModelsHandler,
  analysisHandler,
  detectorModelsHandler,
  inputRoutingsHandler,
  inputsHandler,
  loggingHandler,
  tagsResourceArnHandler,
  tagsResourceArnTagKeysHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alarmModelsHandler)
  .route('/', detectorModelsHandler)
  .route('/', inputsHandler)
  .route('/', analysisHandler)
  .route('/', loggingHandler)
  .route('/', inputRoutingsHandler)
  .route('/', tagsResourceArnHandler)
  .route('/', tagsResourceArnTagKeysHandler)

export default app
