import { OpenAPIHono } from '@hono/zod-openapi'
import { getRankingsRoute } from '../routes'

const app = new OpenAPIHono()

export const rankingsHandler = app.openapi(getRankingsRoute, (c) => {
  throw new Error('Not implemented')
})
