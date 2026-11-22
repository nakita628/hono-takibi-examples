import { OpenAPIHono } from '@hono/zod-openapi'
import { getGamesV1AchievementsRoute } from '../routes'

const app = new OpenAPIHono()

export const achievementDefinitionsHandler = app.openapi(getGamesV1AchievementsRoute, (c) => {
  throw new Error('Not implemented')
})
