import { OpenAPIHono } from '@hono/zod-openapi'
import { getReviewsIdIndexRoute, getReviewsIndexRoute, postReviewsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewsHandler = app
  .openapi(getReviewsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
