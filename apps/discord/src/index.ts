import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationsHandler,
  channelsHandler,
  gatewayHandler,
  guildsHandler,
  interactionsHandler,
  invitesHandler,
  lobbiesHandler,
  oauth2Handler,
  partnerSdkHandler,
  skusHandler,
  soundboardDefaultSoundsHandler,
  stageInstancesHandler,
  stickerPacksHandler,
  stickersHandler,
  usersHandler,
  voiceHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationsHandler)
  .route('/', channelsHandler)
  .route('/', gatewayHandler)
  .route('/', guildsHandler)
  .route('/', interactionsHandler)
  .route('/', invitesHandler)
  .route('/', lobbiesHandler)
  .route('/', oauth2Handler)
  .route('/', partnerSdkHandler)
  .route('/', skusHandler)
  .route('/', soundboardDefaultSoundsHandler)
  .route('/', stageInstancesHandler)
  .route('/', stickerPacksHandler)
  .route('/', stickersHandler)
  .route('/', usersHandler)
  .route('/', voiceHandler)
  .route('/', webhooksHandler)

export default app
