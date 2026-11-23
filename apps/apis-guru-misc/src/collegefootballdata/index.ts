import { OpenAPIHono } from '@hono/zod-openapi'
import {
  calendarHandler,
  coachesHandler,
  conferencesHandler,
  draftHandler,
  drivesHandler,
  gameHandler,
  gamesHandler,
  linesHandler,
  liveHandler,
  metricsHandler,
  playerHandler,
  playHandler,
  playsHandler,
  ppaHandler,
  rankingsHandler,
  ratingsHandler,
  recordsHandler,
  recruitingHandler,
  rosterHandler,
  scoreboardHandler,
  statsHandler,
  talentHandler,
  teamsHandler,
  venuesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', calendarHandler)
  .route('/', coachesHandler)
  .route('/', conferencesHandler)
  .route('/', draftHandler)
  .route('/', drivesHandler)
  .route('/', gameHandler)
  .route('/', gamesHandler)
  .route('/', linesHandler)
  .route('/', liveHandler)
  .route('/', metricsHandler)
  .route('/', playHandler)
  .route('/', playerHandler)
  .route('/', playsHandler)
  .route('/', ppaHandler)
  .route('/', rankingsHandler)
  .route('/', ratingsHandler)
  .route('/', recordsHandler)
  .route('/', recruitingHandler)
  .route('/', rosterHandler)
  .route('/', scoreboardHandler)
  .route('/', statsHandler)
  .route('/', talentHandler)
  .route('/', teamsHandler)
  .route('/', venuesHandler)

export default app
