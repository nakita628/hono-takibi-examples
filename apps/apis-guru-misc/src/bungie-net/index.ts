import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appHandler,
  communityContentHandler,
  contentHandler,
  destiny2Handler,
  fireteamHandler,
  forumHandler,
  GetAvailableLocalesHandler,
  GlobalAlertsHandler,
  groupV2Handler,
  SettingsHandler,
  socialHandler,
  tokensHandler,
  trendingHandler,
  userHandler,
  UserSystemOverridesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appHandler)
  .route('/', communityContentHandler)
  .route('/', contentHandler)
  .route('/', destiny2Handler)
  .route('/', fireteamHandler)
  .route('/', forumHandler)
  .route('/', GetAvailableLocalesHandler)
  .route('/', GlobalAlertsHandler)
  .route('/', groupV2Handler)
  .route('/', SettingsHandler)
  .route('/', socialHandler)
  .route('/', tokensHandler)
  .route('/', trendingHandler)
  .route('/', userHandler)
  .route('/', UserSystemOverridesHandler)

export default app
