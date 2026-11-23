import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReviewReviewIdViewedRoute,
  getReviewActivityMotionRoute,
  getReviewEventEventIdRoute,
  getReviewEventIdPreviewRoute,
  getReviewReviewIdClipMp4Route,
  getReviewReviewIdRoute,
  getReviewRoute,
  getReviewSummaryRoute,
  postReviewSummarizeStartStartTsEndEndTsRoute,
  putReviewReviewIdRegenerateDescriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reviewHandler = app
  .openapi(getReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewSummaryRoute, (c) => {
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
  .openapi(getReviewReviewIdClipMp4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewEventIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
