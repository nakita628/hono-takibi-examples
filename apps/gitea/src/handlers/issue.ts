import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute,
  deleteReposOwnerRepoIssuesCommentsIdReactionsRoute,
  deleteReposOwnerRepoIssuesCommentsIdRoute,
  deleteReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute,
  deleteReposOwnerRepoIssuesIndexAssigneesRoute,
  deleteReposOwnerRepoIssuesIndexBlocksRoute,
  deleteReposOwnerRepoIssuesIndexCommentsIdRoute,
  deleteReposOwnerRepoIssuesIndexDependenciesRoute,
  deleteReposOwnerRepoIssuesIndexLabelsIdRoute,
  deleteReposOwnerRepoIssuesIndexLabelsRoute,
  deleteReposOwnerRepoIssuesIndexLockRoute,
  deleteReposOwnerRepoIssuesIndexPinRoute,
  deleteReposOwnerRepoIssuesIndexReactionsRoute,
  deleteReposOwnerRepoIssuesIndexRoute,
  deleteReposOwnerRepoIssuesIndexStopwatchDeleteRoute,
  deleteReposOwnerRepoIssuesIndexSubscriptionsUserRoute,
  deleteReposOwnerRepoIssuesIndexTimesIdRoute,
  deleteReposOwnerRepoIssuesIndexTimesRoute,
  deleteReposOwnerRepoLabelsIdRoute,
  deleteReposOwnerRepoMilestonesIdRoute,
  getReposIssuesSearchRoute,
  getReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute,
  getReposOwnerRepoIssuesCommentsIdAssetsRoute,
  getReposOwnerRepoIssuesCommentsIdReactionsRoute,
  getReposOwnerRepoIssuesCommentsIdRoute,
  getReposOwnerRepoIssuesCommentsRoute,
  getReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute,
  getReposOwnerRepoIssuesIndexAssetsRoute,
  getReposOwnerRepoIssuesIndexAssigneesAssigneeRoute,
  getReposOwnerRepoIssuesIndexBlocksRoute,
  getReposOwnerRepoIssuesIndexCommentsRoute,
  getReposOwnerRepoIssuesIndexDependenciesRoute,
  getReposOwnerRepoIssuesIndexLabelsRoute,
  getReposOwnerRepoIssuesIndexReactionsRoute,
  getReposOwnerRepoIssuesIndexRoute,
  getReposOwnerRepoIssuesIndexSubscriptionsCheckRoute,
  getReposOwnerRepoIssuesIndexSubscriptionsRoute,
  getReposOwnerRepoIssuesIndexTimelineRoute,
  getReposOwnerRepoIssuesIndexTimesRoute,
  getReposOwnerRepoIssuesRoute,
  getReposOwnerRepoLabelsIdRoute,
  getReposOwnerRepoLabelsRoute,
  getReposOwnerRepoMilestonesIdRoute,
  getReposOwnerRepoMilestonesRoute,
  patchReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute,
  patchReposOwnerRepoIssuesCommentsIdRoute,
  patchReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute,
  patchReposOwnerRepoIssuesIndexCommentsIdRoute,
  patchReposOwnerRepoIssuesIndexPinPositionRoute,
  patchReposOwnerRepoIssuesIndexRoute,
  patchReposOwnerRepoLabelsIdRoute,
  patchReposOwnerRepoMilestonesIdRoute,
  postReposOwnerRepoIssuesCommentsIdAssetsRoute,
  postReposOwnerRepoIssuesCommentsIdReactionsRoute,
  postReposOwnerRepoIssuesIndexAssetsRoute,
  postReposOwnerRepoIssuesIndexAssigneesRoute,
  postReposOwnerRepoIssuesIndexBlocksRoute,
  postReposOwnerRepoIssuesIndexCommentsRoute,
  postReposOwnerRepoIssuesIndexDeadlineRoute,
  postReposOwnerRepoIssuesIndexDependenciesRoute,
  postReposOwnerRepoIssuesIndexLabelsRoute,
  postReposOwnerRepoIssuesIndexPinRoute,
  postReposOwnerRepoIssuesIndexReactionsRoute,
  postReposOwnerRepoIssuesIndexStopwatchStartRoute,
  postReposOwnerRepoIssuesIndexStopwatchStopRoute,
  postReposOwnerRepoIssuesIndexTimesRoute,
  postReposOwnerRepoIssuesRoute,
  postReposOwnerRepoLabelsRoute,
  postReposOwnerRepoMilestonesRoute,
  putReposOwnerRepoIssuesIndexLabelsRoute,
  putReposOwnerRepoIssuesIndexLockRoute,
  putReposOwnerRepoIssuesIndexSubscriptionsUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueHandler = app
  .openapi(getReposIssuesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesCommentsIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesCommentsIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexAssigneesAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIndexCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexDeadlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIndexLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIndexLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIndexPinPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexStopwatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexStopwatchStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexStopwatchStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexSubscriptionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexSubscriptionsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIndexSubscriptionsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIndexTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIndexTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIndexTimesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoMilestonesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMilestonesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoMilestonesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
