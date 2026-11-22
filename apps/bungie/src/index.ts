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
  .route('/', userHandler)
  .route('/', contentHandler)
  .route('/', forumHandler)
  .route('/', groupV2Handler)
  .route('/', tokensHandler)
  .route('/', destiny2Handler)
  .route('/', communityContentHandler)
  .route('/', trendingHandler)
  .route('/', fireteamHandler)
  .route('/', socialHandler)
  .route('/', GetAvailableLocalesHandler)
  .route('/', SettingsHandler)
  .route('/', UserSystemOverridesHandler)
  .route('/', GlobalAlertsHandler)

export default app
