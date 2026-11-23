import { OpenAPIHono } from '@hono/zod-openapi'
import {
  answersHandler,
  audioHandler,
  chatHandler,
  classificationsHandler,
  completionsHandler,
  editsHandler,
  embeddingsHandler,
  enginesHandler,
  filesHandler,
  fineTunesHandler,
  imagesHandler,
  modelsHandler,
  moderationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', answersHandler)
  .route('/', audioHandler)
  .route('/', chatHandler)
  .route('/', classificationsHandler)
  .route('/', completionsHandler)
  .route('/', editsHandler)
  .route('/', embeddingsHandler)
  .route('/', enginesHandler)
  .route('/', filesHandler)
  .route('/', fineTunesHandler)
  .route('/', imagesHandler)
  .route('/', modelsHandler)
  .route('/', moderationsHandler)

export default app
