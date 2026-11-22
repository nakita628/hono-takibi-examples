import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateTracesIdRoute,
  getV1PrivateTracesExistsRoute,
  getV1PrivateTracesFeedbackScoresNamesRoute,
  getV1PrivateTracesIdRoute,
  getV1PrivateTracesRoute,
  getV1PrivateTracesStatsRoute,
  getV1PrivateTracesThreadsFeedbackScoresNamesRoute,
  getV1PrivateTracesThreadsRoute,
  getV1PrivateTracesThreadsStatsRoute,
  getV1PrivateTracesThreadsThreadIdCommentsCommentIdRoute,
  getV1PrivateTracesTraceIdCommentsCommentIdRoute,
  patchV1PrivateTracesBatchRoute,
  patchV1PrivateTracesCommentsCommentIdRoute,
  patchV1PrivateTracesIdRoute,
  patchV1PrivateTracesThreadsBatchRoute,
  patchV1PrivateTracesThreadsCommentsCommentIdRoute,
  patchV1PrivateTracesThreadsThreadModelIdRoute,
  postV1PrivateTracesBatchRoute,
  postV1PrivateTracesCommentsDeleteRoute,
  postV1PrivateTracesDeleteRoute,
  postV1PrivateTracesIdCommentsRoute,
  postV1PrivateTracesIdFeedbackScoresDeleteRoute,
  postV1PrivateTracesRoute,
  postV1PrivateTracesSearchRoute,
  postV1PrivateTracesThreadsCommentsDeleteRoute,
  postV1PrivateTracesThreadsDeleteRoute,
  postV1PrivateTracesThreadsFeedbackScoresDeleteRoute,
  postV1PrivateTracesThreadsIdCommentsRoute,
  postV1PrivateTracesThreadsRetrieveRoute,
  postV1PrivateTracesThreadsSearchRoute,
  putV1PrivateTracesFeedbackScoresRoute,
  putV1PrivateTracesIdFeedbackScoresRoute,
  putV1PrivateTracesThreadsCloseRoute,
  putV1PrivateTracesThreadsFeedbackScoresRoute,
  putV1PrivateTracesThreadsOpenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tracesHandler = app
  .openapi(postV1PrivateTracesThreadsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesIdFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesThreadsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesThreadsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateTracesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsCommentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsFeedbackScoresDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesCommentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesIdFeedbackScoresDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesThreadsFeedbackScoresNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesThreadsThreadIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesThreadsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesTraceIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesThreadsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesThreadsFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateTracesFeedbackScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesThreadsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateTracesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateTracesExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesThreadsThreadModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesThreadsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateTracesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
