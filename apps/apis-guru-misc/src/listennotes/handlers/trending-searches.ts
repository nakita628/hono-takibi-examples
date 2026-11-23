import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrendingSearchesRoute } from '../routes'

const app = new OpenAPIHono()

export const trendingSearchesHandler = app.openapi(getTrendingSearchesRoute, (c) => {
  throw new Error('Not implemented')
})
