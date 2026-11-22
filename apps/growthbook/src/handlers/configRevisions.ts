import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConfigsRevisionsKeyVersionProjectionRoute,
  deleteV1ConfigsRevisionsKeyVersionPropertyRoute,
  getV1ConfigsRevisionsKeyLatestRoute,
  getV1ConfigsRevisionsKeyRoute,
  getV1ConfigsRevisionsKeyVersionMergeStatusRoute,
  getV1ConfigsRevisionsKeyVersionRoute,
  getV1ConfigsRevisionsRoute,
  postV1ConfigsRevisionsKeyRoute,
  postV1ConfigsRevisionsKeyVersionDiscardRoute,
  postV1ConfigsRevisionsKeyVersionPublishRoute,
  postV1ConfigsRevisionsKeyVersionRebaseRoute,
  postV1ConfigsRevisionsKeyVersionRecallReviewRoute,
  postV1ConfigsRevisionsKeyVersionReopenRoute,
  postV1ConfigsRevisionsKeyVersionRequestReviewRoute,
  postV1ConfigsRevisionsKeyVersionRevertRoute,
  postV1ConfigsRevisionsKeyVersionSchedulePublishRoute,
  postV1ConfigsRevisionsKeyVersionSubmitReviewRoute,
  postV1ConfigsRevisionsKeyVersionUndoReviewRoute,
  putV1ConfigsRevisionsKeyVersionArchiveRoute,
  putV1ConfigsRevisionsKeyVersionMetadataRoute,
  putV1ConfigsRevisionsKeyVersionProjectionRoute,
  putV1ConfigsRevisionsKeyVersionPropertyRoute,
  putV1ConfigsRevisionsKeyVersionSchemaRoute,
  putV1ConfigsRevisionsKeyVersionValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configRevisionsHandler = app
  .openapi(getV1ConfigsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsKeyLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsKeyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigsRevisionsKeyVersionPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionProjectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigsRevisionsKeyVersionProjectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsKeyVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
