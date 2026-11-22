import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authorizationHandler,
  checkAPIUsageHandler,
  languageDatasetsHandler,
  languageExamplesHandler,
  languageModelsHandler,
  languagePredictionHandler,
  languageTrainingHandler,
  visionDatasetsHandler,
  visionExamplesHandler,
  visionModelsHandler,
  visionPredictionHandler,
  visionTrainingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', checkAPIUsageHandler)
  .route('/', languageDatasetsHandler)
  .route('/', languageExamplesHandler)
  .route('/', languageModelsHandler)
  .route('/', languagePredictionHandler)
  .route('/', languageTrainingHandler)
  .route('/', authorizationHandler)
  .route('/', visionExamplesHandler)
  .route('/', visionDatasetsHandler)
  .route('/', visionModelsHandler)
  .route('/', visionPredictionHandler)
  .route('/', visionTrainingHandler)

export default app
