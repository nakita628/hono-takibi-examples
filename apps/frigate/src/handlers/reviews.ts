import { OpenAPIHono } from '@hono/zod-openapi'
import { postReviewsDeleteRoute, postReviewsViewedRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewsHandler = app
  .openapi(postReviewsViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
