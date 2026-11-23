import { OpenAPIHono } from '@hono/zod-openapi'
import {
  districtHandler,
  districtsHandler,
  eventHandler,
  eventsHandler,
  matchHandler,
  statusHandler,
  teamHandler,
  teamsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', districtHandler)
  .route('/', districtsHandler)
  .route('/', eventHandler)
  .route('/', eventsHandler)
  .route('/', matchHandler)
  .route('/', statusHandler)
  .route('/', teamHandler)
  .route('/', teamsHandler)

export default app
