import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReviewReviewIdViewedRoute,
  getReviewActivityMotionRoute,
  getReviewEventEventIdRoute,
  getReviewIdsRoute,
  getReviewReviewIdRoute,
  getReviewRoute,
  getReviewSummaryRoute,
  postReviewsDeleteRoute,
  postReviewSummarizeStartStartTsEndEndTsRoute,
  postReviewsViewedRoute,
  putReviewReviewIdRegenerateDescriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reviewHandler = app
  .openapi(getReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewsViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewActivityMotionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewEventEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReviewReviewIdRegenerateDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReviewReviewIdViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReviewSummarizeStartStartTsEndEndTsRoute, (c) => {
    throw new Error('Not implemented')
  })
