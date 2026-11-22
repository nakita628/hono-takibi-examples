import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMovieMovieIdRatingscombinedRoute,
  getMovieMovieIdRatingsRoute,
  getMovieMovieIdRecommendationsRoute,
  getMovieMovieIdRoute,
  getMovieMovieIdSimilarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const moviesHandler = app
  .openapi(getMovieMovieIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMovieMovieIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMovieMovieIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMovieMovieIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMovieMovieIdRatingscombinedRoute, (c) => {
    throw new Error('Not implemented')
  })
