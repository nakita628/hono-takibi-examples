import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiReviewChapterRoute,
  deleteApiReviewSeriesRoute,
  getApiReviewAllRoute,
  getApiReviewMySeriesRoute,
  postApiReviewChapterRoute,
  postApiReviewSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reviewHandler = app
  .openapi(postApiReviewSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReviewSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReviewChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReviewChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReviewAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReviewMySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
