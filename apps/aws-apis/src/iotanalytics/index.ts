import { OpenAPIHono } from '@hono/zod-openapi'
import {
  channelsHandler,
  datasetsHandler,
  datastoresHandler,
  loggingHandler,
  messagesHandler,
  pipelineactivitiesHandler,
  pipelinesHandler,
  tagsResourceArnHandler,
  tagsResourceArnTagKeysHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', messagesHandler)
  .route('/', pipelinesHandler)
  .route('/', channelsHandler)
  .route('/', datasetsHandler)
  .route('/', datastoresHandler)
  .route('/', loggingHandler)
  .route('/', tagsResourceArnHandler)
  .route('/', pipelineactivitiesHandler)
  .route('/', tagsResourceArnTagKeysHandler)

export default app
