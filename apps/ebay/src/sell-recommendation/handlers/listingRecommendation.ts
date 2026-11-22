import { OpenAPIHono } from '@hono/zod-openapi'
import { postFindRoute } from '../routes'

const app = new OpenAPIHono()

export const listingRecommendationHandler = app.openapi(postFindRoute, (c) => {
  throw new Error('Not implemented')
})
