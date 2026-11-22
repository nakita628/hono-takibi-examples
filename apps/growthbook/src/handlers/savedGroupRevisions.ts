import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1SavedGroupsRevisionsRoute,
  getV1SavedGroupsRevisionsSavedGroupIdLatestRoute,
  getV1SavedGroupsRevisionsSavedGroupIdRoute,
  getV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusRoute,
  getV1SavedGroupsRevisionsSavedGroupIdVersionRoute,
  postV1SavedGroupsRevisionsSavedGroupIdRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionDiscardRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionItemsAddRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemoveRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionPublishRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionRebaseRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionRecallReviewRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionReopenRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionRequestReviewRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionRevertRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublishRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReviewRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionUndoReviewRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionArchiveRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionConditionRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionMetadataRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersionRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const savedGroupRevisionsHandler = app
  .openapi(getV1SavedGroupsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsSavedGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsSavedGroupIdLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsSavedGroupIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionConditionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionItemsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
