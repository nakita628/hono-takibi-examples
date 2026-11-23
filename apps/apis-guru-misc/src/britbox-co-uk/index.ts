import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  authorizationHandler,
  btHandler,
  checkSubscriptionHandler,
  configHandler,
  eeBtHandler,
  eeHandler,
  itemsHandler,
  itvHandler,
  listsHandler,
  pageHandler,
  plansHandler,
  registerHandler,
  requestPasswordResetHandler,
  resetPasswordHandler,
  samsungPreviewHandler,
  schedulesHandler,
  searchHandler,
  verifyEmailHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', authorizationHandler)
  .route('/', btHandler)
  .route('/', checkSubscriptionHandler)
  .route('/', configHandler)
  .route('/', eeBtHandler)
  .route('/', eeHandler)
  .route('/', itemsHandler)
  .route('/', itvHandler)
  .route('/', listsHandler)
  .route('/', pageHandler)
  .route('/', plansHandler)
  .route('/', registerHandler)
  .route('/', requestPasswordResetHandler)
  .route('/', resetPasswordHandler)
  .route('/', samsungPreviewHandler)
  .route('/', schedulesHandler)
  .route('/', searchHandler)
  .route('/', verifyEmailHandler)

export default app
