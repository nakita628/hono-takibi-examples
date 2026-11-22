import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  appHandler,
  authorizationHandler,
  btHandler,
  contentHandler,
  eeHandler,
  itvHandler,
  profileHandler,
  registrationHandler,
  supportHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', profileHandler)
  .route('/', authorizationHandler)
  .route('/', btHandler)
  .route('/', supportHandler)
  .route('/', appHandler)
  .route('/', eeHandler)
  .route('/', contentHandler)
  .route('/', itvHandler)
  .route('/', registrationHandler)

export default app
