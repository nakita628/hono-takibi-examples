import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecommendationsAnimeRoute, getRecommendationsMangaRoute } from '../routes'

const app = new OpenAPIHono()

export const recommendationsHandler = app
  .openapi(getRecommendationsAnimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecommendationsMangaRoute, (c) => {
    throw new Error('Not implemented')
  })
