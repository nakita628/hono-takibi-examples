import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta2SubscriptionRoute,
  deleteV1beta2TopicRoute,
  getV1beta2ProjectSubscriptionsRoute,
  getV1beta2ProjectTopicsRoute,
  getV1beta2ResourceGetIamPolicyRoute,
  getV1beta2SubscriptionRoute,
  getV1beta2TopicRoute,
  getV1beta2TopicSubscriptionsRoute,
  postV1beta2ResourceSetIamPolicyRoute,
  postV1beta2ResourceTestIamPermissionsRoute,
  postV1beta2SubscriptionAcknowledgeRoute,
  postV1beta2SubscriptionModifyAckDeadlineRoute,
  postV1beta2SubscriptionModifyPushConfigRoute,
  postV1beta2SubscriptionPullRoute,
  postV1beta2TopicPublishRoute,
  putV1beta2NameRoute,
} from './routes'
import {
  deleteV1beta2SubscriptionRouteHandler,
  deleteV1beta2TopicRouteHandler,
  getV1beta2ProjectSubscriptionsRouteHandler,
  getV1beta2ProjectTopicsRouteHandler,
  getV1beta2ResourceGetIamPolicyRouteHandler,
  getV1beta2SubscriptionRouteHandler,
  getV1beta2TopicRouteHandler,
  getV1beta2TopicSubscriptionsRouteHandler,
  postV1beta2ResourceSetIamPolicyRouteHandler,
  postV1beta2ResourceTestIamPermissionsRouteHandler,
  postV1beta2SubscriptionAcknowledgeRouteHandler,
  postV1beta2SubscriptionModifyAckDeadlineRouteHandler,
  postV1beta2SubscriptionModifyPushConfigRouteHandler,
  postV1beta2SubscriptionPullRouteHandler,
  postV1beta2TopicPublishRouteHandler,
  putV1beta2NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putV1beta2NameRoute, putV1beta2NameRouteHandler)
  .openapi(getV1beta2ProjectSubscriptionsRoute, getV1beta2ProjectSubscriptionsRouteHandler)
  .openapi(getV1beta2ProjectTopicsRoute, getV1beta2ProjectTopicsRouteHandler)
  .openapi(getV1beta2ResourceGetIamPolicyRoute, getV1beta2ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta2ResourceSetIamPolicyRoute, postV1beta2ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta2ResourceTestIamPermissionsRoute,
    postV1beta2ResourceTestIamPermissionsRouteHandler,
  )
  .openapi(deleteV1beta2SubscriptionRoute, deleteV1beta2SubscriptionRouteHandler)
  .openapi(getV1beta2SubscriptionRoute, getV1beta2SubscriptionRouteHandler)
  .openapi(postV1beta2SubscriptionAcknowledgeRoute, postV1beta2SubscriptionAcknowledgeRouteHandler)
  .openapi(
    postV1beta2SubscriptionModifyAckDeadlineRoute,
    postV1beta2SubscriptionModifyAckDeadlineRouteHandler,
  )
  .openapi(
    postV1beta2SubscriptionModifyPushConfigRoute,
    postV1beta2SubscriptionModifyPushConfigRouteHandler,
  )
  .openapi(postV1beta2SubscriptionPullRoute, postV1beta2SubscriptionPullRouteHandler)
  .openapi(deleteV1beta2TopicRoute, deleteV1beta2TopicRouteHandler)
  .openapi(getV1beta2TopicRoute, getV1beta2TopicRouteHandler)
  .openapi(getV1beta2TopicSubscriptionsRoute, getV1beta2TopicSubscriptionsRouteHandler)
  .openapi(postV1beta2TopicPublishRoute, postV1beta2TopicPublishRouteHandler)

export default app
