import { OpenAPIHono } from '@hono/zod-openapi'
import {
  achievementDefinitionsHandler,
  achievementsHandler,
  applicationsHandler,
  eventsHandler,
  leaderboardsHandler,
  metagameHandler,
  playersHandler,
  revisionsHandler,
  scoresHandler,
  snapshotsHandler,
  statsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', achievementDefinitionsHandler)
  .route('/', achievementsHandler)
  .route('/', applicationsHandler)
  .route('/', eventsHandler)
  .route('/', leaderboardsHandler)
  .route('/', scoresHandler)
  .route('/', metagameHandler)
  .route('/', playersHandler)
  .route('/', snapshotsHandler)
  .route('/', revisionsHandler)
  .route('/', statsHandler)

export default app
