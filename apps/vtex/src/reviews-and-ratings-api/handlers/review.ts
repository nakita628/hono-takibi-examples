import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReviewReviewIdRoute,
  getReviewReviewIdRoute,
  patchReviewReviewIdRoute,
  postReviewRoute,
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
