import { OpenAPIHono } from '@hono/zod-openapi'
import { gamesHandler, playersHandler, statsHandler, teamsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', gamesHandler)
  .route('/', playersHandler)
  .route('/', statsHandler)
  .route('/', teamsHandler)

export default app
