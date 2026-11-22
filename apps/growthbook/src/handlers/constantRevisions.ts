import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ConstantsRevisionsKeyLatestRoute,
  getV1ConstantsRevisionsKeyRoute,
  getV1ConstantsRevisionsKeyVersionMergeStatusRoute,
  getV1ConstantsRevisionsKeyVersionRoute,
  getV1ConstantsRevisionsRoute,
  postV1ConstantsRevisionsKeyRoute,
  postV1ConstantsRevisionsKeyVersionDiscardRoute,
  postV1ConstantsRevisionsKeyVersionPublishRoute,
  postV1ConstantsRevisionsKeyVersionRebaseRoute,
  postV1ConstantsRevisionsKeyVersionRecallReviewRoute,
  postV1ConstantsRevisionsKeyVersionReopenRoute,
  postV1ConstantsRevisionsKeyVersionRequestReviewRoute,
  postV1ConstantsRevisionsKeyVersionRevertRoute,
  postV1ConstantsRevisionsKeyVersionSchedulePublishRoute,
  postV1ConstantsRevisionsKeyVersionSubmitReviewRoute,
  postV1ConstantsRevisionsKeyVersionUndoReviewRoute,
  putV1ConstantsRevisionsKeyVersionArchiveRoute,
  putV1ConstantsRevisionsKeyVersionMetadataRoute,
  putV1ConstantsRevisionsKeyVersionValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const constantRevisionsHandler = app
  .openapi(getV1ConstantsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsKeyLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsKeyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConstantsRevisionsKeyVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConstantsRevisionsKeyVersionValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConstantsRevisionsKeyVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsKeyVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
