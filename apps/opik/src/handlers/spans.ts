import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateSpansIdRoute,
  getV1PrivateSpansExistsRoute,
  getV1PrivateSpansFeedbackScoresNamesRoute,
  getV1PrivateSpansIdRoute,
  getV1PrivateSpansRoute,
  getV1PrivateSpansSpanIdCommentsCommentIdRoute,
  getV1PrivateSpansStatsRoute,
  patchV1PrivateSpansBatchRoute,
  patchV1PrivateSpansCommentsCommentIdRoute,
  patchV1PrivateSpansIdRoute,
  postV1PrivateSpansBatchRoute,
  postV1PrivateSpansCommentsDeleteRoute,
  postV1PrivateSpansIdCommentsRoute,
  postV1PrivateSpansIdFeedbackScoresDeleteRoute,
  postV1PrivateSpansRoute,
  postV1PrivateSpansSearchRoute,
  putV1PrivateSpansFeedbackScoresRoute,
  putV1PrivateSpansIdFeedbackScoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spansHandler = app
  .openapi(postV1PrivateSpansIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateSpansIdFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateSpansBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateSpansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateSpansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansCommentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansIdFeedbackScoresDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansSpanIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateSpansFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateSpansSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateSpansExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateSpansCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
