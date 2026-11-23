import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const recommendationsHandler = app.openapi(getRecommendationsRoute, (c) => {
  throw new Error('Not implemented')
})
