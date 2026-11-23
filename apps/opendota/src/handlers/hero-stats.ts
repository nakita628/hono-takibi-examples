import { OpenAPIHono } from '@hono/zod-openapi'
import { getHeroStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const heroStatsHandler = app.openapi(getHeroStatsRoute, (c) => {
  throw new Error('Not implemented')
})
