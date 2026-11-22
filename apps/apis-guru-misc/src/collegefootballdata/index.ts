import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bettingHandler,
  coachesHandler,
  conferencesHandler,
  draftHandler,
  drivesHandler,
  gamesHandler,
  metricsHandler,
  playersHandler,
  playsHandler,
  rankingsHandler,
  ratingsHandler,
  recruitingHandler,
  statsHandler,
  teamsHandler,
  venuesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', gamesHandler)
  .route('/', coachesHandler)
  .route('/', conferencesHandler)
  .route('/', draftHandler)
  .route('/', drivesHandler)
  .route('/', bettingHandler)
  .route('/', playsHandler)
  .route('/', metricsHandler)
  .route('/', playersHandler)
  .route('/', rankingsHandler)
  .route('/', ratingsHandler)
  .route('/', recruitingHandler)
  .route('/', teamsHandler)
  .route('/', statsHandler)
  .route('/', venuesHandler)

export default app
