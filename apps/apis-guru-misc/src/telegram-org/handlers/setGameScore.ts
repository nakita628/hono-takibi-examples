import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetGameScoreRoute } from '../routes'

const app = new OpenAPIHono()

export const setGameScoreHandler = app.openapi(postSetGameScoreRoute, (c) => {
  throw new Error('Not implemented')
})
