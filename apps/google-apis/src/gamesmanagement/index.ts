import { OpenAPIHono } from '@hono/zod-openapi'
import {
  achievementsHandler,
  applicationsHandler,
  eventsHandler,
  playersHandler,
  scoresHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', achievementsHandler)
  .route('/', applicationsHandler)
  .route('/', playersHandler)
  .route('/', eventsHandler)
  .route('/', scoresHandler)

export default app
