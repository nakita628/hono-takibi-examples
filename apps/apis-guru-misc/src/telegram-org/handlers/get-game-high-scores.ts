import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetGameHighScoresRoute } from '../routes'

const app = new OpenAPIHono()

export const getGameHighScoresHandler = app.openapi(postGetGameHighScoresRoute, (c) => {
  throw new Error('Not implemented')
})
