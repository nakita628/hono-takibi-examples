import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AdminNameRoute,
  getV1AdminNameOperationsRoute,
  getV1AdminNamePartitionsRoute,
  getV1AdminNameRoute,
  getV1AdminNameSubscriptionsRoute,
  getV1AdminNameTopicsRoute,
  getV1AdminParentReservationsRoute,
  getV1AdminParentSubscriptionsRoute,
  getV1AdminParentTopicsRoute,
  getV1CursorParentCursorsRoute,
  patchV1AdminNameRoute,
  postV1AdminNameCancelRoute,
  postV1AdminNameSeekRoute,
  postV1AdminParentReservationsRoute,
  postV1AdminParentSubscriptionsRoute,
  postV1AdminParentTopicsRoute,
  postV1CursorSubscriptionCommitCursorRoute,
  postV1TopicStatsTopicComputeHeadCursorRoute,
  postV1TopicStatsTopicComputeMessageStatsRoute,
  postV1TopicStatsTopicComputeTimeCursorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1AdminNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AdminNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AdminNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AdminNameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AdminNamePartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AdminNameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AdminNameTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AdminNameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AdminNameSeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AdminParentReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AdminParentReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AdminParentSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AdminParentSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AdminParentTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AdminParentTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CursorParentCursorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CursorSubscriptionCommitCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TopicStatsTopicComputeHeadCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TopicStatsTopicComputeMessageStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TopicStatsTopicComputeTimeCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
