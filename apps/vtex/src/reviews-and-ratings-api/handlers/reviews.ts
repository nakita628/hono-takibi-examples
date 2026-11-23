import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteReviewsRoute, getReviewsRoute, postReviewsRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewsHandler = app
  .openapi(deleteReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
