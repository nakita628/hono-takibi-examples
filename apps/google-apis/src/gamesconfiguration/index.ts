import { OpenAPIHono } from '@hono/zod-openapi'
import { achievementConfigurationsHandler, leaderboardConfigurationsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', achievementConfigurationsHandler)
  .route('/', leaderboardConfigurationsHandler)

export default app
