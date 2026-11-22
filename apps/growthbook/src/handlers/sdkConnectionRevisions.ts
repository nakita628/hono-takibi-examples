import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute,
  getV1SdkConnectionsRevisionsIdLatestRoute,
  getV1SdkConnectionsRevisionsIdRoute,
  getV1SdkConnectionsRevisionsIdVersionMergeStatusRoute,
  getV1SdkConnectionsRevisionsIdVersionRoute,
  getV1SdkConnectionsRevisionsRoute,
  postV1SdkConnectionsRevisionsIdRoute,
  postV1SdkConnectionsRevisionsIdVersionDiscardRoute,
  postV1SdkConnectionsRevisionsIdVersionPublishRoute,
  postV1SdkConnectionsRevisionsIdVersionRebaseRoute,
  postV1SdkConnectionsRevisionsIdVersionRecallReviewRoute,
  postV1SdkConnectionsRevisionsIdVersionReopenRoute,
  postV1SdkConnectionsRevisionsIdVersionRequestReviewRoute,
  postV1SdkConnectionsRevisionsIdVersionRevertRoute,
  postV1SdkConnectionsRevisionsIdVersionSchedulePublishRoute,
  postV1SdkConnectionsRevisionsIdVersionSubmitReviewRoute,
  postV1SdkConnectionsRevisionsIdVersionUndoReviewRoute,
  postV1SdkConnectionsRevisionsIdVersionWebhooksRoute,
  putV1SdkConnectionsRevisionsIdVersionArchiveRoute,
  putV1SdkConnectionsRevisionsIdVersionSettingsRoute,
  putV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sdkConnectionRevisionsHandler = app
  .openapi(getV1SdkConnectionsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsIdLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsIdVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkConnectionsRevisionsIdVersionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkConnectionsRevisionsIdVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
