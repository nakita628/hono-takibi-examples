import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReviewReviewIdRoute,
  deleteReviewsRoute,
  getReviewReviewIdRoute,
  getReviewsRoute,
  patchReviewReviewIdRoute,
  postReviewRoute,
  postReviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reviewHandler = app
  .openapi(postReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
