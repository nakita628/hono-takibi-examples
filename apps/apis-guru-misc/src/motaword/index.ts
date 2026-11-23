import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  asyncHandler,
  blogsHandler,
  cacheHandler,
  commissionsHandler,
  continuousProjectsHandler,
  corporateHandler,
  corporatesHandler,
  deleteAccountHandler,
  documentsHandler,
  downgradeProofreaderHandler,
  earningsHandler,
  formatsHandler,
  freezeAccountHandler,
  glossaryHandler,
  integrationsHandler,
  invitationHandler,
  languagesHandler,
  locationHandler,
  makeProofreaderHandler,
  meHandler,
  mlHandler,
  notificationsHandler,
  pamHandler,
  passwordHandler,
  paymentHandler,
  permissionsHandler,
  profilePictureHandler,
  projectsHandler,
  reportsHandler,
  resendEmailConfirmationHandler,
  responsivityHandler,
  searchHandler,
  statsHandler,
  stringsHandler,
  styleguideHandler,
  surveysHandler,
  swaggerHandler,
  tokenHandler,
  unfreezeAccountHandler,
  userGroupsHandler,
  userIdHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', asyncHandler)
  .route('/', blogsHandler)
  .route('/', cacheHandler)
  .route('/', commissionsHandler)
  .route('/', continuousProjectsHandler)
  .route('/', corporateHandler)
  .route('/', corporatesHandler)
  .route('/', deleteAccountHandler)
  .route('/', documentsHandler)
  .route('/', downgradeProofreaderHandler)
  .route('/', earningsHandler)
  .route('/', formatsHandler)
  .route('/', freezeAccountHandler)
  .route('/', glossaryHandler)
  .route('/', integrationsHandler)
  .route('/', invitationHandler)
  .route('/', languagesHandler)
  .route('/', locationHandler)
  .route('/', makeProofreaderHandler)
  .route('/', meHandler)
  .route('/', mlHandler)
  .route('/', notificationsHandler)
  .route('/', pamHandler)
  .route('/', passwordHandler)
  .route('/', paymentHandler)
  .route('/', permissionsHandler)
  .route('/', profilePictureHandler)
  .route('/', projectsHandler)
  .route('/', reportsHandler)
  .route('/', resendEmailConfirmationHandler)
  .route('/', responsivityHandler)
  .route('/', searchHandler)
  .route('/', statsHandler)
  .route('/', stringsHandler)
  .route('/', styleguideHandler)
  .route('/', surveysHandler)
  .route('/', swaggerHandler)
  .route('/', tokenHandler)
  .route('/', unfreezeAccountHandler)
  .route('/', userGroupsHandler)
  .route('/', usersHandler)
  .route('/', userIdHandler)

export default app
