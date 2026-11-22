import { OpenAPIHono } from '@hono/zod-openapi'
import { getMoviesRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const movieHandler = app.openapi(getMoviesRecommendationsRoute, (c) => {
  throw new Error('Not implemented')
})
