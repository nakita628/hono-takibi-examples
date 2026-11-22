import { OpenAPIHono } from '@hono/zod-openapi'
import { postPersonalizeRankingRoute } from '../routes'

const app = new OpenAPIHono()

export const personalizeRankingHandler = app.openapi(postPersonalizeRankingRoute, (c) => {
  throw new Error('Not implemented')
})
