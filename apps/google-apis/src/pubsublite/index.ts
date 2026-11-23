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
} from './routes'
import {
  deleteV1AdminNameRouteHandler,
  getV1AdminNameOperationsRouteHandler,
  getV1AdminNamePartitionsRouteHandler,
  getV1AdminNameRouteHandler,
  getV1AdminNameSubscriptionsRouteHandler,
  getV1AdminNameTopicsRouteHandler,
  getV1AdminParentReservationsRouteHandler,
  getV1AdminParentSubscriptionsRouteHandler,
  getV1AdminParentTopicsRouteHandler,
  getV1CursorParentCursorsRouteHandler,
  patchV1AdminNameRouteHandler,
  postV1AdminNameCancelRouteHandler,
  postV1AdminNameSeekRouteHandler,
  postV1AdminParentReservationsRouteHandler,
  postV1AdminParentSubscriptionsRouteHandler,
  postV1AdminParentTopicsRouteHandler,
  postV1CursorSubscriptionCommitCursorRouteHandler,
  postV1TopicStatsTopicComputeHeadCursorRouteHandler,
  postV1TopicStatsTopicComputeMessageStatsRouteHandler,
  postV1TopicStatsTopicComputeTimeCursorRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1AdminNameRoute, deleteV1AdminNameRouteHandler)
  .openapi(getV1AdminNameRoute, getV1AdminNameRouteHandler)
  .openapi(patchV1AdminNameRoute, patchV1AdminNameRouteHandler)
  .openapi(getV1AdminNameOperationsRoute, getV1AdminNameOperationsRouteHandler)
  .openapi(getV1AdminNamePartitionsRoute, getV1AdminNamePartitionsRouteHandler)
  .openapi(getV1AdminNameSubscriptionsRoute, getV1AdminNameSubscriptionsRouteHandler)
  .openapi(getV1AdminNameTopicsRoute, getV1AdminNameTopicsRouteHandler)
  .openapi(postV1AdminNameCancelRoute, postV1AdminNameCancelRouteHandler)
  .openapi(postV1AdminNameSeekRoute, postV1AdminNameSeekRouteHandler)
  .openapi(getV1AdminParentReservationsRoute, getV1AdminParentReservationsRouteHandler)
  .openapi(postV1AdminParentReservationsRoute, postV1AdminParentReservationsRouteHandler)
  .openapi(getV1AdminParentSubscriptionsRoute, getV1AdminParentSubscriptionsRouteHandler)
  .openapi(postV1AdminParentSubscriptionsRoute, postV1AdminParentSubscriptionsRouteHandler)
  .openapi(getV1AdminParentTopicsRoute, getV1AdminParentTopicsRouteHandler)
  .openapi(postV1AdminParentTopicsRoute, postV1AdminParentTopicsRouteHandler)
  .openapi(getV1CursorParentCursorsRoute, getV1CursorParentCursorsRouteHandler)
  .openapi(
    postV1CursorSubscriptionCommitCursorRoute,
    postV1CursorSubscriptionCommitCursorRouteHandler,
  )
  .openapi(
    postV1TopicStatsTopicComputeHeadCursorRoute,
    postV1TopicStatsTopicComputeHeadCursorRouteHandler,
  )
  .openapi(
    postV1TopicStatsTopicComputeMessageStatsRoute,
    postV1TopicStatsTopicComputeMessageStatsRouteHandler,
  )
  .openapi(
    postV1TopicStatsTopicComputeTimeCursorRoute,
    postV1TopicStatsTopicComputeTimeCursorRouteHandler,
  )

export default app
