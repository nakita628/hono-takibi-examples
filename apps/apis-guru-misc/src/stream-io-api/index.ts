import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appHandler,
  blocklistsHandler,
  callsHandler,
  campaignsHandler,
  channelsHandler,
  channeltypesHandler,
  checkPushHandler,
  checkSqsHandler,
  commandsHandler,
  connectHandler,
  devicesHandler,
  exportChannelsHandler,
  exportHandler,
  guestHandler,
  importsHandler,
  importUrlsHandler,
  longpollHandler,
  membersHandler,
  messagesHandler,
  moderationHandler,
  ogHandler,
  permissionsHandler,
  pushProvidersHandler,
  queryBannedUsersHandler,
  rateLimitsHandler,
  recipientsHandler,
  rolesHandler,
  searchHandler,
  segmentsHandler,
  syncHandler,
  tasksHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appHandler)
  .route('/', blocklistsHandler)
  .route('/', callsHandler)
  .route('/', campaignsHandler)
  .route('/', channelsHandler)
  .route('/', channeltypesHandler)
  .route('/', checkPushHandler)
  .route('/', checkSqsHandler)
  .route('/', commandsHandler)
  .route('/', connectHandler)
  .route('/', devicesHandler)
  .route('/', exportHandler)
  .route('/', exportChannelsHandler)
  .route('/', guestHandler)
  .route('/', importUrlsHandler)
  .route('/', importsHandler)
  .route('/', longpollHandler)
  .route('/', membersHandler)
  .route('/', messagesHandler)
  .route('/', moderationHandler)
  .route('/', ogHandler)
  .route('/', permissionsHandler)
  .route('/', pushProvidersHandler)
  .route('/', queryBannedUsersHandler)
  .route('/', rateLimitsHandler)
  .route('/', recipientsHandler)
  .route('/', rolesHandler)
  .route('/', searchHandler)
  .route('/', segmentsHandler)
  .route('/', syncHandler)
  .route('/', tasksHandler)
  .route('/', usersHandler)

export default app
