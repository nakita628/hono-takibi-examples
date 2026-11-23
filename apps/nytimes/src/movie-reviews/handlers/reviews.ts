import { OpenAPIHono } from '@hono/zod-openapi'
import { getReviewsResourceTypeJsonRoute, getReviewsSearchJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewsHandler = app
  .openapi(getReviewsSearchJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewsResourceTypeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
