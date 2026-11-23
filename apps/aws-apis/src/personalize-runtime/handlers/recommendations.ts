import { OpenAPIHono } from '@hono/zod-openapi'
import { postRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const recommendationsHandler = app.openapi(postRecommendationsRoute, (c) => {
  throw new Error('Not implemented')
})
