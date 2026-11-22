import { OpenAPIHono } from '@hono/zod-openapi'
import {
  clientErrorResponsesHandler,
  informationResponsesHandler,
  redirectionMessagesHandler,
  serverErrorResponsesHandler,
  successfulResponsesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', successfulResponsesHandler)
  .route('/', redirectionMessagesHandler)
  .route('/', clientErrorResponsesHandler)
  .route('/', serverErrorResponsesHandler)
  .route('/', informationResponsesHandler)

export default app
