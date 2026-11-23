import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecommendationsAvailableGenreSeedsRoute, getRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const recommendationsHandler = app
  .openapi(getRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecommendationsAvailableGenreSeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
