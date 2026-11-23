import { OpenAPIHono } from '@hono/zod-openapi'
import { getScoreboardRoute } from '../routes'

const app = new OpenAPIHono()

export const scoreboardHandler = app.openapi(getScoreboardRoute, (c) => {
  throw new Error('Not implemented')
})
