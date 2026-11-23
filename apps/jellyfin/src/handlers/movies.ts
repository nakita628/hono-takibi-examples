import { OpenAPIHono } from '@hono/zod-openapi'
import { getMoviesItemIdSimilarRoute, getMoviesRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const moviesHandler = app
  .openapi(getMoviesItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoviesRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
