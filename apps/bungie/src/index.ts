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
  .route('/', getAvailableLocalesHandler)
  .route('/', settingsHandler)
  .route('/', userSystemOverridesHandler)
  .route('/', globalAlertsHandler)

export default app
