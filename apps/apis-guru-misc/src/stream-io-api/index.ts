import { OpenAPIHono } from '@hono/zod-openapi'
import {
  callsHandler,
  campaignsHandler,
  channelsHandler,
  customCommandsHandler,
  devicesHandler,
  eventsHandler,
  importsHandler,
  messagesHandler,
  moderationHandler,
  permissionsV2Handler,
  pushHandler,
  settingsHandler,
  tasksHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', settingsHandler)
  .route('/', callsHandler)
  .route('/', campaignsHandler)
  .route('/', channelsHandler)
  .route('/', eventsHandler)
  .route('/', messagesHandler)
  .route('/', customCommandsHandler)
  .route('/', usersHandler)
  .route('/', devicesHandler)
  .route('/', importsHandler)
  .route('/', moderationHandler)
  .route('/', permissionsV2Handler)
  .route('/', pushHandler)
  .route('/', tasksHandler)

export default app
