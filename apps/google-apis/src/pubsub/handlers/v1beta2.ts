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
} from '../routes'

const app = new OpenAPIHono()

export const v1beta2Handler = app
  .openapi(putV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ProjectSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ProjectTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta2SubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2SubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2SubscriptionAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2SubscriptionModifyAckDeadlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2SubscriptionModifyPushConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2SubscriptionPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta2TopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2TopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2TopicSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2TopicPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
