import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReviewsReviewIdRoute,
  getReviewsReviewIdRoute,
  getReviewsRoute,
  patchReviewsReviewIdRoute,
  postReviewsReviewIdRoute,
  postReviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reviewsFindAndModifyReviewsHandler = app
  .openapi(getReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
