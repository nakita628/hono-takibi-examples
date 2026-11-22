import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReposOwnerRepoPullsCommentsCommentIdRoute,
  deleteReposOwnerRepoPullsPullNumberRequestedReviewersRoute,
  deleteReposOwnerRepoPullsPullNumberReviewsReviewIdRoute,
  getReposOwnerRepoPullsCommentsCommentIdRoute,
  getReposOwnerRepoPullsCommentsRoute,
  getReposOwnerRepoPullsPullNumberCommentsRoute,
  getReposOwnerRepoPullsPullNumberCommitsRoute,
  getReposOwnerRepoPullsPullNumberFilesRoute,
  getReposOwnerRepoPullsPullNumberMergeAsyncUuidRoute,
  getReposOwnerRepoPullsPullNumberMergeRoute,
  getReposOwnerRepoPullsPullNumberRequestedReviewersRoute,
  getReposOwnerRepoPullsPullNumberReviewsReviewIdCommentsRoute,
  getReposOwnerRepoPullsPullNumberReviewsReviewIdRoute,
  getReposOwnerRepoPullsPullNumberReviewsRoute,
  getReposOwnerRepoPullsPullNumberRoute,
  getReposOwnerRepoPullsRoute,
  getReposOwnerRepoStacksRoute,
  getReposOwnerRepoStacksStackNumberRoute,
  patchReposOwnerRepoPullsCommentsCommentIdRoute,
  patchReposOwnerRepoPullsPullNumberRoute,
  postReposOwnerRepoPullsPullNumberCommentsCommentIdRepliesRoute,
  postReposOwnerRepoPullsPullNumberCommentsRoute,
  postReposOwnerRepoPullsPullNumberCopilotCodeReviewRoute,
  postReposOwnerRepoPullsPullNumberRequestedReviewersRerequestRoute,
  postReposOwnerRepoPullsPullNumberRequestedReviewersRoute,
  postReposOwnerRepoPullsPullNumberReviewsReviewIdEventsRoute,
  postReposOwnerRepoPullsPullNumberReviewsRoute,
  postReposOwnerRepoPullsRoute,
  postReposOwnerRepoStacksRoute,
  postReposOwnerRepoStacksStackNumberAddRoute,
  postReposOwnerRepoStacksStackNumberUnstackRoute,
  putReposOwnerRepoPullsPullNumberMergeAsyncRoute,
  putReposOwnerRepoPullsPullNumberMergeRoute,
  putReposOwnerRepoPullsPullNumberReviewsReviewIdDismissalsRoute,
  putReposOwnerRepoPullsPullNumberReviewsReviewIdRoute,
  putReposOwnerRepoPullsPullNumberUpdateBranchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pullsHandler = app
  .openapi(getReposOwnerRepoPullsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoPullsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoPullsPullNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberCopilotCodeReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberMergeAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberMergeAsyncUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberRequestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberRequestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsPullNumberRequestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberRequestedReviewersRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsPullNumberReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberReviewsReviewIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberReviewsReviewIdDismissalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberReviewsReviewIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberUpdateBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStacksStackNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoStacksStackNumberAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoStacksStackNumberUnstackRoute, (c) => {
    throw new Error('Not implemented')
  })
