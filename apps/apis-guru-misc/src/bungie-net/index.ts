import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appHandler,
  communityContentHandler,
  contentHandler,
  destiny2Handler,
  fireteamHandler,
  forumHandler,
  getAvailableLocalesHandler,
  globalAlertsHandler,
  groupV2Handler,
  settingsHandler,
  socialHandler,
  tokensHandler,
  trendingHandler,
  userHandler,
  userSystemOverridesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appHandler)
  .route('/', communityContentHandler)
  .route('/', contentHandler)
  .route('/', destiny2Handler)
  .route('/', fireteamHandler)
  .route('/', forumHandler)
  .route('/', getAvailableLocalesHandler)
  .route('/', globalAlertsHandler)
  .route('/', groupV2Handler)
  .route('/', settingsHandler)
  .route('/', socialHandler)
  .route('/', tokensHandler)
  .route('/', trendingHandler)
  .route('/', userHandler)
  .route('/', userSystemOverridesHandler)

export default app
