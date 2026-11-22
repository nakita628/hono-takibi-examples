import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationHandler,
  backupRestoreHandler,
  businessProfileHandler,
  certificatesHandler,
  contactsHandler,
  groupsHandler,
  healthHandler,
  mediaHandler,
  messagesHandler,
  profileHandler,
  registrationHandler,
  settingsHandler,
  twoStepVerificationHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', registrationHandler)
  .route('/', applicationHandler)
  .route('/', certificatesHandler)
  .route('/', contactsHandler)
  .route('/', groupsHandler)
  .route('/', healthHandler)
  .route('/', mediaHandler)
  .route('/', messagesHandler)
  .route('/', twoStepVerificationHandler)
  .route('/', backupRestoreHandler)
  .route('/', businessProfileHandler)
  .route('/', profileHandler)
  .route('/', settingsHandler)
  .route('/', usersHandler)

export default app
