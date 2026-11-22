import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecommendationsAvailableGenreSeedsRoute } from '../routes'

const app = new OpenAPIHono()

export const genresHandler = app.openapi(getRecommendationsAvailableGenreSeedsRoute, (c) => {
  throw new Error('Not implemented')
})
