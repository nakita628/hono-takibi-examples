import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecommendationsMoviesIdRoute,
  deleteRecommendationsShowsIdRoute,
  getRecommendationsMoviesRoute,
  getRecommendationsShowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recommendationsHandler = app
  .openapi(getRecommendationsMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecommendationsMoviesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecommendationsShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecommendationsShowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
